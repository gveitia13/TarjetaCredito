import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTargejaComponent } from './crear-targeja.component';

describe('CrearTargejaComponent', () => {
  let component: CrearTargejaComponent;
  let fixture: ComponentFixture<CrearTargejaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearTargejaComponent]
    });
    fixture = TestBed.createComponent(CrearTargejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
