function mainMenuEffect(menuitem, state) {
    if (state) {
        menuitem.parentNode.style.backgroundImage = "url('/images/backer_menu_top_on.jpg')";
        menuitem.parentNode.style.backgroundRepeat = "repeat-x";
    } else {
        menuitem.parentNode.style.backgroundImage = "none";

    }
}

function leftMenuEffect(menuitem, level, state) {

    //level one nav
    if (level == 1) {
        if (state) {
            menuitem.parentNode.style.backgroundColor = "#e9e9e9";
        } else {
            menuitem.parentNode.style.backgroundColor = "#FFFFFF";
        }

    }


    //level two nav
    if (level == 2) {
        if (state) {
            menuitem.parentNode.style.backgroundImage = "url('/images/left_menu_level_two_on.gif')";
            menuitem.parentNode.style.backgroundColor = "#e9e9e9";
        } else {
            menuitem.parentNode.style.backgroundImage = "url('/images/left_menu_level_two.gif')";
            menuitem.parentNode.style.backgroundColor = "#FFFFFF";
        }

    }

    //level two nav light
    if (level == 2.1) {
        if (state) {
            menuitem.parentNode.style.backgroundImage = "url('/images/left_menu_level_two_on.gif')";
            menuitem.parentNode.style.backgroundColor = "#e9e9e9";
        } else {
            menuitem.parentNode.style.backgroundImage = "url('/images/left_menu_level_two_light.gif')";
            menuitem.parentNode.style.backgroundColor = "#F2F2F2";
        }

    }






    //level three nav
    if (level == 3) {
        if (state) {
            menuitem.parentNode.style.backgroundImage = "url('/images/left_menu_level_three_on.gif')";
            menuitem.parentNode.style.backgroundColor = "#e9e9e9";
        } else {
            menuitem.parentNode.style.backgroundImage = "url('/images/left_menu_level_three_off.gif')";
            menuitem.parentNode.style.backgroundColor = "#f2f2f2";
        }

    }


}
