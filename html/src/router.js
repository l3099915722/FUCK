import React from 'react';
import { Route } from 'react-router-dom';

import Task from './View/Task/Task';

const RouterList = () => (
    <div>
        <Route path="/task" component={Task} />
    </div>
)

export default RouterList;