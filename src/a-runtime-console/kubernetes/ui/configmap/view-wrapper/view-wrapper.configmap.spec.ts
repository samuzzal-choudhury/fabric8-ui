/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, Http, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MomentModule } from 'angular2-moment';
import { RestangularModule } from 'ng2-restangular';
import { ModalModule } from 'ngx-modal';
import { Fabric8CommonModule } from '../../../../common/common.module';
import { KubernetesStoreModule } from '../../../kubernetes.store.module';
import { ConfigMapDeleteDialog } from '../delete-dialog/delete-dialog.configmap.component';
import { ConfigMapViewToolbarComponent } from '../view-toolbar/view-toolbar.configmap.component';
import { ConfigMapViewComponent } from '../view/view.configmap.component';
import { TestAppModule } from './../../../../app.test.module';
import { ConfigMapViewWrapperComponent } from './view-wrapper.configmap.component';

describe('ConfigMapViewWrapperComponent', () => {
  let configmap: ConfigMapViewWrapperComponent;
  let fixture: ComponentFixture<ConfigMapViewWrapperComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          Fabric8CommonModule,
          FormsModule,
          MomentModule,
          ModalModule,
          RouterTestingModule.withRoutes([]),
          RestangularModule.forRoot(),
          KubernetesStoreModule,
          TestAppModule
        ],
        declarations: [
          ConfigMapViewWrapperComponent,
          ConfigMapViewToolbarComponent,
          ConfigMapViewComponent,
          ConfigMapDeleteDialog
        ],
        providers: [
          MockBackend,
          { provide: RequestOptions, useClass: BaseRequestOptions },
          {
            provide: Http, useFactory: (backend, options) => {
              return new Http(backend, options);
            }, deps: [MockBackend, RequestOptions]
          }
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMapViewWrapperComponent);
    configmap = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(configmap).toBeTruthy(); });
});
