//test comment
public with sharing class MyAccContactController {
//get the list of Contacts bases on the account
    @AuraEnabled
    public static List<contact> getRelatedContacts(Id searchKeyword){

        List<contact> contactList = new List<contact>();
    
    contactList = [Select Name,Phone, CreatedDate FROM Contact 
                 WHERE AccountId =:searchKeyword ORDER BY CreatedDate DESC LIMIT 10];
        system.debug('recordid is='+searchKeyword);
        system.debug('contactList is '+contactList);
        return contactList;
        
            }
}
