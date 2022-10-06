let toggleStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-side-bar");
    let getSidebarList = document.querySelector(".nav-side-bar ul");
    let getSidebarTitle = document.querySelector(".nav-side-bar span");
    let getSidebarLinks = document.querySelectorAll(".nav-side-bar a");
    
    if ( toggleStatus === false) {
        getSidebarList.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;

        for (var i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleStatus = true;
    }


    else if ( toggleStatus === true) {
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;

        for (var i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarList.style.visibility = "hidden";

        toggleStatus = false;
    }








}


