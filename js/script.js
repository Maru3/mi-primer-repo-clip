function jugar() {

    var cant_intentos = 3;
    var acerto = false;
    var producto_elegido = Colchon;
    var producto;

    var nombre=document.getElementById("nombre").value;

    if(nombre=="")
    {
        alert("Por favor, ingrese su  nombre para JUGAR");
    }
    else
    {
        while(cant_intentos>0 && acerto!=true)
        {
            cant_intentos--;
            producto= parseInt( prompt("Ingrese el producto"));
            if (producto==producto_elegido)
            {
                alert("ACERTASTE!!");
                acerto=true;
            }
            else if (producto<producto_elegido)
            {
                alert("PISTA: descanso");
            }
            else
            {
                alert("Le quedan " + cant_intentos + " intentos");
            }

        }

        document.getElementById("rdo").innerHTML="El producto era: <strong>" + producto_elegido + "</strong>"
    }

