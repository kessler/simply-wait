module.exports = function (callback) {
	if (typeof callback !== 'function') throw new Error('must provide a callback')
		
	var count = 0
 	
 	return wait
 	
	function wait() {
		count++
		return notify
	}

	function notify() {
		if (--count === 0) {
			callback.apply(null, arguments)
		}
	}
}