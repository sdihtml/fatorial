function calcularFatorial(){
	var n = document.getElementById("numero").value
	n = parseInt(n)
	valor = 0
	var calculo = 1
	for(var i=n;i > 1; i--){
		calculo = calculo * i
	}
	document.getElementById("resultado").innerHTML = calculo
}