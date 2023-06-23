const  util = require('util');
function generateAttribute(attName,attProps){
    const objectString = util.inspect(attProps, { compact: false, breakLength: Infinity });  
    console.log("objectString",objectString)  
    return (`${attName}: ${objectString}`)
}
module.exports =  generateAttribute;