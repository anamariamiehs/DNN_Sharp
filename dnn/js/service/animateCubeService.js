dnnApp.service('animateCubeService', function() {
    this.keyCode = null;
    this.getKeyCode = function() {
        return this.keyCode;
    };
    this.setKeyCode = function(kc) {
        this.keyCode = kc;
        return this.keyCode;
    };
  });