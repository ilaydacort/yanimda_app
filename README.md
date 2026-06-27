# 📱 Yanımda —  Yardım Uygulaması

---

## 👤 Öğrenci Bilgileri

| **Ad Soyad** | İlayda Çört|
| **Öğrenci No** |24010501023|

---

## 📌 Proje Adı

**Yanımda** — Acil Yardım & Güvenlik Kişisel Bildirim Uygulaması

---

## 🎯 Projenin Amacı ve Açıklaması

**Yanımda**, acil durumlarda kullanıcının önceden tanımladığı güvenlik kişilerine anında yardım mesajı göndermesini sağlayan bir web tabanlı prototip uygulamadır.

Uygulama, iki telefon ekranı simüle ederek şu senaryoyu göstermektedir:

- **Gönderici (Telefon 1):** Kullanıcı, ayarlar ekranından güvenlik kişileri ekler/siler ve özel mesajlar tanımlar. SOS butonuna bastığında seçili kişilere yardım mesajı iletilir.
- **Alıcı (Telefon 2):** Güvenlik kişisinin cihazında push bildirim simülasyonu görünür. Bildirime tıklanınca mesajlaşma ekranı açılır ve yanıt gönderilebilir.

Amaç; tek bir web sayfasında, gerçekçi bir mobil UI deneyimi sunarak acil yardım akışını görsel olarak prototipleyen bir demo oluşturmaktır.

---

## 🛠️ Kullanılan Teknolojiler ve Kütüphaneler

| Teknoloji / Kütüphane | Açıklama |
|---|---|
| **HTML5** | Sayfa yapısı ve içerik |
| **CSS3** | Tasarım, animasyonlar, geçiş efektleri |
| **Vanilla JavaScript (ES6+)** | Uygulama mantığı ve DOM yönetimi |
| **Phosphor Icons** | Minimalist ikon seti (`@phosphor-icons/web`) |
| **Google Fonts — Inter** | Tipografi |
| **UI Avatars API** | Dinamik profil fotoğrafı üretimi |

>  Tüm veriler tarayıcı belleğinde (JS değişkenleri) tutulmaktadır.

---

## 📁 Proje Klasör Yapısı

```
yanımda/
├── index.html      # Ana HTML dosyası — uygulama yapısı
├── style.css       # Tüm CSS stilleri, animasyonlar, telefon mockup tasarımı
└── app.js          # JavaScript uygulama mantığı — state yönetimi, render, olaylar
```

---

## ⚙️ Kurulum Adımları

Bu proje tamamen istemci taraflı (client-side) çalışmaktadır. Herhangi bir kurulum, bağımlılık yüklemesi veya sunucu gerekmemektedir.

1. Repoyu bilgisayarınıza indirin:
   ```bash
   git clone https://github.com/ilaydacort/yanimda_app.git
   ```
2. İndirilen klasörü açın.
3. `index.html` dosyasını bir web tarayıcısında açın.

---

## ▶️ Çalıştırma / Kullanım Talimatları

### Uygulamayı Başlatmak

`index.html` dosyasını doğrudan çift tıklayarak herhangi bir modern tarayıcıda (Chrome, Firefox, Edge) açabilirsiniz. Ekstra bir adım gerekmez.

### Kullanım Akışı

**Telefon 1 — Gönderici:**

1. Sağ üstteki ⚙️ (dişli) ikonuna tıklayarak **Ayarlar** ekranına girin.
2. İsim ve telefon numarası girerek güvenlik kişisi ekleyin.
3. Her kişiye özel acil mesaj tanımlayabilirsiniz.
4. Geri dönüp açılır listeden (dropdown) mesaj göndermek istediğiniz kişiyi seçin.
5. **SOS** butonuna basın — mesaj gönderildi ekranı açılır.

**Telefon 2 — Alıcı:**

1. SOS butonuna basıldıktan ~0.8 saniye sonra ekranın üstünde push bildirim simülasyonu belirir.
2. **"Gör"** butonuna tıklayarak mesajlaşma ekranına geçin.
3. Mesaj kutusuna yazıp **gönder** butonuna basarak ya da Enter'a tıklayarak yanıt verin.

---

## 🖼️ Ekran Görüntüleri

> <img width="1907" height="985" alt="Ekran görüntüsü 2026-05-29 230300" src="https://github.com/user-attachments/assets/5b9c33cf-cb84-4bcc-bdfa-f23b3ac95588" />
<img width="1910" height="989" alt="Ekran görüntüsü 2026-05-29 230312" src="https://github.com/user-attachments/assets/202be692-92d9-436b-86fd-86ceaa97c37d" />
<img width="1912" height="974" alt="Ekran görüntüsü 2026-05-29 230321" src="https://github.com/user-attachments/assets/fa8f4fd8-8419-431f-a7fa-2744e223c58d" />
<img width="1910" height="975" alt="Ekran görüntüsü 2026-05-29 230338" src="https://github.com/user-attachments/assets/355fba8f-7673-40f9-a33d-7def8c25be2d" />
<img width="1914" height="972" alt="Ekran görüntüsü 2026-05-29 230331" src="https://github.com/user-attachments/assets/ff39f315-514c-45d2-9e29-8f73a94e09d7" />





---

## 🔗 GitHub Proje Bağlantısı

https://github.com/ilaydacort/yanimda_app

---

## 📚 Kaynakça / Yararlanılan Bağlantılar

- [MDN Web Docs — JavaScript DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN Web Docs — CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)
- [Phosphor Icons](https://phosphoricons.com/)
- [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)
- [UI Avatars API](https://ui-avatars.com/)
- [CSS Tricks — Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
