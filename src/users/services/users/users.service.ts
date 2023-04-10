import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Ikjun', email: 'ikjun@ikjun.com' },
    { username: 'example', email: 'example@ikjun.com' },
    { username: 'good', email: 'good@ikjun.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
  fetchUserById(id: number) {
    return { id, username: 'Ikjun', email: 'ikjun@ikjun.com' };
  }
}
