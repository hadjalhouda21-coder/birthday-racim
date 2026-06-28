const giftBtn = document.getElementById("giftBtn");

const loveBtn = document.getElementById("loveBtn");

const gallery = document.getElementById("gallery");

const letter = document.getElementById("letter");

const finalPage = document.getElementById("final");

const music = document.getElementById("music");

// Open Gift

giftBtn.addEventListener("click", () => {

    gallery.classList.remove("hidden");

    setTimeout(() => {

        letter.classList.remove("hidden");

        letter.scrollIntoView({

            behavior: "smooth"

        });

    }, 1200);

    music.play();

    createHearts();

});

// Final Surprise

loveBtn.addEventListener("click", () => {

    finalPage.classList.remove("hidden");

    finalPage.scrollIntoView({

        behavior: "smooth"

    });

    createConfetti();

});

// Floating Hearts

function createHearts(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💜";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="100vh";

        heart.style.fontSize=(15+Math.random()*25)+"px";

        heart.style.pointerEvents="none";

        heart.style.transition="all 5s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.top="-100px";

            heart.style.opacity="0";

        },100);

        setTimeout(()=>{

            heart.remove();

        },5200);

    }

}

// Confetti

function createConfetti(){

    const colors=[

        "#ffffff",

        "#6A4C93",

        "#A7D8FF",

        "#4F6D4F"

    ];

    for(let i=0;i<250;i++){

        const conf=document.createElement("div");

        conf.style.position="fixed";

        conf.style.width="8px";

        conf.style.height="8px";

        conf.style.background=

        colors[Math.floor(Math.random()*colors.length)];

        conf.style.left=Math.random()*100+"vw";

        conf.style.top="-20px";

        conf.style.opacity="1";

        conf.style.borderRadius="50%";

        conf.style.pointerEvents="none";

        conf.style.transition=

        (3+Math.random()*3)+"s linear";

        document.body.appendChild(conf);

        setTimeout(()=>{

            conf.style.top="105vh";

            conf.style.transform=

            "rotate(720deg)";

        },100);

        setTimeout(()=>{

            conf.remove();

        },6500);

    }

}
