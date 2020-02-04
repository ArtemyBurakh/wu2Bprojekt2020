//Create empty variables
var style="null";
var type="null";
var output="null";
var pattern =  0;
var finalName = "null";
var title = "null";



//Elegant Syllables
var elegantff=["El", "Il", "Vei", "Sa", "Se", "Mei", "Lae", "Ili", "Sie"];
var elegantfl=["si", "et", "fa", "kie", "ji", "ala", "ale", "", "", "", "", ""];
var elegantlf=[""];
var elegantll=[""];

//Tiles
var militaryTitlePrefixes=["Grand ", "Great ", "First ", "Second ", "High ", "Vice-",  "Acting ", "Honorary ",  "", "", "", "", "", "", ""];
var militaryTitles=["Field Marshal", "General", "Major", "Commander", "Admiral", "Brigadier", "Colonel", "Captain", "Private", "Commodore", "Corporal", "Master-At-Arms", "Cadet", "Legate", "Prefect"];
var nobleTitles=["Despot","Duke","Vice Duke","Archduke","Grand Duke","Duchess","Vice Duchess","Arch Duchess","Grand Duchess","Count","Countess","Earl","Earless","Jarl","Viscount","Viscountess","Baron","Baroness","Baronet","Baronetess","Knight","Lord","Lady","Lord","Viceroy","Vicereine","Dame","Esquire"];
var  religiousTitles=["Chaplain","Chancellor","Archbishop","Bishop","Priest","High Priest","Great Priest","Teacher","Brother","Sister","Sibling","Pastor","Reverend","Elder","High Priestess","Great Priestess","Novice","Attendant","Initiate","Druid","Bard"];


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function genPname(){
    var style=document.getElementById("style").value;
    var type=document.getElementById("pnametype").value;
    var titleStyle=document.getElementById("titleStyle").value;



    var firstName = elegantff[getRndInteger(0, elegantff.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)];
    var midName = elegantff[getRndInteger(0, elegantff.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)];
    var lastName = elegantlf[getRndInteger(0, elegantlf.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)];
    var familyName = elegantlf[getRndInteger(0, elegantlf.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)];
    
    
    if (type=="name-f") {finalName = firstName;};
    if (type=="name-fl") {finalName = firstName + " " + lastName;};
    if (type=="name-fml") {finalName = firstName + " " + midName + " "+ lastName;};
    if (type=="name-fmll") {finalName = firstName + " " + midName + " "+ lastName + " " + familyName;};
    
    if (titleStyle=="noTitle") {
        output = finalName;
    } else if (titleStyle=="military") {
        title =militaryTitlePrefixes[getRndInteger(0,militaryTitlePrefixes.length - 1)] + militaryTitles[getRndInteger(0,militaryTitles.length - 1)];
        output = title + " " + finalName;
    } else if (titleStyle=="noble") {
        title =nobleTitles[getRndInteger(0,nobleTitles.length - 1)];
        output = title + " " + finalName;
    } else if (titleStyle=="religious") {
        title =religiousTitles[getRndInteger(0,religiousTitles.length - 1)];
        output = title + " " + finalName;
    };
    
    document.getElementById('nameout').innerHTML =  output;
};