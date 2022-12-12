const checkbox = document.querySelector("#checkbox");

function click() {
  console.log(checkbox.checked);
  if (checkbox.checked) {
    document.getElementById("seta").src = "assets/img/seta2.png";
    document.getElementById("logo").src = "assets/img/logoSN2.png";
    document.getElementById("logo2").src = "assets/img/logoSN2.png";
    document.getElementById("lupa").src = "assets/img/lupa2.png";
    document.getElementById("lupa2").src = "assets/img/lupa2.png";
  } else {
    document.getElementById("seta").src = "assets/img/seta.png";
    document.getElementById("logo").src = "assets/img/logoSN1.png";
    document.getElementById("logo2").src = "assets/img/logoSN1.png";
    document.getElementById("lupa").src = "assets/img/lupa.png";
    document.getElementById("lupa2").src = "assets/img/lupa.png";
  }
  document.body.classList.toggle("dark");
}

checkbox.addEventListener("change", click);
