const horrorlist = document.getElementById("horror-list");
const actionlist = document.getElementById("action-list");
const comedylist = document.getElementById("comedy-list");
const container1 = horrorlist || document.body;
const container2 = actionlist || document.body;
const container3 = comedylist || document.body;

for(let i = 0 ; i < horrormovies.length ; i++){
   // console.log(horrormovies[i].title);

    const maindiv = document.createElement('div');
    maindiv.classList.add('movie-grid');
    
    const logodiv = document.createElement('div');
    logodiv.classList.add('logoM');
    logodiv.textContent = horrormovies[i].title
    
    const title = document.createElement('p');
    title.id = 'tittle';
    title.textContent = horrormovies[i].title;
    
    const infodiv = document.createElement('div');
    infodiv.classList.add('info');
    
    const year = document.createElement('p');
    year.id = 'year';
    year.textContent = horrormovies[i].year;
    
    const rate = document.createElement('p');
    rate.id = 'rate';
    rate.textContent = horrormovies[i].imdb;
    
    infodiv.appendChild(year);
    infodiv.appendChild(rate);

    maindiv.appendChild(logodiv);
    maindiv.appendChild(title);
    maindiv.appendChild(infodiv);

    container1.appendChild(maindiv);
}

for(let i = 0 ; i < actionmovies.length ; i++){
   // console.log(actionmovies[i].title);

    const maindiv = document.createElement('div');
    maindiv.classList.add('movie-grid');
    
    const logodiv = document.createElement('div');
    logodiv.classList.add('logoM');
    logodiv.textContent = actionmovies[i].title
    
    const title = document.createElement('p');
    title.id = 'tittle';
    title.textContent = actionmovies[i].title;
    
    const infodiv = document.createElement('div');
    infodiv.classList.add('info');
    
    const year = document.createElement('p');
    year.id = 'year';
    year.textContent = actionmovies[i].year;
    
    const rate = document.createElement('p');
    rate.id = 'rate';
    rate.textContent = actionmovies[i].imdb;
    
    infodiv.appendChild(year);
    infodiv.appendChild(rate);

    maindiv.appendChild(logodiv);
    maindiv.appendChild(title);
    maindiv.appendChild(infodiv);

    container2.appendChild(maindiv);
}

for(let i = 0 ; i < comedymovies.length ; i++){
   // console.log(comedymovies[i].title);

    const maindiv = document.createElement('div');
    maindiv.classList.add('movie-grid');
    
    const logodiv = document.createElement('div');
    logodiv.classList.add('logoM');
    logodiv.textContent = comedymovies[i].title
    
    const title = document.createElement('p');
    title.id = 'tittle';
    title.textContent = comedymovies[i].title;
    
    const infodiv = document.createElement('div');
    infodiv.classList.add('info');
    
    const year = document.createElement('p');
    year.id = 'year';
    year.textContent = comedymovies[i].year;
    
    const rate = document.createElement('p');
    rate.id = 'rate';
    rate.textContent = comedymovies[i].imdb;
    
    infodiv.appendChild(year);
    infodiv.appendChild(rate);

    maindiv.appendChild(logodiv);
    maindiv.appendChild(title);
    maindiv.appendChild(infodiv);

    container3.appendChild(maindiv);
}

