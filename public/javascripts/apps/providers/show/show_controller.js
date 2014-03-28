ServiceManager.module('ProvidersApp.Show', function(Show, ServiceManager, Backbone, Marionette, $, _) {

	Show.Controller = {
		showProvider: function(id) {
			var fetchingProvider = ServiceManager.request("provider:entity", id);
			$.when(fetchingProvider).done(function(provider) {
				var providerView;
				if (provider !== undefined) {
					providerView = new Show.Provider({
						model: provider
					});
					providerView.on("provider:edit",function(provider){
						ServiceManager.trigger("provider:edit",provider.get("id"));
					});
				} else {
					providerView = new Show.MissingProvider();
				}

				ServiceManager.mainRegion.show(providerView);
			});
		}
	};
});