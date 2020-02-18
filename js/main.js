//Create empty variables to prevent errors
var style="null";
var type="null";
var output="null";
var finalName = "null";
var title = "null";
var result = false;

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
var nordicff=["Abe", "Jen", "Ad", "Ae", "Ag", "Ag", "Ag", "Al", "Alf", "Alf", "Alv", "And", "And", "An", "Ar", "Arn", "As", "Ast", "Avu", "Ba", "Bal", "Bei", "Ben", "Ber", "Bjor", "Bjö", "Bjä", "Bod", "Bor", "Bre", "Bri", "Bryn", "Bul", "Har", "Dag", "Dan", "Dor", "Dra", "Dre", "Ed", "Ei", "Em", "Er", "Ev", "Fad", "Far", "Fell", "Fre", "Fro", "Fru", "Ful", "Gal", "Gei", "Ger", "Gis", "Gja", "Gol", "Gun", "Gre", "Gros", "Gun", "Gun", "Gun", "Had", "Had", "Hel", "Haj", "Har", "Hei", "Hei", "Hel", "Hen", "Hem", "Hert", "Horn", "Hjö", "Hjä", "Hor", "Her", "Hro", "Hul", "Id", "Ida", "Ig", "Igr", "Ing", "Ing", "Jer", "Jör", "Kar", "Kar", "Kje", "Kja", "Kyr", "Lam", "Lei", "Lem", "Lil", "Lis", "Lis", "Lod", "Lok", "Lond", "Lyd", "Läd", "Låd", "Mar", "Mar", "Mar", "Mat", "Mat", "Mau", "Må", "Mø", "Lø", "Tø", "Nar", "Når", "Nik", "Nil", "Nik", "Nor", "Od", "Og", "Ol", "On", "Or", "Jal", "Jol", "Jöl", "Jor", "Jor", "Kli", "Lam", "Leif", "Lef", "Lei", "Läg", "Lod", "Lor", "Mar", "Mar", "Mav", "Mik", "Mik", "Nar", "Nil", "Pon", "Pan", "Pån", "Rag", "Rev", "Ris", "Räv", "Ror", "Run", "Rus", "Sab", "Sör", "Sib", "Sig", "Sig", "Sig", "Sin", "Søn", "Søl", "Tal", "Tek", "Tem", "Tor", "Tør", "Tat", "Töt", "Tör", "Tho", "Tho", "Tyr", "Tor", "Tor", "Tor", "Tsu", "Uf", "Uf", "Ulf", "Uv", "Yng", "Yng", "Ys", "Wil", "Wil", "Wulf", "Wul", "Vor", "Vid", "Vid", "Vång", "Val", ""];
var nordicfl=["", "" , "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",  "", "", "ta", "var", "vild", "la", "na", "ni", "nis", "ing", "rinn", "va", "vor", "ders", "ders", "durs", "dörs", "nor", "ke", "fur", "sur", "ar", "nir", "gruf", "nar", "bus", "tild", "tilda", "or", "si", "na", "tur", "or", "lam", "il", "id", "fri", "lund", "lund", "lund", "tar", "ti", "ja", "ond", "wulf", "ling", "ing", "frek", "der", "dis", "gar", "ny", "ur", "en", "fa", "ifa", "mar", "id", "grim", "lund", "di", "ik", "kur", "is", "dis", "ida", "lk", "kas", "rd", "red", "ryd", "dir", "rig", "ta", "ka", "nar", "hem", "heim", "hjem", "hejmm", "ing", "ing", "jmar", "har", "dur", "ak", "ak", "rm", "ach", "gor", "ka", "ta", "ta", "jar", "jar", "rum", "ing", "var", "nar", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "ing", "ga", "ra", "rid", "na", "tar", "tär", "la", "hor", "dis", "den", "ic", "ik", "rik", "leif", "ta", "ta", "rl", "la", "ar", "eld", "eld", "ud", "lak", "ir", "ir", "dar", "yr", "ust", "rs", "ur", "arr", "elf", "kil", "bet", "i", "und", "heim", "en", "ul", "ga", "jar", "ring", "ga", "var", "mir", "ilf", "n"];
var nordiclf=["Mi", "Dan"];
var nordicll=["al", "sy", "ma", "dr"];

