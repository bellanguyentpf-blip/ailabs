import type { Dictionary } from "./en"

export const vi: Dictionary = {
  locale: "vi",
  brand: {
    name: "AILABS",
    tagline: "Studio tăng trưởng thuần AI",
  },
  nav: {
    home: "Trang chủ",
    services: "Dịch vụ",
    caseStudies: "Dự án tiêu biểu",
    pricing: "Báo giá",
    about: "Về chúng tôi",
    blog: "Blog",
    contact: "Liên hệ",
  },
  cta: {
    contact: "Liên hệ ngay",
    audit: "Nhận audit website miễn phí",
    bookCall: "Đặt lịch tư vấn",
    getStarted: "Bắt đầu",
    viewWork: "Xem dự án",
    learnMore: "Tìm hiểu thêm",
    readMore: "Đọc tiếp",
    explore: "Xem dịch vụ",
    allPosts: "Tất cả bài viết",
    viewAll: "Xem tất cả",
    backHome: "Về trang chủ",
    sendMessage: "Gửi tin nhắn",
    getProposal: "Nhận đề xuất",
  },
  // ── Danh mục dịch vụ dùng chung ────────────────────────────
  servicesList: [
    {
      slug: "ai-website-development",
      no: "01",
      icon: "layout",
      name: "AI Website Development",
      tagline: "Website biết tư duy, chuyển đổi và mở rộng.",
      summary:
        "Website ưu tiên chuyển đổi, xây dựng cùng AI, từ nội dung, bố cục đến cá nhân hoá và khả năng hiển thị trên công cụ tìm kiếm.",
      why: "Hầu hết website chỉ là tờ rơi. Chúng tôi xây website như một cỗ máy tăng trưởng: nhanh, chuẩn ngữ nghĩa và có cấu trúc để cả con người lẫn công cụ tìm kiếm AI đều hiểu và gợi ý bạn.",
      highlights: [
        "Nội dung & mô hình hoá nội dung tối ưu theo phễu, hỗ trợ bởi AI",
        "Headless, chuẩn Core Web Vitals tuyệt đối (Next.js)",
        "Schema & dữ liệu có cấu trúc sẵn sàng cho công cụ trả lời AI",
        "Tích hợp sẵn A/B testing và đo lường chuyển đổi",
      ],
      deliverables: [
        "UX & kiến trúc thông tin",
        "Hệ thống thiết kế + thư viện component",
        "Bản dựng production & bàn giao CMS",
        "Dashboard phân tích, đo lường & tăng trưởng",
      ],
      faq: [
        {
          q: "Xây dựng một website mất bao lâu?",
          a: "Hầu hết website doanh nghiệp được bàn giao trong 7 đến 14 ngày làm việc kể từ khi khởi động dự án. Thời gian phụ thuộc vào quy mô, mức độ sẵn sàng của nội dung và số trang cần thiết. Chúng tôi sẽ cung cấp thời gian bàn giao rõ ràng trước khi dự án bắt đầu.",
        },
        {
          q: "Website của bạn khác gì so với agency web thông thường?",
          a: "Chúng tôi tích hợp AI vào mọi giai đoạn sản xuất, bao gồm chiến lược nội dung, viết bài, hệ thống thiết kế và cấu trúc SEO. Điều này giúp chúng tôi bàn giao nhanh hơn mà không ảnh hưởng đến chất lượng. Mỗi website cũng được xây dựng để hiển thị trên công cụ tìm kiếm hiện đại, tức là được tối ưu cho cả Google lẫn các công cụ trả lời AI như ChatGPT, Gemini và Perplexity.",
        },
        {
          q: "Bạn có làm việc với khách hàng ngoài Việt Nam không?",
          a: "Có. Chúng tôi đã xây dựng website cho các doanh nghiệp tại Mỹ, Úc, Thuỵ Điển, Thái Lan và Việt Nam. Đội ngũ làm việc từ xa và quen với việc cộng tác bất đồng bộ qua các múi giờ. Dự án quốc tế được thực hiện hoàn toàn bằng tiếng Anh.",
        },
        {
          q: "GEO là gì và tại sao lại quan trọng với doanh nghiệp của tôi?",
          a: "GEO là viết tắt của Generative Engine Optimization, tức là tối ưu hóa để được trích dẫn và gợi ý bởi các công cụ AI như ChatGPT, Gemini và Perplexity. Khi ngày càng nhiều người dùng AI để tìm sản phẩm và dịch vụ, những doanh nghiệp xuất hiện trong câu trả lời AI sẽ có lợi thế cạnh tranh lớn. Mỗi website chúng tôi xây dựng đều được cấu trúc từ đầu để hỗ trợ GEO song song với SEO truyền thống.",
        },
        {
          q: "Chi phí xây dựng một website là bao nhiêu?",
          a: "Chi phí phụ thuộc vào quy mô, số trang và tính năng yêu cầu. Chúng tôi cung cấp báo giá rõ ràng trước khi bắt đầu bất kỳ công việc nào. Xem trang Bảng giá để biết mức khởi điểm, hoặc yêu cầu kiểm tra website miễn phí và chúng tôi sẽ gửi cho bạn một đề xuất phù hợp.",
        },
        {
          q: "Bạn có thể thiết kế lại website hiện tại của tôi không?",
          a: "Có. Chúng tôi thực hiện cả dự án xây mới lẫn thiết kế lại. Nếu bạn đã có website, chúng tôi sẽ kiểm tra trước để hiểu điều gì đang hoạt động tốt, điều gì chưa và cần thay đổi gì để cải thiện hiệu suất và khả năng tìm kiếm.",
        },
        {
          q: "Sau khi ra mắt, tôi có thể tự cập nhật website không?",
          a: "Có. Mọi dự án đều bao gồm bàn giao CMS để đội ngũ của bạn có thể quản lý nội dung mà không cần lập trình viên. Chúng tôi cũng cung cấp buổi hướng dẫn và tài liệu viết sẵn để bạn tự tin sử dụng nền tảng ngay từ ngày đầu.",
        },
        {
          q: "Bạn có viết nội dung cho website không?",
          a: "Có. Viết nội dung là một phần trong quy trình sản xuất của chúng tôi. Chúng tôi đảm nhận copywriting cho tất cả các trang chính, bao gồm trang chủ, trang dịch vụ và giới thiệu. Nội dung được viết phù hợp với giọng thương hiệu, đối tượng mục tiêu và yêu cầu SEO.",
        },
        {
          q: "Sau khi website ra mắt thì sao?",
          a: "Trước khi ra mắt, chúng tôi thiết lập Google Analytics 4, Google Search Console, theo dõi chuyển đổi và gửi sitemap để website được đo lường ngay từ ngày đầu. Sau khi ra mắt, bạn có toàn quyền truy cập dữ liệu. Chúng tôi cũng cung cấp gói SEO và nội dung liên tục nếu bạn muốn tiếp tục xây dựng độ nhận diện theo thời gian.",
        },
        {
          q: "Làm thế nào để bắt đầu?",
          a: "Bước đơn giản nhất là yêu cầu kiểm tra website miễn phí. Chúng tôi sẽ xem xét website hiện tại (hoặc brief nếu bạn mới bắt đầu), xác định cơ hội và gửi cho bạn một đề xuất rõ ràng. Không cần cam kết ngay.",
        },
      ],
    },
    {
      slug: "seo-ai-search",
      no: "02",
      icon: "search",
      name: "SEO & AI Search Visibility",
      tagline: "Được Google tìm thấy, và cả AI.",
      summary:
        "Lên top tìm kiếm truyền thống và trở thành nguồn được trích dẫn trong ChatGPT, Perplexity, Gemini và AI Overviews (GEO/AEO).",
      why: "Tìm kiếm đang tách làm hai: liên kết xanh và câu trả lời AI. Chúng tôi tối ưu cho cả hai, SEO kỹ thuật cộng Tối ưu Công cụ Sinh (GEO) để thương hiệu của bạn là câu trả lời, không phải chú thích.",
      highlights: [
        "Audit SEO kỹ thuật & khắc phục Core Web Vitals",
        "Tối ưu Công cụ Sinh (GEO/AEO)",
        "Bản đồ nội dung theo thẩm quyền chủ đề & thực thể",
        "Kiến trúc liên kết nội bộ & programmatic",
      ],
      deliverables: [
        "Audit kỹ thuật & nội dung toàn diện",
        "Bản đồ cơ hội từ khoá + prompt AI",
        "Lộ trình nội dung & backlink hằng tháng",
        "Báo cáo thứ hạng, traffic & trích dẫn AI",
      ],
      faq: [
        {
          q: "SEO, AEO và GEO khác nhau như thế nào?",
          a: "SEO tối ưu khả năng hiển thị trên Google và các công cụ tìm kiếm truyền thống. AEO cấu trúc nội dung để xuất hiện trong featured snippet và câu trả lời trực tiếp. GEO đảm bảo thương hiệu được trích dẫn bởi các nền tảng AI như ChatGPT, Gemini và Perplexity. Chúng tôi tối ưu cho cả ba.",
        },
        {
          q: "Mất bao lâu để thấy kết quả từ SEO?",
          a: "Các cải thiện kỹ thuật và on-page có thể cho kết quả trong 4 đến 8 tuần. Thứ hạng từ nội dung thường mất 3 đến 6 tháng để tạo traffic đáng kể. Khả năng hiển thị trên AI search có thể phát triển nhanh hơn khi nội dung của bạn xây dựng được thẩm quyền chủ đề rõ ràng.",
        },
        {
          q: "Audit SEO kỹ thuật bao gồm những gì?",
          a: "Audit của chúng tôi bao gồm khả năng crawl, index, tốc độ trang, Core Web Vitals, hiệu suất mobile, cấu trúc URL, liên kết nội bộ, nội dung trùng lặp, schema markup và tín hiệu thẩm quyền. Chúng tôi ưu tiên các vấn đề theo mức độ ảnh hưởng đến doanh nghiệp.",
        },
        {
          q: "Bạn tối ưu cho AI search như ChatGPT và Perplexity như thế nào?",
          a: "Các nền tảng AI ưu tiên các nguồn thể hiện chuyên môn rõ ràng, nội dung có cấu trúc và chiều sâu chủ đề. Chúng tôi xây dựng nội dung dựa trên tối ưu hóa thực thể, dữ liệu có cấu trúc, câu trả lời thực tế súc tích và các trang pillar có thẩm quyền mà hệ thống AI có khả năng trích dẫn cao hơn.",
        },
        {
          q: "Dịch vụ này có bao gồm viết nội dung không?",
          a: "Có. Sản xuất nội dung được tích hợp vào quy trình SEO của chúng tôi. Chúng tôi xử lý nghiên cứu từ khoá, brief nội dung, viết bài, tối ưu on-page và xuất bản. Tất cả nội dung đều được viết để đáp ứng cả search intent lẫn giá trị cho người đọc.",
        },
        {
          q: "Topical authority là gì và tại sao nó quan trọng?",
          a: "Topical authority có nghĩa là bao phủ một chủ đề đủ toàn diện để các công cụ tìm kiếm và nền tảng AI nhận ra website của bạn là nguồn đáng tin cậy về chủ đề đó. Thay vì tối ưu từng trang riêng lẻ, chúng tôi xây dựng các cụm nội dung liên kết với nhau để tạo tín hiệu chiều sâu và chuyên môn.",
        },
        {
          q: "Bạn đo lường thành công của chiến dịch SEO như thế nào?",
          a: "Chúng tôi theo dõi thứ hạng từ khoá, traffic tự nhiên, tỷ lệ nhấp, tỷ lệ chuyển đổi từ traffic tự nhiên, tăng trưởng backlink và trích dẫn AI search. Báo cáo hàng tháng cho bạn thấy tiến độ rõ ràng và những gì đang tạo ra kết quả.",
        },
        {
          q: "Bạn có cung cấp dịch vụ Programmatic SEO không?",
          a: "Có. Với các doanh nghiệp trong thị trường cạnh tranh cao hoặc có quy mô lớn, chúng tôi thiết kế hệ thống programmatic SEO tạo ra số lượng lớn trang được tối ưu. Mỗi trang được xây dựng xung quanh search intent thực sự, không phải nội dung mỏng hay template.",
        },
        {
          q: "Bạn có thể giúp nếu website bị Google phạt không?",
          a: "Có. Chúng tôi xác định nguyên nhân của hình phạt, dù là manual action hay vấn đề thuật toán, và phát triển kế hoạch phục hồi. Thường bao gồm loại bỏ hoặc cải thiện nội dung kém chất lượng, disavow link độc hại và xây dựng lại nền tảng kỹ thuật.",
        },
        {
          q: "Cách tiếp cận của bạn khác gì so với các agency SEO khác?",
          a: "Hầu hết agency SEO chỉ tối ưu cho Google. Chúng tôi xây dựng chiến lược bao gồm cả SEO truyền thống lẫn AI search visibility, nơi ngày càng nhiều quyết định mua hàng bắt đầu. Kết hợp với sản xuất nội dung nội bộ và báo cáo minh bạch, khách hàng có chiến lược tìm kiếm toàn diện và sẵn sàng cho tương lai hơn.",
        },
      ],
    },
    {
      slug: "ai-content-marketing",
      no: "03",
      icon: "sparkles",
      name: "AI Content & Creative Production",
      tagline: "Đội content trọn gói, không cần tuyển dụng.",
      summary:
        "Chúng tôi hoạt động như một phần mở rộng của đội bạn, sản xuất nội dung viết, tài sản hình ảnh và tài liệu marketing giúp xây dựng độ nhận diện, niềm tin và nhu cầu trên mọi kênh.",
      why: "Hầu hết các đội nhóm không có đủ thời gian hay nguồn lực để xuất bản theo tốc độ mà marketing hiện đại yêu cầu. Chúng tôi kết hợp sáng tạo của con người với quy trình AI để xử lý toàn bộ vận hành nội dung: lên kế hoạch, viết bài, thiết kế, đăng bài và tối ưu hóa.",
      highlights: [
        "Nội dung website: trang dịch vụ, landing page, case study và blog",
        "Social content phù hợp với thương hiệu, ngành và tệp khách hàng",
        "Copywriting và tài sản hình ảnh được sản xuất cùng nhau như một hệ thống",
        "Tối ưu cho SEO, GEO và các nền tảng khám phá dựa trên AI",
        "Quy trình sản xuất có thể mở rộng mà không đánh đổi chất lượng hay nhất quán thương hiệu",
      ],
      deliverables: [
        "Chiến lược nội dung và bộ kit giọng thương hiệu",
        "Copy website và landing page",
        "Lịch và sản xuất content mạng xã hội",
        "Copy chiến dịch và tài sản sáng tạo",
        "Kế hoạch SEO, GEO và xây dựng thẩm quyền chủ đề",
      ],
      midCta: {
        headline: "Nội dung xây pipeline. Xuất bản đúng lịch, mỗi tuần.",
        sub: "Ngừng trì hoãn nội dung. Hãy để chúng tôi xây hệ thống cho bạn.",
      },
      sectionsTitle: "Những gì chúng tôi sản xuất và cách thực hiện",
      sections: [
        {
          title: "Nội dung website tăng chuyển đổi",
          body: [
            "Nội dung website đóng vai trò then chốt trong việc khách hàng hiểu doanh nghiệp của bạn như thế nào. Chúng tôi tạo trang dịch vụ, landing page, case study, nội dung blog và copy hỗ trợ được thiết kế để truyền tải giá trị rõ ràng, đồng thời hỗ trợ mục tiêu SEO và chuyển đổi.",
            "Mỗi nội dung được phát triển xung quanh tệp khách hàng, định vị và mục tiêu kinh doanh của bạn. Không phải template chung chung.",
          ],
        },
        {
          title: "Social content cho thương hiệu hiện đại",
          body: [
            "Xây dựng hiện diện trực tuyến đòi hỏi nhiều hơn những bài đăng ngẫu nhiên. Chúng tôi tạo nội dung mạng xã hội liên tục, phù hợp với thương hiệu, ngành và tệp khách hàng, giúp doanh nghiệp duy trì hoạt động đều đặn trên các nền tảng với giọng nói và nhận diện hình ảnh nhất quán.",
            "Từ nội dung giáo dục và thought leadership đến các chiến dịch quảng bá và brand storytelling, chúng tôi giúp doanh nghiệp tạo ra nội dung mà mọi người thực sự muốn tương tác.",
          ],
        },
        {
          title: "Copywriting và tài sản sáng tạo cùng nhau",
          body: [
            "Marketing hiệu quả xảy ra khi thông điệp và hình ảnh phối hợp nhịp nhàng. Quy trình sản xuất của chúng tôi kết hợp copywriting chuyên nghiệp với thiết kế sáng tạo hỗ trợ AI, cho phép sản xuất cả nội dung viết và tài sản hình ảnh hỗ trợ một cách hiệu quả.",
            "Dù là đồ họa website, creative mạng xã hội, hình ảnh chiến dịch, ảnh blog hay tài sản marketing có thương hiệu, chúng tôi tạo nội dung được thiết kế để hoạt động như một hệ thống hoàn chỉnh thay vì những mảnh rời rạc.",
          ],
        },
        {
          title: "Tối ưu cho SEO, GEO và tìm kiếm AI",
          body: [
            "Nội dung hiện đại cần hoạt động tốt trên nhiều hơn chỉ Google. Chiến lược nội dung của chúng tôi hỗ trợ SEO truyền thống đồng thời cải thiện khả năng hiển thị trên các nền tảng khám phá dựa trên AI như ChatGPT, Gemini và Perplexity.",
            "Bằng cách kết hợp chiến lược nội dung, tối ưu tìm kiếm và phát triển thẩm quyền chủ đề, chúng tôi giúp doanh nghiệp tăng khả năng hiển thị ở bất cứ nơi nào khách hàng đang tìm kiếm thông tin.",
          ],
        },
        {
          title: "Sản xuất nội dung có thể mở rộng",
          body: [
            "Khi doanh nghiệp phát triển, nhu cầu nội dung cũng tăng theo. Hệ thống sản xuất của chúng tôi cho phép doanh nghiệp mở rộng sản lượng mà không hy sinh chất lượng, giúp đội marketing xuất bản đều đặn hơn trong khi vẫn phù hợp với tiêu chuẩn thương hiệu và mục tiêu kinh doanh.",
            "Dù bạn cần vài nội dung chiến lược mỗi tháng hay một vận hành nội dung khối lượng lớn, chúng tôi xây dựng quy trình hỗ trợ tăng trưởng bền vững.",
          ],
        },
      ],
      faq: [
        {
          q: "AI Content và Creative Production bao gồm những gì?",
          a: "Dịch vụ bao gồm toàn bộ quy trình sản xuất nội dung: chiến lược, viết bài, thiết kế hình ảnh, đăng bài và tối ưu hóa. Chúng tôi xử lý copy website, bài blog, nội dung mạng xã hội, tài sản chiến dịch và creative hỗ trợ, tất cả được sản xuất như một hệ thống phối hợp.",
        },
        {
          q: "Dịch vụ này khác gì so với thuê freelancer riêng lẻ?",
          a: "Chúng tôi quản lý toàn bộ workflow, từ lên kế hoạch và nghiên cứu đến viết bài, thiết kế và phân phối. Thay vì phối hợp nhiều writer, designer và strategist riêng biệt, bạn làm việc với một đội duy nhất xử lý mọi thứ và luôn phù hợp với thương hiệu và mục tiêu của bạn.",
        },
        {
          q: "Bạn sản xuất những loại nội dung nào?",
          a: "Chúng tôi sản xuất copy website, trang dịch vụ và landing page, bài blog, case study, nội dung mạng xã hội, copy quảng cáo, email chiến dịch, hình ảnh chiến dịch, creative mạng xã hội và tài sản marketing có thương hiệu.",
        },
        {
          q: "Bạn có sản xuất cả hình ảnh lẫn nội dung viết không?",
          a: "Có. Chúng tôi kết hợp copywriting chuyên nghiệp với thiết kế sáng tạo hỗ trợ AI, sản xuất cả nội dung viết và tài sản hình ảnh cùng nhau. Copy chiến dịch và đồ họa hỗ trợ, caption mạng xã hội và creative của nó, copy website và hình ảnh trang đều được phối hợp từ đầu.",
        },
        {
          q: "Làm sao đảm bảo đúng giọng thương hiệu và nhận diện hình ảnh?",
          a: "Chúng tôi xây dựng bộ brand voice kit và tài liệu tham chiếu hình ảnh ngay từ đầu dự án. Những tài liệu này được dùng để cấu hình quy trình sản xuất, đảm bảo mỗi nội dung khớp với tone, từ vựng và tiêu chuẩn hình ảnh của bạn trước khi được review và duyệt.",
        },
        {
          q: "GEO khác SEO như thế nào?",
          a: "SEO tối ưu nội dung cho công cụ tìm kiếm truyền thống như Google. GEO (Generative Engine Optimisation) cấu trúc nội dung để được trích dẫn và hiển thị bởi các công cụ AI như ChatGPT, Perplexity và Google AI Overviews. Chúng tôi xây dựng chiến lược nội dung đáp ứng cả hai.",
        },
        {
          q: "Mỗi tháng bạn sản xuất được bao nhiêu nội dung?",
          a: "Sản lượng phụ thuộc vào gói dịch vụ và mix nội dung. Hầu hết khách hàng bắt đầu với 4 đến 8 bài website hoặc blog kết hợp với lịch social content đều đặn. Sau khi hệ thống sản xuất đã chạy ổn định, sản lượng có thể mở rộng mà không cần tăng tương ứng về thời gian hay chi phí.",
        },
        {
          q: "Bạn có lo phần đăng bài và lên lịch không?",
          a: "Có. Chúng tôi kết nối với các nền tảng đăng bài của bạn và quản lý lịch đăng, định dạng và phân phối đa kênh. Bạn review và duyệt từng loạt nội dung, chúng tôi xử lý mọi thứ sau đó.",
        },
        {
          q: "Mất bao lâu để thấy kết quả từ content marketing?",
          a: "Nội dung mạng xã hội và tài sản chiến dịch tạo ra kết quả ngay lập tức. Nội dung SEO và GEO thường mất 3 đến 6 tháng để xây dựng độ hiển thị đáng kể, tùy thuộc vào mức độ cạnh tranh và domain authority. Chúng tôi theo dõi cả tín hiệu ngắn hạn lẫn dài hạn xuyên suốt quá trình.",
        },
        {
          q: "Bạn có thể làm việc cùng đội marketing nội bộ của chúng tôi không?",
          a: "Có. Chúng tôi hoạt động như một đội content độc lập hoặc như phần mở rộng của nhân sự nội bộ. Nhiều khách hàng dùng chúng tôi để mở rộng sản lượng và xử lý production trong khi đội nội bộ tập trung vào chiến lược, giao tiếp với stakeholder và định hướng chiến dịch.",
        },
      ],
    },
    {
      slug: "shopify-development",
      no: "04",
      icon: "shopping-bag",
      name: "Shopify Growth & Optimization",
      tagline: "Biến Shopify store thành cỗ máy tăng trưởng có thể mở rộng.",
      summary:
        "Chúng tôi giúp các thương hiệu thương mại điện tử xây dựng trải nghiệm Shopify hiệu suất cao, được thiết kế để tăng tỷ lệ chuyển đổi, cải thiện giữ chân khách hàng và hỗ trợ tăng trưởng dài hạn.",
      why: "Storefront đơn thuần không tạo ra doanh thu. Chúng tôi kết hợp phát triển, tối ưu chuyển đổi và tự động hóa marketing để xây dựng một store thực sự tăng trưởng.",
      highlights: [
        "Storefront tập trung chuyển đổi cho bán lẻ, subscription và DTC",
        "CRO trên trang sản phẩm, checkout, upsell và post-purchase",
        "Tự động hóa marketing cho abandoned cart, giữ chân và LTV",
        "Hệ thống landing page cho chiến dịch quảng cáo và A/B testing",
        "Quy trình AI cho vận hành thương mại điện tử hiện đại",
      ],
      deliverables: [
        "Phát triển store và tùy chỉnh theme",
        "Audit và triển khai tối ưu tỷ lệ chuyển đổi",
        "Thiết lập flow tự động hóa marketing",
        "Hệ thống landing page riêng biệt",
        "Chiến lược tăng trưởng và báo cáo sau ra mắt",
      ],
      flows: [
        {
          name: "Storefront & theme",
          scope: "Theme tuỳ chỉnh, PDP/PLP, hệ thống thương hiệu",
          estimate: "2-4 tuần",
        },
        {
          name: "Checkout & chuyển đổi",
          scope: "Upsell, bundle, UX giỏ hàng & thanh toán",
          estimate: "1-2 tuần",
        },
        {
          name: "Subscription & giữ chân",
          scope: "Luồng Recharge / subscription + email",
          estimate: "1-3 tuần",
        },
        {
          name: "App / tích hợp riêng",
          scope: "ERP, 3PL hoặc app Shopify riêng",
          estimate: "Báo giá theo dự án",
        },
      ],
      midCta: {
        headline: "Doanh thu cao hơn từ cùng lượng traffic. Đó là mục tiêu.",
        sub: "Tối ưu chuyển đổi, tự động hóa và chiến lược tăng trưởng tích hợp trong một store.",
      },
      sectionsTitle: "Cách chúng tôi phát triển Shopify store",
      sections: [
        {
          title: "Xây dựng vì tăng trưởng, không chỉ thiết kế",
          body: [
            "Mỗi dự án Shopify bắt đầu bằng việc hiểu sản phẩm, khách hàng, mô hình kinh doanh và mục tiêu tăng trưởng của bạn. Dù bán sản phẩm vật lý, subscription, sản phẩm kỹ thuật số hay vận hành mô hình hybrid, chúng tôi tạo storefront được thiết kế để dẫn khách hàng từ khám phá đến mua hàng với ít rào cản nhất có thể.",
            "Trọng tâm luôn là cải thiện tỷ lệ chuyển đổi, giá trị đơn hàng trung bình, giữ chân khách hàng và hiệu suất tổng thể của store, không chỉ là cửa hàng trông đẹp.",
          ],
        },
        {
          title: "Tối ưu chuyển đổi từ ngày đầu",
          body: [
            "Nhiều Shopify store gặp khó khăn vì tập trung vào traffic trước khi sửa chuyển đổi. Chúng tôi tối ưu các điểm chạm quan trọng trong hành trình khách hàng: trang sản phẩm, trang danh mục, landing page, trải nghiệm checkout, ưu đãi subscription và luồng sau mua hàng.",
            "Mọi quyết định đều dựa trên hành vi khách hàng, dữ liệu chuyển đổi và best practices thương mại điện tử đã được kiểm chứng. Mục tiêu là chuyển nhiều khách truy cập hơn thành khách hàng trả tiền.",
          ],
        },
        {
          title: "Tự động hóa marketing tạo doanh thu",
          body: [
            "Các thương hiệu thương mại điện tử thành công không chỉ dựa vào paid traffic. Chúng tôi triển khai hệ thống tự động hóa giúp thu hồi abandoned cart, tăng mua lại, cải thiện giữ chân khách hàng và tối đa hóa customer lifetime value.",
            "Từ welcome sequence và browse abandonment flow đến upsell campaign và subscription retention, chúng tôi tạo ra hành trình khách hàng tự động tiếp tục tạo doanh thu lâu dài sau lần mua đầu tiên.",
          ],
        },
        {
          title: "Landing page tối ưu cho hiệu suất",
          body: [
            "Với việc ra mắt sản phẩm, chiến dịch quảng cáo trả phí, khuyến mãi theo mùa và các sáng kiến marketing tập trung chuyển đổi, chúng tôi phát triển hệ thống landing page riêng được thiết kế để hỗ trợ kiểm thử và tối ưu hóa nhanh chóng.",
            "Các trang này được cấu trúc theo nguyên tắc chuyển đổi, giúp thương hiệu cải thiện hiệu suất chiến dịch trong khi duy trì trải nghiệm khách hàng nhất quán.",
          ],
        },
        {
          title: "Kinh nghiệm đa mô hình thương mại điện tử",
          body: [
            "Đội ngũ của chúng tôi đã làm việc với các thương hiệu Shopify trong nhiều ngành và mô hình kinh doanh: bán lẻ, subscription, DTC và dropshipping. Chúng tôi đã hỗ trợ thương hiệu nhắm đến khách hàng tại Mỹ, Úc, châu Âu và Đông Nam Á.",
            "Chúng tôi giúp doanh nghiệp điều chỉnh store, hành trình khách hàng và chiến lược marketing phù hợp với từng thị trường và kỳ vọng khác nhau của người mua.",
          ],
        },
        {
          title: "Vượt ra ngoài thương mại điện tử truyền thống",
          body: [
            "Tương lai của thương mại điện tử ngày càng được thúc đẩy bởi AI. Chúng tôi giúp thương hiệu chuẩn bị cho các trải nghiệm mua sắm mới: khả năng hiển thị trên tìm kiếm AI, cơ hội agentic commerce, quy trình nội dung tự động và hệ thống quản lý store tiên tiến.",
            "Bằng cách kết hợp chuyên môn Shopify với quy trình AI hiện đại, chúng tôi giúp doanh nghiệp đón đầu thay đổi trong hành vi khách hàng và xu hướng công nghệ.",
          ],
        },
      ],
      faq: [
        {
          q: "Shopify Growth và Optimization bao gồm những gì?",
          a: "Dịch vụ bao gồm toàn bộ phạm vi xây dựng và phát triển Shopify store: phát triển, tối ưu tỷ lệ chuyển đổi, tự động hóa marketing, landing page và chiến lược tăng trưởng. Chúng tôi làm việc trên toàn bộ hành trình khách hàng, không chỉ bàn giao storefront đã xây xong.",
        },
        {
          q: "Dịch vụ này khác gì so với agency Shopify thông thường?",
          a: "Hầu hết agency Shopify tập trung vào xây dựng và ra mắt. Chúng tôi tập trung vào xây dựng và tăng trưởng. Mỗi dự án bao gồm tối ưu chuyển đổi, theo dõi hiệu suất sau ra mắt và hệ thống marketing tiếp tục tạo doanh thu sau khi store đi vào hoạt động.",
        },
        {
          q: "Bạn làm việc với những mô hình kinh doanh nào?",
          a: "Chúng tôi có kinh nghiệm với bán lẻ, subscription, DTC và dropshipping. Chúng tôi cũng đã hỗ trợ thương hiệu trên nhiều thị trường bao gồm Mỹ, Úc, châu Âu và Đông Nam Á.",
        },
        {
          q: "Bạn cải thiện tỷ lệ chuyển đổi như thế nào?",
          a: "Chúng tôi tối ưu các điểm chạm quan trọng trong hành trình khách hàng: trang sản phẩm và danh mục, landing page, trải nghiệm giỏ hàng và checkout, luồng upsell và cross-sell, và sequence sau mua hàng. Quyết định dựa trên dữ liệu hành vi và các nguyên tắc chuyển đổi đã được kiểm chứng.",
        },
        {
          q: "Bạn thiết lập những loại tự động hóa marketing nào?",
          a: "Chúng tôi triển khai tự động hóa cho abandoned cart, welcome sequence, browse abandonment flow, upsell campaign, follow-up sau mua hàng và subscription retention. Đây là những hành trình khách hàng tự động tạo doanh thu liên tục sau khi thiết lập xong.",
        },
        {
          q: "Bạn có xây dựng landing page cho quảng cáo trả phí không?",
          a: "Có. Chúng tôi phát triển hệ thống landing page riêng cho ra mắt sản phẩm, quảng cáo trả phí, khuyến mãi theo mùa và các chiến dịch tập trung chuyển đổi. Các trang này được xây để hỗ trợ kiểm thử nhanh và tách biệt với store chính.",
        },
        {
          q: "Bạn có thể giúp tối ưu store đang hoạt động không, không chỉ store mới?",
          a: "Có. Chúng tôi làm việc với store mới, migration từ nền tảng khác và Shopify store đang hoạt động cần cải thiện chuyển đổi, tự động hóa hoặc chiến lược tăng trưởng. Audit store hiện tại thường là điểm bắt đầu cho doanh nghiệp đã có sẵn.",
        },
        {
          q: "Thương mại điện tử AI có nghĩa là gì trong thực tế?",
          a: "Bao gồm việc sản phẩm xuất hiện trên các công cụ AI như ChatGPT và Perplexity, quy trình nội dung tự động giữ cho trang store và mô tả sản phẩm luôn cập nhật, và hệ thống quản lý tiên tiến giảm thiểu vận hành thủ công. Chúng tôi giúp thương hiệu chuẩn bị cho những thay đổi này từ bây giờ.",
        },
        {
          q: "Dự án Shopify mất bao lâu?",
          a: "Tùy theo phạm vi. Storefront và theme thường mất 2 đến 4 tuần. Tối ưu checkout và chuyển đổi mất 1 đến 2 tuần. Luồng subscription và giữ chân mất 1 đến 3 tuần. App hoặc tích hợp riêng được báo giá theo dự án. Chúng tôi chia dự án thành các giai đoạn rõ ràng để bạn biết timeline trước khi bắt đầu.",
        },
        {
          q: "Bạn có hỗ trợ sau khi ra mắt không?",
          a: "Có. Vai trò của chúng tôi không dừng lại ở phát triển. Chúng tôi làm việc với thương hiệu liên tục để theo dõi hiệu suất store, chạy kiểm thử tối ưu, cải thiện luồng tự động hóa và xác định cơ hội tăng trưởng khi doanh nghiệp phát triển.",
        },
      ],
    },
    {
      slug: "ai-training",
      no: "05",
      icon: "graduation-cap",
      name: "AI Training & Consulting",
      tagline: "Học AI vượt ra ngoài prompting.",
      summary:
        "Đào tạo AI thực hành cho cá nhân và tổ chức muốn vượt qua việc dùng tool cơ bản và xây dựng quy trình, hệ thống tự động hóa thực sự tạo ra năng suất lâu dài.",
      why: "Hầu hết mọi người đã thử các công cụ AI. Ít ai biết cách ứng dụng chúng vào công việc thực tế. Chúng tôi tập trung vào xây dựng workflow, không chỉ viết prompt.",
      highlights: [
        "Ứng dụng vào công việc thực: content, nghiên cứu, marketing, vận hành và nhiều hơn nữa",
        "Bao gồm thiết kế workflow, tự động hóa và AI agent, không chỉ prompting",
        "Bài tập thực hành, demo và dự án thực tế",
        "Xây dựng hệ thống tiếp tục tạo ra giá trị sau khi đào tạo kết thúc",
      ],
      deliverables: [
        "Giáo trình đào tạo tùy chỉnh",
        "Playbook workflow và tự động hóa",
        "Bản ghi và bộ tài nguyên",
        "Hỗ trợ hỏi đáp sau buổi học",
      ],
      midCta: {
        headline: "Đội của bạn có thể làm việc hiệu quả gấp đôi với AI. Hãy chứng minh điều đó.",
        sub: "Đào tạo thực hành xây dựng xung quanh workflow thực tế của bạn, không phải prompt chung chung.",
      },
      sectionsTitle: "Cách đào tạo diễn ra",
      sections: [
        {
          title: "Đào tạo thực hành cho công việc thực tế",
          body: [
            "Hầu hết các khóa học AI tập trung vào lý thuyết hoặc công cụ đơn lẻ. Cách tiếp cận của chúng tôi tập trung vào ứng dụng thực tế. Học viên học cách AI có thể hỗ trợ công việc hàng ngày trong sáng tạo nội dung, nghiên cứu, marketing, vận hành, quản lý dự án, phát triển phần mềm và các quy trình kinh doanh.",
            "Thay vì dạy một nền tảng duy nhất, chúng tôi giúp học viên hiểu cách các công cụ AI khác nhau có thể phối hợp để đạt được kết quả cụ thể. Mục tiêu là trở nên hiệu quả và có năng lực hơn trong thế giới ngày càng được thúc đẩy bởi AI.",
          ],
        },
        {
          title: "Vượt ra ngoài ChatGPT",
          body: [
            "Hệ sinh thái AI tiếp tục phát triển nhanh chóng với các nền tảng, mô hình và khả năng mới xuất hiện mỗi tháng. Chương trình đào tạo giúp học viên hiểu điểm mạnh và trường hợp sử dụng tốt nhất của các nền tảng AI hiện đại và cách kết hợp chúng thành quy trình hiệu quả.",
            "Từ tạo nội dung và nghiên cứu đến lập trình, tự động hóa, phân tích dữ liệu và quản lý kiến thức, học viên học cách chọn đúng công cụ cho đúng nhiệm vụ trong khi tránh các lỗi và sự kém hiệu quả thường gặp.",
          ],
        },
        {
          title: "Xây dựng workflow, không chỉ prompt",
          body: [
            "Prompting chỉ là bước đầu tiên. Giá trị thực sự của AI đến từ việc thiết kế workflow kết nối các công cụ, tự động hóa quy trình và giảm công việc thủ công. Chương trình đào tạo bao gồm thiết kế workflow, nguyên tắc tự động hóa, hệ thống năng suất hỗ trợ AI, tích hợp API, AI agent và browser automation.",
            "Học viên học cách nhiều công cụ có thể phối hợp để hỗ trợ nghiên cứu, sản xuất nội dung, chăm sóc khách hàng, vận hành nội bộ, báo cáo và các chức năng kinh doanh khác. Cách tiếp cận dựa trên hệ thống này tạo ra giá trị lớn hơn nhiều so với việc dùng AI như một chatbot đơn lẻ.",
          ],
        },
        {
          title: "Học qua thực hành",
          body: [
            "Cách học AI nhanh nhất là xây dựng. Mỗi chương trình đào tạo kết hợp bài tập thực hành, demo và dự án thực tế cho phép học viên áp dụng các khái niệm ngay lập tức.",
            "Thay vì rời đi với một bộ sưu tập prompt, học viên rời đi với các workflow có thể tái sử dụng, hệ thống đang hoạt động và hiểu biết sâu hơn về cách tích hợp AI vào công việc hàng ngày. Cách tiếp cận thực hành này giúp tăng tốc độ áp dụng và xây dựng sự tự tin lâu dài.",
          ],
        },
        {
          title: "Được thiết kế cho áp dụng lâu dài",
          body: [
            "Triển khai AI thành công không phải về việc học một công cụ duy nhất hay làm theo danh sách prompt. Nó đòi hỏi hiểu cách con người, workflow và công nghệ làm việc cùng nhau. Chúng tôi giúp cá nhân và tổ chức xây dựng năng lực AI lâu dài tiếp tục tạo ra giá trị sau khi đào tạo kết thúc.",
            "Dù bạn muốn cải thiện năng suất, tự động hóa workflow, tăng tốc sản xuất nội dung, tinh gọn vận hành hay xây dựng hệ thống AI, chúng tôi cung cấp kiến thức và kinh nghiệm thực hành để biến AI thành phần quan trọng trong công việc của bạn.",
          ],
        },
      ],
      faq: [
        {
          q: "Khóa đào tạo này dành cho ai?",
          a: "Được thiết kế cho cá nhân và đội nhóm muốn vượt qua việc dùng AI cơ bản và phát triển kỹ năng AI ở cấp độ workflow. Bao gồm marketer, người tạo nội dung, chuyên gia vận hành, chủ doanh nghiệp, tư vấn viên và bất kỳ ai muốn sử dụng AI hiệu quả hơn trong công việc hàng ngày.",
        },
        {
          q: "Học viên có cần kiến thức kỹ thuật không?",
          a: "Không. Khóa đào tạo được thiết kế cho cả người không có nền tảng kỹ thuật lẫn người có kinh nghiệm thực hành. Chúng tôi tập trung vào ứng dụng thực tế thay vì lập trình hay khái niệm kỹ thuật. Học viên ở mọi cấp độ, từ người mới bắt đầu đến người dùng trung cấp, đều được hưởng lợi từ cách tiếp cận workflow-first.",
        },
        {
          q: "Khóa đào tạo bao gồm những công cụ và nền tảng AI nào?",
          a: "Chúng tôi bao gồm các nền tảng AI hiện đại như ChatGPT, Claude, Gemini và nhiều hơn, cùng với công cụ tự động hóa, AI agent, browser automation, tích hợp API và hệ thống quản lý kiến thức. Trọng tâm là cách các công cụ phối hợp với nhau hơn là bất kỳ nền tảng đơn lẻ nào.",
        },
        {
          q: "Sự khác biệt giữa prompting và thiết kế workflow là gì?",
          a: "Prompting là đặt câu hỏi hoặc giao nhiệm vụ cho AI. Thiết kế workflow có nghĩa là kết nối nhiều công cụ và bước để các quy trình chạy tự động hoặc bán tự động với ít công sức thủ công nhất. Kỹ năng ở cấp độ workflow tạo ra giá trị lớn hơn nhiều so với các prompt đơn lẻ.",
        },
        {
          q: "Học viên có thể làm gì sau khi đào tạo?",
          a: "Học viên rời đi với các workflow có thể tái sử dụng, hệ thống tự động hóa đang hoạt động và hiểu rõ cách áp dụng AI vào vai trò hoặc doanh nghiệp cụ thể của họ. Đào tạo là thực hành, vì vậy học viên xây dựng kết quả thực trong buổi học thay vì chỉ tiếp thu thông tin.",
        },
        {
          q: "Khóa học có thể tùy chỉnh cho ngành hoặc đội nhóm cụ thể không?",
          a: "Có. Mỗi chương trình được điều chỉnh theo vai trò, công cụ và bối cảnh kinh doanh của học viên. Chúng tôi xây dựng giáo trình xung quanh các trường hợp sử dụng thực tế từ tổ chức thay vì dùng ví dụ chung chung.",
        },
        {
          q: "Mỗi buổi đào tạo kéo dài bao lâu?",
          a: "Các buổi tiêu chuẩn là 2 giờ. Đối với đội nhóm cần bao quát rộng hơn nhiều chủ đề hoặc công cụ, các chương trình nhiều buổi có sẵn. Liên hệ chúng tôi để thảo luận về hình thức phù hợp cho đội nhóm của bạn.",
        },
        {
          q: "Đào tạo có thể học trực tuyến hay chỉ trực tiếp?",
          a: "Đào tạo trực tiếp hiện chỉ áp dụng tại Việt Nam. Liên hệ chúng tôi để thảo luận về tình trạng khả dụng ở các địa điểm khác hoặc các hình thức học từ xa.",
        },
        {
          q: "Sau đào tạo thì sao?",
          a: "Học viên nhận được bản ghi buổi học, playbook workflow và tự động hóa, cùng quyền truy cập hỗ trợ hỏi đáp sau đào tạo. Mục tiêu là đảm bảo các khái niệm được áp dụng trong môi trường làm việc thực tế, không chỉ được hiểu về mặt lý thuyết.",
        },
        {
          q: "Làm thế nào để đặt lịch buổi học cho đội nhóm của tôi?",
          a: "Liên hệ qua trang contact hoặc đặt lịch tư vấn. Chúng tôi sẽ thảo luận về mục tiêu của đội nhóm, mức độ sử dụng AI hiện tại và điều gì sẽ tạo ra tác động thực tế nhất, sau đó xây dựng chương trình xung quanh đó.",
        },
      ],
    },
  ],

  // ── Dự án tiêu biểu dùng chung ─────────────────────────────
  caseStudiesList: [
    {
      slug: "fishbone",
      client: "Fishbone",
      monogram: "FB",
      sector: "F&B / Nhà hàng",
      year: "2024",
      summary:
        "Tái xây dựng hiện diện số và cỗ máy nội dung cho thương hiệu nhà hàng tăng trưởng nhanh.",
      challenge:
        "Fishbone có nhu cầu lớn nhưng website chậm, khó cập nhật và nội dung thiếu đều đặn.",
      solution:
        "Website headless cộng pipeline nội dung AI giúp menu, câu chuyện và khuyến mãi luôn tươi mới trên mọi kênh.",
      services: ["Phát triển Website AI", "Content Marketing AI"],
      results: [
        { metric: "2,4×", label: "Traffic organic" },
        { metric: "-58%", label: "Thời gian tải trang" },
        { metric: "4×", label: "Sản lượng nội dung" },
      ],
    },
    {
      slug: "cbl",
      client: "CBL",
      monogram: "CB",
      sector: "Dịch vụ B2B",
      year: "2024",
      summary:
        "Biến website doanh nghiệp tĩnh thành nền tảng tạo lead, tối ưu tìm kiếm.",
      challenge:
        "CBL gần như không xếp hạng từ khoá nào và phụ thuộc hoàn toàn vào giới thiệu để có khách mới.",
      solution:
        "Đại tu SEO kỹ thuật, bản đồ nội dung theo chủ đề và nhịp xuất bản hỗ trợ bởi AI.",
      services: ["SEO & Tìm kiếm AI", "Phát triển Website AI"],
      results: [
        { metric: "Top 3", label: "Từ khoá cốt lõi" },
        { metric: "3,1×", label: "Lead chất lượng" },
        { metric: "+180%", label: "Lượt hiển thị tìm kiếm" },
      ],
    },
    {
      slug: "beauty-by-hien",
      client: "Beauty by Hien",
      monogram: "BH",
      sector: "Làm đẹp / TMĐT",
      year: "2023",
      summary:
        "Thiết kế và dựng storefront Shopify với luồng chuyển đổi mở rộng được.",
      challenge:
        "Thương hiệu làm đẹp đang lớn nhưng kẹt ở template chung chung với checkout rò rỉ khách.",
      solution:
        "Theme Shopify tuỳ chỉnh, tối ưu checkout và luồng upsell, cùng tự động hoá email giữ chân.",
      services: ["Phát triển Shopify", "Content Marketing AI"],
      results: [
        { metric: "+46%", label: "Tỷ lệ chuyển đổi" },
        { metric: "+32%", label: "Giá trị đơn trung bình" },
        { metric: "2,2×", label: "Khách quay lại" },
      ],
    },
  ],

  // ── TRANG CHỦ ──────────────────────────────────────────────
  home: {
    hero: {
      eyebrow: "AI · SEO · Web · Tự động hoá",
      titleLead: "Digital marketing",
      titleEmphasis: "thực chiến,",
      titleTail: "kết quả thực tế.",
      subtitle:
        "AILABS thiết kế website, chiến lược tìm kiếm và hệ thống nội dung chiến thắng trong kỷ nguyên AI, được con người tìm thấy và máy móc gợi ý.",
      markets: "Được tin dùng bởi doanh nghiệp tại Mỹ, Úc, Thái Lan, Việt Nam và Thuỵ Điển.",
      primaryCta: "Bắt đầu dự án",
      secondaryCta: "Xem dự án của chúng tôi",
    },
    stats: [
      { value: "10+", label: "Năm kinh nghiệm" },
      { value: "50+", label: "Dự án đã triển khai" },
      { value: "3,2×", label: "Tăng traffic trung bình" },
      { value: "Global", label: "Cung cấp toàn cầu" },
    ],
    marquee: [
      "Tối ưu Tìm kiếm AI",
      "Website chuyển đổi",
      "Tự động hoá nội dung",
      "Thương mại Shopify",
      "Tối ưu Công cụ Sinh",
      "Đào tạo đội ngũ",
    ],
    servicesSection: {
      eyebrow: "Chúng tôi làm gì",
      title: "Dịch vụ thiết kế cho kỷ nguyên AI",
      desc: "Năm dịch vụ tập trung đưa bạn từ vô hình đến tất yếu.",
    },
    process: {
      eyebrow: "Cách chúng tôi làm việc",
      title: "Lộ trình rõ ràng từ ý tưởng đến tác động",
      steps: [
        {
          no: "01",
          title: "Khám phá",
          desc: "Chúng tôi audit phễu, hiện diện tìm kiếm và nội dung, tìm ra những thắng lợi nhanh nhất.",
        },
        {
          no: "02",
          title: "Thiết kế",
          desc: "Chúng tôi kiến tạo website, chiến lược tìm kiếm và quy trình AI quanh mục tiêu thật.",
        },
        {
          no: "03",
          title: "Xây dựng",
          desc: "Chúng tôi triển khai nhanh, dễ tiếp cận, sẵn sàng tìm kiếm với đo lường tích hợp.",
        },
        {
          no: "04",
          title: "Tăng trưởng",
          desc: "Chúng tôi đo lường, tối ưu và cộng dồn kết quả qua từng tháng.",
        },
      ],
    },
    caseStudiesSection: {
      eyebrow: "Dự án chọn lọc",
      title: "Những thương hiệu chúng tôi đã giúp tăng trưởng",
      desc: "Từ nhà hàng đến AI SaaS, kết quả đo được, không phải chỉ số phù phiếm.",
    },
    trustedBy: "Được tin dùng bởi các đội ngũ tăng trưởng",
    testimonials: {
      title: "Khách hàng nói gì",
      desc: "Kết quả thật, qua lời của họ.",
      items: [
        {
          quote:
            "AILABS dựng lại website và cỗ máy nội dung cho chúng tôi. Traffic organic tăng hơn gấp đôi và cuối cùng chúng tôi xuất bản đều đặn mỗi tuần.",
          name: "Trần Linh",
          role: "Nhà sáng lập, Fishbone",
        },
        {
          quote:
            "Họ biến chúng tôi thành câu trả lời ngay trong các công cụ AI mà khách hàng đang dùng. Lượt yêu cầu demo tăng vọt chỉ sau vài tuần đầu.",
          name: "Phạm David",
          role: "Trưởng phòng Tăng trưởng, capq.ai",
        },
        {
          quote:
            "Cửa hàng Shopify của chúng tôi chuyển đổi tốt hơn hẳn và khách quay lại đều. Đội ngũ thực sự hiểu thương mại điện tử.",
          name: "Nguyễn Hiền",
          role: "Nhà sáng lập, Beauty by Hien",
        },
      ],
    },
    ctaBand: {
      title: "Cùng xây thứ đáng được tìm thấy.",
      desc: "Hãy cho chúng tôi biết bạn muốn tăng trưởng ở đâu. Chúng tôi sẽ gửi lại kế hoạch rõ ràng, không áp lực.",
      button: "Liên hệ ngay",
    },
  },

  // ── DỊCH VỤ (trang chính) ──────────────────────────────────
  services: {
    eyebrow: "Dịch vụ",
    title: "Mọi thứ bạn cần để tăng trưởng trong kỷ nguyên AI",
    desc: "Từ website đến khả năng hiển thị tìm kiếm đến cỗ máy nội dung, và cả đào tạo để tự vận hành tất cả.",
    whyTitle: "Tại sao",
    deliverablesTitle: "Bạn nhận được gì",
    flowsTitle: "Flow & báo giá",
    pricingTitle: "Học phí",
    relatedTitle: "Dịch vụ khác",
  },

  // ── DỰ ÁN (trang chính) ────────────────────────────────────
  caseStudies: {
    eyebrow: "Dự án tiêu biểu",
    title: "Những dự án xứng đáng",
    desc: "Cách chúng tôi biến AI, tìm kiếm và thiết kế thành tăng trưởng đo được.",
    challengeTitle: "Thách thức",
    solutionTitle: "Chúng tôi đã làm gì",
    resultsTitle: "Kết quả",
    servicesTitle: "Dịch vụ",
    nextLabel: "Dự án tiếp theo",
  },

  // ── BÁO GIÁ ────────────────────────────────────────────────
  pricing: {
    eyebrow: "Báo giá",
    title: "Phạm vi minh bạch. Đề xuất riêng.",
    desc: "Mỗi thương hiệu mỗi khác, nên chúng tôi không bán gói cố định có sẵn. Đây là mức khởi điểm thường thấy, đặt lịch để nhận đề xuất riêng.",
    note: "Giá hiển thị là mức khởi điểm. Phạm vi và chi phí cuối cùng được xác nhận trong đề xuất.",
    startingAt: "Từ",
    tiers: [
      {
        name: "Website",
        startingAt: "Liên hệ",
        forWho: "Thương hiệu cần website nhanh, ưu tiên chuyển đổi, sẵn sàng AI.",
        includes: [
          "UX, hệ thống thiết kế & dựng web",
          "Nội dung hỗ trợ bởi AI",
          "Sẵn sàng tìm kiếm & schema",
          "Thiết lập phân tích & đo lường",
        ],
      },
      {
        name: "Tìm kiếm & Nội dung",
        startingAt: "Liên hệ",
        forWho: "Đội ngũ muốn lên top Google và được AI trích dẫn.",
        includes: [
          "SEO kỹ thuật + GEO/AEO",
          "Lộ trình & sản xuất nội dung",
          "Quy trình tự động hoá",
          "Báo cáo hằng tháng",
        ],
        featured: true,
      },
      {
        name: "Thương mại",
        startingAt: "Liên hệ",
        forWho: "Thương hiệu Shopify mở rộng doanh thu và giữ chân.",
        includes: [
          "Phạm vi & báo giá theo từng flow",
          "Theme & checkout tuỳ chỉnh",
          "Luồng upsell & subscription",
          "Tối ưu CRO & tốc độ",
        ],
      },
    ],
    training: {
      eyebrow: "Nâng năng lực đội ngũ",
      title: "Đào tạo AI cho đội marketing của bạn",
      desc: "Buổi thực hành 2 giờ xây quanh chính công cụ của bạn, để đội ngũ làm việc cùng AI ngay hôm sau.",
      price: "700.000₫",
      unit: "mỗi người",
      duration: "buổi 2 giờ",
      note: "Đào tạo AI trực tiếp chỉ áp dụng tại Việt Nam.",
      cta: "Đặt buổi học",
    },
    demo: {
      eyebrow: "Xem trực tiếp",
      title: "Demo & đo lường, trước khi bạn cam kết",
      desc: "Chúng tôi sẽ trình diễn demo hoạt động thật và thiết lập đo lường hiệu suất minh bạch, để bạn thấy tác động trước khi tăng ngân sách.",
      points: [
        "Demo trực tiếp tuỳ chỉnh theo thương hiệu",
        "Dashboard đo lường chuyển đổi & tìm kiếm",
        "Phạm vi rõ ràng theo cột mốc",
      ],
    },
    faq: {
      title: "Câu hỏi thường gặp",
      items: [
        {
          q: "Vì sao không niêm yết giá cố định?",
          a: "Vì báo giá trung thực phụ thuộc vào phạm vi. Chúng tôi phân tích mỗi dự án và gửi đề xuất rõ ràng, không gói độn.",
        },
        {
          q: "Báo giá hoạt động thế nào?",
          a: "Với Shopify và web, chúng tôi chia dự án thành các flow, mỗi flow có phạm vi và báo giá riêng, để bạn chỉ trả cho những gì cần.",
        },
        {
          q: "Có dịch vụ retainer dài hạn không?",
          a: "Có. SEO, nội dung và tự động hoá hiệu quả nhất khi triển khai hằng tháng và cộng dồn theo thời gian.",
        },
        {
          q: "Đào tạo có thật sự chỉ ở Việt Nam?",
          a: "Đào tạo trực tiếp cho đội ngũ hiện chỉ áp dụng tại Việt Nam với 700.000₫ mỗi người cho buổi 2 giờ.",
        },
      ],
    },
  },

  // ── VỀ CHÚNG TÔI ───────────────────────────────────────────
  about: {
    eyebrow: "Về AILABS",
    title: "Một thập kỷ xây những thứ được tìm thấy.",
    lead: "AILABS là đội ngũ nhỏ, giàu kinh nghiệm với hơn 10 năm ở giao điểm của thiết kế, tìm kiếm và tự động hoá, nay hướng thẳng vào kỷ nguyên AI.",
    story: [
      "Chúng tôi xây website từ rất lâu trước khi \"AI\" xuất hiện trên mọi slide. Thập kỷ đó dạy chúng tôi điều thật sự tạo khác biệt: tốc độ, sự rõ ràng, cấu trúc và nội dung mà con người (và giờ là máy móc) tin tưởng.",
      "Hôm nay chúng tôi kết hợp tay nghề đó với AI, không phải chiêu trò, mà là đòn bẩy. Chúng tôi giúp thương hiệu được khám phá trên Google và trong các công cụ trả lời AI, rồi xây hệ thống giữ vững vị trí đó.",
      "Chúng tôi làm tinh gọn và giàu kinh nghiệm. Không qua trung gian account, bạn làm việc trực tiếp với người thực thi.",
    ],
    statsTitle: "Bằng những con số",
    stats: [
      { value: "10+", label: "Năm kinh nghiệm" },
      { value: "50+", label: "Dự án đã bàn giao" },
      { value: "Global", label: "Cung cấp toàn cầu" },
      { value: "100%", label: "Đội ngũ senior" },
    ],
    valuesTitle: "Cách chúng tôi vận hành",
    values: [
      {
        title: "Kết quả hơn sản phẩm",
        desc: "Chúng tôi đo thành công bằng traffic, lead và doanh thu, không phải số lượng deliverable.",
      },
      {
        title: "AI là đòn bẩy",
        desc: "Chúng tôi dùng AI để làm nhiều hơn, nhanh hơn, luôn có biên tập viên là người chịu trách nhiệm chất lượng.",
      },
      {
        title: "Rõ ràng triệt để",
        desc: "Phạm vi rõ, báo giá rõ, báo cáo rõ. Bạn luôn biết mọi thứ đang ở đâu.",
      },
      {
        title: "Sinh ra để được tìm thấy",
        desc: "Mọi thứ chúng tôi làm đều được thiết kế để được khám phá, bởi con người và bởi AI.",
      },
    ],
    ctaTitle: "Muốn đội ngũ senior cho dự án của bạn?",
    ctaDesc: "Hãy cho chúng tôi biết bạn đang xây gì. Chúng tôi sẽ nói cách giúp nó tăng trưởng.",
  },

  // ── BLOG ───────────────────────────────────────────────────
  blog: {
    eyebrow: "Blog",
    title: "Ghi chép về AI, tìm kiếm & web hiện đại",
    desc: "Tư duy thực tiễn về việc được tìm thấy và tăng trưởng trong kỷ nguyên AI.",
    allCategory: "Tất cả",
    categories: [
      { slug: "ai", name: "AI" },
      { slug: "seo", name: "SEO" },
      { slug: "website", name: "Website" },
    ],
    readTimeSuffix: "phút đọc",
    byLabel: "Bởi",
    relatedTitle: "Đọc tiếp",
    posts: [
      {
        slug: "geo-vs-seo",
        category: "seo",
        title: "GEO và SEO: tối ưu cho công cụ trả lời AI",
        excerpt:
          "Tìm kiếm đang tách thành liên kết xanh và câu trả lời AI. Đây là cách thắng cả hai mà không nhân đôi công việc.",
        date: "2024-11-18",
        readTime: 7,
        author: "AILABS",
        body: [
          "Suốt hai mươi năm, SEO chỉ có một nghĩa: đưa một trang lên các liên kết xanh của Google. Thế giới đó chưa biến mất, nhưng nay phải chia sân khấu với các công cụ trả lời AI như ChatGPT, Perplexity, Gemini và AI Overviews của Google.",
          "Tối ưu Công cụ Sinh (GEO), đôi khi gọi là Tối ưu Công cụ Trả lời (AEO), là việc trở thành nguồn mà AI trích dẫn khi trả lời câu hỏi. Tin tốt: phần lớn nền tảng trùng với SEO kỹ thuật vững chắc.",
          "Bắt đầu từ sự rõ ràng và cấu trúc. Mô hình AI ưu ái nội dung trả lời thẳng thắn, dùng heading sạch và chứng minh bằng số liệu cụ thể. Thêm dữ liệu có cấu trúc, xây thẩm quyền chủ đề và biến thương hiệu thành một thực thể được nhận diện khắp web.",
          "Thương hiệu thắng hôm nay không chọn giữa SEO và GEO. Họ xây một hệ thống nội dung phục vụ cả hai, và cộng dồn lợi thế qua từng tháng.",
        ],
      },
      {
        slug: "ai-content-pipeline",
        category: "ai",
        title: "Xây pipeline nội dung tự vận hành",
        excerpt:
          "Cách biến một ý tưởng thành cả tháng nội dung sẵn sàng cho mọi kênh bằng AI, mà vẫn giữ chất lượng cao.",
        date: "2024-10-29",
        readTime: 6,
        author: "AILABS",
        body: [
          "Đều đặn là phần khó nhất của nội dung. Hầu hết đội ngũ không thiếu sáng tạo, họ thiếu vận hành. AI sửa được phần vận hành, nếu bạn thiết kế quy trình đúng.",
          "Một pipeline tốt có bốn giai đoạn: nghiên cứu, viết, duyệt, phân phối. AI tăng tốc nghiên cứu và viết; biên tập viên là người duyệt; tự động hoá lo phân phối và tái sử dụng đa kênh.",
          "Bí quyết nằm ở rào chắn. Giọng thương hiệu được tinh chỉnh, checklist biên tập rõ ràng và cổng duyệt giữ đầu ra đúng nhận diện. Thiếu chúng, tự động hoá chỉ nhân rộng sự tầm thường.",
          "Làm tốt, một ý tưởng mạnh trở thành một bài blog, năm bài social, một email và một video ngắn, được con người duyệt, ra mắt đúng lịch, mỗi tuần.",
        ],
      },
      {
        slug: "core-web-vitals-2025",
        category: "website",
        title: "Core Web Vitals 2025: điều gì vẫn quan trọng",
        excerpt:
          "Hướng dẫn thực dụng về hiệu suất thật sự ảnh hưởng đến thứ hạng và chuyển đổi.",
        date: "2024-09-12",
        readTime: 5,
        author: "AILABS",
        body: [
          "Hiệu suất không còn là điều nên có. Website chậm mất thứ hạng và doanh thu, và bot AI, như người dùng, ưu ái trang tải nhanh và hiển thị sạch.",
          "Tập trung vào các chỉ số tạo khác biệt: Largest Contentful Paint, Interaction to Next Paint và Cumulative Layout Shift. Phần lớn cải thiện thực tế đến từ hình ảnh, font và script bên thứ ba.",
          "Một stack headless, hiện đại (chúng tôi dựng trên Next.js) giúp đạt các mục tiêu này dễ hơn nhiều, nhưng kiến trúc thôi chưa đủ. Kỷ luật với tài nguyên và script mới giữ điểm số xanh theo thời gian.",
          "Hãy xem hiệu suất là ngân sách liên tục, không phải sửa một lần, và nó âm thầm cải thiện mọi thứ phía sau: SEO, chuyển đổi và niềm tin người dùng.",
        ],
      },
      {
        slug: "shopify-conversion-flows",
        category: "website",
        title: "Những flow Shopify thật sự tăng doanh thu",
        excerpt:
          "Nên tập trung vào đâu trong một dự án Shopify để có lợi nhuận cao nhất trên mỗi giờ.",
        date: "2024-08-20",
        readTime: 6,
        author: "AILABS",
        body: [
          "Không phải dự án Shopify nào cũng cần mọi thứ. Công việc ROI cao nhất thường nằm ở vài flow: trang sản phẩm, giỏ hàng, checkout và giữ chân sau mua.",
          "Chúng tôi báo giá từng flow riêng để bạn ưu tiên. Một PDP nhanh, rõ hơn và checkout mượt thường hoàn vốn cả dự án trước khi các tính năng cầu kỳ kịp được xây.",
          "Upsell và subscription nâng giá trị đơn trung bình và giá trị vòng đời, nhưng chỉ khi luồng mua cốt lõi đã sạch. Thứ tự rất quan trọng.",
          "Báo giá theo flow giữ ngân sách trung thực và cho phép chúng tôi tạo giá trị trong vài tuần, không phải vài quý.",
        ],
      },
      {
        slug: "prompting-for-marketers",
        category: "ai",
        title: "Prompt cho marketer: từ prompt đến hệ thống",
        excerpt:
          "Đừng viết prompt rời rạc. Hãy xây hệ thống tái sử dụng mà cả đội có thể vận hành.",
        date: "2024-07-08",
        readTime: 5,
        author: "AILABS",
        body: [
          "Hầu hết marketer dùng AI như máy bán nước: gõ yêu cầu, lấy kết quả, đi tiếp. Cách đó hợp với một tác vụ, nhưng không mở rộng được cho cả đội.",
          "Bước nhảy là từ prompt đến hệ thống: quy trình được tài liệu hoá, tái sử dụng, với đầu vào rõ ràng, bối cảnh thương hiệu và kiểm tra chất lượng. Đó là điều chúng tôi dạy trong các buổi đào tạo.",
          "Khi một quy trình được ghi lại thành hệ thống, bất kỳ ai trong đội cũng vận hành nhất quán, và đầu ra tốt lên mỗi lần bạn tinh chỉnh template.",
          "Hai giờ tập trung thường đủ để đưa một đội marketing từ tò mò đến thật sự làm việc hiệu quả với AI.",
        ],
      },
    ],
  },

  // ── LIÊN HỆ ────────────────────────────────────────────────
  contact: {
    eyebrow: "Liên hệ",
    title: "Cùng trò chuyện về tăng trưởng.",
    desc: "Hãy kể cho chúng tôi về thương hiệu và mục tiêu của bạn. Chúng tôi sẽ phản hồi trong một ngày làm việc với bước tiếp theo rõ ràng.",
    email: "contact@gmail.com",
    emailLabel: "Email cho chúng tôi",
    form: {
      name: "Tên của bạn",
      namePlaceholder: "Nguyễn Văn A",
      email: "Email",
      emailPlaceholder: "ban@congty.com",
      phone: "Số điện thoại",
      phonePlaceholder: "+84 ...",
      company: "Công ty",
      companyPlaceholder: "Tên công ty",
      jobTitle: "Chức vụ",
      jobTitlePlaceholder: "Trưởng phòng Marketing",
      linkedin: "LinkedIn",
      linkedinPlaceholder: "https://linkedin.com/in/...",
      url: "Website",
      urlPlaceholder: "https://website-cua-ban.com",
      service: "Bạn cần gì?",
      servicePlaceholder: "Chọn một dịch vụ",
      message: "Chi tiết dự án",
      messagePlaceholder: "Hãy cho chúng tôi biết mục tiêu, thời gian và ngân sách…",
      submit: "Gửi tin nhắn",
      success: "Cảm ơn bạn! Chúng tôi sẽ liên hệ trong một ngày làm việc.",
    },
    infoTitle: "Cách khác để liên hệ",
    responseNote: "Chúng tôi thường phản hồi trong vòng một ngày làm việc.",
  },

  // ── AUDIT POPUP ────────────────────────────────────────────
  audit: {
    title: "Nhận audit website miễn phí",
    desc: "Chia sẻ vài thông tin, chúng tôi sẽ gửi lại bản audit riêng trong vòng hai ngày làm việc.",
    name: "Họ và tên",
    namePlaceholder: "Nguyễn Văn A",
    phone: "Số điện thoại",
    phonePlaceholder: "+84 ...",
    email: "Email",
    emailPlaceholder: "ban@congty.com",
    company: "Công ty",
    companyPlaceholder: "Tên công ty",
    jobTitle: "Chức danh",
    jobTitlePlaceholder: "Trưởng phòng Marketing",
    linkedin: "LinkedIn",
    linkedinPlaceholder: "https://linkedin.com/in/...",
    url: "URL website",
    urlPlaceholder: "https://websitecuaban.com",
    service: "Dịch vụ bạn quan tâm",
    servicePlaceholder: "Chọn một dịch vụ",
    note: "Ghi chú",
    notePlaceholder: "Bạn muốn chúng tôi xem giúp điều gì?",
    submit: "Yêu cầu audit",
    success: "Cảm ơn bạn! Yêu cầu audit đã được ghi nhận. Chúng tôi sẽ liên hệ trong vòng hai ngày làm việc.",
  },

  // ── BOOK A CALL POPUP ──────────────────────────────────────
  booking: {
    title: "Đặt lịch tư vấn",
    desc: "Chọn ngày phù hợp với bạn. Chúng tôi sẽ xác nhận giờ cụ thể qua email.",
    dateLabel: "Chọn ngày",
    timeLabel: "Khung giờ mong muốn",
    selectedLabel: "Đã chọn",
    confirm: "Yêu cầu khung giờ này",
    noDate: "Vui lòng chọn ngày trước.",
    detailsDesc: "Gần xong rồi. Cho chúng tôi biết bạn là ai để xác nhận qua email.",
    name: "Họ và tên",
    namePlaceholder: "Nguyễn Văn A",
    email: "Email",
    emailPlaceholder: "ban@congty.com",
    phone: "Số điện thoại",
    phonePlaceholder: "+84 ...",
    company: "Công ty",
    companyPlaceholder: "Tên công ty",
    jobTitle: "Chức danh",
    jobTitlePlaceholder: "Trưởng phòng Marketing",
    linkedin: "Trang LinkedIn",
    linkedinPlaceholder: "https://linkedin.com/in/...",
    url: "Website",
    urlPlaceholder: "https://website-cua-ban.com",
    service: "Dịch vụ quan tâm",
    servicePlaceholder: "Chọn một dịch vụ",
    note: "Ghi chú",
    notePlaceholder: "Bạn muốn trao đổi về điều gì?",
    back: "Quay lại",
    book: "Xác nhận đặt lịch",
    success: "Cảm ơn bạn! Chúng tôi sẽ email xác nhận lịch tư vấn sớm.",
  },

  // ── FOOTER ─────────────────────────────────────────────────
  footer: {
    tagline:
      "Studio tăng trưởng thuần AI. Chúng tôi thiết kế website, chiến lược tìm kiếm và hệ thống nội dung cho thương hiệu muốn được tìm thấy.",
    servicesTitle: "Dịch vụ",
    companyTitle: "Công ty",
    getInTouch: "Liên hệ",
    rights: "Bảo lưu mọi quyền.",
    builtWith: "Thiết kế & phát triển bởi AILABS.",
  },
}
