import re, os, json, math
from constants import OTHER, COMPONENT, ACTION, STORE, CONSTANT
from reactproject import Project, Node, ComponentNode, ConstantsNode, ActionsNode, StoreNode
from nodeparsers import ComponentNodeParser, ActionsNodeParser, StoreNodeParser, ConstantsNodeParser, OtherNodeParser


class ProjectParser(object):
    """A project parser that parses file names
    
    The project parser is given a root and parses the files and folders to create
    the different nodes.
    
    Args:
        root (string): The root path of the project
    
    Attributes:
        project (Project)
    """

    component_regex = re.compile('components?', re.IGNORECASE)
    constants_regex = re.compile('constants?', re.IGNORECASE)
    actions_regex = re.compile('actions?', re.IGNORECASE)
    store_regex = re.compile('stores?', re.IGNORECASE)

    regexes = dict(
        COMPONENT=component_regex,
        CONSTANT=constants_regex,
        ACTION=actions_regex,
        STORE=store_regex
    )

    def __init__(self):
        self.track_requiredby = dict()

    def parse(self, project):
        self.project = project
        self.track_requiredby = dict()
        self._walk_project()
        self._add_requiredby()
        self._required_files_path_to_nodes()
        self._process_flux()

    def _required_files_path_to_nodes(self):
        for node in self.project.nodes:
            node.required_files = self._files_paths_to_nodes(node.required_files)

    def _add_requiredby(self):
        for node in self.project.nodes:
            if node.file_path in self.track_requiredby:
                requiredby_names = self.track_requiredby[node.file_path]
                node.required_by = self._files_paths_to_nodes(requiredby_names)

    def _files_paths_to_nodes(self, files_paths):
        nodes = []
        for file_path in files_paths:
            for node in self.project.nodes:
                if file_path == node.file_path:
                    nodes.append(node)
        return nodes
                    
        
    def _get_file_type(self, file_path):
        for k in self.regexes:
            if self.regexes[k].match(file_path):
                return k
        return OTHER

    def _process_flux(self):
        for n in self.project.nodes:
            
            if n.node_type == COMPONENT:
                # we add stores to listened stores
                for ls in n.stores_parsed_info:
                    for m in self.project.nodes:
                        if ls.store ==  m.file_name_no_ext:
                            if m not in n.stores:
                                n.stores.append(m)

                            if n not in m.components:
                                m.components.append(n)

                # we add actions nodes to actions
                for a in n.actions_parsed_info:
                    for m in self.project.nodes:
                        if a.action_type == m.file_name_no_ext:
                            if m not in n.actions:
                                n.actions.append(m)
                            
            elif n.node_type == ACTION:
                # we add linked stores to actions and vice versa
                for ad in n.actions_dispatches_parsed_info:
                    for m in self.project.nodes:
                        if m.node_type == STORE:
                            for ac in m.actions_calls_parsed_info:
                                if ac.constant == ad.constant and ac.constants == ad.constants:
                                    if n not in n.stores:
                                        n.stores.append(m)
                                    if m not in m.actions:
                                        m.actions.append(n)
            
    def _walk_project(self):
        """Walks through the project and creates the nodes.
        """

        for dir_path, dirs, files in os.walk(self.project.root):
            
            parent_dir = os.path.basename(os.path.split(dir_path)[0])
            containing_dir = os.path.basename(dir_path)
            dir_path = dir_path + '/' if dir_path[-1] != '/' else dir_path

            # If the folder isnt a test folder
            if not containing_dir == '__tests__':

                # will change
                file_type = self._get_file_type(containing_dir)

                for file_name in files:

                    _, file_ext = os.path.splitext(file_name)

                    if file_ext in ['.js', '.jsx', '.json']:

                        if file_type == COMPONENT:
                            node  = ComponentNode(file_name, dir_path, parent_dir, self.project)
                            node_parser = ComponentNodeParser(self)

                        elif file_type == STORE:
                            node = StoreNode(file_name, dir_path, parent_dir, self.project)
                            node_parser = StoreNodeParser(self)

                        elif file_type == ACTION:
                            node = ActionsNode(file_name, dir_path, parent_dir, self.project)
                            node_parser = ActionsNodeParser(self)

                        elif file_type == CONSTANT:
                            node = ConstantsNode(file_name, dir_path, parent_dir, self.project)
                            node_parser = ConstantsNodeParser(self)

                        else:
                            node = Node(file_name, dir_path, parent_dir, self.project)
                            node_parser = OtherNodeParser(self)

                        node_parser.parse(node)
                        self.project.nodes.append(node)


    def get_json(self):
        res = dict(nodes=[], links=[])
        for n in self.project.nodes:
            if n.node_type not in [COMPONENT, STORE, ACTION]:
                continue
            node_info = dict()
            node_info['id'] = n.uniqid
            node_info['name'] = n.file_name
            node_info['size'] = math.log(len(n.required_by) + 1)

            if n.node_type == COMPONENT:
                node_info['type'] = COMPONENT
                for a in n.actions:
                    link = dict(source=n.uniqid, target=a.uniqid)
                    if link not in res['links']:
                        res['links'].append(link)

            elif n.node_type == STORE:
                node_info['type'] = STORE
                for c in n.components:
                    link = dict(source=n.uniqid, target=c.uniqid)
                    if link not in res['links']:
                        res['links'].append(link)

            elif n.node_type == ACTION:
                node_info['type'] = ACTION
                for s in n.stores:
                    link = dict(source=n.uniqid, target=s.uniqid)
                    if link not in res['links']:
                        res['links'].append(link)

            res['nodes'].append(node_info)

        # We set the target and source depending on index values
        for n in res['links']:
            for i, m in enumerate(res['nodes']):
                if n['source'] == m['id']:
                    n['source'] = i
                elif n['target'] == m['id']:
                    n['target'] = i

        # we change the size to be between 5 and 15
        min_s = max_s = None
        
        for n in res['nodes']:
            if min_s is None or max_s is None:
                min_s = max_s = n['size']
            elif n['size'] < min_s:
                min_s = n['size']
            elif n['size'] > max_s:
                max_s = n['size']

        old_range = max_s - min_s
        new_min = 8
        new_max = 20
        new_range = new_max - new_min
        
        for n in res['nodes']:
            n['size'] = (((n['size'] - min_s) * new_range) / old_range) + new_min

        return json.dumps(res, indent=4)
