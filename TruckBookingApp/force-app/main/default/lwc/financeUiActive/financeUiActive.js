import { LightningElement, wire, track } from 'lwc';
import getRemainingPayments from '@salesforce/apex/payments.getRemainingPayments';
import paymode from '@salesforce/schema/Truck_Booking_Payment__c.Mode_of_Payment__c';
import paydate from '@salesforce/schema/Truck_Booking_Payment__c.Payment_Date__c';
import name from '@salesforce/schema/Truck_Booking_Payment__c.Name';
import paystatus from '@salesforce/schema/Truck_Booking_Payment__c.No_Payment__c';
import truckBooking from '@salesforce/schema/Truck_Booking_Payment__c.Truck_Booking__c';
export default class FinanceUiActive extends LightningElement {


    @track fields=[truckBooking,paystatus,paydate,paymode];

    @track payments;
    @track error;

    @wire(getRemainingPayments)
    getPays({data,error}){
        if(data){
            this.payments=data;
            this.error=undefined;
        }
        else if(error){
            this.payments=undefined;
            this.error=error;
        }
    }

}






