let current = 1;
const music = document.getElementById("music");

/* PASSWORD */
function checkPassword(){
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if(input === "sayang"){ // 🔐 GANTI PASSWORD DI SINI
    document.getElementById("passwordPage").classList.remove("active");
    document.getElementById("page1").classList.add("active");
    music.play();
  }else{
    error.style.display = "block";
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
  music.paused ? music.play() : music.pause();
}

/* HATI TERBANG */
const hearts = document.querySelector(".hearts");

setInterval(()=>{
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  hearts.appendChild(heart);

  setTimeout(()=>heart.remove(),6000);
},300);
