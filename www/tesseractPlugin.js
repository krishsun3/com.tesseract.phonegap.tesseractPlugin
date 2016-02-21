var tesseractPlugin = {
    createEvent: function(imageObj, Callback) {
        cordova.exec(Callback, function(err) {
			alert(err);
		Callback('Nothing to echo.');
			},
			"TesseractPlugin",			//Service: Mapped to native java.class
			"addTesseractPluginEntry",	//Action: The action name to call into on the native side
			[imageObj]
			);						          
     }
};
module.exports = tesseractPlugin;