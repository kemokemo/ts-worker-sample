// Copy from the awesome book 'https://www.oreilly.co.jp/books/9784873119045/'
// This is my learning code. :-) kemokemo

type Message = string;
type ThreadID = number;
type UserID = number;
type Participants = UserID[];

type Commands = {
    sendMessageToThread: [ThreadID, Message];
    createThread: [Participants];
    addUserToThread: [ThreadID, UserID];
    removeUserFromThread: [ThreadID, UserID];
};

type Events = {
    receivedMessage: [ThreadID, UserID, Message];
    createThread: [ThreadID, Participants];
    addedUserToThread: [ThreadID, UserID];
    removedUserFromThread: [ThreadID, UserID];
};

type Command =
    | { type: "sendMessageToThread"; data: [ThreadID, Message] }
    | { type: "createThread"; data: [Participants] }
    | { type: "addUserToThread"; data: [ThreadID, UserID] }
    | { type: "removeUserFromThread"; data: [ThreadID, UserID] };
