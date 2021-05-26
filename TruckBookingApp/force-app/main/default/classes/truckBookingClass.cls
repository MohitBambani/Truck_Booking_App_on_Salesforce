public with sharing class truckBookingClass {
    @AuraEnabled(cacheable=true)
    public static List<Truck_Booking__c> getTruckBookings() {
        return [SELECT Id,Name, Journey_Status__c FROM Truck_Booking__c 
        WHERE CreatedById=:UserInfo.getUserId() AND Journey_Status__c!='Completed Payment Done'
        ORDER BY Name desc];
    }
    @AuraEnabled(cacheable=true)
    public static List<Truck_Booking__c> getDoneTruckBookings(){
        return [SELECT Id,Name, Journey_Status__c FROM Truck_Booking__c 
        WHERE CreatedById=:UserInfo.getUserId() AND Journey_Status__c='Completed Payment Done'
        ORDER BY Name desc];
    }
}
