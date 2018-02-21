console.log('Loaded!');
//change text of the main element

var element = document.getElementById('main-text');
element.innerHTML='New Value';

var img = document.getElementById('madi');
img.onclick=function()
{
    img.style.marginleft='100px';
};