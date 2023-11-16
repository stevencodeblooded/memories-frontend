import CreatMemory from "./CreatMemory"
// import EditMemory from "./EditMemory"
import Memory from "./Memory"

const MemorySection = () => {
  return (
    <div className="">
        <Memory />
        {/* <EditMemory /> */}
        <CreatMemory />
    </div>
  )
}

export default MemorySection