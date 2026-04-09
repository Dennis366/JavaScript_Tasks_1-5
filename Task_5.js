const now = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = days[now.getDay()]; 


const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0"); 
const day = String(now.getDate()).padStart(2, "0");

const formattedDate = `${year}-${month}-${day}`;


console.log("Date: ", `${dayName} ${formattedDate}`);