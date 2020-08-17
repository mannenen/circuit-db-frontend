import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidSearchComponent } from './cid-search.component';

describe('CidSearchComponent', () => {
  let component: CidSearchComponent;
  let fixture: ComponentFixture<CidSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
