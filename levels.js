var levels = {};

var mklevels = function() {
levels.LIST = ["COMMITTEE", "HOUSE", "SENATE", "CONFERENCE", "PRESIDENT"];

/* Level One: COMMITTEE */
levels.COMMITTEE = {};

levels.COMMITTEE.map = "\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXX___________________________________________________________________XXX\n\
XX___XXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XX_P______________________XXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XX___XXXXX_XXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXX_XXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_XXXXXXX_____________XXXXXXXXXXXXX\n\
XXXXXXXXXX_XXXXXXXXXXXXXX_XXXXXXX___XXXXXXXXXX_XXXXXXX_XXXXXXXXXXX_XXXXXXXXXXXXX\n\
XXXXXXXXXX_XXXXXXXXXXXXXX_SSSSSSS___XXXXXXXXXX_XXXXXXX_XX_____XXXX_XXXXXXXXXXXXX\n\
XXXXXXX_______XXXXXXXXXXX_XXXXXXX___XXXXXXXXXX_XXXXXXX____XXX_XXXX_XXXXXXXXXXXXX\n\
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

levels.COMMITTEE.mobs = [
        {
            R: 1, C: 25, 
            NAME: "Sam Johnson", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 10, C: 10, 
            NAME: "Devin Nunes", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 11, C: 25, 
            NAME: "Pat Tiberi", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 11, C: 490, 
            NAME: "Dave Reichert", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 14, C: 27, 
            NAME: "Charles Boustany", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 16, C: 50, 
            NAME: "Peter Roskam", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 18, C: 66, 
            NAME: "Sander Levin", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 20, C: 62, 
            NAME: "Charles Rangel", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 25, C: 15, 
            NAME: "Jim McDermott", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 31, C: 32, 
            NAME: "John Lewis", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 25, C: 65, 
            NAME: "Kevin Brady (Chairman)", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        }
    ];
levels.COMMITTEE.endorsereq = 11;
levels.COMMITTEE.atmosphere = [
        {
            NAME: "anthem",
            SOUNDS: ["ambient03"],
            TYPE: "background",
        }
];
levels.COMMITTEE.loot = [
		{
			R: 17, C: 48,
			REWARD: function(player) {player.maxhealth += 50;},
			NAME: "Lobby Support",
			INFO: "You gain 50 HP with money backing"
		},
		{
			R: 29, C: 76,
			REWARD: function(player) {player.power *= 2;},
			NAME: "Committee Support",
			INFO: "Your power doubles from approval from the Ways and Means Committee"
		}
	];

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
XXXXXXXXXXXXX_____X_XX_______________XX_XX______________________________XXXXX__________________XXXXXXXXXXXXXXXXXXXXXXX_X\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XX______________________________XXXXX________________XXXXXXXXXXXXXXXXXXXXXXXXX_X\n\
XXXXXXXXXXXXXXXXXXX_XX_______________XX_XX______________________________XXXXX_____________XXXXXXXXXXXXXXXXXXXXXXXXXXXX_X\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XX______________________________XXXXX_________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_X\n\
XXXXXXXXXXXXX_____X_XX_______________XX_XX______________________________XXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_X\n\
XXXXXXXXXXXXX_______XX_______________XX_XX______________________________XXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_X\n\
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

levels.HOUSE.mobs = [
        {
            R: 1, C: 59, 
            NAME: "Scott Tipton", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 4, C: 106, 
            NAME: "Peter Roskam", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 7, C: 12, 
            NAME: "Michael Burgess", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 7, C: 18, 
            NAME: "Dana Rohrabacher", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 7, C: 24, 
            NAME: "David Jolly", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 7, C: 30, 
            NAME: "Barry Loudermilk", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 7, C: 36, 
            NAME: "Mike Rogers", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 7, C: 42, 
            NAME: "Tom McClintock", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 7, C: 59, 
            NAME: "Trent Franks", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 11, C: 26, 
            NAME: "Rick Crawford", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 12, C: 32, 
            NAME: "Steve Womack", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 13, C: 17, 
            NAME: "Bruce Westerman", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 13, C: 28, 
            NAME: "Kevin McCarthy", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 13, C: 34, 
            NAME: "Duncan D. Hunter", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 13, C: 118, 
            NAME: "Daniel Webster", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 14, C: 65, 
            NAME: "Vern Buchanan", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 15, C: 31, 
            NAME: "Lynn Westmoreland", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 15, C: 49, 
            NAME: "Austin Scott", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 17, C: 34, 
            NAME: "Doug Collins", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 18, C: 28, 
            NAME: "Jody Hice", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 18, C: 83, 
            NAME: "Tom Graves", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 19, C: 17, 
            NAME: "Mike Bost", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 20, C: 24, 
            NAME: "Marlin Stutzman", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 20, C: 85, 
            NAME: "Hal Rogers", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 21, C: 29, 
            NAME: "John Fleming", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 22, C: 87, 
            NAME: "Ralph Abraham", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 23, C: 31, 
            NAME: "Gregg Harper", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 24, C: 82, 
            NAME: "Sam Graves", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 25, C: 17, 
            NAME: "Steve Pearce", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 25, C: 39, 
            NAME: "Mark Walker", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 25, C: 52, 
            NAME: "David Rouzer", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 25, C: 71, 
            NAME: "George Holding", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 25, C: 94, 
            NAME: "Jim Bridenstine", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 26, C: 32, 
            NAME: "Frank Lucas", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 26, C: 39, 
            NAME: "Steve Russell", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 26, C: 44, 
            NAME: "Jeff Duncan", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 26, C: 57, 
            NAME: "Trey Gowdy", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 26, C: 80, 
            NAME: "Louie Gohmert", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 26, C: 88, 
            NAME: "Mike Conaway", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 27, C: 92, 
            NAME: "Randy Weber", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 28, C: 29, 
            NAME: "Karen Bass", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 30, C: 23, 
            NAME: "David Scott", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 30, C: 54, 
            NAME: "Danny K. Davis", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 30, C: 86, 
            NAME: "Cedric Richmond", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 31, C: 17, 
            NAME: "Donna Edwards", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 31, C: 29, 
            NAME: "Donald Payne, Jr.", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 31, C: 67, 
            NAME: "Bonnie Watson Coleman", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 32, C: 80, 
            NAME: "Alma Adams", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 33, C: 34, 
            NAME: "Joyce Beatty", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 33, C: 47, 
            NAME: "Marcia Fudge", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 34, C: 28, 
            NAME: "Marc Veasey", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 34, C: 62, 
            NAME: "Gwen Moore", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 34, C: 83, 
            NAME: "John Lewis", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 35, C: 32, 
            NAME: "Elijah Cummings", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 35, C: 54, 
            NAME: "G. K. Butterfield", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 37, C: 17, 
            NAME: "David Price", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 37, C: 22, 
            NAME: "Steny Hoyer", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 37, C: 29, 
            NAME: "Corrine Brown", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 37, C: 67, 
            NAME: "Sanford Bishop", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 38, C: 12, 
            NAME: "John Conyers", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 39, C: 26, 
            NAME: "Chaka Fattah", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 39, C: 31, 
            NAME: "Eddie Johnson", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 40, C: 23, 
            NAME: "Barbara Lee", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 42, C: 111, 
            NAME: "Al Green", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 43, C: 75, 
            NAME: "Hakeem Jeffries", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 44, C: 15, 
            NAME: "Anna Eshoo", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 44, C: 16, 
            NAME: "Janice Hahn", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 44, C: 41, 
            NAME: "Elizabeth Esty", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 45, C: 82, 
            NAME: "Tammy Duckworth", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 45, C: 88, 
            NAME: "John Sarbanes", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 45, C: 94, 
            NAME: "Niki Tsongas", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 45, C: 100, 
            NAME: "Dina Titus", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 46, C: 111, 
            NAME: "Sam Farr", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 48, C: 76, 
            NAME: "Julia Brownley", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 50, C: 29, 
            NAME: "Gwen Graham", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 52, C: 3, 
            NAME: "Frederica Wilson", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 53, C: 53, 
            NAME: "Mark Takai", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 59, C: 69, 
            NAME: "Chris Van Hollen", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 59, C: 88, 
            NAME: "Ann McLane Kuster", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.CONGRESSPERSON, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 10;} 
        },
		{
            R: 5, C: 120, 
            NAME: "Ways and Means Chair", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        },
		{
            R: 5, C: 18, 
            NAME: "Rules Chair", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        },
		{
            R: 5, C: 24, 
            NAME: "Appropriations Chair", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        },
		{
            R: 5, C: 30, 
            NAME: "Judiciary Chair", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        },
		{
            R: 5, C: 36, 
            NAME: "Intelligence Chair", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        },
		{
            R: 5, C: 42, 
            NAME: "Agriculture Chair", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        },
		{
            R: 46, C: 41, 
            NAME: "Homeland Security Chair", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.COMCHAIR, 
            ONDEFEAT: function(player) {player.endorsements+=2; player.funds += 30;} 
        },
		{
            R: 26, C: 106, 
            NAME: "Paul Ryan (Speaker)", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements+=5; player.funds += 50;} 
        }
    ];
