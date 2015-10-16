import EventEmitter from 'events';

class AlertStore extends EventEmitter {
  constructor() {
    super();
    this._alerts = 0;
  }

  alerts() {
    return this._alerts;
  }

  increment() {
    this._alerts++;
    this.emitChange();
  }

  decrement() {
    this._alerts--;
    this.emitChange();
  }

  emitChange() {
    this.emit('alert-change');
  }

  addChangeListener(callback) {
    this.on('alert-change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('alert-change', callback);
  }
}

export default new AlertStore();
