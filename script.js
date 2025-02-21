window.onload = () =>{

	let text = document.getElementsByClassName("wish")[0];
	
	aakuWriter(text, "On this special day, I just want to remind you how incredible you are. You are an amazing girl that every man wishes to have in their life beautiful inside and out, kind-hearted, and truly one of a kind. Your smile lights up every room, and your presence makes everything feel better. I hope today brings you as much happiness, love, and joy as you bring to everyone around you. May this new year of your life be filled with endless blessings, unforgettable moments, and all your heart’s desires. Enjoy your day, Queen! You deserve the world and more.✨❤️");
	
};

function aakuWriter(target, msg) {
	let i=0,
		id = setInterval(() => {
		
		target.append(msg[i++]);
		if (i >= msg.length) {
			clearInterval(id);		 
		}
	}, 70);
}


window.addEventListener('click', () => {
	
	document.getElementById("song").play();
	
});