levels.HOUSE.endorsereq = 95;
levels.HOUSE.atmosphere = [];
levels.HOUSE.loot = [
		{
			R: 23, C: 13,
			REWARD: function(player) {player.maxhealth *= 2;},
			NAME: "Grassroot Action",
			INFO: "Your HP doubles because the grassroots began supporting your bill"
		},
		{
			R: 25, C: 116,
			REWARD: function(player) {player.power *= 1.5;},
			NAME: "Speaker Support",
			INFO: "Your power has increased 50% because the speaker of the house supports you"
		},
		{
			R: 32, C: 118,
			REWARD: function(player) {var b = bill.ATTACKS_EXTRA["LOBBY"]; player.attacks.push(new debate.Attack(b.NAME, b.EXEC, b.COOLDOWN, b.POWER, b.INFO))},
			NAME: "Call a Lobbyist",
			INFO: "You gain the attack \"Call a Lobbyist\" that will help you curry the favor of special interest groups"
		}
	];

/* Level Three: SENATE */
levels.SENATE = {};

levels.SENATE.map = "\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXX__________P___________________________________________X_______X_______X_______X_______XXXXX\n\
XXXXXXX___XXXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXX_______X_______X_______X_______X_______XXXXX\n\
XXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_______X_______X_______X_______X_______XXXXX\n\
XXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_______X_______X_______X_______X_______XXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_______X_______X_______X_______X_______XXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_______X_______X_______X_______X_______XXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_______X_______X_______X_______X_______XXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXX_XXXXXXX_XXXXXXX_XXXXXXX_XXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_________________________________XXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX__XXXXXXX_XXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_X_____XXXXXXXXX\n\
XXXXX_XXXXXXXXX___________X_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_X_____XXXXXXXXX\n\
XXXXX_XXXXXXXXX_XXXXXXXXX_X_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_______XXXXXXXXX\n\
XXXXX_XXXXXXXXX_XXXXXXXXX_X_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_X_____XXXXXXXXX\n\
XXXXX_XXXXXXXXX_XXXXXXXXX_X_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_X_____XXXXXXXXX\n\
XXXXX_XXXXXXXXX_XXXXXXXXX_X_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_XXXXXXXXXXXXXXX\n\
XXXXX_XXXXXXXXX_XXXXXXXXX_X_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_XXXXXXXXXXXXXXX\n\
XXXXX_XXXXXXXXX_XXXXXXXXX_X_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_XXXXXXXXXXXXXXX\n\
XXXXX________________________________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_XXXXXXXXXXXXXXX\n\
XXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_XXXXXXXXXXXXXXX\n\
XXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX__________XXXX_X____XXXXXXXXXX\n\
X_X_____________________________________________________________________________XXXX______XXXXXXXXXX\n\
X_X_____________________________________________________________________________XXXX______XXXXXXXXXX\n\
X_XXXXXXXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX__________XXXX_X____XXXXXXXXXX\n\
X_XXXXXXXXXXXXXX_______________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_XXXXXXXXXXXXXXX\n\
XEXXXXXXXXXXXXXX_______________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_XXXXXXXXXXXXXXX\n\
X_XXXXXXXXXXXXXX_______________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_XXXXXXXXXXXXXXX\n\
X__________XXXXX_______________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_XXXXXXXXXXXXXXX\n\
XXXX_XXXXX_XXXXX_______________XXXXXXX___________XXXXXXXXXXXXXXXXXXXXX____________XX_XXXXXXXXXXXXXXX\n\
XXX___XXXX_XXXXX_______________XXXXXXX_XXXXXXXXX_XXXXXXXXXXXXXXXXXXXXX____________XX_X_____XXXXXXXXX\n\
XXX___XXXX_XXXXX_______________XXXXXXX_XXXXXXXX___XXXXXXXXXXXXXXXXXXXX____________XX_X_____XXXXXXXXX\n\
XXX___XXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXX___XXXXXXXXXXXXXXXXXXXX____________XX_______XXXXXXXXX\n\
XXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXX___XXXXXXXXXXXXXXXXXXXX____________XX_X_____XXXXXXXXX\n\
XXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XX_X_____XXXXXXXXX\n\
XXXXXXXXXX_______XXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX__XXXXXXX_XXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXX_________________________________XXXXXXXX\n\
XXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXX___________XXXXXXXXXX_XXXXXXX_XXXXXXX_XXXXXXX_XXXXXXX_XXXXXXXX\n\
XXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXX_______X_______X_______X_______X_______XXXXX\n\
XXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXX_______X_______X_______X_______X_______XXXXX\n\
XXXXXXXXXXXXXXXX_XX_____XXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXX_______X_______X_______X_______X_______XXXXX\n\
XXXXXXXXXXXXXXXX_XX_____XXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXX_______X_______X_______X_______X_______XXXXX\n\
XXXXXXXXXXXXXXXX________XXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXX_______X_______X_______X_______X_______XXXXX\n\
XXXXXXXXXXXXXXXX_XX_____XXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXX_______X_______X_______X_______X_______XXXXX\n\
XXXXXXXXXXXXXXXX_XX_____XXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXX_______X_______X_______X_______X_______XXXXX\n\
XXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXX\n\
XXXXXXXXXXX____X_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXX\n\
XXXXXXXXXXX______XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXX______________________________XXXXXXXXX\n\
XXXXXXXXXXX______XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXX\n\
XXXXXXXXXXX____X_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXX_____XXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXX\n\
XXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXX_____XXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXX\n\
XXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXX_____XXXXXXXXXXXXXXXXXXXXXXXXX___XXXXXXXX\n\
XXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXX_____XXXXXXXXXXXXXXXXXXXXXXXXX___XXXXXXXX\n\
XXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX________________XXXXXXXXXXXXXXXXXXXXXXXXX___XXXXXXXX\n\
XXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXX\n\
XXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX___XXXXXXXXX_XXXXXXXXX\n\
XXXXXXXXXXXXXXXX___________________________________________________________________________XXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX___XXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
";

