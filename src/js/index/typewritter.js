/*[GLOBAL VARIABLES]*/
let obj = document.querySelectorAll(".typewritter");
let obj0_text = obj[0].innerText;
let obj1_text = obj[1].innerText;
let obj2_text = obj[2].innerText;
let int = {
	0: {
		status: false,
		0: null, 1: null,
		2: null, 3: null
	},
	1: {
		status: false,
		0: null, 1: null,
		2: null, 3: null
	},
	2: {
		status: false,
		0: null, 1: null,
		2: null, 3: null
	}
};

/*[FUNCTIONS]*/
let exec_obj = (objnum, task) => {
	switch (task) {
		case 0:
			if (!int[objnum][task]) {
				let i = 0;
				int[objnum][task] = setInterval(() => {
					if (i < eval(`obj${objnum}_text.length`)) i++;
					else {
						clearInterval(int[objnum][task]);
						eval(`int[${objnum}][${task}] = null`);
						if (int[objnum].status) { task++; exec_obj(objnum, task); }
					} 
					obj[objnum].innerText = `${eval(`obj${objnum}_text.slice(0, ${i})`)}_`;
				}, 50-(objnum+1)/0.5);
			}
			break;
		case 1:
			let j = 0;
			if (!int[objnum][task]) {
				int[objnum][task] = setInterval(() => {
					if (j < 8) j++;
					else {
						clearInterval(int[objnum][task]);
						eval(`int[${objnum}][${task}] = null`);
						if (int[objnum].status) { task++; exec_obj(objnum, task); }
					} 
					if ((j%2) == 0) obj[objnum].innerText = `${eval(`obj${objnum}_text`)}_`;
					else obj[objnum].innerText = `${eval(`obj${objnum}_text`)}`;
				}, 500-(objnum+1)/0.5);
			}
			break;
		case 2:
			if (!int[objnum][task]) {
				let k = 0;
				int[objnum][task] = setInterval(() => {
					if (k < eval(`obj${objnum}_text.length`)) k++;
					else {
						clearInterval(int[objnum][task]);
						eval(`int[${objnum}][${task}] = null`);
						if (int[objnum].status) { task++; exec_obj(objnum, task); }
					} 
					obj[objnum].innerText = `${eval(`obj${objnum}_text.slice(0, -${k})`)}_`;
				}, 50-(objnum+1)/0.5);
			}
			break;
		case 3:
			let l = 0;
			let offset = obj[objnum].offsetHeight;
			if (!int[objnum][task]) {
				int[objnum][task] = setInterval(() => {
					if (l < 8) l++;
					else {
						clearInterval(int[objnum][task]);
						eval(`int[${objnum}][${task}] = null`);
						if (int[objnum].status) { task=0; exec_obj(objnum, task); }
					} 
					if ((l%2) == 0) obj[objnum].innerText = `_`;
					else { obj[objnum].innerText = ``; obj[objnum].style.height = `${offset}px`; }
				}, 500-(objnum+1)/0.5);
			}
			break;
	}
}

/*[EVENTS]*/
document.addEventListener("scroll", () => {
	if (window.innerHeight >= obj[0].getBoundingClientRect().top && obj[0].getBoundingClientRect().bottom >= 0) {
		if (!int[0].status) {
			int[0].status = true;
			exec_obj(0, 0);
		}
	} else if (window.innerHeight >= obj[1].getBoundingClientRect().top && obj[1].getBoundingClientRect().bottom >= 0) {
		if (!int[1].status) {
			int[1].status = true;
			exec_obj(1, 0);
		}
	} else if (window.innerHeight >= obj[2].getBoundingClientRect().top && obj[2].getBoundingClientRect().bottom >= 0) {
		if (!int[2].status) {
			int[2].status = true;
			exec_obj(2, 0);
		}
	} else {
		for (let i=0; i<3; i++) {
			int[i].status = false;
			for (let j=0; j<2; j++) {
				clearInterval(int[i][j]);
				eval(`int[${i}][${j}] = null`);
			}
		}
	}
});