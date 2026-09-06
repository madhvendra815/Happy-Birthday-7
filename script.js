const sky = document.getElementById("sky");
const openWish = document.getElementById("openWish");

/* =====================================
CREATE STATIC STARS
===================================== */

for(let i = 0; i < 100; i++){

const star = document.createElement("div");

star.className = "star";

star.style.left =
    Math.random() * 100 + "vw";

star.style.top =
    Math.random() * 100 + "vh";

star.style.animationDelay =
    Math.random() * 3 + "s";

star.style.width =
    (1 + Math.random() * 3) + "px";

star.style.height =
    star.style.width;

sky.appendChild(star);

}

/* =====================================
FALLING STARS + MOONS
===================================== */

const objects = [
"✦",
"✧",
"★",
"☆",
"☾",
"☽",
"✨"
];

function createFallingObject(){

const object =
    document.createElement("div");

object.className = "falling";

object.innerHTML =
    objects[
        Math.floor(
            Math.random() *
            objects.length
        )
    ];

object.style.left =
    Math.random() * 100 + "vw";

object.style.fontSize =
    (12 + Math.random() * 18) + "px";

const duration =
    5 + Math.random() * 6;

object.style.animationDuration =
    duration + "s";

object.style.opacity =
    .4 + Math.random() * .6;

sky.appendChild(object);

setTimeout(() => {

    object.remove();

}, (duration + 1) * 1000);

}

/* =====================================
START GENTLE FALLING PARTICLES
===================================== */

setInterval(
createFallingObject,
450
);

/* =====================================
OPEN BIRTHDAY PAGE
===================================== */

openWish.addEventListener(
"click",
function(){

    /* Create a burst of particles */

    for(let i = 0; i < 25; i++){

        setTimeout(
            createFallingObject,
            i * 30
        );
    }

    document.body.classList.add(
        "leaving"
    );

    openWish.disabled = true;

    setTimeout(
        () => {

            window.location.href =
                "birthday.html";

        },
        850
    );
}

);
