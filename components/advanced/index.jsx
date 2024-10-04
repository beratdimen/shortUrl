import "../advanced/advanced.css";

export default function Advanced() {
  const data = [
    {
      id: 1,
      img: "./img/recongition.png",
      title: "Brand Recognition",
      content:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      id: 2,
      img: "./img/records.png",
      title: "Detailed Records",
      content:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: 3,
      img: "./img/customizable.png",
      title: "Fully Customizable",
      content:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <div className="advancedContainer">
      <div className="content">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="boxContainer">
        {data.map((x) => (
          <div className="box" key={x.id}>
            <img src={x.img} alt="" />
            <h4>{x.title}</h4>
            <p>{x.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
