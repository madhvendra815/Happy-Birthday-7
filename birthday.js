/* =================================
   FALLING STARS + MOONS
================================= */

const sky = document.getElementById("sky");

const symbols = [
    "✦",
    "✧",
    "★",
    "☆",
    "☾",
    "☽",
    "✨"
];


function createFallingParticle() {

    const particle =
        document.createElement("div");

    particle.className =
        "falling";

    particle.innerHTML =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.fontSize =
        (10 + Math.random() * 17) + "px";

    particle.style.animationDuration =
        (7 + Math.random() * 7) + "s";

    particle.style.animationDelay =
        Math.random() * 2 + "s";

    sky.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, 16000);
}


/* Continuous falling particles */

setInterval(
    createFallingParticle,
    500
);


/* Initial particles */

for (let i = 0; i < 15; i++) {

    setTimeout(
        createFallingParticle,
        i * 180
    );

}


/* =================================
   EXTRA PARTICLE BURST
================================= */

function createBurst() {

    for (let i = 0; i < 18; i++) {

        const particle =
            document.createElement("div");

        particle.className =
            "falling";

        particle.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        particle.style.left =
            (35 + Math.random() * 30) + "vw";

        particle.style.top =
            (5 + Math.random() * 15) + "vh";

        particle.style.fontSize =
            (14 + Math.random() * 16) + "px";

        particle.style.animationDuration =
            (5 + Math.random() * 4) + "s";

        sky.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        }, 10000);
    }
}


/* =================================
   MUSIC
================================= */

const music =
    document.getElementById("birthdayMusic");

const musicBtn =
    document.getElementById("musicBtn");


async function toggleMusic() {

    try {

        if (music.paused) {

            await music.play();

            musicBtn.innerHTML = "🔊";

            musicBtn.classList.add(
                "playing"
            );

        } else {

            music.pause();

            musicBtn.innerHTML = "♫";

            musicBtn.classList.remove(
                "playing"
            );

        }

    } catch (error) {

        console.log(
            "Music could not be played:",
            error
        );

    }

}


/* =================================
   START SPECIAL EFFECT
================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            createBurst,
            800
        );

    }
);
