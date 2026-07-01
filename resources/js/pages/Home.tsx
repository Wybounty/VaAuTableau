import { Head } from '@inertiajs/react';


export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <section className="flex flex-col items-center justify-center h-screen w-full bg white">
                <h1>Home</h1>
            </section>
        </>
    );
}
