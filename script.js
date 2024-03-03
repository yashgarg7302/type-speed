const sentences = [
	"Communication is vital for human connection. Through language, we convey thoughts and emotions, fostering understanding and empathy among individuals. It's a bridge to share experiences.",

	"Education shapes minds and societies. It empowers individuals, instills critical thinking, and drives progress. Access to quality education is essential for personal and societal development. ",

	"Technology revolutionizes how we live and interact. From smartphones to artificial intelligence, innovations enhance efficiency and connectivity. Ethical considerations are integral in technological advancement.",

	"Empathy fosters compassion and unity. Understanding others' perspectives cultivates kindness and cooperation. Empathetic interactions nurture relationships and build inclusive communities, promoting peace and understanding globally.",

	"Nature sustains life on Earth. Its delicate balance provides resources and habitats for diverse species. Conservation efforts are crucial to preserve biodiversity and mitigate climate change impacts."
];

const msg = document.getElementById('msg');
const typedWords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime, endTime;

const playGame = () => {
	let randomNumber = Math.floor(Math.random() * sentences.length);
	msg.innerText = sentences[randomNumber];
	let date = new Date();
	startTime = date.getTime();
	btn.innerText = "Done";
}

const endGame = () => {
	let date = new Date();
	endTime = date.getTime();
	let totalTime = 0,
		wordCount = 0;
	totalTime = Math.round((endTime - startTime) / 1000) // milliseconds -> 10.23 means  10 seconds 23 milliseconds
	console.log(totalTime);

	let totalStr = typedWords.value;
	wordCount = wordCounter(totalStr);

	let finalMsg = `You Typed Total ${wordCount} words in ${totalTime} seconds. `;
	msg.innerText = finalMsg;
}



const wordCounter = (str) => {
	let response = str.split(" ").length;
	console.log(response);
	return response;
}

btn.addEventListener('click', function() {
	console.log(this); // current btn 
	if (this.innerText == 'Start') {
		typedWords.disabled = false;
		playGame();
	} else if (this.innerText == "Done") {
		typedWords.disabled = true;
		btn.innerText = "Start";
		endGame();
	}
})