type TabButtonProps = {
  label: string;
  desc:string;
  img: string;
  isActive: boolean;
  onClick: () => void;
};
const TabButton = ({ label,desc,img, isActive, onClick }: TabButtonProps) => {
  return (
    <button
      className={`tab-btn ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <span className="tab-img"><img src={img} alt="" /></span>
      <h5>{label}</h5>
      <p>{desc}</p>
    </button>
  );
};

export default TabButton;