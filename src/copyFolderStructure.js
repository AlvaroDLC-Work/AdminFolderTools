function getFileTree() {
  // The ID of the folder you want to get the file tree from
  var folderId = '1VRrg9DJhHcCUFsEJi2UPPLNvsTpo7bMd';
  // Get the folder by ID
  var folder = DriveApp.getFolderById(folderId);
  // Initialize an array to hold the file tree
  var fileTree = [];
  // Recursively get the file tree
  getFolderTree(folder, "", fileTree);
  // Join the file tree array into a single string with new lines
  var fileTreeString = fileTree.join("\n");
  // Create a new text file in the root of your Drive
  var file = DriveApp.createFile("FileTree.txt", fileTreeString);
  // Log the URL of the created file
  Logger.log("File Tree saved to: " + file.getUrl());
}

function getFolderTree(folder, indent, fileTree) {
  // Add the current folder to the file tree
  fileTree.push(indent + folder.getName() + "/");
  // Increase the indent for child files and folders
  indent += "  ";
  // Get all files in the current folder
  var files = folder.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    fileTree.push(indent + file.getName());
  }
  // Get all subfolders in the current folder
  var subfolders = folder.getFolders();
  while (subfolders.hasNext()) {
    var subfolder = subfolders.next();
    getFolderTree(subfolder, indent, fileTree);
  }
}


// -------------------------------------------------------------------------TEST CODE NO FUNCTION YET

// -----------------made whit copiplot windows ---------------
// --------------------------------------------------------------
function genFolderTree() {
    try {
        var foldername = 'RootDir'; // Cambia esto al nombre de tu carpeta raíz
        var folderlisting = 'TreeView_' + foldername;
        var parentFolder = DriveApp.getFoldersByName(foldername).next();
        var ss = SpreadsheetApp.create(folderlisting);
        var sheet = ss.getActiveSheet();
        var frontCell = [];
        sheet.appendRow([foldername]).getCurrentCell().setFontWeight('bold').setFontColor('red');
        frontCell.push(" ");
        getChildNode(parentFolder, sheet, frontCell);
        var files = parentFolder.getFiles();
        while (files.hasNext()) {
            frontCell.push(files.next().getName());
            sheet.appendRow(frontCell);
            frontCell.pop();
        }
    } catch (e) {
        Logger.log(e.toString());
    }
}

function getChildNode(parent, sheet, frontCell) {
    var childFolders = parent.getFolders();
    while (childFolders.hasNext()) {
        var childFolder = childFolders.next();
        frontCell.push(childFolder.getName())
        sheet.appendRow(frontCell);
        sheet.getRange(sheet.getLastRow(), frontCell.length).setFontWeight('bold').setFontColor('red');
        frontCell.pop();
        var files = childFolder.getFiles();
        frontCell.push(" ");
        var start_row = 0;
        var row_no = 0;
        // Aquí puedes calcular el tamaño de archivo para cada archivo en 'files'
    }
}
// -----------------made whit copiplot windows ---------------
// ---------------------------------------------------------------
