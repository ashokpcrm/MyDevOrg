({
	fetchContactHelper : function(component, helper) {
        var action = component.get("c.getRelatedContacts");
        console.log('test');
        action.setParams({
            "searchKeyword" : component.get("v.recordId")
        });
       //   action.setParams({
       //   accountId:component.get("v.recordId")
      //  });
           //calling server side method
            action.setCallback(this, function(response) {
			var state = response.getState();
            if (state === "SUCCESS") {
                console.log('success'+response.getReturnValue());
                var result = response.getReturnValue();
                console.log(JSON.stringify(result));
            component.set("v.lstContact",response.getReturnValue());
        }else {
            alert("Error accoured while fetching the data");
        }           
        });
        $A.enqueueAction(action);
	
	}
})