import NavBarSub from '@/components/NavBarSub';
import Link from 'next/link';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ team: string }>;
}) {
  return (
    <section>
      <header>
        <NavBarSub />
      </header>
      <main>{children}</main>
    </section>
  );
}
