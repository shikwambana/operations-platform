/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { policies } from '../../models/policies.model';


@Injectable()
export class operationsService {
    policies: policies;
    displayer = "/operations";

    BtnRoutes = [
        {
            name: "Operations",
            link: this.displayer
        },
        {
            name: "HR",
            link: "/admin"
        },
        {
            name: "Apply Leave",
            link: this.displayer + "/admin/applyleave"
        },
        {
            name: "Contact HR",
            link: this.displayer + "/admin/contacthr"
        },
        {
            name: "Emergency Contacts",
            link: this.displayer + "/emergencies"
        }
    ]
}
