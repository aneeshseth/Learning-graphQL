import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import {buildSchema} from 'graphql'
import * as path from 'path'
import fs from 'fs'

const schemaString = fs.readFileSync(path.join(__dirname, './schema.gql'), 'utf-8')
const schema = buildSchema(schemaString);

const root = {
    getUser: ({id}: any, req: any) => {
        if (id === '1') {
            return { id: '1', email: 'aneesh@gmail.com', firstname: 'aneesh', lastname: 'aneesh' };
        }
        return null;
    },
    createUser: ({input}: any, req: any) => {
        return { id: '2', ...input };
    }
}
const app = express()

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root, 
    graphiql: true
}))

app.listen(4000, () => {
    console.log("listening on 4000")
})