import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarImagenComponent } from './listar-imagen.component';

describe('ListarImagenComponent', () => {
  let component: ListarImagenComponent;
  let fixture: ComponentFixture<ListarImagenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarImagenComponent]
    });
    fixture = TestBed.createComponent(ListarImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
