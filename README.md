# AdminFolderTools
Get folde structure include file size from a Google Drive Folder

Folders

1. src = Source Code

Files

1. fileTreeApp.html = Interface
2. fileTreeScript.js = Functions
3. .clasp.json | appsscript.json = "clasp" config files

FUNCTIONS

* getFileTreeWithSize(folderId)
    Get data to Eval - Folders
* getFolderTreeWithSize(folder, indent, fileTree)
    Get data to Eval - Files and Folders
* formatFileSize(size)
    Set Fotmat to file Size | Ex. KB, MB, etc
* currentDate()
    Set current timestamp. 
    Uses: in Log and File Name 

