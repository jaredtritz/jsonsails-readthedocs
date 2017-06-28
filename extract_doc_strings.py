#!/usr/bin/env python3
import re
import os

# find doc strings and copy them to their own files in the doc repo

class Parser:
    def __init__(self):
        self.current_file = ""
        self.comment_name = ""
        self.comment_buffer = []
        self.output_dir = "source/comments"
        self.funk_pnt = self.findStartComment


    def findStartComment(self, line):
        rx_comment = re.compile('COMMENT_NAME: ([\w-]+)')
        res = rx_comment.search(line)
        if res:
            self.comment_name = res.group(1)
            self.funk_pnt = self.readComment
            self.comment_buffer = []

    def dedent(self):
        min_white = 99999
        for cc in self.comment_buffer:
            if cc.strip() == '':
                continue
            white_spaces = len(cc) - len(cc.lstrip())
            if white_spaces < min_white:
                min_white = white_spaces
        dedent_list = []
        for cc in self.comment_buffer:
            dedent_list.append(cc[min_white:])
        self.comment_buffer = dedent_list

    def readComment(self, line):
        rx_comment = re.compile('COMMENT_END')
        if rx_comment.search(line):
            # save comment to file
            ofile_name = '_'.join([self.current_file, self.comment_name]) + '.js'
            ofile_path = os.path.join(self.output_dir, ofile_name)
            with open(ofile_path, 'w+') as out_file: 
                self.dedent()
                for line in self.comment_buffer:
                    out_file.write(line)
            # start looking for next comment
            self.funk_pnt = self.findStartComment
        else:
            self.comment_buffer.append(line)
         
file_list = [
'../ezbuilder/src/javascript/authoring/renderer/UFileWrapper.es6',
'../ezbuilder/src/javascript/authoring/renderer/ConfigApi.jsx',
'../ezbuilder/src/javascript/server/node-sfile.es6',
'../ezbuilder/src/javascript/authoring/renderer/UfileTagReplacer.es6',
'../ezbuilder/src/javascript/authoring/renderer/ModuleInterpreter.es6',
'../ezbuilder/src/javascript/authoring/renderer/JsLibMgr.es6',
'../ezbuilder/src/javascript/authoring/jsapi/NodeApi.es6'
]

parser = Parser()

for ifile in file_list:
    parser.current_file = os.path.split(ifile)[1]
    # read in the file
    print('extracting comments: ', ifile)
    with open(ifile, 'rb') as source_file: 
        for line in source_file:
            parser.funk_pnt(line.decode())
