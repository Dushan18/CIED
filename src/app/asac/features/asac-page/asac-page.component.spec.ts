import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsacPageComponent } from './asac-page.component';

describe('AsacPageComponent', () => {
  let component: AsacPageComponent;
  let fixture: ComponentFixture<AsacPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsacPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsacPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
