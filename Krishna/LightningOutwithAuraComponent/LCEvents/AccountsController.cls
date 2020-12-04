public class AccountsController {
    @AuraEnabled
      public static List <Account> getAccounts() {
        return [SELECT Id, name, Type, Phone FROM Account ORDER BY CreatedDate DESC];
      }
}