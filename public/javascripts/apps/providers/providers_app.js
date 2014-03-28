ServiceManager.module("ProvidersApp", function(ProvidersApp, ServiceManager, Backbone, Marionette, $, _) {
	ProvidersApp.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"providers": "listProviders",
			"providers/:id": "showProvider",
			"providers/:id/edit":"editProvider"
		}
	});
	var API = {
		listProviders: function() {
			ProvidersApp.List.Controller.listProviders();
		},

		showProvider:function(id){
			ProvidersApp.Show.Controller.showProvider(id);
		},
		editProvider:function(id){
			ProvidersApp.Edit.Controller.editProvider(id);
		}
	};

	ServiceManager.on("providers:list", function() {
		ServiceManager.navigate("providers");
		API.listProviders();
	});

	ServiceManager.on("provider:show",function(id){
		ServiceManager.navigate("providers/"+id);
		API.showProvider(id);
	});

	ServiceManager.on("provider:edit",function(id){
		ServiceManager.navigate("providers/"+id+"/edit");
		API.editProvider(id);
	});

	ServiceManager.addInitializer(function() {
		new ProvidersApp.Router({
			controller: API
		});
	});
});