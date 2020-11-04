var game1 = document.getElementById("img1");
var game2 = document.getElementById("img2");
var game3 = document.getElementById("img3");
var text = document.getElementById("paragraphtext");
var HeaderText = document.getElementById("headertext");

game1.addEventListener("click", function () {
  text.innerHTML =
    "With new revolutionary tech we can achieve a new standard within gaming, with 4K textures and outstanding animations we offer you a new and complete gaming experience.";
  HeaderText.innerHTML = "GAMING EVOLVED";
});

game2.addEventListener("click", function () {
  text.innerHTML =
    "Our games are played and purchased worldwide through the world, we have a global community which gives everyone a place in the community.";
  HeaderText.innerHTML = "WORLDWIDE";
});

game3.addEventListener("click", function () {
  text.innerHTML = "TEST";
  HeaderText.innerHTML = "TEST";
});

var activeimg = document.getElementsByClassName("imgelement");

for (var i = 0; i < activeimg.length; i++) {
  activeimg[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
