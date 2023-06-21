import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatagoryListComponent } from './sub-catagory-list.component';

describe('SubCatagoryListComponent', () => {
  let component: SubCatagoryListComponent;
  let fixture: ComponentFixture<SubCatagoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCatagoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCatagoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
