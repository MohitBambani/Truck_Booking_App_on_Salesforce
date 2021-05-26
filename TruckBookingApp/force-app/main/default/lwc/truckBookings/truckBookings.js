import { LightningElement, wire } from 'lwc';
import getTruckBookings from '@salesforce/apex/truckBookingClass.getTruckBookings';
export default class TruckBookings extends LightningElement {

    @wire(getTruckBookings)
    bookings;
}