import img from "../assets/bg-2-rb.png";

export default function Promotion() {
  return (
    <section className="bg-green line">
      <div className="container top">
        <div className="intro-section">
          <div className="f-item">
            <img src={img} alt="bebek fotoğrafı" />
          </div>
          <div className="s-item">
            <h2>Hoş Geldiniz</h2>
            <p>
              Twin Baby Spa ailesi olarak Dünya'da kabul görülen suyun bebekler
              üzerindeki eşsiz etkisi ile bebek masajının faydalarını bir arada
              sunuyor, doğum öncesi ve sonrası yorulan anne ve babaların günlük
              stresini ve tüm yorgunluğunu kapıda bırakıyor, rahat, sakin ve
              keyifli ortamın tadını çıkarmaları için, onlar adına her detayı
              düşünüyor, ailecek kaliteli vakit geçirebilmelerine olanak
              sağlıyoruz. Bebeklerimizin gelişiminin altın çağında 0-12 aylık
              zaman diliminde bütün gelişim alanlarını içine alarak fiziksel,
              zihinsel ve duygusal olarak sağlıklı bireyler yetiştirmenin ilk
              adımlarını birlikte atıyoruz. Tamamen güvenli ve hijyenik ortamda
              huzurlu vakit geçirmek, bebeğinizle güzel anılar bırakabilmek,
              ebeveyn ve bebek duygu bütünlüğünün eşsiz keyfine varabilmek için
              sizleri merkezimize bekliyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
