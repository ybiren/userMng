const fs = require('fs');
const filename = 'app/data/users.json';


exports.readFromJsonFile = () => {

    return new Promise((resolve,reject) => {
      
    fs.readFile (filename, "utf8", function(err, content) {
          if(err) {
            reject(err);    
          }else {
            resolve(content);    
          }
      });
  }); 
};



exports.writeToJsonFile = (content) =>{

  return new Promise((resolve,reject) => {
    fs.writeFile (filename, JSON.stringify(content), function(err) {
        if (err) {
          reject(err); 
        } else {
          resolve();  
        }
     });
  }); 
}; 
