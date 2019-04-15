module.exports = (client) => {
    const clients = [];
    client.emit('getUserInfo');
    client.on('disconnect', () => {
        clients.splice(clients.indexOf(client), 1);
    });
    client.on('logout', () => {
        client.disconnect(true);
    });

    client.on('user', (user)=> {
        console.log('__________________________________________________________________________');
        console.log('__________________________________________________________________________');
        console.log(user);
        console.log('__________________________________________________________________________');
        console.log('__________________________________________________________________________');
    })
}

