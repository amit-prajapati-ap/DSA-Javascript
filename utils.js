import readline from "readline";

export function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
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

  async readArray() {
    const n = parseInt(await this.ask("Enter number of elements: "));
    const line = await this.ask(`Enter ${n} elements (space-separated): `);
    return line.split(" ").map(Number).filter((_, index) => index < n);
  }

  async readInt() {
    const n = parseInt(await this.ask("Enter a Number: "));
    return n || 0
  }
  async readChar() {
    const n = await this.ask("Enter a Character: ");
    return n[0] || ""
  }
  async readFloat() {
    const n = parseFloat(await this.ask("Enter a Float: "));
    return n || parseFloat("0")
  }

  async readString() {
    const n = await this.ask("Enter a String: ");
    return n || ""
  }
  async readBool() {
    let n = await this.ask("Enter a Boolean: ");
    n = n.trim()
    if (n) {
      if (n == "1" || n == "true") {
        return 1
      } else {
        return 0
      }
    }
    return 0;
  }

  printArray(arr) {
    console.log("Array:", arr);
  }

  close() {
    this.rl.close();
  }
}

export const io = new IOHandlerClass();