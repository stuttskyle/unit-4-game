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

    //Adds to wins!
    function winner() {
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    //Adds to losses :(
    function loser() {
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }

        //On Click for Crystals
        $("#one").on("click", function() {
            userTotal += num1; //Check this if something is messed up
            $("#finalScore").text(userTotal);
                if (userTotal == Random) {
                    winner();
                } else if (userTotal > Random){
                    loser();
                }
        })
        $("#two").on("click", function() {
            userTotal += num2;
            $("#finalScore").text(userTotal);
                if (userTotal == Random) {
                    winner();
                } else if (userTotal > Random){
                    loser();
                }
        })
        $("#three").on("click", function() {
            userTotal += num3;
            $("#finalScore").text(userTotal);
                if (userTotal == Random) {
                    winner();
                } else if (userTotal > Random){
                    loser();
                }
        })
        $("#four").on("click", function() {
            userTotal += num4;
            $("#finalScore").text(userTotal);
                if (userTotal == Random) {
                    winner();
                } else if (userTotal > Random){
                    loser();
                }
        });

})