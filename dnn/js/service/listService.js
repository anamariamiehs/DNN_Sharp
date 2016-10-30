dnnApp.service('listService', function() {
    this.data = null;
    this.getData = function() {
        return this.data;
    };
    this.setData = function(j) {
        this.json = j;
        return this.data;
    };
  });