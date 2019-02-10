"use strict";
function throughOnce(fn) {
  let status = false;
  return  (text) => {
    status = !status;
    return status ? fn(text) : console.log(' ');
  };
}
var logThroughOnce = throughOnce(function(text) {
  console.log(text);
});

logThroughOnce("Hello World!");
logThroughOnce("Hello World!");
logThroughOnce("Hello World!", 'asdgfkhagsdf', 'adsfgasdhf', 'ahfkhavskdfh');
logThroughOnce("Privet");
