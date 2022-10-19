import { IconButton, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BsFillEyeFill, BsPencilSquare, BsFillTrashFill, BsFillHouseFill, BsBuilding } from "react-icons/bs";
import { useFetch } from '../fetch/useFetch';
import { Rental } from '../types/Rentals';
import "./rentals.css"

const getTotalReservationsText = (totalReservations : number) => {
    if(!totalReservations || totalReservations == 0){
        return "Sin reservas"
    }
    if(totalReservations == 1){
        return totalReservations + " reserva"
    }
    return totalReservations + " reservas"
}

const getRentalTypeIcon = (rental: Rental): React.ReactNode => {
    if (rental.propertyType == "APARTMENT" ){
        return (
            <Tooltip title="Departamento">
                <IconButton>
                    <BsBuilding size={"30px"} color="#7A7A7A" />
                </IconButton>
            </Tooltip>
        )
    }
    return (
        <Tooltip title="Casa">
            <IconButton>
                <BsFillHouseFill size={"30px"} color="#7A7A7A" />
            </IconButton>
        </Tooltip>
        );
}

const mapRentalToTable = (rental : Rental) => {
    return (
        <tr key={rental.id}>
            <td>
                <img
                    src={rental.photo ? rental.photo : 'https://media.gettyimages.com/photos/modern-apartment-building-facade-picture-id171354810'}
                    alt="Photo of rental"
                    style={{ width: 50, borderRadius: 50 }}
                />
            </td>
            <td> {rental.country} </td>
            <td> {`${rental.state}, ${rental.street} ${rental.streetNumber}`} </td>
            <td> {getRentalTypeIcon(rental)} </td>
            <td> {`${rental.price.amount} ${rental.price.currency.currencyName}`} </td>
            <td> {rental.host.mail} </td>
            <td> {getTotalReservationsText(rental.totalReservations)} </td>
            <td> {<BsFillEyeFill size={"25px"} color="#363636"/>} <span /> {<BsPencilSquare size={"25px"} color="#363636"/>} {<BsFillTrashFill color='red' size={"25px"}/>} </td>
        </tr>

    );

}

const rentalsTable = (data : Rental[]) => {
    if(data.length == 0){
        return <div className="alert alert-info rentals-loading-status"> No hay alojamientos para mostrar :( </div> 
    }
    return <div className='rentals-table'>
        <table className="table align-middle">
            <thead>
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
                {data.map(mapRentalToTable)}
            </tbody>
        </table>
    </div>;
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
            <div className='rentals-header'>
                <h1 className="rentals-title">Visualizador de Alojamientos</h1>
                <h2 className="rentals-total">Totales: {totalRentals} alojamientos</h2>
            </div>

            {loading &&  <div className="alert alert-info rentals-loading-status"> Cargando... </div> }
            {error &&  <div className="alert alert-danger rentals-loading-status"> Error al cargar la información </div> }
            {!loading && data && rentalsTable(data)}
        </div>
    )
}
