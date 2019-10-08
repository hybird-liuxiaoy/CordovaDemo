import React from 'react';
import { App, View, Statusbar } from 'framework7-react';
import A from './home';

export default class extends React.Component {
  render() {
    return (
      <App
        params={{
          routes: [
            {
              path: '/',
              component: A,
            },
          ],
        }}
      >
        <Statusbar />
        <View url="/" main className="ios-edges" />
      </App>
    );
  }
}
