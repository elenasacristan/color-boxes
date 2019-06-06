// example where we will click on an element. we will use the 'this' keyword to locate any other elements on the page that have the same class name

// we will add 9 boxes in groups of three and they will have different number to we can identify them and match them together. 

// When we click on one element that has a box class, we want to determine what number that box is: one, two or three. 

// Once we've identified the number of the box then we will highlight all the boxes with the same class number

//$(document).ready(function(){
//    $('.box').click(function(){
//        var classNames = $(this).attr('class').split(" "); //class nama will //save the classes as an array
//       $("."+classNames[1]).css('background-color','red');
//    });
//});


//if instead we wanted onle one of the classes to be red at the same time..


$(document).ready(function() {

    $(".box").on("click", function() {

    	var classNames = $(this).attr("class").split(" ");
    	var boxClass = classNames[0];
    	var className = classNames[1];
        
        
  //     if ($(this).css("background-color") == "rgb(255, 0, 0)") {
     if ($(this).css("background-color") == "rgb(255, 0, 0)") {  //it doesn't work with 'red' keyword and also it doesn't work if you don't leave spaces between the "," and the "0"s
            $("."+className).css("background-color","black");
       }else{
           $("."+boxClass).css("background-color","black");
            $("."+className).css("background-color","red");
       }
       
    });
});
