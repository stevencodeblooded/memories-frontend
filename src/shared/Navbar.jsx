import { FcPicture  } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-2 rounded bg-white">
      <h1 className="text-4xl font-medium text-blue-500 py-2">Memories</h1>
      <FcPicture  className="text-blue-500 text-4xl rotate-12" />
    </div>
  )
}

export default Navbar