import os, re, json
from collections import namedtuple
from constants import *


Action = namedtuple('Action',('action_type', 'call', 'args'))
ActionDispatch = namedtuple('ActionDispatch', ('action', 'constants', 'constant'))
ActionCall = namedtuple('ActionCall', ('constants', 'constant'))
ListenedStore = namedtuple('ListenedStore', ('store'))


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
        self.file_name_no_ext = os.path.splitext(file_name)[0]
        self.dir_path = dir_path
        self.file_path = dir_path + file_name
        self.parent_dir = parent_dir
        self.project = project
        self.required_files = []
        self.required_by = []
        self.node_modules = []
        self.node_type = None
        self.file_content = None
        self.uniqid = Node.uniqid_counter
        Node.uniqid_counter += 1

    def get_data(self):
        return dict(
            file_name=self.file_name,
            dir_path=self.dir_path,
            node_type=self.node_type,
            file_path=self.file_path,
            parent_dir=self.parent_dir,
            uniqid=self.uniqid,
            required_by=[r.file_path for r in self.required_by],
            required_files=[r.file_path for r in self.required_files],
        )

    def __str__(self):
        return str(self.get_data())
        

class ComponentNode(Node):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.node_type = COMPONENT
        self.actions_detail = []
        self.actions = []
        self.listened_stores_detail = []
        self.listened_stores = []

    def get_data(self):
        data = super().get_data()
        data['actions'] = self.actions
        data['listened_stores'] = self.listened_stores
        return data


class ActionsNode(Node):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.node_type = ACTION
        self.actions_dispatches_detail = []
        self.actions_dispatches = []
        self.linked_stores = []

    def get_data(self):
        data = super().get_data()
        data['actions_dispatches'] = self.actions_dispatches
        return data
    

class ConstantsNode(Node):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.node_type = CONSTANT


class StoreNode(Node):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.actions_calls = []
        self.action_nodes_listened = []
        self.node_type = STORE

    def get_data(self):
        data = super().get_data()
        data['actions_calls'] = self.actions_calls
        return data


class OtherNode(Node):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.node_type = OTHER
