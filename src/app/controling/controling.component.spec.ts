import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlingComponent } from './controling.component';

describe('ControlingComponent', () => {
  let component: ControlingComponent;
  let fixture: ComponentFixture<ControlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
