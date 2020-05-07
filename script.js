window.onload = () => {

    var body = document.getElementsByTagName("body")[0];


    var play = document.getElementById("playcontainer");
    var pause = document.getElementById("pausecontainer");
    var lockin = document.getElementById("lockin");
    var player = document.getElementById("playerwindow");

    /* TOGGLE BETWEEN PLAY & PAUSE*/

    play.onclick = () => {
        play.style.display = "none";
        pause.style.display = "flex";

        pause.onclick = () => {
            pause.style.display = "none";
            play.style.display = "flex";
        }
    }

    /* END OF TOGGLE BETWEEN PAUSE & PLAY* /

    

    /* SHOW PLAYER */

    lockin.onclick = () => {

        /*setTimeout(function () {*/
            player.style.transform = "translate(0%)";
            document.documentElement.style.overflowY = "hidden";
      /*  }, 300);*/

    }

    var close = document.getElementById("close");

    close.onclick = () => {

        player.style.transform = "translate(-100%)";
        document.documentElement.style.overflowY = "scroll";

    }

    /* END OF SHOW PLAYER*/



    /* SHOW & HIDE MOBILE MENU*/

    menu.onclick = () => {

        var menu = document.getElementById("menu");
        var nav = document.getElementById("mobilenav");

        menu.classList.toggle("toggle");


        if (nav.style.display === "block") {

            nav.style.height = "0vh";

            setTimeout(function () {
                nav.style.display = "none";
            }, 500);



        } else {

            nav.style.display = "block";

            setTimeout(function () {
                nav.style.height = "100vh";
            }, 50);


        }


    }

    /* END OF SHOW & HIDE MOBILE MENU*/




































}