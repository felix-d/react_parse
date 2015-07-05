import os, re
from constants import *


class Project(object):
    """A React project

    Attributes:
        nodes (List[Node])
    """

    def __init__(self, root):
        self.nodes = []
        self.root = root

    def get_data(self):
        return "data"


class Node(object):
    """A node is a file

    Args:
        file_name (str): The file name
        dir_path (str): The full path of the file directory
        parent_dir (str): The grand parent directory
        project (Project): The project

    """
    uniqid_counter = 0

    def __init__(self, file_name, dir_path, parent_dir, project):
        self.file_name = file_name
        self.dir_path = dir_path
        self.name = dir_path + file_name
        self.parent_dir = parent_dir
        self.uniqid = Node.uniqid_counter
        self.project = project
        self.required_files = []
        self.required_by = []
        self.node_modules = []
        self.node_type = None

    def get_data(self):
        return dict(
            file_name=self.file_name,
            dir_path=self.dir_path,
            node_type=self.node_type,
            name=self.name,
            parent_dir=self.parent_dir,
            uniqid=self.uniqid,
            required_by=[r.name for r in self.required_by],
            required_files=[r.name for r in self.required_files],
        )

    def __str__(self):
        return str(self.get_data())
        

class ComponentNode(Node):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.node_type = COMPONENT


class ActionsNode(Node):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.node_type = ACTION

    
class ConstantsNode(Node):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.node_type = CONSTANT


class StoreNode(Node):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.node_type = STORE


class OtherNode(Node):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.node_type = OTHER
    
