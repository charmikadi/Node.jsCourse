export default class Messenger {
    port: number;

    constructor(port) {
        this.port = port
    }

    messagePrint() {
        return `Node and express server is running on port ${this.port}`
    }
}
