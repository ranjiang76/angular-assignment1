import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioIconbuttonComponent } from './portfolio-iconbutton.component';

describe('PortfolioIconbuttonComponent', () => {
  let component: PortfolioIconbuttonComponent;
  let fixture: ComponentFixture<PortfolioIconbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioIconbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioIconbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
