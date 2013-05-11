javascript:void(function(){var s=document.createElement('script'); s.src='//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'; document.getElementsByTagName('head')[0].appendChild(s);}());

window.setTimeout(function() {
var prompted='';

prompted=prompt('Choose a fun word', 'fun');

$.each($(prompt('Choose an element type to replace', 'a')), function() { this.innerText=prompted; });
}, 300);
