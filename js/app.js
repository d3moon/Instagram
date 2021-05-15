var elements = document.getElementsByClassName('name');

var alternarAbas = function(){
    var aba = this.getAttribute('aba'); 
    var element = document.getElementById(aba);
   
    //Ocultar abas
    document.getElementById('publications').style.display ="none";
    document.getElementById('igtv').style.display ="none";
    document.getElementById('marks').style.display ="none";
 
    //Mostrar abas
    element.style.display = 'block';
}

for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click',alternarAbas,false);
}