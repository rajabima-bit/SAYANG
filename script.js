let current = 1;
const music = document.getElementById("music");

function checkPassword(){
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if(input === "sayang"){

    // 🔑 KUNCI UTAMA: PLAY LANGSUNG DARI KLIK
    music.muted = false;
    music.volume = 0.8;
    music.play();

    // BARU UBAH TAMPILAN
    document.getElementById("passwordPage").classList.remove("active");
    document.getElementById("page1").classList.add("active");

  } else {
    error.style.display = "block";
  }
}

function nextPage(){
  document.getElementById(`page${current}`).classList.remove("active");
  current++;
  document.getElementById(`page${current}`).classList.add("active");
}

function toggleMusic(){
  if(music.paused){
    music.play();
  } else {
    music.pause();
  }
}

/* PINDAH PAGE */
function nextPage(){
  document.getElementById(`page${current}`).classList.remove("active");
  current++;
  document.getElementById(`page${current}`).classList.add("active");
}

/* MUSIC */
function toggleMusic(){
  if(music.paused){
    music.play();
  }else{
    music.pause();
  }
}

/* ❤️ HATI TERBANG */
const hearts = document.querySelector(".hearts");

setInterval(()=>{
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  hearts.appendChild(heart);

  setTimeout(()=>heart.remove(),6000);
},300);
