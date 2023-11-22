export default function Slide({ img, title, paragraph }) {
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
        <a
          href={`https://api.whatsapp.com/send?phone=+905435679470&text=Selam ${title.toLowerCase()} hizmetiniz için randevu almak istiyorum.`}
          target="_blank"
          rel="noreferrer"
          className="slide-button"
        >
          Randevu al
        </a>
      </div>
    </>
  );
}
