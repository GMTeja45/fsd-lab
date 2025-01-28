
function multiply(num, callback) {
    const result = num * 2;
    callback(result);
}


function subtract(num, callback) {
    const result = num - 3;
    callback(result);
}


function add(num, callback) {
    const result = num + 10;
    callback(result);
}


function processNumber(num) {
    multiply(num, function(result1) {
        subtract(result1, function(result2) {
            add(result2, function(result3) {
                console.log("Final result:", result3);
            });
        });
    });
}


processNumber(5);  