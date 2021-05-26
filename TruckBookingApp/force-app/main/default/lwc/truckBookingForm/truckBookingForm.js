import { api, LightningElement,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';



export default class TruckBookingForm extends LightningElement {

    @track name;

    @track truck;

    @api
    changeName(parameters){
        this.name=parameters.name;
        this.truck=parameters.truck.Id;
    }
    successEvent(event){
        var successToast=new ShowToastEvent({
            title:"Success",
            message:"Your truck booking has been created successfully!\n See the first active booking in Bookings!!",
            variant:"success",
            mode:"pester"
        });
        this.dispatchEvent(successToast);
        window.location.replace('https://mohitbam-dev-ed.lightning.force.com/lightning/n/Bookings');
    }
    errorEvent(event){
        var errorToast=new ShowToastEvent({
            title:"Error",
            message:"The selected truck is not available for booking!",
            variant:"error",
            mode:"pester"
        });
        this.dispatchEvent(errorToast);
    }
}