"strict mode";

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = new Date();

  this.getFullMessage = function() {
    return this.firstName
    + ' '
    + this.lastName
    + ' '
    + this.regDate;
  }
}


function UserList() {
  while (true) {

    this.newUser = prompt('press enter');

    if (this.newUser !== null) {
      this.array = newUser.split(' ');

      this.userList = [];
      this.usersList = new User(array[0], array[1]);
      userList.push(usersList);

      for (let i = 0; i < array.length; i++) {
        console.log(usersList.getFullMessage());
      }
    }
    else {
      alert('Результат в консоле');
      break;
    }
  }
}

UserList();
