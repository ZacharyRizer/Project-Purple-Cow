import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickGroupComponent } from './click-group.component';

describe('ClickGroupComponent', () => {
  let component: ClickGroupComponent;
  let fixture: ComponentFixture<ClickGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
