import os, re, json
from collections import namedtuple
from constants import *


Action = namedtuple('Action',('action_type', 'call', 'args'))
ActionDispatch = namedtuple('ActionDispatch', ('action', 'constants', 'constant'))
ActionCall = namedtuple('ActionCall', ('constants', 'constant'))
ListenedStore = namedtuple('ListenedStore', ('store'))


class Project(object):
    """A React project

    Attrs:
        nodes (List[Node])

    """

    def __init__(self, root):
        self.nodes = []
        self.root = root


class Node(object):
    """A node is a file

    Args:
        file_name (str): The file name
        dir_path (str): The full path of the file directory
        parent_dir (str): The grand parent directory
        project (Project): The project
    
    Attrs:
        file_name (str)
        file_name_no_ext (str)
        dir_path (str)
        file_path (str)
        parent_dir (str)
        project (Project)
        required_nodes (list)
        required_by (list)
        node_modules (list)
        node_type (str)
        file_content (str)
        uniqid (int)

    """
    uniqid_counter = -1

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
        """Returns a dict with the node data"""
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
    """A Component node
    
    Attrs:
        node_type (str): The node type
        actions_parsed_info (list[Action]): A list of tuples containing parsed info about called actions
        stores_parsed_info (list[ListenedStore]): A list of tuples containing parsed info about listened stores
        actions (list[ActionsNode]): A list of actions nodes called by the component
        stores (list[StoreNode]): A list of store nodes to which the component listens to

    """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.node_type = COMPONENT

        self.actions_parsed_info = []
        self.stores_parsed_info = []

        self.actions = []
        self.stores = []

    def get_data(self):
        """Add additional data to the node data and returns it"""
        data = super().get_data()
        data['actions'] = self.actions
        data['stores'] = self.stores
        return data


class ActionsNode(Node):
    """A actions node
    
    Attrs:
        node_type (str): The node type
        actions_dispatches_parsed_info (list[Action]): A list of tuples containing parsed info about called actions
        actions_dispatches (list[ListenedStore]): A list of tuples containing parsed info about listened stores
        stores (list[StoreNode]): A list of store nodes to which the component listens to

    """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.node_type = ACTION
        self.actions_dispatches_parsed_info = []
        self.stores = []

    def get_data(self):
        """Add additional data to the node data and returns it"""
        data = super().get_data()
        return data
    

class ConstantsNode(Node):
    """A constant node
    
    Attrs:
        node_type (str): The node type

    """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.node_type = CONSTANT


class StoreNode(Node):
    """A constant node
    
    Attrs:
        node_type (str): The node type
        actions_calls_parsed_info (list[ActionCall])
        actions (list[ActionsNode])

    """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.node_type = STORE

        self.actions_calls_parsed_info = []
        self.actions = []
        self.components = []

    def get_data(self):
        """Add additional data to the node data and returns it"""
        data = super().get_data()
        return data


class OtherNode(Node):
    """Other nodes
    
    Attrs:
        node_type (str): The node type

    """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.node_type = OTHER
