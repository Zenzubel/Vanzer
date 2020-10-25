$(function () {
//================== menu-burger===========================
	$('.menu-burger__icon').click(function(event) {
	$('.menu-burger__icon').toggleClass('active');
	$('.navigation__right, .navigation__left, body').toggleClass('displacement');
	});
//=========start-parallax=============
	var elem = $('.header__content'),
		pos = elem.offset(),
		elem_left = pos.left,
		elem_top = pos.top,
		elem_width = elem.width(),
		elem_height = elem.height(),
		x_center,
		y_center;

	$('.header__content').mousemove(function(e){

	x_center = ( elem_width / 2 ) - ( e.pageX - elem_left );
	y_center = ( elem_height / 2 ) - ( e.pageY - elem_top );

	$('.header__bg-img').each(function(){
		var speed = $(this).attr('data-speed'),
			xPos = Math.round(-1*x_center/20*speed),
			yPos = Math.round(y_center/20*speed);
		if (yPos < 0)
			yPos = -2*speed;
	$(this).css('transform', 'translate3d('+xPos+'px, '+yPos+'px, 0px)');
		});
	});
//=========end-parallax=============

///////////////start-nicescroll//////////////////////
	$(".innovation__accordion-text").niceScroll({
		cursorcolor:"transparent",
		cursorwidth:"0px",
		background:"none",
		cursorborder:"none",
		cursorborderradius:4
	});
///////////////end-nicescroll//////////////////////

	// init controller
	// sratr scenes -01
var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.3}});
	/////////////////////////////////////////delete
	// new ScrollMagic.Scene({triggerElement: "#header"}).setClassToggle(".num--0", "active")
	// .addIndicators({name: 'about scene', colorTrigger: 'black', colorStart: '#fff', colorEnd: 'green'})
	// .addTo(controller);
	/////////////////////////////////////////delete
	new ScrollMagic.Scene({triggerElement: "#header"}).setClassToggle(".navigation__pagination-btn--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).setClassToggle(".navigation__pagination-num--01", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).setClassToggle(".navigation__pagination-item--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).setClassToggle(".navigation__pagination-text--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).setClassToggle(".navigation__pagination-item--2", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-item--3", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-item--4", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-item--5", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-item--6", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-item--7", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-num--02", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-num--03", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-num--04", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-num--05", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-num--06", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-num--07", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-item--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-item--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-item--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-item--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-item--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-item--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-btn--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-btn--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-btn--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-btn--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-btn--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-btn--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-text--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-text--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-text--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-text--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-text--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#header"}).removeClassToggle(".navigation__pagination-text--7", "active").addTo(controller);
	// end scene -01
	// sratr scenes -02
var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.3}});
	new ScrollMagic.Scene({triggerElement: "#about"}).setClassToggle(".navigation__pagination-btn--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).setClassToggle(".navigation__pagination-num--02", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).setClassToggle(".navigation__pagination-item--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).setClassToggle(".navigation__pagination-text--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).setClassToggle(".navigation__pagination-item--3", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-item--4", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-item--5", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-item--6", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-item--7", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-item--1", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-num--03", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-num--04", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-num--05", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-num--06", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-num--07", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-num--01", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-item--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-item--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-item--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-item--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-item--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-item--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-btn--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-btn--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-btn--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-btn--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-btn--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-btn--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-text--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-text--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-text--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-text--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-text--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#about"}).removeClassToggle(".navigation__pagination-text--1", "active").addTo(controller);

	// end scene -02
	// sratr scenes -03
var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.3}});
	new ScrollMagic.Scene({triggerElement: "#objects"}).setClassToggle(".navigation__pagination-btn--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).setClassToggle(".navigation__pagination-num--03", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).setClassToggle(".navigation__pagination-item--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).setClassToggle(".navigation__pagination-text--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).setClassToggle(".navigation__pagination-item--4", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-item--5", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-item--6", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-item--7", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-item--1", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-item--2", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-num--04", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-num--05", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-num--06", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-num--07", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-num--01", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-num--02", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-item--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-item--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-item--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-item--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-item--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-item--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-btn--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-btn--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-btn--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-btn--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-btn--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-btn--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-text--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-text--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-text--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-text--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-text--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#objects"}).removeClassToggle(".navigation__pagination-text--2", "active").addTo(controller);

	// end scene -03
	// sratr scenes -04
var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.3}});
	new ScrollMagic.Scene({triggerElement: "#service"}).setClassToggle(".navigation__pagination-btn--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).setClassToggle(".navigation__pagination-num--04", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).setClassToggle(".navigation__pagination-item--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).setClassToggle(".navigation__pagination-text--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).setClassToggle(".navigation__pagination-item--5", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-item--6", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-item--7", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-item--1", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-item--2", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-item--3", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-num--05", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-num--06", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-num--07", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-num--01", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-num--02", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-num--03", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-item--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-item--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-item--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-item--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-item--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-item--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-btn--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-btn--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-btn--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-btn--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-btn--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-btn--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-text--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-text--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-text--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-text--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-text--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#service"}).removeClassToggle(".navigation__pagination-text--3", "active").addTo(controller);

	// end scene -04
	// sratr scenes -05
var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.3}});
	new ScrollMagic.Scene({triggerElement: "#partners"}).setClassToggle(".navigation__pagination-btn--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).setClassToggle(".navigation__pagination-num--05", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).setClassToggle(".navigation__pagination-item--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).setClassToggle(".navigation__pagination-text--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).setClassToggle(".navigation__pagination-item--6", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-item--7", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-item--1", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-item--2", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-item--3", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-item--4", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-num--06", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-num--07", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-num--01", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-num--02", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-num--03", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-num--04", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-item--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-item--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-item--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-item--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-item--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-item--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-btn--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-btn--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-btn--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-btn--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-btn--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-btn--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-text--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-text--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-text--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-text--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-text--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#partners"}).removeClassToggle(".navigation__pagination-text--4", "active").addTo(controller);

	// end scene -05
	// sratr scenes -06
var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.3}});
	new ScrollMagic.Scene({triggerElement: "#innovation"}).setClassToggle(".navigation__pagination-btn--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).setClassToggle(".navigation__pagination-num--06", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).setClassToggle(".navigation__pagination-item--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).setClassToggle(".navigation__pagination-text--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).setClassToggle(".navigation__pagination-item--7", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-item--1", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-item--2", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-item--3", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-item--4", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-item--5", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-num--07", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-num--01", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-num--02", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-num--03", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-num--04", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-num--05", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-item--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-item--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-item--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-item--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-item--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-item--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-btn--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-btn--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-btn--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-btn--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-btn--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-btn--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-text--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-text--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-text--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-text--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-text--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#innovation"}).removeClassToggle(".navigation__pagination-text--5", "active").addTo(controller);

	// end scene -06
	// sratr scenes -07
var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '200%', triggerHook: 0.3}});
	new ScrollMagic.Scene({triggerElement: "#footer"}).setClassToggle(".navigation__pagination-btn--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).setClassToggle(".navigation__pagination-num--07", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).setClassToggle(".navigation__pagination-item--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).setClassToggle(".navigation__pagination-text--7", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-item--2", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-item--3", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-item--4", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-item--5", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).setClassToggle(".navigation__pagination-item--6", "preactive").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-num--01", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-num--02", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-num--03", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-num--04", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-num--05", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-num--06", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-item--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-item--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-item--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-item--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-item--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-item--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-btn--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-btn--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-btn--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-btn--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-btn--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-btn--6", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-text--1", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-text--2", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-text--3", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-text--4", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-text--5", "active").addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#footer"}).removeClassToggle(".navigation__pagination-text--6", "active").addTo(controller);

	// end scene -07
