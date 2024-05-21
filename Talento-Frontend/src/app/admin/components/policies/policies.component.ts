import { Component } from '@angular/core';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent {
  policies = [
    {
      title: 'Gizlilik Politikası',
      description: 'Kullanıcı bilgilerinin gizliliğini nasıl koruduğumuzu öğrenin.',
      content: `
        <p>Gizlilik politikamız, kullanıcı bilgilerinin güvenliğini sağlamak için alınan önlemleri ve bu bilgilerin nasıl kullanıldığını açıklamaktadır. 
        Şirketimiz, kullanıcılarının gizliliğine son derece önem verir ve bu doğrultuda gerekli tüm tedbirleri almaktadır.</p>
        <ol>
          <li><strong>Bilgi Toplama ve Kullanımı:</strong> 
            <ul>
              <li>Kişisel bilgilerinizi, hizmetlerimizi sunabilmek, geliştirebilmek ve ihtiyaçlarınıza uygun hale getirebilmek amacıyla toplarız.</li>
              <li>Topladığımız bilgiler arasında ad, e-posta adresi, telefon numarası gibi kişisel bilgiler bulunabilir.</li>
            </ul>
          </li>
          <li><strong>Bilgi Güvenliği:</strong>
            <ul>
              <li>Bilgilerinizin güvenliğini sağlamak için en son teknoloji güvenlik önlemlerini kullanmaktayız.</li>
              <li>Veri kaybını, kötüye kullanımını veya izinsiz erişimi önlemek için fiziksel, elektronik ve yönetsel prosedürler uygularız.</li>
            </ul>
          </li>
          <li><strong>Bilgi Paylaşımı:</strong>
            <ul>
              <li>Kişisel bilgilerinizi, onayınız olmadan üçüncü şahıslarla paylaşmayız.</li>
              <li>Yasal yükümlülükler veya hizmet sağlayıcıları ile işbirliği yapmak durumunda olduğumuzda, bu bilgiler yalnızca gerekli olduğu ölçüde paylaşılır.</li>
            </ul>
          </li>
          <li><strong>Çerezler:</strong>
            <ul>
              <li>Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanmaktayız.</li>
              <li>Çerezler, kullanıcı tercihlerinizi hatırlamamıza ve site trafiğini analiz etmemize yardımcı olur.</li>
            </ul>
          </li>
          <li><strong>Değişiklikler:</strong>
            <ul>
              <li>Gizlilik politikamızı zaman zaman güncelleyebiliriz. Değişiklikler, bu sayfada yayınlandığı andan itibaren geçerli olacaktır.</li>
            </ul>
          </li>
        </ol>
        <p>Kullanıcılarımızın gizliliğini korumak bizim için bir önceliktir. Herhangi bir sorunuz veya geri bildiriminiz olursa, lütfen bizimle iletişime geçmekten çekinmeyin.</p>
      `
    },
    {
      title: 'İade Politikası',
      description: 'Ürün iadeleri ve para iadeleri hakkında bilgi edinin.',
      content: `
        <p>İade politikamız, müşterilerimizin satın aldıkları ürünlerden memnun kalmamaları durumunda izleyecekleri adımları ve koşulları açıklamaktadır. 
        Müşteri memnuniyeti bizim için önemlidir ve bu nedenle esnek bir iade politikası uygulamaktayız.</p>
        <ol>
          <li><strong>İade Koşulları:</strong>
            <ul>
              <li>Ürünün orijinal ambalajında ve kullanılmamış olması gerekmektedir.</li>
              <li>İade talebi, ürünün teslim alınmasından itibaren 30 gün içinde yapılmalıdır.</li>
              <li>İade edilecek ürünün faturası veya satın alma belgesi ibraz edilmelidir.</li>
            </ul>
          </li>
          <li><strong>İade Süreci:</strong>
            <ul>
              <li>İade talebinizi, müşteri hizmetlerimizle iletişime geçerek başlatabilirsiniz.</li>
              <li>Müşteri hizmetleri temsilcimiz, iade süreci hakkında sizi bilgilendirecek ve gerekli yönlendirmeleri yapacaktır.</li>
              <li>Ürün, belirtilen adrese gönderilmelidir. Gönderim masrafları müşteri tarafından karşılanır.</li>
            </ul>
          </li>
          <li><strong>Para İadesi:</strong>
            <ul>
              <li>İade edilen ürün tarafımıza ulaştıktan sonra, ürünün durumu kontrol edilir.</li>
              <li>Ürünün iade koşullarına uygun olması durumunda, para iadesi işleme alınır.</li>
              <li>Para iadesi, ödeme yönteminizle aynı olacak şekilde gerçekleştirilir ve 5-7 iş günü içerisinde hesabınıza yansır.</li>
            </ul>
          </li>
          <li><strong>Değişim:</strong>
            <ul>
              <li>Ürünü başka bir ürünle değiştirmek isterseniz, iade sürecini takip edebilir ve yeni bir sipariş verebilirsiniz.</li>
              <li>Değişim süreci de, iade süreci ile aynı adımları izlemektedir.</li>
            </ul>
          </li>
        </ol>
        <p>Herhangi bir iade veya değişim talebinizde, müşteri memnuniyeti odaklı yaklaşımımızla size yardımcı olacağız. Daha fazla bilgi için müşteri hizmetlerimize ulaşabilirsiniz.</p>
      `
    },
    {
      title: 'Kullanım Şartları',
      description: 'Web sitemizi kullanırken geçerli olan şartlar ve koşullar.',
      content: `
        <p>Kullanım şartlarımız, web sitemizi kullanırken uyulması gereken kurallar ve koşulları kapsamaktadır. Bu şartlar, kullanıcıların ve şirketimizin haklarını ve sorumluluklarını belirler.</p>
        <ol>
          <li><strong>Kabul ve Değişiklikler:</strong>
            <ul>
              <li>Web sitemizi kullanarak, bu kullanım şartlarını kabul etmiş olursunuz.</li>
              <li>Şartlar, zaman zaman güncellenebilir ve güncellemeler web sitemizde yayınlanır. Değişikliklerden haberdar olmak için bu sayfayı düzenli olarak kontrol etmeniz önerilir.</li>
            </ul>
          </li>
          <li><strong>Hizmet Kullanımı:</strong>
            <ul>
              <li>Web sitemizi sadece yasal ve etik amaçlar için kullanabilirsiniz.</li>
              <li>Herhangi bir yasa dışı, zararlı, tehdit edici, taciz edici, iftira niteliğinde, müstehcen veya başka bir şekilde uygunsuz içerik yükleyemez, iletemez veya paylaşamazsınız.</li>
            </ul>
          </li>
          <li><strong>Fikri Mülkiyet Hakları:</strong>
            <ul>
              <li>Web sitemizde yer alan içeriklerin tüm hakları saklıdır. İçerikleri izinsiz kopyalamak, dağıtmak veya başka bir şekilde kullanmak yasaktır.</li>
              <li>Kullanıcılar, kendi oluşturdukları içeriklerin telif haklarına sahip olduklarını ve bu içerikleri web sitemizde paylaşmak için gerekli izinlere sahip olduklarını beyan ederler.</li>
            </ul>
          </li>
          <li><strong>Kullanıcı Hesapları:</strong>
            <ul>
              <li>Web sitemizde hesap oluştururken doğru ve güncel bilgiler vermeniz gerekmektedir.</li>
              <li>Hesap bilgilerinizi gizli tutmak ve hesabınızda gerçekleşen tüm faaliyetlerden sorumlu olmak sizin sorumluluğunuzdadır.</li>
            </ul>
          </li>
          <li><strong>Sorumluluk Reddi:</strong>
            <ul>
              <li>Web sitemizde sunulan bilgilerin doğruluğunu sağlamak için çaba göstersek de, içeriğin doğruluğu, eksiksizliği veya güncelliği konusunda garanti vermemekteyiz.</li>
              <li>Web sitemizin kullanımı sırasında karşılaşabileceğiniz herhangi bir zarar veya kayıptan şirketimiz sorumlu tutulamaz.</li>
            </ul>
          </li>
          <li><strong>Sonlandırma:</strong>
            <ul>
              <li>Bu kullanım şartlarına aykırı hareket eden kullanıcıların hesapları, önceden bildirim yapılmaksızın sonlandırılabilir.</li>
              <li>Kullanıcılar, hesaplarının sonlandırılması durumunda web sitemizi kullanma haklarını kaybederler.</li>
            </ul>
          </li>
        </ol>
        <p>Bu kullanım şartları, web sitemizi güvenli ve verimli bir şekilde kullanmanız için hazırlanmıştır. Herhangi bir sorunuz veya endişeniz varsa, lütfen bizimle iletişime geçin.</p>
      `
    }
  ];

  selectedPolicy: any = null;

  selectPolicy(policy: any) {
    this.selectedPolicy = policy;
  }

  closeDetails() {
    this.selectedPolicy = null;
  }
}
