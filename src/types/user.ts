declare namespace UserInterface {
    export interface User {
        id: 1;
        email: string;
        username: string;
        password: string;
        name: {
            firstname: string;
            lastname: string;
        };
        address: Address;
        phone: string;
    }

    export interface Address {
        city: string;
        street: string;
        number: number;
        zipcode: string;
        geolocation: {
            lat: string;
            long: string;
        };
    }
}
