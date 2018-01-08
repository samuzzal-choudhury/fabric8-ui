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
import { PipelineViewToolbarComponent } from '../view-toolbar/view-toolbar.pipeline.component';
import { PipelineViewWrapperComponent } from '../view-wrapper/view-wrapper.pipeline.component';
import { PipelineViewComponent } from '../view/view.pipeline.component';
import { TestAppModule } from './../../../../app.test.module';
import { StageTimePipe } from './../build-stage-view/stage-time.pipe';
import { PipelineViewPage } from './view-page.pipeline.component';

describe('PipelineViewPage', () => {
  let pipeline: PipelineViewPage;
  let fixture: ComponentFixture<PipelineViewPage>;

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
          PipelineViewPage,
          PipelineViewWrapperComponent,
          PipelineViewToolbarComponent,
          PipelineViewComponent,
          StageTimePipe
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
    fixture = TestBed.createComponent(PipelineViewPage);
    pipeline = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(pipeline).toBeTruthy(); });
});
