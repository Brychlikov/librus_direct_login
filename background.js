var targetPage = "https://portal.librus.pl/rodzina/synergia/loguj";

function addRefererHeader(e) {
	console.log(e);
	e.requestHeaders.push( {
		name: "Referer",
		value: "https://portal.librus.pl/rodzina"
	} );
	return {requestHeaders: e.requestHeaders};
}

browser.webRequest.onBeforeSendHeaders.addListener(
	addRefererHeader, 
	{urls: [targetPage]},
	["blocking", "requestHeaders"]
);
