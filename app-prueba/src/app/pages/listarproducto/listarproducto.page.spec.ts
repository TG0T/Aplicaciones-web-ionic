import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarproductoPage } from './listarproducto.page';

describe('ListarproductoPage', () => {
  let component: ListarproductoPage;
  let fixture: ComponentFixture<ListarproductoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarproductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
