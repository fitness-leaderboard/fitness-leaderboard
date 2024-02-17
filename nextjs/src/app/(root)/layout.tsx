import NavBar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import '@css/sidebar.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root' style={{ display: 'flex' }}>
      <div className='root-container' style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <div className='wrapper' style={{ flex: 1 }}>
          <NavBar />
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
