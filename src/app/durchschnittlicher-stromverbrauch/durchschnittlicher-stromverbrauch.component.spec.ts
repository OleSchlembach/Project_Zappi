import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurchschnittlicherStromverbrauchComponent } from './durchschnittlicher-stromverbrauch.component';

describe('DurchschnittlicherStromverbrauchComponent', () => {
  let component: DurchschnittlicherStromverbrauchComponent;
  let fixture: ComponentFixture<DurchschnittlicherStromverbrauchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DurchschnittlicherStromverbrauchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurchschnittlicherStromverbrauchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
