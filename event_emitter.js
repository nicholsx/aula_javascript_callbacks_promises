// ******** EventEmitter ********

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);   
    }
}

const users = new Users();

//users.on('User logged', data => {
    users.once('User logged', data => {
    console.log(data);
});

//Users.userLogged('User logged', { user: 'Nicholas Costa'});
Users.userLogged({ user: 'Nicholas Costa'});
Users.userLogged({ user: 'Joao Costa'});