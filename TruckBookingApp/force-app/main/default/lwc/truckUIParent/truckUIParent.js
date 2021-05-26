import { LightningElement,wire,api, track } from 'lwc';
import getTrucks from '@salesforce/apex/TruckRec.getTrucks';
export default class TruckUIParent extends LightningElement {

    
    @wire(getTrucks)
    trucks;
    @track showForm=false;

    @track message="This is when not clicked!!!!!!!!!!!!!!!";
    @track truckyy
    doBooking(event){
        
        var a=this.template.querySelector('c-truck-booking-form');
        a.changeName({'name':'','truck':event.detail.truckId});
        
    }
    
}