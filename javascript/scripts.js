$(document).ready(function(){  
    $(".burger-button").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").toggleClass("active");
    });
    
    });

// Auto update footer year
document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("year-mob").innerHTML = new Date().getFullYear();



