console.log('Loaded!');
//change text of the main element

var element = document.getElementById('main-text');
element.innerHTML='Gisha';


var button = document.getElementById('counter');
var counter1=0;
counter.onclick = function() {
    counter1=counter1+1;
    var span = document.getElementById('count');
    span.innerHTML=counter1.toString();
};