import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlamatPage } from './alamat.page';

describe('AlamatPage', () => {
  let component: AlamatPage;
  let fixture: ComponentFixture<AlamatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlamatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlamatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
