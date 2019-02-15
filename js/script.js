/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//array of quotes
var quotes = [
  {quote: "There is nothing permanent except change.", source: "Heraclitus", year:"between 535 – 475 BC", citation:"Greece"},
  {quote: "Learning never exhausts the mind.", source: "Leonardo da Vinci"},
  {quote: "The journey of a thousand miles begins with one step.", source: "Lao Tzu", year: "600 BC"},
  {quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", source: "Benjamin Franklin"},
  {quote: "I have not failed. I've just found 10,000 ways that won't work.", source: "Thomas A. Edison"},
  {quote: "The secret of getting ahead is getting started.", source: "Mark Twain"},
  {quote: "All our dreams can come true, if we have the courage to pursue them.", source: "Walt Disney"},
  {quote: "It's not what you look at that matters, it's what you see.", source: "Henry David Thoreau"},
  {quote: "Friends show their love in times of trouble, not in happiness.", source: "Euripides"},
  {quote: "The only true wisdom is in knowing you know nothing.", source: "Socrates"},
  {quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", source: "Winston Churchill"},
  {quote: "Life isn't about finding yourself. Life is about creating yourself.", source: "George Bernard Shaw"},
  {quote: "Believe you can and you're halfway there.", source: "Theodore Roosevelt"},
  {quote: "Education is the most powerful weapon which you can use to change the world.", source: "Nelson Mandela"},
  {quote: "In three words I can sum up everything I've learned about life: it goes on.", source: "Robert Frost"},
];


//generates a random number and selects a quote with the particular index
function getRandomQuote(quotes) {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return (quotes[randomNumber]);
}


//creates html string for the selected quote
function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  var htmlString;
  htmlString = "<p class='quote'>" + randomQuote.quote + "</p>";
  htmlString += "<p class='source'>" + randomQuote.source;

  //adds optional citation to the html string
  if(randomQuote.citation) {
    htmlString += "<span class='citation'>" + randomQuote.citation + "</span>";
  }

  //adds optional year to the html string
  if(randomQuote.year) {
    htmlString += "<span class='year'>" + randomQuote.year + "</span>";
  }
  htmlString += "</p>";

  var div = document.getElementById("quote-box");
  div.innerHTML=htmlString;
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
