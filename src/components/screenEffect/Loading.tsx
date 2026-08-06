import { ClipLoader } from "react-spinners"

function Loading() {
    return (
        <div className="spinner-container flex items-center justify-center h-200">
            <ClipLoader color="blue" size={50} aria-label="Loading Spinner" />
        </div>
    )
}

export default Loading