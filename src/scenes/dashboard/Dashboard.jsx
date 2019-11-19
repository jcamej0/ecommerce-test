import React from 'react';


import theme from './style.module.scss';

const Dashboard = ({ match }) => {

    return(
        <div className={theme.container}>
            <div className={theme.header}>HEADER</div>
            <div className={theme['sub-container']}>
                <div className={theme.sidebar}>
                    
                </div>
                <div className={theme.content}>

                    
                 </div>
            </div>
        </div>
    )
};

export default Dashboard;