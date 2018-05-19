const insultDom = (insults) => {
  let insultString = '';
  insults.forEach((insult) => {
    insultString += `<div class="jumbotron">`;
    insultString += `<h1>${insult.text}</h1>`;
    insultString += `</div>`;
  });
  $('#output-insults').append(insultString);
};

module.exports = insultDom;
