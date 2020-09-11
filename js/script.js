
    if (producto != "")
    {
        intentos --;

        if (producto == producto_elegido)
        {
            alert("EUREKA!!");
            acerto=true;
        }
        else if (producto != producto_elegido)
    	{
            alert("PISTA: Se utiliza para descansar.");
            alert("Le quedan " + cant_intentos + " intentos");
		}

        else if (producto != producto_elegido)
    	{
            alert("PISTA: Viene en varios tamaños.");
            alert("Le quedan " + cant_intentos + " intentos");
		}

       
    }   
    
function jugar() {

    var cant_intentos = 3;
    var acerto = false;
    var producto_elegido= "colchon";
    var producto;

    var nombre = document.getElementById("nombre").value;

    if (nombre == "") {
        alert("Por favor, ingrese su nombre para poder jugar");
    } else {
        while (cant_intentos > 0 && acerto != true) {
            cant_intentos--;
            producto = prompt("Ingrese el producto");
            if (producto == producto_elegido) {
                alert(" Felicitaciones ACERTASTE!!!");
                acerto = true;
            } else if (cant_intentos == 3) {
                alert("Te quedan " + cant_intentos + " intentos");
            } else if (cant_intentos == 2) {
                alert("PISTA: Se utiliza para descansar. \n  (Te quedan " + cant_intentos + " intentos)");
            } else if (cant_intentos == 1) {
                alert("PISTA: Viene en varios tamaños. \n  (Te queda " + cant_intentos + " intento)");

            } else {
               alert("Lo siento no te quedan mas intentos, no pudo ser.");
            }

        }

        document.getElementById("prod").innerHTML = "El producto escondido era: <strong>Colchon</strong>."
    }

}