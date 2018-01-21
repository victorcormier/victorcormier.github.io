var BCL = (function () {
	var APIModules, mediaEvent;
	// public functions and data
	return {
		playerData: { "playerID": "1937926734001",
			"playerKey": "AQ~~,AAAADXdqFgE~,aEKmio9UXajW-cv0zfxA9HrUvcL8ic54",
			"width": "800",
			"height": "600",
			"videoID": "734462565001"
		},

		// flag to keep track of whether there is a player
		isPlayerAdded: false,
		// template for the player object - will populate it with data using markup()
		playerTemplate: '<div style="display:none"></div><object class="BrightcoveExperience"><param name="wmode" value="transparent" /><param name="bgcolor" value="#64AAB2" /><param name="width" value="{{width}}" /><param name="height" value="{{height}}" /><param name="playerID" value="{{playerID}}" /><param name="isVid" value="true" /><param name="isUI" value="true" /><param name="dynamicStreaming" value="true" /><param name="@videoPlayer" value="{{videoID}}"; /><param name="includeAPI" value="true" /><param name="templateLoadHandler" value="BCL.onTemplateLoad" /><param name="templateReadyHandler" value="BCL.onTemplateReady" /></object>',
		//<param name="forceHTML" value="true" />
		//	BCL.experienceModule = brightcove.modules.experience.APIModule;
		addPlayer: function (placeholder, VideoID, width, height, playerID) {
			// if we don't already have a player
			if (this.isPlayerAdded == false) {
				//BCL.isPlayerAdded = true;
				var playerHTML = "";

				this.playerData.width = width;
				this.playerData.height = height;
				// set the videoID to the selected video
				this.playerData.videoID = VideoID; //BCL.videoData[BCL.videoSelect.selectedIndex].videoID;
				if (playerID) { // if specified, make different.
					this.playerData.playerID = playerID;
				}
				// populate the player object template
				playerHTML = this.markup(this.playerTemplate, this.playerData);
				// inject the player code into the DOM
				//document.getElementById("placeHolder").innerHTML = playerHTML;
				placeholder.innerHTML = playerHTML;
				// instantiate the player
				var player = brightcove.createExperiences();
				//myExperience
				//<param name="includeAPI" value="true">
				//<param name="templateLoadHandler" value="BCLS.onTemplateLoad">
				//<param name="templateReadyHandler" value="BCLS.onTemplateReady">
			}
			// user must have requested a different video for player already loaded
			else {
				console.log(this.videoSelect.selectedIndex);
				this.videoPlayer.loadVideo(this.videoData[this.videoSelect.selectedIndex].videoID);
			}
		},


		markup: function (html, data) {
			var m;
			var i = 0;
			var match = html.match(data instanceof Array ? /{{\d+}}/g : /{{\w+}}/g) || [];

			while (m = match[i++]) {
				html = html.replace(m, data[m.substr(2, m.length - 4)]);
			}
			return html;
		},
		onTemplateLoad: function (experienceID) {
			APIModules = brightcove.api.modules.APIModules;
			mediaEvent = brightcove.api.events.MediaEvent;

			//console.log(experienceID);

			var player = brightcove.getExperience(experienceID);
			var videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);
			videoPlayer.addEventListener(mediaEvent.PROGRESS, this.onProgress);
			videoPlayer.addEventListener(mediaEvent.COMPLETE, this.onComplete);
		},
		//onTemplateReady: function (evt) {
		//},
		onProgress: function (evt) {
			var videoDTO = evt.media;
			var theCurrentVid = videoDTO.displayName + " - " + videoDTO.id;
			if ((evt.duration - evt.position) > .1) {
				//call that sends data to google analytics associated w/ slb.js
				//console.log('brightcoveTEST' + " - " + location.href + " - " + theCurrentVid + " - " + parseInt(evt.duration) + " - " + parseInt(evt.position));
				framecount('movies', location.href, theCurrentVid + " - " + parseInt(evt.duration), parseInt(evt.position));
			}
		},
		onComplete: function (evt) {
			var videoDTO = evt.media;
			var theCurrentVid = videoDTO.displayName + " - " + videoDTO.id;
			//console.log('brightcoveTEST' + " - " + location.href + " - " + theCurrentVid + " - " + parseInt(evt.duration) + " - " + parseInt(evt.position));
			videoPlayer.removeEventListener(mediaEvent.COMPLETE, this.onComplete);
			//call that sends data to google analytics associated w/ slb.js
			framecount('movies', location.href, theCurrentVid + " - " + parseInt(evt.duration), parseInt(evt.position));

		}
	}
} ());
brightcove.createExperiences();
