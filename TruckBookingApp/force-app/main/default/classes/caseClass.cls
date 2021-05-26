public with sharing class caseClass {
    @AuraEnabled
    public static Case createCase(String bid,String val) {
        Case c=new Case(Origin='Web',Status='New',Description=val);
        insert c;
        return c;
    }

    @AuraEnabled(cacheable=true)
    public static List<Case> getCases(){
        return [SELECT Id,CaseNumber FROM Case WHERE CreatedById=:UserInfo.getUserId()
        ORDER BY CaseNumber DESC];
    }
}
