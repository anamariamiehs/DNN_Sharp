dnnApp.service('animateCubeService', function() {
    //TODO: Clean this mess up after you figure out how the cell you rotate the cube
    this.keyCode = null;
    this.route = '/';
    this.prevRoute = '/';
    this.className = "show-front";
    this.prevClassName = "";

    this.getKeyCode = function() {
        return this.keyCode;
    };
    this.setKeyCode = function(kc) {
        this.keyCode = kc;
        return this.keyCode;
    };

    this.getRoute = function() {
        return this.route;
    };

    this.getPrevRoute = function() {
        return this.prevRoute;
    };

    this.setRoute = function(r) {
        this.prevRoute = this.route;
        this.route = r;
        return this.route;
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