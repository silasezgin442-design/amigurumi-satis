/* =====================================================================
   StilCrochet — veri dosyası
   Ana sayfadaki kartlar, urun.html ve tarif.html içeriklerini buradan alır.

   YENİ ÜRÜN EKLEMEK İÇİN:
   URUNLER listesine aşağıdakilerden birini kopyalayıp yapıştırın ve
   bilgileri değiştirin. "id" benzersiz olmalı; Türkçe karakter ve boşluk
   kullanmayın (ör. "mavi-fil"). Resmi images/ klasörüne koyun.
   Sayfası kendiliğinden oluşur: urun.html?urun=mavi-fil

   YENİ TARİF EKLEMEK İÇİN:
   TARIFLER listesine bir kayıt ekleyin. "seviye": "baslangic", "orta"
   ya da "ileri" olabilir. Adım sayısını yazmanıza gerek yok, adımlardan
   kendiliğinden sayılır. Sayfası: tarif.html?tarif=<id>

   Not: Bu bir tasarım örneğidir; ürünler, fiyatlar ve tarifler örnektir.
   ===================================================================== */

const URUNLER = [
    {
        id: "ikili-anahtarlik",
        ad: "İkili Amigurumi Anahtarlık",
        kategori: "Anahtarlık",
        fiyat: 180,
        resim: {
            dosya: "images/ikili-anahtarlik.jpg",
            genislik: 646,
            yukseklik: 720,
            aciklama: "Elde tutulan iki amigurumi anahtarlık: gri kedi ve beyaz ördek"
        },
        aciklama: "Gri kedi ve beyaz ördekten oluşan bu ikili, çantanıza ya da anahtarınıza küçük bir neşe katar. Her biri pamuk iplikle, tek tek elde örülür; ikisi de paylaşılmak için yapıldı: biri size, biri sevdiğinize.",
        ozellikler: [
            ["Malzeme", "%100 pamuk amigurumi ipliği"],
            ["Boyut", "Her biri yaklaşık 8 cm"],
            ["Dolgu", "Antialerjik elyaf"],
            ["Gözler", "Güvenlikli plastik göz"],
            ["Bakım", "Elde, soğuk suyla yıkayın; sıkmadan kurutun"]
        ]
    },
    {
        id: "kucuk-kiz",
        ad: "Küçük Kız Bebek",
        kategori: "Amigurumi Bebek",
        fiyat: 320,
        resim: {
            dosya: "images/kucuk-kiz.jpg",
            genislik: 681,
            yukseklik: 1311,
            aciklama: "Uzun kahverengi saçlı, pembe elbiseli ve pembe ayakkabılı amigurumi kız bebek"
        },
        aciklama: "Uzun kahverengi saçları, pembe elbisesi ve minik pembe ayakkabılarıyla tatlı bir arkadaş. Saçları tel tel bağlanır, yüz ifadesi el işlemesiyle tamamlanır; çocuk odalarına ya da bir rafa sıcak bir dokunuş katar.",
        ozellikler: [
            ["Malzeme", "%100 pamuk amigurumi ipliği"],
            ["Boyut", "Yaklaşık 25 cm"],
            ["Saç", "Akrilik ip, tel tel bağlanmış"],
            ["Dolgu", "Antialerjik elyaf"],
            ["Gözler", "Güvenlikli plastik göz"],
            ["Bakım", "Elde, soğuk suyla yıkayın; sıkmadan kurutun"]
        ]
    },
    {
        id: "ikiz-kardesler",
        ad: "İkiz Kardeşler Seti",
        kategori: "Amigurumi Bebek",
        fiyat: 550,
        resim: {
            dosya: "images/ikiz-kardesler.jpg",
            genislik: 709,
            yukseklik: 1269,
            aciklama: "Biri büyük, biri küçük iki amigurumi kız bebek: kıvırcık saçlı abla ve kırmızı elbiseli kardeş"
        },
        aciklama: "Kıvırcık saçlı, fırfırlı pembe etekli abla ve kırmızı elbiseli küçük kardeşi bir arada. Ablanın omzundaki minik çanta bile elde örülür. Kardeşlere ya da anne-kız ikililerine anlamlı bir hediye.",
        ozellikler: [
            ["Set", "2 bebek"],
            ["Malzeme", "%100 pamuk amigurumi ipliği"],
            ["Boyut", "Büyük yaklaşık 40 cm, küçük yaklaşık 22 cm"],
            ["Dolgu", "Antialerjik elyaf"],
            ["Gözler", "Güvenlikli plastik göz"],
            ["Bakım", "Elde, soğuk suyla yıkayın; sıkmadan kurutun"]
        ]
    },
    {
        id: "orgu-sacli-kiz",
        ad: "Örgü Saçlı Kız",
        kategori: "Amigurumi Bebek",
        fiyat: 350,
        resim: {
            dosya: "images/orgu-sacli-kiz.jpg",
            genislik: 657,
            yukseklik: 945,
            aciklama: "Kıvırcık kahverengi saçlı, mavi dantel bluzlu ve pembe fırfırlı etekli amigurumi kız bebek"
        },
        aciklama: "Tek tek örülüp kıvrılan kahverengi saçları, mavi dantel bluzu ve kat kat pembe eteğiyle koleksiyonun en gösterişli üyesi. Uzun kolları ve bacaklarıyla oturtulabilir, rafta da kucakta da güzel durur.",
        ozellikler: [
            ["Malzeme", "%100 pamuk amigurumi ipliği"],
            ["Boyut", "Yaklaşık 35 cm"],
            ["Saç", "Örülerek kıvrılmış pamuk ip"],
            ["Dolgu", "Antialerjik elyaf"],
            ["Gözler", "Güvenlikli plastik göz"],
            ["Bakım", "Elde, soğuk suyla yıkayın; sıkmadan kurutun"]
        ]
    }
]

