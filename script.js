window.onload = () => {

    var play = document.getElementById("play");
    var pause = document.getElementById("pause");
    var lockin = document.getElementById("lockin");
    var player = document.getElementById("player");

    play.onclick = () =>{
        play.style.display = "none";
        pause.style.display = "block";

        pause.onclick = () =>{
            pause.style.display = "none";
            play.style.display = "block";
        }
    }


    lockin.onclick = () => {

        setTimeout(function(){
        player.style.opacity = "1";
        },300);

        player.style.display = "flex";

    }


    var menu = document.getElementById("menu");
    var nav = document.getElementById("mobilenav");

    menu.onclick = () =>{

        menu.classList.toggle("toggle");

        nav.classList.toggle("showmenu");
        
        setTimeout(function(){
            nav.style.height = "100vh";
        }, 50);

        document.getElementsByTagName("html").classList.toggle("hidescrollbar");

        


    }
















}