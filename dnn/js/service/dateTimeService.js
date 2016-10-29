dnnApp.service('dateTimeService', function() {
    this.datetime = new Date();
    this.getDateTime = function() {
        return this.datetime;
    };
    this.setDateTime = function(dt) {
        this.datetime = dt;
        return this.datetime;
    };
  });