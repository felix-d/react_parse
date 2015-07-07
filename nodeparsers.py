import re, os
from reactproject import Action, ActionDispatch, ActionCall, ListenedStore

class NodeParser(object):
    """A NodeParser parses a file for relevant information

    Args:
        node (Node): A node 

    """

    # the regex for required user created files
    require_re = re.compile("require\([\'\"](?P<filename>\.{1,2}.*)[\'\"]\)", re.M | re.I)
    # regex for required node modules
    req_nodemodules = re.compile("require\([\'\"](?P<filename>[a-zA-Z]*)[\'\"]\)", re.M | re.I)

    def __init__(self, project_parser):
        self.project_parser = project_parser

    def parse(self, node):
        self.node = node
        os.chdir(self.node.dir_path)

        with open(self.node.file_path) as f:


            self.node.file_content = f.read()

            self._specific_parse()

            self.node.node_modules = re.findall(self.req_nodemodules, self.node.file_content)
            self.node.required_files = re.findall(self.require_re, self.node.file_content)

            for i, m in enumerate(self.node.required_files):

                # if there is no file extension, add .js
                if not re.match(r'.*\.[a-zA-Z]{1,5}$', m):
                    m = m + ".js"

                # cause we're adding the full path, not the relative path
                self.node.required_files[i] = os.path.abspath(m)

                # we add it to the requiredby dict
                if not self.node.required_files[i] in self.project_parser.track_requiredby:
                    self.project_parser.track_requiredby[self.node.required_files[i]] = [self.node.file_path]
                else:
                    self.project_parser.track_requiredby[self.node.required_files[i]].append(self.node.file_path)

    def _specific_parse(self):
        pass



class ComponentNodeParser(NodeParser):

    actions_calls_re = re.compile(r'(?P<actions>[^\s]*actions?)\.(?P<call>[^\s()]*)\((?P<args>[^\s]*)\)', re.I)
    listening_to_re = re.compile(r'(?P<store>\w+stores?)\.mixin', re.I)

    def _specific_parse(self):
        actions = re.findall(self.actions_calls_re, self.node.file_content)
        stores = re.findall(self.listening_to_re, self.node.file_content)
        self.listened_stores_detail = [ListenedStore(a) for a in stores] 
        self.node.actions_detail = [Action(a[0], a[1], a[2]) for a in actions]
        

class ActionsNodeParser(NodeParser):
    actions_dispatch_re = re.compile(r'(?P<action>\w+)(: *function\(\w*\)|\(\w*\))(?:.*?)actiontype:(?:\s*?)(?P<constants>\w+)(\.actiontypes)?\.(?P<constant>\w+)', re.I | re.S)

    def _specific_parse(self):
        actions_dispatches = re.findall(self.actions_dispatch_re, self.node.file_content)
        self.node.actions_dispatches_detail = [ActionDispatch(a[0], a[1], a[2]) for a in actions_dispatches]


class StoreNodeParser(NodeParser):
    actions_calls_re = re.compile(r'case (?P<constants>\w+constants?)(?:\.\w+)?\.(?P<constant>\w+):', re.I)

    def _specific_parse(self):
        actions_calls = re.findall(self.actions_calls_re, self.node.file_content)
        self.node.actions_calls_detail = [ActionCall(a[0], a[1]) for a in actions_calls]


class ConstantsNodeParser(NodeParser):
    pass


class OtherNodeParser(NodeParser):
    pass
