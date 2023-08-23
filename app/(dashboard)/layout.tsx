import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Navbar from '../components/Navbar';

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.auth.getSession();
    const user = data.session?.user;

    return (
        <>
            <Navbar user={user} />
            {children}
        </>
    );
}
