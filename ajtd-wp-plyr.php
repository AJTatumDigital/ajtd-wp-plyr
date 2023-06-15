<?php
/**
 * Plugin Name: AJTD Plyr Video
 * Plugin URI:  https://ajtatumgigital.com
 * Author:      AJ Tatum
 * Author URI:  Plugin Author Link
 * Description: https://ajtatumgigital.com
 * Version:     0.1.36
 * License:     GPL-2.0+
 * License URL: http://www.gnu.org/licenses/gpl-2.0.txt
 * text-domain: ajtd
 */

defined('ABSPATH') || exit;

/**
 * Define constants.
 */
define('AJTD_PLYR_PLUGIN_URL', plugin_dir_url(__FILE__));
define('AJTD_PLYR_PLUGIN_FILE', __FILE__);

function ajtd_plyr_init()
{
    add_action('init', 'register_ajtd_plyr_scripts_styles');
    add_action('wp_footer', 'ajtd_plyr_scripts_styles');

    function register_ajtd_plyr_scripts_styles()
    {
        wp_register_style('ajtd-plyr-css', AJTD_PLYR_PLUGIN_URL . 'public/css/ajtd-plyr.min.css', array(), '1.0.0', 'all');
        wp_register_style('plyr-css', AJTD_PLYR_PLUGIN_URL . 'public/plyr-3.7.8/plyr.min.css', array(), '3.7.8', 'all');
        wp_register_script('plyr', AJTD_PLYR_PLUGIN_URL . 'public/plyr-3.7.8/plyr.min.js', array(), '3.7.8', true);
        wp_register_script('hls', AJTD_PLYR_PLUGIN_URL . 'public/hls-1.4.5/hls.min.js', array(), '1.4.5', true);
        wp_register_script('mux-embed', AJTD_PLYR_PLUGIN_URL . 'public/js/mux-embed.min.js', array(), '4.25.1', true);
        wp_register_script('ajtd-plyr-hls', AJTD_PLYR_PLUGIN_URL . 'public/js/ajtd-plyr-hls.min.js', array(), '1.0.10', true);
    }

    function ajtd_plyr_scripts_styles()
    {
        global $add_ajtd_plyr_scripts_styles;

        if (!$add_ajtd_plyr_scripts_styles) {
            return;
        }

        wp_print_styles(array('ajtd-plyr-css', 'plyr-css'));
        wp_print_scripts(array('plyr', 'hls', 'mux-embed', 'ajtd-plyr-hls'));
    }

    add_filter('script_loader_tag', function ($tag, $handle) {

        $ajtd_plyr_scripts = array("plyr", "hls", "ajtd-plyr-hls", "mux-embed");
        if (!in_array($handle, $ajtd_plyr_scripts)) {
            return $tag;
        }

        return str_replace('src', ' defer src', $tag ); // defer the script

    }, 10, 2);

    add_shortcode('ajtd_plyr', 'ajtd_plyr_handler');

    function ajtd_plyr_handler($atts = array(), $content = null)
    {
        global $add_ajtd_plyr_scripts_styles;
        global $post;

        $add_ajtd_plyr_scripts_styles = true;

        extract(shortcode_atts(array(
            'playbackid' => null,
            'videoid' => null,
            'videotitle' => '',
            'previewtime' => null,
			'm3u8' => true,
			'mp4high' => true,
			'mp4medium' => true,
			'mp4low' => true,
			'topic' => '',
			'product' => '',
			'isreview' => false,
			'softwareused' => ''
        ), $atts));

        if (isset($previewtime) && $previewtime != null && $previewtime != '') {
            $previewtime = '?time=' . $previewtime;
        }

		if(!isset($videoid)) {
			$videoid = $playbackid;
		}

        $post_slug = $post->post_name;

        $ajtd_plyr_html = '<div class="video-container">&#10;'
        . '&#09;<video class="plyr-video" preload="metadata" controls crossorigin playsinline data-m3u8="' . $m3u8 . '" data-mp4high="' . $mp4high . '" data-mp4medium="' . $mp4medium . '" data-mp4low="' . $mp4low . '" data-playbackid="' . $playbackid . '" data-videoid="' . $videoid . '"  data-title="' . $videotitle . '" data-storyboard="https://image.mux.com/' . $playbackid . '/storyboard.vtt?format=webp" data-poster="https://image.mux.com/' . $playbackid . '/thumbnail.webp' . $previewtime . '" data-postslug="' . $post_slug . '" data-topic="' . $topic . '" data-product="' . $product . '" data-isreview="' . $isreview . '" data-softwareused="' . $softwareused . '">&#10;'
        . '&#09;&#09;<track label="thumbnails" default kind="metadata" src="https://image.mux.com/' . $playbackid . '/storyboard.vtt?format=webp">&#10;'
        . '&#09;</video>&#10;'
        . '</div>&#10;&#10;';

        return $ajtd_plyr_html;
    }
}

ajtd_plyr_init();
