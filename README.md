# **AJ Tatum Digital Plyr Player with Mux Integration**

This is a custom WordPress Plugin using the open-source video player [Plyr](https://github.com/sampotts/plyr) along with [HLS.js](https://github.com/video-dev/hls.js) and integrating it with [Mux Data](https://docs.mux.com/guides/data).

---

## Files

* **public/plyr-3.7.8** is a release from Plyr's public repository.
* **public/hls-1.4.5** is a release from HLS.js's public repository.
* **js/mux-embed.js** is a local copy from [mux.js](https://src.litix.io/core/4/mux.js).
* **js/ajtd-plyer-hls.js** is where the customization takes place of setting meta data, loading the video files, and setting up Mux Data.
* **css/ajtd-plyer.css** is a customized skin for plyr.
* **ajtd-wp-plyer.php** is a simple PHP class to load the WordPress plugin as a shortcode.
  * The short code can be used multiple times on a page; however, the JavaScript and CSS will only be loaded once, in the footer, per page.

---

## Installation

To install this plugin as is:

1. Clone this project to your local machine and then compress/zip the folder.
2. Go to your WordPress Dashboard
3. Go to Plugins > Add New
4. Click the "Upload Plugin" button and select the .zip file you just created.
5. Click "Install Now"
6. Begin using plugin by calling the short code directly or via [Shortcoder](https://wordpress.org/plugins/shortcoder/) plugin!

---

## Recommendations

While you *could* use the shortcode as a regular shortcode within WordPress, I highly recommend the [Shortcoder](https://wordpress.org/plugins/shortcoder/) plugin and the [Shortcoder Pro](https://www.aakashweb.com/wordpress-plugins/shortcoder/) version is well worth it.

When you create a new shortcode within Shortcoder, it would look something like the following:

`[ajtd_plyr playbackid="%%playbackId%%" videoid="%%videoId:playbackId%%" videotitle="%%videoTitle%%" previewtime="%%previewTime%%" m3u8="%%m3u8:true%%" mp4high="%%mp4high:true%%" mp4medium="%%mp4medium:true%%" mp4low="%%mp4low:true%%" topic="%%topic%%" product="%%product%%" isreview="%%isreview:false%%" softwareused="%%softwareused%%"]`

Obviously, your implementation may vary depending on if you add more parameters, etc.

When you go to use the shortcode with Shortcoder, you'll be prompted to enter in the fields, some of which are optional as they have default values.

![Shortcoder Screenshot](https://raw.githubusercontent.com/AJTatumDigital/ajtd-wp-plyr/master/public/AddNewShortcodeScreenshot.png)

---

## Notes for Script Optimization & Lazy Load Plugins

If you use [Autoptimize](https://wordpress.org/plugins/autoptimize/) or a similar plugin that optimized javascript, it is recommended to excluded these scripts. From my experience, when the scripts are optimized, the storyboard/preview thumbnails do not work as they should.

The scripts to exclude are:

`/wp-content/plugins/ajtd-wp-plyr/public/plyr-3.7.8/plyr.min.js, /wp-content/plugins/ajtd-wp-plyr/public/hls-1.4.5/hls.min.js, /wp-content/plugins/ajtd-wp-plyr/public/js/ajtd-plyr-hls.min.js, /wp-content/plugins/ajtd-wp-plyr/public/js/mux-embed.min.js`

If you use a plugin such as [a3 Lazy Load](https://wordpress.org/plugins/a3-lazy-load/), you can have it enabled for all the settings but under "Lazy Load Videos and iframes" for "Skip Videos Class" enter "plyr-video".

---

## Issues

If you find anything weird with this plugin, please use the GitHub issues tracker.

Please note, we are not responsible for issues with Plyr, HLS.js, or Mux Data. Plese use the appropriate methods of contact for each of those third-parties.

---

## Contributing

This project welcomes and appreciates any contributions made.

There are several ways you can contribute, namely:

* Assist in making this a more generic plugin (renaming the plugin, files, etc).
* Report any bug found.
* Suggest some features or improvements.
* Creating pull requests.

---

## Author

![HLS.js](https://raw.githubusercontent.com/AJTatumDigital/ajtd-wp-plyr/master/public/logos/hls.png)

![Plyr](https://raw.githubusercontent.com/AJTatumDigital/ajtd-wp-plyr/master/public/logos/plyr.png)

[Plyr](https://github.com/sampotts/plyr) is developed by [@sam_potts](https://twitter.com/sam_potts) / [sampotts.me](http://sampotts.me). [HLS.js](https://github.com/video-dev/hls.js) is developed by [video-dev](http://video-dev.org/). [Mux](http://mux.com/) is the video delivery and data integration provider. You can view more integrations on [Mux's Github](https://github.com/muxinc/).

![AJ Tatum Digital](https://raw.githubusercontent.com/AJTatumDigital/ajtd-wp-plyr/master/public/logos/ajtatumdigital.png)

Bridging all these components together and developing this WordPress plugin/short code was done by [AJ Tatum](https://github.com/ajtatum/), founder of [AJ Tatum Digital](https://ajtatumdigital.com/?utm_source=github_organization&utm_medium=social&utm_campaign=sourcecode).

---

## Copyright and License

[The MIT license](LICENSE.md)
