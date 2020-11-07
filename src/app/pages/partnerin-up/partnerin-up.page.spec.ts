import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartnerinUpPage } from './partnerin-up.page';

describe('PartnerinUpPage', () => {
  let component: PartnerinUpPage;
  let fixture: ComponentFixture<PartnerinUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerinUpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerinUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
