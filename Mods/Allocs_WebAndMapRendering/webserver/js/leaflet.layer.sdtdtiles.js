function GetSdtdTileLayer (mapinfo, initTime, isMiniMap) {
	if (typeof isMiniMap == 'undefined') isMiniMap = false;
	
	var tileLayer = L.tileLayer('../map/{z}/{x}/{y}.png?t={time}', {
		maxZoom: isMiniMap ? mapinfo.maxzoom : mapinfo.maxzoom + 1,
		minZoom: isMiniMap ? 0 : Math.max(0, mapinfo.maxzoom - 5),
		maxNativeZoom: mapinfo.maxzoom,
		tileSize: mapinfo.tilesize,
		continuousWorld: true,
		tms: true,
		unloadInvisibleTiles: false,
		time: initTime
	});
	
	// TileLayer w/ TMS=true fix for zoomlevel >= 8
	tileLayer._getWrapTileNum = function () {
		return L.point(0, 0);
	};
	
	return tileLayer;
}

