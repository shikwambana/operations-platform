/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

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

    Content = [
        "ALLOWANCE",
        "JOB_RECRUITMENT",
        "APPOINTMENT_POLICY",
        "STAFF_INDUCTION",
        "ETHICAL_BEHAVIOUR",
        "DISCIPLINARY_PROCEDURE",
        "SUSPENSION_POLICY",
        "CODE_OF_CONTENT",
        "GRIEVANCE_PROCEDURE",
        "SEXUAL_HARASSMENT",
        "EMPLOYMENT_WELLNESS",
        "EMPLOYEE_DOCUMENT",
        "TERMINATION",
        "OVERTIME",
        "LEAVE_POLICIES",
        "OCCUPATIONAL",
        "VEHICLEPOLICY",
        "SMOKING",
        "TRAINING_DEVELOPMENT",
        "STUDYLOAN"
    ]

    // Contents = [
    //     {"title" : "Hellow", 
    //     "content": "feebeubbiwiuwiuv cibvivwrivvwr vsdibvs vsfiuvcfs",
    //     "acknowledgement" : true,
    //     "category" : "Greeting policy"},

    //    {"title" : "how are you", 
    //     "content": "feebeubbiwiuwiuv cibvivwrivvwr vsdibvs vsfiuvcfs",
    //     "acknowledgement" : true,
    //     "category" : "Greeting policy"},

    //    {"title" : "are you good", 
    //     "content": "feebeubbiwiuwiuv cibvivwrivvwr vsdibvs vsfiuvcfs",
    //     "acknowledgement" : true,
    //     "category" : "Greeting policy"},

    //    {"title" : "hahaha", 
    //     "content": "feebeubbiwiuwiuv cibvivwrivvwr vsdibvs vsfiuvcfs",
    //     "acknowledgement" : true,
    //     "category" : "Greeting policy"},

        
    // ]
    // link = [
    //     "ALLOWANCE",
    //     "JOB_RECRUITMENT",
    //     "APPOINTMENT_POLICY",
    //     "STAFF_INDUCTION",
    //     "ETHICAL_BEHAVIOUR",
    //     "DISCIPLINARY_PROCEDURE",
    //     "SUSPENSION_POLICY",
    //     "CODE_OF_CONTENT",
    //     "GRIEVANCE_PROCEDURE",
    //     "SEXUAL_HARASSMENT",
    //     "EMPLOYMENT_WELLNESS",
    //     "EMPLOYEE_DOCUMENT",
    //     "TERMINATION",
    //     "OVERTIME",
    //     "LEAVE_POLICIES",
    //     "OCCUPATIONAL",
    //     "VEHICLEPOLICY",
    //     "SMOKING",
    //     "TRAINING_DEVELOPMENT",
    //     "STUDYLOAN"
    // ]


    constructor(private bdms: NDataModelService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

    }

    selected(con){
        console.log(con);
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
            }, error => {
                // Handle errors here
            })
    }

    delete(dataModelName, filter) {
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
