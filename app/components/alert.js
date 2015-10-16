import React from 'react';
import AlertStore from '../stores/alert_store';

class Alert extends React.Component {
  constructor() {
    super();
    this.state = this.newState();
    AlertStore.addChangeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState(this.newState());
  }

  getAlertsFromStore() {
    return AlertStore.alerts() || 0;
  }

  newState() {
    let alerts = this.getAlertsFromStore();
    return { alerts: alerts, severity: this.severity(alerts) };
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

  componentWillUnmount() {
    AlertStore.removeChangeListener(this.onChange);
  }

  render() {
    return (
      <p className={'alert ' + this.state.severity}>
        {this.state.alerts}
      </p>
    );
  }
}

export default Alert;
