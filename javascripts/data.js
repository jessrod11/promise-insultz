const dom = require('./dom');

const descriptorsJson = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/descriptors.json')
      .done((data) => {
        resolve(data.descriptors);
      })
      .fail((err) => {
        reject('i screwed up', err);
      });
  });
};

const nounJson = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/nouns.json')
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject('i screwed up again', err);
      });
  });
};

const initializer = () => {
  descriptorsJson().then((resolvedData) => {
    dom(resolvedData);
  });
  nounJson().then((resolvedMoreData) => {
    dom(resolvedMoreData);
  }).catch((errorMsg) => {
    console.error(errorMsg);
  });
};

module.exports = initializer;
