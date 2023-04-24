// string the 10 frases
const quotes = [
    "Ser ou não ser, eis a questão",
	"O gênio é um por cento de inspiração e noventa e nove por cento de transpiração",
	"Nem todos os que vagam estão perdidos",
	"Você perde 100% dos chutes que não dá",
	"Seja a mudança que você deseja ver no mundo",
	"A única maneira de fazer um grande trabalho é amar o que você faz",
	"Você pode observar muito apenas observando",
	"Você pode observar muito apenas observando",
	"Acredite que você pode e você já está no meio do caminho",
	"Dança Gatinho dança",
	"La ele",
	"Desistir é para os fracos! Faça que nem eu, nem tente"

];

let currentQuote = 0; 
const answerInput = document.getElementById("answer");
const quoteDisplay = document.getElementById("quote");
const audio = document.getElementById("myaudio");
audio.volume = 0.1;

// função para mostrar uma frase aleatoria
function displayQuote() {
	currentQuote = Math.floor(Math.random() * quotes.length); // escolhe a frase pelo indice 
	const quote = quotes[currentQuote];	

	// divida a citação em letras individuais e envolva cada uma em um intervalo com um ID exclusivo
	const letterSpans = quote.split("").map((letter, i) => `<span id="letter-${i}">${letter}</span>`);

	quoteDisplay.innerHTML = letterSpans.join(""); // exibir a frase com cada letra em um intervalo
	answerInput.value = ""; // limpar o input do usuario
}

// verificação do texto
function checkAnswer() {
	const answer = answerInput.value.toLowerCase(); //define os imput do usuario em letras minusculas
	const quote = quotes[currentQuote].toLowerCase(); // define as frases em letras minúsculas
	const letters = quote.split("");// separando cada letra pelo delimitador vazio "" permite que cada letra seja acessada individualmente para compará-la com a letra correspondente digitada pelo usuário.
	let allCorrect = true; // valor atribuido para poder decidir se a resposta do usuário é correta ou não
  
	// percorre cada letra da frase, checa se a letra da resposta do usuário está correta ou errada
	for (let i = 0; i < letters.length; i++) {
	  const letterSpan = document.getElementById(`letter-${i}`);
	  // se a letra digitada pelo usuário é a correta, a letra fica azul
	  if (answer[i] === letters[i]) {
		letterSpan.style.color = "blue";
	  } 
	  // se a letra digitada é errada, a letra fica vermelha
	  else if (answer[i]) {
		letterSpan.style.color = "red";
		allCorrect = false;
	  } 
	  // se o usuário não digitou nada naquela posição, a letra fica preta
	  else {
		letterSpan.style.color = "black";
		allCorrect = false;
	  }
	}
  }
  
answerInput.addEventListener("keydown", function(event) {
	if (event.key === "Enter" && !event.shiftKey) {
		event.preventDefault(); // impede comando default do enter para quebrar linha
		checkAnswer(); // invoca a função de verifica se a frase está correto
		alert("Nice Você acertou!"); // Alerta 
		displayQuote();// exibe proxima frase
		var x = document.getElementById("Coin collect sound effect free to use.mp3"); 
			x.play();
	}
});

// Faz o enter quebrar linha
answerInput.addEventListener("keydown", function(event) {
	if (event.shiftKey === "Enter") {
		answerInput.value += "\n"; // atribuindo valor para key de quebrar a linha
	}
});
// Chama função checkAnswer toda vez que o usuario digita ou excluir o texto no campo de resposta
answerInput.addEventListener("input", checkAnswer); 

// mostra a primeira frase ao carregar o site
displayQuote();