var southernff=["Moh", "You", "Ah", "Mah", "Mus", "Yas", "Tah", "Kha", "Ham", "Bil", "Ib", "Hass", "Hus", "Kar", "Tar", "Ab", "Ali", "Sel", "Abd", "Meh", "Om", "Mur", "Ra", "Sa", "Bra", "Dja", "Fat", "Sa", "Fat", "Mer", "Ai", "Kar", "Ke", "Nad", "Sha", "Fat", "Ma", "Re", "Far", "Ay", "Sha", "Ash", "Sah", "Fat", "Dal", "Doh", "Faj", "Su", "Ro", "Hos", "Has", "Gam", "Hab"];
var southernfl=["del-Rah", "am", "ed", "sef", "sef", "sal-Ya", "am-Kha", "med", "moud", "ta", "fa", "sin", "ha", "led", "za", "al", "him", "san", "sein", "im", "eq", "del", "man", "ar", "ad", "dal", "lah", "chid", "him", "mel", "ima", "iha", "ara", "cha", "ina", "ri", "ma", "i", "maa", "em", "hd", "ra", "qat", "har", "in", "al", "ha", "an", "iny", "naa", "ila", "al", "at", "bib", "a", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var southernlf=[];
var southernll=[];

var easternff=[];
var easternfl=[];
var easternlf=[];
var easternll=[];

//Tiles
var militaryTitlePrefixes=["Grand ", "Great ", "First ", "Second ", "High ", "Vice-",  "Acting ", "Honorary ",  "", "", "", "", "", "", "", "", "", "", "",  "", "", "", "", "", "", ""];
var militaryTitles=["Field Marshal", "General", "Major", "Commander", "Admiral", "Brigadier", "Colonel", "Captain", "Private", "Commodore", "Corporal", "Master-At-Arms", "Cadet", "Legate", "Prefect"];
var nobleTitles=["Despot","Duke","Vice Duke","Archduke","Grand Duke","Duchess","Vice Duchess","Arch Duchess","Grand Duchess","Count","Countess","Earl","Earless","Jarl","Viscount","Viscountess","Baron","Baroness","Baronet","Baronetess","Knight","Lord","Lady","Lord","Viceroy","Vicereine","Dame","Esquire"];
var religiousTitles=["Chaplain","Chancellor","Archbishop","Bishop","Priest","High Priest","Great Priest","Teacher","Brother","Sister","Sibling","Pastor","Reverend","Elder","High Priestess","Great Priestess","Novice","Attendant","Initiate","Druid","Bard"];
var royalTitles=["King", "Queen", "Emperor", "Empress", "Regent", "Prince", "Princess"];
var  royalSuffixes=["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "X","XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "", "", "", ""];

var englishPrefixesUni=["Deep", "Reach", "Sky", "Knife", "Bleak", "Blind", "Bone", "Boulder", "Brine", "Brittle", "Broken", "Bronze", "Chill", "Crags", "Crag", "Cron", "Crystal", "Dark", "Dusk", "Elder", "Fallow", "Fore", "Gloom", "Gray", "Green", "Honey", "Moss", "Night", "Pine", "Pure", "Raven", "Reach", "Rime", "Shadow", "Shimmer", "Snap", "Still", "Sunder", "White", "Wolf", "Autumn", "Wind", "Ice", "Bone", "Dragon", "Elders", "North", "Shear", "Sky", "Chill", "Corpe", "Merry", "Drift", "Fell", "Mist", "Bleak", "Steam", "Stone", "Ember", "Gloom", "Golden", "Red", "Banner", "Bleak", "Wind", "Cliff", "Iron", "River", "Arc", "Shriek", "Snow", "Sand", "Leaf", "Bile", "Sun", "Heart", "Moor", "Doom", "Blue", "Double", "Cold", "Black", "Blood", "Bramble", "Break", "Brittle", "Little", "Deep", "Dun", "Field", "Finger", "Fyre", "Fire", "Gray", "Hay", "Kings", "Queens", "Leaf", "Red", "Sand", "Shin", "Side", "Tide", "Timber", "Toad", "Under", "Well", "Wander", "Hack", "Tre", "Tarn", "Pen", "Nant", "Aber"];
var englishSuffixesUni=["stad", "star", "glow", "gate", "wind", "spire", "point", "coast", "chill", "fall", "shin", "wind", "lane", "lan", "wallow", "drift", "shade", "water", "glow", "gleam", "vangr", "stone", "moril", "sake", "reach", "winter", "wall", "water", "strand", "gale", "moon", "peak", "water", "scar", "cliff", "water", "green", "rock", "mist", "leg", "fringe", "fall", "stone", "skull", "shade", "spring", "helm", "water", "watch", "tooth", "wind", "point", "born", "tand", "furrow", "light", "frost", "shod", "let", "light", "shade", "watch", "call", "sand", "waste", "scorch", "scorn", "wind", "crag", "hill", "arch", "spring", "mist", "flow", "gulch", "water", "shard", "bound", "rock", "point", "wind", "hills", "mist", "bound", "helm", "mere", "grave", "wood", "moon", "claw", "leaf", "crust", "main", "run", "point", "neck", "coal", "fish", "fathom", "scorn", "barrow", "house", "bowl", "fire", "light", "mead", "crest", "stand", "guard", "pall", "tow", "bone", "way", "mark", "spring", "worth", "win", "wick", "weald", "non", "more", "", "", "", "", ""];
var englishPrefixesSep=[];
var englishSuffixesSep=[];

/* -----------------------------------*/

var rivers=["River", "River", "River", "River", "Creek", "Brook", "Run"];
var lakes=["Lake", "Lake", "Lake", "Lake", "Pond", "Basin", "Pool"];
var seas=["Ocean", "Sea"];
var valleys=["Dale", "Valley", "Vale", "Dell", "Pass", "Crevice"];
var mountains=["Mount",  "Mount", "Mount", "Mount", "Hill", "Ridge"];
var caves=["Cave", "Cave", "Cave", "Grotto", "Hollow", "Cavern", "Depths", "Slope", "Burrow", "Caverns", "Depths"];
var ravines=["Ravine", "Canyon", "Crevice"];
var peaks=["Peak", "Point", "Bluff"];
var clearings=["Clearing", "Glade", "Glenn"];
var deserts=["Desert", "Flats", "Wilds"];
var forests=["Forest", "Forest", "Wood", "Woods", "Woodlands"];

document.getElementById("natureGenerate").addEventListener("click", genPname); 

//Random function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

//Generate  Person's Name
function genPname(){
   
    //Retrieve dropdown values    
    var style=document.getElementById("pNameStyle").value;
    var type=document.getElementById("pNameType").value;
    var titleStyle=document.getElementById("titleStyle").value;

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
    } else if (style=="southern") {
        firstName = southernff[getRndInteger(0, southernff.length - 1)] + southernfl[getRndInteger(0, southernfl.length - 1)] + southernfl[getRndInteger(0, southernfl.length - 1)];
        midName = southernff[getRndInteger(0, southernff.length - 1)] + southernfl[getRndInteger(0, southernfl.length - 1)] + southernfl[getRndInteger(0, southernfl.length - 1)];
        lastName = southernlf[getRndInteger(0, southernlf.length - 1)] + southernll[getRndInteger(0, southernll.length - 1)] + southernll[getRndInteger(0, southernll.length - 1)];
        familyName = southernlf[getRndInteger(0, southernlf.length - 1)] + southernll[getRndInteger(0, southernll.length - 1)] + southernll[getRndInteger(0, southernll.length - 1)];  
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
    var style = document.getElementById("NatureNameStyle").value;
    var type = document.getElementById("NatureNameType").value;
    var pattern = getRndInteger(0,9); 
};