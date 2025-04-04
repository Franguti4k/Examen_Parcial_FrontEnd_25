import { FunctionalComponent } from "preact/src/index.d.ts";
type Props = {
    country:string
    capital:string
}
const CountryContainer: FunctionalComponent<Props> = (props) => {
    return(
        <div>
            <h1>{props.country}</h1>
            <a href={`/city/${props.capital}`}><h3><strong>Capital</strong></h3></a>
        </div>
    )
}

export default CountryContainer