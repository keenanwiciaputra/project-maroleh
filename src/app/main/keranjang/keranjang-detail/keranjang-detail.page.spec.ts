import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KeranjangDetailPage } from './keranjang-detail.page';

describe('KeranjangDetailPage', () => {
  let component: KeranjangDetailPage;
  let fixture: ComponentFixture<KeranjangDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeranjangDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KeranjangDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
