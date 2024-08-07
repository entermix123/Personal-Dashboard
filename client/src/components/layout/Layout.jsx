import { Outlet } from 'react-router-dom';

import HeaderNavbar from '../navbar/HeaderNavbar';
import Footer from '../footer/Footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNavbar className="fixed top-0 left-0 right-0 z-50 bg-white" />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;