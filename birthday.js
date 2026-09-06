const sky =
document.getElementById("sky");

const music =
document.getElementById("birthdayMusic");

const musicBtn =
document.getElementById("musicBtn");

const nextWish =
document.getElementById("nextWish");

const wishText =
document.getElementById("wishText");

/* =====================================
STATIC STARS
===================================== */

for(let i = 0; i < 100; i++){

const star =
    document.createElement("div");

star.className = "star";

star.style.left =
    Math.random() * 100 + "vw";

star.style.top =
    Math.random() * 100 + "vh";

star.style.width =
    (1 + Math.random() * 3) + "px";

star.style.height =
    star.style.width;

star.style.animationDelay =
    Math.random() * 3 + "s";

sky.appendChild(star);

}

/* =====================================
FALLING PARTICLES
===================================== */

const symbols = [

"✦",
"✧",
"★",
"☆",
"☾",
"☽",
"✨",
"·"

];

function createParticle(){

const particle =
    document.createElement("div");

particle.className =
    "particle";

particle.innerHTML =
    symbols[
        Math.floor(
            Math.random() *
            symbols.length
        )
    ];

particle.style.left =
    Math.random() * 100 + "vw";

particle.style.fontSize =
    (12 + Math.random() * 18) + "px";

const duration =
    6 + Math.random() * 7;

particle.style.animationDuration =
    duration + "s";

particle.style.opacity =
    .4 + Math.random() * .5;

sky.appendChild(particle);

setTimeout(() => {

    particle.remove();

}, (duration + 1) * 1000);

}

/* Gentle continuous snowfall */

setInterval(
createParticle,
500
);

/* =====================================
WISHES
===================================== */

const wishes = [

"May this year bring you countless beautiful moments. ✨",

"May every new day give you another reason to smile. 🌙",

"May your dreams slowly turn into wonderful memories. ✦",

"May happiness always find its way back to you. ♡",

"May you keep shining brighter with every passing year. ✨",

"Wishing you a year full of laughter, peace and unforgettable moments. 🌟",

"And most importantly, may you always have reasons to be happy. 💫"

];

let wishIndex = 0;

nextWish.addEventListener(
"click",
() => {

    wishText.classList.add(
        "changing"
    );

    setTimeout(() => {

        wishIndex++;

        if(
            wishIndex >= wishes.length
        ){

            wishIndex = 0;

        }

        wishText.textContent =
            wishes[wishIndex];

        wishText.classList.remove(
            "changing"
        );

    }, 400);

}

);

/* =====================================
MUSIC
===================================== */

let isPlaying = false;

musicBtn.addEventListener(
"click",
async () => {

    try{

        if(!isPlaying){

            await music.play();

            isPlaying = true;

            musicBtn.textContent =
                "🔊";

            musicBtn.classList.add(
                "playing"
            );

        }else{

            music.pause();

            isPlaying = false;

            musicBtn.textContent =
                "♫";

            musicBtn.classList.remove(
                "playing"
            );
        }

    }catch(error){

        console.error(
            "Music could not be played:",
            error
        );

        musicBtn.textContent =
            "⚠";
    }

}

);

/* =====================================
CREATE A FEW PARTICLES IMMEDIATELY
===================================== */

for(let i = 0; i < 15; i++){

setTimeout(
    createParticle,
    i * 150
);

}
