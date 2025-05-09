import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedypPageComponent } from './sedyp-page.component';

describe('SedypPageComponent', () => {
  let component: SedypPageComponent;
  let fixture: ComponentFixture<SedypPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SedypPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedypPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
