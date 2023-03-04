/* 
Write a function that takes in a number and returns one of the following:

If the number is divisible by 3, return 'Fizz'.
If the number is divisible by 5, return 'Buzz'.
If the number is divisible by 3 and 5, return 'FizzBuzz'
Else, return the number passed as an argument */


function buzz(n){
    if(n%3==0 && n%5==0){
        return "FizzBuzz"
    }
    else if(n%5==0){
        return "Buzz"
    }
    else if(n%3==0){
        return "Fizz"
    }
    else{
        return n
    }
}

module.exports=buzz;