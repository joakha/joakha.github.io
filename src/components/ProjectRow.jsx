import { useState } from "react"
import Chiplet from "./Chiplet";
import Link from "./Link";

const ProjectRow = ({ projectName, stack, description, pictures, repository, liveLink }) => {

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
            <h2 className="text-center font-bold text-3xl mb-6 text-chocolate-milk">{projectName}</h2>
            <div className="flex justify-center mb-6">
                <Link
                    name={"Project Repository"}
                    address={repository}
                />
            </div>
            <div className="flex justify-center">
                <div className={`grid grid-cols-2 gap-2 lg:grid-cols-4 mb-12`}>
                    {stack.map((item) => (
                        <Chiplet key={item} itemName={item} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10 mb-16">
                <div className="relative h-[300px] w-[325px] md:w-[375px] lg:w-[439px]">
                    <img src={pictures[shownPictureIndex]} className="rounded-md w-full h-full" />
                    <button onClick={showPrevPicture} className=' bg-chocolate-milk rounded-xl text-2xl px-6 py-4 text-white hover:text-chocolate-white absolute bottom-5 left-5 cursor-pointer'>&lArr;</button>
                    <button onClick={showNextPicture} className=' bg-chocolate-milk rounded-xl text-2xl px-6 py-4 text-white hover:text-chocolate-white absolute bottom-5 right-5 cursor-pointer'>&rArr;</button>
                </div>

                <div className="flex flex-col justify-between h-[325px] w-[325px] md:w-[375px] lg:h-[300px] lg:w-[500px] bg-chocolate-light text-white p-6 rounded">
                    <p>{description}</p>
                    {liveLink &&
                        <Link
                            name={"Application is running live here!"}
                            address={liveLink}
                            color={"white"}
                            hoverColor={"amber-200"}
                        />}
                </div>
            </div>
        </div>

    )
}

export default ProjectRow