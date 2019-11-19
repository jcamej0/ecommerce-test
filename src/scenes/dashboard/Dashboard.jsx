import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Products from './components/products';
import theme from './style.module.scss';

const Dashboard = ({ match }) => {
    return(
        <div className={theme.container}>
            <div className={theme.header}>HEADER</div>
            <div className={theme['sub-container']}>
                <div className={theme.sidebar}>
                    <Sidebar match={match} />
                </div>
                <div className={theme.content}>
                    <Switch>
                        <Route exact path="/dashboard" component={Main}/>
                        <Route exact path="/dashboard/products" component={Products}/>
                    </Switch>
                    
                 </div>
            </div>
        </div>
    )
};

export default Dashboard;