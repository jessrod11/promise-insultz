const insultDom = (word1 , word2, noun) => {
  let insultString = '';
  insultString += `<div class="jumbotron">`;
  insultString += `<h2 class="text-center">${word1} ${word2} ${noun}</h2>`;
  insultString += `<div>`;
  printToDom(insultString);
};

const printToDom = (insult) => {
  $('#output-insults').html(insult);
};

module.exports = {
  insultDom,
};
