$(document).ready(function () {
    /* Prompt to enter number and convert to integer */
    var number = parseInt(prompt("Please enter a number from 1 to 100", ""));

    function fizzbuzz(max) {
        for (var i = 1; i <= max; i++) {
            if (i % 5 == 0 && i % 3 == 0) {
                document.write("Fizz Buzz <br>");
            } else if (i % 3 == 0) {
                document.write("Fizz <br>");
            } else if (i % 5 == 0) {
                document.write("Buzz <br>");
            } else {
                document.write(i + "<br>");
            }
        }
    }

    if (isNaN(number)) {
        promptForNumber("It is not a number. Please enter a number from 1 to 100", "");
    } else if (number % 1 !== 0) {
        prompt("Please enter a whole number only!");
    } else {
        fizzbuzz(number);
    }

    $("#list").append(fizzBuzzFunc());

    /* Clears list */
    $(document).on('click', '#reset', function () {
        $('#list').empty();
    });
});
