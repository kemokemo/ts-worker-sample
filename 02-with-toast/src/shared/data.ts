// Copy from the awesome book 'https://www.oreilly.co.jp/books/9784873119045/'
// This is my learning code. :-) kemokemo

type Message = string;

// from main thread to worker thread.
type MChannels = {
    sendMessageToWorker: [Message];
};

type MChannel =
    | { type: "sendMessageToWorker"; data: [Message] };

// from worker thread to main thread.
type WChannels = {
    receivedFromWorker: [Message];
}

type WChannel =
    | { type: "receivedFromWorker"; data: [Message] };