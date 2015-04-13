# simply-wait [![Build Status](https://secure.travis-ci.org/kessler/simply-wait.png?branch=master)](http://travis-ci.org/kessler/simply-wait)

Simply wait for some async things to happen. 

Mostly useful for event emitters but also for when you just want super stupid simple code.

# Install
```
    npm install --save simply-wait
```

# Example
```javascript
var simplyWait = require('simply-wait')
var EventEmitter = require('events').EventEmitter

var wait = simplyWait(function (err) {
    console.log('the deed is done!')
})

var e1 = new EventEmitter()
var e2 = new EventEmitter()

e1.on('get armor', wait())
e1.on('mount horse', wait())
e2.on('slay dragon', wait())

e1.emit('get armor')
e1.emit('mount horse')
e2.emit('slay dragon')

// console prints "the deed is done"
```