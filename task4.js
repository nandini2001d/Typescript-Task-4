//.............................(task 4).................................
//function 3 param should do mul or div
//check if return value is between 10-50
//return true or false
//function for mul and div two numbers
var mathOperation = function (num1, num2, oprator) {
    if (oprator === 'mul') {
        return num1 * num2;
    }
    else {
        return num1 / num2;
    }
};
//boolean Condition checked
var booleanValueRetun = function () {
    var outputNumber = mathOperation(10, 2, "mul"); //stored mathOperation function result in the variable => call main function
    console.log('outputNumber : ', outputNumber);
    //checked if the mathOperation function result is grater than 10 and less than 50  => in between 10-50
    if (outputNumber > 10 && outputNumber < 50) {
        return true;
    }
    else {
        return false;
    }
};
//mainFun function
var mainFuc = function () {
    var output = booleanValueRetun(); //stored boolean condition function result in variable => call booleanValueRetun function
    console.log('output : ', output);
};
mainFuc(); //calling main function
