import re, os

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
        file_path = self.node.dir_path + self.node.file_name

        with open(file_path) as f:

            self._specific_parse()

            self.node.file_content = f.read()

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
                    self.project_parser.track_requiredby[self.node.required_files[i]] = [file_path]
                else:
                    self.project_parser.track_requiredby[self.node.required_files[i]].append(file_path)

    def _specific_parse(self):
        pass


class ComponentNodeParser(NodeParser):
    pass


class ActionsNodeParser(NodeParser):
    pass


class ConstantsNodeParser(NodeParser):
    pass


class StoreNodeParser(NodeParser):
    pass


class OtherNodeParser(NodeParser):
    pass
