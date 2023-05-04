//#####  Array für die Tourdaten

let tourArray = ["16.03.23 | Prague | Lucerna | SOLD OUT",
    "17.03.23 | Wroclaw | A2 | SOLD OUT",
    "18.03.23 | Warsaw | Progresja | SOLD OUT",
    "19.03.23 | Gdansk | B90",
    "21.03.23 | Copenhagen | Amager Bio | SOLD OUT", 
    "22.03.23 | Gothenburg | Trädgarn | SOLD OUT", 
    "23.03.23 | Oslo | Rockfeller | SOLD OUT", 
    "24.03.23 | Stockholm | Fryshuset Klubben | SOLD OUT",
    "26.03.23 | Helsinki | Vanha Ylioppilastalo | SOLD OUT",
    "27.03.23 | Helsinki | Vanha Ylioppilastalo | SOLD OUT",
    "30.03.23 | Munich | Olympiahalle",
    "01.04.23 | Leipzig | Quaterback | SOLD OUT",
    "14.04.23 | Vienna | Gasometer | SOLD OUT",
    "15.04.23 | Budapest | Barba Negra | SOLD OUT",
    "20.04.23 | Hamburg | Barclays Arena",
    "21.04.23 | Frankfurt | Festhalle | SOLD OUT"];

let tourUl = document.getElementById("tourUl");
let vip = document.getElementById("vip");

tourArray.forEach(item =>  {
    tourUl.innerHTML += '<li class="tourData">'+item+'</li>';
   
});



//######  Pause Funktion für das Video auf der Tour Seite
let video = document.getElementById("myVideo");

let btn = document.getElementById("myBtn");

function pauseFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

