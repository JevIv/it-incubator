export type UserType = {
    name: string
    age: number
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}
type CompanyType = { id: number, title: string };
export type CompaniesType = {
    companies: Array<CompanyType>
}

export const makeHairCut = (u: UserType, length: number) => {
    const copy = {
        ...u,
        hair: u.hair / length
    }

    return copy
}

export const moveUserToAnotherHouse = (u: UserWithLaptopType, houseNumber: number) => {
    const copy = {
        ...u,
        address: {
            ...u.address,
            house: houseNumber
        }
    }
    return copy
}

export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) => {
    const copy = {
        ...u,
        books: [...u.books, newBooks]
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
export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
        /*books: u.books.map(b => {
            if (b === oldBook) {
                return newBook
            } else {
                return b
            }

        })*/
    }
}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) => {
    return {
        ...u,
        books: u.books.filter(b => b !== bookForDelete)
    }
}
export const addCompanyToUser = (u: UserWithLaptopType & UserWithBooksType & CompaniesType, newCompany: { id: number, title: string }) => {
    return {
        ...u,
        companies: [...u.companies, newCompany]
    }
}

export const updateCompanyTitle = (u: CompaniesType, id: number, newTitle: string ) => {
    /*return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title: newTitle} : c)
    }*/

    const copy: CompaniesType = {
        ...u,
        companies: u.companies.map(c => {
            if (c.id === id) {
                return {...c, title: newTitle};
            }else return c
        })
    }
    return copy
}

export const updateCompanyTitle2 = (companies: { [ key: string ]: Array<CompanyType> },
                                    userName: string,
                                    companyId: number,
                                    newTitle: string ) => {

    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companyCopy;
}
