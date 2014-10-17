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
            name: "Spiderman",
            damage: 20,
            health: 100
            var playerTwo = ["Batman", 20, 100]; 
        },
        {
            name: "Batman",
            damage: 20,
            health: 100
        }];

    //initiate round (A counter to keep track of the round)
    var round=0;

    //Changing the round stats at the top of HTML page
    round_text.innerHTML = "Click Fight to Begin";
    playerOne_text.innerHTML = players[0].name + ": " + players[0].health;
    playerTwo_text.innerHTML = players[1].name + ": " + players[1].health;

	// v Setup a function within it named "fight" that loops through rounds and reduces the player’s health accordingly
    function fight(){
    	// v Setup an alert that shows the first player's name and health, the round number, and the second player's name and health;
        // alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);

        playerOne_text.innerHTML = players[0].name + ": " + players[0].health);
        playerTwo_text.innerHTML = players[1].name + ": " + players[1].health);
        
        //Calculating Max Damage
        var p1damage = Math.floor(Math.random() * players[0].damage + players[0].damage * .5);
        var p2damage = Math.floor(Math.random() * players[1].damage + players[1].damage * .5);

        //Calculating inflicted damage
        players[0].health -= p1damage;
        players[1].health -= p2damage;

        round_text.innerHTML = "Round #" + round + " Results:";
        round++;

        if (result === "no winner")
        {
            playerOne_text.innerHTML = result;
            playerTwo_text.innerHTML = "";

            button.removeEventListener("click", fight, false);

            document.querySelector(".buttonblue").innerHTML = "Finished";
        }
      
        function winnerCheck(){
            var result = "no winner";
            if (players[0].health < 1 && players[1].health < 1){
                result = "You both die. Game Over...";
            }else if(players[0].health < 1){
                result players[1].name + " wins!";
            }else if (players[1].health < 1){
                result = players[0].name + " wins!";
            }
        }
//  	Create a (for) loop that will run 10 rounds{
//			Create a variable for the minumum player 1 damage and set the value to player 1's max damage *.5;
//			Create a variable for the minimum player 2 damage and set the value to player 2's max damage *.5;
//			Create 2 variables and set both of their values to a formula for generating a random number (for damage). For player 1;
//			And player 2;

        for (var i = 0; i < 10; i++)
        {
            // v random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo[1] * .5;
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

			// v Create two expressions that update the newly-decremented healths of both players (using the random numbers from above);
            playerOne[2]-=f1;
            playerTwo[2]-=f2;

            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]);

			// v Call the winnerCheck function; (store the call in a variable named "results")
            var result = winnerCheck();
            console.log(result);


            if (result==="no winner") //Create an if statement that says if the results give us no winner
            {
                round++; // Add to the round (variable)
                // v Display the same alert from above (line 15) (change "Start" to "Round" and add the round variable to the string concatenation);
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);

            } else{ //If not...
                alert(result); //Alert the user of the "results"
                break; //Then break out of the loop
            };

          };// Ends For Loop
    }; // < Ends "fight" function

    // v Setup another function named "winnerCheck" that does the conditional logic to determine if there is a winner or not
    function winnerCheck(){
    	// v Create a variable with a string value stating that there is no winner;
        var result="no winner";
        // v Create an if statement that compares player healths to see if they're both under 1
        if (playerOne[2]<1 && playerTwo[2]<1)
        {
            result = "You Both Die"; // If this is the case, the result should be a string with something like "You Both Die";
        } else if(playerOne[2]<1){ // If not, just check if player 1's health is less than 1
            result =playerTwo[0]+" WINS!!!" // And then return something like "(Player 2 name) wins"
        } else if (playerTwo[2]<1) // If not, just check player 2's health
        {
            result = playerOne[0]+" WINS!!!" // And, if that's the case, return something like "(Player 1 name) wins"
        };
       return result; // Return the result
    }; // < Ends "winnerCheck" function

    /*******  The program gets started below *******/
    fight(); // Call the "fight" function

})(); // < Ends the anonymous (self-executing) function 
