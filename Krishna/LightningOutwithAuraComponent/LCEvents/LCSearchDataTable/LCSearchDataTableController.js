({
	doInit: function(component, event, helper) {
        var action = component.get('c.getAccounts');
        var self = this;
        action.setCallback(this, function(actionResult) {
         component.set('v.accounts', actionResult.getReturnValue());
         component.set("v.unfilteraccounts", actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    },
    filterData: function(component, event, helper){
        var searchacc = event.getParam("searchKeyword");
        helper.filterAccounts(component, event, helper,searchacc);
	 /* var action = component.get("c.findByName");
        action.setParams({
            "searchKey": searchacc
        });
        action.setCallback(this, function(a) {
            component.set("v.accounts", a.getReturnValue());
        });
        $A.enqueueAction(action);*/
     }

    
})