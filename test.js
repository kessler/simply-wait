var simplyWait = require('./index')
var EventEmitter = require('events').EventEmitter
var should = require('should')

describe('simply-wait', function () {
	it('waits for a few async things to happen', function (done) {
		var wait = simplyWait(done)

		var e1 = new EventEmitter()
		var e2 = new EventEmitter()

		e1.on('get armor', wait())
		e1.on('mount horse', wait())
		e2.on('slay dragon', wait())

		setImmediate(function () {
			e1.emit('get armor')
			e1.emit('mount horse')
			e2.emit('slay dragon')	
		})
	})

	it('will not fire if all the async things did not happen', function (done) {
		var fired = false

		var wait = simplyWait(function () {
			fired = true
		})

		var e1 = new EventEmitter()
		var e2 = new EventEmitter()

		e1.on('get armor', wait())
		e1.on('mount horse', wait())
		e2.on('slay dragon', wait())

		setImmediate(function () {
			e1.emit('get armor')
			e2.emit('slay dragon')
		})

		setImmediate(function () {
			fired.should.be.false	
			done()
		})
	})
})