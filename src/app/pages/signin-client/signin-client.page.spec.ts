import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigninClientPage } from './signin-client.page';

describe('SigninClientPage', () => {
  let component: SigninClientPage;
  let fixture: ComponentFixture<SigninClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
