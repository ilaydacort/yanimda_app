📱 Yanımda — Yardım Uygulaması
👤 Öğrenci Bilgileri
| Ad Soyad | İlayda Çört| | Öğrenci No | 24010501023 |

📌 Proje Adı
Yanımda — Acil Yardım & Güvenlik Kişisel Bildirim Uygulaması

🎯 Projenin Amacı ve Açıklaması
Yanımda, acil durumlarda kullanıcının önceden tanımladığı güvenlik kişilerine anında yardım mesajı göndermesini sağlayan bir web tabanlı prototip uygulamadır.

Uygulama, iki telefon ekranı simüle ederek şu senaryoyu göstermektedir:

Gönderici (Telefon 1): Kullanıcı, ayarlar ekranından güvenlik kişileri ekler/siler ve özel mesajlar tanımlar. SOS butonuna bastığında seçili kişilere yardım mesajı iletilir.
Alıcı (Telefon 2): Güvenlik kişisinin cihazında push bildirim simülasyonu görünür. Bildirime tıklanınca mesajlaşma ekranı açılır ve yanıt gönderilebilir.
Amaç; tek bir web sayfasında, gerçekçi bir mobil UI deneyimi sunarak acil yardım akışını görsel olarak prototipleyen bir demo oluşturmaktır.

🛠️ Kullanılan Teknolojiler ve Kütüphaneler
Teknoloji / Kütüphane	Açıklama
HTML5	Sayfa yapısı ve içerik
CSS3	Tasarım, animasyonlar, geçiş efektleri
Vanilla JavaScript (ES6+)	Uygulama mantığı ve DOM yönetimi
Phosphor Icons	Minimalist ikon seti (@phosphor-icons/web)
Google Fonts — Inter	Tipografi
UI Avatars API	Dinamik profil fotoğrafı üretimi
Tüm veriler tarayıcı belleğinde (JS değişkenleri) tutulmaktadır.

📁 Proje Klasör Yapısı
yanımda/
├── index.html      # Ana HTML dosyası — uygulama yapısı
├── style.css       # Tüm CSS stilleri, animasyonlar, telefon mockup tasarımı
└── app.js          # JavaScript uygulama mantığı — state yönetimi, render, olaylar
⚙️ Kurulum Adımları
Bu proje tamamen istemci taraflı (client-side) çalışmaktadır. Herhangi bir kurulum, bağımlılık yüklemesi veya sunucu gerekmemektedir.

Repoyu bilgisayarınıza indirin:
git clone https://github.com/ilaydacort/yanimda_app.git
İndirilen klasörü açın.
index.html dosyasını bir web tarayıcısında açın.
▶️ Çalıştırma / Kullanım Talimatları
Uygulamayı Başlatmak
index.html dosyasını doğrudan çift tıklayarak herhangi bir modern tarayıcıda (Chrome, Firefox, Edge) açabilirsiniz. Ekstra bir adım gerekmez.

Kullanım Akışı
Telefon 1 — Gönderici:

Sağ üstteki ⚙️ (dişli) ikonuna tıklayarak Ayarlar ekranına girin.
İsim ve telefon numarası girerek güvenlik kişisi ekleyin.
Her kişiye özel acil mesaj tanımlayabilirsiniz.
Geri dönüp açılır listeden (dropdown) mesaj göndermek istediğiniz kişiyi seçin.
SOS butonuna basın — mesaj gönderildi ekranı açılır.
Telefon 2 — Alıcı:

SOS butonuna basıldıktan ~0.8 saniye sonra ekranın üstünde push bildirim simülasyonu belirir.
"Gör" butonuna tıklayarak mesajlaşma ekranına geçin.
Mesaj kutusuna yazıp gönder butonuna basarak ya da Enter'a tıklayarak yanıt verin.
🖼️ Ekran Görüntüleri
Ekran görüntüsü 2026-05-29 230300
Ekran görüntüsü 2026-05-29 230312 Ekran görüntüsü 2026-05-29 230321 Ekran görüntüsü 2026-05-29 230338 Ekran görüntüsü 2026-05-29 230331
🔗 GitHub Proje Bağlantısı
https://github.com/ilaydacort/yanimda_app

📚 Kaynakça / Yararlanılan Bağlantılar
MDN Web Docs — JavaScript DOM
MDN Web Docs — CSS Animations
Phosphor Icons
Google Fonts — Inter
UI Avatars API
CSS Tricks — Flexbox Guide