//=======================start-PAGINATION=====================
//=======================start-PAGINATION=====================
//=======================start-PAGINATION=====================
	$('.navigation__pagination-btn--1').click(function(event) {
	$('.navigation__pagination-btn--1, .navigation__pagination-num--01, .navigation__pagination-item--1, .navigation__pagination-text--1').addClass('active');
	$('.navigation__pagination-item--2').addClass('preactive');
	$('.navigation__pagination-item--3, .navigation__pagination-item--4, .navigation__pagination-item--5, .navigation__pagination-item--6, .navigation__pagination-item--7').removeClass('preactive');
	$('.navigation__pagination-num--02, .navigation__pagination-num--03, .navigation__pagination-num--04, .navigation__pagination-num--05, .navigation__pagination-num--06, .navigation__pagination-num--07, .navigation__pagination-item--2, .navigation__pagination-item--3, .navigation__pagination-item--4, .navigation__pagination-item--5, .navigation__pagination-item--6, .navigation__pagination-item--7, .navigation__pagination-btn--2, .navigation__pagination-btn--3, .navigation__pagination-btn--4, .navigation__pagination-btn--5, .navigation__pagination-btn--6, .navigation__pagination-btn--7, .navigation__pagination-text--2, .navigation__pagination-text--3, .navigation__pagination-text--4, .navigation__pagination-text--5, .navigation__pagination-text--6, .navigation__pagination-text--7').removeClass('active');
	});

	$('.navigation__pagination-btn--2').click(function(event) {
	$('.navigation__pagination-btn--2, .navigation__pagination-num--02, .navigation__pagination-item--2, .navigation__pagination-text--2').addClass('active');
	$('.navigation__pagination-item--3').addClass('preactive');
	$('.navigation__pagination-item--4, .navigation__pagination-item--5, .navigation__pagination-item--6, .navigation__pagination-item--7, .navigation__pagination-item--1').removeClass('preactive');
	$('.navigation__pagination-num--03, .navigation__pagination-num--04, .navigation__pagination-num--05, .navigation__pagination-num--06, .navigation__pagination-num--07, .navigation__pagination-num--01, .navigation__pagination-item--3, .navigation__pagination-item--4, .navigation__pagination-item--5, .navigation__pagination-item--6, .navigation__pagination-item--7, .navigation__pagination-item--1, .navigation__pagination-btn--3, .navigation__pagination-btn--4, .navigation__pagination-btn--5, .navigation__pagination-btn--6, .navigation__pagination-btn--7, .navigation__pagination-btn--1, .navigation__pagination-text--3, .navigation__pagination-text--4, .navigation__pagination-text--5, .navigation__pagination-text--6, .navigation__pagination-text--7, .navigation__pagination-text--1').removeClass('active');
	});

	$('.navigation__pagination-btn--3').click(function(event) {
	$('.navigation__pagination-btn--3, .navigation__pagination-num--03, .navigation__pagination-item--3, .navigation__pagination-text--3').addClass('active');
	$('.navigation__pagination-item--4').addClass('preactive');
	$('.navigation__pagination-item--5, .navigation__pagination-item--6, .navigation__pagination-item--7, .navigation__pagination-item--1, .navigation__pagination-item--2').removeClass('preactive');
	$('.navigation__pagination-num--04, .navigation__pagination-num--05, .navigation__pagination-num--06, .navigation__pagination-num--07, .navigation__pagination-num--01, .navigation__pagination-num--02, .navigation__pagination-item--4, .navigation__pagination-item--5, .navigation__pagination-item--6, .navigation__pagination-item--7, .navigation__pagination-item--1, .navigation__pagination-item--2, .navigation__pagination-btn--4, .navigation__pagination-btn--5, .navigation__pagination-btn--6, .navigation__pagination-btn--7, .navigation__pagination-btn--1, .navigation__pagination-btn--2, .navigation__pagination-text--4, .navigation__pagination-text--5, .navigation__pagination-text--6, .navigation__pagination-text--7, .navigation__pagination-text--1, .navigation__pagination-text--2').removeClass('active');
	});

	$('.navigation__pagination-btn--4').click(function(event) {
	$('.navigation__pagination-btn--4, .navigation__pagination-num--04, .navigation__pagination-item--4, .navigation__pagination-text--4').addClass('active');
	$('.navigation__pagination-item--5').addClass('preactive');
	$('.navigation__pagination-item--6, .navigation__pagination-item--7, .navigation__pagination-item--1, .navigation__pagination-item--2, .navigation__pagination-item--3').removeClass('preactive');
	$('.navigation__pagination-num--05, .navigation__pagination-num--06, .navigation__pagination-num--07, .navigation__pagination-num--01, .navigation__pagination-num--02, .navigation__pagination-num--03, .navigation__pagination-item--5, .navigation__pagination-item--6, .navigation__pagination-item--7, .navigation__pagination-item--1, .navigation__pagination-item--2, .navigation__pagination-item--3, .navigation__pagination-btn--5, .navigation__pagination-btn--6, .navigation__pagination-btn--7, .navigation__pagination-btn--1, .navigation__pagination-btn--2, .navigation__pagination-btn--3, .navigation__pagination-text--5, .navigation__pagination-text--6, .navigation__pagination-text--7, .navigation__pagination-text--1, .navigation__pagination-text--2, .navigation__pagination-text--3').removeClass('active');
	});

	$('.navigation__pagination-btn--5').click(function(event) {
	$('.navigation__pagination-btn--5, .navigation__pagination-num--05, .navigation__pagination-item--5, .navigation__pagination-text--5').addClass('active');
	$('.navigation__pagination-item--6').addClass('preactive');
	$('.navigation__pagination-item--7, .navigation__pagination-item--1, .navigation__pagination-item--2, .navigation__pagination-item--3, .navigation__pagination-item--4').removeClass('preactive');
	$('.navigation__pagination-num--06, .navigation__pagination-num--07, .navigation__pagination-num--01, .navigation__pagination-num--02, .navigation__pagination-num--03, .navigation__pagination-num--04, .navigation__pagination-item--6, .navigation__pagination-item--7, .navigation__pagination-item--1, .navigation__pagination-item--2, .navigation__pagination-item--3, .navigation__pagination-item--4, .navigation__pagination-btn--6, .navigation__pagination-btn--7, .navigation__pagination-btn--1, .navigation__pagination-btn--2, .navigation__pagination-btn--3, .navigation__pagination-btn--4, .navigation__pagination-text--6, .navigation__pagination-text--7, .navigation__pagination-text--1, .navigation__pagination-text--2, .navigation__pagination-text--3, .navigation__pagination-text--4').removeClass('active');
	});

	$('.navigation__pagination-btn--6').click(function(event) {
	$('.navigation__pagination-btn--6, .navigation__pagination-num--06, .navigation__pagination-item--6, .navigation__pagination-text--6').addClass('active');
	$('.navigation__pagination-item--7').addClass('preactive');
	$('.navigation__pagination-item--1, .navigation__pagination-item--2, .navigation__pagination-item--3, .navigation__pagination-item--4, .navigation__pagination-item--5').removeClass('preactive');
	$('.navigation__pagination-num--07, .navigation__pagination-num--01, .navigation__pagination-num--02, .navigation__pagination-num--03, .navigation__pagination-num--04, .navigation__pagination-num--05, .navigation__pagination-item--7, .navigation__pagination-item--1, .navigation__pagination-item--2, .navigation__pagination-item--3, .navigation__pagination-item--4, .navigation__pagination-item--5, .navigation__pagination-btn--7, .navigation__pagination-btn--1, .navigation__pagination-btn--2, .navigation__pagination-btn--3, .navigation__pagination-btn--4, .navigation__pagination-btn--5, .navigation__pagination-text--7, .navigation__pagination-text--1, .navigation__pagination-text--2, .navigation__pagination-text--3, .navigation__pagination-text--4, .navigation__pagination-text--5').removeClass('active');
	});

		$('.navigation__pagination-btn--7').click(function(event) {
	$('.navigation__pagination-btn--7, .navigation__pagination-num--07, .navigation__pagination-item--7, .navigation__pagination-text--7').addClass('active');
	$('.navigation__pagination-item--6').addClass('preactive');
	$('.navigation__pagination-item--2, .navigation__pagination-item--3, .navigation__pagination-item--4, .navigation__pagination-item--5, .navigation__pagination-item--7').removeClass('preactive');
	$('.navigation__pagination-num--01, .navigation__pagination-num--02, .navigation__pagination-num--03, .navigation__pagination-num--04, .navigation__pagination-num--05, .navigation__pagination-num--06, .navigation__pagination-item--1, .navigation__pagination-item--2, .navigation__pagination-item--3, .navigation__pagination-item--4, .navigation__pagination-item--5, .navigation__pagination-item--6, .navigation__pagination-btn--1, .navigation__pagination-btn--2, .navigation__pagination-btn--3, .navigation__pagination-btn--4, .navigation__pagination-btn--5, .navigation__pagination-btn--6, .navigation__pagination-text--1, .navigation__pagination-text--2, .navigation__pagination-text--3, .navigation__pagination-text--4, .navigation__pagination-text--5, .navigation__pagination-text--6').removeClass('active');
	});

