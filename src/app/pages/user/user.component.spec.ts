import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserListComponent } from '../../components/user-list/user-list.component'; // Import UserListComponent
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import for HTTP requests
import { UserlistService } from '../../../services/user-list/user-list.service'; // Import service
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('UserPageComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userlistService: UserlistService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent, UserListComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        {
          provide: UserlistService,
          useValue: {
            getUserList: () => of([]),
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userlistService = TestBed.inject(UserlistService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});