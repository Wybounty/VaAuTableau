import { Head } from '@inertiajs/react';
import React, { useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

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

    const [open, setOpen] = useState(false);
    const [eleveSelectionne, setEleveSelectionne] = useState<Eleve | null>(null);

    function goToTheBoard() {
        const randomNumber = props.eleves[Math.floor(Math.random() * props.eleves.length)].id;

        setEleveSelectionne(props.eleves[randomNumber]);
        setOpen(true);
    }


    return (
        <>
            <Head title="Dashboard" />
            <div className="va-page-bg">
                <div className="va-page">
                    <header className="va-header-bar">
                        <div>
                            <h1 className="va-title">Dashboard</h1>
                            <p className="va-subtitle va-subtitle-sm">
                                Votre classe en un coup d'œil
                                <span className="va-count va-count-inline">{props.eleves.length}</span>
                            </p>
                        </div>
                        <button
                            className="va-btn va-btn--primary"
                            onClick={goToTheBoard}
                        >
                            🎲 Tirer un élève
                        </button>
                    </header>

                    <section className="va-students-grid">
                        {props.eleves.map((eleve) => (
                            <article key={eleve.id} className="va-eleve-card">
                                <div className="va-eleve-photo-wrap">
                                    <img src={eleve.photo} alt={eleve.nom} className="va-eleve-photo" />
                                </div>
                                <div>
                                    <h2 className="va-eleve-nom">{eleve.nom}</h2>
                                    <p className="va-eleve-prenom">{eleve.prenom}</p>
                                </div>
                            </article>
                        ))}
                    </section>
                </div>
            </div>


            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button className="sr-only">Choisir un élève</button>
                </DialogTrigger>

                <DialogContent className="va-card">
                    <DialogHeader>
                        <DialogTitle className="va-section-title">Élève choisi</DialogTitle>
                    </DialogHeader>

                    <div className="va-dialog-body">
                        <div className="va-dialog-photo-wrap">
                            <img src={eleveSelectionne?.photo} alt={eleveSelectionne?.nom} className="va-dialog-photo" />
                        </div>
                        <p className="va-dialog-name">
                            {eleveSelectionne?.nom} {eleveSelectionne?.prenom}
                        </p>
                        <p className="va-eleve-prenom">Voici l'élève sélectionné !</p>
                    </div>
                </DialogContent>
            </Dialog>
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
