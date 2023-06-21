import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatagoryCreateComponent } from './sub-catagory-create.component';

describe('SubCatagoryCreateComponent', () => {
  let component: SubCatagoryCreateComponent;
  let fixture: ComponentFixture<SubCatagoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCatagoryCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCatagoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
