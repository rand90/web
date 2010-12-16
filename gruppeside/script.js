     function changeStyle(title) {
		  var lnks = document.getElementsByTagName('link');
		  for (var i = lnks.length - 1; i >= 0; i--) {
		  if (lnks[i].getAttribute('rel').indexOf('style')> -1 && lnks[i].getAttribute('title')) {
		  lnks[i].disabled = true;
		  if (lnks[i].getAttribute('title') == title) lnks[i].disabled = false;
	}}}