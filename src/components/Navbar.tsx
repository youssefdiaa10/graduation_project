
const Navbar = () => {
  return (
    <div className="bg-white shadow-lg flex gap-2.5 py-10">
        <div className="ml-15 flex gap-3">
            <h1 className="font-medium">English</h1>
            <span>🌐</span>
        </div>
        <p className="text-gray-600 font-bold mx-5">|</p>
        <div>
            <h1 className="font-medium">🔍</h1>
        </div>
        <p className="text-gray-600 font-bold mx-5">|</p>
        <div className="flex gap-3">
            <span>⬇️</span>
            <h1 className="font-medium">Genre (All)</h1>
        </div>
    </div>
  )
}

export default Navbar
