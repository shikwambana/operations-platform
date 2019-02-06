/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { policies } from '../../models/policies.model';


@Injectable()
export class operationsService {
    policies: policies;

    BtnRoutes = [
        {
            name: "Operations",
            link: "/operations"
        },
        {
            name: "HR",
            link: "/admin"
        },
        {
            name: "Apply Leave",
            link: "/leave/applyleave"
        },
        {
            name: "Contact HR",
            link: "/admin/contacthr"
        },
        {
            name: "Emergency Contacts",
            link: "/operations/emergencies"
        }
    ]
}