//=======================end-PAGINATION=====================
//=======================end-PAGINATION=====================
//=======================end-PAGINATION=====================
//==========================================================
//==========================================================
//==========================================================
//=====start-dark-theme-social-icon
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.34}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".navigation__social-link--1", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.34}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".navigation__social-link--1", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.42}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".navigation__social-link--2", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.42}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".navigation__social-link--2", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.50}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".navigation__social-link--3", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.50}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".navigation__social-link--3", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.575}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".navigation__social-link--4", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.575}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".navigation__social-link--4", "dark")
			.addTo(controller)
//=====end-dark-theme-social-icon
//=====start-dark-theme-menu-burger
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.05}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".menu-burger__stroke-1", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.05}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".menu-burger__stroke-1", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.058}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".menu-burger__stroke-2", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.058}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".menu-burger__stroke-2", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.0656}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".menu-burger__stroke-3", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.0656}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".menu-burger__stroke-3", "dark")
			.addTo(controller);
//=====end-dark-theme-menu-burger
//=====start-dark-theme-logo
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.0656}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".navigation__logo", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.0656}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".navigation__logo", "dark")
			.addTo(controller);
//=====end-dark-theme-logo
//=====start-dark-theme-pagination
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.73}});
		new ScrollMagic.Scene({triggerElement: "#about"}).setClassToggle(".navigation__pagination-btn--7", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.73}});
		new ScrollMagic.Scene({triggerElement: "#partners"}).setClassToggle(".navigation__pagination-btn--7", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.68}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".navigation__pagination-btn--6", "dark").addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.68}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".navigation__pagination-btn--6", "dark").addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.625}});
		new ScrollMagic.Scene({triggerElement: "#about"})
		.setClassToggle(".navigation__pagination-btn--5", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.625}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
		.setClassToggle(".navigation__pagination-btn--5", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.58}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".navigation__pagination-btn--4", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.58}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".navigation__pagination-btn--4", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.52}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".navigation__pagination-btn--3", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.52}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".navigation__pagination-btn--3", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.47}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".navigation__pagination-btn--2", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.47}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".navigation__pagination-btn--2", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.23}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".navigation__pagination-btn--1", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.23}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".navigation__pagination-btn--1", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.4}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".navigation__pagination-item--3", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.4}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".navigation__pagination-item--2", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.4}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".navigation__pagination-text--2", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.4}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".navigation__pagination-text--5", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.4}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".navigation__pagination-num--02", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.4}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".navigation__pagination-num--05", "dark")
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.4}});
		new ScrollMagic.Scene({triggerElement: "#about"})
			.setClassToggle(".navigation__pagination-item--3", "dark")
			// .addIndicators({name: 'about scene', colorTrigger: 'black', colorStart: '#fff', colorEnd: 'green'})
			.addTo(controller);
	var controller = new ScrollMagic.Controller({globalSceneOptions: {offset: 0, duration: '100%', triggerHook: 0.4}});
		new ScrollMagic.Scene({triggerElement: "#partners"})
			.setClassToggle(".navigation__pagination-item--6", "dark")
			// .addIndicators({name: 'about scene', colorTrigger: 'black', colorStart: '#fff', colorEnd: 'green'})
			.addTo(controller);
//=====end-dark-theme-pagination