const TARIFLER = [
    {
        id: "mini-kaktus",
        ad: "Mini Kaktüs Amigurumi",
        seviye: "baslangic",
        ikon: "fa-star",
        sure: "45 dk",
        boyut: "Yaklaşık 10 cm",
        ozet: "Örgüye yeni başlayanlar için ilk amigurumi: küçük bir saksıda, tepesinde pembe çiçeğiyle sevimli bir kaktüs. Sadece temel ilmekleri bilmeniz yeterli.",
        malzemeler: [
            "Yeşil pamuk ip (yaklaşık 20 g)",
            "Kahverengi ya da kiremit rengi pamuk ip (saksı, yaklaşık 15 g)",
            "Pembe ip (çiçek, çok az)",
            "2,5 mm tığ",
            "Elyaf (dolgu için)",
            "6 mm güvenlikli göz (isteğe bağlı)",
            "Yün iğnesi, makas, ilmek işaretleyici"
        ],
        kisaltmalar: [
            ["SH", "Sihirli halka"],
            ["s", "Sık iğne"],
            ["art", "Arttırma (aynı ilmeğe 2 sık iğne)"],
            ["zn", "Zincir"],
            ["kİ", "Kaydırma iğnesi"],
            ["( )", "Turun sonundaki ilmek sayısı"]
        ],
        bolumler: [
            {
                baslik: "Kaktüs (yeşil ip)",
                adimlar: [
                    "SH içine 6 s örün. (6)",
                    "Her ilmeğe art yapın. (12)",
                    "*1 s, art* tekrarını 6 kez örün. (18)",
                    "4. turdan 10. tura kadar her ilmeğe 1 s örün. Sadece arka ilmekten örerseniz kaktüse çizgili bir doku verirsiniz. (18)",
                    "Göz takacaksanız 7. ve 8. turlar arasına, 6 ilmek arayla yerleştirin. Gövdeyi elyafla sıkıca doldurun."
                ]
            },
            {
                baslik: "Saksı (kahverengi ip)",
                adimlar: [
                    "SH içine 6 s örün. (6)",
                    "Her ilmeğe art (12), sonra *1 s, art* (18), sonra *2 s, art* (24) turlarını örün.",
                    "Sadece arka ilmekten 1 tur s örün; saksının tabanı belirginleşir. (24)",
                    "4 tur boyunca her ilmeğe 1 s örün. (24)",
                    "Saksı kenarı için sadece ön ilmekten 1 tur s, ardından 1 tur normal s örün ve kİ ile bitirin."
                ]
            },
            {
                baslik: "Birleştirme ve çiçek",
                adimlar: [
                    "Saksıyı biraz elyafla doldurun, kaktüsü içine yerleştirip kenarından dikin.",
                    "Pembe iple SH içine 5 kez *2 zn, 1 kİ* örerek çiçeği yapın, kaktüsün tepesine dikin ve ip uçlarını gizleyin."
                ]
            }
        ]
    },
    {
        id: "sevimli-ayicik",
        ad: "Sevimli Ayıcık Amigurumi",
        seviye: "orta",
        ikon: "fa-fire",
        sure: "2 saat",
        boyut: "Yaklaşık 15 cm",
        ozet: "Yuvarlak kulakları ve krem rengi burnuyla klasik bir oyuncak ayı. Arttırma ve azaltmaya alıştıysanız parçaları ayrı örüp birleştirmeyi öğrenmek için ideal bir proje.",
        malzemeler: [
            "Açık kahverengi pamuk ip (yaklaşık 50 g)",
            "Krem rengi pamuk ip (burun, çok az)",
            "Koyu kahverengi ip (burun işlemesi için)",
            "2,5 mm tığ",
            "8 mm güvenlikli göz (1 çift)",
            "Elyaf (dolgu için)",
            "Yün iğnesi, makas, ilmek işaretleyici",
            "Kurdele (isteğe bağlı)"
        ],
        kisaltmalar: [
            ["SH", "Sihirli halka"],
            ["s", "Sık iğne"],
            ["art", "Arttırma (aynı ilmeğe 2 sık iğne)"],
            ["azl", "Azaltma (2 ilmeği birlikte örme)"],
            ["kİ", "Kaydırma iğnesi"],
            ["( )", "Turun sonundaki ilmek sayısı"]
        ],
        bolumler: [
            {
                baslik: "Kafa (açık kahverengi ip)",
                adimlar: [
                    "SH içine 6 s örün. (6)",
                    "Her ilmeğe art yapın. (12)",
                    "*1 s, art* tekrarını 6 kez örün. (18)",
                    "*2 s, art* tekrarını 6 kez örün. (24)",
                    "*3 s, art* tekrarını 6 kez örün. (30)",
                    "6. turdan 12. tura kadar her ilmeğe 1 s örün. Gözleri 9. ve 10. turlar arasına, 7 ilmek arayla takın. (30)",
                    "*3 s, azl* (24), *2 s, azl* (18) turlarını örün; kafayı doldurun. *1 s, azl* (12) ve her ilmeğe azl (6) ile kapatın."
                ]
            },
            {
                baslik: "Gövde",
                adimlar: [
                    "SH içine 6 s, ardından art (12), *1 s, art* (18) ve *2 s, art* (24) turlarını örün.",
                    "5. turdan 9. tura kadar her ilmeğe 1 s örün. (24)",
                    "*2 s, azl* tekrarını 6 kez örün. (18)",
                    "2 tur boyunca her ilmeğe 1 s örün ve gövdeyi doldurun. (18)",
                    "*1 s, azl* tekrarını 6 kez örün; birleştirme için uzun ip bırakın. (12)"
                ]
            },
            {
                baslik: "Kollar ve bacaklar",
                adimlar: [
                    "Kollar (2 adet): SH içine 6 s, *1 s, art* (9), ardından 6 tur 1 s örün; hafifçe doldurup kapatın.",
                    "Bacaklar (2 adet): SH içine 6 s, art (12), ardından 4 tur 1 s örün. (12)",
                    "*2 s, azl* (9) ve 3 tur 1 s örün; bacakları doldurun. (9)",
                    "Bacakları gövdenin altına, kolları gövdenin üst yanlarına dikin."
                ]
            },
            {
                baslik: "Kulaklar ve burun",
                adimlar: [
                    "Kulaklar (2 adet): SH içine 6 s, art (12), 2 tur 1 s örün; ikiye katlayıp kafaya dikin.",
                    "Burun (krem ip): SH içine 6 s, *1 s, art* (9), 1 tur 1 s örün; koyu kahve iple burun ucunu işleyip yüze dikin."
                ]
            },
            {
                baslik: "Birleştirme",
                adimlar: [
                    "Kafayı gövdeye dikin; dikişleri ilmeklerin arasından geçirerek gizleyin.",
                    "İsterseniz boynuna kurdele bağlayın ve tüm ip uçlarını gizleyin."
                ]
            }
        ]
    },
    {
        id: "uzun-bacakli-tavsan",
        ad: "Uzun Bacaklı Tavşan Amigurumi",
        seviye: "ileri",
        ikon: "fa-award",
        sure: "4 saat",
        boyut: "Yaklaşık 30 cm",
        ozet: "Uzun kulakları, ince uzun kol ve bacakları ve fırfırlı pembe elbisesiyle zarif bir tavşan. Çok parçalı yapısı ve elbise detayıyla deneyimli örücüler için keyifli bir meydan okuma.",
        malzemeler: [
            "Krem rengi pamuk ip (yaklaşık 80 g)",
            "Pembe pamuk ip (elbise, yaklaşık 40 g)",
            "Koyu kahverengi ip (burun ve bıyık, çok az)",
            "2,5 mm tığ (gövde) ve 3 mm tığ (elbise)",
            "10 mm güvenlikli göz (1 çift)",
            "Elyaf (dolgu için)",
            "Yün iğnesi, makas, ilmek işaretleyici"
        ],
        kisaltmalar: [
            ["SH", "Sihirli halka"],
            ["s", "Sık iğne"],
            ["ç", "Çubuk iğne"],
            ["art", "Arttırma (aynı ilmeğe 2 sık iğne)"],
            ["azl", "Azaltma (2 ilmeği birlikte örme)"],
            ["kİ", "Kaydırma iğnesi"],
            ["( )", "Turun sonundaki ilmek sayısı"]
        ],
        bolumler: [
            {
                baslik: "Kafa (krem ip)",
                adimlar: [
                    "SH içine 6 s örün. (6)",
                    "Her ilmeğe art yapın. (12)",
                    "*1 s, art* tekrarını 6 kez örün. (18)",
                    "*2 s, art* tekrarını 6 kez örün. (24)",
                    "*3 s, art* tekrarını 6 kez örün. (30)",
                    "*4 s, art* tekrarını 6 kez örün. (36)",
                    "7. turdan 14. tura kadar her ilmeğe 1 s örün. Gözleri 10. ve 11. turlar arasına, 7 ilmek arayla takın. (36)",
                    "*4 s, azl* (30), *3 s, azl* (24), *2 s, azl* (18) turlarını örün; kafayı doldurun. *1 s, azl* (12) ve her ilmeğe azl (6) ile kapatın."
                ]
            },
            {
                baslik: "Kulaklar (2 adet)",
                adimlar: [
                    "SH içine 6 s, *1 s, art* (9) ve *2 s, art* (12) turlarını örün.",
                    "4. turdan 15. tura kadar her ilmeğe 1 s örün. (12)",
                    "*2 s, azl* tekrarını 3 kez örün, ardından 4 tur 1 s örün. (9)",
                    "Kulakları doldurmadan ikiye katlayın ve kafanın üst kısmına dikin."
                ]
            },
            {
                baslik: "Gövde",
                adimlar: [
                    "SH içine 6 s, ardından art (12), *1 s, art* (18), *2 s, art* (24) ve *3 s, art* (30) turlarını örün.",
                    "6. turdan 12. tura kadar her ilmeğe 1 s örün. (30)",
                    "*8 s, azl* tekrarını 3 kez örün. (27)",
                    "3 tur boyunca her ilmeğe 1 s örün. (27)",
                    "*7 s, azl* tekrarını 3 kez örün, ardından 2 tur 1 s örün. (24)",
                    "*2 s, azl* tekrarını 6 kez örün ve gövdeyi doldurun. (18)",
                    "2 tur boyunca her ilmeğe 1 s örün; birleştirme için uzun ip bırakın. (18)"
                ]
            },
            {
                baslik: "Kollar (2 adet)",
                adimlar: [
                    "SH içine 6 s ve *1 s, art* (9) turlarını örün.",
                    "3. turdan 18. tura kadar her ilmeğe 1 s örün. (9)",
                    "Sadece el kısmını hafifçe doldurun, kolun kalanını boş bırakın.",
                    "Kolun ağzını düzleştirip 4 s ile kapatın ve gövdenin yanlarına dikin."
                ]
            },
            {
                baslik: "Bacaklar (2 adet)",
                adimlar: [
                    "SH içine 6 s, art (12) ve *1 s, art* (18) turlarını örün.",
                    "3 tur boyunca her ilmeğe 1 s örün; burası ayak olacak. (18)",
                    "*1 s, azl* tekrarını 6 kez örün ve ayağı doldurun. (12)",
                    "8. turdan 25. tura kadar her ilmeğe 1 s örün. (12)",
                    "Bacakları hafifçe doldurup gövdenin altına dikin."
                ]
            },
            {
                baslik: "Elbise (pembe ip, 3 mm tığ)",
                adimlar: [
                    "Gövdenin göğüs hizasındaki bir turun ön ilmeklerine 30 s örün, sonraki turda her ilmeğe art yapın. (60)",
                    "6 tur boyunca her ilmeğe 1 ç örün; son turu kİ ile bitirin."
                ]
            },
            {
                baslik: "Birleştirme",
                adimlar: [
                    "Kafayı gövdeye sağlamca dikin; burnu ve bıyıkları koyu kahve iple işleyin.",
                    "Pembe iple yanaklara hafif renk verin ve tüm ip uçlarını gizleyin."
                ]
            }
        ]
    }
]

