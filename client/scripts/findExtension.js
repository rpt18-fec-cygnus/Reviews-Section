const findExtension = function(url) {
  // var url = "/restaurant/2/";
  urlArr = url.split('/');
  return urlArr[urlArr.length-2];

  // let extension = '';

  // if (url[url.length - 1] === '/') {
  //   url = url.slice(0, url.length - 1);
  // }
  // let a = Number(url[url.length - 3]);
  // let b = Number(url[url.length - 2]);
  // let c = Number(url[url.length - 1]);

  // if (typeof a === 'number' && a !== 0) {
  //   extension += a;
  // }

  // if (typeof b === 'number') {
  //   if (a !== 0 || b !== 0) {
  //     extension += b;
  //   }
  // }

  // extension += c;
  // return extension;
};

// //test
// console.log(findExtension('something'));

module.exports = findExtension;
