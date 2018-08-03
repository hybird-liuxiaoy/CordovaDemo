import React from 'react'
import home from './logo.svg'
import PropTypes from 'prop-types';
import { Route, withRouter, Switch, Redirect } from 'dva/router'
import { TabBar, Icon } from 'antd-mobile';
import _ from 'lodash'

import './App.css'

class App extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    push = path => () => this.context.router.history.push(path)

    render() {

        const { location } = this.props

        let currentPath, p = location.pathname;
        if (
            p === '/'
            ||
            p.startsWith('/page1')
        ) {
            currentPath = "page1";
        } else {
            currentPath = _.without(location.pathname.split('/'), "")[0];
        }

        return (
            <div className="App">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="page1"
                        key="1"
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `${home} center center /  21px 21px no-repeat`
                            }} />
                        }
                        selectedIcon={
                            <Icon type="home" style={{ color: 'black' }} />
                        }
                        selected={currentPath === 'page1'}
                        badge={1}
                        onPress={this.push("/")}
                    >
                        <Route path="/" component={require('./pages/page1').default} />
                    </TabBar.Item>

                    <TabBar.Item
                        title="page2"
                        key="2"
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }} />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                            }} />
                        }
                        selected={currentPath === 'page2'}
                        badge={1}
                        onPress={this.push("page2")}
                    >
                        <Route path="/page2" component={require('./pages/page2').default} />
                    </TabBar.Item>

                    <TabBar.Item
                        title="page3"
                        key="3"
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }} />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                            }} />
                        }
                        selected={currentPath === 'page3'}
                        badge={3}
                        onPress={this.push("page3")}
                    >
                        <Route path="/page3" component={require('./pages/page3').default} />
                    </TabBar.Item>

                    <TabBar.Item
                        title="page4"
                        key="4"
                        icon={
                            <Icon type="home" />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                            }} />
                        }
                        selected={currentPath === 'page4'}
                        badge={3}
                        onPress={this.push("page3")}
                    >
                        <Route path="/page4" component={require('./pages/page3').default} />
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default withRouter(App)
