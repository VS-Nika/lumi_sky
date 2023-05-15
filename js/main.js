// Условие: Когда пользователь прокрутит вниз 1000px, то появится кнопка, а когда нажмет - переместит вверх

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
	if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
		document.getElementById('buttonUp').style.display = "block";
	}
	else {
		document.getElementById('buttonUp').style.display = "none";
	}
}

//нажатие кнопки

function topFunction(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// слайдер
const swiper = new Swiper('.swiper', {
	speed: 500,
	spaceBetween: 100,
	pagination: {
			el: '.swiper-pagination',
		},
	navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	effect: "card",
	fadeEffect: {
			crossFade : true
	},
});