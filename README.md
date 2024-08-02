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

SPANISH

Esta App nos ayuda a extraer la estructura de Carpetas y Archivos de una ubicacion dentro de nuestro Google Drive .

Pasos a seguir:
Copia el ID de la carpeta que deseas Evaluar
Pega el ID en el recuadro de Texto
Dale al boton "Evaluar Carpeta"
Dependiendo de la cantidad de rchivos y carpetas existentes tardara un poco.
Al finalzar aparecera un mensaje indicando que se ha completado el proceso de evaluación.
Resultados:
Ve dentro l a carpeta que evaluate con el boton "Abrir Carpeta" o atravez de "Google Drive". 
Ahi dentro encontraras un archivo de nombre FileTree_DDMMYY-HHMM.txt. 
En el cual se encuentran listados los archivos con sus respetivas carpeta y tamaño de archivo. 
Donde DDMMYY-HHMM (DiaMesAño-HoraMinuto) es el codigo generado por cada ejecucion. 

Todos los Derechos Reservados - Alvaro DLC 2024 - La Paz Bolivia
