function poll (func, callback, errback, timeout, interval) {

	var endTime = Number(new Date()) + (timeout || 2000);
	interval = interval || 100;

	(function p() {

		if (func()) {
			callback();
		}
		else if (Number(new Date()) < endTime) {
			setTimeout(p, interval);
		}
		else {
			errback(new Error('timed out for' +
					  func + ': ' + arguments));
		}
	})();
}
