$(document).ready(function(){

        //Select random number at start of game between 19-120
        var Random = Math.floor(Math.random()*101+19)

        //Writes in random number to #number-to-guess
        $("#number-to-guess").text(Random);

        //Random number for each jewel between 1-12
        var num1 = Math.floor(Math.random()*11+1)
        var num2 = Math.floor(Math.random()*11+1)
        var num3 = Math.floor(Math.random()*11+1)
        var num4 = Math.floor(Math.random()*11+1)

        //Keeps count of wins/losses
        var userTotal = 0;
        var wins = 0;
        var losses = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    //Reset the game
    function reset() {
        Random = Math.floor(Math.random()*101+19);
        console.log(Random)
        $("#number-to-guess").text(Random);
        num1 = Math.floor(Math.random()*11+1);
        num2 = Math.floor(Math.random()*11+1);
        num3 = Math.floor(Math.random()*11+1);
        num4 = Math.floor(Math.random()*11+1);
        userTotal = 0;
        $("#finalScore").text(userTotal);
    }


})