import {Chain} from './zeus'

const chain = Chain("http://localhost:4000/graphql");

async function send() {
    try {
        const response = await chain("mutation")({
            createUser: [{
                input: {
                    email: "aneeshseth@gmail.com",
                    firstname: "aneesh",
                    lastname: "seth"
                }
            }, {
                id: true
            }]
        })
        console.log(response)   
    }  catch(e) {
        console.log(e);
    }
}

send();