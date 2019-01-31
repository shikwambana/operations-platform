import { user } from '../src/app/models/user.model';
import { policies } from '../src/app/models/policies.model';
import { categories } from '../src/app/models/categories.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
policies: policies;
categories: categories;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.policies = new policies();
this.categories = new categories();
//CREATE NEW DM INSTANCE
    }
}