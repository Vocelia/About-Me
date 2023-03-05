let canvas = document.getElementById("chara-canvas");
let textbox = document.getElementById("textbox");
let context = canvas.getContext("2d");
let sprite = new Image(125, 386);
sprite.src = "src/media/sprites/chara.png";
let ch_switch_count = 0;
let base_heart = null;
let textspeed = 80;
let spd_swt = 0;

let ordinate = {
	0: {
		0: [5, 21, 19, 29],
		1: [5, 54, 17, 29],
		2: [5, 87, 17, 29],
		3: [5, 120, 19, 29]
	},
	1: {
		0: [5, 170, 19, 29],
		1: [5, 204, 17, 29],
		2: [5, 237, 17, 29]
	},
	2: {
		0: [5, 287, 19, 30],
		1: [5, 318, 19, 33],
		2: [5, 352, 19, 31]
	}
};

let draw_spr = (col, row, size) => {
	context.clearRect(0, 0, canvas.offsetWidth*2, canvas.offsetHeight*2);
	context.drawImage(
		sprite,
		ordinate[col][row][0], ordinate[col][row][1], ordinate[col][row][2], ordinate[col][row][3],
		canvas.offsetWidth/1.85, 0, ordinate[col][row][2]*size, ordinate[col][row][3]*size
	);
}

document.getElementById("history-button").onclick = () => {
	if (ch_switch_count>=2) {
		ivar = 999;
		ch_switch_count -= 2;
		textbox.click();
	}
}

document.getElementById("history-button").onmouseover = () => {
	if (ch_switch_count>=2) document.getElementById("history-button").style.backgroundColor = `lightgreen`;
	else document.getElementById("history-button").style.backgroundColor = `lightgrey`;
}

document.getElementById("history-button").onmouseleave = () => {
	if (ch_switch_count>=2) document.getElementById("history-button").style.backgroundColor = `green`;
	else document.getElementById("history-button").style.backgroundColor = `grey`;
}

document.getElementById("playerspeed").onclick = () => {
	if (spd_swt) {
		spd_swt = 0;
		textspeed *= 2;
		document.getElementById("playerspeed").innerHTML = `1x`;
	} else {
		spd_swt = 1;
		textspeed /= 2;
		document.getElementById("playerspeed").innerHTML = `2x`;
	}
};

let change_spd = (speed) => {
	if (spd_swt) textspeed = speed/2;
	else textspeed = speed;
} 

let end_discussion = () => {
	textbox.innerHTML += `<span>*</span>`;
	textbox.onclick = textbox_onclick;
}

let spam_hearts = () => {
  setInterval(() => {
    base_heart = new Heart("baseheart", window.innerWidth, window.innerHeight);
    base_heart.init();
    base_heart.show();
    base_heart.glow("start");
  }, 10);
}

