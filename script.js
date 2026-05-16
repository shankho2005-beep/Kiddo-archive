
const lines = document.querySelectorAll(".line");

lines.forEach((line, index) => {
    line.style.animationDelay = (index * 0.15) + "s";
});

// ENTER ARCHIVE BUTTON

const archiveButton =
document.getElementById("enter-archive");

if(archiveButton){

    archiveButton.addEventListener("click", () => {

        window.location.href = "archive.html";

    });

}




// EXPANDABLE VOICE CARDS

const cards = document.querySelectorAll(".voice-card");

cards.forEach(card => {

    const header = card.querySelector(".voice-header");

    header.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});

// MEMORY SLIDESHOW

const memoryImage =
document.getElementById("memory-image");

const memoryCaption =
document.getElementById("memory-caption");

const memoryPage =
document.getElementById("memory-page");


if(memoryImage && memoryCaption && memoryPage){

    const memories = [

        {
            image:"images/memory1.png",
            caption:"still one of my favorite moments 😭"
        },

        {
            image:"images/memory2.png",
            caption:"Love is a fever dream"
        },

        {
            image:"images/memory3.png",
            caption:"Why is it me!?"
        },

        {
            image:"images/memory4.png",
            caption:"this was illegally adorable"
        },

        {
            image:"images/memory5.png",
            caption:"i still smile at this one"
        },

        {
            image:"images/memory6.png",
            caption:"dont wanna lose my favorite kiddo 😭"
        },

        {
            image:"images/memory7.png",
            caption:"and somehow i fell even harder"
        }

    ];



    let currentMemory = 0;

    let transitioning = false;



    memoryPage.addEventListener("click", () => {

        // prevent spam clicking

        if(transitioning) return;

        transitioning = true;



        currentMemory++;



        // GO TO NEXT SECTION

        if(currentMemory >= memories.length){

            goToPage("heart.html");

            return;
        }



        // FADE OUT

        memoryImage.style.opacity = 0;

        memoryCaption.style.opacity = 0;



        setTimeout(() => {

            // CHANGE CONTENT

            memoryImage.src =
            memories[currentMemory].image;

            memoryCaption.textContent =
            memories[currentMemory].caption;



            // FADE IN

            memoryImage.style.opacity = 1;

            memoryCaption.style.opacity = 1;



            transitioning = false;

        },500);

    });

}document.addEventListener("DOMContentLoaded", () => {

    const startScreen = document.getElementById("start-screen");
    const letterContainer = document.getElementById("letter-container");
    const letterElement = document.getElementById("letter");
    const music = document.getElementById("bg-music");

    if (!startScreen || !letterContainer || !letterElement) {
        return;
    }

    const text = `Somewhere along the way, the "ping" of a notification stopped being a sound.

It became a heartbeat.

It started so quietly.

Just a Discord notification. Just a green dot next to your name.

Back then, you were just a person I talked to.

Now, you’re the person I think to.

I find myself scrolling through our chats just to feel close to you.

I see a reel and my thumb automatically moves to your name before I’ve even finished watching it.

You’ve woven yourself into the fabric of my day without even trying.

And it’s the most beautiful thing that’s ever happened to me.

I love the way your voice sounds in my ear at 3 AM.

I love the way we can jump from stupid memes to the deepest parts of our souls in seconds.

I haven't even felt your skin yet, but I know the map of your heart by heart.

I’ve memorized the way you laugh, the way you think, and the way you make the world feel quiet when everything else is too loud.

Sometimes I just sit here and realize...

I’m not just waiting to meet you.

I’m waiting to finally arrive where I belong.

I imagine that first moment all the time.

The way the air will leave my lungs when I finally see you standing there.

The way all these months of typing will finally turn into a touch that doesn't need a single word.

I want those insane nights we talk about.

But more than that, I want the quiet mornings.

I want the messy, real, unfiltered version of us.

It’s wild how much space you take up in my head.

And it’s even wilder how much I love every second of it.

You’re not just a girl on my screen anymore.

You’re the girl in my future.

And I’m already yours. Completely.`;

    let i = 0;
    let started = false;

    function fadeIn(audio) {
        let vol = 0;
        audio.volume = 0;

        const fade = setInterval(() => {
            if (vol < 0.6) {
                vol += 0.02;
                audio.volume = vol;
            } else {
                clearInterval(fade);
            }
        }, 50);
    }

    function typeWriter() {

        if (i < text.length) {

            letterElement.textContent += text.charAt(i);
            i++;

            let delay = 40;

            const c = text.charAt(i-1);

            if (c === ",") delay = 150;
            if (c === ".") delay = 300;
            if (c === "\n") delay = 600;

            setTimeout(typeWriter, delay);

        }
    }

    function startExperience() {

        if (started) return;
        started = true;

        // hide start screen
        startScreen.style.display = "none";

        // show letter
        letterContainer.style.display = "flex";

        // start music
        if (music) {
            music.play().then(() => fadeIn(music));
        }

        // start typing
        typeWriter();
    }

    // click anywhere triggers once
    document.addEventListener("click", startExperience, { once: true });

});
function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";

    document.querySelector(".stars")?.appendChild(star);

    setTimeout(() => star.remove(), 2000);
}


// slow ambient frequency
setInterval(createStar, 800);

function goToPage(url) {
    const overlay = document.getElementById("transition");

    if (!overlay) {
        window.location.href = url;
        return;
    }

    // fade IN overlay
    overlay.classList.add("active");

    // slight delay before switching page
    setTimeout(() => {
        window.location.href = url;
    }, 600);
}
const researchCards = document.querySelectorAll(".research-card");

if (researchCards.length > 0) {

    researchCards.forEach((card, index) => {

        setTimeout(() => {
            card.classList.add("show");
        }, index * 500); // delay creates left → right feel

    });

}
