type Box = {
  locked: boolean,
  unlock: Function,
  lock: Function,
  _content: Array<any>,
  content: Function
};

const box: Box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true; },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  }
};

function withBoxUnlocked(func: Function) {
  box.unlock();
  try {
    func();
  } catch (e) {
    throw new Error('Error thrown when running the function');
  } finally {
    box.lock();
  }
}