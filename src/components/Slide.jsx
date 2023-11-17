export default function Slide({img , title, paragraph}) {
  return (
    <>
        <div className="image-content">
          <span className="overlay"></span>

          <div className="card-image">
            <img src={img} alt="" className="card-img" loading="lazy" />
          </div>
        </div>

        <div className="card-content">
          <h2 className="name">{title}</h2>
          <p className="description">{paragraph}</p>

          <button className="slide-button">Randevu al</button>
        </div>
    </>
  );
}
