import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentMethodDetailPage } from './payment-method-detail.page';

describe('PaymentMethodDetailPage', () => {
  let component: PaymentMethodDetailPage;
  let fixture: ComponentFixture<PaymentMethodDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentMethodDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentMethodDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
