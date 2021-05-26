public with sharing class TruckRec {
    @AuraEnabled(cacheable=true)
    public static List<Trucks__c> getTrucks() {
        return [SELECT Id,Name,Availability_Status__c,Fixed_Charge__c,Maximum_Load_Capacity__c,Truck_Image__c FROM Trucks__c ORDER BY Name asc];
    }
}
