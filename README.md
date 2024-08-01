# AdminFolderTools
Get folde structure include file size from a Google Drive Folder

Folders

1. src = Source Code

Files

1. fileTreeApp.html = Web Interface in HTML
2. css.html = Style Sheet for Web Interface
    
    "css.html" NOT "css.css" because Google Script doesn't allow *.css files only html and js/gs Files
3. fileTreeScript.js = Functions
4. .clasp.json | appsscript.json = "clasp" config files

FUNCTIONS

1. getFileTreeWithSize(folderId)

    Get data to Eval - Folders
2. getFolderTreeWithSize(folder, indent, fileTree)
    
    Get data to Eval - Files and Folders
3. formatFileSize(size)
    
    Set Fotmat to file Size | Ex. KB, MB, etc
4.  currentDate()
    
    Set current timestamp. 
    Uses: Log and File Name 

