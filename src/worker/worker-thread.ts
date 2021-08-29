// Copy from the awesome book 'https://www.oreilly.co.jp/books/9784873119045/'
// This is my learning code. :-) kemokemo

onmessage = (e) => processCommandFromMainThread(e.data);

function processCommandFromMainThread(command: Command) {
    switch (command.type) {
        case "sendMessageToThread":
            let [threadID, message] = command.data;
            console.log(`This message is worker log: ${message}`);

            // refer to the 'https://developer.mozilla.org/ja/docs/Web/API/Web_Workers_API/Using_web_workers' for more detail.
            postMessage({
                type: "sendMessageToThread",
                data: [1, `Ack: ${message}`],
            });
            break;

        default:
            break;
    }
}
