console.log('Loaded!');
//change text of the main element

var element = document.getElementById('main-text');
element.innerHTML='Gisha';

var img = document.getElementById('madi');
img.onclick=function()
{
    img.style.marginLeft='100px';
};