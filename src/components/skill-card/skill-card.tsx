import './skill-card.css'

interface SkillCardProps {
  title: string;
  imgUrl: string;
  id: number;
}

const SkillCard: React.FC<SkillCardProps> = ({title, imgUrl, id}) => {
  return (
    <div className={`skill-card fade-in-up`} style={{animationDelay: `${id * 200}ms`}}>
      <div className="skill-image"> <img src={imgUrl} alt={title} /></div>
      <p className="skill-title">{title}</p>
    </div>
  );
}

export default SkillCard;