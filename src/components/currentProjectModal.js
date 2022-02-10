import React, {useState, useEffect} from 'react'
import { FaTimes } from 'react-icons/fa';
import motherboard from '../static/motherboard.jpg';

const currentProjectModal = ({ project, show }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(show)
    }, [show])

    if(!showModal || !project) return <></>
    return (
        <button className='fixed left-0 right-0 top-0 bottom-0 w-full h-full z-50 bg-gray-500 bg-opacity-25' onClick={() => setShowModal(false)}>
            <div className='bg-white w-4/5 h-4/5 opacity-100 rounded-lg shadow-xl my-auto mx-auto'>
                <div className='relative w-full p-3 border-b-2 text-xl'>
                    {project.title}
                    <button className='absolute right-0 py-1 px-4' onClick={() => setShowModal(false)}><FaTimes /></button>
                </div>
                <div className='flex justify-center'>
                    <img src={motherboard} className='w-4/5 py-4 h-64 object-cover'/>
                </div>
                {project.image}
            </div>
        </button>
    )
}

export default currentProjectModal
