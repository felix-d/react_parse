#!/usr/bin/python
import sys, os, re, json

# the regex to test agains directories names and determine file type
regexes = dict(
    component=re.compile('components?', re.IGNORECASE),
    constant=re.compile('constants?', re.IGNORECASE),
    action=re.compile('actions?', re.IGNORECASE),
    store=re.compile('stores?', re.IGNORECASE)
)

# the regex for required user created files
require_re = re.compile("require\([\'\"](?P<filename>\.{1,2}.*)[\'\"]\)", re.M | re.I)
# regex for required node modules
req_nodemodules = re.compile("require\([\'\"](?P<filename>[a-zA-Z]*)[\'\"]\)", re.M | re.I)

# what will be returned as json
result = []

# a dictionnary to keep track of required files
requiredby = dict()

# the current root
root_wd = os.getcwd()

def main():
    app = sys.argv[1]
    walkdir(app)
    add_requiredby()
    add_links()
    os.chdir(root_wd)
    with open('app.json', 'w') as json_file:
        json_file.write(json.dumps(result, indent=4))


def walkdir(app):
    """
    Walks the directory tree and create nodes for relevant files
    """
    identifier = 0

    for root, dirs, files in os.walk(app):

        containing_folder = os.path.basename(root)
        parent_folder = os.path.basename(os.path.split(root)[0])

        root = root + '/'


        # If the folder isnt a test folder
        if not containing_folder == '__tests__':

            file_type = 'other'

            # we determine if the folder contains components, constants
            # , actions or stores
            for k in regexes:
                if regexes[k].match(containing_folder):
                    file_type = k
                    
            for f in files:
                _, file_ext = os.path.splitext(f)

                if file_ext in ['.js', '.jsx', '.json']:

                    data = dict()

                    # we parse the file
                    data['requires'], data['nodemodules']  = parsefile(root, f)
                    data['type'] = file_type
                    data['name'] = f
                    data['id'] = identifier
                    data['root'] = root
                    data['parent'] = parent_folder

                    identifier += 1

                    result.append(data)
                    

def parsefile(root, f):
    """
    Parses a file to extract required files and node modules
    """
    cwd = root
    file_path = root + f
    with open(file_path) as f:
         
        os.chdir(cwd)
        file_content = f.read()

        node_modules = re.findall(req_nodemodules, file_content)
        files = re.findall(require_re, file_content)

        for i, m in enumerate(files):

            # if there is no file extension, add .js
            if not re.match(r'.*\.[a-zA-Z]{1,5}$', m):
                m = m + ".js"

            # cause we're adding the full path, not the relative path
            files[i] = os.path.abspath(m)

            # we add it to the requiredby dict
            if not files[i] in requiredby:
                requiredby[files[i]] = [file_path]
            else:
                requiredby[files[i]].append(file_path)

        return files, node_modules

                        
def add_requiredby():
    """
    After the files have been parsed, we add requiredby attributes to every
    nodes
    """
    for node in result:
        full_name = node['root'] + node['name']
        if full_name in requiredby:
            node['requiredby'] = requiredby[full_name]
    
    
def add_links():
    """
    adds links as numeric values
    """
    for node in result:
        node['links'] = []
        for req in node['requires']:
            for othernode in result:
                if othernode['root'] + othernode['name'] == req:
                    node['links'].append(othernode['id'])

    
if __name__ == "__main__":
    main()
