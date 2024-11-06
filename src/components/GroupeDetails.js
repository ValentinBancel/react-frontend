import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaMoneyBillWave, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const GroupeDetails = () => {
    const { id } = useParams(); 
    const [group, setGroup] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchGroupDetails = async () => {
            try {
                const response = await fetch(`http://localhost/react-wordpress-projet/wordpress/wp-json/tribe/events/v1/events/${id}`);
                if (!response.ok) {
                    throw new Error('Erreur de chargement des détails du groupe');
                }
                const data = await response.json();
                console.log(data); 
                setGroup(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGroupDetails();
    }, [id]);

    if (loading) return <p className="text-center">Chargement...</p>; 
    if (error) return <p className="text-center text-red-500">Erreur : {error}</p>; 
    if (!group) return <p className="text-center">Aucun groupe trouvé.</p>; 

    return (
        <div>
            {/* Bannière en arrière-plan */}
            <div className="relative">
                <img
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Bannière"
                    className="w-full h-64 object-cover opacity-90"
                />
            </div>
            {/* Carte au premier plan */}
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-8 z-10 mt-20">
                <h2 className="text-3xl font-bold mb-4">{group.title}</h2>
                <p className="text-gray-700 mb-2">
                    <strong>Description :</strong> {group.description || 'Aucune description fournie'}
                </p>
                <div className="mb-4">
                    <p className="flex items-center">
                        <FaMoneyBillWave className="mr-2 text-green-600" />
                        <strong>Coût :</strong> {group.cost || 'Non spécifié'}
                    </p>
                    <p className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-blue-600" />
                        <strong>Lieu :</strong> 
                        {
                            group.venue && Array.isArray(group.venue) && group.venue.length > 0
                            ? group.venue[0].venue
                            : (group.venue && group.venue.name) 
                                ? group.venue.name
                                : 'Non spécifié'
                        }
                    </p>
                    <p className="flex items-center">
                        <FaUser className="mr-2 text-purple-600" />
                        <strong>Organisateur :</strong> {group.organizer && group.organizer.length > 0 ? group.organizer[0].organizer : 'Non spécifié'}
                    </p>
                </div>
                <p className="text-gray-500">
                    <strong>Date de début :</strong> {new Date(group.start_date).toLocaleString()}
                </p>
                <p className="text-gray-500">
                    <strong>Date de fin :</strong> {new Date(group.end_date).toLocaleString()}
                </p>
                <h2 className="font-bold mt-8">Commender son billet</h2>
                <a href="https://tickets.paris2024.org/" 
                    className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                    Get Started Today
                </a>   
            </div>
        </div>
    );
};

export default GroupeDetails;
