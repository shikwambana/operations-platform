/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatTableDataSource} from '@angular/material';

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

 const ELEMENT_DATA: PeriodicElement[] = [
        { position: 1, name: 'ALLOWANCE POLICY', weight: 1.0079, symbol: 'TRAVEL AND ENTERTAINMENT POLICY' },
        { position: 2, name: 'RECRUITMENT AND SELECTION POLICY', weight: 4.0026, symbol: 'RECRUITMENT AND SELECTION' },
        { position: 3, name: 'ETHICAL BEHAVIOUR POLICY', weight: 6.941, symbol: 'ETHICAL BEHAVIOUR' },
        { position: 4, name: 'EMPLOYMENT EQUITY POLICY', weight: 9.0122, symbol: 'EMPLOYMENT EQUITY' },
        { position: 5, name: 'EMPLOYEE RELATIONS POLICY', weight: 10.811, symbol: 'EMPLOYMENT EQUITY' },
        { position: 6, name: 'SMOKING POLICY', weight: 12.0107, symbol: 'EMPLOYMENT EQUITY' },
        { position: 7, name: 'POOL CARS', weight: 14.0067, symbol: 'FLEET POLICY' },
        { position: 8, name: 'SMOKING POLICY', weight: 15.9994, symbol: 'SMOKING POLICY' },
        
    ];


@Component({
    selector: 'bh-hrpolicyadmin',
    templateUrl: './hrpolicyadmin.template.html'
})

export class hrpolicyadminComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

   
    constructor(private bdms: NDataModelService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    displayedColumns: string[] = ['name',  'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    ngOnInit() {
        this.get('policies');
    }

    
    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
                console.log(result);
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
