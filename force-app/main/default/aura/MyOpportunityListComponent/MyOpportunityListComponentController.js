({
	doinit : function(component, event, helper) {
        var searchValue;
        helper.fetchOppHelper(searchValue, component);
	},
    searchOpportunities : function(component, event, helper) {
        var searchValue = component.find("searchField").get("v.value");
        console.log("user entered-",searchValue);
		helper.fetchOppHelper(searchValue, component);
	}
})