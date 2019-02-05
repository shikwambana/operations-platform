/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { policiesService } from '../../services/policies/policies.service';
import { policies } from "../../models/policies.model";
import { Router } from '@angular/router';

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-policies',
    templateUrl: './policies.template.html'
})

export class policiesComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    policy: policies;

    // policy = [
    // {"_id": "5c532e989dc2041314a83cc7", title: "ALLOWANCE salary", 
    // "content": "Policy It is the policy of Neutrinos to reimburse … expenses that are inconsistent with this policy.", 
    // "acknowledgement": false, 
    // "category": "TRAVEL AND ENTERTAINMENT POLICY"}];
    

    constructor(private bdms: NDataModelService, public PoliciesService : policiesService, private router: Router) {
        super();
        this.mm = new ModelMethods(bdms);
        // this.selectedPolicy = new policies();

    }

    ngOnInit() {
        this.get('policies');
    }
    

    viewPolicy(policy){
        console.log(policy);
        this.PoliciesService.setSelectedPolicy(policy);
        this.router.navigate(['/human-resource/policy']);
    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
                console.log(result);
                if (dataModelName == 'policies') {
                    this.policy = result;
                }
                // if (dataModelName == 'categories') {
                //     this.categories = result;
                // }

            },
            error => {
                console.log(error);
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete (dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
