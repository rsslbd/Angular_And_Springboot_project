import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatagoryViewComponent } from './sub-catagory-view.component';

describe('SubCatagoryViewComponent', () => {
  let component: SubCatagoryViewComponent;
  let fixture: ComponentFixture<SubCatagoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCatagoryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCatagoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
