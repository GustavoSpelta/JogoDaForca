var partesSalvas=0;
	var partesDaForca=0;
var letraDigitada=new Array();
	var botao;
var mensagemText;
	var tamanhoResposta;
var gaming;
	var letraCorreta=0;
var NumLetras;
	var segredo=["cozinha","banheiro","quarto"];
window.onload = init;

function init(){
			var c = Math.floor((Math.random()*segredo.length));
				gaming=segredo[c];
			console.log(gaming);
				NumLetras=gaming.length
	
		for(var i=0;i<(NumLetras);i++){
		letraDigitada[i]="__";
	}
			document.getElementById('escolhaDaLetra').innerHTML=letraDigitada;
				tamanhoResposta=NumLetras+(NumLetras-1);
			botao=document.getElementById('enviar');
			botao.addEventListener('click',busca);
	}

function busca(event)
	{
		if(letraDigitada.length!=partesSalvas)
	{
		if(partesDaForca<=6)
	{
		letra=document.getElementById("letra").value;
		
		for(var i=0;i<NumLetras;i++)
	{
		if(letra==gaming[i])
	{
				letraDigitada[i]=letra;
				letraCorreta=1;
	}
	}
		if(letraCorreta!=1)
	{
			partesDaForca=partesDaForca+1;
			document.getElementById("corpoBoneco").src="boneco/"+partesDaForca+".png";
	}
		else
	{
			document.getElementById('escolhaDaLetra').innerHTML=letraDigitada;
			partesSalvas=partesSalvas+1;
	}
			letraCorreta=0;
	}
		if(partesDaForca==6){
			document.getElementById("mensagemFinal").innerHTML="Que pena, você errou a palavra secreta";
	}
	}
		if(partesSalvas==letraDigitada.length)
	{
			document.getElementById("mensagemFinal").innerHTML="Parabéns você acertou a palavra secreta";
	}
	}