/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { policies } from "../../models/policies.model"

@Injectable()
export class policiesService {
selectedPolicy: policies;
policies: policies;

    setSelectedPolicy(policy){
        this.selectedPolicy = policy;
    }

    getSelectedPolicy(){
        console.log(this.selectedPolicy);
        return this.selectedPolicy;
    }

    getPolicies(){
        return this.policies;
    }
}
