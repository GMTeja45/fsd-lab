function callback(msg){
    return msg;
}
function greet(name, callback){
    return callback("hi "+ name+" good evening");
}
let result = greet("teja", callback);
console.log(result)