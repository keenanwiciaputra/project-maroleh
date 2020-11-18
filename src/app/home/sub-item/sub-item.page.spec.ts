import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubItemPage } from './sub-item.page';

describe('SubItemPage', () => {
  let component: SubItemPage;
  let fixture: ComponentFixture<SubItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
