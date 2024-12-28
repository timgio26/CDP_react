import { useParams } from "react-router";

export function CustomerDetail(){
    let {id} = useParams();
    // console.log(params)
    return(
        <div>
            <h1>Customer Details {id}</h1>
        </div>
    )
}