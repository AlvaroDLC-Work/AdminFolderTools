function doGet(e){
  var htmlOutput = HtmlService.createTemplateFromFile('fileTreeApp');
  return htmlOutput.evaluate();

}

function getFileTreeWithSize(folderId) {
  //  set data now in order to put in output name file
  //  Date
  currentDateTime = currentDate()

  // -----------------------------
  // The ID of the folder you want to get the file tree from
  // var folderId = '1VRrg9DJhHcCUFsEJi2UPPLNvsTpo7bMd';
  
  // Get the folder by ID
  var folder = DriveApp.getFolderById(folderId);
  
  // Initialize an array to hold the file tree
  var fileTree = [];
  
  // Recursively get the file tree
  getFolderTreeWithSize(folder, "", fileTree);
  
  // Join the file tree array into a single string with new lines
  var fileTreeString = fileTree.join("\n");
  
  // Create a new text file in the root of your Drive
  var file = folder.createFile("FileTree_" + currentDateTime + ".txt", fileTreeString);
  
  // Log the URL of the created file
  Logger.log("File Tree with Size saved to: " + file.getUrl());
}

function getFolderTreeWithSize(folder, indent, fileTree) {
  // Add the current folder to the file tree
  fileTree.push(indent + folder.getName() + "/");
  
  // Increase the indent for child files and folders
  indent += "  ";
  
  // Get all files in the current folder
  var files = folder.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    var fileSize = formatFileSize(file.getSize());
    fileTree.push(indent + file.getName() + " (" + fileSize + ")");
  }
  
  // Get all subfolders in the current folder
  var subfolders = folder.getFolders();
  while (subfolders.hasNext()) {
    var subfolder = subfolders.next();
    getFolderTreeWithSize(subfolder, indent, fileTree);
  }
}

function formatFileSize(size) {
  // Function to format the file size
  if (size < 1024) {
    return size + ' B';
  } else if (size < 1048576) {
    return (size / 1024).toFixed(2) + ' KB';
  } else if (size < 1073741824) {
    return (size / 1048576).toFixed(2) + ' MB';
  } else {
    return (size / 1073741824).toFixed(2) + ' GB';
  }
}

function currentDate(){
  // Day data create ----------------------------
  var day = new Date().getDate()
  if (day < 10) {
    day = "0" + day.toString();
  }
  // Month data create ----------------------------
  var month = new Date().getMonth() + 1;
  if (month < 10) {
    month = month.toString();
    month = "0" + month;
  }
  // Year data create ----------------------------
  var year = new Date().getFullYear().toString();
  var year = year.slice(2,4);
  
  // Date data create ----------------------------

  var date = day + month + year;

  // Time data create (no seconds) ----------------------------
  
  var hour = new Date().getHours();
  if (hour < 10) {
    hour = "0" + hour.toString();
  }
  
  var minute = new Date().getMinutes();
  if (minute < 10) {
    minute = "0" + minute.toString();
  }

  var time = hour.toString() + minute.toString();

  // Current Day Time less seconds data create ----------------------------
  
  var currentDateTime = date + "-" + time;
  
  return currentDateTime
}






















