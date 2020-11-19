import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentProcessPage } from './payment-process.page';

describe('PaymentProcessPage', () => {
  let component: PaymentProcessPage;
  let fixture: ComponentFixture<PaymentProcessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentProcessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentProcessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
