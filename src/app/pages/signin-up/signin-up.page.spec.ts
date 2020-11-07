import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigninUpPage } from './signin-up.page';

describe('SigninUpPage', () => {
  let component: SigninUpPage;
  let fixture: ComponentFixture<SigninUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninUpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
