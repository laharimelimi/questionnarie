import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuecompComponent } from './quecomp.component';

describe('QuecompComponent', () => {
  let component: QuecompComponent;
  let fixture: ComponentFixture<QuecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuecompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
