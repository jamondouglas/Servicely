var ServiceManager = new Marionette.Application();

ServiceManager.addRegions({
  mainRegion: "#main-region"
});

ServiceManager.navigate = function(route, options){
  options || (options = {});
  Backbone.history.navigate(route,options);
};


ServiceManager.getCurrentRoute = function(){
  return Backbone.history.fragment;
};



ServiceManager.on("initialize:after", function() {
  if(Backbone.history){
    Backbone.history.start();

    if(this.getCurrentRoute()===""){
     ServiceManager.trigger("providers:list");
    }
    
  }
});

/*ContactManager.addRegions({
  mainRegion: "#main-region"
});

ContactManager.navigate = function(route, options) {
  options || (options = {});
  Backbone.history.navigate(route, options);
};

ContactManager.getCurrentRoute = function() {
  return Backbone.history.fragment
};

ContactManager.on("initialize:after", function() {
  if (Backbone.history) {
    Backbone.history.start();

    if (this.getCurrentRoute() === "") {
      ContactManager.trigger("contacts:list");
    }
  }
});*/