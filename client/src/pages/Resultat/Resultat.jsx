import React, { useEffect, useState } from 'react'
import { fetchResult } from '../../services/api'
import styles from './Resultat.module.css'
import Footer from '../../component/Footer/Footer'

const table = "restaurants"
const Resultat = ({ onNameClick, onNavigate }) => {

    const [data, setData] = useState([])

    let [total_oceanique, total_buffalo, total_ginza, total_mosto, total_royal, total_arcin] = Array(7).fill(0)

    useEffect(() => {
        const fetchResultData = async () => {
            try {
                const response = await fetchResult(table);
                setData(response)

            } catch (error) {
                console.error('Erreur lors de la récupération des valeurs', error);
            }
        }
        fetchResultData()
    }, [])


    let total_enfant = 0;
    let total_adulte = 0;

    data.forEach((object) => {
        total_enfant += object.nb_enfant
        return total_enfant
    })

    data.forEach((object) => {
        total_adulte += object.nb_adulte
        return total_adulte
    })

    data.forEach((item) => {
        return total_oceanique += item.oceanique
    })
    data.forEach((item) => {
        return total_buffalo += item.buffalo_grill
    })
    data.forEach((item) => {
        return total_ginza += item.ginza
    })
    data.forEach((item) => {
        return total_mosto += item.mosto_buffet
    })
    data.forEach((item) => {
        return total_royal += item.royal_buffet
    })
    data.forEach((item) => {
        return total_arcin += item.la_table_d_arcins
    })

    console.log("le total de oceanique est", total_oceanique)


    const pourcentage = (total) => {
        let result = Math.floor(total / 6 * 100);
        result += " %"
        return result
    }




    console.log(total_oceanique)
    return (
        <div className={styles.resultat}>
            <div className={styles.resultatPersonne}>
                <h2>nombre de personne</h2>
                <p>Adultes : <b>{total_adulte}</b></p>
                <p>Enfants : <b>{total_enfant}</b></p>
                <p>Total : <b>{total_adulte + total_enfant}</b></p>
            </div>

            <div className={styles.resultatRestaurant}>
                <h2>resultat Restaurant </h2>

                <p>Oceanique : <b>{pourcentage(total_oceanique)}</b></p>
                <p>Buffalo Grill : <b>{pourcentage(total_buffalo)}</b></p>
                <p>Ginza : <b>{pourcentage(total_ginza)}</b></p>
                <p>Royal Buffet : <b>{pourcentage(total_royal)}</b></p>
                <p>Mosto Buffet : <b>{pourcentage(total_mosto)}</b></p>
                <p>La table d'arcin : <b>{pourcentage(total_arcin)}</b></p>
            </div>
            <div className="footer">
                <Footer
                    name="Retour à l'accueuil"
                    page="selection"
                    onNavigate={onNavigate}
                    setName={onNameClick}
                />
            </div>
        </div>
    )
}

export default Resultat