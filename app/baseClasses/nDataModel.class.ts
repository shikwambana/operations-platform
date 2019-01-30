import { user } from '../src/app/models/user.model';
import { policies } from '../src/app/models/policies.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
policies: policies;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.policies = new policies();
//CREATE NEW DM INSTANCE
    }
}