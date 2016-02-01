module.exports = function (options) {
  return new salesforceComponent(options);
};

function salesforceComponent(options) {

  options = options || {};

  this.start = function start() {
    console.log('salesforce component started ...');
  };

  this.stop = function () {

  };
}
