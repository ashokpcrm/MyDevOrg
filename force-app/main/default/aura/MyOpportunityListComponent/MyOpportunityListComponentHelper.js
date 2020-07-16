({
	fetchOppHelper : function(searchVal,component) {

        //helper class to fetch opportunity information from controller
        component.set("v.columnsToDisplay",[
            {label:"Opportunity Name", fieldName: "Name", type:"String"},
            {label:"Account Id", fieldName: "AccountId", type:"Id"},
            {label:"Closed Date", fieldName: "CloseDate", type:"date"},
            {label:"Amount", fieldName: "Amount", type:"currency", cellAttributes: { alignment: 'left' }}
        ]);
        //create action
        var action = component.get("c.fetchOpportunity");
        console.log('test');
        console.log('helper check-'+searchVal);
        action.setParams({
            "searchKeyword" : searchVal
        });
           //calling server side method
            action.setCallback(this, function(response) {
			var state = response.getState();
            if (state === "SUCCESS") {
            component.set("v.lstOpportunity",response.getReturnValue());
        }else {
            alert("Error accoured while fetching the data");
        }           
        });
        $A.enqueueAction(action);
    }
})