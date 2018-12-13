/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });

});
function counttotalScore(question1, question2, question3){
    var score = 0;
    if (question1 === "Drift") { 
        score = score +5;
    } else if (question1 === "Ragnorok") {
        score = score +10;
    } else if (question1 === "Valkyrie") {
        score = score +15;
    } 
    if (question2 === "Breaking") {
        score === score +25;
    }else if (question2 === )
    }
    
    //|| question1 === "Ragnorok"||question1 ===  "Valkyrie")
    
}

