// John Smith
// 10/17/14
// Assignment: Goal 3: Develop Duel #3

//Setup a (self-executing) function
(function(){

    console.log("FIGHT!!!");

    //Defining my DOM pieces
    var playerOne_text = document.getElementById("kabal");
    var playerTwo_text = document.getElementById("kratos");
    var round_text = document.getElementById("round");
    var button = document.getElementById("fight_btn");

    //Adding behavior to the button:
    button.addEventListener("click", fight, false);

    //An array of objects with the players' names, Max-Damage and Starting Health

    var players = [
        {
            name: "Kabal",
            damage: 20,
            health: 100
        },
        {
            name: "Kratos",
            damage: 20,
            health: 100
        }];

    //initiate round (A counter to keep track of the round)
    var round=0;

    //Changing the round stats at the top of HTML page
    round_text.innerHTML = "Click Fight to Begin";
    playerOne_text.innerHTML = players[0].name + ": " + players[0].health;
    playerTwo_text.innerHTML = players[1].name + ": " + players[1].health;

    //.......................

	// v Setup a function within it named "fight" that loops through rounds and reduces the player’s health accordingly
    function fight(){
    	// v Setup an alert that shows the first player's name and health, the round number, and the second player's name and health;
        // alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);

        playerOne_text.innerHTML = players[0].name + ": " + players[0].health;
        playerTwo_text.innerHTML = players[1].name + ": " + players[1].health;
        
        //Calculating Max Damage
        var p1damage = Math.floor(Math.random() * players[0].damage + players[0].damage * .5);
        var p2damage = Math.floor(Math.random() * players[1].damage + players[1].damage * .5);

        //Calculating inflicted damage
        players[0].health -= p1damage;
        players[1].health -= p2damage;

        console.log(players[0].health, players[1].health);

        //Check for winner
        var result = winnerCheck();
        console.log(result);

        //Update Round
        round_text.innerHTML = "Round #" + round + " Results:";
        round++;

        //

        if (result === "no winner"){
            playerOne_text.innerHTML = players[0].name + ": " + players[0].health;
            playerTwo_text.innerHTML = players[1].name + ": " + players[1].health;
        } else{
            playerOne_text.innerHTML = result;
            playerTwo_text.innerHTML = "";

            button.removeEventListener("click", fight, false);

            document.querySelector(".buttonblue").innerHTML = "Finished";
        }
    }   
      //Displays winner of the match

        function winnerCheck(){
            var result = "no winner";
            if (players[0].health < 1 && players[1].health < 1){
                result = "You both die. Game Over...";
            }else if(players[0].health < 1){
                result = players[1].name + " wins!";
            }else if (players[1].health < 1){
                result = players[0].name + " wins!";
            }
            return result;
        }


})(); // < Ends the anonymous (self-executing) function 
