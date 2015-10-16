jest.dontMock('../../app/components/alert.js');

var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    Alert = require('../../app/components/alert'),
    AlertStore = require('../../app/stores/alert_store'),
    fa;

function foundAlert() {
  let alert = TestUtils.renderIntoDocument(<Alert/>),
      compiledAlert = TestUtils.findRenderedDOMComponentWithTag(alert, 'p');

  return ReactDOM.findDOMNode(compiledAlert);
}

describe('AlertComponent', ()=> {
  describe('render', ()=> {
    it('shows a default state', ()=> {
      fa = foundAlert();
      expect(fa.className).toBe('alert ');
      expect(fa.textContent).toBe('0');
    });

    it('shows a passing state', ()=> {
      AlertStore.alerts.mockReturnValue(0);
      fa = foundAlert();
      expect(fa.className).toBe('alert ');
      expect(fa.textContent).toBe('0');
    });

    it('shows a warning state', ()=> {
      AlertStore.alerts.mockReturnValue(6);
      fa = foundAlert();
      expect(fa.className).toBe('alert -warning');
      expect(fa.textContent).toBe('6');
    });

    it('shows a failing state', ()=> {
      AlertStore.alerts.mockReturnValue(11);
      fa = foundAlert();
      expect(fa.className).toBe('alert -failing');
      expect(fa.textContent).toBe('11');
    });
  });
});
