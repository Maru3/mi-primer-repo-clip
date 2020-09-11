function jugar(){
    producto_elegido= "colchon";
    producto = document.getElementById('prod').value;


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
}
            