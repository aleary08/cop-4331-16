import React from 'react';

import PageTitle from '../components/PageTitle';
import LoggedInName from '../components/LoggedInName';
import CardUI from '../components/CardUI';
import Dashboard from './Dashboard'

const CardPage = () =>
{
    return(
        <div>
            <PageTitle />
            <LoggedInName />
            <Dashboard/>
        </div>
    );
}

export default CardPage;
