import { faker } from '@faker-js/faker';

export const addFakeUsers = async(userlist, number) => {
    for (let i=0; i<number; i++) {
        const user = {
            name: faker.person.firstName(),
            address: faker.location.streetAddress(),
            country: faker.location.country()
        }
        userlist.push(user);
    }
}