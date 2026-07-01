import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <section className="flex flex-col items-center justify-center h-screen w-full bg white">
                <h1>Home</h1>
            </section>
        </>
    );
}
