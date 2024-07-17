import adidasBall from '../images/adidasBall.png';
import adidasCleats from '../images/adidasCleats.png';
import nikeBall from '../images/nikeBall.png';
import nikeCleats from '../images/nikeCleats.png';
import pumaBall from '../images/pumaBall.png';
import pumaCleats from '../images/pumaCleats.png';

export type Soccer = {
    title: string,
    image: string,
    price: number,
    id: number
}

export const soccerList: Soccer[] = [
    {
        title: 'Adidas Soccer Ball',
        image: adidasBall,
        price: 25.00,
        id: 1
    },
    {
        title: 'Nike Soccer Ball',
        image: nikeBall,
        price: 27.00,
        id: 2
    },
    {
        title: 'Puma Soccer Ball',
        image: pumaBall,
        price: 22.00,
        id: 3
    },
    {
        title: 'Adidas Soccer Cleats',
        image: adidasCleats,
        price: 225.00,
        id: 4
    },
    {
        title: 'Nike Soccer Cleats',
        image: nikeCleats,
        price: 175.00,
        id: 5
    },
    {
        title: 'Puma Soccer Cleats',
        image: pumaCleats,
        price: 122.00,
        id: 6
    },
]