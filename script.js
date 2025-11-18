const horrormovies = [
    {id: 1,title: "The Conjuring",year: 2013,imdb: 7.5,review: "A tense haunted-house story with strong atmosphere and real scares."
},
    {id: 2,title: "Hereditary",year: 2018,imdb: 7.3,review: "Psychological horror that is disturbing, emotional, and deeply unsettling."
},
    {id: 3,title: "Insidious",year: 2010,imdb: 6.8,review: "A supernatural tale with creepy visuals, eerie sound design, and rising suspense."
}
]

const horrorlist = document.getElementById("horror-list");
const actionlist = document.getElementById("action-list");
const comedylist = document.getElementById("comedy-list");

for(let i = 0 ; i < horrormovies.length ; i++){
    console.log(horrormovies[i].title);
}