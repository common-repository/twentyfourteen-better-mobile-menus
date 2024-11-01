<?php

/*
Plugin Name: Twentyfourteen Better Mobile Menus
Plugin URI: http://www.stadtkreation.de/wordpress.php?lang=en
Description: If you use Twentyfourteen theme, use both menu locations, and the secondary (left) menu is your main menu, install this plugin.
Version: 0.3.6
Author: STADTKREATION
Text Domain: twentyfourteen-bettermobilemenus
Domain Path: /languages/
Author URI: http://www.stadtkreation.de/portrait.php?lang=en
*/

include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

// plugin description for translation
__('If you use Twentyfourteen theme, use both menu locations, and the secondary (left) menu is your main menu, install this plugin.','twentyfourteen-bettermobilemenus');

// plugin textdomain definition
function twentyfourteen_bettermobilemenus_textdomain() {
	$plugin_dir = basename(dirname(__FILE__));
	load_plugin_textdomain( 'twentyfourteen-bettermobilemenus', false, $plugin_dir.'/languages/' );
}
add_action('plugins_loaded', 'twentyfourteen_bettermobilemenus_textdomain');

// load easytaesers header scripts and styles
function twentyfourteen_bettermobilemenus_scripts() {
	wp_enqueue_style( 'dashicons' );
	wp_enqueue_style('twentyfourteen-bettermobilemenus-style',plugins_url('', __FILE__).'/twentyfourteen-bettermobilemenus.css',array('twentyfourteen-style'));
	wp_enqueue_script('twentyfourteen-bettermobilemenus-script',plugins_url('', __FILE__).'/twentyfourteen-bettermobilemenus.js',array(),'20150924',true);
}
add_action('wp_enqueue_scripts', 'twentyfourteen_bettermobilemenus_scripts');

// plugin direct script
function twentyfourteen_bettermobilemenus_directscripts() {
	echo '<script type="text/javascript"> var twentyfourteenBetterMobileMenusTexts = {menuLevels:"'.__('Menu levels','twentyfourteen-bettermobilemenus').'"}; </script>';
	
	// color settings when Fourteen Colors plugin active
	if(is_plugin_active('fourteen-colors/fourteen-colors.php')) {
		$contrast_color = get_theme_mod( 'contrast_color', '#000000' );
		$accent_color = get_theme_mod( 'accent_color', '#24890d' );
		$accent_mid = fourteen_colors_adjust_color( $accent_color, 29 );
		echo '<style type="text/css">
			@media screen and (min-width: 783px) {
				.secondary-navigation ul ul a,
				.secondary-navigation li:hover > a,
				.secondary-navigation li.focus > a {
					color: #fff;
				}';
			if ( fourteen_colors_contrast_ratio( $accent_color, '#fff' ) < 4.5 && fourteen_colors_contrast_ratio( $accent_color, '#fff' ) < fourteen_colors_contrast_ratio( 		$accent_color, '#2b2b2b' ) ) {
			echo 	'.secondary-navigation ul ul a,
					.secondary-navigation li:hover > a,
					.secondary-navigation li.focus > a,
					.secondary-navigation ul ul {
						color: #2b2b2b;
					}';
				}
			echo '	.secondary-navigation li:hover > a,
					.secondary-navigation li.focus > a,
					.secondary-navigation ul ul {
						background-color: ' . $accent_color . ';
					}
					.secondary-navigation ul ul a:hover,
					.secondary-navigation ul ul li.focus > a {
						background-color: ' . $accent_mid . ';
					}
				}
			} </style>';
	}
}
add_action('wp_head', 'twentyfourteen_bettermobilemenus_directscripts');