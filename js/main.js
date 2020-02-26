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

//Create regex
var regex3C = new RegExp("([fhlmnsvwz][fhlmnsvwz][fhlmnsvwz])+");
var regex4C = new RegExp("([bcdfghjklmnpqrstvwxz][bcdfghjklmnpqrstvwxz][bcdfghjklmnpqrstvwxz][bcdfghjklmnpqrstvwxz])+");
var regexScore = new RegExp("-\s");
var regexAp = new RegExp("'\s");
var regexSingle = new RegExp("[A-Z]\s");

//Syllables are split into  4-5 groups

//Elegant Syllables
var elegantff=["El", "Il", "Vei", "Sa", "Se", "Mei", "Lae", "Ili", "Sie", "Et-", "Ca", "Ca-", "Ët", "Sï", "Ëf", "Em", "Lou", "Ja", "Mi", "Li", "Lë", "Ro"];
var elegantfl=["si", "et", "fa", "kie", "ji", "ala", "ale", "ël", "alë", "", "", "", "", "", "ma", "ise", "de", "la", "a", "se", "na"];
var elegantlf=["Va", "Ca", "Mia", "Vie", "Hel", "Hol", "Vei"];
var elegantll=["son", "an", "ae", "ai", "rea", "en", "ei", "ine", "","","","","","",""];

//Evil Syllables
var evilff=["Ka", "Ka'", "Ka-", "Zo", "Zo'", "Wre", "Wyre", "Wey", "Wa'", "Wy'", "Gri", "Tem", "Nat", "Str", "Web"];
var evilfl=["xz", "xz", "x", "z", "try", "ty", "zi", "zel", "per", "tyr", "wa", "wu", "wi", "vel", "vex", "vez", "bam", "na", "", "", "", "",  "", "", ""];
var evillf=["Yl-", "Yl", "Ya", "Ya-", "Ya'", "Ze", "Ta", "Ty", "Tzy", "Xa", "Xy", "Lyx"];
var evilll=["qa", "qe", "xas", "tza", "vie", "loch", "ach", "tra", "ze", "vje", "ale", "we"];

//Rustic Syllables
var rusticff=["Co", "Mi", "Ed", "Ja", "Gre", "Bru", "Mi", "To", "Bla", "Mar", "Da", "Va", "No", "Jo", "Mat", "And", "Oli", "No", "Ja", "Osc", "Ha", "Cha", "Alf", "Geo", "Wil", "Ja", "Ja", "Dan", "Con", "Se", "Ad", "Mich", "Char", "Lu", "Le", "Tho", "Matt", "Oli", "Is", "Av", "Li", "El", "Em", "Em", "Soph", "Ame", "Gra", "Chlo", "Ev", "No", "Li", "Se", "Al", "Hu", "Gab", "Le", "Joh", "Ma", "Al", "Wil", "Ni", "Na", "Ne", "Vic", "Em", "Lau"];
var rusticfl=["so", "ct", "or", "en", "oe", "aw", "sh", "rl", "aig", "mon", "an", "joe", "ry", "ex", "ank", "m",  "iv", "er", "cob", "ah", "ck", "rry", "r" , "l", "lie",  "fie", "ge", "orge", "am", "", "", "", "-an", "-at", "-ca","", "", "", "", "", "", "", "", "", "ck", "mes", "el", "i", "or", "an", "am", "ael", "lie", "ke", "wis", "mas", "hew", "via", "la", "va", "ly", "la", "ily", "ma", "ie", "lia", "ce", "e", "ie", "ah", "am", "bas", "ti", "enne", "ex", "go", "ri", "el", "on", "rk", "fie", "iam", "na", "tal", "ia", "la", "to", "ria", "ma", "ra", "", "", "", "", "", ""];
var rusticlf=["Car", "Mac", "Bur", "Sno", "Spa", "Bat", "Law", "La", "Dav", "Da", "Ki", "Bat", "Bis", "Pre", "Hi", "Ka", "Qui", "Co", "Gra",  "G", "A",  "S", "Smi", "Jo", "Tay", "Bro", "Wil", "Wil", "Dav", "Wri", "Ev", "Wal", "Whi"];
var rusticll=["iels", "hop", "cot", "ot", "ing", "ins", "in", "ne", "e", "ane", "in", "per", "er", "son", "erd", "er", "ins", "or", "ord", "ka",  "", "", "", "", "", "", "", "", "", "", "th", "nes", "lor", "wn", "iam", "s", "s", "s", "ies", "ght", "ans", "ker", "te"];
var rusticSuffixes=["son", "son", "sson", "dottir", "datr", "doter", "bern", "barn", "kin",  "s", "s", "s",  "s", "", "", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "", "", "","","", "", "", "", "", "", "", "", "", "",""];

