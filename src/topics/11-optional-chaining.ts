export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Jimena'
}

const passenger2: Passenger = {
    name: 'Ines',
    children: ['Isabella','Francesca']
}

const returnChildrenNumber = ( passenger: Passenger) => {
    //const howManyChildren = passenger.children?.length || 0;

    if( !passenger.children ) return 0;

    const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren)

    return howManyChildren;
}

returnChildrenNumber(passenger2);
returnChildrenNumber(passenger1);