levels.SENATE.mobs = [
		{
            R: 2, C: 9, 
            NAME: "Jeff Flake", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 2, C: 27, 
            NAME: "Roger Wicker", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 2, C: 59, 
            NAME: "Deb Fischer", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 8, C: 58, 
            NAME: "Dean Heller", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 9, C: 67, 
            NAME: "Bob Corker", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 9, C: 75, 
            NAME: "Lyin' Ted", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 9, C: 83, 
            NAME: "'Lil Marco", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 9, C: 91, 
            NAME: "Ted Cruz", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 12, C: 74, 
            NAME: "Orrin Hatch", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 13, C: 25, 
            NAME: "John Barrasso", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 14, C: 79, 
            NAME: "Jeff Sessions", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 14, C: 85, 
            NAME: "Dan Sullivan", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 15, C: 5, 
            NAME: "Tom Cotton", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 16, C: 75, 
            NAME: "Cory Gardner", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 19, C: 78, 
            NAME: "David Perdue", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 20, C: 16, 
            NAME: "Jim Risch", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 22, C: 5, 
            NAME: "Joni Ernst", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 22, C: 73, 
            NAME: "Pat Roberts", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 24, C: 45, 
            NAME: "Mitch McConnell", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 24, C: 86, 
            NAME: "Bill Cassidy", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 25, C: 23, 
            NAME: "Susan Collins", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 25, C: 75, 
            NAME: "Thad Cochran", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 27, C: 18, 
            NAME: "Steve Daines", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 27, C: 76, 
            NAME: "Ben Sasse", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 29, C: 24, 
            NAME: "Less the 1% Graham", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 29, C: 77, 
            NAME: "Bernie Sanders", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 30, C: 4, 
            NAME: "Dianne Feinstein", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 30, C: 19, 
            NAME: "Chris Murphy", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 31, C: 28, 
            NAME: "Tom Carper", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 31, C: 73, 
            NAME: "Bill Nelson", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 33, C: 79, 
            NAME: "Mazie Hirono", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 33, C: 85, 
            NAME: "Joe Donnelly", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 38, C: 59, 
            NAME: "Ben Cardin", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 38, C: 67, 
            NAME: "Elizabeth Pocohantas Warren", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 38, C: 75, 
            NAME: "Debbie Stabenow", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 38, C: 83, 
            NAME: "Amy Klobuchar", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 38, C: 91, 
            NAME: "Claire McCaskill", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 43, C: 19, 
            NAME: "Jon Tester", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 44, C: 83, 
            NAME: "Bob Menendez", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 49, C: 14, 
            NAME: "Martin Heinrich", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 51, C: 61, 
            NAME: "Kirsten Gillibrand", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 53, C: 15, 
            NAME: "Heidi Heitkamp", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 53, C: 90, 
            NAME: "Sherrod Brown", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 57, C: 42, 
            NAME: "Bob Casey, Jr.", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 57, C: 79, 
            NAME: "Sheldon Whitehouse", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SENATOR, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        }
	];
