const insultDom = (word1 , word2, noun) => {
  let insultString = '';
  insultString += `<div class="jumbotron">`;
  insultString += `<h3>${word1} ${word2} ${noun}</h3>`;
  insultString += `<div>`;
  printToDom(insultString);
};

const printToDom = (insult) => {
  $('#output-insults').html(insult);
};

module.exports = {
  insultDom,
};
