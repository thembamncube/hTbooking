import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewChoicePage } from './view-choice.page';

describe('ViewChoicePage', () => {
  let component: ViewChoicePage;
  let fixture: ComponentFixture<ViewChoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChoicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewChoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
