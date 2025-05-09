import logo from "../assets/readify_grad_proj_icon.png"

type Props = {
  text: string;
  text_className: string;
}

const Icon = ({
  text,
  text_className,
}: Props) => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="book" width={68} height={68} />
      <h1 className={text_className}>{text}</h1>
    </div>
  )
}

export default Icon
