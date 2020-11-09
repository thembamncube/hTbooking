import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddproduclearPage } from './addproduclear.page';

describe('AddproduclearPage', () => {
  let component: AddproduclearPage;
  let fixture: ComponentFixture<AddproduclearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproduclearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddproduclearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
