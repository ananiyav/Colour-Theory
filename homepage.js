myColour = [`Baby Blue `, `Blue `,`Coral `,`Deep Blue `, `Dark Purple `, `Emerald `, `Green `, `Light Green `, `Turquoise `, `Light Pink `, `Lilac `,`Maroon `, `Orange-Red `, `Purple `, `Red `, `Pink `, `Indigo `, `Yellow `];

let colour = "You should click on " + myColour[Math.floor(Math.random() * myColour.length)];


  let randomColour =
  document.querySelector("button");
  randomColour.addEventListener("runclick", showAlert);
  function showAlert(){
      alert(colour);

  }