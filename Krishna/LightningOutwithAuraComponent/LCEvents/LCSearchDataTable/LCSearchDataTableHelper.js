({
    filterAccounts : function(component, event, helper,searchacc) {
        var unfilteraccounts = component.get("v.unfilteraccounts");
        var accounts = component.get("v.accounts");
        if(accounts!=undefined || accounts.length>0){  
            // filter method create a new array tha pass the test (provided as function)  
            var filtereddata = unfilteraccounts.filter(word => (!searchacc) || word.Name.toLowerCase().indexOf(searchacc.toLowerCase()) > -1);  
        } 
        
        component.set("v.accounts", filtereddata);
        if(searchacc==''){  
            // set unfiltered data to data in the table.
            component.set("v.accounts",component.get("v.unfilteraccounts"));        
        } 
    }
})