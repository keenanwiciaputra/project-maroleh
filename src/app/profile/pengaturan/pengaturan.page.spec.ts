import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PengaturanPage } from './pengaturan.page';

describe('PengaturanPage', () => {
  let component: PengaturanPage;
  let fixture: ComponentFixture<PengaturanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengaturanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PengaturanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
