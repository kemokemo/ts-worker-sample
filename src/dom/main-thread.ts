// Copy from the awesome book 'https://www.oreilly.co.jp/books/9784873119045/'
// This is my learning code. :-) kemokemo

var worker = new Worker("worker-thread.js");
worker.onmessage = (e) => processCommandFromWorkerThread(e.data);

window.onload = () => {
    let postButton = document.getElementById("post-to-worker");
    if (postButton) {
        postButton.onclick = postToWorkerThread;
    }
};

function postToWorkerThread() {
    let message: string = "";
    let msg = document.getElementById("message-01") as HTMLTextAreaElement;
    if (msg != null) {
        message = msg.value;
    }

    worker.postMessage({
        type: "sendMessageToThread",
        data: [1, message],
    });
}

function processCommandFromWorkerThread(command: Command) {
    switch (command.type) {
        case "sendMessageToThread":
            let [threadID, message] = command.data;
            console.log(`This message is main thread log: ${message}`);

            let msg = document.getElementById("message-02") as HTMLTextAreaElement;
            if (msg) {
                msg.value = message;
            }
            break;

        default:
            break;
    }
}
