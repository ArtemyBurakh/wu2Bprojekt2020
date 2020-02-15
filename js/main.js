//Create empty variables to prevent errors
var style="null";
var type="null";
var output="null";
var pattern =  0;
var finalName = "null";
var title = "null";
var result = false;
var style="null";
var type="null";
var titleStyle="null";
var firstName="null";
var midName="null";
var lastName="null";
var familyName="null";
var natureName="null";
var natureWord="null";

//Create regex
var regex3C = new RegExp("([fhlmnsvwz][fhlmnsvwz][fhlmnsvwz])+");
var regex4C = new RegExp("([bcdfghjklmnpqrstvwxz][bcdfghjklmnpqrstvwxz][bcdfghjklmnpqrstvwxz][bcdfghjklmnpqrstvwxz])+");
var regexScore = new RegExp("-\s");
var regexAp = new RegExp("'\s");
var regexSingle = new RegExp("[A-Z]\s");


//Syllables are split into  4-5 groups

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
var nordiclf=["Mi", "Dan"];
var nordicll=["al", "sy", "ma", "dr"];

var southernff=[];
var southernfl=[];
var southernlf=[];
var southernll=[];

//Tiles
var militaryTitlePrefixes=["Grand ", "Great ", "First ", "Second ", "High ", "Vice-",  "Acting ", "Honorary ",  "", "", "", "", "", "", "",  "", "", "", "", "", "", ""];
var militaryTitles=["Field Marshal", "General", "Major", "Commander", "Admiral", "Brigadier", "Colonel", "Captain", "Private", "Commodore", "Corporal", "Master-At-Arms", "Cadet", "Legate", "Prefect"];
var nobleTitles=["Despot","Duke","Vice Duke","Archduke","Grand Duke","Duchess","Vice Duchess","Arch Duchess","Grand Duchess","Count","Countess","Earl","Earless","Jarl","Viscount","Viscountess","Baron","Baroness","Baronet","Baronetess","Knight","Lord","Lady","Lord","Viceroy","Vicereine","Dame","Esquire"];
var religiousTitles=["Chaplain","Chancellor","Archbishop","Bishop","Priest","High Priest","Great Priest","Teacher","Brother","Sister","Sibling","Pastor","Reverend","Elder","High Priestess","Great Priestess","Novice","Attendant","Initiate","Druid","Bard"];
var royalTitles=["King", "Queen", "Emperor", "Empress", "Regent", "Prince", "Princess"];
var  royalSuffixes=["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "X","XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "", "", "", ""];

var englishPrefixesUni=["Deep", "Reach", "Sky", "Knife", "Bleak", "Blind", "Bone", "Boulder", "Brine", "Brittle", "Broken", "Bronze", "Chill", "Crags", "Crag", "Cron", "Crystal", "Dark", "Dusk", "Elder", "Fallow", "Fore", "Gloom", "Gray", "Green", "Honey", "Moss", "Night", "Pine", "Pure", "Raven", "Reach", "Rime", "Shadow", "Shimmer", "Snap", "Still", "Sunder", "White", "Wolf", "Autumn", "Wind", "Ice", "Bone", "Dragon", "Elders", "North", "Shear", "Sky", "Chill", "Corpe", "Merry", "Drift", "Fell", "Mist", "Bleak", "Steam", "Stone", "Ember", "Gloom", "Golden", "Red", "Banner", "Bleak", "Wind", "Cliff", "Iron", "River", "Arc", "Shriek", "Snow", "Sand", "Leaf", "Sun", "Heart", "Moor"];
var englishSuffixesUni=[];
var englishPrefixesSep=[];
var englishSuffixesSep=[];

/* -----------------------------------*/

var rivers=["River", "River", "River", "River", "Creek", "Brook", "Run"];
var lakes=["Lake", "Lake", "Lake", "Lake", "Pond", "Basin", "Pool"];
var seas=["Ocean", "Sea"];
var valleys=["Dale", "Valley", "Vale", "Dell", "Pass", "Crevice"];
var mountains=["Mountain", "Peak", "Hill", "Ridge"];
var caves=["Cave", "Cave", "Cave", "Grotto", "Hollow", "Cavern", "Redoubt", "Depths", "Slope", "Burrow", "Caverns"];
var ravines=["Ravine", "Canyon"];
var peaks=["Peak", "Point", "Bluff"];
var clearings=["Clearing", "Glade", "Glenn"];
var deserts=["Desert", "Flats", "Wilds"];
var forests=["Forest", "Forest", "Wood", "Woods", "Woodlands"];

//Random function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

