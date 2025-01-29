
function selectMenu(x) {
    let menuClosed = document.getElementById("menuIconClosed");
    let menuOpen = document.getElementById("menuIconOpen");
    let menuDiv = document.getElementById("menuDiv");
    let menuIcon = document.getElementById("menuIcon");

   /* menuClosed.style.display = "none";*/
    

    x.classList.toggle("change");
    menuDiv.classList.toggle("menu-open");
    menuIcon.classList.toggle("x-menu");

    if (x.classList.contains("change")) {
        menuOpen.style.display = "block";
        
    }
    else {
        menuOpen.style.display = "none";
    }
}

function deselectMenu(x) {
    let menuClosed = document.getElementById("menuIconClosed");
    let menuOpen = document.getElementById("menuIconOpen");

    menuOpen.style.display = "none";
 /*   menuClosed.style.display = "block";*/

    x.classList.toggle("change");
}