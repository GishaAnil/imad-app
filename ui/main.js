console.log('Loaded!');
//change text of the main element

var element = document.getElementById('main-text');
element.innerHTML='Gisha';

var img = document.getElementById('madi');
img.onclick=function()
{
    img.style.marginLeft='100px';
};

var button = document.getElementById('counter');
var counter=0;
button.onclick=function()
{
    counter=counter+1;
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
};