//start-galary-scene
	$('.objects__pagination-object--1').click(function(event) {
		$('.objects__pagination-object--1, .objects__pagination-dot--1').addClass('active');
		$('.objects__alfa-img-1--1, .objects__alfa-img-2--1, .objects__alfa-img-3--1').addClass('active');
		$('.objects__pagination-object--2, .objects__pagination-object--3, .objects__pagination-dot--2, .objects__pagination-dot--3, .objects__pagination-dot--4').removeClass('active');
		$('.objects__alfa-img-1--2, .objects__alfa-img-2--2, .objects__alfa-img-3--2, .objects__alfa-img-1--3, .objects__alfa-img-2--3, .objects__alfa-img-3--3, .objects__alfa-img-1--4, .objects__alfa-img-2--4, .objects__alfa-img-3--4').removeClass('active');

		if ($(".objects__pagination-object--1").hasClass("active")) {
			$('.objects__pagination-dot--1, .objects__pagination-dot--2, .objects__pagination-dot--3, .objects__pagination-dot--4').addClass('alfa');
			$('.objects__pagination-dot--1, .objects__pagination-dot--2, .objects__pagination-dot--3, .objects__pagination-dot--4').removeClass('beta');
			$('.objects__pagination-dot--1, .objects__pagination-dot--2, .objects__pagination-dot--3, .objects__pagination-dot--4').removeClass('gamma');

			$('.objects__beta-img-1--1, .objects__beta-img-1--2, .objects__beta-img-1--3, .objects__beta-img-1--4, .objects__beta-img-2--1, .objects__beta-img-2--2, .objects__beta-img-2--3, .objects__beta-img-2--4, .objects__beta-img-3--1, .objects__beta-img-3--2, .objects__beta-img-3--3, .objects__beta-img-3--4').addClass('dasable');
			$('.objects__beta-img-1--1, .objects__beta-img-1--2, .objects__beta-img-1--3, .objects__beta-img-1--4, .objects__beta-img-2--1, .objects__beta-img-2--2, .objects__beta-img-2--3, .objects__beta-img-2--4, .objects__beta-img-3--1, .objects__beta-img-3--2, .objects__beta-img-3--3, .objects__beta-img-3--4').removeClass('active');

			$('.objects__gamma-img-1--1, .objects__gamma-img-1--2, .objects__gamma-img-1--3, .objects__gamma-img-1--4, .objects__gamma-img-2--1, .objects__gamma-img-2--2, .objects__gamma-img-2--3, .objects__gamma-img-2--4, .objects__gamma-img-3--1, .objects__gamma-img-3--2, .objects__gamma-img-3--3, .objects__gamma-img-3--4').addClass('dasable');

			$('.objects__gamma-img-1--1, .objects__gamma-img-1--2, .objects__gamma-img-1--3, .objects__gamma-img-1--4, .objects__gamma-img-2--1, .objects__gamma-img-2--2, .objects__gamma-img-2--3, .objects__gamma-img-2--4, .objects__gamma-img-3--1, .objects__gamma-img-3--2, .objects__gamma-img-3--3, .objects__gamma-img-3--4').removeClass('active');

			$('.objects__alfa-img-1--1, .objects__alfa-img-1--2, .objects__alfa-img-1--3, .objects__alfa-img-1--4, .objects__alfa-img-2--1, .objects__alfa-img-2--2, .objects__alfa-img-2--3, .objects__alfa-img-2--4, .objects__alfa-img-3--1, .objects__alfa-img-3--2, .objects__alfa-img-3--3, .objects__alfa-img-3--4').removeClass('dasable');
		}
	});

	$('.objects__pagination-object--2').click(function(event) {
		$('.objects__pagination-object--2, .objects__pagination-dot--1').addClass('active');
		$('.objects__beta-img-1--1, .objects__beta-img-2--1, .objects__beta-img-3--1').addClass('active');
		$('.objects__pagination-object--1, .objects__pagination-object--3, .objects__pagination-dot--2, .objects__pagination-dot--3, .objects__pagination-dot--4').removeClass('active');
		$('.objects__beta-img-1--2, .objects__beta-img-2--2, .objects__beta-img-3--2, .objects__beta-img-1--3, .objects__beta-img-2--3, .objects__beta-img-3--3, .objects__beta-img-1--4, .objects__beta-img-2--4, .objects__beta-img-3--4').removeClass('active');
		if ($(".objects__pagination-object--2").hasClass("active")) {
			$('.objects__pagination-dot--1, .objects__pagination-dot--2, .objects__pagination-dot--3, .objects__pagination-dot--4').addClass('beta');
			$('.objects__pagination-dot--1, .objects__pagination-dot--2, .objects__pagination-dot--3, .objects__pagination-dot--4').removeClass('alfa');
			$('.objects__pagination-dot--1, .objects__pagination-dot--2, .objects__pagination-dot--3, .objects__pagination-dot--4').removeClass('gamma');

			$('.objects__beta-img-1--1, .objects__beta-img-1--2, .objects__beta-img-1--3, .objects__beta-img-1--4, .objects__beta-img-2--1, .objects__beta-img-2--2, .objects__beta-img-2--3, .objects__beta-img-2--4, .objects__beta-img-3--1, .objects__beta-img-3--2, .objects__beta-img-3--3, .objects__beta-img-3--4').removeClass('dasable');

			$('.objects__gamma-img-1--1, .objects__gamma-img-1--2, .objects__gamma-img-1--3, .objects__gamma-img-1--4, .objects__gamma-img-2--1, .objects__gamma-img-2--2, .objects__gamma-img-2--3, .objects__gamma-img-2--4, .objects__gamma-img-3--1, .objects__gamma-img-3--2, .objects__gamma-img-3--3, .objects__gamma-img-3--4').addClass('dasable');

			$('.objects__gamma-img-1--1, .objects__gamma-img-1--2, .objects__gamma-img-1--3, .objects__gamma-img-1--4, .objects__gamma-img-2--1, .objects__gamma-img-2--2, .objects__gamma-img-2--3, .objects__gamma-img-2--4, .objects__gamma-img-3--1, .objects__gamma-img-3--2, .objects__gamma-img-3--3, .objects__gamma-img-3--4').removeClass('active');

			$('.objects__alfa-img-1--1, .objects__alfa-img-1--2, .objects__alfa-img-1--3, .objects__alfa-img-1--4, .objects__alfa-img-2--1, .objects__alfa-img-2--2, .objects__alfa-img-2--3, .objects__alfa-img-2--4, .objects__alfa-img-3--1, .objects__alfa-img-3--2, .objects__alfa-img-3--3, .objects__alfa-img-3--4').addClass('dasable');

			$('.objects__alfa-img-1--1, .objects__alfa-img-1--2, .objects__alfa-img-1--3, .objects__alfa-img-1--4, .objects__alfa-img-2--1, .objects__alfa-img-2--2, .objects__alfa-img-2--3, .objects__alfa-img-2--4, .objects__alfa-img-3--1, .objects__alfa-img-3--2, .objects__alfa-img-3--3, .objects__alfa-img-3--4').removeClass('active');
		}
	});

	$('.objects__pagination-object--3').click(function(event) {
		$('.objects__pagination-object--3, .objects__pagination-dot--1').addClass('active');
		$('.objects__gamma-img-1--1, .objects__gamma-img-2--1, .objects__gamma-img-3--1').addClass('active');
		$('.objects__pagination-object--1, .objects__pagination-object--2, .objects__pagination-dot--2, .objects__pagination-dot--3, .objects__pagination-dot--4').removeClass('active');
		$('.objects__gamma-img-1--2, .objects__gamma-img-2--2, .objects__gamma-img-3--2, .objects__gamma-img-1--3, .objects__gamma-img-2--3, .objects__gamma-img-3--3, .objects__gamma-img-1--4, .objects__gamma-img-2--4, .objects__gamma-img-3--4').removeClass('active');

		if ($(".objects__pagination-object--3").hasClass("active")) {
			$('.objects__pagination-dot--1, .objects__pagination-dot--2, .objects__pagination-dot--3, .objects__pagination-dot--4').addClass('gamma');
			$('.objects__pagination-dot--1, .objects__pagination-dot--2, .objects__pagination-dot--3, .objects__pagination-dot--4').removeClass('beta');
			$('.objects__pagination-dot--1, .objects__pagination-dot--2, .objects__pagination-dot--3, .objects__pagination-dot--4').removeClass('alfa');

			$('.objects__beta-img-1--1, .objects__beta-img-1--2, .objects__beta-img-1--3, .objects__beta-img-1--4, .objects__beta-img-2--1, .objects__beta-img-2--2, .objects__beta-img-2--3, .objects__beta-img-2--4, .objects__beta-img-3--1, .objects__beta-img-3--2, .objects__beta-img-3--3, .objects__beta-img-3--4').addClass('dasable');
			$('.objects__beta-img-1--1, .objects__beta-img-1--2, .objects__beta-img-1--3, .objects__beta-img-1--4, .objects__beta-img-2--1, .objects__beta-img-2--2, .objects__beta-img-2--3, .objects__beta-img-2--4, .objects__beta-img-3--1, .objects__beta-img-3--2, .objects__beta-img-3--3, .objects__beta-img-3--4').removeClass('active');

			$('.objects__gamma-img-1--1, .objects__gamma-img-1--2, .objects__gamma-img-1--3, .objects__gamma-img-1--4, .objects__gamma-img-2--1, .objects__gamma-img-2--2, .objects__gamma-img-2--3, .objects__gamma-img-2--4, .objects__gamma-img-3--1, .objects__gamma-img-3--2, .objects__gamma-img-3--3, .objects__gamma-img-3--4').removeClass('dasable');

			$('.objects__alfa-img-1--1, .objects__alfa-img-1--2, .objects__alfa-img-1--3, .objects__alfa-img-1--4, .objects__alfa-img-2--1, .objects__alfa-img-2--2, .objects__alfa-img-2--3, .objects__alfa-img-2--4, .objects__alfa-img-3--1, .objects__alfa-img-3--2, .objects__alfa-img-3--3, .objects__alfa-img-3--4').addClass('dasable');
			$('.objects__alfa-img-1--1, .objects__alfa-img-1--2, .objects__alfa-img-1--3, .objects__alfa-img-1--4, .objects__alfa-img-2--1, .objects__alfa-img-2--2, .objects__alfa-img-2--3, .objects__alfa-img-2--4, .objects__alfa-img-3--1, .objects__alfa-img-3--2, .objects__alfa-img-3--3, .objects__alfa-img-3--4').removeClass('active');
		}
	});

	$('.objects__pagination-dot--1').click(function(event) {
		$('.objects__pagination-dot--1').addClass('active');
		$('.objects__pagination-dot--2, .objects__pagination-dot--3, .objects__pagination-dot--4').removeClass('active');
		if ($(".objects__pagination-dot--1").hasClass("alfa")) {

			$('.objects__alfa-img-1--1, .objects__alfa-img-2--1, .objects__alfa-img-3--1').addClass('active');
			$('.objects__alfa-img-1--2, .objects__alfa-img-2--2, .objects__alfa-img-3--2, .objects__alfa-img-1--3, .objects__alfa-img-2--3, .objects__alfa-img-3--3, .objects__alfa-img-1--4, .objects__alfa-img-2--4, .objects__alfa-img-3--4').removeClass('active');

			$('.objects__beta-img-1--1, .objects__beta-img-1--2, .objects__beta-img-1--3, .objects__beta-img-1--4, .objects__beta-img-2--1, .objects__beta-img-2--2, .objects__beta-img-2--3, .objects__beta-img-2--4, .objects__beta-img-3--1, .objects__beta-img-3--2, .objects__beta-img-3--3, .objects__beta-img-3--4').removeClass('active');

			$('.objects__gamma-img-1--1, .objects__gamma-img-1--2, .objects__gamma-img-1--3, .objects__gamma-img-1--4, .objects__gamma-img-2--1, .objects__gamma-img-2--2, .objects__gamma-img-2--3, .objects__gamma-img-2--4, .objects__gamma-img-3--1, .objects__gamma-img-3--2, .objects__gamma-img-3--3, .objects__gamma-img-3--4').removeClass('active');
		}

		if ($(".objects__pagination-dot--1").hasClass("beta")) {
			$('.objects__beta-img-1--1, .objects__beta-img-2--1, .objects__beta-img-3--1').addClass('active');
			$('.objects__beta-img-1--2, .objects__beta-img-2--2, .objects__beta-img-3--2, .objects__beta-img-1--3, .objects__beta-img-2--3, .objects__beta-img-3--3, .objects__beta-img-1--4, .objects__beta-img-2--4, .objects__beta-img-3--4').removeClass('active');

			$('.objects__alfa-img-1--1, .objects__alfa-img-1--2, .objects__alfa-img-1--3, .objects__alfa-img-1--4, .objects__alfa-img-2--1, .objects__alfa-img-2--2, .objects__alfa-img-2--3, .objects__alfa-img-2--4, .objects__alfa-img-3--1, .objects__alfa-img-3--2, .objects__alfa-img-3--3, .objects__alfa-img-3--4').removeClass('active');

			$('.objects__gamma-img-1--1, .objects__gamma-img-1--2, .objects__gamma-img-1--3, .objects__gamma-img-1--4, .objects__gamma-img-2--1, .objects__gamma-img-2--2, .objects__gamma-img-2--3, .objects__gamma-img-2--4, .objects__gamma-img-3--1, .objects__gamma-img-3--2, .objects__gamma-img-3--3, .objects__gamma-img-3--4').removeClass('active');
		}
		if ($(".objects__pagination-dot--1").hasClass("gamma")) {

			$('.objects__gamma-img-1--1, .objects__gamma-img-2--1, .objects__gamma-img-3--1').addClass('active');
			$('.objects__gamma-img-1--2, .objects__gamma-img-2--2, .objects__gamma-img-3--2, .objects__gamma-img-1--3, .objects__gamma-img-2--3, .objects__gamma-img-3--3, .objects__gamma-img-1--4, .objects__gamma-img-2--4, .objects__gamma-img-3--4').removeClass('active');

			$('.objects__alfa-img-1--1, .objects__alfa-img-1--2, .objects__alfa-img-1--3, .objects__alfa-img-1--4, .objects__alfa-img-2--1, .objects__alfa-img-2--2, .objects__alfa-img-2--3, .objects__alfa-img-2--4, .objects__alfa-img-3--1, .objects__alfa-img-3--2, .objects__alfa-img-3--3, .objects__alfa-img-3--4').removeClass('active');

			$('.objects__beta-img-1--1, .objects__beta-img-1--2, .objects__beta-img-1--3, .objects__beta-img-1--4, .objects__beta-img-2--1, .objects__beta-img-2--2, .objects__beta-img-2--3, .objects__beta-img-2--4, .objects__beta-img-3--1, .objects__beta-img-3--2, .objects__beta-img-3--3, .objects__beta-img-3--4').removeClass('active');
		}
	});

	$('.objects__pagination-dot--2').click(function(event) {
		$('.objects__pagination-dot--2').addClass('active');
		$('.objects__pagination-dot--1, .objects__pagination-dot--3, .objects__pagination-dot--4').removeClass('active');
			if ($(".objects__pagination-dot--2").hasClass("alfa")) {

				$('.objects__alfa-img-1--2, .objects__alfa-img-2--2, .objects__alfa-img-3--2').addClass('active');
				$('.objects__alfa-img-1--1, .objects__alfa-img-2--1, .objects__alfa-img-3--1, .objects__alfa-img-1--3, .objects__alfa-img-2--3, .objects__alfa-img-3--3, .objects__alfa-img-1--4, .objects__alfa-img-2--4, .objects__alfa-img-3--4').removeClass('active');

				$('.objects__beta-img-1--1, .objects__beta-img-1--2, .objects__beta-img-1--3, .objects__beta-img-1--4, .objects__beta-img-2--1, .objects__beta-img-2--2, .objects__beta-img-2--3, .objects__beta-img-2--4, .objects__beta-img-3--1, .objects__beta-img-3--2, .objects__beta-img-3--3, .objects__beta-img-3--4').removeClass('active');

				$('.objects__gamma-img-1--1, .objects__gamma-img-1--2, .objects__gamma-img-1--3, .objects__gamma-img-1--4, .objects__gamma-img-2--1, .objects__gamma-img-2--2, .objects__gamma-img-2--3, .objects__gamma-img-2--4, .objects__gamma-img-3--1, .objects__gamma-img-3--2, .objects__gamma-img-3--3, .objects__gamma-img-3--4').removeClass('active');
		}

			if ($(".objects__pagination-dot--2").hasClass("beta")) {

				$('.objects__beta-img-1--2, .objects__beta-img-2--2, .objects__beta-img-3--2').addClass('active');
				$('.objects__beta-img-1--1, .objects__beta-img-2--1, .objects__beta-img-3--1, .objects__beta-img-1--3, .objects__beta-img-2--3, .objects__beta-img-3--3, .objects__beta-img-1--4, .objects__beta-img-2--4, .objects__beta-img-3--4').removeClass('active');

				$('.objects__alfa-img-1--1, .objects__alfa-img-1--2, .objects__alfa-img-1--3, .objects__alfa-img-1--4, .objects__alfa-img-2--1, .objects__alfa-img-2--2, .objects__alfa-img-2--3, .objects__alfa-img-2--4, .objects__alfa-img-3--1, .objects__alfa-img-3--2, .objects__alfa-img-3--3, .objects__alfa-img-3--4').removeClass('active');

				$('.objects__gamma-img-1--1, .objects__gamma-img-1--2, .objects__gamma-img-1--3, .objects__gamma-img-1--4, .objects__gamma-img-2--1, .objects__gamma-img-2--2, .objects__gamma-img-2--3, .objects__gamma-img-2--4, .objects__gamma-img-3--1, .objects__gamma-img-3--2, .objects__gamma-img-3--3, .objects__gamma-img-3--4').removeClass('active');
		}
		if ($(".objects__pagination-dot--2").hasClass("gamma")) {

			$('.objects__gamma-img-1--2, .objects__gamma-img-2--2, .objects__gamma-img-3--2').addClass('active');
			$('.objects__gamma-img-1--1, .objects__gamma-img-2--1, .objects__gamma-img-3--1, .objects__gamma-img-1--3, .objects__gamma-img-2--3, .objects__gamma-img-3--3, .objects__gamma-img-1--4, .objects__gamma-img-2--4, .objects__gamma-img-3--4').removeClass('active');

			$('.objects__alfa-img-1--1, .objects__alfa-img-1--2, .objects__alfa-img-1--3, .objects__alfa-img-1--4, .objects__alfa-img-2--1, .objects__alfa-img-2--2, .objects__alfa-img-2--3, .objects__alfa-img-2--4, .objects__alfa-img-3--1, .objects__alfa-img-3--2, .objects__alfa-img-3--3, .objects__alfa-img-3--4').removeClass('active');

			$('.objects__beta-img-1--1, .objects__beta-img-1--2, .objects__beta-img-1--3, .objects__beta-img-1--4, .objects__beta-img-2--1, .objects__beta-img-2--2, .objects__beta-img-2--3, .objects__beta-img-2--4, .objects__beta-img-3--1, .objects__beta-img-3--2, .objects__beta-img-3--3, .objects__beta-img-3--4').removeClass('active');
		}
	});

	$('.objects__pagination-dot--3').click(function(event) {
		$('.objects__pagination-dot--3').addClass('active');

		if ($(".objects__pagination-dot--3").hasClass("alfa")) {

			$('.objects__alfa-img-1--3, .objects__alfa-img-2--3, .objects__alfa-img-3--3').addClass('active');
			$('.objects__alfa-img-1--1, .objects__alfa-img-2--1, .objects__alfa-img-3--1, .objects__alfa-img-1--2, .objects__alfa-img-2--2, .objects__alfa-img-3--2, .objects__alfa-img-1--4, .objects__alfa-img-2--4, .objects__alfa-img-3--4').removeClass('active');

			$('.objects__beta-img-1--1, .objects__beta-img-1--2, .objects__beta-img-1--3, .objects__beta-img-1--4, .objects__beta-img-2--1, .objects__beta-img-2--2, .objects__beta-img-2--3, .objects__beta-img-2--4, .objects__beta-img-3--1, .objects__beta-img-3--2, .objects__beta-img-3--3, .objects__beta-img-3--4').removeClass('active');

			$('.objects__gamma-img-1--1, .objects__gamma-img-1--2, .objects__gamma-img-1--3, .objects__gamma-img-1--4, .objects__gamma-img-2--1, .objects__gamma-img-2--2, .objects__gamma-img-2--3, .objects__gamma-img-2--4, .objects__gamma-img-3--1, .objects__gamma-img-3--2, .objects__gamma-img-3--3, .objects__gamma-img-3--4').removeClass('active');
		}
		if ($(".objects__pagination-dot--3").hasClass("beta")) {

			$('.objects__beta-img-1--3, .objects__beta-img-2--3, .objects__beta-img-3--3').addClass('active');
			$('.objects__beta-img-1--1, .objects__beta-img-2--1, .objects__beta-img-3--1, .objects__beta-img-1--2, .objects__beta-img-2--2, .objects__beta-img-3--2, .objects__beta-img-1--4, .objects__beta-img-2--4, .objects__beta-img-3--4').removeClass('active');

			$('.objects__alfa-img-1--1, .objects__alfa-img-1--2, .objects__alfa-img-1--3, .objects__alfa-img-1--4, .objects__alfa-img-2--1, .objects__alfa-img-2--2, .objects__alfa-img-2--3, .objects__alfa-img-2--4, .objects__alfa-img-3--1, .objects__alfa-img-3--2, .objects__alfa-img-3--3, .objects__alfa-img-3--4').removeClass('active');

			$('.objects__gamma-img-1--1, .objects__gamma-img-1--2, .objects__gamma-img-1--3, .objects__gamma-img-1--4, .objects__gamma-img-2--1, .objects__gamma-img-2--2, .objects__gamma-img-2--3, .objects__gamma-img-2--4, .objects__gamma-img-3--1, .objects__gamma-img-3--2, .objects__gamma-img-3--3, .objects__gamma-img-3--4').removeClass('active');
		}
		if ($(".objects__pagination-dot--3").hasClass("gamma")) {

			$('.objects__gamma-img-1--3, .objects__gamma-img-2--3, .objects__gamma-img-3--3').addClass('active');
			$('.objects__gamma-img-1--1, .objects__gamma-img-2--1, .objects__gamma-img-3--1, .objects__gamma-img-1--2, .objects__gamma-img-2--2, .objects__gamma-img-3--2, .objects__gamma-img-1--4, .objects__gamma-img-2--4, .objects__gamma-img-3--4').removeClass('active');

			$('.objects__alfa-img-1--1, .objects__alfa-img-1--2, .objects__alfa-img-1--3, .objects__alfa-img-1--4, .objects__alfa-img-2--1, .objects__alfa-img-2--2, .objects__alfa-img-2--3, .objects__alfa-img-2--4, .objects__alfa-img-3--1, .objects__alfa-img-3--2, .objects__alfa-img-3--3, .objects__alfa-img-3--4').removeClass('active');

			$('.objects__beta-img-1--1, .objects__beta-img-1--2, .objects__beta-img-1--3, .objects__beta-img-1--4, .objects__beta-img-2--1, .objects__beta-img-2--2, .objects__beta-img-2--3, .objects__beta-img-2--4, .objects__beta-img-3--1, .objects__beta-img-3--2, .objects__beta-img-3--3, .objects__beta-img-3--4').removeClass('active');
		}

		$('.objects__pagination-dot--1, .objects__pagination-dot--2, .objects__pagination-dot--4').removeClass('active');
	});

	$('.objects__pagination-dot--4').click(function(event) {
		$('.objects__pagination-dot--4').addClass('active');

		if ($(".objects__pagination-dot--4").hasClass("alfa")) {

			$('.objects__alfa-img-1--4, .objects__alfa-img-2--4, .objects__alfa-img-3--4').addClass('active');
			$('.objects__alfa-img-1--1, .objects__alfa-img-2--1, .objects__alfa-img-3--1, .objects__alfa-img-1--2, .objects__alfa-img-2--2, .objects__alfa-img-3--2, .objects__alfa-img-1--3, .objects__alfa-img-2--3, .objects__alfa-img-3--3').removeClass('active');

			$('.objects__beta-img-1--1, .objects__beta-img-1--2, .objects__beta-img-1--3, .objects__beta-img-1--4, .objects__beta-img-2--1, .objects__beta-img-2--2, .objects__beta-img-2--3, .objects__beta-img-2--4, .objects__beta-img-3--1, .objects__beta-img-3--2, .objects__beta-img-3--3, .objects__beta-img-3--4').removeClass('active');

			$('.objects__gamma-img-1--1, .objects__gamma-img-1--2, .objects__gamma-img-1--3, .objects__gamma-img-1--4, .objects__gamma-img-2--1, .objects__gamma-img-2--2, .objects__gamma-img-2--3, .objects__gamma-img-2--4, .objects__gamma-img-3--1, .objects__gamma-img-3--2, .objects__gamma-img-3--3, .objects__gamma-img-3--4').removeClass('active');
		}

		if ($(".objects__pagination-dot--4").hasClass("beta")) {

			$('.objects__beta-img-1--4, .objects__beta-img-2--4, .objects__beta-img-3--4').addClass('active');
			$('.objects__beta-img-1--1, .objects__beta-img-2--1, .objects__beta-img-3--1, .objects__beta-img-1--2, .objects__beta-img-2--2, .objects__beta-img-3--2, .objects__beta-img-1--3, .objects__beta-img-2--3, .objects__beta-img-3--3').removeClass('active');

			$('.objects__alfa-img-1--1, .objects__alfa-img-1--2, .objects__alfa-img-1--3, .objects__alfa-img-1--4, .objects__alfa-img-2--1, .objects__alfa-img-2--2, .objects__alfa-img-2--3, .objects__alfa-img-2--4, .objects__alfa-img-3--1, .objects__alfa-img-3--2, .objects__alfa-img-3--3, .objects__alfa-img-3--4').removeClass('active');

			$('.objects__gamma-img-1--1, .objects__gamma-img-1--2, .objects__gamma-img-1--3, .objects__gamma-img-1--4, .objects__gamma-img-2--1, .objects__gamma-img-2--2, .objects__gamma-img-2--3, .objects__gamma-img-2--4, .objects__gamma-img-3--1, .objects__gamma-img-3--2, .objects__gamma-img-3--3, .objects__gamma-img-3--4').removeClass('active');
		}
		if ($(".objects__pagination-dot--4").hasClass("gamma")) {

			$('.objects__gamma-img-1--4, .objects__gamma-img-2--4, .objects__gamma-img-3--4').addClass('active');
			$('.objects__gamma-img-1--1, .objects__gamma-img-2--1, .objects__gamma-img-3--1, .objects__gamma-img-1--2, .objects__gamma-img-2--2, .objects__gamma-img-3--2, .objects__gamma-img-1--3, .objects__gamma-img-2--3, .objects__gamma-img-3--3').removeClass('active');

			$('.objects__alfa-img-1--1, .objects__alfa-img-1--2, .objects__alfa-img-1--3, .objects__alfa-img-1--4, .objects__alfa-img-2--1, .objects__alfa-img-2--2, .objects__alfa-img-2--3, .objects__alfa-img-2--4, .objects__alfa-img-3--1, .objects__alfa-img-3--2, .objects__alfa-img-3--3, .objects__alfa-img-3--4').removeClass('active');

			$('.objects__beta-img-1--1, .objects__beta-img-1--2, .objects__beta-img-1--3, .objects__beta-img-1--4, .objects__beta-img-2--1, .objects__beta-img-2--2, .objects__beta-img-2--3, .objects__beta-img-2--4, .objects__beta-img-3--1, .objects__beta-img-3--2, .objects__beta-img-3--3, .objects__beta-img-3--4').removeClass('active');
		}

		$('.objects__pagination-dot--1, .objects__pagination-dot--2, .objects__pagination-dot--3').removeClass('active');
	});
