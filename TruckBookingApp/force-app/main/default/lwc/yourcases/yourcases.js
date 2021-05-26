import { LightningElement, wire } from 'lwc';

import name from '@salesforce/schema/Case.CaseNumber';
import status from '@salesforce/schema/Case.Status';
import description from '@salesforce/schema/Case.Description';

import getCases from '@salesforce/apex/caseClass.getCases';
export default class Yourcases extends LightningElement {

    @wire(getCases) cases;

    fields=[status,description];

}