import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserlistService } from '../../../services/user-list/user-list.service'
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userlistService: jasmine.SpyObj<UserlistService>;

  const userMockData = [
    { name: 'Luan Fernando', email: 'luann_nill@hotmail.com' },
    { name: 'Richard Cancino', email: 'richard.cancino@tallertechnologies.net' },
    { name: 'Rodrigo Alisio', email: 'rodrigo.alisio@tallertechnologies.net' }
  ];

  beforeEach(async () => {
    const userlistServiceSpy = jasmine.createSpyObj('UserlistService', ['getUserList']);

    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [{ provide: UserlistService, useValue: userlistServiceSpy }]
    }).compileComponents();

    userlistService = TestBed.inject(UserlistService) as jasmine.SpyObj<UserlistService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize users with mock data', () => {
    userlistService.getUserList.and.returnValue(of(userMockData));
    
    fixture.detectChanges();

    expect(component.users).toEqual(userMockData);
    expect(component.filteredUsers).toEqual(userMockData);
  });

  it('should filter users by name', () => {
    component.users = userMockData;
    component.searchTerm = 'Luan';

    component.filterUsers();

    expect(component.filteredUsers.length).toBe(1);
    expect(component.filteredUsers[0].name).toBe('Luan Fernando');
  });

  it('should return all users if search term is empty', () => {
    component.users = userMockData;
    component.searchTerm = '';

    component.filterUsers();

    expect(component.filteredUsers.length).toBe(3);
  });
});
