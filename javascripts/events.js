const dom = require('./dom');
const data = require('./data');

$('#rude').click(() => {
  // build domString
  dom.insultDom(data.getDescriptors(), data.getDescriptors(), data.getNouns());
});
