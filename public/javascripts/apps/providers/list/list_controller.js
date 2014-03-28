ServiceManager.module("ProvidersApp.List", function(List, ServiceManager, Backbone, Marionette, $, _) {
		List.Controller = {

			listProviders: function() {
				var fetchingProviders = ServiceManager.request("provider:entities");

				var providersListLayout = new List.Layout();
				var providersListPanel = new List.Panel();

				$.when(fetchingProviders).done(function(providers) {
					var providersListView = new List.Providers({
						collection: providers
					});
					
					providersListPanel.on("providers:filter",function(searchCriteria){
						console.log("filter list with criterion: "+searchCriteria);
					});
					providersListLayout.on("show",function(){
						providersListLayout.searchRegion.show(providersListPanel);
						providersListLayout.providersRegion.show(providersListView);
					});

					providersListView.on("itemview:provider:delete", function(childView, model) {
						model.destroy();
					});
					providersListView.on("itemview:provider:show", function(childView, model) {
						ServiceManager.trigger("provider:show", model.get("id"));
					});

					ServiceManager.mainRegion.show(providersListLayout);
				});
			}
		};
});