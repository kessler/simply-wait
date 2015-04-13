var simplyWait = require('./index')
var EventEmitter = require('events').EventEmitter

describe('simply-wait', function () {
	it('waits for a few async things to happen', function (done) {
		var wait = simplyWait(done)

		var e1 = new EventEmitter()
		var e2 = new EventEmitter()

		e1.on('get armor', wait())
		e1.on('mount horse', wait())
		e2.on('slay dragon', wait())

		e1.emit('get armor')
		e1.emit('mount horse')
		e2.emit('slay dragon')	
	})
})