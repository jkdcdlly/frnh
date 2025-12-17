import { Warehouse, Truck, Package, BarChart3, Shield, Headphones } from 'lucide-react';
import fanghuo01 from '@/assets/产品图片/防火封堵材料/电缆防火涂料1.jpg';
import fanghuo02 from '@/assets/产品图片/防火封堵材料/多组分封堵材料1.jpg';
import fanghuo03 from '@/assets/产品图片/防火封堵材料/防爆胶泥1.jpg';
import fanghuo04 from '@/assets/产品图片/防火封堵材料/防火槽盒.jpg';
import fanghuo05 from '@/assets/产品图片/防火封堵材料/防火密封胶1.jpg';
import fanghuo06 from '@/assets/产品图片/防火封堵材料/防火涂层板1.jpg';
import fanghuo07 from '@/assets/产品图片/防火封堵材料/复合防火金属板.png';
import fanghuo08 from '@/assets/产品图片/防火封堵材料/柔性有机堵料1.jpg';
import fanghuo09 from '@/assets/产品图片/防火封堵材料/阻火包.jpg';
import fanghuo10 from '@/assets/产品图片/防火封堵材料/无机堵料.jpg';
import fanghuo11 from '@/assets/产品图片/防火封堵材料/无机防火隔板.png';
import fanghuo12 from '@/assets/产品图片/防火封堵材料/有机防火板1.jpg';
import fanghuo13 from '@/assets/产品图片/防火封堵材料/自粘性防火包带1.jpg';
import fanghuo14 from '@/assets/产品图片/防火封堵材料/阻火模块1.jpg';
import fanghuo15 from '@/assets/产品图片/防火封堵材料/L型防火隔板.png';
// Define interface (can also be extracted to a separate types file)
import type { Product } from '../types';

