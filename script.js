window.onload = () => {

    var body = document.getElementsByTagName("body")[0];


    var play = document.getElementById("play");
    var pause = document.getElementById("pause");
    var lockin = document.getElementById("lockin");
    var player = document.getElementById("player");

    /* TOGGLE BETWEEN PLAY & PAUSE*/

    play.onclick = () => {
        play.style.display = "none";
        pause.style.display = "block";

        pause.onclick = () => {
            pause.style.display = "none";
            play.style.display = "block";
        }
    }

    /* END OF TOGGLE BETWEEN PAUSE & PLAY* /

    

    /* SHOW PLAYER */

    lockin.onclick = () => {

        setTimeout(function () {
            player.style.opacity = "1";
        }, 300);

        player.style.display = "flex";

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