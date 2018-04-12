var score = 0;
$(document).ready(function(){

  console.log("Sanity check");

  $("#optionsForm").on('submit', function (e) {
     //stop form submission
     e.preventDefault();
     console.log("Inside submit function")
     formData = $(this).serializeArray();
     console.log(formData)
     selectedAnswer = parseInt(formData[0].value)
     correctAnswer = parseInt(formData[1].value)
     if(selectedAnswer === correctAnswer){
        $.ajax({
          method: 'POST',
          url: '/quizScore',
          data: $(this).serialize(),
          success: scoreIncrease,
          error: scoreFail
        });

        function scoreIncrease(){
          console.log("Score increased by one");
        }

        function scoreFail(){
          console.log("Score change failed");
        }
     }
     console.log(score);
     qNum = parseInt(formData[2].value)
     nextQNum = qNum + 1;
     if(nextQNum >= 4){
       window.location.replace("/results");
     }
     else{
       window.location.replace("/quiz/"+nextQNum);
     }
  });
})
