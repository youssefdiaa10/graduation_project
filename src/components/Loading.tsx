import { Oval } from "react-loader-spinner"

const Loading = () => {
    return (
        <div className="bg-black/20 flex justify-center items-center absolute z-10 top-0 bottom-0 right-0 left-0">
            <Oval
                visible={true}
                height="80"
                width="80"
                color="#00395E"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loading
