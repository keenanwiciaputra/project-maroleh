import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DikirimPage } from './dikirim.page';

describe('DikirimPage', () => {
  let component: DikirimPage;
  let fixture: ComponentFixture<DikirimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DikirimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DikirimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
