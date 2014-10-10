// John Smith
// 10/10/14
// Assignment: Goal 2: Develop Duel #2

//Setup a (self-executing) function{
//		that has variables inside for both players' Names;
//		Max-Damage, and;
//		Starting Health;
//		as well as a variable for the current Round;

(function(){

    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round
    var round=0;

	// v Setup a function within it named "fight" that loops through rounds and reduces the player’s health accordingly
    function fight(){
    	// v Setup an alert that shows the first player's name and health, the round number, and the second player's name and health;
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);

//  	Create a (for) loop that will run 10 rounds{
//			Create a variable for the minumum player 1 damage and set the value to player 1's max damage *.5;
//			Create a variable for the minimum player 2 damage and set the value to player 2's max damage *.5;
//			Create 2 variables and set both of their values to a formula for generating a random number (for damage). For player 1;
//			And player 2;

        for (var i = 0; i < 10; i++)
        {
            // v random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

			// v Create two expressions that update the newly-decremented healths of both players (using the random numbers from above);
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

			// v Call the winnerCheck function; (store the call in a variable named "results")
            var result = winnerCheck();
            console.log(result);


            if (result==="no winner") //Create an if statement that says if the results give us no winner
            {
                round++; // Add to the round (variable)
                // v Display the same alert from above (line 15) (change "Start" to "Round" and add the round variable to the string concatenation);
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

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
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die"; // If this is the case, the result should be a string with something like "You Both Die";
        } else if(playerOneHealth<1){ // If not, just check if player 1's health is less than 1
            result =playerTwoName+" WINS!!!" // And then return something like "(Player 2 name) wins"
        } else if (playerTwoHealth<1) // If not, just check player 2's health
        {
            result = playerOneName+" WINS!!!" // And, if that's the case, return something like "(Player 1 name) wins"
        };
       return result; // Return the result
    }; // < Ends "winnerCheck" function

    /*******  The program gets started below *******/
    fight(); // Call the "fight" function

})(); // < Ends the anonymous (self-executing) function 
