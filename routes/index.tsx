import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Formulario from "../components/Formulario.tsx";
import IndexComponent from "../components/IndexComponent.tsx";
type Data = {
  country:string
}

type ApiPhone = {
  is_valid: string
  country: string
}

export const handler:Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const url = new URL(req.url)
    const phone = url.searchParams.get("phone") || "+34656932556"
    console.log(phone)
      const urlApi = `https://api.api-ninjas.com/v1/validatephone?number=${phone}`
      const API_KEY = Deno.env.get("API_KEY")
      console.log(API_KEY)
      const response = await fetch(urlApi, {headers:{"X-Api-Key": API_KEY}})
      if(response.status != 200) return new Response("API Ninja error")
      const data:ApiPhone = await response.json()
      if(data.is_valid){
        return ctx.render({country: data.country})
      }else{
        return new Response("Phone not valid")
      }
  }
}


const Page = (props: PageProps) => {
  const pais = props.data
  console.log(pais)
  return(
    <div>
      <IndexComponent country={pais}/>
      <Formulario/>
    </div>
  )
}

export default Page

