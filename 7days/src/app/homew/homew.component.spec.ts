import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomewComponent } from './homew.component';

describe('HomewComponent', () => {
  let component: HomewComponent;
  let fixture: ComponentFixture<HomewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
