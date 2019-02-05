/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { policiesService } from '../../services/policies/policies.service';
import { policies } from "../../models/policies.model"
import { Router } from '@angular/router';

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-editpolicy',
    templateUrl: './editpolicy.template.html'
})

export class editpolicyComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    selectedPolicy: policies;

    categories = [
        'RECRUITMENT AND SELECTION', 'RECRUITMENT AND SELECTION',
        "ETHICAL BEHAVIOUR", "EMPLOYMENT EQUITY", "FLEET POLICY",
        "FLEET POLICY"
    ];

    constructor(private bdms: NDataModelService, public PoliciesService : policiesService, private router: Router) {
        super();
        this.mm = new ModelMethods(bdms);
        this.selectedPolicy = new policies();

    }

    ngOnInit() {
      this.selectedPolicy =  this.PoliciesService.getSelectedPolicy();
      if(!this.selectedPolicy){
          this.router.navigate(['/human-resource/hr']);
      }
    }

    updatePolicy(){
        let id = this.selectedPolicy['_id'];
        this.updateById('policies',id,this.selectedPolicy);
        this.router.navigate(['/human-resource/hr']);

    }

     goBack(){
         this.router.navigate(['/human-resource/hr']);
    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
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
                console.log(result);
            }, error => {
                // Handle errors here
                console.log(error);
                
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
                console.log(result);
                
            }, error => {
                // Handle errors here
                console.log(error);
                
            })
    }


}
