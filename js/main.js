//Create empty variables
var style="null";
var type="null";
var output="null";
var pattern =  0;
var finalName = "null";
var title = "null";
var regex = new RegExp("([b-df-hj-np-tv-z])\1{2,}");



//Elegant Syllables
var elegantff=["El", "Il", "Vei", "Sa", "Se", "Mei", "Lae", "Ili", "Sie", "Et-", "Ca", "Ca-", "Ët", "Sï", "Ëf"];
var elegantfl=["si", "et", "fa", "kie", "ji", "ala", "ale", "ël", "alë", "", "", "", "", ""];
var elegantlf=["Va", "Ca", "Mia", "Vie", "Hel", "Hol", "Vei"];
var elegantll=["son", "an", "ae", "ai", "rea", "en", "ei", "ine", "","","","","","",""];

//Evil Syllables
var evilff=["Ka", "Ka'", "Ka-", "Zo", "Zo'", "Wre", "Wyre", "Wey", "Wa'", "Wy'", "Gri", "Tem", "Nat", "Str"];
var evilfl=["xz", "xz", "x", "z", "try", "ty", "zi", "zel", "per", "tyr", "wa", "wu", "wi", "vel", "vex", "vez", "", "", "", "",  "", "", ""];
var evillf=["Yl-", "Yl", "Ya", "Ya-", "Ya'"];
var evilll=["qa", "qe", "xas"];

//Rustic Syllables
var rusticff=["Co", "Mi", "Ed", "Ja", "Gre", "Bru", "Mi", "To", "Bla", "Mar", "Da", "Va", "No", "Jo", "Mat", "And", "Oli", "No", "Ja", "Osc", "Ha", "Cha", "Alf", "Geo", "Wil"];
var rusticfl=["so", "ct", "or", "en", "oe", "aw", "sh", "rl", "aig", "mon", "an", "joe", "ry", "ex", "ank", "m",  "iv", "er", "cob", "ah", "ck", "rry", "r" , "l", "lie",  "fie", "ge", "orge", "am", "", "", "", "-an", "-at", "-ca","", "", "", "", "", "", "", "", "",];
var rusticll=["Car", "Mac", "Bur", "Sno", "Spa", "Bat", "Law", "La", "Dav", "Da", "Ki", "Bat", "Bis", "Pre", "Hi", "Ka", "Qui", "Co", "Gra",  "G", "A",  "S"];
var rusticlf=["iels", "hop", "cot", "ot", "ing", "ins", "in", "ne", "e", "ane", "in", "per", "er", "son", "erd", "er", "ins", "or", "ord", "ka",  "", "", "", "", "", "", "", "", "", ""];
var rusticSuffixes=["son", "son", "sson", "dottir", "datr", "doter", "bern", "barn", "kin",  "", "", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "", "", "","","", "", "", "", "", "", "", "", "", "",""];

//Nordic Syllables
var nordicff=["Yen", "Tet", "Mak", "Tsi", "Kha", "Lar"];
var nordicfl=["ta"];
var nordicfl=[];
var nordicll=[];

