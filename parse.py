#!/usr/bin/python
import sys, os, json, argparse
from parsing import ProjectParser
from reactproject import Project


def main():
    # we'll need to set it back after parsing
    root_wd = os.getcwd()

    # args parsing
    parser = argparse.ArgumentParser(description='Extract data from a React + Flux project')
    parser.add_argument('directory',help='directory to use',action='store')
    args = parser.parse_args()

    project = Project(args.directory)
    project_parser = ProjectParser()
    project_parser.parse(project)

    # we change it back to write app.json in the right directory
    os.chdir(root_wd)

    # we write the results
    with open('app.json', 'w') as json_file:
        json_file.write(project_parser.get_json())
    
    
if __name__ == "__main__":
    main()
