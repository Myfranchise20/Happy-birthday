window.onload = () =>{

	let text = document.getElementsByClassName("wish")[0];
	
	aakuWriter(text, "You are an amazing girl that every man wishes to have in their life—beautiful, kind, and truly one of a kind. Your smile lights up every room, and your presence is a blessing. May your day be filled with love, joy, and all your heart desires.Enjoy your special day, Queen! You deserve the world and more.✨❤️");
	
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

