import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDetailClientComponent } from './liste-detail-client.component';

describe('ListeDetailClientComponent', () => {
  let component: ListeDetailClientComponent;
  let fixture: ComponentFixture<ListeDetailClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDetailClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDetailClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
