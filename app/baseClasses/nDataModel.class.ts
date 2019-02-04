import { user } from '../src/app/models/user.model';
import { policies } from '../src/app/models/policies.model';
import { categories } from '../src/app/models/categories.model';
import { visa } from '../src/app/models/visa.model';
import { employees } from '../src/app/models/employees.model';
import { leaves } from '../src/app/models/leaves.model';
import { leaverequest } from '../src/app/models/leaverequest.model';
import { employee } from '../src/app/models/employee.model';
import { staff } from '../src/app/models/staff.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
policies: policies;
categories: categories;
visa: visa;
employees: employees;
leaves: leaves;
leaverequest: leaverequest;
employee: employee;
staff: staff;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.policies = new policies();
this.categories = new categories();
this.visa = new visa();
this.employees = new employees();
this.leaves = new leaves();
this.leaverequest = new leaverequest();
this.employee = new employee();
this.staff = new staff();
//CREATE NEW DM INSTANCE
    }
}