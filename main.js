
$(document).ready(function(){
    for (i=1; i<51; i++){
        if (i%3 === 0 && i%5 === 0){
            $('body').append("<p id ='fizzbuzz'>FizzBuzz!</p>");
        } else if (i%5 === 0){
            $('body').append("<p id = 'buzz'>Buzz</p>");
        } else if (i%3 === 0){
            $('body').append("<p id = 'fizz'>Fizz</p>");
        } else {
            console.log("no worky :(");
       }
    }
});