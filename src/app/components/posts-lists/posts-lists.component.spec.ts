import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListsComponent } from './posts-lists.component';

describe('PostsListsComponent', () => {
  let component: PostsListsComponent;
  let fixture: ComponentFixture<PostsListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
