var clic = 1;
var btnMenu = document.getElementById("menuStyle1");
var windowMenu = document.getElementById("menu");
var btnBuscar = document.getElementById("buscar");
var btnMenu = document.getElementById("menuStyle")
var btnInicio = document.getElementById("homeDiv");
var btnSobre = document.getElementById("aboutDiv");
var home = document.getElementById("about")

btnInicio.addEventListener("click", inicio);
btnSobre.addEventListener("click", sobre);
btnMenu.addEventListener("click", divLogin)
btnBuscar.addEventListener("click", buscar);

function buscar(){
    window.location.href = "../buscar/buscar.html";
}
function inicio(){
    window.location.href="../index.html";
}

function sobre(){
    window.location.href="about.html";
}
function divLogin(){
    if(clic==1){
        //ocultar el menu
         windowMenu.style.width = "0px";
 
         //mover el home
         home.style.float = "left";
         home.style.marginLeft = "50px";
 
         //ocultar los elememtos en el menu
         setTimeout(ocultar, 90);
         function ocultar(){
           btnBuscar.style.display = 'none';
           btnInicio.style.display = 'none';
           btnSobre.style.display = 'none';
         }
 
         clic = clic + 1;
    } else{
         //mostar el menu
         windowMenu.style.width = "28%";
         home.style.marginRight = "0px";

         //mover el home
         //home.style.float = "right";
 
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
 
         clic = 1;
    }
}
