import Chiplet from "./Chiplet"

const SkillBox = ({ skillsInfo }) => {
    return (
        <div className="h-[300px] w-[325px] md:w-[375px] lg:w-[470px] bg-chocolate-milk text-white p-6 rounded flex-shrink-0">
            <h2 className="text-center text-2xl mb-6">{skillsInfo.header}</h2>
            {skillsInfo.arrays.map((skillRow, index) => (
                <div key={index} className="flex justify-center mb-4">
                    {skillRow.map((skillString) => (
                        <Chiplet
                            key={skillString}
                            itemName={skillString}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SkillBox