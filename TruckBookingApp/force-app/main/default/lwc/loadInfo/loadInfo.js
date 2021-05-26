import { api, LightningElement, track, wire } from 'lwc';
import getLoads from '@salesforce/apex/truckDriverBooking.getLoads';
import name from '@salesforce/schema/Truck_Load__c.Name';
import loadedItems from '@salesforce/schema/Truck_Load__c.Loaded_Items__c';
import maxLoadCapacity from '@salesforce/schema/Truck_Load__c.Maximum_Load_Capacity__c';
import goodsLoaded from '@salesforce/schema/Truck_Load__c.Goods_Loaded__c';
export default class LoadInfo extends LightningElement {

    @api bkid;

    @track fields={name,goodsLoaded,loadedItems,maxLoadCapacity};

    @track truckLoads;
    @track error;

    @wire(getLoads,{bid:'$bkid'})
    getD({error,data}){
        console.log(this.bkid);
        if(data){
            this.truckLoads=data;
            this.error=undefined;
        }
        else if(error){
            this.truckLoads=undefined;
            this.error=error;
        }
        console.log(this.truckLoads);
    }

}