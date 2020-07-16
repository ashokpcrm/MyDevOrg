public class MyOpportunityListController {
    //get the list of opportunities bases on the search value
    @AuraEnabled
    public static List<Opportunity> fetchOpportunity(String searchKeyword){
        List<opportunity> returnList = new List<opportunity>();
      //If the search value is null then return all opps.Else search accordingly
    String searchKey = string.isBlank(searchKeyword)?'%%' :searchKeyword + '%';
    
    returnList = [Select Id, Name, AccountId, CloseDate, Amount FROM Opportunity 
                 WHERE Name LIKE :searchKey LIMIT 15];
    return returnList;
         }
}