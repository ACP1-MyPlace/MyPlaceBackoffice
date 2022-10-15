import React, { useEffect, useState } from 'react'
import { BsFillEyeFill, BsPencilSquare, BsFillTrashFill, BsFillHouseFill, BsBuilding } from "react-icons/bs";
import { useFetch } from '../fetch/useFetch';
import { Rental } from '../types/Rentals';
import "./rentals.css"



const sampleData : Rental[] = [
    {    
        host: "doe@mail.com",
        photo: "https://media.gettyimages.com/photos/modern-apartment-building-facade-picture-id171354810",
        totalReservations: 15,

        id: 1,
        userId: 2,
        propertyType: "HOUSE",
        country: "Argentina",
        state: "Buenos Aires",
        street: "Rivadavia",
        streetNumber: "4523",
        price: {
            currency: {
                currencyId: "USD",
                currencyName: "Dolares"
            },
            amount: 120
        }
    },
    {    
        host: "doe@mail.com",
        photo: "https://media.gettyimages.com/photos/modern-apartment-building-facade-picture-id171354810",
        totalReservations: 23,

        id: 2,
        userId: 2,
        propertyType: "APARTMENT",
        country: "Argentina",
        state: "Buenos Aires",
        street: "Rivadavia",
        streetNumber: "145",
        price: {
            currency: {
                currencyId: "ARS",
                currencyName: "Pesos argentinos"
            },
            amount: 5000
        }
    }
]

const getTotalReservationsText = (totalReservations : number) => {
    if(totalReservations == 0){
        return "Sin reservas"
    }
    if(totalReservations == 1){
        return totalReservations + " reserva"
    }
    return totalReservations + " reservas"
}

const mapRentalToTable = (rental : Rental) => {
    return (
        <tr key={rental.id}>
            <td>
                <img
                    src={rental.photo}
                    alt="Photo of rental"
                    style={{ width: 50, borderRadius: 50 }}
                />
            </td>
            <td> {rental.country} </td>
            <td> {`${rental.state}, ${rental.street} ${rental.streetNumber}`} </td>
            <td> {rental.propertyType == "APARTMENT" ? <BsBuilding /> : <BsFillHouseFill />} </td>
            <td> {`${rental.price.amount} ${rental.price.currency.currencyName}`} </td>
            <td> {rental.host} </td>
            <td> {getTotalReservationsText(rental.totalReservations)} </td>
            <td> {<BsFillEyeFill /> }{<BsPencilSquare />} {<BsFillTrashFill />} </td>
        </tr>

    );

}

export const Rentals = () => { 

    // TODO agregar token y url configurable
    const url = "http://localhost:8080/api/v1/accommodations";

    const {data, loading, error} = useFetch<Rental[]>(url)
    const [totalRentals, setTotalRentals] = useState(0)

    useEffect(() => {
        if(data)
            setTotalRentals(data.length)
    }, [data])

    return (
        <div>
            <h1 className="rentals-title">Visualizador de Alojamientos</h1>
            <h2 className="rentals-total">Totales: {totalRentals} alojamientos</h2>

            {loading &&  <div className="alert alert-info"> Cargando... </div> }
            {error &&  <div className="alert alert-danger"> Error cargando la información </div> }
            {!loading && data && rentalsTable(data)}
        </div>
    )
}

const rentalsTable = (data : Rental[]) => {
    

    return <div className='rentals-table'>
        <table>
            <thead style={{ color: '#E74562' }}>
                <tr>
                    <th>Foto</th>
                    <th>País</th>
                    <th>Dirección</th>
                    <th>Tipo</th>
                    <th>Precio</th>
                    <th>Anfitrión</th>
                    <th>Historico reservas</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {sampleData.map(mapRentalToTable)}
            </tbody>
        </table>
    </div>;
}
