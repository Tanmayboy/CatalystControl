import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { Header } from '@/components/header';
import { SidebarNav } from '@/components/sidebar-nav';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <div className="flex flex-col h-full">
            <div className="p-4 border-b h-14 lg:h-[60px] flex items-center">
              <Link href="/dashboard" className="flex items-center gap-2 font-semibold text-lg">
                  <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                      <Rocket className="h-5 w-5" />
                  </div>
                  <span className="font-headline group-data-[collapsible=icon]:hidden">Catalyst</span>
              </Link>
            </div>
            <div className="flex-1 overflow-y-auto">
                <SidebarNav />
            </div>
        </div>
      </Sidebar>
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 md:p-6 lg:p-8 bg-transparent">
            {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