//Nordic Syllables
var nordicff=["Abe","Lur", "Jen", "Ad", "Ae", "Ag", "Ag", "Ag", "Al", "Alf", "Alf", "Alv", "And", "And", "An", "Ar", "Arn", "As", "Ast", "Avu", "Ba", "Bal", "Bei", "Ben", "Ber", "Bjor", "Bjö", "Bjä", "Bod", "Bor", "Bre", "Bri", "Bryn", "Bul", "Har", "Dag", "Dan", "Dor", "Dra", "Dre", "Ed", "Ei", "Em", "Er", "Ev", "Fad", "Far", "Fell", "Fre", "Fro", "Fru", "Ful", "Gal", "Gei", "Ger", "Gis", "Gja", "Gol", "Gun", "Gre", "Gros", "Gun", "Gun", "Gun", "Had", "Had", "Hel", "Haj", "Har", "Hei", "Hei", "Hel", "Hen", "Hem", "Hert", "Horn", "Hjö", "Hjä", "Hor", "Her", "Hro", "Hul", "Id", "Ida", "Ig", "Igr", "Ing", "Ing", "Jer", "Jör", "Kar", "Kar", "Kje", "Kja", "Kyr", "Lam", "Lei", "Lem", "Lil", "Lis", "Lis", "Lod", "Lok", "Lond", "Lyd", "Läd", "Låd", "Mar", "Mar", "Mar", "Mat", "Mat", "Mau", "Må", "Mø", "Lø", "Tø", "Nar", "Når", "Nik", "Nil", "Nik", "Nor", "Od", "Og", "Ol", "On", "Or", "Jal", "Jol", "Jöl", "Jor", "Jor", "Kli", "Lam", "Leif", "Lef", "Lei", "Läg", "Lod", "Lor", "Mar", "Mar", "Mav", "Mik", "Mik", "Nar", "Nil", "Pon", "Pan", "Pån", "Rag", "Rev", "Ris", "Räv", "Ror", "Run", "Rus", "Sab", "Sör", "Sib", "Sig", "Sig", "Sig", "Sin", "Søn", "Søl", "Tal", "Tek", "Tem", "Tor", "Tør", "Tat", "Töt", "Tör", "Tho", "Tho", "Tyr", "Tor", "Tor", "Tor", "Tsu", "Uf", "Uf", "Ulf", "Uv", "Yng", "Yng", "Ys", "Wil", "Wil", "Wulf", "Wul", "Vor", "Vid", "Vid", "Vång", "Val"];
var nordicfl=["burk", "", "" , "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",  "", "", "ta", "var", "vild", "la", "na", "ni", "nis", "ing", "rinn", "va", "vor", "ders", "ders", "durs", "dörs", "nor", "ke", "fur", "sur", "ar", "nir", "gruf", "nar", "bus", "tild", "tilda", "or", "si", "na", "tur", "or", "lam", "il", "id", "fri", "lund", "lund", "lund", "tar", "ti", "ja", "ond", "wulf", "ling", "ing", "frek", "der", "dis", "gar", "ny", "ur", "en", "fa", "ifa", "mar", "id", "grim", "lund", "di", "ik", "kur", "is", "dis", "ida", "lk", "kas", "rd", "red", "ryd", "dir", "rig", "ta", "ka", "nar", "hem", "heim", "hjem", "hejmm", "ing", "ing", "jmar", "har", "dur", "ak", "ak", "rm", "ach", "gor", "ka", "ta", "ta", "jar", "jar", "rum", "ing", "var", "nar", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "ing", "ga", "ra", "rid", "na", "tar", "tär", "la", "hor", "dis", "den", "ic", "ik", "rik", "leif", "ta", "ta", "rl", "la", "ar", "eld", "eld", "ud", "lak", "ir", "ir", "dar", "yr", "ust", "rs", "ur", "arr", "elf", "kil", "bet", "i", "und", "heim", "en", "ul", "ga", "jar", "ring", "ga", "var", "mir", "ilf", "n"];
var nordiclf=["Mi", "Dan", "Niel", "Jen", "Han", "Ped", "And", "Ras", "Pet", "Sär", "Sör", "Alf", "Alf", "Alv", "Gun", "Gre", "Gros", "Lab", "Mei", "Ban", "Sal", "Gis", "Gja", "Gol", "Gun", "Gre"];
var nordicll=["al", "sy", "ma", "dr", "er", "er", "en", "mus", "er", "mus", "ten",  "", "", "",  "", "", "ta", "var", "vild", "la", "na", "ni", "nis", "ing", "rinn", "va", "vor", "ders", "ders", "durs", "dörs", "nor", "ke", "fur", "sur", "ar", "nir", "", "", "", "", "", "", "", "", "", ""];
var nordicSuffixes=["son", "son", "sson", "dottir", "datr", "doter", "bern", "barn", "kin",  "", "", "", "", "", "", "", "", "", "","", ""];

