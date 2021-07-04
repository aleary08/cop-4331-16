import React from 'react';

import PageTitle from '../components/PageTitle';
import LoggedInName from '../components/LoggedInName';
import CardUI from '../components/CardUI';
import Admin from '../layouts/Admin';
import Dashboard from '../views/Dashboard/Dashboard'

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
