function toggleMenu() {
    var menu = document.getElementById("menuContainer")
    if (menu.style.height == '0vh') 
        menu.style.height = "100vh"
    else
        menu.style.height = "0vh"
}


const output = document.getElementById("heroImgContainer");
window.addEventListener("scroll", event => {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    output.scrollLeft = scrollTop;
    }, { passive: true });


function toggleSubMenu(index) {
    var subMenus = document.getElementsByClassName('subMenu');
    previouslyOpen = subMenus[index].style.display == "flex"
    for (i = 0; i < subMenus.length; i++)
        subMenus[i].style.display = "none";
    console.log("aho")
    
    if (index >= 0 && index < subMenus.length)
        if(!previouslyOpen)
            subMenus[index].style.display = "flex";
}