/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { policies } from '../../models/policies.model';
import { services } from '../../models/services.model';


@Injectable()
export class operationsService {
    policies: policies;
    services: services;
    displayer = "/operations";

    BtnRoutes = [
        {
            name: "Apply Leave",
            link: this.displayer + "/applyleave"
        },
        {
            name: "Other Services",
            link: this.displayer + "/operation"
        },
        {
            name: "Emergency Contacts",
            link: this.displayer + "/emergencies"
        },
        {
            name: "HR",
            link: this.displayer + "/policies"
        },
        {
            name: "Contact HR",
            link: this.displayer + "/contacthr"
        }
    ]
}
