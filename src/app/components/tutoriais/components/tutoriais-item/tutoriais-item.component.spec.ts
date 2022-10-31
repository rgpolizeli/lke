import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoriaisItemComponent } from './tutoriais-item.component';

describe('TutoriaisItemComponent', () => {
  let component: TutoriaisItemComponent;
  let fixture: ComponentFixture<TutoriaisItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoriaisItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutoriaisItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
