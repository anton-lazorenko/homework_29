"use strict"
const fileSystem = {
 name: "root",
 type: "folder",
 children: [
  {
   name: "folder1",
   type: "folder",
   children: [
    { name: "file1.txt", type: "file" },
    { name: "file2.txt", type: "file" }
   ]
  },
  {
   name: "folder2",
   type: "folder",
   children: [
    { name: "file3.txt", type: "file" }
   ]
  }
 ]
};

function deepFreeze(fileSystem) { 
    if( typeof fileSystem === 'Object' || Object.isFrozen(fileSystem) === true ||  fileSystem === null) {
        return  
      }
      Object.freeze( fileSystem );
      Object.getOwnPropertyNames(fileSystem).forEach(function(key) {
         deepFreeze(fileSystem[key])
    }); 
}
deepFreeze(fileSystem)

