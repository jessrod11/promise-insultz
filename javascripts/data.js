// const dom = require('./dom');

let nouns = [];
let descriptors = [];

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

const nounsJson = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/nouns.json')
      .done((data) => {
        resolve(data.nouns);
      })
      .fail((err) => {
        reject('i screwed up again', err);
      });
  });
};

const getAllData = () => {
  // resolve promises - promiseAll (because the data is the same and will act the same)
  return Promise.all([nounsJson(), descriptorsJson(),])
    .then((results) => {
      // return results; // add breakpoint here to see what results is (same as console logging)
      nouns = results[0];
      descriptors = results[1];
    })
    .catch((errorMsg) => {
      console.error('what did you do, Stix', errorMsg);
    });
};

const getNouns = () => {
  return nouns[Math.floor(Math.random() * nouns.length)].text;
};

const getDescriptors = () => {
  return descriptors[Math.floor(Math.random() * descriptors.length)].text;
};

const initializer = () => {
  getAllData();
};

module.exports = {
  initializer,
  getNouns,
  getDescriptors,
};