//end-galary-scene
// start-service-scene
	$('.service__item--1').click(function(event) {
		$('.service__item--1, .service__discription--1, .service__discription__title--1, .service__discription-decore--1, .service__discription-text--1').addClass('active');

		$('.service__discription--2, .service__discription--3').addClass('disable');
		$('.service__discription--1').removeClass('disable');

		$('.service__item--2, .service__item--3, .service__discription--2, .service__discription__title--2, .service__discription-decore--2, .service__discription-text--2, .service__discription--3, .service__discription__title--3, .service__discription-decore--3, service__discription-text--3').removeClass('active');
	});

	$('.service__item--2').click(function(event) {
		$('.service__item--2, .service__discription--2, .service__discription__title--2, .service__discription-decore--2, .service__discription-text--2').addClass('active');

		$('.service__discription--1, .service__discription--3').addClass('disable');
		$('.service__discription--2').removeClass('disable');

		$('.service__item--1, .service__item--3, .service__discription--1, .service__discription__title--1, .service__discription-decore--1, .service__discription-text--1, .service__discription--3, .service__discription__title--3, .service__discription-decore--3, .service__discription-text--3').removeClass('active');
	});

	$('.service__item--3').click(function(event) {
		$('.service__item--3, .service__discription--3, .service__discription__title--3, .service__discription-decore--3, .service__discription-text--3').addClass('active');

		$('.service__discription--1, .service__discription--2').addClass('disable');
		$('.service__discription--3').removeClass('disable');

		$('.service__item--1, .service__item--2, .service__discription--1, .service__discription__title--1, .service__discription-decore--1, .service__discription-text--1, .service__discription--2, .service__discription__title--2, .service__discription-decore--2, .service__discription-text--2').removeClass('active');
	});
