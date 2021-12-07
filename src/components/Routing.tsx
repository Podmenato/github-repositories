import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { EPaths } from 'enums/EPaths';
import Home from 'pages/Home';
import Users from 'pages/Users';

const Routing = () => (
	<Routes>
		<Route path={EPaths.HOME} element={<Home />} />
		<Route path={EPaths.USERS} element={<Users />} />
	</Routes>
);

export default Routing;
