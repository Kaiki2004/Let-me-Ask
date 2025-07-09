import { useParams, Navigate } from "react-router-dom";

type RoomParams = {
    id: string
}

export function Room() {
    const params = useParams<RoomParams>()

    if (!params.id) {
        return <Navigate replace to="/" />
    }

    return (
        <div>
            <h1>room details</h1>
        </div>
    );
}