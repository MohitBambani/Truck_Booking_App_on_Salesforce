import { LightningElement,wire } from 'lwc';
import getBookingsForDriver from '@salesforce/apex/truckDriverBooking.getBookingsForDriver';
export default class DriverUI extends LightningElement {

    @wire(getBookingsForDriver)
    bookings;
}