function StartStatsModule () {
	var updateGameTimeEvent = function() {
		$.getJSON( "../api/getstats")
		.done(function(data) {
			var time = "Day " + data.gametime.days + ", ";
			if (data.gametime.hours < 10)
				time += "0";
			time += data.gametime.hours;
			time += ":";
			if (data.gametime.minutes < 10)
				time += "0";
			time += data.gametime.minutes;

			$("#stats_time").html (time);
			$("#stats_players").html (data.players);
			$("#stats_hostiles").html (data.hostiles);
			$("#stats_animals").html (data.animals);
		})
		.fail(function(jqxhr, textStatus, error) {
			console.log("Error fetching game stats");
		})
		.always(function() {
		});
		window.setTimeout(updateGameTimeEvent, 2000);
	};
	updateGameTimeEvent();
}

function StartUIUpdatesModule () {
	var updateGameTimeEvent = function() {
		$.getJSON( "../api/getwebuiupdates?latestLine=" + lastLogLine)
		.done(function(data) {
			var time = "Day " + data.gametime.days + ", ";
			if (data.gametime.hours < 10)
				time += "0";
			time += data.gametime.hours;
			time += ":";
			if (data.gametime.minutes < 10)
				time += "0";
			time += data.gametime.minutes;

			$("#stats_time").html (time);
			$("#stats_players").html (data.players);
			$("#stats_hostiles").html (data.hostiles);
			$("#stats_animals").html (data.animals);
			$("#newlogcount").html (data.newlogs);
			if (data.newlogs > 0) {
				$("#newlogcount").addClass ("visible");
			} else {
				$("#newlogcount").removeClass ("visible");
			}
		})
		.fail(function(jqxhr, textStatus, error) {
			console.log("Error fetching ui updates");
		})
		.always(function() {
		});
		window.setTimeout(updateGameTimeEvent, 2000);
	};
	updateGameTimeEvent();
}

