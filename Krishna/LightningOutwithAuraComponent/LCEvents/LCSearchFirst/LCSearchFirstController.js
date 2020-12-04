({
	searchKeyChange: function(component, event) {
        var searchKey = component.find("searchKey").get("v.value");
        var appEvent = $A.get("e.c:LCCommunication"); 
        //Set event attribute value
        appEvent.setParams({"searchKeyword" : searchKey}); 
        appEvent.fire(); 
        
    }
})