public with sharing class truckDriverBooking {
    @AuraEnabled(cacheable=true)
    public static List<Truck_Booking__c> getBookingsForDriver() {
        List<Truck_Booking__c> l= [SELECT Id,Name FROM Truck_Booking__c WHERE
                                     Your_Driver__c=:UserInfo.getUserId()];
        return l;
    }
    @AuraEnabled(cacheable=true)
    public static List<Truck_Load__c> getLoads(String bid){
        List<Truck_Load__c> l= [SELECT Id,Name FROM Truck_Load__c
                                 WHERE Truck_Booking__c IN (:bid)];
        return l;
    }
}

//(SELECT Id FROM Truck_Booking__c WHERE Id=:bid)