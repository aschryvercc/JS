function poll(func, timout, interval) {

	var def = new Deferred();
	var endTime = Number(new Date()) + (timeout || 2000);
	interval = interval || 100;

	(function p() {
	
		if (func()) {

			def.resolve();
		}
		else if (Number(new Date()) < endTime) {
		
			setTimeout(p, interval);
		}
		else {
			
			def.reject(new Error('timed out for ' +
					     func + ': ' + arguments));
		}
	})();

	return def.promise;

}