/* Seviye adları (kartlarda ve tarif sayfasında görünen etiket) */
const SEVIYELER = {
    baslangic: "BAŞLANGIÇ",
    orta: "ORTA",
    ileri: "İLERİ"
}


/* =====================================================================
   Yardımcılar — sayfalar bunları kullanır; yeni ürün/tarif eklerken
   bu kısma dokunmanız gerekmez.
   ===================================================================== */

// Etiket oluştur: el("p", "metin", "yazı") → <p class="metin">yazı</p>
// (Yazılar textContent ile eklenir: HTML olarak yorumlanmaz, güvenlidir)
function el(etiket, sinif, yazi) {
    const oge = document.createElement(etiket)
    if (sinif) oge.className = sinif
    if (yazi !== undefined) oge.textContent = yazi
    return oge
}

function fiyatYaz(fiyat) {
    return "₺" + fiyat
}

function urunBul(id) {
    return URUNLER.find((urun) => urun.id === id)
}

function tarifBul(id) {
    return TARIFLER.find((tarif) => tarif.id === id)
}

// Adım sayısı: tüm bölümlerdeki adımların toplamı
function adimSayisi(tarif) {
    return tarif.bolumler.reduce((toplam, bolum) => toplam + bolum.adimlar.length, 0)
}

// Ana sayfadaki ve "Diğer Ürünler"deki ürün kartı (görünüm eskisiyle aynı)
function urunKartiOlustur(urun) {
    const kart = el("div", "urun-kart")

    const resimKutusu = el("div", "suanlik-resim")
    const resim = el("img")
    resim.src = urun.resim.dosya
    resim.alt = urun.ad
    resim.width = urun.resim.genislik
    resim.height = urun.resim.yukseklik
    resim.loading = "lazy"
    resim.decoding = "async"
    resimKutusu.append(resim)

    const metin = el("div", "metin")
    metin.append(el("p", "", urun.kategori), el("h3", "", urun.ad))

    const alt = el("div", "yanyana2")
    const incele = el("a", "kalan-btn", "İncele")
    incele.href = "urun.html?urun=" + encodeURIComponent(urun.id)
    incele.setAttribute("aria-label", urun.ad + " ürününü incele")
    alt.append(el("span", "", fiyatYaz(urun.fiyat)), incele)

    kart.append(resimKutusu, metin, alt)
    return kart
}

// Ana sayfadaki tarif kartı (görünüm eskisiyle aynı; kartın tamamı tıklanır)
function tarifKartiOlustur(tarif) {
    const kart = el("div", "urun-card2")

    const ikonKutusu = el("div", "ikon-icin")
    const ikon = el("i", "fa-solid " + tarif.ikon)
    ikon.setAttribute("aria-hidden", "true")
    ikonKutusu.append(ikon)

    const metin = el("div", "metin")
    const baslik = el("h3")
    const link = el("a", "kart-linki", tarif.ad)
    link.href = "tarif.html?tarif=" + encodeURIComponent(tarif.id)
    baslik.append(link)
    metin.append(
        el("p", "seviye seviye-" + tarif.seviye, SEVIYELER[tarif.seviye]),
        baslik,
        el("span", "", tarif.sure + " · " + adimSayisi(tarif) + " adım")
    )

    kart.append(ikonKutusu, metin)
    return kart
}
