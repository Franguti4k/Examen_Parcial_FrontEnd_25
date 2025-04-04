import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CityContainer from "../../components/CityContainer.tsx";

type Data = {
    capital: string
    country: string
    temp:string
}
type ApiCity = {
    latitude:string
    longitude:string
    country: string
}
type ApiWeather = {
    temp:string
}
export const handler:Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
      try{
        const {city} = ctx.params
        const urlApi = `https://api.api-ninjas.com/v1/city?name=${city}`
        const API_KEY = Deno.env.get("API_KEY")
        const response = await fetch(urlApi, {headers:{"X-Api-Key":API_KEY}})
        if(response.status != 200) return new Response("API Ninja error")
        const data = await response.json()
        const cityApi:ApiCity = data[0]
        const urlApiw = `https://api.api-ninjas.com/v1/weather?lat=${cityApi.latitude}&lon=${city.longitude}`
        const responsew = await fetch(urlApiw, {headers:{"X-Api-Key":API_KEY}})
        if(responsew.status != 200) return new Response("API Ninja error")
        const dataw = await response.json()
        const weatherApi:ApiWeather= dataw[0]
        return ctx.render({
            capital: city,
            country: cityApi.country,
            temp: weatherApi.temp
        })
      }catch(_e){
          return new Response("Error")
      }
    }
  }
  
  
  
  const Page = (props: PageProps) => {
      const {capital, country, temp} = props.data
      return(
          <CityContainer capital={capital} country={country} temp={temp}/>
      )
    }
    
    export default Page