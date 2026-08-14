// TechStack.jsx
import SkillCard from "../Shared/SkillCard";

const Skill = ({ skills }) => {
  const loopSkills = [...skills, ...skills, ...skills]; // 🔥 spread operator

  return (
    <div className="w-full overflow-hidden bg-transparent py-12">
      <div className="slider-track gap-6">
        {loopSkills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skill;