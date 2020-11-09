import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigninUserPage } from './signin-user.page';

describe('SigninUserPage', () => {
  let component: SigninUserPage;
  let fixture: ComponentFixture<SigninUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
