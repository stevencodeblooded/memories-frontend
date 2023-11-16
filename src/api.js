import { toast } from "sonner";

//FETCH MEMORIES
export async function getMemories () {
    try {
        const res = await fetch('http://localhost:5000/api/memories')

        if (!res.ok) {
            const error = await res.json()
            toast.error(error.message)
        }

        const data = await res.json()
        return data.memories

    } catch (error) {
        return toast.error(error.message)
    }

}  

//DELETE MEMORY
export async function deleteMemory () {
    try {
        const res = await fetch('http://localhost:5000/api/memories', {
            method: 'DELETE', 
        })

        const messageSuccess = await res.json()
        return messageSuccess.message

    } catch (error) {
        return toast.error(error.message)
    }
}