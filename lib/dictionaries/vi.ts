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
    },
    {
      slug: "ai-content-marketing",
      no: "03",
      icon: "sparkles",
      name: "Content & Automation",
      tagline: "Cỗ máy nội dung tự vận hành.",
      summary:
        "Quy trình nội dung tự động, đúng nhận diện thương hiệu, nghiên cứu, viết, tái sử dụng và phân phối, với biên tập viên là con người dẫn dắt.",
      why: "Xuất bản đều đặn là bài toán vận hành. Chúng tôi thiết kế quy trình AI biến một ý tưởng thành cả tháng nội dung sẵn sàng cho mọi kênh, được con người duyệt và ra mắt đúng lịch.",
      highlights: [
        "Quy trình AI tuỳ chỉnh (n8n, Make, pipeline GPT)",
        "Tinh chỉnh giọng thương hiệu & rào chắn biên tập",
        "Tái sử dụng đa kênh (blog to social to email)",
        "Vòng lặp hiệu suất nuôi sprint kế tiếp",
      ],
      deliverables: [
        "Chiến lược nội dung & bộ kit giọng thương hiệu",
        "Pipeline sản xuất tự động",
        "Lịch biên tập & luồng duyệt",
        "Phân tích & tối ưu hằng tháng",
      ],
    },
    {
      slug: "shopify-development",
      no: "04",
      icon: "shopping-bag",
      name: "Shopify Store Development & Growth",
      tagline: "Cửa hàng sinh ra để bán, báo giá theo từng flow.",
      summary:
        "Theme, app và luồng chuyển đổi Shopify tuỳ chỉnh, mỗi hạng mục được phân tích và báo giá minh bạch trước khi bắt đầu.",
      why: "Chúng tôi chia dự án Shopify thành các flow rõ ràng để bạn biết chính xác mỗi phần tốn bao nhiêu và mang lại gì, không hoá đơn bất ngờ, không phình phạm vi.",
      highlights: [
        "Theme tuỳ chỉnh & storefront headless",
        "Luồng checkout, subscription & upsell",
        "Tích hợp app & app Shopify riêng",
        "Tối ưu CRO, tốc độ và phân tích",
      ],
      deliverables: [
        "Tài liệu phạm vi & báo giá theo từng flow",
        "Thiết kế + dựng cho mỗi flow",
        "QA, ra mắt & đào tạo người bán",
        "Sprint tối ưu sau ra mắt",
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
    },
    {
      slug: "ai-training",
      no: "05",
      icon: "graduation-cap",
      name: "AI Consulting & Training",
      tagline: "Nâng cấp đội ngũ để làm việc cùng AI.",
      summary:
        "Workshop AI thực hành cho đội marketing in-house, xây dựng quanh chính công cụ, kênh và quy trình thực tế của bạn.",
      why: "Công cụ không thay đổi đội ngũ, thói quen mới làm được. Trong hai giờ tập trung, marketer của bạn sẽ tạo ra prompt, quy trình và sản phẩm thật để dùng ngay sáng hôm sau.",
      highlights: [
        "Buổi thực hành trực tiếp 2 giờ",
        "Tuỳ chỉnh theo kênh & công cụ của bạn",
        "Thư viện prompt & quy trình tái sử dụng",
        "Chỉ áp dụng tại Việt Nam",
      ],
      deliverables: [
        "Giáo trình workshop tuỳ chỉnh",
        "Playbook prompt & tự động hoá",
        "Bản ghi & bộ tài nguyên",
        "Hỗ trợ hỏi đáp sau buổi học",
      ],
      pricing: {
        price: "700.000₫",
        unit: "mỗi người",
        duration: "buổi 2 giờ",
        note: "Đào tạo AI trực tiếp chỉ áp dụng tại Việt Nam.",
      },
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
      titleLead: "Chúng tôi xây",
      titleEmphasis: "cỗ máy tăng trưởng",
      titleTail: "cho thương hiệu ưu tiên AI.",
      subtitle:
        "AILABS thiết kế website, chiến lược tìm kiếm và hệ thống nội dung chiến thắng trong kỷ nguyên AI, được con người tìm thấy và máy móc gợi ý.",
      markets: "Phục vụ khách hàng tại Mỹ, Úc, Thái Lan, Việt Nam và Thuỵ Điển.",
      primaryCta: "Bắt đầu dự án",
      secondaryCta: "Xem dự án của chúng tôi",
    },
    stats: [
      { value: "10+", label: "Năm kinh nghiệm" },
      { value: "50+", label: "Dự án đã triển khai" },
      { value: "3,2×", label: "Tăng traffic trung bình" },
      { value: "5", label: "Dịch vụ cốt lõi" },
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
      { value: "5", label: "Dịch vụ cốt lõi" },
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
      company: "Công ty",
      companyPlaceholder: "Tên công ty",
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
