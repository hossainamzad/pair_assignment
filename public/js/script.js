
$(document).ready(function(){

// $(function() {
//    $("#tabs").tabs({
//      event: "mouseover"
//    });
//  });
$( "#tabs" ).tabs();

})
  
console.log("hi")



function getCurrentDateTime(){

	document.getElementById("clock") .innerHTML = Date ();
}

setInterval(getCurrentDateTime, 1000);


