let message = ['random message #1', 'random message #2', 'random message #3',
 'random message #4', 'random message #5','random message #6'];
function getMess () {
    let randomMes = Math.floor(Math.random() * message.length);
    return message[randomMes];
}
getMess();