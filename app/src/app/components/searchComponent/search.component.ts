/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

import { Router } from '@angular/router';
import { operationsService } from '../../services/operations/operations.service';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-search',
    templateUrl: './search.template.html'
})

export class searchComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    services;
    policies;

    myControl = new FormControl();

    operations = [{
        name: 'Services',
        operationObj: this.services
    }, {
        name: 'Policies',
        operationObj: this.policies
    }];


    filteredOperations: Observable<any[]>;

    constructor(private bdms: NDataModelService, private operationsService: operationsService, private router: Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.get('services');

        this.filteredOperations = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
        );
    }

    private _filter(value: string): any[] {
        const filterValue = value.toLowerCase();

        return this.operations.filter(operation => operation.name.toLowerCase().indexOf(filterValue) === 0);
    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
                this.operationsService.services = result;
                this.services = this.operationsService.services;
                this.policies = this.operationsService.policies;
            },
            error => {
                // Handle errors here
                console.log(error, 'services')
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
