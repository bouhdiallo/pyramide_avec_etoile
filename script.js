let nbrLigne = 10;
let  nbrEtoile = 1;
let nbrEspace= nbrLigne - 1;


for(let ligne=0; ligne<nbrLigne; ligne++){
    let toLog = "";

for(let colonne = 0; colonne < nbrEspace; colonne++){
    toLog += " ";

}

for(let colonne = 0; colonne < nbrEtoile; colonne++){
    toLog += "*";

}
console.log(toLog);
nbrEtoile += 2;
nbrEspace--;
}
