import { Helmet } from "react-helmet-async";
import line from "../assets/line-02.png";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Twin Baby Spa - Hakkımızda</title>
      </Helmet>
      <img src={line} alt="line" className="line-img top" />
      <div className="grid">
        <div className="container">
          <div className="grid">
            <h2 className="title">Biz kimiz?</h2>
            <p>
              Twin Baby Spa ailesi olarak sizleri ve bebeklerinizi düşünerek
              benzersiz bir şekilde tasarlanmış hidroterapi, bebek masajı ve
              ebeveyn & bebek eğitimleri gibi hizmetler sunuyoruz. Merkezimiz
              0-12 ay bebekler ile aktiviteler gerçekleştirmek isteyen ve
              bebekleri için hem gelişim destekleyici hem de hijyenik bir
              uygulama arayan aileleri dünya standartlarında uygulamalarla
              buluşturuyor. Bir anne gözünden gereken tüm tedbirler alınarak en
              hijyenik ortamlarda bebekleri dinlendiren ve rahatlatan
              aktiviteler sayesinde bebeğiniz daha huzurlu, siz daha mutlu
              olacaksınız. Tamamen güvenli ve hijyenik ortamda huzurlu vakit
              geçirmek, bebeğinizle güzel anılar bırakabilmek, ebeveyn ve bebek
              duygu bütünlüğünün eşsiz keyfine varabilmek için sizleri
              merkezimize bekliyoruz.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="grid">
            <h2 className="title">Neden Bizi Seçmelisiniz?</h2>
            <p>
              Neden bizi seçmelisiniz? Her biri alanlarında deneyimli
              takımımızla bebeğinizi dinliyor, onun için gerekenleri hazırlıyor,
              onu mutlu ediyor, rahatlatıyor, eğitiyor ve ihtiyaçlarını
              karşılıyoruz. Gözünüz arkada kalmadan birebir izleyerek verdiğimiz
              hizmeti inceleyebilme şansına sahipsiniz.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="grid">
            <h2 className="title">Misyonumuz</h2>
            <p>
              Bebeklerin hayatına sevgiyle dokunmak ve yüzüne bir gülümseme
              koymak.. Seçkin kadrosu ile teknolojik gelişmeleri takip eden
              ebeveyn ve bebek memnuniyeti odaklı, uluslararası kalite
              standartlarında hizmet anlayışı ile hijyenik koşullarda ve
              sektörde öncü uygulamalarla fark yaratarak siz ebeveynlerimiz ve
              bebeklerimize unutamayacakları bir deneyim sunmaktır.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="grid">
            <h2 className="title">Vizyonumuz</h2>
            <p>
              Tecrübe ve bilgi birikimi ile mutlu bebekler, mutlu ebeveynler
              mantığını benimseyerek bu doğrultuda başarı sağlamak. İçinde
              bulunduğumuz sektörde sağlıklı büyüme ve gelişmeyi sürdürmek,
              bütünlük içinde çeşitlenmek, küreselleşmek, yurt içinde ve dışında
              güvenilir marka olmak. Tecrübe ve bilgi birikimi ile mutlu
              bebekler, mutlu ebeveynler mantığını benimseyerek bu doğrultuda
              başarı sağlamak. İçinde bulunduğumuz sektörde sağlıklı büyüme ve
              gelişmeyi sürdürmek, bütünlük içinde çeşitlenmek, küreselleşmek,
              yurt içinde ve dışında güvenilir marka olmak.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
