import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatagoryEditComponent } from './sub-catagory-edit.component';

describe('SubCatagoryEditComponent', () => {
  let component: SubCatagoryEditComponent;
  let fixture: ComponentFixture<SubCatagoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCatagoryEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCatagoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
