let current = 1;

/* 🔐 LOGIN + MUSIK */
function playAndLogin(){
  const music = document.getElementById("music");

  if (music) {
    music.volume = 0.8;
    music.play(); // 🔑 DIPICU LANGSUNG DARI KLIK
  }

  checkPassword();
}

function checkPassword(){
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if(input === "sayang"){
    document.getElementById("passwordPage").classList.remove("active");
    document.getElementById("page1").classList.add("active");
  } else {
    error.style.display = "block";
  }
}

/* ➡️ PINDAH PAGE */
function nextPage(){
  document.getElementById("page" + current).classList.remove("active");
  current++;
  document.getElementById("page" + current).classList.add("active");
}

/* ❤️ ANIMASI LOVE (ANTI HILANG) */
const hearts = document.querySelector(".hearts");

if (hearts) {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    hearts.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 300);
}
