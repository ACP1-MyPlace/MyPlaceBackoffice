import React, { useState } from 'react'
import { BsFillEyeFill, BsPencilSquare, BsFillTrashFill, BsFillHouseFill, BsBuilding } from "react-icons/bs";
import "./rentals.css"

interface Rental {
    id: string;
    photo: string;
    country: string;
    address: string;
    type: "HOUSE" | "APARTMENT";
    price: number;
    host: string;
    totalReservations: number;
}

const sampleData : Rental[] = [
    {    
        id: "abc",
        photo: "https://media.gettyimages.com/photos/modern-apartment-building-facade-picture-id171354810",
        country: "Argentina",
        address: "Rivadavia 123, CABA",
        type: "APARTMENT",
        price: 120,
        host: "doe@mail.com",
        totalReservations: 15
    },
    {    
        id: "abc2",
        photo: "https://media.gettyimages.com/photos/modern-apartment-building-facade-picture-id171354810",
        country: "Argentina",
        address: "Rivadavia 123, CABA",
        type: "HOUSE",
        price: 120,
        host: "doe@mail.com",
        totalReservations: 1
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
            <td> {rental.address} </td>
            <td> {rental.type == "APARTMENT" ? <BsBuilding /> : <BsFillHouseFill />} </td>
            <td> {rental.price + " USD"} </td>
            <td> {rental.host} </td>
            <td> {getTotalReservationsText(rental.totalReservations)} </td>
            <td> {<BsFillEyeFill /> }{<BsPencilSquare />} {<BsFillTrashFill />} </td>
        </tr>

    );

}

export const Rentals = () => { 

    // TODO obtener datos
    const [totalRentals, setTotalRentals] = useState(0)

    return (
        <div>
            <h1 className="rentals-title">Visualizador de Alojamientos</h1>
            <h2 className="rentals-total">Totales: {totalRentals} alojamientos</h2>

            <div className='rentals-table'>
                <table>
                    <thead style={{color:'#E74562'}}>
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
            </div>
        </div>
    )
}