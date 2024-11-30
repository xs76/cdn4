(function(d, params, env, apiHost, hosts) {
	// set params
	(function(regex, qs, tokens) {
		regex = /[?&]?([^=]+)=([^&]*)/g;
		qs = d.location && d.location.search ? d.location.search.split('+').join(' ') : '';

		while ((tokens = regex.exec(qs))) {
			params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
		}
	})();

	if (typeof fg_api == "function" && typeof famobi != "undefined" && famobi instanceof fg_api) {
		// famobi api already loaded
		return false;
	}
	
})(document, {}, '', '', {
	'dev': 'api.dev', 
	'staging': 'api.staging.gc',
	'staging.aws': 'api.staging.aws',
	'staging.gc': 'api.staging.gc',
	'prod': 'api'
});
