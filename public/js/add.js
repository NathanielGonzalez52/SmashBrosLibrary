

const entry = document.getElementsByClassName("entry")[0];
const enter = document.getElementsByClassName("enter")[0];
const back = document.getElementsByClassName("back")[0];

entry.addEventListener("click", ()=> {
  var gamerTag = document.getElementById("gamer-tag").value;
  var playerOne = document.getElementById("mainOne").value;
  var playerTwo = document.getElementById("mainTwo").value;
  var record = document.getElementById("record").value;
  let result = window.confirm(

    "The following will be added to the library: \n\n" + "Gamertag: " + gamerTag + "\nPlayer One: " + playerOne + "\nPlayer Two: " + playerTwo + "\nWin/Loss: " + record + "\nIs this correct?"
  );
  console.log(result);
})

back.addEventListener("click", ()=> {
  window.location = "welcome.html";
})