//Generate  Person's Name
function genPname(){
   
    //Retrieve dropdown values    
    style=document.getElementById("pNameStyle").value;
    type=document.getElementById("pNameType").value;
    titleStyle=document.getElementById("titleStyle").value;

    //Select a syllable set based on retrieved style and generate the four potentential names
    if (style=="elegant") {
        firstName = elegantff[getRndInteger(0, elegantff.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)];
        midName = elegantff[getRndInteger(0, elegantff.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)];
        lastName = elegantlf[getRndInteger(0, elegantlf.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)];
        familyName = elegantlf[getRndInteger(0, elegantlf.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)];
    } else if (style=="evil") {
        firstName = evilff[getRndInteger(0, evilff.length - 1)] + evilfl[getRndInteger(0, evilfl.length - 1)] + evilfl[getRndInteger(0, evilfl.length - 1)];
        midName = evilff[getRndInteger(0, evilff.length - 1)] + evilfl[getRndInteger(0, evilfl.length - 1)] + evilfl[getRndInteger(0, evilfl.length - 1)];
        lastName = evillf[getRndInteger(0, evillf.length - 1)] + evilll[getRndInteger(0, evilll.length - 1)] + evilll[getRndInteger(0, evilll.length - 1)];
        familyName = evillf[getRndInteger(0, evillf.length - 1)] + evilll[getRndInteger(0, evilll.length - 1)] + evilll[getRndInteger(0, evilll.length - 1)];
    } else if (style=="rustic") {
        firstName = rusticff[getRndInteger(0, rusticff.length - 1)] + rusticfl[getRndInteger(0, rusticfl.length - 1)] + rusticfl[getRndInteger(0, rusticfl.length - 1)];
        midName = rusticff[getRndInteger(0, rusticff.length - 1)] + rusticfl[getRndInteger(0, rusticfl.length - 1)] + rusticfl[getRndInteger(0, rusticfl.length - 1)];
        lastName = rusticll[getRndInteger(0, rusticll.length - 1)] + rusticlf[getRndInteger(0, rusticlf.length - 1)] + rusticlf[getRndInteger(0, rusticlf.length - 1)]  
        familyName = rusticll[getRndInteger(0, rusticll.length - 1)] + rusticlf[getRndInteger(0, rusticlf.length - 1)] + rusticlf[getRndInteger(0, rusticlf.length - 1)] + rusticSuffixes[getRndInteger(0, rusticSuffixes.length-1)];
    } else if (style=="nordic") {
        firstName = nordicff[getRndInteger(0, nordicff.length - 1)] + nordicfl[getRndInteger(0, nordicfl.length - 1)] + nordicfl[getRndInteger(0, nordicfl.length - 1)];
        midName = nordicff[getRndInteger(0, nordicff.length - 1)] + nordicfl[getRndInteger(0, nordicfl.length - 1)] + nordicfl[getRndInteger(0, nordicfl.length - 1)];
        lastName = nordiclf[getRndInteger(0, nordiclf.length - 1)] + nordicll[getRndInteger(0, nordicll.length - 1)] + nordicll[getRndInteger(0, nordicll.length - 1)];
        familyName = nordiclf[getRndInteger(0, nordiclf.length - 1)] + nordicll[getRndInteger(0, nordicll.length - 1)] + nordicll[getRndInteger(0, nordicll.length - 1)];
    };

    //Arranage the names based on type 
    if (type=="name-f") {
        finalName = firstName;
    } else if (type=="name-l") {
        finalName = lastName;
    } else if (type=="name-fl") {
        finalName = firstName + " " + lastName;
    } else if (type=="name-fml") {
        finalName = firstName + " " + midName + " "+ lastName;
    } else if (type=="name-fmll") {
        finalName = firstName + " " + midName + " "+ lastName + " " + familyName;
    } else if (type=="name-fll") {
        finalName = firstName +  " "+ lastName + " " + familyName;
    };

    //Add titles, unless no title is selected
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
    
    //Checks the output against a number regex that prevent unpronouncable names from being generated, unless the style is set to otherworldly
     
    if (style=="otherworldly") {
      
    } else {
         //Tests for three hard consonants in a row
         result = regex3C.test(output);

         //If the regex test result is positive,  generate a new name 
        if (result==true){
            genPname();
        } else {

        };

        //Tests for any four consonants in a row
        result = regex4C.test(output);

        //If the regex test result is positive,  generate a new name 
       if (result==true){
           genPname();
       } else {

       };
    };

    //Checks the output agains two regex that prevent grammatically unsound names from being generated, such as names ending in - or '

    //Tests for - character followed by a blankspace
    result = regexScore.test(output);

    //If the regex test result is positive,  generate a new name 
    if (result==true){
        genPname();
    } else {

    };

    //Tests for ' character followed by a blankspace
    result = regexAp.test(output);

    //If the regex test result is positive,  generate a new name 
    if (result==true){
        genPname();
    } else {

    };

    //Test for a capital letter followed by a whilespace
    result = regexSingle.test(output);

      //If the regex test result is positive,  generate a new name 
    if (result==true){
        genPname();
    } else {

    };

    //Display output
    document.getElementById('nameout').innerHTML =  output;
};

