import { LightningElement, wire, track } from 'lwc';
import getDonePayments from '@salesforce/apex/payments.getDonePayments';
import paymode from '@salesforce/schema/Truck_Booking_Payment__c.Mode_of_Payment__c';
import paydate from '@salesforce/schema/Truck_Booking_Payment__c.Payment_Date__c';
import name from '@salesforce/schema/Truck_Booking_Payment__c.Name';
import paystatus from '@salesforce/schema/Truck_Booking_Payment__c.No_Payment__c';
import truckBooking from '@salesforce/schema/Truck_Booking_Payment__c.Truck_Booking__c';
export default class FinanceUiInactive extends LightningElement {

    @track payments;
    @track error;


    @track fields=[truckBooking,paystatus,paydate,paymode];

    @wire(getDonePayments)
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