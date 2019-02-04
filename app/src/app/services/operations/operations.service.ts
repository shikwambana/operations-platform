/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { policies } from '../../models/policies.model';
import { services } from '../../models/services.model';


@Injectable()
export class operationsService {
    policies: policies;
    services: services;
    searchFilter= [];

//    combineData(){
//        for(let i =0; i < this.policies.length; i++ ){
//            this.searchFilter.push(this.policies[i]);
//        }
//        for(let i =0; i < this.services.length; i++ ){
//            this.searchFilter.push(this.policies[i]);
//        }

//     console.log(this.searchFilter);

//    }
}
