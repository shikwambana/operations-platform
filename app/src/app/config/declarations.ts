import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NAuthGuardService } from 'neutrinos-seed-services';
window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-operationsComponent
import { operationsComponent } from '../components/operationsComponent/operations.component';
//CORE_REFERENCE_IMPORT-managerComponent
import { managerComponent } from '../components/managerComponent/manager.component';
//CORE_REFERENCE_IMPORT-transportComponent
import { transportComponent } from '../components/transportComponent/transport.component';
//CORE_REFERENCE_IMPORT-operationsService
import { operationsService } from '../services/operations/operations.service';
//CORE_REFERENCE_IMPORT-otherservicesComponent
import { otherservicesComponent } from '../components/otherservicesComponent/otherservices.component';
//CORE_REFERENCE_IMPORT-guesthouseComponent
import { guesthouseComponent } from '../components/guesthouseComponent/guesthouse.component';
//CORE_REFERENCE_IMPORT-searchComponent
import { searchComponent } from '../components/searchComponent/search.component';
//CORE_REFERENCE_IMPORT-policiesComponent
import { policiesComponent } from '../components/policiesComponent/policies.component';
//CORE_REFERENCE_IMPORT-policyComponent
import { policyComponent } from '../components/policyComponent/policy.component';
//CORE_REFERENCE_IMPORT-displayComponent
import { displayComponent } from '../components/displayComponent/display.component';
//CORE_REFERENCE_IMPORT-dialogComponent
import { dialogComponent } from '../components/dialogComponent/dialog.component';
//CORE_REFERENCE_IMPORT-editpolicyComponent
import { editpolicyComponent } from '../components/editpolicyComponent/editpolicy.component';
//CORE_REFERENCE_IMPORT-policiesService
import { policiesService } from '../services/policies/policies.service';
//CORE_REFERENCE_IMPORT-homepageComponent
import { homepageComponent } from '../components/homepageComponent/homepage.component';
//CORE_REFERENCE_IMPORT-hrpolicyadminComponent
import { hrpolicyadminComponent } from '../components/hrpolicyadminComponent/hrpolicyadmin.component';
//CORE_REFERENCE_IMPORT-loaderComponent
import { loaderComponent } from '../components/loaderComponent/loader.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/loginComponent/login.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/

export const appEntryComponents: any = [
  loaderComponent
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-operationsComponent
operationsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-managerComponent
managerComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-transportComponent
transportComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-otherservicesComponent
otherservicesComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-guesthouseComponent
guesthouseComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-searchComponent
searchComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-policiesComponent
policiesComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-policyComponent
policyComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-displayComponent
displayComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dialogComponent
dialogComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-editpolicyComponent
editpolicyComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homepageComponent
homepageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-hrpolicyadminComponent
hrpolicyadminComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loaderComponent
loaderComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
loginComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-operationsService
operationsService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-policiesService
policiesService,

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: homeComponent, canActivate: [NAuthGuardService],
children: [{path: '', component: searchComponent}]},{path: 'login', component: loginComponent},{path: 'unauthorized', redirectTo: '/login', pathMatch: 'full'},{path: 'homepage', component: homepageComponent, canActivate: [NAuthGuardService],
children: [{path: 'hr', component: hrpolicyadminComponent,
children: []},{path: 'edit', component: editpolicyComponent},{path: 'policy', component: policyComponent},{path: 'policies', component: policiesComponent,
children: []},{path: '', component: managerComponent}]},{path: 'menu', component: displayComponent,
children: [{path: 'otherservices', component: otherservicesComponent},{path: 'guesthouse', component: guesthouseComponent},{path: 'policies', component: policiesComponent},{path: 'transport', component: transportComponent}]},{path: '', redirectTo: '/login', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
