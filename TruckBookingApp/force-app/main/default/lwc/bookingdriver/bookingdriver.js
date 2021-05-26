import { api, LightningElement, track } from 'lwc';
import name from '@salesforce/schema/Truck_Booking__c.Name';
import createCases from '@salesforce/apex/caseClass.createCase';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import customerName from '@salesforce/schema/Truck_Booking__c.Customer_Name__c';
import destinationAddress from '@salesforce/schema/Truck_Booking__c.Destination_Address__c';
import destinationCity from '@salesforce/schema/Truck_Booking__c.Destination_City__c';
import destinationState from '@salesforce/schema/Truck_Booking__c.Drop_Location__c';
import pickupAddress from '@salesforce/schema/Truck_Booking__c.Pickup_Address__c';
import pickupCity from '@salesforce/schema/Truck_Booking__c.Pickup_City__c';
import pickupDate from '@salesforce/schema/Truck_Booking__c.Pickup_Date__c';
import pickupState from '@salesforce/schema/Truck_Booking__c.Pickup_Location__c';
import truck from '@salesforce/schema/Truck_Booking__c.Your_Truck__c';
import journeyStatus from '@salesforce/schema/Truck_Booking__c.Journey_Status__c';
import UserPreferencesApexPagesDeveloperMode from '@salesforce/schema/User.UserPreferencesApexPagesDeveloperMode';
export default class Bookingdriver extends LightningElement {

    

    @api booking;

    @track caseVisible=false;

    @api recordmode='view';

    @track val='';

    @track fields=[customerName,pickupAddress,destinationAddress,pickupCity,destinationCity,
        pickupState,destinationState,pickupDate,truck,journeyStatus];

    docase(event){
        this.caseVisible=!this.caseVisible;
    }

    changeVal(event){
        this.val=event.target.value;
    }
}