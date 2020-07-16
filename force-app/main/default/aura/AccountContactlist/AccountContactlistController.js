({
	doInit : function(component, event, helper) {
        component.set("v.columnsToDisplay",[
            {label:"Contact Name", fieldName: "Name", type:"string"},
            {label:"Created Date", fieldName: "CreatedDate", type:"date"},
            
        ]);
		helper.fetchContactHelper(component, helper);
    }
})