ServiceManager.module("ProvidersApp.Edit", function(Edit,ServiceManager,Backbone,Marionette,$,_){
	Edit.Controller = {
		editProvider:function(id){
			var loadingView = new ServiceManager.Common.Views.Loading({
				title:"Articial loading delay",
				message:"Data loading is currently delayed."
			});
			ServiceManager.mainRegion.show(loadingView);

			var fetchingProvider = ServiceManager.request("provider:entity",id);
			$.when(fetchingProvider).done(function(provider){
				var view;
				if(provider !== undefined){
					view = new Edit.Provider({
						model:provider
					});
					view.on("form:submit",function(data){
						if(provider.save(data)){
							ServiceManager.trigger("provider:show",provider.get("id"));
						}else{
							view.triggerMethod("form:data:invalid",provider.validationError);
						}
					});
				}else{
					view = new ServiceManager.ProvidersApp.Show.MissingProvider();
				}
				ServiceManager.mainRegion.show(view);
			});
		}
	};
});