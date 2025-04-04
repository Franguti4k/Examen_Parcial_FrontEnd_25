import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CountryContainer from "../../components/CountryContainer.tsx";
type Data = {
    country: string
    capital: string
}

type APiCountry = {
    country: string
    capital: string
}
export const handler:Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try{
    const {country} = ctx.params
    console.log(country)
    const urlApi = `https://api.api-ninjas.com/v1/country?name=${country}`
    const API_KEY = Deno.env.get("API_KEY")
    const response = await fetch(urlApi, {headers:{"X-Api-Key":API_KEY}})
    if(response.status != 200) return new Response("API Ninja error")
    const data = await response.json()
    const countryApi:APiCountry = data[0]
    return ctx.render({
        country:country,
        capital: countryApi.capital
    })
    }catch(_e){
        return new Response("Error")
    }
  }
}



const Page = (props: PageProps) => {
    const {country, capital} = props.data
    return(
        <CountryContainer country={country} capital={capital}/>
    )
  }
  
  export default Page