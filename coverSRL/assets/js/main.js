/* Open the sidenav */
function openClosemenu() {
    if (window.matchMedia("(max-width: 700px)").matches) { // Mobile
        if (document.getElementById("fullScreenMenu").style.height == (window.innerHeight-75)+"px") {
            document.getElementById("fullScreenMenu").style.height = "0";
            document.getElementById("menuHamburger").style.display = "block"
            document.getElementById("closeBtn").style.display = "none"
        }
        else {
            document.getElementById("closeBtn").style.display = "block"
            document.getElementById("menuHamburger").style.display = "none"
            document.getElementById("fullScreenMenu").style.height = (window.innerHeight-75)+"px";
        }
    } else { // Desktop
        if (document.getElementById("fullScreenMenu").style.width == (window.innerWidth-75)+"px") {
            document.getElementById("fullScreenMenu").style.width = "0";
            document.getElementById("menuHamburger").style.display = "block"
            document.getElementById("closeBtn").style.display = "none"
        }
        else {
            document.getElementById("closeBtn").style.display = "block"
            document.getElementById("menuHamburger").style.display = "none"
            document.getElementById("fullScreenMenu").style.width = (window.innerWidth-75)+"px";
        }
    }
}