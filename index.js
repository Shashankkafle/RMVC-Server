const  generateAttribute  = require("./Dynamic Templates/Model Templates/attribute.template");
const generateModel = require("./Dynamic Templates/Model Templates/model.template");
const sourceObject = require("./sourceScript");
const fs = require("fs");

//generate model files
for(model of sourceObject.models){
    const dir = `${sourceObject.projectDir}`;
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
   const generatedModel =  generateModel(model.name,model.attributes)
     fs.writeFile(`${dir}/${model.name}.model.js`, generatedModel,"utf-8", function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}
