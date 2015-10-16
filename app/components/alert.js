import React from 'react';
import AlertStore from '../stores/alert_store';

class Alert extends React.Component {
  constructor() {
    super();
    this.state = this.getStateFromStore();
    AlertStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    AlertStore.removeChangeListener(this.onChange);
  }

  severity(num) {
    if(num <= 5) {
      return '';
    }
    else if(num <= 10) {
      return '-warning';
    }
    else {
      return '-failing';
    }
  }

  getStateFromStore() {
    let alerts = AlertStore.alerts();
    return {
      alerts: alerts,
      severity: this.severity(alerts)
    };
  }

  onChange() {
    this.setState(this.getStateFromStore());
  }

  render() {
    return (
      <div className={'alert ' + this.state.severity}>
        {this.state.alerts}
      </div>
    );
  }
}

export default Alert;
