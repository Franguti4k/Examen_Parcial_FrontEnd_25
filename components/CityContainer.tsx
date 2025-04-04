import { FunctionalComponent } from "preact/src/index.d.ts";
type Props = {
    country:string
    capital:string
    temp:string
}
const CityContainer: FunctionalComponent<Props> = (props) => {
    return(
        <div>
            <h1>{props.capital}</h1>
            <a href={`/city/${props.country}`}><h3><strong>Country</strong></h3></a>
            <h4>Temperatura actual: {props.temp} ºC</h4>
        </div>
    )
}

export default CityContainer