levels.SENATE.endorsereq = 45;
levels.SENATE.atmosphere = [];
levels.SENATE.loot = [
		{
			R: 33, C: 48,
			REWARD: function(player) {var b = bill.ATTACKS_EXTRA["QUOTE"]; player.attacks.push(new debate.Attack(b.NAME, b.EXEC, b.COOLDOWN, b.POWER, b.INFO))},
			NAME: "Quote Lincoln",
			INFO: "You gain the attack \"Quote Lincoln\", which can bring you back from the brink of death"
		},
		{
			R: 29, C: 1,
			REWARD: function(player) {player.maxhealth += 100;},
			NAME: "Senate Support",
			INFO: "You gain 100 HP because the Senate supports you"
		},
		{
			R: 13, C: 27,
			REWARD: function(player) {player.maxhealth += 60;},
			NAME: "PAC support",
			INFO: "You gain 60 HP because Patriotic PAC has spent money to support you"
		}
	];


/* Level Four: Conference Committee */
levels.CONFERENCE = {};

levels.CONFERENCE.map = "\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXX_E_XXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXX_______XXXXXXXXXXXXXXX\n\
XXXXXXXXXXXX_____________XXXXXXXXXXXX\n\
XXXXXXXXXX_________________XXXXXXXXXX\n\
XXXXXXXX_____________________XXXXXXXX\n\
XXXXXXX_______________________XXXXXXX\n\
XXXXXX_________________________XXXXXX\n\
XXXXX___________________________XXXXX\n\
XXXX_____________________________XXXX\n\
XXXX_____________________________XXXX\n\
XXX_______________________________XXX\n\
XXX_______________________________XXX\n\
XX_________________________________XX\n\
XX_________________________________XX\n\
XX_________________________________XX\n\
X___________________________________X\n\
X___________________________________X\n\
X___________________________________X\n\
X___________________________________X\n\
X___________________________________X\n\
X___________________________________X\n\
X___________________________________X\n\
XX_________________________________XX\n\
XX_________________________________XX\n\
XX_________________________________XX\n\
XXX_______________________________XXX\n\
XXX_______________________________XXX\n\
XXXX_____________________________XXXX\n\
XXXX_____________________________XXXX\n\
XXXXX___________________________XXXXX\n\
XXXXXX__________________________XXXXX\n\
XXXXXXX_______________________XXXXXXX\n\
XXXXXXXX_____________________XXXXXXXX\n\
XXXXXXXXXX_________________XXXXXXXXXX\n\
XXXXXXXXXXXX_____________XXXXXXXXXXXX\n\
XXXXXXXXXXXXXXX_______XXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXX_P_XXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
";
levels.CONFERENCE.mobs = [
		{
            R: 4, C: 15, 
            NAME: "Election Fraud", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 5, C: 23, 
            NAME: "Mitt \"The Choker\" Romney", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 8, C: 21, 
            NAME: "The Donald", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 9, C: 11, 
            NAME: "The Gipper", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 11, C: 17, 
            NAME: "43", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 13, C: 13, 
            NAME: "41", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 13, C: 27, 
            NAME: "The Koch Brothers", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 15, C: 7, 
            NAME: "Sheldon Adelson", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 15, C: 26, 
            NAME: "Gary Johnson", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 17, C: 8, 
            NAME: "Ron Paul", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 18, C: 17, 
            NAME: "Milton Friedman", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 19, C: 24, 
            NAME: "The Evil in the World", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 21, C: 22, 
            NAME: "Jeb! \"Low Energy\" Bush", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 21, C: 28, 
            NAME: "John \"Not a Hero\" McCain", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 24, C: 24, 
            NAME: "The Media", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 25, C: 15, 
            NAME: "Rigged Election Process", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 27, C: 29, 
            NAME: "Bill Clinton", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 28, C: 9, 
            NAME: "Crooked Hillary", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 30, C: 20, 
            NAME: "Al Gore", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 31, C: 18, 
            NAME: "John Kerry", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 32, C: 9, 
            NAME: "Ralph Nader", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 34, C: 18, 
            NAME: "Jill Stein", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 35, C: 14, 
            NAME: "FDR", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 35, C: 22, 
            NAME: "JFK", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 32, C: 22, 
            NAME: "LBJ", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        },
		{
            R: 22, C: 10, 
            NAME: "Academia", 
            SPRITECODE: "dmw", 
            RANK: mobs.RANK.SPEAKER, 
            ONDEFEAT: function(player) {player.endorsements++; player.funds += 20;} 
        }
	]
levels.CONFERENCE.endorsereq = 25;
levels.CONFERENCE.atmosphere = [];
levels.CONFERENCE.loot = [
		{
			R: 2, C: 18,
			REWARD: function(player) {player.maxhealth *= 1.5; player.power *= 1.5},
			NAME: "Congressional Support",
			INFO: "You gain 50% power and health from the conference committee resolving difference between the house and senate"
		},
	];
	
levels.PRESIDENT = {};

levels.PRESIDENT.map = "\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX______XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX________________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX__________________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX__________________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX________________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____________XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX______XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX__XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX__XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX__P_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX____XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
";
levels.PRESIDENT.mobs = [
		{
			R: 13, C: 44,
			NAME: "Barack Obama",
			SPRITECODE: "dmw",
			RANK: mobs.RANK.PRESIDENT,
			ONDEFEAT: function(player) {
				player.endorsements++;
				player.engine.state = STATE.VICTORY; 
				player.engine.entities.gui.children.hud.state = gui.STATE.DISABLED;
				player.engine.entities.gui.children.hud.visible = false;
			}
		}
	];
levels.PRESIDENT.endorsereq = 1;
levels.PRESIDENT.atmosphere = [];
levels.PRESIDENT.loot = [];
}