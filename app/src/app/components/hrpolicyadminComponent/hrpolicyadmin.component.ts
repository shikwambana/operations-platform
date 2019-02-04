/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core';
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';

import { dialogComponent } from '../dialogComponent/dialog.component';

import { MatTableDataSource } from '@angular/material';
import { policies } from "../../models/policies.model"
import { categories } from "../../models/categories.model";
import { policiesService } from '../../services/policies/policies.service';

import { MatDialog } from '@angular/material';

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-hrpolicyadmin',
    templateUrl: './hrpolicyadmin.template.html'
})

export class hrpolicyadminComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    policies: policies;
    //test data
    currentPolicies: policies[];
    // categories


    categories = [
        'RECRUITMENT AND SELECTION', 'RECRUITMENT AND SELECTION',
        "ETHICAL BEHAVIOUR", "EMPLOYMENT EQUITY", "FLEET POLICY",
        "FLEET POLICY"
    ];
    //end of test data

    constructor(private bdms: NDataModelService, private router: Router, public PoliciesService: policiesService, public dialog: MatDialog) {
        super();
        this.mm = new ModelMethods(bdms);
        this.policies = new policies();
        // this.categories = new categories();
    }


    displayedColumns: string[] = ['name', 'symbol'];
    // dataSource = new MatTableDataSource(this.currentPolicies);
    dataSource;
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    ngOnInit() {
        this.get('policies');
        // this.get('categories');
    }

    // MyDialog Function
    openDialog() {
        this.dialog.open(dialogComponent, {
            data: {
                animal: 'panda'
            },
            width: '250px',
            disableClose: true
        });
    }

    addPolicy() {
        this.put('policies', this.policies);
        this.currentPolicies.push(this.policies);
        // this.router.navigate[('/homepage/hr')];
    }

    selectedPolicy(row) {
        this.PoliciesService.setSelectedPolicy(row);
        console.log(row);
        this.router.navigate(['/homepage/edit']);
    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
                if (dataModelName == 'policies') {
                    this.currentPolicies = result;
                    this.dataSource = new MatTableDataSource(this.currentPolicies);
                }
                if (dataModelName == 'categories') {
                    this.categories = result;
                }

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
                console.log(result);
                // On Success code here
            }, error => {
                console.log(error);

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
