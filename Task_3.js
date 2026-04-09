const animals = ["Dog", "Horse", "Cow"];
console.log("Array: ", animals);
console.log("ArrayStr: ", animals.toString()); 


let newAnimals = animals.map(item => item); 
newAnimals.push("Cat", "Sheep"); 
console.log("New array: ", newAnimals);


let searchWord = "Cow";
if (newAnimals.includes(searchWord)) {
  console.log("Search result: ", searchWord + ", Founded");
} else {
  console.log("Search result: ", searchWord + ", Not founded");
}


searchWord = "CowS";
if (newAnimals.includes(searchWord)) {
  console.log("Search result: ", searchWord + ", Founded");
} else {
  console.log("Search result: ", searchWord + ", Not founded");
}