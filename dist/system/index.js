System.register([], function (_export) {
	'use strict';

	_export('configure', configure);

	function configure(aurelia) {
		aurelia.globalResources('./test/test');
	}

	return {
		setters: [],
		execute: function () {}
	};
});