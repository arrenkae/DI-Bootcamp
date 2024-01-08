import inquirer from 'inquirer';

export const userPrompt = async(userlist) => {
    inquirer
        .prompt([
            {
                name: 'name',
                message: 'Name: ',
            },
            {
                name: 'address',
                message: 'Address: ',
            },
            {
                name: 'country',
                message: 'Country: '
            }
        ])
        .then((answers) => {
            const user = {
                name: answers.name,
                address: answers.address,
                country: answers.country
            }
            userlist.push(user);
            console.log(userlist);
        })
        .catch((error) => {
            console.log(error.message);
        });
}