import { FunctionalComponent } from "preact/src/index.d.ts";
type Props = {
    country:string
}
const IndexComponent: FunctionalComponent<Props> = (props) => {
    console.log(props)
    return(
        <div>
            <a href={`/country/${props.country}`}><h3><strong>Country</strong></h3></a>
        </div>
    )
}

export default IndexComponent