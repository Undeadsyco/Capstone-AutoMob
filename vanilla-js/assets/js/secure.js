window.addEventListener('load', function() {
  if(!this.localStorage.getItem('user')) this.location.assign('http://127.0.0.1:5500/vanilla-js/home.html');
})