import { user } from '../src/app/models/user.model';
import { policies } from '../src/app/models/policies.model';
import { categories } from '../src/app/models/categories.model';
import { visa } from '../src/app/models/visa.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
policies: policies;
categories: categories;
visa: visa;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.policies = new policies();
this.categories = new categories();
this.visa = new visa();
//CREATE NEW DM INSTANCE
    }
}