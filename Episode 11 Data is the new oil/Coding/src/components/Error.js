import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    return (
        <div>
            <h1>
            This is the Error page
            Error :{err.status}  {err.statusText}
            </h1>
        </div>
    )
}
export default Error