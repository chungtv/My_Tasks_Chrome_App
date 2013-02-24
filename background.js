chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('app.html', {
    'width': 550,
    'height': 610
  });
});