function genNatureName() {
    style=document.getElementById("NatureNameStyle").value;
    type=document.getElementById("NatureNameType").value;
    
    pattern=getRndInteger(0,8);

     if (style=="elegant") {
        
        if (getRndInteger(0,2)==1) {
            natureName = elegantff[getRndInteger(0, elegantff.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)];
        } else {
            natureName = elegantlf[getRndInteger(0, elegantlf.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)];
        };
        
    } else if (style=="evil") {
        
        if (getRndInteger(0,2)==1) {
            natureName = evilff[getRndInteger(0, evilff.length - 1)] + evilfl[getRndInteger(0, evilfl.length - 1)] + evilfl[getRndInteger(0, evilfl.length - 1)];
        } else {
            natureName = evillf[getRndInteger(0, evillf.length - 1)] + evilll[getRndInteger(0, evilll.length - 1)] + evilll[getRndInteger(0, evilll.length - 1)];
        };

    } else if (style=="rustic") {
        
        if (getRndInteger(0,1)==1) {
            natureName = rusticff[getRndInteger(0, rusticff.length - 1)] + rusticfl[getRndInteger(0, rusticfl.length - 1)] + rusticfl[getRndInteger(0, rusticfl.length - 1)];
        } else {
            natureName = rusticll[getRndInteger(0, rusticll.length - 1)] + rusticlf[getRndInteger(0, rusticlf.length - 1)] + rusticlf[getRndInteger(0, rusticlf.length - 1)];
        };
        
    } else if (style=="nordic") {
        
        if (getRndInteger(0,2)==1) {
            natureName = nordicff[getRndInteger(0, nordicff.length - 1)] + nordicfl[getRndInteger(0, nordicfl.length - 1)] + nordicfl[getRndInteger(0, nordicfl.length - 1)];
        } else {
            natureName = nordiclf[getRndInteger(0, nordiclf.length - 1)] + nordicll[getRndInteger(0, nordicll.length - 1)] + nordicll[getRndInteger(0, nordicll.length - 1)];
        };

    };    

    if (type=="river") {
        natureWord=rivers[getRndInteger(0, rivers.length - 1)];
    } else if (type=="lake") {
        natureWord=lakes[getRndInteger(0, lakes.length - 1)];
    } else if (type=="sea") {

    } else if (type=="valley") {

    } else if (type=="mountain") {

    } else if (type=="cave") {

    } else if (type=="ravine") {

    } else if (type=="peak") {

    } else if (type=="clearing") {

    } else if (type=="desert") {

    } else if (type=="forest") {

    };

    if (pattern<3) {
        finalName = natureWord + " " + natureName;
    } else if (pattern>3 && pattern<6) {
        finalName =  natureName + " " + natureWord;
    } else if (pattern==7) {
        finalName = natureName + "'s " + natureWord;
    } else if (pattern==8) {
        finalName = natureWord + " of " + natureName;
    };

    //Checks the output against a number regex that prevent unpronouncable names from being generated, unless the style is set to otherworldly
    
    if (style=="otherworldly") {
    
    } else {
            //Tests for three hard consonants in a row
            result = regex3C.test(output);

            //If the regex test result is positive,  generate a new name 
        if (result==true){
            genPname();
        } else {

        };

        //Tests for any four consonants in a row
        result = regex4C.test(output);

        //If the regex test result is positive,  generate a new name 
        if (result==true){
            genPname();
        } else {

        };
    };

    //Checks the output agains two regex that prevent grammatically unsound names from being generated, such as names ending in - or '

    //Tests for - character followed by a blankspace
    result = regexScore.test(output);

    //If the regex test result is positive,  generate a new name 
    if (result==true){
        genPname();
    } else {

    };

    //Tests for ' character followed by a blankspace
    result = regexAp.test(output);

    //If the regex test result is positive,  generate a new name 
    if (result==true){
        genPname();
    } else {

    };

    //Test for a capital letter followed by a whilespace
    result = regexSingle.test(output);

        //If the regex test result is positive,  generate a new name 
    if (result==true){
        genPname();
    } else {

    };

    //Display output
    document.getElementById('nameout').innerHTML =  finalName;
};