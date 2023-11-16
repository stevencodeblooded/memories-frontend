// import memoryImage from '../assets/Login Form Beautiful.png'+
import { MdDelete } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { deleteMemory, getMemories } from '../api';
import { useEffect, useState } from 'react';
import { toast } from "sonner";

const Memory = () => {

    const [memoriesData, setMemoriesData] = useState();
    
    useEffect(() => {
        async function loadMemories () {
            try {
                const memories = await getMemories()
                setMemoriesData(memories)
            } catch (error) {
                console.log(error);
            }
        }
        loadMemories()
    }, [])

    const handleDelete  = async () => {
        try {
            const success = await deleteMemory()
            return toast.success(success)
        } catch (error) {
            return toast.error(error)
        }
        //  LOGIC
    }

    const handleLike  = async () => {
        //  LOGIC
    }

    const memory = memoriesData?.map(m => {
        // Specific date and time
        const specificDate = new Date(m.updatedAt);

        // Current date and time
        const currentDate = new Date();

        // Calculate the difference in milliseconds
        const durationInMilliseconds = currentDate - specificDate;

        // Convert milliseconds to seconds
        const durationInSeconds = durationInMilliseconds / 1000;

        // Convert seconds to years, months, days, hours, minutes, and seconds
        const years = Math.floor(durationInSeconds / (365 * 24 * 60 * 60));
        const months = Math.floor((durationInSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
        const days = Math.floor((durationInSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
        const hours = Math.floor((durationInSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((durationInSeconds % (60 * 60)) / 60);
        const seconds = Math.floor(durationInSeconds % 60);

        // Find the highest unit
        const highestUnit = {
            years,
            months,
            days,
            hours,
            minutes,
            seconds
        };

        // Get the unit with the highest value
        const maxUnit = Object.keys(highestUnit).reduce((a, b) => highestUnit[a] > highestUnit[b] ? a : b);

        return(
            <div className='w-72 bg-white rounded-lg flex flex-col' key={m.id}>
                <img src={`http://localhost:5000/uploads/${m.img}`} alt="memory" className='w-72 h-60 rounded-t-lg relative' />
                <div className='absolute text-white font-medium text-sm flex z-10 p-3 justify-between'>
                    <section>
                        <h2>{m.creator}</h2>
                        <p>{`${highestUnit[maxUnit]} ${maxUnit}`}</p>
                    </section>
                    <p className=' cursor-pointer'>...</p>
                </div>

                <div className='p-3'>
                    <p className='text-sm mb-1'>{m.tags}</p>
                    <h2 className='text-xl text-blue-500 mb-2'>{m.title}</h2>
                    <p className='text-sm mb-1'>{m.description}</p>
                    <div className='flex justify-between text-blue-500 font-medium '>
                        <section className='flex gap-1 items-center cursor-pointer'>
                            <BiSolidLike />
                            <p onClick={handleLike}>Like {m.likes}</p>
                        </section>
                        <section className='flex gap-1 items-center cursor-pointer'>
                            <MdDelete />
                            <p onClick={handleDelete}>Delete</p>
                        </section>
                    </div>
                </div>
        </div>
        )
    })

  return (
    <div className='flex flex-wrap gap-3 mb-5'>
        {memory}
    </div>
  )
}

export default Memory