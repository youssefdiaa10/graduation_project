
import { IInput } from "../utils/types"

const Input = ({
    div_class,
    label_class,
    label_text,
    input_id,
    input_type,
    input_class,
    placeholder
    } : IInput) => {

    return (
    <>
        <div className={div_class}>
            <label htmlFor={input_id} className={label_class}>{label_text}</label>
            <input type={input_type} id={input_id} className={input_class} placeholder={placeholder}/>
        </div>
    </>
  )
}

export default Input