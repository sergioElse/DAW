//Javascript

function invokeScript(divid)
{
	var scriptObj = divid.getElementsByTagName("SCRIPT");
	var len = scriptObj.length;
	for(var i=0; i<len; i++)
	{
		var scriptText = scriptObj[i].text;
		var scriptFile = scriptObj[i].src;
		var scriptTag = document.createElement("SCRIPT");
		if ((scriptFile != null) && (scriptFile != "")){
			scriptTag.src = scriptFile;
		}
		scriptTag.text = scriptText;
		if (!document.getElementsByTagName("HEAD")[0]) {
			document.createElement("HEAD").appendChild(scriptTag);
		}
		else {
			document.getElementsByTagName("HEAD")[0].appendChild(scriptTag);
		}
	}
}
                        
function nuevaConexion()
{
	var xmlhttp=false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch (e)
	{
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} 
		catch (E)
		{ 
			xmlhttp = false;
		}
	}

	if (!xmlhttp && typeof XMLHttpRequest!='undefined')
	{
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp; 
}

function Cargar(url, capa)
{
	var contenido = document.getElementById(capa);
	var conexion = nuevaConexion();
	conexion.open("GET", url, true);
	conexion.onreadystatechange=function()
	{ 
		if((conexion.readyState == 4) && (conexion.status == 200))
		{
			contenido.innerHTML = conexion.responseText;
			invokeScript(document.getElementById(capa));
		}
	}
	conexion.send(null);                               
} 
                                                
function CargarForm(url, capa, valores)
{
	var contenido = document.getElementById(capa);
	var conexion = nuevaConexion();
	conexion.open("POST", url, true);
	conexion.onreadystatechange=function()
	{ 
		if((conexion.readyState == 4) && (conexion.status == 200))
		{
			contenido.innerHTML = conexion.responseText;
			invokeScript(document.getElementById(capa));
		}
	}
	conexion.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=utf-8');
	conexion.send(valores);
} 

function ProcesarForm(formulario, url, capa)
{
	var valores="";
	for (i=0; i<formulario.elements.length;i++)
	{
		var nombre = formulario.elements[i].name;
		if (nombre!="")
		{
			if (!((formulario.elements[i].type == "radio") && (!formulario.elements[i].checked)))
			{
				valores += formulario.elements[i].name + "=";
				valores += formulario.elements[i].value + "&";	
			}
		}
	}
	CargarForm(url, capa, valores);
}

function ProcesarCarrito(carrito, url, capa)
{
	var valores="carrito=" + JSON.stringify(carrito);
	CargarForm(url, capa, valores);
}
			
function cargaInicial()
{                            
	Cargar('menu.html','menu');
	Cargar('inicio.jsp','cuerpo');
}

//AÑADIDAS//

function login(){
	var usuario, password;
	usuario.getElementsByTagName("email").value;
	password.getElementsByTagName("password").value;

	if(usuario)

	var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	var email = document.form1.email.value;
	if (!expresion.test(email)){
    todo_correcto = false;
	}
}

//CONTACTO//

function validar_formulario(){
	if(!document.getElementById('nombre').validity.valid)
		document.getElementById('mal_nombre').style.display = 'block';
	if(!document.getElementById('email').validity.valid)
		document.getElementById('mal_correo').style.display = 'block';
	if(!document.getElementById('tel').validity.valid)
		document.getElementById('mal_tel').style.display = 'block';
	if(!document.getElementById('localidad').validity.valid)
		document.getElementById('mal_localidad').style.display = 'block';
	if(!document.getElementById('provincia').validity.valid)
		document.getElementById('mal_provincia').style.display = 'block';
	
}
function borrar_formulario(){
	document.getElementById('mal_nombre').style.display = 'none';
	document.getElementById('mal_correo').style.display = 'none';
	document.getElementById('mal_tel').style.display = 'none';
	document.getElementById('mal_localidad').style.display = 'none';
	document.getElementById('mal_provincia').style.display = 'none';
}

//LOGIN//

function validar_login(){
	if(!document.getElementById('email').validity.valid)
		document.getElementById('mal_email').style.display = 'block';
	if(!document.getElementById('password').validity.valid)
		document.getElementById('mal_pass').style.display = 'block';
}

//REGISTRO//
function validar_registro(){
	if(!document.getElementById('nombre').validity.valid)
		document.getElementById('mal_nombre').style.display = 'block';
	if(!document.getElementById('ape').validity.valid)
		document.getElementById('mal_ape').style.display = 'block';
	if(!document.getElementById('email').validity.valid)
		document.getElementById('mal_email').style.display = 'block';
	if(!document.getElementById('password').validity.valid)
		document.getElementById('mal_pass').style.display = 'block';
	if(!document.getElementById('tel').validity.valid)
		document.getElementById('mal_tel').style.display = 'block';
	if(!document.getElementById('localidad').validity.valid)
		document.getElementById('mal_localidad').style.display = 'block';
	if(!document.getElementById('provincia').validity.valid)
		document.getElementById('mal_provincia').style.display = 'block';
	if(!document.getElementById('cp').validity.valid)
		document.getElementById('mal_cp').style.display = 'block';
}

//CARRITO//
function Carrito(){
	Cargar('carrito.html','cuerpo');
}