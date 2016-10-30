dnnApp.service('animateCubeService', function() {
    this.keyCode = null;
    this.className = "show-front";
    this.prevClassName = "";

    this.getKeyCode = function() {
        return this.keyCode;
    };
    this.setKeyCode = function(kc) {
        this.keyCode = kc;
        return this.keyCode;
    };

    this.getClassName = function() {
        return this.className;
    };

    this.setClassName = function(kc) {
        this.prevClassName = this.className;
        this.className = kc;
        return this.className;
    };

    this.getPrevClassName = function() {
        return this.prevClassName;
    };
  });