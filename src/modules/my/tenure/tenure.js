import { LightningElement, api } from 'lwc';

export default class Header extends LightningElement {
    @api
    start;

    @api
    end = "Current";
}