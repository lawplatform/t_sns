function randomCharacter() {
	const chars = "abcdefghijklmnopqrstuwxyxABCDEFGHIJKLMNOPQRSTUWXYX0123456789";
	return chars[Math.floor(Math.random() * chars.length)];

}
