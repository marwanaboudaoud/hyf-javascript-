let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
//[ 'blowfish', 'capricorn', 'giraffe', 'turtle' ]
favoriteAnimals.splice(1, 0, 'meerkat');
console.log(favoriteAnimals);
// [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]
console.log(`The array has a length of: ${favoriteAnimals.length}`)
//The array has a length of: 5
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
//[ 'blowfish', 'meerkat', 'capricorn', 'turtle' ]
console.log("The index of 'meerkat' element is :" + favoriteAnimals.indexOf('meerkat'));
//The index of 'meerkat' element is :1
