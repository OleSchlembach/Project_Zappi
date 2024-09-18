import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphAltComponent } from './graph-alt.component';

describe('GraphAltComponent', () => {
  let component: GraphAltComponent;
  let fixture: ComponentFixture<GraphAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphAltComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
