
export interface Rental {
    photo: string;
    totalReservations: number;
    host: string;

    id: number;
    userId: number;
    propertyType: "HOUSE" | "APARTMENT";
    country: string;
    state: string;
    street: string;
    streetNumber: string;
    floor?: string;
    apartment?: string;
    roomsCount?: number;
    bathroomCount?: number;
    garageAvailable?: boolean;
    petsAvailable?: boolean;
    services?: ("WIFI" | "KITCHEN" | "TV" | "LAUNDRY")[];
    price: {
        currency: {
            currencyId:string,
            currencyName:string
        },
        amount: number
    }
}