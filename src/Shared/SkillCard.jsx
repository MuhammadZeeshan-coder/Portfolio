// SkillCard.jsx
const SkillCard = (item) => {
    return (
        <div
            className="w-fit bg-white border border-gray-300 rounded-2xl p-5 shadow-lg flex justify-center items-center gap-1"
        >
            <div className={`w-fit h-fit flex justify-center text-2xl rounded-lg`}>
                {item.image}
            </div>
            <div className="mb-2">
                <h2 className="mt-3 text-sm font-bold" style={{ fontFamily: "poppins" }}>{item.title}</h2>
            </div>
        </div>
    );
};

export default SkillCard;