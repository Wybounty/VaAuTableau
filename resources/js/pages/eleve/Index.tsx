import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import React from 'react';
import eleves from '@/actions/App/Http/Controllers/EleveController';

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

//console.log(eleves);


export default function Welcome(props: Props) {

    // Ajout Formulaire

    const {data, setData, post, processing, errors} = useForm({
        nom: '',
        prenom: '',
        photo: null as File | null,
    });


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(eleves.store());

        setData('nom', '');
        setData('prenom', '');
        setData('photo', null);
        //post('/eleves/create');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="flex h-screen flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex flex-row flex-wrap h-auto flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border" >
                    <h1>Ajouter un élève</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={data.nom} onChange={(e) => setData('nom', e.target.value)} placeholder="Nom" required/>
                        {errors.nom && (
                            <p className="text-sm text-red-500">{errors.nom}</p>
                        )}
                        <input type="text" value={data.prenom} onChange={(e) => setData('prenom', e.target.value)} placeholder="Prénom" required/>
                        {errors.prenom && (
                            <p className="text-sm text-red-500">{errors.prenom}</p>
                        )}
                        <input type="file" onChange={(e) => setData('photo', e.target.files?.[0] ?? null)} placeholder="Photo"/>
                        {errors.photo && (
                            <p className="text-sm text-red-500">{errors.photo}</p>
                        )}
                        <button type="submit" disabled={processing}>Ajouter</button>
                    </form>
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
