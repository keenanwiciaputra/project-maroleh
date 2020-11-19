import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeskripsiPage } from './deskripsi.page';

describe('DeskripsiPage', () => {
  let component: DeskripsiPage;
  let fixture: ComponentFixture<DeskripsiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskripsiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeskripsiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
