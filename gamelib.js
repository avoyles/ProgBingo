
default_desc = "";

var textList = [
//    ["Student falls asleep", "At least 5 seconds with eyes closed"],
    ["Oswyn steps away to get coffee", default_desc],
    ["Ohio mentioned", default_desc],
//    ["Luciano raises his hand", default_desc],
//    ["Rick claims he already solved the problem or discovered new physics", default_desc],
//    ["Speaker makes a joke & no one laughs", default_desc],
    ["Driver's License portrait", default_desc],
    ["Ciq unavailable", default_desc],
    ["Moose has thoughts", default_desc],
    ["Unintended innuendo", default_desc],
    ["FUN FACT", default_desc],
    ["Vydjia sleeps in",default_desc],
    ["Queenie doesn't get a feather",default_desc],
    ["3+ people die to 1 mechanic",default_desc],
    ["Stacking the spread AoE",default_desc],
    ["Pull before people are ready",default_desc],
    ["Amia doesn't crit in the opener",default_desc],
    ["Rescue used maliciously",default_desc],
    ["Begin on time",default_desc],
    ["Alaska greeds an oGDC and can't cast TBN",default_desc],
    ["Yasu dies",default_desc],
    ["Gabby drifts Gluttony (accidentally)",default_desc],
    ["Gabby drifts Gluttony (intentionally)",default_desc],
    ["Someone runs into a deathwall/off the stage",default_desc],
    ["DPS orange parse or higher for healing",default_desc],
    ["Mortis is OoM",default_desc],
    ["Third party tool mentioned",default_desc],
    ["Someone gets a vuln stack",default_desc],
    ["Someone is sick/ill",default_desc],
    ["Mortis suspected to be ded",default_desc],
    ["Alaska can't weave",default_desc],
    ["Someone miscalls a safespot",default_desc],
    ["CW not CCW, or vice versa",default_desc],
    ["Someone is late",default_desc],
    ["Oswyn dies for greed",default_desc],
    ["Limit cut",default_desc],
    ["Used too much mit",default_desc],
    ["UwU",default_desc],
    ["''Easy game''",default_desc],
    ["''Proggers''",default_desc],
    ["Vydjia makes a dark/dirty joke",default_desc],
    ["Streaming",default_desc],
    ["Woops mentioned",default_desc],
    ["Hysteria off platform",default_desc],
    ["Clear 10S in 1 pull",default_desc],
    ["Icarus not on CD",default_desc],
    ["HEALER LB3",default_desc],
    ["Queenie kills someone out of spite",default_desc],
    ["Feint gets overwritten",default_desc],
    ["Gabby steals loot",default_desc],
    ["Stepped in the ick",default_desc],
    ["Dark and light tethers reversed",default_desc],
    ["Not enough healing",default_desc],
    ["PF a ______",default_desc],
    ["Forgot tank stance",default_desc],
    ["DPS takes a tankbuster",default_desc],
    [">5% enrage",default_desc],
    ["<1% enrage",default_desc],
    ["''Greased it''",default_desc],
    ["Oswyn gets jumpscared",default_desc],
    ["''Why Moose so _____???''",default_desc],
    ["Gabby pots",default_desc],
    ["Someone pulls via autos",default_desc],
    ["Gabby casts Communio during mechanic",default_desc],
    ["''OMG _______ haiiiiiiiiiiiii''",default_desc],
    ["Someone confidently miscalls a safe spot",default_desc],
    ["Oswyn casts Tenka Gokken instead of Midare setsugeka",default_desc],
    ["Resurrected into bad",default_desc],
    ["Same-brain as another player during spread",default_desc],
    ["Backstep off of platform",default_desc],
    ["Gap-close off of platform",default_desc],
    ["WRONG BUTTON",default_desc],
    ["Stared at the gaze",default_desc],
    ["Fruit mentioned",default_desc],
    ["Rescued into death",default_desc],
    ["POKE BALL",default_desc],
    ["LILY OFF THE KEYBOARD",default_desc],
    ["Cat steals something from Mortis",default_desc],
    ["<i>screams in Sven</i>",default_desc],
    ["''Boss-relative''",default_desc],
    ["Mixed up true north",default_desc],
    ["Someone forgot the new strat",default_desc],
    ["''I guess I'll die''",default_desc],
    ["Gotta catch em all! (vuln stack edition)",default_desc],
    ["Blames latency",default_desc],
    ["Blames bad snapshots",default_desc],
    ["Greeded a positional",default_desc],
    ["''I have the stupid''",default_desc],
    ["<i>Woops pipe sound</i>",default_desc],
    ["''We've cleared this before, I swear''",default_desc],
    ["Tank cleaves party (accidentally)",default_desc],
    ["Tank cleaves party (intentionally)",default_desc],
    ["''Can anyone repair?''",default_desc],
    ["Venn diagrammed",default_desc],
    // ["",default_desc],
    // ["",default_desc],
];


var freeList = [
//    ["Luciano raises his hand"],
    ["Magnus shenanigans"],
    ["Lily shenanigans"],
    ["''Hello, hello''"],
    ["Stood in the AoE"],
   // ["<i>screams in Sven "]
];


/* Retired Options
    ["Phys 13 students \"encouraged\" to attend",default_desc]
    ["Train rattles colloquium room",default_desc],
*/

var tileList=[[],[],[],[],[]];

