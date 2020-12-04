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
	 
     }

    
})