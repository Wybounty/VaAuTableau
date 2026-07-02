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

            <Head title="Élèves" />

            <div className="va-page-bg">

                <div className="va-page">

                    <div className="va-two-col">

                        <section className="va-form-card">

                            <span className="va-badge">Nouvel élève</span>

                            <h1 className="va-section-title">Ajouter un élève</h1>

                            <form className="va-form" onSubmit={handleSubmit}>

                                <input

                                    className="va-input"

                                    type="text"

                                    value={data.nom}

                                    onChange={(e) => setData('nom', e.target.value)}

                                    placeholder="Nom"

                                    required

                                />

                                {errors.nom && (

                                    <p className="va-error">{errors.nom}</p>

                                )}

                                <input

                                    className="va-input"

                                    type="text"

                                    value={data.prenom}

                                    onChange={(e) => setData('prenom', e.target.value)}

                                    placeholder="Prénom"

                                    required

                                />

                                {errors.prenom && (

                                    <p className="va-error">{errors.prenom}</p>

                                )}

                                <input

                                    className="va-input"

                                    type="file"

                                    onChange={(e) => setData('photo', e.target.files?.[0] ?? null)}

                                    placeholder="Photo"

                                />

                                {errors.photo && (

                                    <p className="va-error">{errors.photo}</p>

                                )}

                                <button className="va-btn va-btn--primary" type="submit" disabled={processing}>

                                    Ajouter l'élève

                                </button>

                            </form>

                        </section>



                        <section>

                            <header className="va-header-bar va-header-spaced">
                                <div>
                                    <h2 className="va-section-title">Ma classe</h2>
                                    <p className="va-class-meta va-eleve-prenom">
                                        <span className="va-count">{props.eleves.length}</span>
                                        élève{props.eleves.length > 1 ? 's' : ''} enregistré{props.eleves.length > 1 ? 's' : ''}
                                    </p>
                                </div>
                            </header>

                            <div className="va-students-grid">

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

                            </div>

                        </section>

                    </div>

                </div>

            </div>

        </>

    );

}

