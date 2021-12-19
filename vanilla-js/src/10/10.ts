
export type UserType = {
    name: string
    age: number
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export const increaseAge = (u: UserType) => {
    u.age++
}

export const makeHairCut = (u: UserType, length: number) => {
    const copy = {
        ...u,
        hair: u.hair / length
    }

    return copy
}

export const moveUser = (u: UserWithLaptopType, newPlace: string) => {
    const copy = {
        ...u,
        address: {
            ...u.address,
            city: newPlace
        }
    }
/*    copy.address = {
        ...u.address,
        city: newPlace
    }*/

    return copy
}
export const upgradeUserLaptop = (u: UserWithLaptopType, newLaptop: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: newLaptop
        }
    }
}
