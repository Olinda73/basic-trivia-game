

// A basic Multiple Choice Trivia Game
 
// Click to Start
// Timer begins at 60 seconds and countdown
// Player goes through all 10 questions
// player can only guess one answer per question
// Once completed, player submits answers
// HTML is updated with users score
// Score includes: time spent, answers correct, and answers wrong */

// --------------------------------------------------------------- 

var questions = [{
            ques: "What kind of shell/tortilla is usually served with street tacos?",
            ans: ["Corn", "Flour", "Cheese Shell", "Lettuce Wrap"],
            name: "tacoShell",
            correct: "Corn",
            divClass: ".tacoShell"
        },
        {
            ques: "Taquitos are also known as what?",
            ans: ["Empanadas", "Flautas", "Enchiladas", "Quesadillas"],
            name: "taquitos",
            correct: "flautas",
            divClass: ".taquitos"
        },
        {
            ques: "What kind of taco is a lengua taco?",
            ans: ["Goat", "intestines", "tongue", "rabbit"],
            name: "lengua",
            correct: "tongue",
            divClass: ".lengua"
        },
        {
            ques: "What topping is not traditionally found on an authentic Mexican taco?",
            ans: ["salsa", "onion", "tomato", "cheese"],
            name: "topping",
            correct: "tomato",
            divClass: ".topping"
        },
        {
            ques: "What is the closest taco style to Taco Bell's standard Taco?",
            ans: ["barbacoa", "picadillo", "beef fajita", "el pastor"],
            name: "standardTaco",
            correct: "picadillo",
            divClass: ".standardTaco"
        },
        {
            ques: "What is cooked with the meat for picadillo tacos?",
            ans: ["raisins", "salsa", "radishes", "cilantro"],
            name: "picadillo",
            correct: "raisins",
            divClass: ".picadillo"
        },
        {
            ques: "What is a common ingredient in traditional green salsa?",
            ans: ["avocado", "tomatillo", "green bell pepper", "tomato"],
            name: "greenSalsa",
            correct: "tomatillo",
            divClass: ".greenSalsa"
        },
        {
            ques: "What is a common seasoning for taco meat?",
            ans: ["Cumin", "Paprika", "Shallot", "Parsley"],
            name: "seasoning",
            correct: "Cumin",
            divClass: ".seasoning"
        },
        {
            ques: "In which state did Taco trucks first flourish?",
            ans: ["Oregon", "New York", "California", "Florida"],
            name: "tacoTrucks",
            correct: "California",
            divClass: ".tacoTrucks"
        },
        {
            ques: "What is the flour that is used to make traditional taco shells?",
            ans: ["Masa", "Coconut", "Tapioca", "Wheat"],
            name: "flour",
            correct: "Masa",
            divClass: ".flour"
        }
    ] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
    // loops through the 10 questions 
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        // loops through answers for each radio button
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


// function for countdown timer
var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            // loop through correctArray & radioName to match html elements & answers
            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            // display wrongAnswers
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();

            // alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);

    // click event for submit button to stop timer
    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    // once submit is clicked...
    // tests
    // stop timer
    countdown();
    // fade out questions
    $('.container').fadeOut(500);
    // show answerScreen
    $('#answerScreen').show();
    // display correctAnswers
    $('#correctScreen').append(correctAnswers);
    // display wrongAnswers
    $('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz
