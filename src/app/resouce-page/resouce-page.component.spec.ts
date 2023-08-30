import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResoucePageComponent } from './resouce-page.component';

describe('ResoucePageComponent', () => {
  let component: ResoucePageComponent;
  let fixture: ComponentFixture<ResoucePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResoucePageComponent]
    });
    fixture = TestBed.createComponent(ResoucePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
