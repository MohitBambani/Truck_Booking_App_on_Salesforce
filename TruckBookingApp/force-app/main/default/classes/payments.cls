public with sharing class payments {
    @AuraEnabled(cacheable=true)
    public static List<Truck_Booking_Payment__c> getRemainingPayments() {
        return [SELECT Id, Name, Truck_Booking__c,No_Payment__c FROM Truck_Booking_Payment__c WHERE No_Payment__c='No Payment'
        ORDER BY Name DESC];
    }
    @AuraEnabled(cacheable=true)
    public static List<Truck_Booking_Payment__c> getDonePayments(){
        return [SELECT Id, Name, Truck_Booking__c, No_Payment__c FROM Truck_Booking_Payment__c WHERE No_Payment__c='Payment Done'
        ORDER BY Name DESC];
    }
}
