import { user } from '../src/app/models/user.model';
import { policies } from '../src/app/models/policies.model';
import { categories } from '../src/app/models/categories.model';
import { visa } from '../src/app/models/visa.model';
import { services } from '../src/app/models/services.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
policies: policies;
categories: categories;
visa: visa;
services: services;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.policies = new policies();
this.categories = new categories();
this.visa = new visa();
this.services = new services();
//CREATE NEW DM INSTANCE
    }
}