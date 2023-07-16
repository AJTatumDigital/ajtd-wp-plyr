<?php
/**
 * RSS2 Feed Template for displaying RSS2 Posts feed.
 *
 * @package WordPress
 */

header( 'Content-Type: ' . feed_content_type( 'rss2' ) . '; charset=' . get_option( 'blog_charset' ), true );
$more = 1;

echo '<?xml version="1.0" encoding="' . get_option( 'blog_charset' ) . '"?' . '>';

/**
 * Fires between the xml and rss tags in a feed.
 *
 * @since 4.0.0
 *
 * @param string $context Type of feed. Possible values include 'rss2', 'rss2-comments',
 *                        'rdf', 'atom', and 'atom-comments'.
 */
do_action( 'rss_tag_pre', 'rss2' );
?>
<rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
	<?php
	/**
	 * Fires at the end of the RSS root to add namespaces.
	 *
	 * @since 2.0.0
	 */
	do_action( 'rss2_ns' );
	?>
>

<channel>
	<title><?php wp_title_rss(); ?></title>
	<atom:link href="<?php self_link(); ?>" rel="self" type="application/rss+xml" />
	<link><?php bloginfo_rss( 'url' ); ?></link>
	<description><?php bloginfo_rss( 'description' ); ?></description>
	<lastBuildDate><?php echo get_feed_build_date( 'r' ); ?></lastBuildDate>
	<language><?php bloginfo_rss( 'language' ); ?></language>
	<sy:updatePeriod>
	<?php
		$duration = 'hourly';

		/**
		 * Filters how often to update the RSS feed.
		 *
		 * @since 2.1.0
		 *
		 * @param string $duration The update period. Accepts 'hourly', 'daily', 'weekly', 'monthly',
		 *                         'yearly'. Default 'hourly'.
		 */
		echo apply_filters( 'rss_update_period', $duration );
	?>
	</sy:updatePeriod>
	<sy:updateFrequency>
	<?php
		$frequency = '1';

		/**
		 * Filters the RSS update frequency.
		 *
		 * @since 2.1.0
		 *
		 * @param string $frequency An integer passed as a string representing the frequency
		 *                          of RSS updates within the update period. Default '1'.
		 */
		echo apply_filters( 'rss_update_frequency', $frequency );
	?>
	</sy:updateFrequency>
	<?php
	/**
	 * Fires at the end of the RSS2 Feed Header.
	 *
	 * @since 2.0.0
	 */
	//do_action( 'rss2_head' );
	?>
	<image>
	<url>https://ajtatumdigital.com/wp-content/uploads/assets/logosv2/symbol/abstract/aj-tatum-digital-symbol-abstract-rounded@3x.png</url>
	<title>AJ Tatum Digital</title>
	<link>https://ajtatumdigital.com</link>
	<width>579</width>
	<height>579</height>
	</image>
	<?php
	while ( have_posts() ) :
		the_post();
		$item_url = get_permalink() . '?utm_source=devto&utm_medium=website&utm_campaign=cross_post';
		?>
	<item>
		
		<title><?php the_title_rss(); ?></title>
		<link><?php echo $item_url ?></link>
		<?php if ( get_comments_number() || comments_open() ) : ?>
			<comments><?php comments_link_feed(); ?></comments>
		<?php endif;
			$post_id = get_the_ID();
			$content = '';

			$args = [
    			'storage_type' => 'custom_table',
    			'table'        => 'wp_post_markdown',
			];
			$devto_markdown = rwmb_meta('devto_markdown', $args, $post_id);
			$devto_tags = rwmb_meta('devto_tags', $args, $post_id);
			$devto_cover_image = rwmb_meta('devto_cover_image', $args, $post_id);

			$content .= '"---
title: "'. get_the_title() .'"
date: "'.echo mysql2date( 'D, d M Y H:i:s +0000', get_post_time( 'Y-m-d H:i:s', true ), false ).'"
published: false
description: "'.get_the_excerpt().'"
tags: '.$devto_tags.'
canonical_url: "'.get_the_permalink().'"
cover_image: "'.$devto_cover_image.'"
---
'.$devto_markdown.'
"';

			
			$content .= '<hr /><p>The post <b><i>"<a href="'. $item_url. '" target="_blank" rel="noopener">'.get_the_title().'</a>"</i></b> appeared first on <b><i><a href="https://ajtatumdigital.com/blog/?utm_source=devto&utm_medium=website&utm_campaign=cross_post" target="_blank" rel="noopener">AJ Tatum Digital\'s Blog.</a></i></b></p>';
			
	?>

		<dc:creator><![CDATA[<?php the_author(); ?>]]></dc:creator>
		<pubDate><?php echo mysql2date( 'D, d M Y H:i:s +0000', get_post_time( 'Y-m-d H:i:s', true ), false ); ?></pubDate>
		<?php the_category_rss( 'rss2' ); ?>
		<guid isPermaLink="false"><?php the_guid(); ?></guid>
		<description><![CDATA[<?php echo $content ?>]]></description>
		<?php if ( get_comments_number() || comments_open() ) : ?>
			<wfw:commentRss><?php echo esc_url( get_post_comments_feed_link( null, 'rss2' ) ); ?></wfw:commentRss>
			<slash:comments><?php echo get_comments_number(); ?></slash:comments>
		<?php endif; ?>

		<?php rss_enclosure(); ?>

		<?php
		/**
		 * Fires at the end of each RSS2 feed item.
		 *
		 * @since 2.0.0
		 */
		do_action( 'rss2_item' );
		?>
	</item>
	<?php endwhile; ?>
</channel>
</rss>
