import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirLivreComponent } from './voir-livre.component';

describe('VoirLivreComponent', () => {
  let component: VoirLivreComponent;
  let fixture: ComponentFixture<VoirLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirLivreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
