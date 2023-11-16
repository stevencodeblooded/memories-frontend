import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { toast } from "sonner"

const CreatMemory = () => {
    const navigate = useNavigate()

    const [memoryData, setMemoryData] = useState({
        creator: '',
        img: '',
        tags: '', 
        title: '', 
        description: '', 
    });

    const handleChange = (e) => {
        const { name, value } =  e.target
        setMemoryData(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const handleImage = (e) => {
        setMemoryData({ ...memoryData, img: e.target.files[0]})
    }

    const handleClear = () => {
        setMemoryData({
            creator: '',
            img: '',
            tags: '', 
            title: '', 
            description: '', 
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('creator', memoryData.creator)
        formData.append('img', memoryData.img)
        formData.append('tags', memoryData.tags)
        formData.append('title', memoryData.title)
        formData.append('description', memoryData.description)

        try {
            const res = await fetch('http://localhost:5000/api/memories', {
                method: 'POST',
                body: formData
            })

            if (!res.ok) {
                const data = await res.json()
                console.log(data);
            }

            const data = await res.json()
            toast.message(data.message)
            return navigate('/')

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="bg-white rounded-sm w-72 pt-2">
        <h2 className="text-xl text-blue-500 text-center">Creating a Memory</h2>
        <form className="flex flex-col gap-2 p-3" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="creator" 
                placeholder="Creator" 
                className="p-2 bg-blue-100 rounded-sm"
                value={memoryData.creator}
                onChange={handleChange}
            />    
            <input 
                type="text" 
                name="title" 
                placeholder="Title"
                className="p-2 bg-blue-100"
                value={memoryData.title}
                onChange={handleChange}
            />    
            <textarea 
                name="description" 
                rows="4" 
                placeholder="Message"
                className="p-2 bg-blue-100"
                value={memoryData.description}
                onChange={handleChange}
            ></textarea>
            <input 
                type="text" name="tags" 
                placeholder="Tags(Coma separated)" 
                className="p-2 bg-blue-100"
                onChange={handleChange}
            />
            <input 
                type="file" name="img"  
                accept=".jpg, .jpeg, .png"
                className=" file:bg-blue-100 file:border-0 file:p-2"
                onChange={handleImage}
            />
            <button 
                type="submit"
                className="bg-blue-700 text-white font-medium py-1"
            >
                Submit
            </button>
            <button 
                type="button"
                onClick={handleClear}
                className="bg-red-600 text-white font-medium py-1"
            >
                Clear
            </button>
        </form>
    </div>
  )
}

export default CreatMemory