// end-service-scene
// start-partners-scene
		// initScrollMagic
	var controller = new ScrollMagic.Controller();
	// loop each progect element
	$('.partners__card').each(function(){
			// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this,
			duration: '100%',
			triggerHook: 0.9
		})
		.setClassToggle(this, 'active') //add class to progect
		// .addIndicators({
		// 	name: 'anim scene',
		// 	colorTrigger: 'black',
		// 	colorStart: 'red',
		// 	colorEnd: 'green'
		// })
		.addTo(controller);

	});
// end-partners-scene
// start-innovation-scene
	$('.innovation__accordion-item--1').click(function(event) {
		$('.innovation__accordion-item--1, .innovation__accordion-text--1, .innovation__accordion-title--1').addClass('active');

		$('.innovation__accordion-item--2, .innovation__accordion-text--2, .innovation__accordion-item--3, .innovation__accordion-text--3, .innovation__accordion-item--4, .innovation__accordion-text--4, .innovation__accordion-title--2, .innovation__accordion-title--3, .innovation__accordion-title--4').removeClass('active');

		$('.innovation__quote-top--1, .innovation__quote-bottom--1').addClass('move');
		$('.innovation__quote-top--1, .innovation__quote-bottom--1').addClass('rotate');

		$('.innovation__quote-top--2, .innovation__quote-top--3, .innovation__quote-top--4, .innovation__quote-bottom--2, .innovation__quote-bottom--3, .innovation__quote-bottom--4').removeClass('move');
		$('.innovation__quote-top--2, .innovation__quote-top--3, .innovation__quote-top--4, .innovation__quote-bottom--2, .innovation__quote-bottom--3, .innovation__quote-bottom--4').removeClass('rotate');
	});
	$('.innovation__accordion-item--2').click(function(event) {
		$('.innovation__accordion-item--2, .innovation__accordion-text--2, .innovation__accordion-title--2').addClass('active');

		$('.innovation__accordion-item--1, .innovation__accordion-text--1, .innovation__accordion-item--3, .innovation__accordion-text--3, .innovation__accordion-item--4, .innovation__accordion-text--4, .innovation__accordion-title--1, .innovation__accordion-title--3, .innovation__accordion-title--4').removeClass('active');

		$('.innovation__quote-top--2, .innovation__quote-bottom--2').addClass('move');
		$('.innovation__quote-top--2, .innovation__quote-bottom--2').addClass('rotate');

		$('.innovation__quote-top--1, .innovation__quote-top--3, .innovation__quote-top--4, .innovation__quote-bottom--1, .innovation__quote-bottom--3, .innovation__quote-bottom--4').removeClass('move');
		$('.innovation__quote-top--1, .innovation__quote-top--3, .innovation__quote-top--4, .innovation__quote-bottom--1, .innovation__quote-bottom--3, .innovation__quote-bottom--4').removeClass('rotate');
	});
	$('.innovation__accordion-item--3').click(function(event) {
		$('.innovation__accordion-item--3, .innovation__accordion-text--3, .innovation__accordion-title--3').addClass('active');

		$('.innovation__accordion-item--1, .innovation__accordion-text--1, .innovation__accordion-item--2, .innovation__accordion-text--2, .innovation__accordion-item--4, .innovation__accordion-text--4, .innovation__accordion-title--1, .innovation__accordion-title--2, .innovation__accordion-title--4').removeClass('active');

		$('.innovation__quote-top--3, .innovation__quote-bottom--3').addClass('move');
		$('.innovation__quote-top--3, .innovation__quote-bottom--3').addClass('rotate');

		$('.innovation__quote-top--1, .innovation__quote-top--2, .innovation__quote-top--4, .innovation__quote-bottom--1, .innovation__quote-bottom--2, .innovation__quote-bottom--4').removeClass('move');
		$('.innovation__quote-top--1, .innovation__quote-top--2, .innovation__quote-top--4, .innovation__quote-bottom--1, .innovation__quote-bottom--2, .innovation__quote-bottom--4').removeClass('rotate');
	});
	$('.innovation__accordion-item--4').click(function(event) {
		$('.innovation__accordion-item--4, .innovation__accordion-text--4, .innovation__accordion-title--4').addClass('active');

		$('.innovation__accordion-item--1, .innovation__accordion-text--1, .innovation__accordion-item--2, .innovation__accordion-text--2, .innovation__accordion-item--3, .innovation__accordion-text--3, .innovation__accordion-title--1, .innovation__accordion-title--2, .innovation__accordion-title--3').removeClass('active');

		$('.innovation__quote-top--4, .innovation__quote-bottom--4').addClass('move');
		$('.innovation__quote-top--4, .innovation__quote-bottom--4').addClass('rotate');

		$('.innovation__quote-top--1, .innovation__quote-top--2, .innovation__quote-top--3, .innovation__quote-bottom--1, .innovation__quote-bottom--2, .innovation__quote-bottom--3').removeClass('move');
		$('.innovation__quote-top--1, .innovation__quote-top--2, .innovation__quote-top--3, .innovation__quote-bottom--1, .innovation__quote-bottom--2, .innovation__quote-bottom--3').removeClass('rotate');
	});

// end-innovation-scene


});