function randomizeList(list) {
    arrcpy = list.concat();
    for (i=0; i < list.length; i++) {
	rind = Math.floor(Math.random()*arrcpy.length);
	console.log(rind);
	tmp = arrcpy[rind];
	arrcpy[rind] = arrcpy[i];
	arrcpy[i] = tmp;
    }
    return arrcpy;
}

function createBoard () {
    boardwrapper = document.getElementById("gameboard");

    board = document.createElement("table");
    boardwrapper.appendChild(board);
    for(i=0; i < 5; i++) {
	row = document.createElement("tr");
	board.appendChild(row);
	for(j=0; j < 5; j++) {
	    tileobj = new Tile(i, j);
	    tileList[i][j] = tileobj;
	    row.appendChild(tileobj.node);
	}
    }
}

function resetBoard() {
    shuffledtext = randomizeList(textList);
    myText = randomizeList(freeList);
    for(i=0; i<5; i++) {
	for(j=0; j<5; j++) {
	    if (!(i === 2 && j === 2)){
		tileList[i][j].changeText(shuffledtext[i*5+j]);
	    }
	    else{
//	     myText = randomizeList(textList);
//	     myText = ["Free:",""]+ randomizeList(freeList)
//		tileList[i][j].changeText(["Free: "+"rrrg"]);
		tileList[i][j].changeText(["<b>Free:</b><br> "+myText[0]]);
//		tileList[i][j].changeText(concat(["Free:"],myText[0]));
	    }
	    if(tileList[i][j].isOn) {
		tileList[i][j].toggleOn();
	    }
	}
    }
}

function Tile (i, j) {
    this.node = document.createElement("td");
    this.node.appendChild(document.createTextNode(""));
    this.node.className = "gametile";
    this.node.id = "tile"+i+j;

    this.isOn = false;
    this.description = default_desc;

    this.toggleOn = function(){
	if (this.isOn === false) {
	    this.isOn = true;
	    this.node.style.background = "red";
	    if (checkWin(i, j)) {
		window.alert("BINGO!");
	    };
	} else {
	    this.isOn = false;
	    this.node.style.background = "white";
	}
    };

    this.changeText = function(text){
	this.node.innerHTML = text[0];
//	Make sure to reset font to default after comic sans modification
	this.node.style.fontFamily = "Sans serif";
	if (text[0] == "Comic Sans text") {
//	this.node.innerHTML = '<font face = "Comic Sans MS" size =" 5"><b>Comic Sans text</b></font>';	
//	this.node.innerHTML = '<font family = "myCustomFont2" size =" 5"><b>Comic Sans text</b></font>';
//	this.node.innerHTML = '<font family = "cursive" size =" 5">Comic Sans Neue text</font>';
	this.node.innerHTML = '<font  size =" 5"><b>Comic Sans text</b></font>';
//	this.node.style.fontFamily = "arial";
	this.node.style.fontFamily = "Comic Sans MS";
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	  // some code..
	  this.node.style.fontFamily = "MyComicMS", "Chalkboard SE" ,"Comic Sans MS",  "Comic Sans", "Chalkboard SE" , "ComicNeue", "cursive" ;
	  }
	}
	else if (text[0] == "Illegibly tiny fonts") {
	this.node.innerHTML = '<font size =" -5"><sub><sup>Illegibly tiny fonts</sup></sub></font>';
	}
	else if (text[0] == "Wikipedia[Citation needed]") {
	this.node.innerHTML = 'Wikipedia<font color ="blue" size =" -5"><sup>[Citation needed]</sup></font>';
	}
	this.description = text[1];
    };

    this.node.onclick = function(obj){
	return function(){ obj.toggleOn() };
    }(this);
}

function checkWin(ni, nj) {
    function chk(idir, jdir, i, j) {
	if (i < 0 || i > 4 ||
	    j < 0 || j > 4) {
	    return 0;
	}
	if (tileList[i][j].isOn) {
	    return 1 + chk(idir, jdir, i+idir, j+jdir);
	}
	else {
	    return 0
	}
    }

    if (chk(1,0,ni,nj) + chk(-1,0,ni,nj) - 1 === 5) {
	return true;
    }
    if (chk(0,1,ni,nj) + chk(0,-1,ni,nj) - 1 === 5) {
	return true;
    }
    if (chk(1,1,ni,nj) + chk(-1,-1,ni,nj) - 1 === 5) {
	return true;
    }
    if (chk(1,-1,ni,nj) + chk(-1,1,ni,nj) - 1 === 5) {
	return true;
    }
    return false;
}

function writeTiles(element) {
    tilelist = document.createElement("ul");
    tilelist.id = "tilelist";
    tilelist.appendChild(document.createTextNode(""));
    for (i=0; i < textList.length; i++) {
	tile = document.createElement("li");
	tile.className = "tileinfo";

	tilename = document.createElement("span");
	tilename.appendChild(document.createTextNode(
	    '"' + textList[i][0] + '" '
	));
	tilename.className = "tilename";

	tiledesc = document.createElement("span");
	tiledesc.appendChild(document.createTextNode(
	    textList[i][1]
	));
	tiledesc.className = "tiledesc";

	tile.appendChild(tilename);
	tile.appendChild(tiledesc);
	tilelist.appendChild(tile);
    }
    element.appendChild(tilelist);
}
