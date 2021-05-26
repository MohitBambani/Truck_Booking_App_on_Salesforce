import { LightningElement,api,track } from 'lwc';
import paymode from '@salesforce/schema/Truck_Booking_Payment__c.Mode_of_Payment__c';
import paydate from '@salesforce/schema/Truck_Booking_Payment__c.Payment_Date__c';
import name from '@salesforce/schema/Truck_Booking_Payment__c.Name';
import paystatus from '@salesforce/schema/Truck_Booking_Payment__c.No_Payment__c';
import truckBooking from '@salesforce/schema/Truck_Booking_Payment__c.Truck_Booking__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Payment extends LightningElement {

    @api mode='view';

    @api payment;

    @track fields=[truckBooking,paystatus,paydate,paymode];

    @track showRecord=false;

    handleClick(event){
        this.showRecord=!this.showRecord;
    }
    handleSuccess(event){
        var successToast=new ShowToastEvent({
            title:"Success",
            message:"Payment record has been updated!!",
            variant:"success",
            mode:"pester"
        });
        this.dispatchEvent(successToast);
        window.location.replace('https://mohitbam-dev-ed.lightning.force.com/lightning/n/Payments_Overview');
    }
}