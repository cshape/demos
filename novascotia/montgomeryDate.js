let isMontgomeryOpen = 'true';
let today = new Date();
let hourInRockland = today.getUTCHours() - 4;
let dayOfWeek = today.getDay();

if (dayOfWeek == 0 || dayOfWeek == 6) {
	isMontgomeryOpen = 'false';
} else if (hourInRockland < 9 || hourInRockland > 14) {
	isMontgomeryOpen = 'false';
}