var southernff=["Moh", "You", "Ah", "Mah", "Mus", "Yas", "Tah", "Kha", "Ham", "Bil", "Ib", "Hass", "Hus", "Kar", "Tar", "Ab", "Ali", "Sel", "Abd", "Meh", "Om", "Mur", "Ra", "Sa", "Bra", "Dja", "Fat", "Sa", "Fat", "Mer", "Ai", "Kar", "Ke", "Nad", "Sha", "Fat", "Ma", "Re", "Far", "Ay", "Sha", "Ash", "Sah", "Fat", "Dal", "Doh", "Faj", "Su", "Ro", "Hos", "Has", "Gam", "Hab"];
var southernfl=["-Kha", "del-Rah", "am", "ed", "sef", "sef", "sal-Ya", "am-Kha", "med", "moud", "ta", "fa", "sin", "ha", "led", "za", "al", "him", "san", "sein", "im", "eq", "del", "man", "ar", "ad", "dal", "lah", "chid", "him", "mel", "ima", "iha", "ara", "cha", "ina", "ri", "ma", "i", "maa", "em", "hd", "ra", "qat", "har", "in", "al", "ha", "an", "iny", "naa", "ila", "al", "at", "bib", "a", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var southernlf=["Le", "Yo", "Dav", "Am", "Om", "Ha", "Ali", "Mah", "Ah", "Has", "Ali", "Ib", "Gam", "Ab", "Sa", "Sal", "Ad", "Mos", "Sam", "Sol", "Sal", "Na", "Sa", "Kha", "El"];
var southernll=["vi", "sef", "suf", "id", "ar", "er", "dad", "moud", "med", "san", "ra", "him", "al", "del", "lah", "el", "afa", "ir", "i", "man", "em", "eh", "bil", "yed", "y", "ed", "lil", "sa", "yed"];
var southernSuffixes=["i", "i", "i", "i", "", "", "", "", "", "", ""];

var easternff=["Na", "An", "Bo", "Che", "De", "Do", "Fe", "Ga", "Gu", "Hu", "Ji", "Ji", "Ka", "Lia", "Ni", "Pe", "Ta", "We", "Yo", "We", "Sō", "Mi", "Ich", "It", "Sa", "Re", "Hin", "Har", "Asa", "Har", "Tom", "Sō", "Yu", "Ara", "Hen", "Har", "Yu", "Ry", "Tai", "Ai", "Bi", "Fa", "Ho", "Li", "Li", "Ti", "Si", "Sa", "Ri", "Wa", "Ri", "Sa", "Hi", "Yu"];
var easternfl=["ka", "ng", "ng", "ng", "an", "ng", "ng", "i", "n", "ng", "ng", "ng", "ku", "ra", "ko", "i", "a", "ka", "na", "ra", "n", "na", "ma", "ri", "na", "ta", "na", "de", "na", "to", "i", "ka", "su", "ki", "na", "ta", "ru", "ta", "shi", "mo", "ha", "ru", "ru", "ki", "ta", "uma", "ata", "ō", "to", "shi", "to", "ya", "ta", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var easternlf=["Sa", "Ki", "Yi", "Chu", "Cho", "Kwo", "Hwa", "Je", "Sa", "Ch", "Zh", "Xu", "Sun", "Yo", "Ya", "Sa", "Mat", "In", "Haya", "Mo", "Ik"];
var easternll=["tō", "uki", "ha", "shi", "aka", "ana", "be", "tō", "ka", "mu", "ra", "ng", "i", "ng", "ong", "ong", "sa", "su", "mo", "to",  "ri",  "eda", "shi", "oue", "ki", "ang", "ang", "ang", "shi", "da", "ma", "da", "", "", "", "", "", "", "", "",  "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

//Tiles
var militaryTitlePrefixes=["Grand ", "Great ", "First ", "Second ", "High ", "Vice-",  "Acting ", "Honorary ",  "", "", "", "", "", "", "", "", "", "", "",  "", "", "", "", "", "", ""];
var militaryTitles=["Field Marshal", "General", "Major", "Commander", "Admiral", "Brigadier", "Colonel", "Captain", "Private", "Commodore", "Corporal", "Master-At-Arms", "Cadet", "Legate", "Prefect"];
var nobleTitles=["Despot","Duke","Vice Duke","Archduke","Grand Duke","Duchess","Vice Duchess","Arch Duchess","Grand Duchess","Count","Countess","Earl","Earless","Jarl","Viscount","Viscountess","Baron","Baroness","Baronet","Baronetess","Knight","Lord","Lady","Lord","Viceroy","Vicereine","Dame","Esquire"];
var religiousTitles=["Chaplain","Chancellor","Archbishop","Bishop","Priest","High Priest","Great Priest","Teacher","Brother","Sister","Sibling","Pastor","Reverend","Elder","High Priestess","Great Priestess","Novice","Attendant","Initiate","Druid","Bard"];
var royalTitles=["King", "Queen", "Emperor", "Empress", "Regent", "Prince", "Princess"];
var  royalSuffixes=["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "X","XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI", "XXII", "XXIII", "XXIV" , "XXV",  "", "", "", "", "", "", "", "", ""];

var englishPrefixesUni=["Deep", "Reach", "Sky", "Knife", "Bleak", "Blind", "Bone", "Boulder", "Brine", "Brittle", "Broken", "Bronze", "Chill", "Crags", "Crag", "Cron", "Crystal", "Dark", "Dusk", "Elder", "Fallow", "Fore", "Gloom", "Gray", "Green", "Honey", "Moss", "Night", "Pine", "Pure", "Raven", "Reach", "Rime", "Shadow", "Shimmer", "Snap", "Still", "Sunder", "White", "Wolf", "Autumn", "Wind", "Ice", "Bone", "Dragon", "Elders", "North", "Shear", "Sky", "Chill", "Corpe", "Merry", "Drift", "Fell", "Mist", "Bleak", "Steam", "Stone", "Ember", "Gloom", "Golden", "Red", "Banner", "Bleak", "Wind", "Cliff", "Iron", "River", "Arc", "Shriek", "Snow", "Sand", "Leaf", "Bile", "Sun", "Heart", "Moor", "Doom", "Blue", "Double", "Cold", "Black", "Blood", "Bramble", "Break", "Brittle", "Little", "Deep", "Dun", "Field", "Finger", "Fyre", "Fire", "Gray", "Hay", "Kings", "Queens", "Leaf", "Red", "Sand", "Shin", "Side", "Tide", "Timber", "Toad", "Under", "Well", "Wander", "Hack", "Tre", "Tarn", "Pen", "Nant", "Aber"];
var englishSuffixesUni=["stad", "star", "glow", "gate", "wind", "spire", "point", "coast", "chill", "fall", "shin", "wind", "lane", "lan", "wallow", "drift", "shade", "water", "glow", "gleam", "vangr", "stone", "moril", "sake", "reach", "winter", "wall", "water", "strand", "gale", "moon", "peak", "water", "scar", "cliff", "water", "green", "rock", "mist", "leg", "fringe", "fall", "stone", "skull", "shade", "spring", "helm", "water", "watch", "tooth", "wind", "point", "born", "tand", "furrow", "light", "frost", "shod", "let", "light", "shade", "watch", "call", "sand", "waste", "scorch", "scorn", "wind", "crag", "hill", "arch", "spring", "mist", "flow", "gulch", "water", "shard", "bound", "rock", "point", "wind", "hills", "mist", "bound", "helm", "mere", "grave", "wood", "moon", "claw", "leaf", "crust", "main", "run", "point", "neck", "coal", "fish", "fathom", "scorn", "barrow", "house", "bowl", "fire", "light", "mead", "crest", "stand", "guard", "pall", "tow", "bone", "way", "mark", "spring", "worth", "win", "wick", "weald", "non", "more", "", "", "", "", ""];
var englishPrefixesSep=["Dragon", "Four", "Sleeping", "Sky", "Halted", "Blind", "Broken", "Broken", "Broken", "Broken", "Lost ", "Lost", "Broken", "Cracked", "Left", "Right", "Lost", "Dead", "South", "Cold", "Four", "Dead", "Hag", "High", "Rebel's", "Hag's", "Warrior's", "Knight's", "Death's", "Snow", "Dead", "Bleak", "Dead", "Dead", "Forsaken", "Dive", "Hero", "Barren", "Bleak", "Desolate", "Gutted", "Robber's", "Hunter's", "Smuggler's", "Forgotten", "Dead", "Black", "Bleak", "Boreal", "Muck", "Onyx", "Red", "Sage", "Silver", "Dead", "Mossy", "White"];
var englishSuffixesSep=["Bridge", "Shield", "Giant", "Haven", "Stream", "Cliff", "Fang", "Sword", "Helm", "Oar", "Echo", "Knife", "Tower", "Tusk", "Sand", "Hand", "Prospect", "Crone", "Rock", "Sands", "Wood", "Skull", "Man", "Rock", "Gate", "Fast", "Veil", "Falls", "Rock", "Drop", "Rock", "Flats", "Stone", "Valley", "Ruby", "Glen", "Tooth", "Drop", "Glen", "Ridge", "Walrus", "", "", "", "", "", ""];
var englishCitySuffixes=["stad", "ville", "bridge", "stead", "sted", "shire", "burg", "borg", "ford", "mouth", "by"];

var elegantFirst=elegantff.concat(elegantlf);
var elegantLast=elegantfl.concat(elegantll);

var evilFirst=evilff.concat(evillf);
var evilLast=evilfl.concat(evilll);

var rusticFirst = rusticff.concat(rusticlf);
var rusticLast = rusticfl.concat(rusticll);

var nordicFirst=nordicff.concat(nordiclf);
var nordicLast=nordicfl.concat(nordicll);

var southernFirst=southernff.concat(southernlf);
var southernLast=southernfl.concat(southernll);

var easternFirst=easternff.concat(easternlf);
var easternLast=easternfl.concat(easternll);

/* -----------------------------------*/

var rivers=["River", "River", "River", "River", "Creek", "Brook", "Run"];
var lakes=["Lake", "Lake", "Lake", "Lake", "Pond", "Basin", "Pool"];
var seas=["Ocean", "Sea"];
var valleys=["Dale", "Valley", "Vale", "Dell"];
var mountains=["Mountain", "Hill", "Ridge"];
var caves=["Cave", "Cave", "Cave", "Grotto", "Hollow", "Cavern", "Depths", "Slope", "Burrow", "Caverns", "Depths"];
var ravines=["Ravine", "Canyon", "Crevice", "Pass"];
var peaks=["Peak", "Point", "Bluff"];
var clearings=["Clearing", "Glade", "Glenn"];
var deserts=["Desert", "Flats", "Wilds"];
var forests=["Forest", "Forest", "Forest", "Wood", "Woods", "Woodlands"];

document.getElementById("natureGenerate").addEventListener("click", genPname); 

//Random function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

//Generate  Person's Name
function genPname(){
   //alert(southernfl.length);
    //Retrieve dropdown values    
    var style=document.getElementById("pNameStyle").value;
    var type=document.getElementById("pNameType").value;
    var titleStyle=document.getElementById("titleStyle").value;

    //Select a syllable set based on retrieved style and generate the four potentential names

    switch (style) {
        case "elegant":
            firstName = elegantff[getRndInteger(0, elegantff.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)];
            midName = elegantff[getRndInteger(0, elegantff.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)] + elegantfl[getRndInteger(0, elegantfl.length - 1)];
            lastName = elegantlf[getRndInteger(0, elegantlf.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)];
            familyName = elegantlf[getRndInteger(0, elegantlf.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)] + elegantll[getRndInteger(0, elegantll.length - 1)];
            break;
        case "evil":
            firstName = evilff[getRndInteger(0, evilff.length - 1)] + evilfl[getRndInteger(0, evilfl.length - 1)] + evilfl[getRndInteger(0, evilfl.length - 1)];
            midName = evilff[getRndInteger(0, evilff.length - 1)] + evilfl[getRndInteger(0, evilfl.length - 1)] + evilfl[getRndInteger(0, evilfl.length - 1)];
            lastName = evillf[getRndInteger(0, evillf.length - 1)] + evilll[getRndInteger(0, evilll.length - 1)] + evilll[getRndInteger(0, evilll.length - 1)];
            familyName = evillf[getRndInteger(0, evillf.length - 1)] + evilll[getRndInteger(0, evilll.length - 1)] + evilll[getRndInteger(0, evilll.length - 1)];
            break;
        case "rustic":
            firstName = rusticff[getRndInteger(0, rusticff.length - 1)] + rusticfl[getRndInteger(0, rusticfl.length - 1)] + rusticfl[getRndInteger(0, rusticfl.length - 1)];
            midName = rusticff[getRndInteger(0, rusticff.length - 1)] + rusticfl[getRndInteger(0, rusticfl.length - 1)] + rusticfl[getRndInteger(0, rusticfl.length - 1)];
            lastName = rusticlf[getRndInteger(0, rusticlf.length - 1)] + rusticll[getRndInteger(0, rusticll.length - 1)] + rusticll[getRndInteger(0, rusticll.length - 1)]   + rusticSuffixes[getRndInteger(0, rusticSuffixes.length-1)];
            familyName = rusticlf[getRndInteger(0, rusticlf.length - 1)] + rusticll[getRndInteger(0, rusticll.length - 1)] + rusticll[getRndInteger(0, rusticll.length - 1)]   + rusticSuffixes[getRndInteger(0, rusticSuffixes.length-1)];
                break;
        case "nordic":
            firstName = nordicff[getRndInteger(0, nordicff.length - 1)] + nordicfl[getRndInteger(0, nordicfl.length - 1)] + nordicfl[getRndInteger(0, nordicfl.length - 1)];
            midName = nordicff[getRndInteger(0, nordicff.length - 1)] + nordicfl[getRndInteger(0, nordicfl.length - 1)] + nordicfl[getRndInteger(0, nordicfl.length - 1)];
            lastName = nordiclf[getRndInteger(0, nordiclf.length - 1)] + nordicll[getRndInteger(0, nordicll.length - 1)] + nordicll[getRndInteger(0, nordicll.length - 1)]  + nordicSuffixes[getRndInteger(0, nordicSuffixes.length-1)];
            familyName = nordiclf[getRndInteger(0, nordiclf.length - 1)] + nordicll[getRndInteger(0, nordicll.length - 1)] + nordicll[getRndInteger(0, nordicll.length - 1)]  + nordicSuffixes[getRndInteger(0, nordicSuffixes.length-1)];
            break;
        case "southern":
            firstName = southernff[getRndInteger(0, southernff.length - 1)] + southernfl[getRndInteger(0, southernfl.length - 1)] + southernfl[getRndInteger(0, southernfl.length - 1)];
            midName = southernff[getRndInteger(0, southernff.length - 1)] + southernfl[getRndInteger(0, southernfl.length - 1)] + southernfl[getRndInteger(0, southernfl.length - 1)];
            lastName = southernlf[getRndInteger(0, southernlf.length - 1)] + southernll[getRndInteger(0, southernll.length - 1)] + southernll[getRndInteger(0, southernll.length - 1)] + southernSuffixes[getRndInteger(0, southernSuffixes.length-1)];
            familyName = southernlf[getRndInteger(0, southernlf.length - 1)] + southernll[getRndInteger(0, southernll.length - 1)] + southernll[getRndInteger(0, southernll.length - 1)] + southernSuffixes[getRndInteger(0, southernSuffixes.length-1)]; 
            break;
        case "eastern":
            firstName = easternff[getRndInteger(0, easternff.length - 1)] + easternfl[getRndInteger(0, easternfl.length - 1)] + easternfl[getRndInteger(0, easternfl.length - 1)];
            midName = easternff[getRndInteger(0, easternff.length - 1)] + easternfl[getRndInteger(0, easternfl.length - 1)] + easternfl[getRndInteger(0, easternfl.length - 1)];
            lastName = easternlf[getRndInteger(0, easternlf.length - 1)] + easternll[getRndInteger(0, easternll.length - 1)] + easternll[getRndInteger(0, easternll.length - 1)] +  easternll[getRndInteger(0, easternll.length - 1)];
            familyName = easternlf[getRndInteger(0, easternlf.length - 1)] + easternll[getRndInteger(0, easternll.length - 1)] + easternll[getRndInteger(0, easternll.length - 1)]  + easternll[getRndInteger(0, easternll.length - 1)];
            break;
    };

    //Arranage the names based on type 
    switch (type) {
        case "name-f":
            finalName = firstName;
            break;
        case "name-l":
            finalName = lastName;
            break;
        case "name-fl":
            finalName = firstName + " " + lastName;
            break;
        case "name-fml":
            finalName = firstName + " " + midName + " "+ lastName;
            break;
        case  "name-fmll":
            finalName = firstName + " " + midName + " "+ lastName + " " + familyName;
            break;
        case "name-fll":
            finalName = firstName +  " "+ lastName + " " + familyName;
            break;
    };

    //Add titles, unless no title is selected
    switch (titleStyle) {
        case "noTitle":
            output = finalName;
            break;
        case "military":
            title =militaryTitlePrefixes[getRndInteger(0, militaryTitlePrefixes.length - 1)] + militaryTitles[getRndInteger(0, militaryTitles.length - 1)];
            output = title + " " + finalName;
            break;
        case "noble":
                title =nobleTitles[getRndInteger(0, nobleTitles.length - 1)];
                output=title + " " + finalName;
            break;
        case "religious":
            title =religiousTitles[getRndInteger(0, religiousTitles.length - 1)];
            output = title + " " + finalName;
            break;
        case "royal":
            title = royalTitles[getRndInteger(0, royalTitles.length - 1)] ;
            output = title + " " + finalName +  " " + royalSuffixes[getRndInteger(0, royalSuffixes.length - 1)] ;
            break;
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
    var natureStyle = document.getElementById("NatureNameStyle").value;
    var natureType = document.getElementById("NatureNameType").value;

    //Generate the actual name of the location based on style
    switch (natureStyle) {
        case "english":
            //Randomly use either the unified or separated model
            if (getRndInteger(0, 1)==0) {
                var natureName = englishPrefixesSep[getRndInteger(0, englishPrefixesSep.length - 1)] + " " + englishSuffixesSep[getRndInteger(0, englishSuffixesSep.length - 1)]; 
                var engilshSep = true;
            } else {
                var natureName = englishPrefixesUni[getRndInteger(0, englishPrefixesUni.length - 1)] + englishSuffixesUni[getRndInteger(0, englishSuffixesUni.length - 1)]; 
                var engilshSep = false;
            };
            break;
        case "elegant":
            natureName = elegantFirst[getRndInteger(0, elegantFirst.length - 1)] + elegantLast[getRndInteger(0, elegantLast.length - 1)] + elegantLast[getRndInteger(0, elegantLast.length - 1)];
            break;
        case "evil":
            natureName = evilFirst[getRndInteger(0, evilFirst.length - 1)] + evilLast[getRndInteger(0, evilLast.length - 1)] + evilLast[getRndInteger(0, evilLast.length - 1)];
            break;
        case "rustic":
                natureName = rusticFirst[getRndInteger(0, rusticFirst.length - 1)] + rusticLast[getRndInteger(0, rusticLast.length - 1)] + rusticLast[getRndInteger(0, rusticLast.length - 1)];
            break;
        case "nordic":
            natureName = nordicFirst[getRndInteger(0, nordicFirst.length - 1)] + nordicLast[getRndInteger(0, nordicLast.length - 1)] + nordicLast[getRndInteger(0, nordicLast.length - 1)];
            break;
        case "southern":
            natureName = southernFirst[getRndInteger(0, southernFirst.length - 1)] + southernLast[getRndInteger(0, southernLast.length - 1)] + southernLast[getRndInteger(0, southernLast.length - 1)];
            break;
        case "eastern":
            natureName = easternFirst[getRndInteger(0, easternFirst.length - 1)] + easternLast[getRndInteger(0, easternLast.length - 1)] + easternLast[getRndInteger(0, easternLast.length - 1)];
            break;
    };

    switch (natureType) {
        case "river":
            var natureWord = rivers[getRndInteger(0, rivers.length - 1)];
            break;
        case "lake":
            var natureWord = lakes[getRndInteger(0, lakes.length - 1)];
            break;
        case "sea":
            var natureWord = seas[getRndInteger(0, seas.length - 1)];
            break;
        case  "valley":
            var natureWord = valleys[getRndInteger(0, valleys.length - 1)];
            break;
        case "mountain":
            var natureWord = mountains[getRndInteger(0, mountains.length - 1)];
            break;
        case "cave":
            var natureWord = caves[getRndInteger(0, caves.length - 1)];
            break;
        case "ravine":
            var natureWord = ravines[getRndInteger(0, ravines.length - 1)];
            break;
        case "peak":
            var natureWord = peaks[getRndInteger(0, peaks.length - 1)];
            break;
        case "clearing":
            var natureWord = clearings[getRndInteger(0, clearings.length - 1)];
            break;
        case "forest":
            var natureWord = forests[getRndInteger(0, forests.length - 1)];
            break;
        case "desert":
            var natureWord = deserts[getRndInteger(0, deserts.length - 1)];
            break;
    };
   
    //Create the final name
    switch (getRndInteger(0, 6)) {
        case 0:
        case 1:
        case 2:
        case 3:
            output = natureName + " " + natureWord;
            break;
        case 4:
            output = natureName + "'s " + natureWord;
            break;
        case 5:
            output = natureWord + " of " + natureName;
            break;
        case 6:
            output = "The Great " + natureName + " " + natureWord;
            break;
    };

    if (natureType=="river" || natureType=="lake") {
        if (getRndInteger(0,1)==0) {
            output = natureWord + " " + natureName;
        } else {
        };
    };

    if (natureType=="mountain") {
        if (getRndInteger(0,1)==0) {
            output = "Mount " + natureName;
        } else {
        };
    }

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

    document.getElementById('nameout').innerHTML =  output;
};