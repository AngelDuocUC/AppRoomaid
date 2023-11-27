import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewchatPage } from './newchat.page';

describe('NewchatPage', () => {
  let component: NewchatPage;
  let fixture: ComponentFixture<NewchatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
