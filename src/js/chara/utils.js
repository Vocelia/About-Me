let ivar = 0;
let slowprint = (textbox, text) => {
	text = text.toUpperCase();
	let innerfunc = () => {
		if (ivar<text.length) {
			textbox.innerHTML += text.charAt(ivar); ivar++;
			setTimeout(() => {
				innerfunc(textbox, text);
			}, textspeed);
		} else ivar = 0;
	}
	return new Promise((res, rej) => {
		innerfunc();
		let int = setInterval(() => {
			if (ivar==0) {
				clearInterval(int);
				res(null);
			}
		}, 10);
	});
}