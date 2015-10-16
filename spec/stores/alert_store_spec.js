jest.dontMock('../../app/stores/alert_store.js');

var AlertStore;

describe('AlertStore', ()=> {
  beforeEach(()=> {
    AlertStore = require('../../app/stores/alert_store.js');
  });

  describe('alerts', ()=> {
    it('should return alerts with a default of 0', ()=> {
      expect(AlertStore.alerts()).toBe(0);
    });
  });

  describe('increment', ()=> {
    it('should increment alerts', ()=> {
      AlertStore.increment();
      expect(AlertStore.alerts()).toBe(1);
    });
  });

  describe('decrement', ()=> {
    it('should decrement alerts', ()=> {
      AlertStore.decrement();
      expect(AlertStore.alerts()).toBe(-1);
    });
  });

  describe('emitChange', ()=> {
    it('should emit change', ()=> {
      spyOn(AlertStore, 'emit');
      AlertStore.emitChange();
      expect(AlertStore.emit).toHaveBeenCalledWith('alert-change');
    });
  });

  describe('addChangeListener', ()=> {
    it('should add change listeners', ()=> {
      spyOn(AlertStore, 'on');
      let func = ()=>{};
      AlertStore.addChangeListener(func);
      expect(AlertStore.on).toHaveBeenCalledWith('alert-change', func);
    });
  });

  describe('removeChangeListener', ()=> {
    it('should remove change listeners', ()=> {
      spyOn(AlertStore, 'removeListener');
      let func = ()=>{};
      AlertStore.removeChangeListener(func);
      expect(AlertStore.removeListener).toHaveBeenCalledWith('alert-change', func);
    });
  });
});
