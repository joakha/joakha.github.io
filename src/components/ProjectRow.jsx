import { useState } from "react"

const ProjectRow = ({ projectName, description, pictures }) => {

    const [shownPictureIndex, setShownPictureIndex] = useState(0);

    const showPrevPicture = () => {
        if (shownPictureIndex > 0) {
            setShownPictureIndex(prevIndex => prevIndex - 1);
        } else {
            setShownPictureIndex(pictures.length - 1);
        }
    }

    const showNextPicture = () => {
        if (shownPictureIndex < pictures.length - 1) {
            setShownPictureIndex(prevIndex => prevIndex + 1);
        } else {
            setShownPictureIndex(0);
        }
    }

    return (
        <div>
            <h1 className="text-center font-bold text-3xl mb-12 text-chocolate-milk">{projectName}</h1>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10 mb-16">
                <div className="relative h-[300px] w-[325px] md:w-[375px] lg:w-[439px]">
                    <img src={pictures[shownPictureIndex]} className="rounded-md w-full h-full object-cover object-center" />
                    <button onClick={showPrevPicture} className=' bg-chocolate-dark rounded-xl text-xl px-6 py-4 text-white hover:text-chocolate-white absolute bottom-5 left-5 cursor-pointer'>&lArr;</button>
                    <button onClick={showNextPicture} className=' bg-chocolate-dark rounded-xl text-xl px-6 py-4 text-white hover:text-chocolate-white absolute bottom-5 right-5 cursor-pointer'>&rArr;</button>
                </div>

                <div className="h-[300px] w-[325px] md:w-[375px] lg:w-[500px] bg-chocolate-light text-white text-justify p-6 overflow-auto rounded">
                    <p>{description}</p>
                </div>
            </div>
        </div>

    )
}

export default ProjectRow