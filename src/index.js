const encriptado = document.getElementById('btn-e');
const desencriptado = document.getElementById('btn-d');
const copiar = document.getElementById('btn-c');
const mostrar = document.getElementById('mostrar');
const ocultar = document.getElementById('ocultar');
encriptado.addEventListener('click', encriptar);
desencriptado.addEventListener('click', desencriptar);
copiar.addEventListener('click', copiado);
// const vocales = ['a', 'e', 'i', 'o', 'u'];
// const criptado = ["ai","enter","imes","ober","ufat"]

function encriptar(){ 
    let texto = document.getElementById('texto_input').value; //el texto que llega
    let minus = texto.toLowerCase(); //convierte esto es un array
    let remplazo = minus.replaceAll('e','enter');
    remplazo = remplazo.replaceAll('o','ober');
    remplazo = remplazo.replaceAll('i','imes');
    remplazo = remplazo.replaceAll('a','ai');
    remplazo = remplazo.replaceAll('u','ufat');
      //console.log(remplazo)
      if(texto == ''){
        ocultar.style.visibility = 'visible';
     }else{
      ocultar.style.visibility = 'hidden';
     }
       mostrar.innerHTML = remplazo
      texto = document.getElementById('texto_input').value ='';
      //ocultar.style.visibility = 'visible';
};

function desencriptar(){ 
    let texto = document.getElementById('texto_input').value; //el texto que llega
    let minus = texto.toLowerCase(); //convierte esto en minusculas
    let remplazo = minus.replaceAll('ai','a');
    remplazo = remplazo.replaceAll('enter','e');
    remplazo = remplazo.replaceAll('imes','i');
    remplazo = remplazo.replaceAll('ober','o');
    remplazo = remplazo.replaceAll('ufat','u');
      //console.log(remplazo)
        if(texto == ''){
          ocultar.style.visibility = 'visible';
       }else{
        ocultar.style.visibility = 'hidden';
       }
      mostrar.innerHTML = remplazo
       texto = document.getElementById('texto_input').value ='';
     
       
};

function copiado(){
    navigator.clipboard.writeText(mostrar.textContent);
    copiar.textContent = 'Copiado'
}
