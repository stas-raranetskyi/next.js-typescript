import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div>
			<Header />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
