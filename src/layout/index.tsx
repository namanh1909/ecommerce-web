import React from 'react';
// import '../../globals.css';
import MainNav from '@/components/dashboard/MainNav/MainNav';
import { dashboardConfig } from '@/config/dashboardConfig';
import UserNav from '@/components/dashboard/UserNav/UserNav';
import SidebarNav from '@/components/dashboard/SidebarNav/SidebarNav';

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="flex h-16 items-center justify-between py-4 px-8">
          <MainNav items={dashboardConfig.mainNav} />
          {/* <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          /> */}
          <UserNav />
        </div>
      </header>
      <div className="grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="w-[200px] flex-col md:flex pl-8">
          <SidebarNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {/* {children} */}
        </main>
      </div>
      {/* <SiteFooter className="border-t" /> */}
    </div>
  );
};

const LayoutComponent = () => {
  return <RootLayout>{}</RootLayout>;
};

export default LayoutComponent;
