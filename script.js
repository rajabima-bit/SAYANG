let current = 1;

function playAndLogin(){
  const music = document.getElementById("music");
  music.volume = 0.8;
  music.play();

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

function nextPage(){
  document.getElementById("page" + current).classList.remove("active");
  current++;
  document.getElementById("page" + current).classList.add("active");
}
