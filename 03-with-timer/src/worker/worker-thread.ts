// Copy from the awesome book 'https://www.oreilly.co.jp/books/9784873119045/'
// This is my learning code. :-) kemokemo

onmessage = (e) => processCommandFromMainThread(e.data);

let intervalToSave: number;

function processCommandFromMainThread(mc: MChannel) {
    switch (mc.type) {
        case "sendMessageToWorker":
            let [message] = mc.data;
            console.log(`This message is worker log: ${message}`);

            if (intervalToSave) {
                clearInterval(intervalToSave);
            }
            intervalToSave = setInterval(() => {
                // todo: Add auto save feature here.
                console.log("Interval!");
            }, 10000);

            postMessage({
                type: "receivedFromWorker",
                data: [`Ack: ${message}`],
            });
            break;

        default:
            break;
    }
}
