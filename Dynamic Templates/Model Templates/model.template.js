const generateAttribute = require("./attribute.template");
function mergeAttributes(attributes){
    let mergedAttributes = "";
    for(attribute of attributes){
        mergedAttributes += generateAttribute(attribute.name,attribute.props)+',\n';
    }
    return mergedAttributes;
}
function generateModel(modelName,modelAttributes){
    const mergedAttributes = mergeAttributes(modelAttributes);
    const  Model = ` "use strict";
    import { Model } from 'sequelize';
    module.exports = (sequelize, DataTypes) => {${modelName}.init,{${mergedAttributes}}
}`
    return Model;
}

module.exports =  generateModel;