export const capabilities = [
  {
    title: 'Warehousing & Storage',
    description: 'State-of-the-art warehousing facilities equipped with advanced inventory management systems, climate control, and 24/7 security.',
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>`,
    image: fanghuo14,
    features: [
      'Climate-controlled storage',
      'Automated inventory tracking',
      'Cross-docking capabilities',
      'Hazmat certified facilities',
      'Real-time stock visibility'
    ]
  }
];

const rawProducts: Product[] = [
  {
    slug: 'fanghuo-1',
    title: 'Sơn chống cháy cáp điện',
    category: 'fire-sealing',
    category_id: 'fire-sealing-materials',
    
    fullDescription: "Thường bao gồm vật liệu gốc nước nhũ tương tert-acrylic thêm các chất chống cháy, chất dẻo, v.v. Khi lớp phủ gặp lửa, nó có thể tạo ra lớp cách nhiệt bọt xốp đồng nhất và dày đặc, có thể ức chế và ngăn chặn hiệu quả sự lan truyền và lan rộng của ngọn lửa, bảo vệ dây và cáp điện. Việc nghiên cứu và phát triển các sản phẩm sơn chống cháy cáp điện ở Trung Quốc bắt đầu vào cuối những năm 1970 và đầu những năm 1980. Nó được phát triển trên cơ sở sơn chống cháy trang trí kết hợp với các yêu cầu riêng của nó. Tính chất lý hóa và khả năng chịu thời tiết của nó tốt, lớp phủ mỏng và có thể tạo ra lớp cách nhiệt bọt xốp đồng nhất và dày đặc khi gặp lửa, có hiệu quả cách nhiệt và chống cháy đáng kể, từ đó đạt được mục đích bảo vệ cáp, ngăn chặn ngọn lửa lan rộng và ngăn chặn sự xuất hiện và phát triển của hỏa hoạn. Sơn chống cháy cáp điện bao gồm vật liệu gốc nước nhũ tương tert-acrylic thêm các chất chống cháy, chất dẻo, v.v. Khi lớp phủ gặp lửa, nó có thể tạo ra lớp cách nhiệt bọt xốp đồng nhất và dày đặc, có thể ức chế và ngăn chặn hiệu quả sự lan truyền và lan rộng của ngọn lửa, bảo vệ dây và cáp điện. Sơn chống cháy cáp điện là loại sơn chống cháy mới được nghiên cứu thành công theo tiêu chuẩn quốc gia GB28374-2012. Hiện nay đây là loại sơn chống cháy gốc nước chuyên dụng tương đối tiên tiến cho dây và cáp điện tại Trung Quốc.",
    image: fanghuo01,
    icon: Warehouse,
    specs: {
      "Tiêu chuẩn thực hiện": "GB28374－2012",
    },
    application: "Thích hợp để xử lý chống cháy cho dây và cáp điện trong các nhà máy điện, xí nghiệp công nghiệp và khai thác mỏ, viễn thông và các tòa nhà dân dụng, cũng có thể được sử dụng để bảo vệ chống cháy cho các vật liệu nền dễ cháy như kết cấu gỗ và kết cấu kim loại.",
    usage: [
      "1. Trước khi thi công sơn chống cháy cáp điện, bề mặt cáp phải được làm sạch bụi nổi, dầu mỡ, tạp chất, v.v., và đánh bóng sạch sẽ. Có thể tiến hành thi công sau khi bề mặt khô.",
      "2. Sơn chống cháy cáp điện được thi công bằng phương pháp phun, quét, v.v. Khuấy đều trước khi sử dụng. Nếu sơn hơi đặc, có thể pha loãng bằng một lượng nước máy thích hợp để thuận tiện cho việc phun.",
      "3. Trong quá trình thi công và trước khi lớp phủ khô, cần chống nước, chống phơi nắng, chống ô nhiễm, chống di chuyển và chống uốn cong. Nếu bị hư hỏng, hãy sửa chữa kịp thời.",
      "4. Đối với dây và cáp có vỏ bọc nhựa hoặc cao su, thường quét trực tiếp hơn 5 lần, với độ dày lớp phủ là 0,5-1mm và lượng dùng khoảng 1,5kg/m. Đối với cáp cách điện được bọc bằng giấy dầu, trước tiên nên bọc một lớp vải sợi thủy tinh, sau đó mới sơn. Nếu thi công ngoài trời hoặc trong môi trường ẩm ướt, nên thêm lớp sơn phủ vecni phù hợp."
    ]
  },
  {
    slug: 'fanghuo-2',
    title: 'Vật liệu bịt kín đa thành phần',
    category: 'fire-sealing',
    
    fullDescription: 'Vật liệu bịt kín đa thành phần thường bao gồm hai hoặc nhiều thành phần khác nhau, được điều chế thông qua các quy trình cụ thể và có các đặc tính bịt kín, chịu thời tiết, chịu ăn mòn hóa học và độ bền cơ học tuyệt vời. Chúng được sử dụng rộng rãi trong dầu khí, hóa chất, xây dựng, giao thông vận tải và các lĩnh vực khác. Thành phần của vật liệu bịt kín đa thành phần rất phức tạp và đa dạng, thường bao gồm vật liệu nền, chất độn, chất dẻo, chất đóng rắn, chất xúc tác và các thành phần khác. Vật liệu nền là khung chính của vật liệu bịt kín, quyết định các tính chất cơ bản của vật liệu; chất độn được sử dụng để tăng cường tính chất cơ học của vật liệu và giảm chi phí; chất dẻo có thể cải thiện hiệu suất gia công và độ dẻo của vật liệu; chất đóng rắn và chất xúc tác kiểm soát tốc độ đóng rắn và sự phát triển hiệu suất của vật liệu. Quá trình điều chế vật liệu bịt kín đa thành phần thường bao gồm chuẩn bị nguyên liệu, trộn, tạo hình, đóng rắn và các bước khác. Giai đoạn chuẩn bị nguyên liệu đòi hỏi kiểm soát chính xác tỷ lệ và chất lượng của từng thành phần để đảm bảo hiệu suất vật liệu ổn định và đáng tin cậy. Giai đoạn trộn là trộn đều các nguyên liệu thô khác nhau theo một tỷ lệ nhất định để tạo thành hỗn hợp đồng nhất. Giai đoạn tạo hình là gia công hỗn hợp thành hình dạng và kích thước mong muốn. Cuối cùng, thông qua tác dụng của chất đóng rắn, hỗn hợp dần dần đóng rắn thành vật liệu bịt kín đa thành phần có hiệu suất tuyệt vời.',
    image: fanghuo02,

    applications: [
      "1. Ngành dầu khí và hóa chất: Trong ngành dầu khí và hóa chất, vật liệu bịt kín đa thành phần được sử dụng rộng rãi để bịt kín và sửa chữa đường ống, bể chứa, van và các thiết bị khác. Chúng có thể ngăn chặn hiệu quả rò rỉ dầu khí và ô nhiễm môi trường, đảm bảo an toàn sản xuất.",
      "2. Ngành xây dựng: Trong ngành xây dựng, vật liệu bịt kín đa thành phần được sử dụng để bịt kín và chống thấm tường, sàn, mái và các bộ phận khác. Chúng có thể ngăn chặn hiệu quả sự xâm nhập và rò rỉ của nước mưa, nước ngầm và độ ẩm khác, đảm bảo an toàn kết cấu và tuổi thọ của các tòa nhà.",

      "3. Ngành giao thông vận tải: Trong ngành giao thông vận tải, vật liệu bịt kín đa thành phần được sử dụng để chống thấm và bịt kín cầu, đường hầm, tàu điện ngầm và các dự án khác. Chúng có thể chịu được áp lực và tải trọng va đập của xe cộ và người đi bộ, đồng thời có khả năng chịu thời tiết và ăn mòn hóa học tốt.",

      "4. Các lĩnh vực khác: Ngoài các lĩnh vực trên, vật liệu bịt kín đa thành phần còn được sử dụng rộng rãi trong điện lực, bảo vệ môi trường, quân sự và các lĩnh vực khác. Chúng đóng vai trò quan trọng trong các lĩnh vực này, cung cấp các giải pháp bịt kín và bít lỗ đáng tin cậy cho các thiết bị và dự án khác nhau."
    ],
    highlights: [
      "1. Khả năng bịt kín tuyệt vời: Vật liệu bịt kín đa thành phần có hiệu suất bịt kín tuyệt vời và có thể ngăn chặn hiệu quả sự xâm nhập và rò rỉ của chất lỏng, khí và các hạt rắn. Điều này là do thành phần và quy trình điều chế độc đáo của chúng, cho phép vật liệu hình thành cấu trúc vi mô dày đặc bên trong, từ đó đạt được hiệu quả bịt kín cao.",
      "2. Khả năng chịu thời tiết và ăn mòn hóa học tốt: Vật liệu bịt kín đa thành phần thường có khả năng chịu thời tiết và ăn mòn hóa học tốt, và có thể duy trì hiệu suất ổn định trong thời gian dài trong điều kiện môi trường khắc nghiệt. Điều này làm cho chúng được sử dụng rộng rãi trong các ngành công nghiệp dầu khí, hóa chất và các ngành công nghiệp khác.",
      "3. Độ bền cơ học tuyệt vời: Vật liệu bịt kín đa thành phần có độ bền cơ học cao và có thể chịu được áp lực và tải trọng va đập nhất định. Điều này mang lại cho chúng triển vọng ứng dụng rộng rãi trong xây dựng, giao thông vận tải và các lĩnh vực khác.",
      "4. Tốc độ đóng rắn và hiệu suất có thể điều chỉnh: Bằng cách điều chỉnh lượng và loại chất đóng rắn và chất xúc tác, tốc độ đóng rắn và hiệu suất của vật liệu bịt kín đa thành phần có thể được điều chỉnh. Điều này cho phép vật liệu thích ứng với các nhu cầu thi công và sử dụng khác nhau."
    ]
  },
  {
    slug: 'fanghuo-3',
    title: 'Keo đất sét chống nổ',
    category: 'fire-sealing',
    
    fullDescription: 'Keo đất sét chống nổ là vật liệu bịt kín dạng đất sét màu đen sẫm được làm từ nhiều loại polyme cao phân tử nhập khẩu từ Đức, phụ gia và chất dẻo thông qua quy trình đặc biệt. Sản phẩm này được sử dụng rộng rãi ở những nơi nguy hiểm dễ nổ như quốc phòng, hóa dầu và trạm biến áp để cách ly và bịt kín chống nổ cho các dự án đi dây cáp, ngăn chặn hiệu quả sự lan truyền hỏa hoạn. Nó có các đặc tính như chịu nhiệt độ cao và thấp (-50℃ đến 90℃), chống va đập, chống cháy và không truyền nổ, cũng như độ kín khí và chịu dầu tuyệt vời. Khi sử dụng cùng với băng quấn ngăn lửa trong quá trình thi công, hiệu quả bịt kín có thể được tăng cường, và dễ bảo quản với thời hạn sử dụng lên đến hai năm.',
    image: fanghuo03,
    icon: Package, 
   specs: {
    "Chịu nhiệt":"Không chảy, không phồng rộp ở 90℃",
"Chịu lạnh":"Duy trì sự ổn định vật lý trong môi trường -50℃",
"Độ dẻo":"Độ dày kéo dài có thể đạt 5-10 mm",
"Độ kín":"Chịu được thử nghiệm áp lực nước 50Kpa trong một phút không rò rỉ",
"Chống nổ":"Đã được xác minh không truyền nổ bằng thử nghiệm truyền nổ khí argon hỗn hợp 32%", 
"Độ bền điện môi":"Mẫu dày 2,5mm có thể chịu được điện áp xoay chiều 4KV trong một phút"
   }
  },
  {
    slug: 'fanghuo-4',
    title: 'Hộp máng chống cháy',
    category: 'fire-sealing',
    
    fullDescription: 'Hộp máng chống cháy có khả năng cách nhiệt, chống cháy, chống ăn mòn tốt và hiệu suất môi trường ứng dụng rộng rãi. Nó cũng có các đặc điểm là trọng lượng nhẹ, khả năng chịu tải lớn, an toàn và đáng tin cậy. Về mặt kỹ thuật, nó đạt trình độ tiên tiến trong nước. Sau khi sử dụng hộp máng chống cháy, nếu cáp bên trong hộp bắt lửa, nó có thể tự tắt do thiếu oxy do tính chất khép kín của cấu trúc riêng của nó. Hỏa hoạn bên ngoài sẽ không ảnh hưởng đến cáp bên trong hộp do tính không cháy của vật liệu hộp máng. Hộp máng chống cháy an toàn, đáng tin cậy và dễ lắp đặt. Nó có thể được cưa, khoan, bào và gia công cơ khí khác. Nó thích hợp để ngăn cách lửa trong quá trình đặt cáp và là vật liệu lý tưởng để ngăn chặn hiệu quả sự lan truyền ngọn lửa khi cáp bắt lửa.',
    image: fanghuo04,
    icon: BarChart3, 
    specs: {
"Hộp máng kín hoàn toàn chịu lửa":"Thích hợp để đặt cáp điện dưới 10KV, cũng như cáp điều khiển, dây chiếu sáng, v.v. trong các rãnh cáp và đường hầm trên cao trong nhà và ngoài trời.",
"Hộp máng bán kín chịu lửa":"Có thể chịu được ngọn lửa nung nóng, và nhiệt độ bên trong máng có thể được giới hạn trong giá trị cho phép để vận hành cáp an toàn. Nắp hộp là tấm nắp hai lớp.",
"Hộp máng chịu lửa cho đường hầm cáp":"Có thể được sử dụng rộng rãi trong đường hầm, các công trình công cộng ngầm, v.v.",
"Hộp máng vô cơ chịu lửa":"Được cấu tạo từ vật liệu vô cơ và sợi thủy tinh gia cường, cấu trúc chịu lửa hoàn toàn khép kín, ngăn chặn hiệu quả sự tự bốc cháy của cáp và các mối nguy hiểm hỏa hoạn bên ngoài."
    },
  },
  {
    slug: 'fanghuo-5',
    title: 'Keo trám chống cháy',
    category: 'fire-sealing',
    
    fullDescription: 'Keo trám chống cháy là vật liệu bịt kín dùng để bít lỗ, có đặc tính kép là bịt kín và chống cháy, thuộc loại vật liệu chống cháy kiểu biện pháp. Keo trám chống cháy là vật liệu nhựa polymer, do đó mức độ chống cháy của nó thường được đánh giá bằng "Chất dẻo - Xác định tính năng cháy bằng chỉ số oxy" (GB23864-2023) và "Chất dẻo - Xác định tính năng cháy bằng mẫu nằm ngang và thẳng đứng" (GB23864-2023). Chỉ số oxy đề cập đến hàm lượng oxy tối thiểu cần thiết để một mẫu rắn duy trì sự cháy cân bằng trong dòng khí hỗn hợp oxy và nitơ trong các điều kiện quy định, được biểu thị bằng phần trăm thể tích của oxy. Khi đánh giá bằng chỉ số oxy (OI), GB23864-2023 nên được sử dụng để thử nghiệm mẫu để tính toán và xác định chỉ số oxy. Sự tương ứng giữa chỉ số oxy (OI) của vật liệu và khả năng chống cháy của nó như sau: OI > 36 là khả năng chống cháy cao. Keo chống cháy là một loại keo bịt kín dùng cho chống cháy xây dựng, có độ cứng thấp, tự dính và vật liệu chịu lửa tốt. Nó chủ yếu được sử dụng để liên kết và bịt kín các loại cửa chống cháy, bịt kín chống cháy các lớp của công trình tường rèm; bịt kín chống cháy lắp đặt kính cửa các loại; bịt kín chống cháy chống thấm, chống ẩm, trang trí, v.v. tại các nơi công cộng như khách sạn, nhà khách, nhà hát. Keo trám chống cháy trương nở chủ yếu được sử dụng để bịt kín các lỗ xuyên cáp đơn hoặc bó kích thước nhỏ và lấp đầy các khe hở giữa các cáp. Keo trám chống cháy đàn hồi chủ yếu được sử dụng để bịt kín chống cháy các khe nối xây dựng (như khe hở tường rèm).',
    image: fanghuo05,
    icon: Shield,
    application: "Keo trám chống cháy chủ yếu được sử dụng để bít lỗ chống cháy cho các lỗ xuyên cáp, đường ống, v.v. trong các tòa nhà để ngăn ngọn lửa và khí độc hại lan sang các khu vực khác qua các lỗ xuyên khi xảy ra hỏa hoạn. Đồng thời, keo trám chống cháy cũng có thể được sử dụng để bịt kín cửa chống cháy, cửa sổ, tường rèm, v.v. của các tòa nhà để nâng cao hiệu suất chống cháy tổng thể.",
    specs: {
      "Tiêu chuẩn thực hiện": "GB23864-2023"

    },
    usage: [
      "1. Làm sạch bụi, dầu mỡ và các tạp chất khác xung quanh lỗ xuyên để đảm bảo bề mặt khô và sạch.",
      "2. Chọn quy cách keo trám chống cháy phù hợp để thi công tùy theo kích thước và hình dạng của lỗ xuyên.",
      "3. Sử dụng các dụng cụ chuyên dụng để điền đầy keo trám chống cháy vào lỗ xuyên một cách đồng đều, đảm bảo keo trám kết hợp chặt chẽ với thành lỗ mà không có khe hở.",
      "4. Đối với các lỗ xuyên lớn hơn, có thể điền keo trám chống cháy theo từng lớp. Độ dày của mỗi lớp không nên quá lớn để đảm bảo hiệu quả bịt kín.",
      "5. Sau khi điền đầy, sử dụng dao cạo hoặc bay để làm phẳng bề mặt keo trám để đảm bảo tính thẩm mỹ.",
      "6. Sau khi keo trám chống cháy đã đóng rắn hoàn toàn, hãy kiểm tra để đảm bảo hiệu quả bịt kín đáp ứng các yêu cầu. Sửa chữa nếu cần thiết."
    ]
  },
  {
    slug: 'fanghuo-6',
    title: 'Tấm phủ chống cháy',
    category: 'fire-sealing',
    
    fullDescription: 'Tấm phủ chống cháy là một loại tấm được sử dụng để bảo vệ chống cháy cáp trong các ngành điện lực, dầu khí, xây dựng, v.v. Nó áp dụng cấu trúc composite của vật liệu nền tấm bông khoáng và lớp sơn chống cháy hai mặt. Sản phẩm trương nở khi gặp lửa để tạo thành lớp chống cháy, giải phóng khí vô hại và không chứa halogen. Nó có các đặc điểm là thời gian chịu lửa dài (một số vượt quá 5 giờ), khả năng chống ăn mòn mạnh và lắp đặt thuận tiện. Được sử dụng rộng rãi trong các dự án chống cháy rãnh cáp và bít lỗ tủ bảng điện.',
    image: fanghuo06,
    icon: Headphones,
    application: "Thích hợp để bít lỗ xuyên cáp trong các cơ sở điện lực, hóa dầu và ngành xây dựng, đặc biệt thích hợp để bảo vệ chống cháy cho máng cáp, tủ bảng điện và vách ngăn nhẹ.",
    specs: {
      "Tiêu chuẩn thực hiện": "GB23864-2023",
      "Hiệu suất chịu lửa": "Tính toàn vẹn chịu lửa và cách nhiệt đều ≥ 2 giờ (cấp A2, một số sản phẩm có giới hạn chịu lửa 2 giờ và nhiệt độ chịu lửa cao nhất là 1580-1770℃).",
      "Đặc điểm môi trường": "Khí giải phóng khi trương nở gặp lửa không chứa halogen và vô hại.",
      "Tính chất vật lý": "Mật độ diện tích 8kg/m2, độ bền uốn ≥ 0,10MPa, chịu nước, chịu dầu, chịu axit và kiềm, hiệu suất chống cháy lâu dài 30 năm"

    },

  },
  {
    slug: 'fanghuo-7',
    title: 'Tấm kim loại chống cháy composite',
    category: 'fire-sealing',
    
    fullDescription: 'Tấm chống cháy composite kim loại trương nở là một vật liệu xây dựng sáng tạo kết hợp vật liệu nền kim loại với lớp phủ chống cháy đặc biệt, được thiết kế đặc biệt cho an toàn chống cháy của các tòa nhà hiện đại. Nguyên lý cốt lõi của nó là hình thành lớp cacbon hóa dày đặc thông qua sự trương nở khi gặp lửa, ngăn chặn sự lan rộng của ngọn lửa, nhiệt độ cao và khí độc, giành thời gian quý báu cho việc sơ tán nhân viên và cứu hỏa.',
    image: fanghuo07,
    icon: Headphones,
    application: "Sản phẩm được sử dụng rộng rãi trong các tình huống như tường ngoài tòa nhà, vách ngăn trong nhà, bít máng cáp và bảo vệ lỗ xuyên đường ống, kết hợp nhiều chức năng như chống cháy, chịu thời tiết, trọng lượng nhẹ và trang trí.",
  },
  {
    slug: 'fanghuo-8',
    title: 'Vật liệu bịt kín hữu cơ dẻo (Loại dẻo)',
    category: 'fire-sealing',
    
    fullDescription: 'Vật liệu bịt kín chống cháy hữu cơ là sản phẩm mới được công ty chúng tôi nghiên cứu thành công theo tiêu chuẩn GB23864-2023. Nó có đặc điểm là giới hạn chịu lửa cao và lượng khói tỏa ra thấp. Sản phẩm cũng có độ dẻo tốt, chịu axit, chịu kiềm và chịu ăn mòn. Thi công và bảo trì tương đối thuận tiện, và nó có thể được sử dụng kết hợp với các vật liệu bịt kín khác (như gối ngăn lửa, v.v.). Vật liệu bịt kín chống cháy hữu cơ thích hợp để bít lỗ khi dây và cáp xuyên qua tường trong các xí nghiệp công nghiệp và khai thác mỏ, tòa nhà cao tầng, đóng tàu, luyện kim, phát điện và bưu chính viễn thông, để ngăn ngọn lửa lan từ lỗ sang phòng liền kề khi xảy ra hỏa hoạn.',
    specs: {
      "Tiêu chuẩn thực hiện": "GB23864-2023"
    },
    application: "Thích hợp để bít lỗ khi dây và cáp xuyên qua tường trong các xí nghiệp công nghiệp và khai thác mỏ, tòa nhà cao tầng, đóng tàu, luyện kim, phát điện và bưu chính viễn thông, để ngăn ngọn lửa lan từ lỗ sang phòng liền kề khi xảy ra hỏa hoạn.",
    image: fanghuo08,
    icon: Headphones, features: [
      'Không độc, không mùi, không ăn mòn',
      'Chịu nước, chịu dầu, chịu nhiệt ẩm',
      'Chịu chu kỳ đóng băng-tan băng',
      'Sự trương nở được kiểm soát trong phạm vi cục bộ',
      'Giới hạn chịu lửa lên đến 180 phút trở lên (khi độ dày bịt kín là 200mm)'
    ],
  },
  {
    slug: 'fanghuo-9',
    title: 'Gối ngăn lửa',

    category: 'fire-sealing',
    
    fullDescription: 'Gối ngăn lửa là vật liệu chịu lửa hỗ trợ chống cháy do công ty chúng tôi phát triển. Hình dạng của gối ngăn lửa giống như một chiếc gối nhỏ. Lớp ngoài được làm bằng vải sợi thủy tinh đã qua xử lý, và bên trong được lấp đầy bằng hỗn hợp các vật liệu vô cơ không cháy và các chất phụ gia đặc biệt. Sản phẩm không độc, không mùi, không ăn mòn, chịu nước, chịu dầu, chịu nhiệt ẩm, chịu chu kỳ đóng băng-tan băng, và sự trương nở được kiểm soát trong phạm vi cục bộ. Khi độ dày bịt kín đạt 200mm, giới hạn chịu lửa có thể đạt hơn 180 phút.',
    image: fanghuo09,

    specs: {
      "Tiêu chuẩn thực hiện": "GB23864-2023"
    },
    application: "Thích hợp cho bít lỗ chống cháy trong điện lực, viễn thông, bưu chính, hóa chất, xí nghiệp công nghiệp và khai thác mỏ, xây dựng và công trình ngầm, cũng như bít các lỗ hình thành khi các vật xuyên qua khác nhau như cáp, ống dầu, ống dẫn khí và ống kim loại đi qua vách ngăn hoặc sàn. Nó có thể ngăn chặn sự lan rộng của ngọn lửa và thích hợp cho các bộ phận quan trọng nơi cáp thường xuyên được thay thế.",
    usage: [
      "1. Làm sạch các lỗ khi cần thiết và nhúng phẳng các gối ngăn lửa vào các khe hở của cáp. Khi xếp chồng các gối ngăn lửa, chúng phải được xếp chéo, dày đặc và chắc chắn, và đạt yêu cầu nếu không nhìn thấy ánh sáng ở cả hai bên.",
      "2. Khi xây dựng tường ngăn lửa trong rãnh cáp, sử dụng trụ gạch ở dưới cùng của tường ngăn lửa và để lại lỗ thoát nước. Đồng thời, cố định cả hai bên của tường ngăn lửa bằng các tấm ngăn chống cháy để ngăn sụp đổ.",
      "3. Gối ngăn lửa dễ lắp đặt và thi công, có thể tái sử dụng và cũng có thể được sử dụng làm biện pháp cách ly tạm thời cho các nguồn lửa tại các công trường xây dựng.",
      "4. Gối ngăn lửa thường được sử dụng kết hợp với vật liệu bịt kín hữu cơ dẻo và tấm ngăn chống cháy. Khi độ dày bịt kín đạt 200mm trở lên, giới hạn chịu lửa có thể đạt hơn 180 phút.",
    ],
    precautions: [
      "1. Bao bì bên trong của sản phẩm này là túi nhựa polyethylene, bên ngoài là túi vải chống cháy, sau đó được đóng gói trong túi dệt. Các quy cách thông thường là loại 720, loại 400, loại 250 và các quy cách khác có thể được gia công theo yêu cầu của người dùng.",
      "2. Trong quá trình vận chuyển, sản phẩm này nên tránh móc treo và mưa, và nên được bảo quản ở nơi khô ráo và thoáng mát.",
      "3. Thời hạn bảo quản hiệu quả của sản phẩm là 1 năm."
    ]
  },
  {
    slug: 'fanghuo-10',
    title: 'Vật liệu bịt kín vô cơ',
    category: 'fire-sealing',
    
    fullDescription: 'Vật liệu bịt kín vô cơ là sản phẩm mới được công ty chúng tôi nghiên cứu thành công theo tiêu chuẩn quốc gia GB23864-2023 (Vật liệu ngăn cháy). Vật liệu bịt kín vô cơ là bột đồng nhất có đặc tính chống cháy và chịu chu kỳ đóng băng-tan băng. Nó dễ thi công. Sau khi trộn với một tỷ lệ nước nhất định, nó có thể đóng rắn nhanh chóng để tạo thành lớp ngăn lửa và cách nhiệt rắn chắc, từ đó đạt được mục đích phòng cháy, ngăn lửa và ngăn chặn sự lan rộng của ngọn lửa.',
    image: fanghuo10,
    icon: Headphones, features: [
      'Không độc, không mùi, không ăn mòn',
      'Chịu nước, chịu dầu, chịu nhiệt ẩm',
      'Chịu chu kỳ đóng băng-tan băng',
      'Sự trương nở được kiểm soát trong phạm vi cục bộ',
      'Giới hạn chịu lửa lên đến 180 phút trở lên (khi độ dày bịt kín là 200mm)'
    ],
    specs: {
      "Tiêu chuẩn thực hiện": "GB23864-2023"
    },
    application: "Thích hợp cho bít lỗ chống cháy trong điện lực, viễn thông, bưu chính, hóa chất, xí nghiệp công nghiệp và khai thác mỏ, xây dựng và công trình ngầm, cũng như bít các lỗ hình thành khi các vật xuyên qua khác nhau như cáp, ống dầu, ống gió, ống khí và ống kim loại đi qua tường hoặc sàn. Nó có thể ngăn chặn sự lan rộng của ngọn lửa, đặc biệt thích hợp cho các lỗ xuyên cáp nhỏ hơn, khe hở và các lỗ không đều khác không thích hợp để bịt kín bằng các vật liệu ngăn lửa khác, và các bộ phận nơi cáp được thay thế thường xuyên.",
    usage: [
      "1. Trong quá trình thi công, ước tính lượng vật liệu bịt kín theo kích thước của lỗ cần bịt, sau đó cho vật liệu bịt kín vào thùng chứa. Xác định độ dày bịt kín theo hướng dẫn thi công và nhu cầu, thường không nhỏ hơn 15cm.",
      "2. Để thuận tiện cho việc thi công, sử dụng giá đỡ và pallet để ngăn cách các kênh cáp, và loại bỏ tạp chất và vết dầu trên bề mặt cáp.",
      "3. Vật liệu chưa sử dụng sau khi thi công phải được niêm phong và đặt trong kho khô ráo, và thời gian không được quá 3 tháng.",
      "4. Đặc biệt cẩn thận với mưa và phơi nắng lâu dài trong quá trình vận chuyển và bảo quản. Nhiệt độ bảo quản -35℃~45℃ không ảnh hưởng."
    ],
    packagingAndTransportation: [
      "1. Bao bì bên trong của sản phẩm này là túi nhựa polyethylene, và bên ngoài là túi dệt.",
      "2. Trọng lượng mỗi bao là 25kg.",
      "3. Thời hạn bảo quản hiệu quả của sản phẩm là 6 tháng."
    ]
  },
  {
    slug: 'fanghuo-11',
    title: 'Tấm ngăn chống cháy vô cơ',
    category: 'fire-sealing',
    
    fullDescription: 'Tấm ngăn chống cháy vô cơ còn được gọi là tấm ngăn lửa không cháy, v.v. Tấm này được làm từ nhiều loại vật liệu không cháy thông qua pha trộn và ép khoa học. Nó có các đặc điểm là khả năng chống cháy tốt, độ bền cơ học cao, không nổ, chịu nước, chịu dầu và khả năng chống ăn mòn hóa học mạnh. Trong thử nghiệm đốt cháy tấm ngăn chống cháy vô cơ (tấm chống cháy), nó không bị biến dạng khi nhiệt độ ngọn lửa đạt 1000℃. Tất cả các chỉ số đều đáp ứng các yêu cầu của GB23864-2023 và hiệu suất đốt cháy đạt tiêu chuẩn cấp A (không cháy) được quy định trong GB8624.',
    image: fanghuo11,
    icon: Headphones,
    application: "Chủ yếu thích hợp cho bảo vệ chống cháy và phân cách chịu lửa của cáp ở các cấp điện áp khác nhau khi đặt trên giá đỡ hoặc cầu. Nó được sử dụng rộng rãi trong các dự án chống cháy cho công trình cáp tại các nơi tập trung cáp như các nhà máy điện, doanh nghiệp hóa chất, doanh nghiệp luyện thép và mỏ ở Trung Quốc. Nó cũng là vật liệu chống cháy tuyệt vời cho các dự án chống cháy trang trí trong nhà tại các nơi công cộng như trung tâm mua sắm lớn, khách sạn, nhà khách, trung tâm văn hóa và thể thao, chợ quần áo kín, chợ công nghiệp nhẹ và nhà hát.",
    specs: {
      "Tiêu chuẩn thực hiện": "GB23864-2023"
    },
  },
  {
    slug: 'fanghuo-12',
    title: 'Tấm chống cháy hữu cơ',
    category: 'fire-sealing',
    
    fullDescription: 'Tấm chống cháy hữu cơ là tấm chống cháy được làm bằng nhựa tổng hợp làm chất kết dính chính và thêm nhiều loại vật liệu không cháy (như sợi thủy tinh, v.v.) thông qua ép composite. Nó được sử dụng đặc biệt cho các tình huống bảo vệ chống cháy cáp và phân cách chịu lửa.',
    image: fanghuo12,
    icon: Headphones,
    applications: [
      "Chống cháy công trình cáp: Được sử dụng ở những nơi tập trung cáp như nhà máy điện, trạm biến áp và đường hầm để ngăn chặn sự lan rộng của hỏa hoạn do chập điện cáp.",
      "Vị trí lắp đặt điển hình: Bao gồm trục cáp, giao diện đường hầm, lỗ phòng phân phối, v.v. (tham khảo các điểm thiết kế chống cháy cáp trong kết quả tìm kiếm).",
    ],
    features: [
      "Độ bền cơ học cao: Độ bền nén và uốn tuyệt vời, thích hợp cho việc đặt giá đỡ hoặc cầu cáp.",
      "Chịu ăn mòn môi trường: Chống thấm, chịu dầu, chịu axit và kiềm, thích hợp cho các môi trường khắc nghiệt như hóa chất và thép.",
      "Nhẹ và có thể gia công: Mật độ thấp hơn tấm vô cơ, dễ cắt thành hình dạng mong muốn, tính linh hoạt thi công cao."
    ],
    specs: {
      "Tiêu chuẩn thực hiện": "GB23864-2023",
      "Hiệu suất chịu lửa": "Duy trì tính toàn vẹn cấu trúc trong hơn 3 giờ dưới ngọn lửa 1000℃",
      "Hiệu suất đốt cháy": "Đáp ứng các yêu cầu không cháy [Cấp A1]",
    },
    precautions:[
      "So với tấm chống cháy vô cơ, giới hạn chịu lửa của nó thấp hơn một chút (tấm vô cơ thường đạt tiêu chuẩn Cấp A), nhưng nó vẫn có khả năng chống cháy hiệu quả thông qua công nghệ composite nhựa."
    ]

  },
  {
    slug: 'fanghuo-13',
    title: 'Băng quấn chống cháy tự dính',
    category: 'fire-sealing',
    
    fullDescription: 'Băng quấn chống cháy là vật liệu chống cháy được quấn quanh bên ngoài cáp, chủ yếu được sử dụng để cách ly chống cháy cho các cáp lớn và quan trọng. Khi gặp ngọn lửa, băng quấn chống cháy trương nở nhanh chóng để tạo thành lớp cacbon hóa, ngăn ngọn lửa đốt cháy các vật liệu dễ cháy của cáp, đảm bảo hiệu quả hoạt động an toàn của các đường dây truyền tải và phân phối điện và thông tin liên lạc. Sản phẩm này thích hợp để bít lỗ chống cháy trong môi trường nhiệt độ cao, ẩm ướt và các khe hở giữa các cáp đơn hoặc bó. Trong quá trình thi công, nó thường được quấn quanh cáp với độ chồng lên nhau 1/2. Quấn hai lớp cho kết quả tốt hơn. Băng quấn chống cháy tự dính có đặc điểm an toàn, không mùi và thi công thuận tiện. Nó có thể nâng cấp cấp độ chống cháy của cáp không chống cháy lên tiêu chuẩn Cấp A, và tuổi thọ của nó đồng bộ với cáp.',
    image: fanghuo13,
    application: "Thích hợp để quấn quanh các loại cáp đơn khác nhau để cung cấp bảo vệ cách ly chống cháy. Khi cáp bắt lửa, băng quấn chống cháy có thể trương nở nhanh chóng để tạo thành lớp cacbon hóa cách nhiệt và ngăn oxy để cách ly sự lan rộng của ngọn lửa. Ngoài ra, sản phẩm cũng có thể cung cấp bảo vệ lâu dài như chống thấm, chống axit và chống ô nhiễm cho cáp, và ngăn chặn hồ quang sự cố đốt cháy cáp lân cận.",
  },
  {
    slug: 'fanghuo-14',
    title: 'Mô-đun ngăn lửa',
    category: 'fire-sealing',
    
    fullDescription: 'Mô-đun ngăn lửa mới là sản phẩm bít lỗ chống cháy thế hệ thứ ba của Trung Quốc. Nó sử dụng sự ăn khớp tự nhiên trong quá trình lắp đặt, không cần sử dụng keo như formaldehyde. Nó bao gồm nhiều loại chất hữu cơ, hòa tan trong môi trường tự nhiên và có thời gian chịu lửa dài: thời gian chịu lửa của mô-đun ngăn lửa mới đã tăng lên hơn 5 giờ. Mô-đun ngăn lửa mới không có khói bay, hiệu quả cách nhiệt tốt, tản nhiệt nhanh, thiết kế khoa học và hợp lý, không rơi ra, sử dụng thuận tiện và thời hạn hiệu lực dài.',
    image: fanghuo14,
    icon: Headphones, features: [
      'Không độc, không mùi, không ăn mòn',
      'Chịu nước, chịu dầu, chịu nhiệt ẩm',
      'Chịu chu kỳ đóng băng-tan băng',
      'Sự trương nở được kiểm soát trong phạm vi cục bộ',
      'Giới hạn chịu lửa lên đến 180 phút trở lên (khi độ dày bịt kín là 200mm)'
    ],
    highlights: ['Không có khói bay, không rơi ra, hiệu quả cách nhiệt tốt, tản nhiệt nhanh, thiết kế khoa học và hợp lý, sử dụng thuận tiện, thời hạn hiệu lực dài, v.v.'],
  },
  {
    slug: 'fanghuo-15',
    title: 'Tấm ngăn chống cháy hình chữ L',
    category: 'fire-sealing',
    fullDescription: 'Tấm ngăn chống cháy hình chữ L là tấm chống cháy được làm bằng vật liệu vô cơ (như vải sợi thủy tinh kiềm trung bình gia cường), chủ yếu được sử dụng để phân cách chống cháy các khu vực dễ cháy như cáp và đường ống.',
    image: fanghuo15,
    icon: Headphones,
    applications: [
      "Công trình cáp: Được sử dụng để phân cách chống cháy ở những nơi tập trung cáp như nhà máy điện, doanh nghiệp hóa chất và luyện thép, ngăn chặn hiệu quả cáp lan truyền theo phương ngang.",
      "Nơi công cộng: Thích hợp cho các dự án trang trí trong nhà yêu cầu chống cháy như trung tâm mua sắm, khách sạn và trung tâm văn hóa thể thao.",
      "Đường ống và thiết bị: Có thể bít các lỗ hở nơi ống gió, ống dầu, v.v. đi qua sàn hoặc tường để ngăn chặn sự lan rộng của hỏa hoạn."
    ],
    constructionMethods: [
      "Phương pháp lắp đặt: Cắt thành hình dạng mong muốn bằng cưa cắt và cố định bằng giá đỡ thép hoặc bu lông nở.",
      "Yêu cầu bảo trì: Kiểm tra định kỳ xem lớp phủ chống cháy có bị bong tróc không và tấm có bị hư hỏng không."
    ]
  }
];


export const fireSealingProducts: Product[] = rawProducts.map(product => ({
  ...product,
  description: (product.fullDescription ? product.fullDescription.substring(0, 100) + '...' : ''),
  category: 'fire-sealing',
  labels: ['Nhà sản xuất nguồn', 'Cung cấp ổn định', 'Giao hàng nhanh'],
}));
