import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProsesPage } from './proses.page';

describe('ProsesPage', () => {
  let component: ProsesPage;
  let fixture: ComponentFixture<ProsesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProsesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
