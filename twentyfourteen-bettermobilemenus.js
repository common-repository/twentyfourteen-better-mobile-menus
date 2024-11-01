/* Twentyfourteen Better Mobile Menus JS by Johannes Bouchain */

var $ = jQuery;

var topmenuContent = '';
var leftmenuContent = '';
var fullMenuContent = '';
var menuLevels = '';
var menuLevelsCount = 1;

// setup menu content storing and menu level selector content
$(document).ready(function(){
	var $ = jQuery;
	
	// storing both menu contents to variable
	topmenuContent = $('.menu-topmenue-container ul').html();
	mainmenuContent = $('.menu-hauptmenue-container ul').html();
	fullMenuContent = mainmenuContent+topmenuContent;
	
	//detecting number of menu levels
	if($('.menu-hauptmenue-container ul li li').length || $('.menu-topmenue-container ul li li').length) menuLevelsCount = 2;
	if($('.menu-hauptmenue-container ul li li li').length || $('.menu-topmenue-container ul li li li').length) menuLevelsCount = 3;
	if($('.menu-hauptmenue-container ul li li li li').length || $('.menu-topmenue-container ul li li li li').length) menuLevelsCount = 4;
	
	// adding menu level selector if menu levels > 1
	if(menuLevelsCount>1) {
		menuLevels = '<div class="menu-levels">'+twentyfourteenBetterMobileMenusTexts.menuLevels+': ';
		var fullMenuLevelButtons = '';
		var selected = '';
		for(var i = 1; i<= menuLevelsCount; i++) {
			selected = '';
			if(i==1) selected = ' selected';
			fullMenuLevelButtons = ' <a class="menu-level'+i+selected+'" href="#">'+i+'</a>';
			menuLevels = menuLevels+fullMenuLevelButtons;
		}
		menuLevels = menuLevels + '</div>';
	}
	
	// manipulate menu contents and styles
	if($(window).width()<783) {
		$('h1.site-title').after(menuLevels);
		$('.menu-levels').hide();
		$('.menu-levels,.menu-levels a').css('color',$('.menu-topmenue-container li a').css('color'));
		$('.menu-topmenue-container > ul.nav-menu').html(fullMenuContent);
		$('.menu-topmenue-container > ul.nav-menu').html(fullMenuContent);
		$('.menu-topmenue-container .menu-levels').css('color',$('.primary-navigation a').css('color')); 
	}
	menuLevelSelector();
	
	// detect menu toggle button click for showing/hiding menu levels selector
	$('button.menu-toggle').click(function(){
		if($('.primary-navigation.toggled-on').length) $('.menu-levels').show();
		else $('.menu-levels').hide();
	});
});

// move all menu structures to toggle menu for small screens
$(window).resize(function(){
	var $ = jQuery;
	
	if($(window).width()<783) {
		$('.menu-topmenue-container > ul.nav-menu').html(fullMenuContent);
		$('.menu-topmenue-container .menu-levels').css('color',$('.primary-navigation a').css('color'));
	}
	else {
		$('.menu-topmenue-container ul').html(topmenuContent);
		$('.menu-levels').hide();
		$('.primary-navigation').removeClass('toggled-on');
		$('.menu-hauptmenue-container ul').html(mainmenuContent);
	}
	menuLevelSelector();
});

// add menu level selector buttons respective to number of menu levels used (max 4)
function menuLevelSelector() {
	var $ = jQuery;
	
	$('.primary-navigation ul.nav-menu li li').addClass('invisible');
	$('a.menu-level1').click(function(e){
		e.preventDefault();
		$(this).blur();
		$('a.menu-level1,a.menu-level2,a.menu-level3').removeClass('selected');
		$(this).addClass('selected');
		$('.primary-navigation ul.nav-menu li li').addClass('invisible');
	});
	$('a.menu-level2').click(function(e){
		e.preventDefault();
		$(this).blur();
		$('a.menu-level1,a.menu-level2,a.menu-level3').removeClass('selected');
		$(this).addClass('selected');
		$('.primary-navigation ul.nav-menu li').removeClass('invisible');
		$('.primary-navigation ul.nav-menu li li li').addClass('invisible');
	});
	$('a.menu-level3').click(function(e){
		e.preventDefault();
		$(this).blur();
		$('a.menu-level1,a.menu-level2,a.menu-level3').removeClass('selected');
		$(this).addClass('selected');
		$('.primary-navigation ul.nav-menu li').removeClass('invisible');
	});
	// to do: remove code redundancies here
}