//Tiles
var militaryTitlePrefixes=["Grand ", "Great ", "First ", "Second ", "High ", "Vice-",  "Acting ", "Honorary ",  "", "", "", "", "", "", ""];
var militaryTitles=["Field Marshal", "General", "Major", "Commander", "Admiral", "Brigadier", "Colonel", "Captain", "Private", "Commodore", "Corporal", "Master-At-Arms", "Cadet", "Legate", "Prefect"];
var nobleTitles=["Despot","Duke","Vice Duke","Archduke","Grand Duke","Duchess","Vice Duchess","Arch Duchess","Grand Duchess","Count","Countess","Earl","Earless","Jarl","Viscount","Viscountess","Baron","Baroness","Baronet","Baronetess","Knight","Lord","Lady","Lord","Viceroy","Vicereine","Dame","Esquire"];
var  religiousTitles=["Chaplain","Chancellor","Archbishop","Bishop","Priest","High Priest","Great Priest","Teacher","Brother","Sister","Sibling","Pastor","Reverend","Elder","High Priestess","Great Priestess","Novice","Attendant","Initiate","Druid","Bard"];
var royalTitles=["King", "Queen", "Emperor", "Empress", "Regent", "Prince", "Princess"];
var  royalSuffixes=["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "X","XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "", "", "", ""];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function genPname(){
    var style=document.getElementById("style").value;
    var type=document.getElementById("pnametype").value;
    var titleStyle=document.getElementById("titleStyle").value;


    if (style=="elegant") {
        var firstName = elegantff[getRndInteger(0, elegantff.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)];
        var midName = elegantff[getRndInteger(0, elegantff.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)];
        var lastName = elegantlf[getRndInteger(0, elegantlf.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)];
        var familyName = elegantlf[getRndInteger(0, elegantlf.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)];
    } else if (style=="evil") {
        var firstName = evilff[getRndInteger(0, evilff.length - 1)] + evilfl[getRndInteger(0, evilfl.length - 1)] + evilfl[getRndInteger(0, evilfl.length - 1)];
        var midName = evilff[getRndInteger(0, evilff.length - 1)] + evilfl[getRndInteger(0, evilfl.length - 1)] + evilfl[getRndInteger(0, evilfl.length - 1)];
        var lastName = evillf[getRndInteger(0, evillf.length - 1)] + evilll[getRndInteger(0, evilll.length - 1)] + evilll[getRndInteger(0, evilll.length - 1)];
        var familyName = evillf[getRndInteger(0, evillf.length - 1)] + evilll[getRndInteger(0, evilll.length - 1)] + evilll[getRndInteger(0, evilll.length - 1)];
    } else if (style=="rustic") {
        var firstName = rusticff[getRndInteger(0, rusticff.length - 1)] + rusticfl[getRndInteger(0, rusticfl.length - 1)] + rusticfl[getRndInteger(0, rusticfl.length - 1)];
        var midName = rusticff[getRndInteger(0, rusticff.length - 1)] + rusticfl[getRndInteger(0, rusticfl.length - 1)] + rusticfl[getRndInteger(0, rusticfl.length - 1)];
        var lastName = rusticll[getRndInteger(0, rusticll.length - 1)] + rusticlf[getRndInteger(0, rusticlf.length - 1)] + rusticlf[getRndInteger(0, rusticlf.length - 1)]  
        var familyName = rusticll[getRndInteger(0, rusticll.length - 1)] + rusticlf[getRndInteger(0, rusticlf.length - 1)] + rusticlf[getRndInteger(0, rusticlf.length - 1)] + rusticSuffixes[getRndInteger(0, rusticSuffixes.length-1)];
    } else if (style=="nordic") {
        var firstName = nordicff[getRndInteger(0, nordicff.length - 1)] + nordicfl[getRndInteger(0, nordicfl.length - 1)] + nordicfl[getRndInteger(0, nordicfl.length - 1)];
        var midName = nordicff[getRndInteger(0, nordicff.length - 1)] + nordicfl[getRndInteger(0, nordicfl.length - 1)] + nordicfl[getRndInteger(0, nordicfl.length - 1)];
        var lastName = rusticll[getRndInteger(0, rusticll.length - 1)] + rusticlf[getRndInteger(0, rusticlf.length - 1)] + rusticlf[getRndInteger(0, rusticlf.length - 1)];
        var familyName = rusticll[getRndInteger(0, rusticll.length - 1)] + rusticlf[getRndInteger(0, rusticlf.length - 1)] + rusticlf[getRndInteger(0, rusticlf.length - 1)];
    };

    if (type=="name-f") {finalName = firstName;};
    if (type=="name-fl") {finalName = firstName + " " + lastName;};
    if (type=="name-fml") {finalName = firstName + " " + midName + " "+ lastName;};
    if (type=="name-fmll") {finalName = firstName + " " + midName + " "+ lastName + " " + familyName;};
    if (type=="name-fll") {finalName = firstName +  " "+ lastName + " " + familyName;};

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
    } else if (titleStyle=="royal") {
        title = royalTitles[getRndInteger(0,royalTitles.length - 1)] ;
        output = title + " " + finalName +  " " + royalSuffixes[getRndInteger(0,royalSuffixes.length - 1)] ;
    };
    
    var result = regex.test(output);

    if (result==true){
        genPname();
    } else {

    };

    document.getElementById('nameout').innerHTML =  output;
};