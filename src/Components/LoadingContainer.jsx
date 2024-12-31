import CircularProgress from "@mui/material/CircularProgress";

export function LoadingContainer(){
    return(
        <div className="flex justify-center items-center h-full">
            <CircularProgress />
        </div>
    )
}