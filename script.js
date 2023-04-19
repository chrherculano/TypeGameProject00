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
	"Dança Gatinho dança"
];

let currentQuote = 0; 
const answerInput = document.getElementById("answer");
const quoteDisplay = document.getElementById("quote");
const submitButton = document.getElementById("submit");

// função para mostrar uma frase aleatoria
function displayQuote() {
	currentQuote = Math.floor(Math.random() * quotes.length); // escolhe a frase pelo indice 
	const quote = quotes[currentQuote];	

	// divida a citação em letras individuais e envolva cada uma em um intervalo com um ID exclusivo
	const letterSpans = quote.split("").map((letter, i) => `<span id="letter-${i}">${letter}</span>`);

	quoteDisplay.innerHTML = letterSpans.join(""); // display the quote with each letter wrapped in a span
	answerInput.value = ""; // clear the answer input
}

// verificação do texto
function checkAnswer() {
	const answer = answerInput.value.toLowerCase(); // converte a frase em minusculo para comparar
	const quote = quotes[currentQuote].toLowerCase(); 
	const letters = quote.split("");

	for (let i = 0; i < letters.length; i++) {
		const letterSpan = document.getElementById(`letter-${i}`);
		if (answer[i] === letters[i]) {
			letterSpan.style.color = "blue"; // torna letra azul se correto
		} else {
			letterSpan.style.color = "red"; // vermelho para incorreto
			return;
		}
	}

	// Mensagem de confirmação e proxima frase
	alert("Você acertou!");
	displayQuote();
}

answerInput.addEventListener("keydown", function(event) {
	if (event.key === "Enter" && !event.shiftKey) {
		event.preventDefault(); // impede comando default do enter para quebrar linha
		checkAnswer(); // invoca a função de verifica se a frase está correto
	}
});

// botão para verificar a resposta
submitButton.addEventListener("Clique Aqui", checkAnswer);

// Faz o enter quebrar linha
answerInput.addEventListener("keydown", function(event) {
	if (event.shiftKey && event.key === "Enter") {
		answerInput.value += "\n"; // add a line break to the answer input
	}
});

// mostra a primeira frase ao carregar o site
displayQuote();