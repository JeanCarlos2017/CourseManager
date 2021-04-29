import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseClosedComponent } from './course-closed.component';

describe('CourseClosedComponent', () => {
  let component: CourseClosedComponent;
  let fixture: ComponentFixture<CourseClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseClosedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
