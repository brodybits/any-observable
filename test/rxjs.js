require('../register')('rxjs');
var test = require('ava');
var RxJsObservable = require('rxjs').Observable;
var AnyObservable = require('../');
var implementation = require('../implementation');

test(t => {
	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
});
