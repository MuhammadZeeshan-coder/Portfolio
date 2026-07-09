// SkillCard.jsx
const SkillCard = (item) => {
    return (
        <div
            className="min-w- bg-white border border-gray-300 rounded-2xl p-5 shadow-lg"
        >
            <div className={`w-full h-fit flex justify-center text-8xl rounded-lg`}>
                {item.image}
            </div>
            <div className="flex justify-center items-center">
                <h2 className="mt-3 text-lg font-bold" style={{ fontFamily: "poppins" }}>{item.title}</h2>
            </div>
        </div>
    );
};

export default SkillCard;