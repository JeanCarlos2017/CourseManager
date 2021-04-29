import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOpenedComponent } from './course-opened.component';

describe('CourseOpenedComponent', () => {
  let component: CourseOpenedComponent;
  let fixture: ComponentFixture<CourseOpenedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseOpenedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseOpenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
