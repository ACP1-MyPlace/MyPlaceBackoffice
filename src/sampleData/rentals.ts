import { Rental } from "../types/Rentals"

export const rentals : Rental[] = [
    {    
        photo: "https://media.gettyimages.com/photos/modern-apartment-building-facade-picture-id171354810",
        totalReservations: 15,
        host: {
            id: 1,
            mail: "doe@mail.com",
            firstName: "Doe",
            lastName: "Mayer",
            type: "HOST_USER"
        },
        id: 1,
        userId: 2,
        propertyType: "HOUSE",
        country: "Argentina",
        state: "Buenos Aires",
        street: "Rivadavia",
        streetNumber: "4523",
        floor: "2",
        apartment: "A",
        roomsCount: 2,
        bathroomCount: 1,
        garageAvailable: true,
        petsAvailable: true,
        services: ["WIFI" , "KITCHEN", "TV" , "LAUNDRY"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Pellentesque diam volutpat commodo sed egestas egestas. Et netus et malesuada fames ac turpis egestas sed. Odio morbi quis commodo odio aenean sed adipiscing.",
        price: {
            currency: {
                currencyId: "USD",
                currencyName: "Dolares"
            },
            amount: 120
        }
    },
    {    
        photo: "https://media.gettyimages.com/photos/modern-apartment-building-facade-picture-id171354810",
        totalReservations: 23,
        host: {
            id: 2,
            mail: "doe@mail.com",
            firstName: "Doe",
            lastName: "Mayer",
            type: "HOST_USER"
        },
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
                currencyName: "Pesos ARS"
            },
            amount: 5000
        }
    }
]