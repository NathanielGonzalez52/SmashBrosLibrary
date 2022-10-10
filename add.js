


function fighterData() {
  var gamerTag = document.getElementById("playerOne").value;
  var playerTwo = document.getElementById("playerTwo").value;
  console.log(playerOne);
  console.log(playerTwo);
}

const entry = document.getElementsByClassName("entry")[0];
const enter = document.getElementsByClassName("enter")[0];
const back = document.getElementsByClassName("back")[0];

entry.addEventListener("click", ()=> {

  console.log("Not ready yet")
  // functionality imbound
})

back.addEventListener("click", ()=> {
  window.location = "welcome.html";
})
