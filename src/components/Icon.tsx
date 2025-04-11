import logo from "../assets/readify_grad_proj_icon.png"

const Icon = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="book" width={68} height={68}/>
      <h1 className="text-[32px] font-bold italic ml-5 text-main-color">Bookly</h1>
    </div>
  )
}

export default Icon
