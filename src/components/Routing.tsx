import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { EPaths } from '../enums/EPaths';
import Home from '../pages/Home';

const Routing = () => (
	<Routes>
		<Route path={EPaths.HOME} element={<Home />} />
	</Routes>
);

export default Routing;
