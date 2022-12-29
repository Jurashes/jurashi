let top_a = document.querySelector('.top_a')
let a_top = document.querySelector('.a_top')
let hh_one = document.querySelector('#hh_one')
let right_bot_input = document.querySelector('.right_bot input')
let right_bot_a = document.querySelector('.right_bot a')
let cen_bot = document.querySelector('.cen_bot')
let right_bot_svg = document.querySelector('.hh_two')
let nike_names = document.querySelector('.nike_names')
let ff_pred = document.querySelector('.ff_pred')

top_a.onclick = function () {
	a_top.classList.toggle('aa_top')
}

right_bot_input.onclick = function(){
	ff_pred.style = `display: none`
	nike_names.style = `display: block;`
	hh_one.style = `position: absolute;
				left: 31%;`
	// right_bot_input.classList.toggle('bot__input')
	right_bot_input.style = `position: absolute;
				right: 35%;
				width: 400px;`
	right_bot_a.style = ` display: block; `
	cen_bot.style = ` display: none; `
	right_bot_svg.style = ` 
		display: none;
	 `
}

right_bot_a.onclick = function(){
	ff_pred.style = `display: block`
	nike_names.style = `display: none;`
	right_bot_a.style = ` display: none; `
	cen_bot.style = ` display: block; `
	right_bot_svg.style = ` 
		display: block;
	 `
	 hh_one.style = `position: absolute;
				right: 280px;
				top: 50px;`
	// right_bot_input.classList.toggle('bot__input')
	right_bot_input.style = `width: 100px; 
	height: 20px;`
}

hh_one.onclick = function(){
	ff_pred.style = `display: none`
	nike_names.style = `display: block;`
	hh_one.style = `position: absolute;
				left: 31%;`
	// right_bot_input.classList.toggle('bot__input')
	right_bot_input.style = `position: absolute;
				right: 35%;
				width: 400px;`
	right_bot_a.style = ` display: block; `
	cen_bot.style = ` display: none; `
	right_bot_svg.style = ` 
		display: none;
	 `
}

hh_one.onclick = function(){
	ff_pred.style = `display: block`
	nike_names.style = `display: none;`
	right_bot_a.style = ` display: none; `
	cen_bot.style = ` display: block; `
	right_bot_svg.style = ` 
		display: block;
	 `
	 hh_one.style = `position: absolute;
				right: 280px;
				top: 50px;`
	// right_bot_input.classList.toggle('bot__input')
	right_bot_input.style = `width: 100px; 
	height: 20px;`
}

