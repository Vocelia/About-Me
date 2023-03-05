class Heart {
	constructor(id, width, height) {
		/*DEFINITIONS*/
		this.opacity = 0;
		this.glowval = 0;
		this.glowtime = null;
		/*duration, blur, space*/
		this.glowattr = [20, 5.2, 3.8];
		this.x = Math.round(Math.random() * width);
		this.y = Math.round(Math.random() * height);
		this.degree = Math.round(Math.random() * 360);
		/*EXECUTION*/
		this.object = document.createElement(`img`);
		this.container = document.createElement(`div`);
		this.object.id = id;
		this.object.class = `heart`;
		this.object.style.opacity = 0;
		this.object.style.width = `3em`;
		this.object.style.height = `3em`;
		this.container.style.width = `1px`;
		this.container.style.height = `1px`;
		this.container.style.borderRadius = `50%`;
		this.object.style.transform = `rotate(${this.degree}deg)`;
		this.object.style.top = `${this.y}px`;
		this.object.style.left = `${this.x}px`;
		this.object.style.position = `absolute`;
		this.object.src = `/icons/undertale.png`;
	}

	init() {
		document.body.appendChild(this.object);
		this.container.style.top = `${this.y+(this.object.height/2)}px`;
		this.container.style.left = `${this.x+(this.object.width/2)}px`;
		this.container.style.position = `absolute`;
		document.body.appendChild(this.container);
	}

	update() {
		this.object.style.opacity = this.opacity;
		this.object.style.transform = `rotate(${this.degree}deg)`;
		this.object.style.top = `${this.y}px`;
		this.object.style.left = `${this.x}px`;
		this.container.style.top = `${this.y+(this.object.height/2)}px`;
		this.container.style.left = `${this.x+(this.object.width/2)}px`;
	}

	glow(status) {
		let begin = () => {
			let glow_int = true;
			let glowfunc = () => {
				this.glowtime = setTimeout(() => {
					if (this.glowval<100 && glow_int) this.glowval++;
					else {
						this.glowval--;
						if (this.glowval>40) glow_int = false;
						else glow_int = true;
					}
					this.container.style.boxShadow = `0 0 ${this.glowattr[1]}em ${this.glowattr[2]*(this.glowval/100)}em #ff0000`;
					glowfunc();
				}, this.glowattr[0]);
			}
			glowfunc();
		}
		switch (status) {
			case "start":
				begin();
				break;
			case "stop": 
				clearTimeout(this.glowtime);
				break;
			case "end":
				this.glowval = 0;
				clearTimeout(this.glowtime);
				this.container.style.boxShadow = ``;
				break;
		}
	}

	show() {
		let show_int_status = true;
		let innerfunc = () => {
			if (this.opacity<100) {
				this.opacity++;
				this.object.style.opacity = `${this.opacity}%`;
				setTimeout(() => {
					innerfunc();
				}, 15);
			} else show_int_status = false;
		}
		return new Promise((res, rej) => {
			innerfunc();
			let show_int = setInterval(() => {
				if (show_int_status==false) {
					clearInterval(show_int);
					res(null);
				}
			}, 10);
		});
	}

	destroy() {
		this.glow("end");
		let destroy_int_status = true;
		let innerfunc = () => {
			if (this.opacity>0) {
				this.opacity--;
				this.object.style.opacity = `${this.opacity}%`;
				setTimeout(() => {
					innerfunc();
				}, 15);
			} else destroy_int_status = false;
		}
		return new Promise((res, rej) => {
			innerfunc();
			let destroy_int = setInterval(() => {
				if (destroy_int_status==false) {
					clearInterval(destroy_int);
					document.body.removeChild(this.container);
					document.body.removeChild(this.object);
					res(null);
				}
			}, 10);
		});
	}
}