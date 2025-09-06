import readline from "readline";

export function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
export function max(a,b) {
  if (a >= b) {
    return a
  }
  return b
}

export class IOHandlerClass {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  ask(question) {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => resolve(answer));
    });
  }

  async readArray(userN, messageForN, messageForE) {
    const n = userN || parseInt(await this.ask(messageForN || "Enter number of elements: "));
    const line = await this.ask(messageForE || `Enter ${n} elements (space-separated): `);
    return line.split(" ").map(Number).filter((_, index) => index < n);
  }

  async readInt(message) {
    const n = parseInt(await this.ask(message || "Enter a Number: "));
    return n || null
  }
  async readChar(message) {
    const n = await this.ask(message || "Enter a Character: ");
    return n[0] || ""
  }
  async readFloat(message) {
    const n = parseFloat(await this.ask(message || "Enter a Float: "));
    return n || null
  }

  async readString(message) {
    const n = await this.ask(message || "Enter a String: ");
    return n || ""
  }
  async readBool(message) {
    let n = await this.ask(message || "Enter a Boolean: ");
    n = n.trim()
    if (n) {
      if (n == "1" || n == "true") {
        return true
      } else {
        return false
      }
    }
    return 0;
  }

  printArray(arr, message) {
    console.log(message || "Array:", arr);
  }

  close() {
    this.rl.close();
  }
}

export const io = new IOHandlerClass();