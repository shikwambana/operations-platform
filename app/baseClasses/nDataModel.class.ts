import { user } from '../src/app/models/user.model';
import { policies } from '../src/app/models/policies.model';
import { categories } from '../src/app/models/categories.model';
import { visa } from '../src/app/models/visa.model';
import { services } from '../src/app/models/services.model';
import { guesthouse } from '../src/app/models/guesthouse.model';
import { leaverequest } from '../src/app/models/leaverequest.model';
import { transport } from '../src/app/models/transport.model';
import { flight } from '../src/app/models/flight.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
policies: policies;
categories: categories;
visa: visa;
services: services;
guesthouse: guesthouse;
leaverequest: leaverequest;
transport: transport;
flight: flight;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.policies = new policies();
this.categories = new categories();
this.visa = new visa();
this.services = new services();
this.guesthouse = new guesthouse();
this.leaverequest = new leaverequest();
this.transport = new transport();
this.flight = new flight();
//CREATE NEW DM INSTANCE
    }
}