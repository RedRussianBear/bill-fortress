var levels = {};

var mklevels = function() {
	levels.LIST = ["TEST", "COMMITTEE"];

    levels.TEST = {}

    levels.TEST.map = "\
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
    X___XXXXXXXXXXXXXXXXXXXXXXXXX\n\
    X_P_______________XXXXXXXXXXX\n\
    X___XXXXXXXXXXXXX_XXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXX_XXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXX_XXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXX_XXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXX_XXXXXXXXXXX\n\
    XXXXXXXXXXXXX_________XXXXXXX\n\
    XXXXXXXXXXXXX_________XXXXXXX\n\
    XXXXXXXXXXXXX_________XXXXXXX\n\
    XXXXXXXXXXXXX_________XXXXXXX\n\
    XXXXXXXXXXXXXXXXXEXXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
    ";

    levels.TEST.mobs = [
        {
            X: 17, Y: 12, 
            NAME: "Ted Cruz", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        }
    ];

    levels.TEST.atmosphere = [
        {
            X: 17, Y: 12, R: 3,
            NAME: "Ted Cruz Alarm",
            SOUND: "alarm",
            TYPE: "proximity",
        }
    ];
	
	levels.TEST.loot = [
		{
			X: 17, Y: 13,
			REWARD: function(player) {player.maxhealth += 20;},
			NAME: "Lobby Support",
			INFO: "You gain 20 HP with money backing"
		}
	];
	
	levels.TEST.endorsereq = 1;

/* Level One: COMMITTEE */
levels.COMMITTEE = {};

levels.COMMITTEE.map = "\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXX___________________________________________________________________XXX\n\
XX___XXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XX_P______________________XXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XX___XXXXX_XXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXX_XXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_XXXXXXX_____________XXXXXXXXXXXXX\n\
XXXXXXXXXX_XXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_XXXXXXX_XXXXXXXXXXX_XXXXXXXXXXXXX\n\
XXXXXXXXXX_XXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_XXXXXXX_XX_____XXXX_XXXXXXXXXXXXX\n\
XXXXXXX_______XXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_XXXXXXX____XXX_XXXX_XXXXXXXXXXXXX\n\
XXXXXXX_______XXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXX_XXXX_XXXXXXXXXXXXX\n\
XXXXXXX_______XXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXX_XXXX_XXXXXXXXXXXXX\n\
XXXXXXX_______XXXXXXXX_________XXXXXXXXXXXXXXX________________XXXX_XXXXXXXXXXXXX\n\
XXXXXXX_______XXXXXXXX_________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXX\n\
XXXXXXXXXXXX_XXXXXXXXX_________XXXXXXXXXXXXXXXXXXX_________________XXXXXXXXXXXXX\n\
XXXXXXXXXXXX_XXXXXXXXX_________XXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXX_XXXXXXXXXXXXX\n\
XXXXXXXXXXXX_XXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXX____XXXXXXXXXXXXXX_XXXXXXXXXXXXX\n\
XXXXXXXXXXXX_XXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXX____XXXXXXXXXXXXXX_XXXXXXXXXXXXX\n\
XXXXXXXXXXXX_XXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXX____XXXXXXXXX_________XXXXXXXXXX\n\
XXXXXXXXXXXX__XXXX______XXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXX_________XXXXXXXXXX\n\
XXXXXXXXXXXXX_XXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXX_________XXXXXXXXXX\n\
XXXXXXXXXXXXX_XXXX_XXXXXXXXXXXXXXXXXXXXXXXXX__________________________XXXXXXXXXX\n\
XXXXXXXXXXXXX_XXXX_XXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXX_________XXXXXXXXXX\n\
XXXXXXXXXXXXX_XXXX_XXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXX_________XXXXXXXXXX\n\
XXXXXXXXXXXXX_XXXX_XXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXX_________XXXXXXXXXX\n\
XXXXXXXXXXX_________XXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXX_________XXXXXXXXXX\n\
XXXXXXXXXXX_________XXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXX_________XXXXXXXXXX\n\
XXXXXXXXXXX_________XXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXX\n\
XXXXXXXXXXX_________XXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXX_XXXXXXXXXXXXXXX___XXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX____________EXX\n\
XXXXXXXXXXXXXXX______________________________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
";

levels.COMMITTEE.mobs = [];
levels.COMMITTEE.endorsereq = 20;
levels.COMMITTEE.atmosphere = [];
levels.COMMITTEE.loot = [];

/* Level Two: HOUSE */

levels.HOUSE = {};

levels.HOUSE.map = "\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXX____________________________________________________________________________XXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXX_____XXXXXXXXX\n\
XXXXXXXXXX_____X_____X_____X_____X_____X_____XXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXX_____XXXXXXXXX\n\
XXXXXXXXXX_____X_____X_____X_____X_____X_____XXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_________________XXXXXXXXX\n\
XXXXXXXXXX_____X_____X_____X_____X_____X_____XXXXXXXXXXXXXX_XXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXX_____XXXXXXXXX\n\
XXXXXXXXXX_____X_____X_____X_____X_____X_____XXXXXXXXXXXXX___XXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXX_____XXXXXXXXX\n\
XXXXXXXXXX_____X_____X_____X_____X_____X_____XXXXXXXXXXXXX________________XXXXXXXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXX_XXXXX_XXXXX_XXXXX_XXXXX_XXXXX_XXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXX_________________________________XXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXX_XXXXXXXXX_XXXXXXXXX_XXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XXXXXXXXXXXXXXXXXXX_XXXXX_________XXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XXXXXXXXXXXXXXXXXXX_XXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXX______________XXXXXXXXXX\n\
XXXXXXXXXXXXX_______XX_______________XX_XXXXXXXXXXXXXXXXXXX_XXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX__________X\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XXXXXXXXXXX_________________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_X\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XXXXXXXX____XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_X\n\
XXXXXXXXXXXXXXXXXXX_XX_______________XX_XXXXXXXX____XXXXXXXXXXXXXXXXXXXXXXXXX_________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_X\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XXXXXXXX____XXXXXXXXXXXXXXXXXXXXXXXXX_____________XXXXXXXXXXXXXXXXXXXXXXXXXXXX_X\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XXXXXXXX____XXXXXXXXXXXXXXXXXXXXXXXXX________________XXXXXXXXXXXXXXXXXXXXXXXXX_X\n\
XXXXXXXXXXXXX_______XX_______________XX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX__________________XXXXXXXXXXXXXXXXXXXXXXX_X\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX___________________XXXXXXXXX___XXXXXXXXXX_X\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX___________________XXXXXXX_______XXXXXXXX_X\n\
XXXXXXXXXXXXXXXXXXX_XX_______________XX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________________XXXXX_________XXXXXXX_X\n\
XXXXXXXXXXXXX_____X_XXXX_____________XX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_____________________XXX___________XXXXXX_X\n\
XXXXXXXXXXXXX_____X_XXXXX____________XX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_____________________XXX___________XXXXXX_X\n\
XXXXXXXXXXXXX_______XXXXXX___________________________________________________________________________________________X_X\n\
XXXXXXXXXXXXX_____X_XXXXXX___________________________________________________________________________________________X_X\n\
XXXXXXXXXXXXX_____X_XXXXX____________XX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_____________________XXX___________XXXXXX_X\n\
XXXXXXXXXXXXXXXXXXX_XXXX_____________XX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_____________________XXX___________XXXXXX_X\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XX______________________________XXXXX____________________XXXXX_________XXXXXXX_X\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XX______________________________XXXXX____________________XXXXXX_______XXXXXXXXEX\n\
XXXXXXXXXXXXX_______XX_______________XX_XX______________________________XXXXX___________________XXXXXXXXX___XXXXXXXXXXXX\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XX______________________________XXXXX__________________XXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XX______________________________XXXXX________________XXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXX_XX_______________XX_XX______________________________XXXXX_____________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XX______________________________XXXXX_________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XX______________________________XXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXX_______XX_______________XX_XX______________________________XXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXX_______________X_XX_______________XX_XX______________________________XXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXX_____XXXX_X\n\
XXX_XXXXXXXXX_____X_XX_______________XX_XXX_XX_XX_XX_XX_XX_XX_XX_XX_XX_XXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXX_____XXXX_X\n\
XXX_XXXXXXXXXXXXXXX_XX__________________________________________________________XXXXXXXXXXXXXXXXXXXXXXXXXXXXX_____XXXX_X\n\
XXX_XXXXXXXXXXXXXXX_XXXXXXXXX_XXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXX_____XXXX_X\n\
XXX_XXXXXXXX_________________________________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXX_____XXXX_X\n\
XXX_XXXXXXXXXX___XXXXXXXXXX_____XXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXX______________________________XXXXXXXXXX_XXXXXX_X\n\
XXX_XXXXXXX__________XXXXXX_____XXXXXX_______XXXXXXXXXXXXXXXXXXXXXXXXXX_____XXXXXX_XXXXX_XXXXX_XXXXX_XXXXXXXXXX_XXXXXX_X\n\
XXX_XXXXXXX__________XXXXXX_____XXXXXX_______XXXXXXXXXXXXXXXXXXXXXXXXXX_____XXXX_____X_____X_____X_____XXXXXXXX_XXXXXX_X\n\
XXX_XXXXXXX__________XXXXXX_____XXXXXX_______XXXXXXXXXXXXXXXXXXXXXXXXXX_____XXXX_____X_____X_____X_______________XXXXX_X\n\
XXX_XXXXXXX__________XXXXXX_____XXXXXX_______XXXXXXXXXXXXXXXXXXXXXXXXXX_____XXXX_____X_____X_____X_____XXXXXXXXX_XXXXX_X\n\
XXX_XXXXXXX__________XXXXXX_____XXXXXX_______XXXXXXXXXXXXXXXXXXXXXXXXXX______________X_____X_____X_____XXXXXXXXX_XXXXX_X\n\
XXX_XXXXXXXXXXXXXXXXXXXXXXX_____XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_____XXXX_____X_____X_____X_____XXXXXXXXX_XXXXX_X\n\
XXX_XXXXXXXXXXXXXXXXXXXXXXX_____XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXX_X\n\
XX___XXXXXXXXXXXXXXXXX_______________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXX_X\n\
XX___XXXXXXXXXXXXXXXXX_______________XXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX______XXXXX_X\n\
XX___XXXXXXXXXXXXXXXXX_______________XXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXX_X\n\
XXX_XXXXXXXXXXXXX_________________________XXXXXXXXXX___XXXXXXXXXXX__________________________________________XXXXXXXXXX_X\n\
XXX_XXXXXXXXXXXXX_________________________XXXXXXXXXXX_XXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_X\n\
XXX_XXXXXXXXXXXXX_________________________XXXXXXXXXXX__________________________________________________________________X\n\
XXX_XXXXXXXXXXXXXXXXXXXXXXXX_P_XXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXX___XXXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX__XXXXXXXXXXXXX___XXXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXX___________________________________________________XXXXXXXXXXXXXX___XXXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
";

levels.TEST.mobs = [
        {
            X: 1, Y: 59, 
            NAME: "Scott Tipton", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 4, Y: 106, 
            NAME: "Peter Roskam", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 7, Y: 12, 
            NAME: "Michael Burgess", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 7, Y: 18, 
            NAME: "Dana Rohrabacher", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 7, Y: 24, 
            NAME: "David Jolly", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 7, Y: 30, 
            NAME: "Barry Loudermilk", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 7, Y: 36, 
            NAME: "Mike Rogers", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 7, Y: 42, 
            NAME: "Tom McClintock", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 7, Y: 59, 
            NAME: "Trent Franks", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 11, Y: 26, 
            NAME: "Rick Crawford", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 12, Y: 32, 
            NAME: "Steve Womack", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 13, Y: 17, 
            NAME: "Bruce Westerman", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 13, Y: 28, 
            NAME: "Kevin McCarthy", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 13, Y: 34, 
            NAME: "Duncan D. Hunter", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 13, Y: 118, 
            NAME: "Daniel Webster", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 14, Y: 65, 
            NAME: "Vern Buchanan", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 15, Y: 31, 
            NAME: "Lynn Westmoreland", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 15, Y: 49, 
            NAME: "Austin Scott", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 17, Y: 34, 
            NAME: "Doug Collins", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 18, Y: 28, 
            NAME: "Jody Hice", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 18, Y: 83, 
            NAME: "Tom Graves", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 19, Y: 17, 
            NAME: "Mike Bost", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 20, Y: 24, 
            NAME: "Marlin Stutzman", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 20, Y: 85, 
            NAME: "Hal Rogers", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 21, Y: 29, 
            NAME: "John Fleming", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 22, Y: 87, 
            NAME: "Ralph Abraham", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 23, Y: 31, 
            NAME: "Gregg Harper", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 24, Y: 82, 
            NAME: "Sam Graves", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 25, Y: 17, 
            NAME: "Steve Pearce", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 25, Y: 39, 
            NAME: "Mark Walker", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 25, Y: 52, 
            NAME: "David Rouzer", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 25, Y: 71, 
            NAME: "George Holding", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 25, Y: 94, 
            NAME: "Jim Bridenstine", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 26, Y: 32, 
            NAME: "Frank Lucas", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 26, Y: 39, 
            NAME: "Steve Russell", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 26, Y: 44, 
            NAME: "Jeff Duncan", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 26, Y: 57, 
            NAME: "Trey Gowdy", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 26, Y: 80, 
            NAME: "Louie Gohmert", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 26, Y: 88, 
            NAME: "Mike Conaway", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 27, Y: 92, 
            NAME: "Randy Weber", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 28, Y: 29, 
            NAME: "Karen Bass", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 30, Y: 23, 
            NAME: "David Scott", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 30, Y: 54, 
            NAME: "Danny K. Davis", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 30, Y: 86, 
            NAME: "Cedric Richmond", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 31, Y: 17, 
            NAME: "Donna Edwards", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 31, Y: 29, 
            NAME: "Donald Payne, Jr.", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 31, Y: 67, 
            NAME: "Bonnie Watson Coleman", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 32, Y: 80, 
            NAME: "Alma Adams", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 33, Y: 34, 
            NAME: "Joyce Beatty", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 33, Y: 47, 
            NAME: "Marcia Fudge", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 34, Y: 28, 
            NAME: "Marc Veasey", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 34, Y: 62, 
            NAME: "Gwen Moore", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 34, Y: 83, 
            NAME: "John Lewis", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 35, Y: 32, 
            NAME: "Elijah Cummings", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 35, Y: 54, 
            NAME: "G. K. Butterfield", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 37, Y: 17, 
            NAME: "David Price", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 37, Y: 22, 
            NAME: "Steny Hoyer", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 37, Y: 29, 
            NAME: "Corrine Brown", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 37, Y: 67, 
            NAME: "Sanford Bishop", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 38, Y: 12, 
            NAME: "John Conyers", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 39, Y: 26, 
            NAME: "Chaka Fattah", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 39, Y: 31, 
            NAME: "Eddie Johnson", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 40, Y: 23, 
            NAME: "Barbara Lee", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 42, Y: 111, 
            NAME: "Al Green", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 43, Y: 75, 
            NAME: "Hakeem Jeffries", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 44, Y: 15, 
            NAME: "Anna Eshoo", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 44, Y: 16, 
            NAME: "Janice Hahn", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 44, Y: 41, 
            NAME: "Elizabeth Esty", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 45, Y: 82, 
            NAME: "Tammy Duckworth", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 45, Y: 88, 
            NAME: "John Sarbanes", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 45, Y: 94, 
            NAME: "Niki Tsongas", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 45, Y: 100, 
            NAME: "Dina Titus", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 46, Y: 111, 
            NAME: "Sam Farr", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 48, Y: 76, 
            NAME: "Julia Brownley", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 50, Y: 29, 
            NAME: "Gwen Graham", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 52, Y: 3, 
            NAME: "Frederica Wilson", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 53, Y: 53, 
            NAME: "Mark Takai", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 59, Y: 69, 
            NAME: "Chris Van Hollen", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 59, Y: 88, 
            NAME: "Ann McLane Kuster", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            X: 5, Y: 120, 
            NAME: "Ways and Means Chair", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        },
		{
            X: 5, Y: 18, 
            NAME: "Rules Chair", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        },
		{
            X: 5, Y: 24, 
            NAME: "Appropriations Chair", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        },
		{
            X: 5, Y: 30, 
            NAME: "Judiciary Chair", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        },
		{
            X: 5, Y: 36, 
            NAME: "Intelligence Chair", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        },
		{
            X: 5, Y: 42, 
            NAME: "Agriculture Chair", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        },
		{
            X: 46, Y: 41, 
            NAME: "Homeland Security Chair", 
            PARTY: mobs.PARTY.DEMOCRAT, 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        },
		{
            X: 26, Y: 106, 
            NAME: "Paul Ryan (Speaker)", 
            PARTY: mobs.PARTY.REPUBLICAN, 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements+=5; player.funds += 50;} 
        }
    ];
levels.HOUSE.endorsereq = 95;
levels.HOUSE.atmosphere = [];
levels.HOUSE.loot = [];

/* Level Three: SENATE */
levels.SENATE = {};

levels.SENATE.map = "\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
";

levels.SENATE.mobs = [];
levels.SENATE.endorsereq = 20;
levels.SENATE.atmosphere = [];
levels.SENATE.loot = [];
}