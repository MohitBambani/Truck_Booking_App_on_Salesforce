import { LightningElement, api, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TruckUIChild extends LightningElement {

    @api truck;

    avail=false;

    @api get availableOrNot(){
        if(this.truck.Availability_Status__c==='Available'){
            this.avail=true;
        }
        else{
            this.avail=false;
        }
        return this.avail;
    }

   /* @track availableOrNot=false;

    connectedCallback(){
        if(this.truck.Availability_Status__c==='Available'){
            this.availableOrNot=true;
        }
    }*/

    handleClickEvent(event){
        //alert('I am clicked '+this.truck.Name);
        
        event.preventDefault();
        const eventforbooking=new CustomEvent("eventforbooking",{
            detail:{
                truckId:this.truck
            }
        });
        this.dispatchEvent(eventforbooking);
    }

}