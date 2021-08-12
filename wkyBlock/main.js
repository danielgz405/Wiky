var clic = 1;
var btnMenu = document.getElementById("menuStyle1");
var windowMenu = document.getElementById("menu");
var btnBuscar = document.getElementById("buscar");
var article = document.getElementById("article_1");
var home = document.getElementById("home");
var btnInicio = document.getElementById("homeDiv");
var btnSobre = document.getElementById("aboutDiv");
var article2 = document.getElementById("article_2");
var article3 = document.getElementById("article_3");

btnInicio.addEventListener("click", inicio);
btnSobre.addEventListener("click", sobre);
btnMenu.addEventListener("click", divLogin);
article.addEventListener("click", articulo);
btnBuscar.addEventListener("click", buscar);
article2.addEventListener("click", articulo2);
article3.addEventListener("click", articulo3);


function inicio() {
     window.location.href = "index.html";
}

function sobre() {
     window.location.href = "./about/about.html";
}
function buscar() {
     window.location.href = "./buscar/buscar.html";
     /*
     var x = labelText.value;
     var contador = 0;
     for(i = 1; i<=cuArticulos; i++){
          console.log(document.getElementById("article1_Titulo").innerHTML);
          if(document.getElementById("article"+i+"_Titulo").innerHTML== x){
               articuloIndex(i);
               contador = 0;
          }else{
               contador = 5;
          }

     }
     if(contador == 5){
          alert("no he encontrado el articulo "+"("+x+")"+" 😕");
     }
     */
}

function articulo() {
     window.location.href = "./articulos/article_1.html";
}

function articulo2() {
     window.location.href = "./articulos/article_2.html";
}

function articulo3() {
     window.location.href = "./articulos/article_3.html";
}

function divLogin() {

     if (clic == 1) {
          //ocultar el menu
          windowMenu.style.width = "0px";

          //mover el home
          home.style.float = "left";
          home.style.marginLeft = "50px";

          //ocultar los elememtos en el menu
          setTimeout(ocultar, 90);
          function ocultar() {
               btnBuscar.style.display = 'none';
               btnInicio.style.display = 'none';
               btnSobre.style.display = 'none';
          }

          clic = clic + 1;
     } else {
          //mostar el menu
          windowMenu.style.width = "28%";

          //mover el home
          //setTimeout(derecha, 30);
          /*
          function derecha(){
            home.style.float = "right";
            home.style.marginRight = "12px";
            home.style.marginLeft = "0px";
          }
          */

          //mostar los elementos en el menu
          setTimeout(mostar, 30);
          function mostar() {
               btnBuscar.style.display = 'block';
               btnBuscar.style.display = 'flex';
               btnInicio.style.display = 'block';
               btnInicio.style.display = 'flex';
               btnSobre.style.display = 'block';
               btnSobre.style.display = 'flex';
          }
          //setTimeout(derecha, 350);

          clic = 1;
     }


}

