const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const valentineGif = document.getElementById("valentineGif");
const celebrationGif = document.getElementById("celebrationGif");

const preloadedNoHover = new Image();
preloadedNoHover.src = "sad.gif.gif";

let noHovered = false;

yesBtn.addEventListener("click", () => {

    valentineGif.style.display = "none";

    celebrationGif.style.display = "block";

    noBtn.style.display = "none";

    message.textContent = "🎉WEEE! Jeye 3addelak fossak :3💖";
});

noBtn.addEventListener("mouseenter", () => {
    if (!noHovered) {
        valentineGif.src = "sad.gif.gif";
        noHovered = true;
    }
});

noBtn.addEventListener("mouseleave", () => {
    noHoverGif.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

noBtn.addEventListener("mouseenter", () => {
    valentineGif.style.opacity = 0;
    setTimeout(() => {
        valentineGif.src = "sad.gif.gif";
        valentineGif.style.opacity = 1;
    }, 200);
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = 20 + Math.random() * 30 + "px";
    heart.textContent = "💖";

    document.getElementById("heart-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

yesBtn.addEventListener("click", () => {
    valentineGif.style.display = "none";
    celebrationGif.style.display = "block";
    noBtn.style.display = "none";
    message.textContent = "🎉WEEE! Jeye 3addelak fossak :3💖";

    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 100);
    }
});
