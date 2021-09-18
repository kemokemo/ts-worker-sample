import Toastr from 'toastr2';
import 'toastr2/dist/toastr.min.css';

// Copy from the awesome book 'https://www.oreilly.co.jp/books/9784873119045/'
// This is my learning code. :-) kemokemo

const toastr = new Toastr();

var worker = new Worker("app-worker.js");
worker.onmessage = (e) => processCommandFromWorkerThread(e.data);

window.onload = () => {
    let postButton = document.getElementById("post-to-worker");
    if (postButton) {
        postButton.onclick = postToWorkerThread;
    }
    toastr.options.closeButton = true;
    toastr.options.positionClass = "toast-top-right";
};

function postToWorkerThread() {
    let message: string = "";
    let msg = document.getElementById("message-01") as HTMLTextAreaElement;
    if (msg != null) {
        message = msg.value;
    }

    worker.postMessage({
        type: "sendMessageToWorker",
        data: [message],
    });
}


function processCommandFromWorkerThread(wc: WChannel) {
    switch (wc.type) {
        case "receivedFromWorker":
            let [message] = wc.data;
            console.log(`This message is main thread log: ${message}`);
            toastr.success(message, 'Message window')

            let msg = document.getElementById(
                "message-02"
            ) as HTMLTextAreaElement;
            if (msg) {
                msg.value = message;
            }
            break;

        default:
            break;
    }
}
