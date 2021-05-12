import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearnModalPage } from './learn-modal.page';
import { LearnQuizComponent } from 'src/app/components/learn-quiz/learn-quiz.component'

describe('LearnModalPage', () => {
  let component: LearnModalPage;
  let fixture: ComponentFixture<LearnModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnModalPage ],
      imports: [IonicModule.forRoot(), LearnQuizComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
