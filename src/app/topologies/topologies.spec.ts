import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topologies } from './topologies';

describe('Topologies', () => {
  let component: Topologies;
  let fixture: ComponentFixture<Topologies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topologies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topologies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
