/**
 * Type for Props
 */

export type CarsProps = {
    cars : CarProps[];
}

export type CarProps = {
    id : number;
    name : string;
    fuelType : string;
    engine: string;
    torque: string;
    topSpeed : string;
    description : string;
    exterior : string;
    interior : string[];
    type : string;
    category: string;
    price : string;
    isBooked: boolean;
    imageUrl: string;
};