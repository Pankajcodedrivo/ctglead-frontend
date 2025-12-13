type CardProps = {
  title: string;
  subtitle: string;
  img:string;
};
const LeftPanel = ({ title, subtitle, img }: CardProps) => {
    return (
        <div className="left-panel">
            <div className="top-part">
                <h1>“{title}”</h1>
                <h6>-{subtitle}</h6>
            </div>
            <div className="bottom-part text-center">
                <div className="bottom-part-wrapper">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
};

export default LeftPanel;