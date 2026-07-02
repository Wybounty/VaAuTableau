import { Head } from '@inertiajs/react';
import React from 'react';
import { dashboard } from '@/routes';


// Get data's eleves
interface Eleve {
    id: number;
    nom: string;
    prenom: string;
    photo : string;
}

interface Props {
    eleves: Eleve[];
};


export default function Dashboard(props: Props) {

    function goToTheBoard() {
        const randomNumber = props.eleves[Math.floor(Math.random() * props.eleves.length)].id;

        console.log(randomNumber);
    }


    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex flex-row items-center justify-between w-full h-20">
                    <h1>Dashboard</h1>
                    <button onClick={goToTheBoard}>Go to the board</button>
                </div>
                <div className="flex flex-row flex-wrap h-auto flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border" >
                    {props.eleves.map((eleve) => (
                        <div key={eleve.id} className="flex flex-col items-center gap-2 w-[200px] h-[200px]">
                            <img src={eleve.photo} alt={eleve.nom} className="w-[100px] h-[100px] object-cover bg-orange-500" />
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold">{eleve.nom}</h2>
                                <p className="text-sm text-gray-500">{eleve.prenom}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
