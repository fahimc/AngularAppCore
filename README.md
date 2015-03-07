# AngularAppCore
An AngularJS Application core.

Contains:  

- Grunt 
- LESS  
- Watch  
- Express  
- Concat    
- Livereload  


##Prerequisite

*NodeJS  
*Grunt

##Install

```
npm install
```

##Run

Run grunt which will spin up a server and watch files for changes and reload the page.

```
grunt
```

##Folder Structure

*App - This is where you develop and contains your source  
*Dist - Compiled version of your app and used by grunt  
*Less - Contains Core less files which compiles to CSS

##Grunt Tasks

```
grunt cm --name=moduleName
grunt rm --name=moduleName
```

- cm = create a new module. option --name is the name if the module. Creates all the files, folders for the module and adds it to the app.  
- rm = deletes a new module. option --name is the name of the module. Removes the module from the app and deletes the folder.
