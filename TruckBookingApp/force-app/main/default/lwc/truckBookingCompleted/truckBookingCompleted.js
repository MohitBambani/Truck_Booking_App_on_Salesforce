import { LightningElement, wire } from 'lwc';
import getDoneTruckBookings from '@salesforce/apex/truckBookingClass.getDoneTruckBookings';
export default class TruckBookings extends LightningElement {

    @wire(getDoneTruckBookings)
    bookings;
}