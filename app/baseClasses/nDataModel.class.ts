import { user } from '../src/app/models/user.model';
import { policies } from '../src/app/models/policies.model';
import { categories } from '../src/app/models/categories.model';
import { visa } from '../src/app/models/visa.model';
import { services } from '../src/app/models/services.model';
import { guesthouse } from '../src/app/models/guesthouse.model';
import { transport } from '../src/app/models/transport.model';
import { flight } from '../src/app/models/flight.model';
import { operations } from '../src/app/models/operations.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
policies: policies;
categories: categories;
visa: visa;
services: services;
guesthouse: guesthouse;
transport: transport;
flight: flight;
operations: operations;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.policies = new policies();
this.categories = new categories();
this.visa = new visa();
this.services = new services();
this.guesthouse = new guesthouse();
this.transport = new transport();
this.flight = new flight();
this.operations = new operations();
//CREATE NEW DM INSTANCE
    }
}