type props = {
  title: string;
  subtitle: string;
  img:string;
  desc:string;
};
const AgenciesSlide = ({img,title,subtitle,desc}:props) => {
  return (
    <div className="agencies-innr">
          <figure><img src={img} alt="" /></figure>
          <h3>{title}</h3>
          <h6>{subtitle}</h6>
          <p>{desc}</p>
      </div>
  )
};

export default AgenciesSlide;
