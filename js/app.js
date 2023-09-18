// const texto = "Hola! Soy Clever Paul";
// const textoEscrito = document.querySelector('.texto-maquina');
// let indice = 0;



// function maquinaEscribir(){
//     // while(indice < texto.length){

//     // }
//     if(indice < texto.length){
//         textoEscrito.textContent += texto.charAt(indice);
//         indice++;
        
//         return textoEscrito;
//     }
   
// }

// maquinaEscribir();
// setTimeout(maquinaEscribir, 200);



//obtener anio
const anio = document.querySelector('.anio');
anio.textContent = new Date().getFullYear();