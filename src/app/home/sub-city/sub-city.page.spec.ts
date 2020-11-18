import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubCityPage } from './sub-city.page';

describe('SubCityPage', () => {
  let component: SubCityPage;
  let fixture: ComponentFixture<SubCityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
