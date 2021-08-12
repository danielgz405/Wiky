var clic = 1;
var btnMenu = document.getElementById("menuStyle1");
var windowMenu = document.getElementById("menu");
var btnBuscar = document.getElementById("buscar");
var home = document.getElementById("home");
var btnInicio = document.getElementById("homeDiv");
var btnSobre = document.getElementById("aboutDiv");


btnInicio.addEventListener("click", inicio);
btnSobre.addEventListener("click", sobre);
btnMenu.addEventListener("click", divLogin);
btnBuscar.addEventListener("click", buscar);


function inicio(){
     window.location.href="../index.html";
}

function sobre(){
     window.location.href="../about/about.html";
}
function buscar(){
     window.location.href="../buscar/buscar.html";
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

function divLogin(){

   if(clic==1){
        //mostar el menu
        windowMenu.style.width = "28%";

        //mover el home
        //home.style.float = "right";
        home.style.width = "67%"
    
        //mostar los elementos en el menu
            setTimeout(mostar, 30);
            function mostar(){
              btnBuscar.style.display = 'block';
              btnBuscar.style.display = 'flex';
              btnInicio.style.display = 'block';
              btnInicio.style.display = 'flex';
              btnSobre.style.display = 'block';
              btnSobre.style.display = 'flex';
            }
    

        clic = clic + 1;
   } else{
              //ocultar el menu
              windowMenu.style.width = "0px";

              //mover el home
              //home.style.float = "left";
              //home.style.marginLeft = "50px";
              home.style.width = "95%"
      
              //ocultar los elememtos en el menu
              setTimeout(ocultar, 90);
              function ocultar(){
                btnBuscar.style.display = 'none';
                btnInicio.style.display = 'none';
                btnSobre.style.display = 'none';
              }

        clic = 1;
   }


}

