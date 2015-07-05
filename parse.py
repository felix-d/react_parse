#!/usr/bin/python
import sys, os, json
from parsing import ProjectParser
from reactproject import Project


def main():
    root_wd = os.getcwd()
    app_root = sys.argv[1]
    project = Project(app_root)
    project_parser = ProjectParser()
    project_parser.parse(project)
    os.chdir(root_wd)
    with open('app.json', 'w') as json_file:
        json_file.write(json.dumps(project.get_data(), indent=4))
    
    
if __name__ == "__main__":
    main()
