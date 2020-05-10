function f(arr){
    let book = {};

    for(let el of arr){
        let tokens = el.split(' -> ');
        let team = tokens[0];
		    let pilot = tokens[1];
        let points = +tokens[2];

        if(!book.hasOwnProperty(team)){
           book[team]={
				totalPoints: 0,
				pilots: {}
    		};
		}

		if(!book[team]["pilots"].hasOwnProperty(pilot))
			book[team]["pilots"][pilot]=0;
        book[team]["pilots"][pilot]+=points;
        book[team]["totalPoints"]+=points;
    }

    let winners = Object.entries(book).sort((a,b)=>b[1]["totalPoints"] - a[1]["totalPoints"]).slice(0,3);

	for(let winnerTeam of winners){
		console.log(`${winnerTeam[0]}: ${winnerTeam[1]["totalPoints"]}`);
		let sorted = Object.entries(winnerTeam[1]["pilots"]).sort((a,b)=> b[1]-a[1]);


	for(let pil of sorted)
		console.log(`-- ${pil[0]} -> ${pil[1]}`);
    }
}
