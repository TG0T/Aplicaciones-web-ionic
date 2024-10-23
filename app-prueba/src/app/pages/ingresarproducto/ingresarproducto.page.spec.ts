import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresarproductoPage } from './ingresarproducto.page';

describe('IngresarproductoPage', () => {
  let component: IngresarproductoPage;
  let fixture: ComponentFixture<IngresarproductoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarproductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
