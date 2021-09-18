// Copy from the awesome book 'https://www.oreilly.co.jp/books/9784873119045/'
// This is my learning code. :-) kemokemo

onmessage = (e) => processCommandFromMainThread(e.data);

function processCommandFromMainThread(mc: MChannel) {
    switch (mc.type) {
        case "sendMessageToWorker":
            let [message] = mc.data;
            console.log(`This message is worker log: ${message}`);

            // refer to the 'https://developer.mozilla.org/ja/docs/Web/API/Web_Workers_API/Using_web_workers' for more detail.
            postMessage({
                type: "receivedFromWorker",
                data: [`Ack: ${message}`],
            });
            break;

        default:
            break;
    }
}
