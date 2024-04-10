import env from "react-dotenv";
import feathers from "@feathersjs/client"
import rest from '@feathersjs/rest-client'
import authentication from '@feathersjs/authentication-client'

const app = feathers()
const restClient = rest(process.env.REACT_APP_SERVER_URL).fetch(window.fetch.bind(window))

app.configure(restClient)
app.configure(authentication())

app.hooks({
    before:{
        all:[ addAccessTokenToAuthHeader ]
    }
})

export default app


async function addAccessTokenToAuthHeader(context){
    return
    const {accessToken} = await context.get("authentication")

    if(accessToken){

        context.headers = {
            ...context.headers,
            Authorization: `Bearer ${accessToken}`
        }
    }

    return context
}