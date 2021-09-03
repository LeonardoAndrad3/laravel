
let supCache = 'caches' in window;
//se suporta serviceWork, ele suporta caches.

if(supCache){
    console.log("Caches aceitos");
    // Colocando no caches;
    caches.open('cache1')
    .then(meusCache =>{
        meusCache.add('https://swapi.dev/api/people/');
    });
    
} else {
    console.log("Caches não aceitos");
}
