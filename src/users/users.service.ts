import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private allUsers = [
    {
      name: 'Prince Singh',
      age: 24,
      id: 1,
    },
    {
      name: 'Priyanka Singh',
      age: 21,
      id: 2,
    },
    {
      name: 'Prinshu Singh',
      age: 18,
      id: 3,
    },
  ];

  findAll() {
    return this.allUsers;
  }

  findOne(id: number) {
    const response = this.allUsers.find((user) => user.id === id);
    return response;
  }

  createUser(userObject: object) {
    console.log(userObject);
    const sortedData = this.allUsers.sort((a, b) => b.id - a.id);
    const insertData = {
      id: sortedData[0].id + 1,
      ...userObject,
    };
    console.log(insertData, ' insertdata');
    this.allUsers.push(insertData);
    return insertData;
  }
}
