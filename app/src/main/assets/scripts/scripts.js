/**
 * Função de inicialização
 *   -Inicializa com o símbolo da moeda os campos de classe "currency"
 *   -Executa o reset da barra de resultados
 */
function init(){
	document.getElementById("result").innerHTML = null;
	resultReset();

	var currencies = document.getElementsByClassName("currency");
	for (var i=0; i < currencies.length; i++){
		currencies[i].innerText = "R$";
	}
}

/**
 * Realiza a alteração da barra de resultado.
 *   -Caso não estejam preenchidos os campos, a barra mostra o texto "INSERIR VALORES".
 *   -Caso algum campo seja preenchido, a barra de mostrará o texto "Total R$".
 */
function resultReset(){
	if(
		null == document.getElementById("result").innerHTML
		|| "" == document.getElementById("result").innerHTML
		){
			document.getElementById("resultLabel").parentElement.style.textAlign = "center";
			document.getElementById("resultLabel").style.color = "#F00";
			document.getElementById("resultLabel").innerHTML = "INSERIR VALORES";
		}else{
			document.getElementById("resultLabel").parentElement.style.textAlign = "right";
			document.getElementById("resultLabel").style.color = "#000";
			document.getElementById("resultLabel").innerHTML = "Total R$ ";
		}
}

/**
 * Realiza o cálculo total e mostra o resultado dos campos correspondentes
 */
function calculoParcial(inputId, valueId, resultId){
	var temp = 0;
	var tempId = document.getElementById(valueId).id;
	tempId = tempId.replace("_",".");

	if((
		null == document.getElementById(inputId).value)
		|| ("" == document.getElementById(inputId).value)
		|| (document.getElementById(inputId).value < 0)
		){
		document.getElementById(inputId).value = 0;
	}else if(document.getElementById(inputId).value > 100){
		document.getElementById(inputId).value = 100;
	}

	temp = (document.getElementById(inputId).value * tempId);
	temp = temp.toFixed(2);
	temp = temp.replace(".",",");

	document.getElementById(resultId).innerHTML = temp;
	calcular();
	resultReset();
}

/**
 * Realiza o cálculo total e mostra o resultado na tela
 */
function calcular(){
	var preResultsFromPage = document.getElementsByClassName("preResult");
	var preResults = [];
	var finalResult = 0;

	for(var i=0; i< preResultsFromPage.length; i++){
		var x = preResultsFromPage[i].innerText;
		x = x.replace(",",".");
		if(
			null != x
			& "" != x
			){
			if(x == "0.00") x =0;
			else x = parseFloat(x);
			preResults.push(x);
		}
	}

	for(var i=0; i< preResults.length; i++){
		finalResult = finalResult + preResults[i];
	}

	finalResult = finalResult.toFixed(2);
	finalResult = finalResult.replace(".",",");

	document.getElementById("result").innerHTML = finalResult;
}

/**
 * Mostra a caixa de diálogo
 */
function showModal(modalToDisplay){
	var modal = document.getElementById(modalToDisplay);
	modal.style.display = "block";
}

/**
 * Fecha a caixa de diálogo ao clicar no "x"
 */
function closeModal(modalToClose){
	var modal = document.getElementById(modalToClose);
	modal.style.display = "none";
}

/**
 * Fecha a caixa de diálogo
 */
function closeModalByClickingOut(modalToClose){
	var modal = document.getElementById(modalToClose);

	window.onclick = function(event) {
		if (event.target == modal) modal.style.display = "none";
	}
}