let textbox_onclick = () => {
  ch_switch_count++;
  if (ch_switch_count>=2) document.getElementById("history-button").style.backgroundColor = `green`;
	else document.getElementById("history-button").style.backgroundColor = `grey`;
	switch (ch_switch_count) {
		case 1:
			draw_spr(0, 0, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
			slowprint(textbox, `Welcome to my domain!`).then(() => {
				textbox.innerHTML += `<br>`;
				slowprint(textbox, `How do you like it so far?`).then(() => {
					end_discussion();
				});
			});
			break;
		case 2:
			draw_spr(0, 0, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
			change_spd(1000);
			slowprint(textbox, `... `).then(() => {
				change_spd(80);
				textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
				slowprint(textbox, `Hm? Why aren't you saying anything? `).then(() => {
					setTimeout(() => {
						textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
						slowprint(textbox, `Oh Ooh! Let me guess!! The cat got your tongue, am I right?`).then(() => {
							end_discussion();
						});
					}, (spd_swt) ? 2000 : 1000);
				});
			});
			break;
		case 3:
			draw_spr(0, 0, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
			slowprint(textbox, `Hahaha I know I know. You weren't served with options to begin with.`).then(() => {
				setTimeout(() => {
					textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
					slowprint(textbox, `Whoa! Cool down! There's no reason to get mad at me like that. I was just teasing you a little bit, you know?`).then(() => {
						end_discussion();
					});
				}, (spd_swt) ? 2000 : 1000);
			});
			break;
		case 4:
			draw_spr(0, 0, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
			slowprint(textbox, `So, let me restate the question.`).then(() => {
				textbox.innerHTML += `<br>`;
				slowprint(textbox, `How do you like my domain so far?`).then(() => {
					end_discussion();
				});
			});
			break;
		case 5:
			draw_spr(0, 0, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `CHARA<br>`;
			textbox.innerHTML += `<center>
				<button class="opt" id="opt1">MEH MUNDANE</button>
				<button class="opt" id="opt2">MADE RATHER TERRIBLY</button>
				<button class="opt" id="opt3">IS THIS A JOKE?</button>
			</center>`;
			let options = document.querySelectorAll(".opt");
			for (let i=0; i<options.length; i++) {
				options[i].onclick = () => {
					textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
					slowprint(textbox, `What an awful reaction`).then(() => {
						change_spd(1000);
						slowprint(textbox, `...`).then(() => {
							change_spd(80);
							slowprint(textbox, `I guess I should've expected that.`).then(() => {
								end_discussion();
							});
						});
					});
				};
			}
			break;
		case 6:
			draw_spr(0, 0, 4.5);
			textbox.onclick = null;
			setTimeout(() => {
				draw_spr(0, 1, 4.5);
				setTimeout(() => {
					draw_spr(0, 3, 4.5);
					setTimeout(() => {
						textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
						slowprint(textbox, `Say, CHARA, what do you think about souls?`).then(() => {
							end_discussion();
						});
					}, 800);
				}, 800);
			}, 800);
			break;
		case 7:
			draw_spr(0, 3, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `CHARA<br>`;
			textbox.innerHTML += `<center>
				<button class="opt" id="opt1">WHAT IS THIS OUT OF NOWHERE?</button>
			</center>`;
			opt1 = document.querySelector("#opt1");
			opt1.onclick = () => {
				textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
				slowprint(textbox, `Oh- Nothing really...`).then(() => {
					textbox.innerHTML += `<br>`;
					slowprint(textbox, `I just wanted to hear your opinion regarding souls, that's all.`).then(() => {
						end_discussion();
					});
				});
			};
			break;
		case 8:
			draw_spr(0, 3, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `CHARA<br>* `;
			slowprint(textbox, `Putting that aside, why are you facing the other way around?`).then(() => {
				end_discussion();
			});
			break;
		case 9:
			draw_spr(0, 3, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
			change_spd(240);
			slowprint(textbox, `I just felt like it...`).then(() => {
				change_spd(80);
				slowprint(textbox, `Anyways, you haven't answered my question yet!!!`).then(() => {
					end_discussion();
				});
			});
			break;
		case 10:
			draw_spr(0, 3, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `CHARA<br>* `;
			slowprint(textbox, `Isn't the soul the essence of a human being?`).then(() => {
				setTimeout(() => {
					textbox.innerHTML = `CHARA<br>* `;
					slowprint(textbox, `It is like the core, I suppose?`).then(() => {
						end_discussion();
					});
				}, (spd_swt) ? 2000 : 1000);
			});
			break;
		case 11:
			draw_spr(0, 3, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
			slowprint(textbox, `It certainly is`).then(() => {
				change_spd(1000);
				slowprint(textbox, `...`).then(() => {
					change_spd(80);
					slowprint(textbox, `but that's not about it!`).then(() => {
						end_discussion();
					});
				});
			});
			break;
		case 12:
			change_spd(140);
			draw_spr(0, 3, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
			slowprint(textbox, `Certainly, humans cannot live without a soul... `).then(() => {
				setTimeout(() => {
					change_spd(180);
					textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
					slowprint(textbox, `while some souls define the characteristics of a human... `).then(() => {
						setTimeout(() => {
							change_spd(240);
							textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
							slowprint(textbox, `it could also be used to turn the tides against them!`).then(() => {
								end_discussion();
							});
						}, (spd_swt) ? 1400 : 700);
					});
				}, (spd_swt) ? 1400 : 700);
			});
			break;
		case 13:
			draw_spr(0, 3, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `CHARA<br>`;
			textbox.innerHTML += `<center>
				<button class="opt" id="opt1">WHAT ARE YOU TRYING TO SAY?</button>
			</center>`;
			opt1_1 = document.querySelector("#opt1");
			opt1_1.onclick = () => {
				change_spd(300);
				textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
				slowprint(textbox, `What I am saying is th-`).then(() => {
					change_spd(20);
					textbox.innerHTML = `CHARA<br>* `;
					slowprint(textbox, `For God's sake, could you speak naturally for once?`).then(() => {
						end_discussion();
					});
				});
			};
			break;
		case 14:
			change_spd(80);
			draw_spr(0, 3, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
			slowprint(textbox, `Haha. Sorry, did I get carried away?`).then(() => {
				setTimeout(() => {
					textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
					slowprint(textbox, `Anyways, what I am trying to say is that, a body is a vessel... `).then(() => {
						setTimeout(() => {
							textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
							slowprint(textbox, `Therefore, you could replace any body with any soul you desire to use...`).then(() => {
								setTimeout(() => {
									textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
									slowprint(textbox, `And that's what brings us here today`).then(() => {
										end_discussion();
									});
								}, (spd_swt) ? 2000 : 1000);
							});
						}, (spd_swt) ? 2000 : 1000);
					});
				}, (spd_swt) ? 2000 : 1000);
			});
			break;
		case 15:
			change_spd(200);
			draw_spr(0, 3, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
			slowprint(textbox, `CHARA...`).then(() => {
				change_spd(120);
				slowprint(textbox, `a fierce battle awaits us ahead!`).then(() => {
					textbox.innerHTML += `<br>`;
					slowprint(textbox, `This'll be our decisive battle.`).then(() => {
						setTimeout(() => {
							textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
							slowprint(textbox, `The deciding factor that will decide who's the genuine CHARA!`).then(() => {
								textbox.innerHTML += `<span>?</span>`;
								textbox.onclick = textbox_onclick;
							});
						}, (spd_swt) ? 2000 : 1000);
					});
				});
			});
			break;
		case 16:
			change_spd(80);
			draw_spr(0, 3, 4.5);
			textbox.onclick = null;
			base_heart = new Heart("baseheart", window.innerWidth, window.innerHeight);
			base_heart.init();
			base_heart.x = window.innerWidth-(window.innerWidth/1.2);
			base_heart.y = window.innerHeight-(window.innerHeight/1.2);
			base_heart.degree = 0;
			base_heart.update();
      base_heart.show();
			base_heart.glow("start");
			setTimeout(() => {
				draw_spr(0, 1, 4.5);
				setTimeout(() => {
					draw_spr(0, 0, 4.5);
					base_heart.show().then(() => {
						textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
						slowprint(textbox, `Do you know what this is, CHARA?`).then(() => {
							end_discussion();
						});
					});
				}, 400);
			}, 800);
			break;
		case 17:
			draw_spr(0, 0, 4.5);
			textbox.onclick = null;
			textbox.innerHTML = `CHARA<br>* `;
			slowprint(textbox, `Wait!!! *GASP*`).then(() => {
				setTimeout(() => {
					textbox.innerHTML = `CHARA<br>`;
					textbox.innerHTML += `<center>
						<button class="opt" id="opt1">WHAT ARE YOU DOING WITH MY SOUL?</button>
					</center>`;
					opt1_1_1 = document.querySelector("#opt1");
					opt1_1_1.onclick = () => {
						textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
						slowprint(textbox, `Your soul? `).then(() => {
							setTimeout(() => {
								slowprint(textbox, `Heh! Don't make me laugh...We both shared the same soul from the very beginning!`).then(() => {
									end_discussion();
								});
							}, (spd_swt) ? 1200 : 600);
						});
					}
				}, (spd_swt) ? 1400 : 700);
			});
			break;
		case 18:
      context.clearRect(0, 0, canvas.offsetWidth*2, canvas.offsetHeight*2);
			context.font = "30px Arial";
      context.fillStyle = "white";
      context.fillText("Bruh why did you", 10, 50);
      context.fillText("pause my game!", 10, 100);
			textbox.onclick = null;
			textbox.innerHTML = `<font color="yellow">Quick Note from the Developer</font><br>* `;
			slowprint(textbox, `I am too lazy to continue this, so I will give you a button to skip the battle. idk im making this short just do whatever u want`).then(() => {
				setTimeout(() => {
					textbox.innerHTML = `CHARA<br>`;
					textbox.innerHTML += `<center>
						<button class="opt" id="opt1">SKEEEP</button>
					</center>`;
					opt1_1_1 = document.querySelector("#opt1");
					opt1_1_1.onclick = () => {
						textbox.innerHTML = `<font color="red">CHARA???</font><br>* `;
						end_discussion();
            spam_hearts();
					}
				}, (spd_swt) ? 2800 : 1400);
			});
			break;
	}
};

window.onload = () => {
	textbox.onclick = textbox_onclick;
	textbox.click();
};