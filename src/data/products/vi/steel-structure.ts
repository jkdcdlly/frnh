import { Warehouse, Truck, Package, BarChart3, Shield, Headphones } from 'lucide-react';
import type { Product } from '../types';
import colorScheme1 from '@/assets/产品图片/钢结构防火涂料/1防火涂料超薄型.jpg'
import colorScheme2 from '@/assets/产品图片/钢结构防火涂料/2防火涂料薄型.jpg'
import colorScheme3 from '@/assets/产品图片/钢结构防火涂料/3防火涂料厚型.jpg'


const allImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/产品图片/钢结构防火涂料/**/*.{jpeg,jpg,png}', { eager: true });

// 2. Helper function: Get image object by filename (or partial path)
function getImg(filename: string) {
  // Find path ending with filename in all paths
  const foundPath = Object.keys(allImages).find(path => path.endsWith(filename));

  if (!foundPath) {
    console.error(`Image not found: ${filename}`);
    // If image not found, return undefined or a default placeholder
    return undefined;
  }

  return allImages[foundPath].default;
}




const steelStructureProductsMap: Product[] = [
  {
    slug: 'steelStructure-1',
    title: 'Sơn chống cháy kết cấu thép trương nở trong nhà',
    category: 'steel-structure',
    fullDescription: 'Sơn chống cháy kết cấu thép trương nở trong nhà hình thành lớp bọt cacbon dạng tổ ong hoặc bọt biển đồng nhất và dày đặc khi gặp lửa, có tác dụng bảo vệ tốt đối với vật liệu nền dễ cháy. Loại sơn này chịu nước, có độ bám dính tốt, khả năng tạo màng tốt, độ cứng cao và chịu được chùi rửa.',
    image: getImg('1室内膨胀型钢结构防火涂料/室内膨胀型钢结构防火涂料水基型.png')!,
    images: [
      getImg('1室内膨胀型钢结构防火涂料/室内膨胀型钢结构防火涂料水基型.png')!,
      getImg('1室内膨胀型钢结构防火涂料/室内膨胀型钢结构防火涂料23.jpg')!,
      getImg('1室内膨胀型钢结构防火涂料/室内膨胀型钢结构防火涂料25.jpg')!,
      getImg('1室内膨胀型钢结构防火涂料/室内膨胀型钢结构防火涂料溶剂型.png')!,
      getImg('1室内膨胀型钢结构防火涂料/室内膨胀型钢结构防火涂料待发走.jpg')!
    ],
    icon: BarChart3,
    colorScheme: [
      { "img": colorScheme1, "desc": "Sơn chống cháy siêu mỏng" },
      { "img": colorScheme2, "desc": "Sơn chống cháy mỏng" },
      { "img": colorScheme3, "desc": "Sơn chống cháy dày" }
    ],
    specs: {
      "Tiêu chuẩn thực hiện": "GB14907-2018"
    },
    application: "Sơn chống cháy kết cấu thép trương nở trong nhà thích hợp cho kết cấu thép của các công trình nông nghiệp và dân dụng nói chung, nhà cao tầng, khách sạn, khu vui chơi giải trí, v.v., đóng vai trò bảo vệ chống cháy.",
    precautions: [
      "1. Trước khi thi công sơn chống cháy, bề mặt cấu kiện phải được làm sạch bụi bẩn, dầu mỡ, tạp chất, v.v., và đánh bóng sạch sẽ, đợi bề mặt khô mới có thể tiến hành thi công sơn chống cháy.",
      "2. Sản phẩm này có thể sử dụng các phương pháp thi công như phun, quét, v.v.",
      "3. Tại hiện trường thi công nghiêm cấm khói lửa, tuyệt đối không có nguồn lửa.",
      "4. Thời hạn bảo quản hiệu quả của sản phẩm này là 6 tháng."
    ]
  }, 
  {
    slug: 'steelStructure-2',
    title: 'Sơn chống cháy kết cấu thép trương nở ngoài trời',
    category: 'steel-structure',
    fullDescription: 'Sơn chống cháy kết cấu thép trương nở ngoài trời là một loại sơn chống cháy chuyên dùng cho môi trường ngoài trời, đặc điểm chính của nó là có khả năng chống cháy, cách nhiệt xuất sắc cũng như hiệu suất chịu thời tiết ưu việt. Loại sơn này sử dụng công thức đặc biệt, có thể trương nở nhanh chóng trong điều kiện nhiệt độ cao, hình thành lớp bọt dày đặc. Đặc tính này không chỉ có thể ngăn chặn hiệu quả ngọn lửa xâm thực kết cấu thép mà còn cách ly truyền nhiệt, cung cấp sự bảo vệ lâu dài cho kết cấu thép. Ngoài ra, nó còn có độ bám dính và độ bền rất tốt, có thể giữ cho lớp phủ nguyên vẹn trong thời gian dài ở môi trường ngoài trời. So với các loại sơn chống cháy khác, sơn chống cháy kết cấu thép trương nở ngoài trời thể hiện xuất sắc trong việc đối phó với môi trường tự nhiên khắc nghiệt. Nó có thể chống lại sự xâm nhập của các yếu tố tự nhiên như gió mưa, tia cực tím, đảm bảo kết cấu thép sau khi sơn giữ được trạng thái an toàn chống cháy tốt trong thời gian dài. Tóm lại, loại sơn chống cháy này là sự lựa chọn lý tưởng để bảo đảm an toàn cho kết cấu thép ngoài trời.',
    image: getImg('2室外膨胀型钢结构防火涂料/室外膨胀型钢结构防火涂料(水基型).png')!,
    images: [
      getImg('2室外膨胀型钢结构防火涂料/室外膨胀型钢结构防火涂料(水基型).png')!,
      getImg('2室外膨胀型钢结构防火涂料/产品细节展示.jpg')!,
      getImg('2室外膨胀型钢结构防火涂料/防火涂料样板.jpg')!,
      getImg('2室外膨胀型钢结构防火涂料/室外膨胀型钢结构防火涂料 (1).jpg')!,
      getImg('2室外膨胀型钢结构防火涂料/室外膨胀型钢结构防火涂料 (5).jpg')!,
      getImg('2室外膨胀型钢结构防火涂料/室外膨胀型钢结构防火涂料（溶剂型）.png')!
    ],
    icon: Headphones,
    colorScheme: [
      { "img": colorScheme1, "desc": "Sơn chống cháy siêu mỏng" },
      { "img": colorScheme2, "desc": "Sơn chống cháy mỏng" },
      { "img": colorScheme3, "desc": "Sơn chống cháy dày" }],
  }, {
    slug: 'steelStructure-3',
    title: 'Sơn chống cháy kết cấu thép không trương nở trong nhà (Gốc thạch cao)',
    category: 'steel-structure',
    fullDescription: 'Sơn chống cháy gốc thạch cao lấy thạch cao làm vật liệu nền chính, sử dụng bột liệu bao gồm vật liệu cách nhiệt nhẹ vô cơ và vật liệu sợi. So với sơn chống cháy gốc xi măng, sơn gốc thạch cao xanh và thân thiện với môi trường, nguyên liệu carbon thấp tiết kiệm năng lượng, vật liệu nhẹ, mật độ nhỏ. Đồng thời, lực kết dính mạnh, khả năng biến dạng tốt, hiệu suất chịu lửa ưu việt. Thành phẩm không dễ nứt vỡ rơi rụng, đột phá nút thắt thi công phân lớp phân đạo của gốc bùn, có thể thực hiện thi công phun một lần thành hình.',
    image: getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料（石膏基）.png')!,
    images: [
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料（石膏基）.png')!,
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料（水泥基）.png')!,
      getImg('3室内非膨胀型钢结构防火涂料/石膏基型产品成型测试.jpg')!,
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料 (4).jpg')!,
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料 (7).jpg')!,
      getImg('3室内非膨胀型钢结构防火涂料/产品库存.jpg')!
    ],
    icon: Package,
    colorScheme: [
      { "img": colorScheme1, "desc": "Sơn chống cháy siêu mỏng" },
      { "img": colorScheme2, "desc": "Sơn chống cháy mỏng" },
      { "img": colorScheme3, "desc": "Sơn chống cháy dày" }
    ],
    specs: {
      "Tiêu chuẩn thực hiện": "GB14907-2018",
    },
    application: "Thích hợp cho công trình bảo vệ chống cháy kết cấu thép chịu lực trong nhà, như: nhà xưởng, kho bãi, nhà thi đấu, nhà ga, nhà ga sân bay, hóa dầu, tòa nhà lớn, v.v.",
    packagingAndTransportation: [
      "1. Vận chuyển: Sơn chống cháy kết cấu thép không trương nở trong nhà (gốc thạch cao) không dễ cháy, không dễ nổ, không ăn mòn, thuộc hàng hóa không nguy hiểm, các loại phương tiện giao thông đều có thể vận chuyển.",
      "2. Bảo quản: Bảo quản trong môi trường 5-35℃, tránh mưa, phơi nắng, ẩm ướt. Cần bảo quản trong nhà khô ráo, thoáng gió.",
      "3. Thời hạn bảo quản hiệu quả của sản phẩm này là 6 tháng."
    ]
  },
  {
    slug: 'steelStructure-4',
    title: 'Sơn chống cháy kết cấu thép không trương nở ngoài trời',
    category: 'steel-structure',
    fullDescription: 'Sơn chống cháy kết cấu thép không trương nở ngoài trời là loại sơn chống cháy kết cấu thép kiểu mới do công ty chúng tôi nghiên cứu thành công, sản phẩm này thích hợp phun lên bề mặt kết cấu thép, hình thành một lớp cách nhiệt chống cháy, giúp nó được bảo vệ cách nhiệt trong hỏa hoạn. Sơn chống cháy kết cấu thép không trương nở ngoài trời lấy vật liệu cách nhiệt vô cơ làm thành phần chính, không độc không mùi, có các đặc điểm thi công thuận tiện, lực bám dính lớp phủ mạnh, cường độ cơ học cao, thời gian chịu lửa dài.',
    image: getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型钢结构防火涂料.png')!,
    images: [
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型钢结构防火涂料.png')!,
      getImg('4室外非膨胀型钢结构防火涂料/特种室外非膨胀型钢结构防火涂料（特种型）.png')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀防火涂料准备发走.jpg')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型测试.jpg')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型钢结构防火涂料 (9).jpg')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型涂料施工测试.jpg')!,
    ],
    icon: Truck,
    colorScheme: [
      { "img": colorScheme1, "desc": "Sơn chống cháy siêu mỏng" },
      { "img": colorScheme2, "desc": "Sơn chống cháy mỏng" },
      { "img": colorScheme3, "desc": "Sơn chống cháy dày" }
    ],
    specs: {
      "Tiêu chuẩn thực hiện": "GB14907-2018",
    },
    application: "Sơn chống cháy kết cấu thép không trương nở ngoài trời thích hợp cho bảo vệ chống cháy các loại kết cấu thép chịu lực ngoài trời như tòa nhà cao tầng, dầu khí, hóa chất, điện lực, luyện kim, quốc phòng, công nghiệp nhẹ, v.v.",
    usage: [
      "1. Lớp thứ nhất: trộn keo, bột, nước theo tỷ lệ, dùng máy trộn trộn 5-10 phút, đợi đồng nhất thì tiến hành phun, độ dày phun <2mm, sau khi phun phải qua 2-3 ngày khô hoàn toàn mới có thể tiến hành phun lớp tiếp theo.",
      "2. Lớp thứ hai: trộn keo, bột, nước theo tỷ lệ, dùng máy trộn trộn 5-10 phút, đợi đồng nhất thì tiến hành phun, độ dày phun 6-8mm là thích hợp, sau khi khô 48 giờ mới có thể tiến hành phun lớp tiếp theo.",
      "3. Lớp thứ ba: trộn keo, bột, nước theo tỷ lệ, dùng máy trộn trộn 5-10 phút, đợi đồng nhất thì tiến hành phun, độ dày phun 6-8mm là thích hợp, sau khi khô 48 giờ mới có thể tiến hành phun lớp tiếp theo.",
      "4. Lớp thứ tư: trộn keo, bột, nước theo tỷ lệ, dùng máy trộn trộn 5-10 phút, đợi đồng nhất thì tiến hành phun.",
      "Chú ý: Lượng nước thêm vào có thể điều chỉnh tùy theo điều kiện độ ẩm, nhiệt độ, v.v."
    ],
    packagingAndTransportation: [
      "1. Sản phẩm này vận chuyển như hàng hóa thông thường.",
      "2. Bột của sản phẩm này tránh mưa, chất lỏng tránh đông đá và phơi nắng. Nên bảo quản trong môi trường râm mát, thoáng gió, khô ráo."
    ]
  }, {
    slug: 'steelStructure-5',
    title: 'Sơn chống cháy kết cấu thép trương nở ngoài trời đặc biệt',
    category: 'steel-structure',
    fullDescription: 'Sơn chống cháy kết cấu thép trương nở đặc biệt ngoài trời là một loại vật liệu lớp phủ chống cháy đặc biệt, chủ yếu dùng cho bảo vệ chống cháy kết cấu thép. Sơn chống cháy kết cấu thép đặc biệt sử dụng điều kiện thử nghiệm gia nhiệt hỏa hoạn hydrocarbon (HC) trong thử nghiệm điển hình. Yêu cầu đối với các hiệu suất như chịu lửa cách nhiệt của lớp phủ sơn chống cháy rất cao. Loại sơn này được ứng dụng rộng rãi trong kết cấu thép ngoài trời của các ngành như xây dựng, cơ sở hóa dầu. Ví dụ như việc bảo vệ các cơ sở quan trọng như nhà máy hóa chất, khu thiết bị, hành lang ống, cầu, tháp điện gió đều không thể thiếu nó. Ngoài ra, nó cũng thường được ứng dụng ở một số nơi hoặc môi trường cần bảo vệ đặc biệt, như thiết bị cách ly trong lối thoát hiểm hoặc bảo trì kết cấu xây dựng trong môi trường nhiệt độ cao, v.v.',
    image: getImg('5特种钢结构防火涂料/特种室外膨胀型钢结构防火涂料(特种溶剂型).png')!,
    images: [
      getImg('5特种钢结构防火涂料/特种室外膨胀型钢结构防火涂料(特种溶剂型).png')!,
      getImg('5特种钢结构防火涂料/特种室外膨胀型钢结构防火涂料（特种水基型）.png')!,
      getImg('5特种钢结构防火涂料/色卡.jpg')!,
    ],
    icon: Shield,
    colorScheme: [
      { "img": colorScheme1, "desc": "Sơn chống cháy siêu mỏng" },
      { "img": colorScheme2, "desc": "Sơn chống cháy mỏng" },
      { "img": colorScheme3, "desc": "Sơn chống cháy dày" }],
  }, {
    slug: 'steelStructure-6',
    title: 'Sơn chống cháy đường hầm',
    category: 'steel-structure',
    fullDescription: 'Sản phẩm này thích hợp cho chống cháy đường hầm đường bộ, đường hầm đường sắt, còn thích hợp cho nhu cầu chống cháy của công trình hóa dầu, tòa nhà cao tầng, kết cấu thép, gara ngầm. Đường hầm đường bộ thường ở vùng núi, hang đường hầm râm mát, ẩm ướt, độ thông gió cũng kém. Vách trong bê tông dễ xuất hiện các hiện tượng như ẩm mốc, kiềm hóa, bong tróc. Đường hầm dài đa số xa thành phố, không có nguồn nước chữa cháy đáng tin cậy, lưu lượng xe trong đường hầm không cân bằng, vật phẩm trên xe không xác định, tải trọng hỏa hoạn không xác định, những điều này quyết định tính không thể dự đoán của hỏa hoạn đường hầm dài. Vì vậy, công trình sơn trong hang đường hầm đường bộ vừa phải xem xét tính trang trí tốt của nó, vừa phải xem xét hiệu suất chống thấm, hiệu suất chống nấm mốc và hiệu suất chống cháy ưu việt của nó.',
    image: getImg('6隧道防火涂料/隧道防火涂料.png')!,
    images: [
      getImg('6隧道防火涂料/隧道防火涂料.png')!,
      getImg('6隧道防火涂料/隧道防火涂料 (8).jpg')!,
      getImg('6隧道防火涂料/隧道防火涂料施工结构图.jpg')!
    ],
    icon: Headphones,
  }, {
    slug: 'steelStructure-7',
    title: 'Sơn chống cháy trang trí',
    category: 'steel-structure',
    category_id: 'steel-structure-coatings',
    image: getImg('饰面型防火涂料.jpg')!,
    fullDescription: `
      Sơn chống cháy trang trí là một loại sơn mới tích hợp chức năng trang trí và chống cháy. Khi sơn chống cháy được phủ lên vật liệu nền dễ cháy, bình thường có thể đóng vai trò trang trí, một khi hỏa hoạn xảy ra, thì có thể ngăn chặn lửa lan rộng, đạt được mục đích bảo vệ vật liệu nền. Các loại sơn chống cháy trang trí được sản xuất đều là sơn chống cháy trương nở, các chủng loại có sơn chống cháy gốc nước, sơn chống cháy trong suốt và sơn chống cháy gốc dung môi, các chất trợ chống cháy được sử dụng về cơ bản là giống nhau.
      Sơn chống cháy trang trí thích hợp cho các công trình công nghiệp và dân dụng nói chung, tòa nhà cao tầng, khách sạn, nơi văn hóa giải trí, kết cấu gỗ của công trình cổ, ván sợi, ván dăm, sản phẩm tấm nhựa gia cường sợi thủy tinh và các vật liệu dễ cháy khác, cũng như tường xi măng, v.v., đóng vai trò bảo vệ chống cháy. Sơn chống cháy trang trí sau khi tạo màng có hiệu suất lớp phủ ổn định, có thể sử dụng ở các điều kiện khí hậu khác nhau, do đó có thể sử dụng trên toàn quốc.
    `,

    icon: Warehouse,
    
  }, {
    slug: 'steelStructure-8',
    title: 'Sơn chống cháy kết cấu thép không trương nở ngoài trời đặc biệt (Loại đặc biệt)',
    category: 'steel-structure',
    fullDescription: 'Sơn chống cháy kết cấu thép không trương nở ngoài trời đặc biệt cho cơ sở hóa dầu với hiệu suất chịu lửa 2.0h, 2.5h, 3.0h loại phủ dày dùng cho bảo vệ chống cháy bề mặt kết cấu thép của các tòa nhà đặc biệt như cơ sở hóa dầu, trạm biến áp. Sơn chống cháy kết cấu thép đặc biệt sử dụng điều kiện thử nghiệm gia nhiệt hỏa hoạn hydrocarbon (HC) trong thử nghiệm điển hình. Yêu cầu đối với các hiệu suất như chịu lửa cách nhiệt của lớp phủ sơn chống cháy rất cao. Loại sơn này thích hợp cho công trình bảo vệ chống cháy của các tòa nhà kết cấu thép chịu lực ngoài trời đặc biệt, như thiết bị hóa chất, trạm biến áp, trạm phân phối điện, nhà máy nhiệt điện, nhà máy điện hạt nhân và các công trình kết cấu thép ngoài trời khác của hóa dầu, luyện kim, nhà máy điện. Hệ số dẫn nhiệt của lớp phủ thấp, khả năng chịu thời tiết tốt, khả năng chống oxy hóa, phấn hóa mạnh, lớp phủ gặp lửa hình thành lớp men mật độ cao vừa cách nhiệt vừa chịu được oxy hóa thêm, khiến giới hạn chịu lửa của nó đạt trên 3.0 giờ.',
    image: getImg('4室外非膨胀型钢结构防火涂料/特种室外非膨胀型钢结构防火涂料（特种型）.png')!,
    images: [
      getImg('4室外非膨胀型钢结构防火涂料/特种室外非膨胀型钢结构防火涂料（特种型）.png')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀防火涂料准备发走.jpg')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型测试.jpg')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型钢结构防火涂料 (9).jpg')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型涂料施工测试.jpg')!,
    ],
    icon: Headphones,
    colorScheme: [
      { "img": colorScheme1, "desc": "Sơn chống cháy siêu mỏng" },
      { "img": colorScheme2, "desc": "Sơn chống cháy mỏng" },
      { "img": colorScheme3, "desc": "Sơn chống cháy dày" }],
  }, {
    slug: 'steelStructure-9',
    title: 'Sơn chống cháy kết cấu thép không trương nở trong nhà (Gốc xi măng)',
    
    fullDescription: 'Sản phẩm này là sản phẩm do công ty chúng tôi nghiên cứu thành công theo tiêu chuẩn quốc gia GB14907-2018, sản phẩm này thích hợp phun lên bề mặt kết cấu thép, hình thành một lớp cách nhiệt chống cháy giúp nó được bảo vệ cách nhiệt trong hỏa hoạn. Có các đặc điểm thi công thuận tiện nhanh chóng, lực bám dính lớp phủ mạnh, cường độ cơ học cao, thời gian giới hạn chịu lửa dài, hiệu suất chịu lửa ổn định đáng tin cậy.',
    image:getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料（水泥基）.png')!,
    images: [
            
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料（水泥基）.png')!,
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料（石膏基）.png')!,
      getImg('3室内非膨胀型钢结构防火涂料/石膏基型产品成型测试.jpg')!,
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料 (4).jpg')!,
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料 (7).jpg')!,
      getImg('3室内非膨胀型钢结构防火涂料/产品库存.jpg')!
    ],
    icon: Headphones,
    colorScheme: [
      { "img": colorScheme1, "desc": "Sơn chống cháy siêu mỏng" },
      { "img": colorScheme2, "desc": "Sơn chống cháy mỏng" },
      { "img": colorScheme3, "desc": "Sơn chống cháy dày" }],
      specs: {
      "Tiêu chuẩn thực hiện": "GB14907-2018",
      },
      application: "Thích hợp cho công trình bảo vệ chống cháy kết cấu thép chịu lực trong nhà, như: nhà xưởng, kho bãi, nhà thi đấu, nhà ga, nhà ga sân bay, hóa dầu, tòa nhà lớn, v.v.",

usage: [
"1. Chủ yếu là phun, cũng có thể trát hoặc kết hợp phun và trát.",
"2. Xử lý nền: Trước khi thi công phải làm sạch triệt để bụi bẩn, dầu mỡ, rỉ sét nổi trên cấu kiện thép, sau đó quét sơn chống rỉ, sau khi kiểm tra bề mặt cấu kiện thép đã quét hoàn toàn sơn chống rỉ và khô, mới có thể phun sơn chống cháy.",
"3. Lớp thứ nhất: trộn keo, bột, nước theo tỷ lệ, dùng máy trộn trộn 5-10 phút, đợi đồng nhất thì tiến hành phun, độ dày phun <2mm, sau khi phun phải qua 2-3 ngày khô hoàn toàn mới có thể tiến hành phun lớp tiếp theo.",
"4. Lớp thứ hai: trộn keo, bột, nước theo tỷ lệ, dùng máy trộn trộn 5-10 phút, đợi đồng nhất thì tiến hành phun, độ dày phun 6-8mm là thích hợp, sau khi khô 48 giờ mới có thể tiến hành phun lớp tiếp theo.",
"5. Lớp thứ ba: trộn keo, bột, nước theo tỷ lệ, dùng máy trộn trộn 5-10 phút, đợi đồng nhất thì tiến hành phun, độ dày phun 6-8mm là thích hợp, sau khi khô 48 giờ mới có thể tiến hành phun lớp tiếp theo.",
"6. Lớp thứ tư: trộn keo, bột, nước theo tỷ lệ, dùng máy trộn trộn 5-10 phút, đợi đồng nhất thì tiến hành phun, phun thẳng đến độ dày tương ứng."
],
packagingAndTransportation: [
"1. Sản phẩm này vận chuyển như hàng hóa thông thường.",
"2. Bột của sản phẩm này tránh mưa, chất lỏng tránh đông đá và phơi nắng. Nên bảo quản trong môi trường râm mát, thoáng gió, khô ráo."
]
  }
];



export const steelStructureProducts: Product[] = steelStructureProductsMap.map(product => ({
  ...product,
    description: (product.fullDescription ? product.fullDescription.substring(0, 100) + '...' : ''),
    category: 'steel-structure',
    labels: ['Nhà sản xuất nguồn', 'Cung cấp ổn định', 'Giao hàng nhanh'],
}));
