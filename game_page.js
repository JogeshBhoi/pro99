
	//Get "player1_name" using localStorage.getItem() function and assign it to player1_name
	//Get "player2_name" using localStorage.getItem() function and assign it to player2_name

	localStorange.getItem("player1_name", player1_name);
	localStorange.setItem("player2_name", player2_name);

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}


question_turn = "player1";
answer_turn = "player2";

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	answer = get_answer.toLowerCase();
	console.log("answer in lower case - " + answer)
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}



	player1_name = document.getElementById("player1_name_input").value;
	player2_name = document.getElementById("player2_name_input").value;
  
	player1_score = 0;
	player2_score = 0;

	document.getElementById("player1_name").innerHTML = player1_name + " : ";
	document.getElementById("player2_name").innerHTML = player2_name + " : ";

	document.getElementById("player1_score").innerHTML = player1_score + " : ";
	document.getElementById("player2_score").innerHTML = player2_score + " : ";

	document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;

	function send() {
		get_word = document.getElementById("word").value;
		word = get_word.toLowerCase();
		console.log("word in lowerCase = " + word);

		charAt1 = word.charAt(1);
		console.log(charAt1);

		length_divide_2 = Math.floor(word.length/2);
		charAt2 = word.charAt(length_divide_1);
		console.log(charAt3);

		length_minus_1 = word.length - 1;
		charAt3 = word.charAt(length_minus_1);
		console.log(charAt3);

		remove_charAt1 = word.replace(charAt1, "_");
        remove_charAt2 = remove_charAt2.replace(charAt2, "_")
		remove_charAt2 = remove_charAt3.replace(charAt3, "_")
		console.log(remove_charAt3);

		question_word = "<h4 id='word_display'> Q. "+remove_charat3="</h4>";
		input_box = "<br>Answer : <input type='text' id='input_check_box'>";
		check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</buton>";
		row = question
	}
