// Copy from the awesome book 'https://www.oreilly.co.jp/books/9784873119045/'
// This is my learning code. :-) kemokemo

onmessage = (e) => processCommandFromMainThread(e.data);

function processCommandFromMainThread(mc: MChannel) {
    switch (mc.type) {
        case "sendMessageToWorker":
            let [message] = mc.data;
            console.log(`This message is worker log: ${message}`);
            postMessage({
                type: "receivedFromWorker",
                data: [`Ack: ${message}`],
            });
            break;

        default:
            break;
    }
}
