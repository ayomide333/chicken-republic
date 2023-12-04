

let navbar= document.getElementById("mobile-navbar");

function showAyo(){
    if (navbar.style.display === "flex"){
        navbar.style.display = "none";
    }

        
     else{
         navbar.style.display = "flex";
     }
};


let menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener('click', showAyo);