document.addEventListener("DOMContentLoaded", () => {
	if (typeof mux !== "undefined") {
		window.muxPlayerInitTime = mux.utils.now();
	}

	let sources = [];
	let defaultOptions = {};
	const m3u8FileType = "application/x-mpegURL";

	/* const players = Array.from(document.querySelectorAll(".plyr-video")).map(
		(p) => {
			let playbackid = String(p.dataset.playbackid);
			let m3u8 = Boolean(p.dataset.m3u8);
			let mp4high = Boolean(p.dataset.mp4high);
			let mp4medium = Boolean(p.dataset.mp4medium);
			let mp4low = Boolean(p.dataset.m3u8low);

			if(m3u8) {
				sources.push({
					src: `https://stream.mux.com/${playbackid}.m3u8`,
					type: 'application/x-mpegURL'
				  })
			}
			if(mp4high) {
				sources.push({
					src: `https://stream.mux.com/${playbackid}/high.mp4`,
					type: 'video/mp4',
					size: 1080
				  })
			}
			if(mp4medium) {
				sources.push({
					src: `https://stream.mux.com/${playbackid}/medium.mp4`,
					type: 'video/mp4',
					size: 540
				  })
			}
			if(mp4low) {
				sources.push({
					src: `https://stream.mux.com/${playbackid}/low.mp4`,
					type: 'video/mp4',
					size: 360
				  })
			}
			
			defaultOptions = {
				type: "video",
				title: p.dataset.title,
				sources: sources,
				poster: p.dataset.poster,
				controls: [
					"play-large",
					"play",
					"progress",
					"current-time",
					"mute",
					"volume",
					"captions",
					"settings",
					"pip",
					"airplay",
					"fullscreen",
				],
				settings: ["captions", "quality", "speed", "loop"],
				loadSprite: true,
				iconUrl: "https://ajtatumdigital.com/wp-content/ajtd-plyr-3.7.8/plyr.svg",
				storage: { enabled: true, key: "ajtd-plyr" },
				quality: {
					default: 1080,
					options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
				},
				previewThumbnails: { enabled: true, src: p.dataset.storyboard },
			};
			
			return new Plyr(p, defaultOptions)}
	); */

	const videos = document.querySelectorAll(".plyr-video");
	videos.forEach((video) => {
		let videoDuration = 0;
		video.addEventListener("loadedmetadata", function () {
			videoDuration = video.duration;
		});

		let playbackid = String(video.dataset.playbackid);
		let m3u8 = Boolean(video.dataset.m3u8);
		let mp4high = Boolean(video.dataset.mp4high);
		let mp4medium = Boolean(video.dataset.mp4medium);
		let mp4low = Boolean(video.dataset.mp4low);

		if(m3u8) {
			sources.push({
				src: `https://stream.mux.com/${playbackid}.m3u8`,
				type: 'application/x-mpegURL'
			  })
		}
		if(mp4high) {
			sources.push({
				src: `https://stream.mux.com/${playbackid}/high.mp4`,
				type: 'video/mp4',
				size: 1080
			  })
		}
		if(mp4medium) {
			sources.push({
				src: `https://stream.mux.com/${playbackid}/medium.mp4`,
				type: 'video/mp4',
				size: 540
			  })
		}
		if(mp4low) {
			sources.push({
				src: `https://stream.mux.com/${playbackid}/low.mp4`,
				type: 'video/mp4',
				size: 360
			  })
		}
		
		defaultOptions = {
			type: 'video',
			title: video.dataset.title,
			sources: sources,
			poster: video.dataset.poster,
			controls: [
				'play-large', // The large play button in the center
				'play', // Play/pause playback
				'restart', // Restart playback
				'rewind', // Rewind by the seek time (default 10 seconds)
				'fast-forward', // Fast forward by the seek time (default 10 seconds)
				'progress', // The progress bar and scrubber for playback and buffering
				'current-time', // The current time of playback
				'duration', // The full duration of the media
				'mute', // Toggle mute
				'volume', // Volume control
				'captions', // Toggle captions
				'settings', // Settings menu
				'pip', // Picture-in-picture (currently Safari only)
				'airplay', // Airplay (currently Safari only)
				'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
				'fullscreen', // Toggle fullscreen
			  ],
			settings: ['captions', 'quality', 'speed', 'loop'],
			speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
			ratio: '16:9',
			fullscreen: { enabled: true, fallback: true, iosNative: false, container: null },
			tooltips: { controls: true, seek: true },
			keyboard: { focused: true, global: false },
			resetOnEnd: true,
			loadSprite: true,
			iconUrl: 'https://ajtatumdigital.com/wp-content/ajtd-plyr-3.7.8/plyr.svg',
			storage: { enabled: true, key: 'ajtd-plyr' },
			quality: {
				default: 1080,
				options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
			},
			previewThumbnails: { enabled: true, src: `https://image.mux.com/${playbackid}/storyboard.vtt?format=webp` }
		};

		const sourceVideo = defaultOptions.sources[0];
		const source = sourceVideo.src;
		const sourceFileType = sourceVideo.type;

		if (Hls.isSupported() && sourceFileType === m3u8FileType) {
			// For more Hls.js options, see https://github.com/dailymotion/hls.js
			const hls = new Hls();
			hls.loadSource(source);

			// From the m3u8 playlist, hls parses the manifest and returns
			// all available video qualities. This is important, in this approach,
			// we will have one source on the Plyr player.
			hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
				// Transform available levels into an array of integers (height values).
				const availableQualities = hls.levels.map((l) => l.height);
				
				// Add new qualities to option
				defaultOptions.quality = {
					default: availableQualities.slice(-1)[0],
					options: availableQualities,
					// this ensures Plyr to use Hls to update quality level
					forced: true,
					onChange: (e) => updateQuality(e)
				};

				// Initialize here
				const player = new Plyr(video, defaultOptions);
			});
			hls.attachMedia(video);
			window.hls = hls;

			if (typeof mux !== "undefined") {
				mux.monitor(video, {
					debug: false,
					hlsjs: hls,
					Hls: Hls,
					data: {
						env_key: "irob8nmfqd1ni6bpd6bte023b",
						player_software_name: "Plyr",
						player_software_version: "3.7.8",
						player_name: "Plyr",
						player_version: "3.7.8",
						player_init_time: window.muxPlayerInitTime,
						video_id: `${video.dataset.videoid}`,
						video_title: `${video.dataset.title}`,
						video_duration: videoDuration,
						viewer_user_id: `${localStorage.ajs_anonymous_id}`,
						page_type: "watchpage",
						video_stream_type: "on-demand",
						custom_1: `${video.dataset.postslug}`,
						custom_2: `${video.dataset.topic}`,
						custom_3: `${video.dataset.product}`,
						custom_4: `${video.dataset.isreview}`,
						custom_5: `${video.dataset.softwareused}`
					},
				});
			}
		} else {
			// default options with no quality update in case Hls is not supported
			sources = sources.filter(x => x.type != m3u8FileType);
			defaultOptions.sources = sources;

			const player = new Plyr(video, defaultOptions);

			if (typeof mux !== "undefined") {
				mux.monitor(video, {
					debug: false,
					data: {
						env_key: "irob8nmfqd1ni6bpd6bte023b",
						player_software_name: "Plyr",
						player_software_version: "3.7.8",
						player_name: "Plyr",
						player_version: "3.7.8",
						player_init_time: window.muxPlayerInitTime,
						video_id: `${video.dataset.videoid}`,
						video_title: `${video.dataset.title}`,
						video_duration: videoDuration,
						viewer_user_id: `${localStorage.ajs_anonymous_id}`,
						page_type: "iframe",
						video_stream_type: "on-demand",
						custom_1: `${video.dataset.postslug}`,
						custom_2: `${video.dataset.topic}`,
						custom_3: `${video.dataset.product}`,
						custom_4: `${video.dataset.isreview}`,
						custom_5: `${video.dataset.softwareused}`
					},
				});
			}
		}
	});

	function updateQuality(newQuality) {
		window.hls.levels.forEach((level, levelIndex) => {
			if (level.height === newQuality) {
				console.log("Found quality match with " + newQuality);
				window.hls.currentLevel = levelIndex;
			}
		});
	}
});
