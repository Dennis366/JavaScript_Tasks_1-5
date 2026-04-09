class Flower {
  constructor(type, color, amount, inStore) {
    this.type = type;
    this.color = color;
    this.amount = amount;
    this.inStore = inStore; 
  }

  
  changeColor(newColor) {
    this.color = newColor;
  }

  
  changeAmount(newAmount) {
    this.amount = newAmount;
  }

  
  changeInStore(status) {
    this.inStore = status;
  }

  
  toString() {
    return `Flower { Type: '${this.type}', Color: '${this.color}', Amount: ${this.amount}, inStore: ${this.inStore ? "Yes" : "No"} }`;
  }
}


let myFlower = new Flower("Rose", "Red", 5, true);
console.log("After created:", myFlower.toString());


myFlower.changeColor("Yellow");
myFlower.changeAmount(3);
myFlower.changeInStore(false);

console.log("After changed:", myFlower.toString());