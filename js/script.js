/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// these are my quotes 
const quotes = [
  {
      quote: 'ITS ABOUT DAMN TIME',
      source: 'LeBron James',
      year: 2012,
      citation: 'ESPN'
  },
  {
      quote:'LISTEN UHH FOR ME I CANT WORRY ABOUT WHAT EVERYBODY SAY ABOUT ME. IM LEBRON JAMES FROM AKRON, OHIO. FROM THE INNER CITY. IM NOT EVEN SUPPOSE TO BE HERE',
      source: 'LeBron James',
      year: 2013,
      citation: 'ESPN'
  },
  {
      quote: 'REBOUND TAKEN  BY IGUDOLALA, IGUDOLALA TO CURRY, BACK TO IGUDOLALA, UP FOR THE LAYUP, OHHHHHHHHHHH BLOCKED BY JAMES',
      source:'Mike Breen',
      year: 2016,
      citation: 'ESPN'

  },
  {
      quote: 'CLEVELAND, THIS IS FOR YOU',
      source:'LeBron James',
      year: 2016,
      citation:'ESPN'
  },
  {
      quote: 'WE JUST WANT OUR RESPECT, ROB WANTS HIS RESPECT, COACH VOGEL WANTS HIS RESPECT, ORGANZATIONS WANTS THERE RESPECT, LAKER NATION WANTS THERE RESPECT, AND I WANT MY DAMN RESPECT TOO',
      source:'LeBron James',
      year: 2020,
      citation:'ESPN'
    }
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {
  // trying to generate a random number them between 0-4
 let random = Math.floor(Math.random() * 5)
  // use that number to grab an object from my array
 return array[random]

}


/***
 * `printQuote` function
***/
function printQuote() {
    // this function is suppose to put the quote and source on the page
  let randomQuote = getRandomQuote(quotes)
  let something = document.getElementById('quote-box')
  let html = `<p class="quote">${randomQuote.quote}</p>  <p class="source">${randomQuote.source}<span class="citation">${randomQuote.citation}</span><span class="year">${randomQuote.year}</span></p>`
  return something.innerHTML = html
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);