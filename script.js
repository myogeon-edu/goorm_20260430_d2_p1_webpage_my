const THEME_STORAGE_KEY = "mowrix_theme";
const LANG_STORAGE_KEY = "mowrix_lang";
const DEFAULT_LANG = "ko";
const MAIL_TO = "admin@mowrix.com";

const I18N = {
  ko: {
    nav_services: "서비스",
    nav_process: "프로세스",
    nav_cases: "사례",
    nav_pricing: "요금",
    nav_faq: "FAQ",
    nav_consult: "무료 상담 신청",

    hero_eyebrow: "AI 에이전트 네이티브 에이전시",
    hero_title: "AI 에이전트로,<br>아이디어를 앱으로.",
    hero_lead: "mowrix는 입문자도 이해할 수 있는 프로세스로 현대적인 애플리케이션을 빠르게 빌드합니다.",
    hero_start: "프로젝트 시작하기",
    hero_view_process: "작업 방식 보기",

    flow_step1: "문제정의",
    flow_step2: "에이전트 설계",
    flow_step3: "빌드/검증",
    flow_step4: "배포",

    services_heading: "핵심 제안 가치",
    value_fast_mvp_title: "빠른 MVP",
    value_fast_mvp_desc: "주 단위로 검증 가능한 결과물을 만들어 비즈니스 가설을 빠르게 테스트합니다.",
    value_agent_collab_title: "에이전트 협업",
    value_agent_collab_desc: "기획, 개발, 테스트 반복 과정을 AI 에이전트 중심으로 자동화해 생산성을 높입니다.",
    value_sustainable_title: "지속 가능한 코드",
    value_sustainable_desc: "유지보수가 쉬운 구조로 설계해 향후 인수인계와 확장 비용을 줄입니다.",
    value_data_improvement_title: "데이터 기반 개선",
    value_data_improvement_desc: "사용자 반응과 이벤트 데이터를 바탕으로 제품을 반복 개선합니다.",

    process_heading: "작동 방식",
    process_step1_title: "문제 정의",
    process_step1_desc: "목표 사용자, 핵심 기능, 성공 지표를 명확히 정리합니다.",
    process_step1_output: "산출물: 요구사항 요약서, 우선순위 백로그",
    process_step2_title: "에이전트 설계",
    process_step2_desc: "역할별 AI 에이전트 흐름을 설계해 반복 가능한 빌드 체계를 구성합니다.",
    process_step2_output: "산출물: 에이전트 워크플로우, 작업 규칙 세트",
    process_step3_title: "빌드/검증",
    process_step3_desc: "핵심 기능을 구현하고 테스트하며 사용자 피드백 루프를 돌립니다.",
    process_step3_output: "산출물: 동작 가능한 MVP, 테스트 리포트",
    process_step4_title: "배포/개선",
    process_step4_desc: "실서비스 배포 후 데이터 기반으로 성능과 UX를 지속적으로 개선합니다.",
    process_step4_output: "산출물: 배포 체크리스트, 개선 로드맵",

    cases_heading: "성과 미리보기",
    case1_title: "교육 플랫폼 MVP",
    case1_desc: "3주 내 베타 오픈, 초기 사용자 1,200명 확보",
    case2_title: "SaaS 온보딩 자동화",
    case2_desc: "전환율 22% 개선, 운영 공수 35% 절감",
    case3_title: "내부 업무 도구 구축",
    case3_desc: "반복 업무 리드타임 40% 단축",

    pricing_heading: "요금 스냅샷",
    pricing_starter_name: "Starter",
    pricing_starter_price: "월 190만원~",
    pricing_starter_feature1: "랜딩/PoC 구축",
    pricing_starter_feature2: "주간 진행 리포트",
    pricing_starter_feature3: "기본 분석 이벤트",
    pricing_growth_name: "Growth",
    pricing_growth_price: "월 390만원~",
    pricing_growth_feature1: "MVP 설계 및 개발",
    pricing_growth_feature2: "에이전트 워크플로우 구축",
    pricing_growth_feature3: "사용성 개선 반복",
    pricing_partner_name: "Partner",
    pricing_partner_price: "문의",
    pricing_partner_feature1: "장기 제품 고도화",
    pricing_partner_feature2: "팀 협업 자동화",
    pricing_partner_feature3: "맞춤형 운영 전략",

    faq_heading: "자주 묻는 질문",
    faq_q1: "개발 지식이 거의 없어도 시작할 수 있나요?",
    faq_a1: "가능합니다. 비개발자도 이해할 수 있게 요구사항을 정리하고, 의사결정 포인트를 쉽게 설명합니다.",
    faq_q2: "프로젝트 기간은 얼마나 걸리나요?",
    faq_a2: "범위에 따라 다르지만 보통 2~6주 내 초기 MVP를 확인할 수 있도록 설계합니다.",
    faq_q3: "AI 에이전트는 어떤 방식으로 활용되나요?",
    faq_a3: "기획 정리, 코드 초안, 테스트 자동화, 문서화 등 반복 업무를 중심으로 역할 기반으로 활용합니다.",
    faq_q4: "완성 후 유지보수도 지원하나요?",
    faq_a4: "지원합니다. 운영 지표 모니터링, 기능 개선, 성능 최적화까지 연속적으로 대응합니다.",

    contact_heading: "아이디어를 실제 앱으로 전환할 준비가 되셨나요?",
    contact_subtitle: "입문자도 이해할 수 있는 언어로, mowrix가 첫 빌드부터 출시까지 함께합니다.",
    contact_name_label: "이름",
    contact_email_label: "이메일",
    contact_message_label: "문의 내용",
    contact_name_placeholder: "홍길동",
    contact_email_placeholder: "name@example.com",
    contact_message_placeholder: "원하시는 앱 기능과 일정, 참고 자료를 간단히 적어주세요.",
    contact_submit: "문의 보내기",
    contact_hint: "작성한 내용을 바탕으로 메일 앱에서 전송됩니다.",
    contact_sending: "메일 앱을 열었습니다. 전송을 완료해주세요.",
    contact_subject: "[mowrix] 문의 요청",

    footer_text: "© 2026 mowrix. All rights reserved.",

    theme_show_dark: "다크",
    theme_show_light: "라이트",
  },

  en: {
    nav_services: "Services",
    nav_process: "Process",
    nav_cases: "Cases",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",
    nav_consult: "Free consultation",

    hero_eyebrow: "AI Agent Native Agency",
    hero_title: "Build with AI Agents,<br>turn ideas into apps.",
    hero_lead: "mowrix helps beginners understand a clear process to build modern applications fast.",
    hero_start: "Start a project",
    hero_view_process: "See how we work",

    flow_step1: "Problem definition",
    flow_step2: "Agent design",
    flow_step3: "Build & validate",
    flow_step4: "Deploy",

    services_heading: "Core Value Proposition",
    value_fast_mvp_title: "Fast MVP",
    value_fast_mvp_desc: "Ship weekly deliverables to quickly test your business hypothesis.",
    value_agent_collab_title: "Agent Collaboration",
    value_agent_collab_desc: "Automate repetitive planning-to-testing loops using agent-driven workflows.",
    value_sustainable_title: "Maintainable Code",
    value_sustainable_desc: "Design for smooth handoffs and lower long-term maintenance cost.",
    value_data_improvement_title: "Data-driven Iteration",
    value_data_improvement_desc: "Iterate with user feedback and event data.",

    process_heading: "How It Works",
    process_step1_title: "Define the problem",
    process_step1_desc: "Clarify target users, key features, and success metrics.",
    process_step1_output: "Deliverables: requirements summary, prioritized backlog",
    process_step2_title: "Design agent workflows",
    process_step2_desc: "Set up role-based agent flows for repeatable builds.",
    process_step2_output: "Deliverables: agent workflow map, rule set",
    process_step3_title: "Build & validate",
    process_step3_desc: "Implement core features, test, and run a feedback loop with users.",
    process_step3_output: "Deliverables: working MVP, test report",
    process_step4_title: "Deploy & improve",
    process_step4_desc: "After launch, refine performance and UX using real data.",
    process_step4_output: "Deliverables: deployment checklist, improvement roadmap",

    cases_heading: "Case Preview",
    case1_title: "Education Platform MVP",
    case1_desc: "Beta open in 3 weeks; 1,200+ early users.",
    case2_title: "SaaS Onboarding Automation",
    case2_desc: "+22% conversion; -35% operational effort.",
    case3_title: "Internal Ops Tooling",
    case3_desc: "-40% cycle time for repetitive work.",

    pricing_heading: "Pricing Snapshot",
    pricing_starter_name: "Starter",
    pricing_starter_price: "From 1.9M KRW/mo",
    pricing_starter_feature1: "Landing/PoC build",
    pricing_starter_feature2: "Weekly progress report",
    pricing_starter_feature3: "Basic analytics events",
    pricing_growth_name: "Growth",
    pricing_growth_price: "From 3.9M KRW/mo",
    pricing_growth_feature1: "MVP design & development",
    pricing_growth_feature2: "Agent workflow setup",
    pricing_growth_feature3: "Usability improvement iterations",
    pricing_partner_name: "Partner",
    pricing_partner_price: "Inquiry",
    pricing_partner_feature1: "Long-term product scaling",
    pricing_partner_feature2: "Team collaboration automation",
    pricing_partner_feature3: "Tailored operating strategy",

    faq_heading: "Frequently Asked Questions",
    faq_q1: "Can I start if I have almost no development experience?",
    faq_a1: "Yes. We translate requirements into a beginner-friendly plan and explain decision points clearly.",
    faq_q2: "How long does a project take?",
    faq_a2: "Depending on scope, we aim to deliver an initial MVP in 2–6 weeks.",
    faq_q3: "How are AI agents used?",
    faq_a3: "For role-based tasks like planning, code drafts, test automation, and documentation.",
    faq_q4: "Do you support maintenance after delivery?",
    faq_a4: "Yes. We monitor metrics and help with ongoing improvements and performance optimization.",

    contact_heading: "Ready to turn your idea into a real app?",
    contact_subtitle: "We guide beginners from the first build to launch with a clear, human-friendly process.",
    contact_name_label: "Name",
    contact_email_label: "Email",
    contact_message_label: "Message",
    contact_name_placeholder: "Jane Doe",
    contact_email_placeholder: "name@example.com",
    contact_message_placeholder: "Describe your target features, timeline, and any reference materials.",
    contact_submit: "Send inquiry",
    contact_hint: "Your message will open your email client for sending.",
    contact_sending: "Opened your email app. Please complete the sending.",
    contact_subject: "[mowrix] Inquiry request",

    footer_text: "© 2026 mowrix. All rights reserved.",

    theme_show_dark: "Dark",
    theme_show_light: "Light",
  },

  ja: {
    nav_services: "サービス",
    nav_process: "プロセス",
    nav_cases: "事例",
    nav_pricing: "料金",
    nav_faq: "FAQ",
    nav_consult: "無料相談",

    hero_eyebrow: "AIエージェント ネイティブ エージェンシー",
    hero_title: "AIエージェントで、<br>アイデアをアプリへ。",
    hero_lead: "mowrixは初心者にもわかる明確なプロセスで、現代的なアプリを素早く構築します。",
    hero_start: "プロジェクトを始める",
    hero_view_process: "進め方を見る",

    flow_step1: "課題の定義",
    flow_step2: "エージェント設計",
    flow_step3: "開発・検証",
    flow_step4: "公開・改善",

    services_heading: "提供価値",
    value_fast_mvp_title: "高速MVP",
    value_fast_mvp_desc: "週次の成果物でビジネス仮説を素早く検証します。",
    value_agent_collab_title: "エージェント連携",
    value_agent_collab_desc: "計画からテストまでの反復作業を、エージェント主導のワークフローで自動化します。",
    value_sustainable_title: "保守しやすいコード",
    value_sustainable_desc: "スムーズな引き継ぎと、長期の保守コストを下げる設計にします。",
    value_data_improvement_title: "データ駆動の改善",
    value_data_improvement_desc: "ユーザーの反応とイベントデータで継続的に改善します。",

    process_heading: "進め方",
    process_step1_title: "課題を定義する",
    process_step1_desc: "対象ユーザー、重要機能、成功指標を明確にします。",
    process_step1_output: "成果物: 要件サマリー、優先バックログ",
    process_step2_title: "エージェントの設計",
    process_step2_desc: "役割ベースのエージェント導線で、繰り返し可能な開発体制を整えます。",
    process_step2_output: "成果物: エージェントのワークフローマップ、ルールセット",
    process_step3_title: "開発・検証",
    process_step3_desc: "主要機能を実装し、テストしながらフィードバックループを回します。",
    process_step3_output: "成果物: 動作するMVP、テストレポート",
    process_step4_title: "公開・改善",
    process_step4_desc: "公開後は実データをもとにパフォーマンスとUXを改善します。",
    process_step4_output: "成果物: 公開チェックリスト、改善ロードマップ",

    cases_heading: "成果プレビュー",
    case1_title: "教育プラットフォームMVP",
    case1_desc: "3週間でβ公開、初期ユーザー1,200名以上を獲得。",
    case2_title: "SaaSオンボーディング自動化",
    case2_desc: "+22%コンバージョン、運用工数-35%。",
    case3_title: "社内業務ツール構築",
    case3_desc: "反復作業のリードタイム-40%。",

    pricing_heading: "料金スナップショット",
    pricing_starter_name: "Starter",
    pricing_starter_price: "1.9M KRW〜/月",
    pricing_starter_feature1: "ランディング/PoC構築",
    pricing_starter_feature2: "週次進捗レポート",
    pricing_starter_feature3: "基本分析イベント",
    pricing_growth_name: "Growth",
    pricing_growth_price: "3.9M KRW〜/月",
    pricing_growth_feature1: "MVP設計・開発",
    pricing_growth_feature2: "エージェントのワークフロー構築",
    pricing_growth_feature3: "使いやすさ改善の反復",
    pricing_partner_name: "Partner",
    pricing_partner_price: "お問い合わせ",
    pricing_partner_feature1: "長期プロダクトの高度化",
    pricing_partner_feature2: "チーム連携の自動化",
    pricing_partner_feature3: "運用戦略のカスタマイズ",

    faq_heading: "よくある質問",
    faq_q1: "開発経験がほとんどなくても始められますか？",
    faq_a1: "はい。要件を初心者向けの計画に整理し、判断ポイントをわかりやすく説明します。",
    faq_q2: "プロジェクトの期間はどれくらいですか？",
    faq_a2: "スコープ次第ですが、通常2〜6週間で初期MVPをご確認いただけるよう設計します。",
    faq_q3: "AIエージェントはどのように使いますか？",
    faq_a3: "計画整理、コード下書き、テスト自動化、ドキュメント化などの役割ベースの作業で活用します。",
    faq_q4: "納品後のメンテナンスも対応していますか？",
    faq_a4: "はい。運用指標のモニタリング、機能改善、パフォーマンス最適化まで継続的に支援します。",

    contact_heading: "アイデアを実際のアプリにする準備はできましたか？",
    contact_subtitle: "初心者にもわかる言葉で、最初のビルドから公開まで伴走します。",
    contact_name_label: "お名前",
    contact_email_label: "メール",
    contact_message_label: "お問い合わせ内容",
    contact_name_placeholder: "山田太郎",
    contact_email_placeholder: "name@example.com",
    contact_message_placeholder: "欲しい機能、スケジュール、参考資料などを簡単にご記入ください。",
    contact_submit: "問い合わせを送信",
    contact_hint: "内容をもとにメールクライアントを開き、送信できるようにします。",
    contact_sending: "メールアプリを開きました。送信を完了してください。",
    contact_subject: "[mowrix] お問い合わせ",

    footer_text: "© 2026 mowrix. All rights reserved.",

    theme_show_dark: "ダーク",
    theme_show_light: "ライト",
  },
};

function getInitialTheme() {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialLang() {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored === "ko" || stored === "en" || stored === "ja") return stored;
  return DEFAULT_LANG;
}

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N[DEFAULT_LANG];

  document.documentElement.lang = lang;

  const elements = Array.from(document.querySelectorAll("[data-i18n]"));
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined) return;
    // hero_title처럼 <br>가 들어가는 경우가 있어 textContent 대신 innerHTML 사용
    el.innerHTML = value;
  });

  const placeholderEls = Array.from(document.querySelectorAll("[data-i18n-placeholder]"));
  placeholderEls.forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = dict[key];
    if (value === undefined) return;
    el.placeholder = value;
  });

  const langButtons = Array.from(document.querySelectorAll("[data-lang]"));
  langButtons.forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang");
    const pressed = btnLang === lang;
    btn.setAttribute("aria-pressed", String(pressed));
  });

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    const currentTheme = document.documentElement.dataset.theme;
    themeToggle.textContent =
      currentTheme === "dark" ? dict.theme_show_light : dict.theme_show_dark;
    themeToggle.setAttribute(
      "aria-label",
      currentTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );
  }
}

function applyTheme(theme, { persist } = { persist: false }) {
  document.documentElement.dataset.theme = theme;
  if (persist) {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }
}

function initNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  const navLinks = nav ? Array.from(nav.querySelectorAll("a[href^='#']")) : [];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (menuButton && nav) {
    const closeMenu = () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    };

    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const target = link.getAttribute("href");
          link.classList.toggle("active", target === `#${entry.target.id}`);
        });
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => observer.observe(section));
}

function initAccordion() {
  const questions = Array.from(document.querySelectorAll(".faq-question"));

  questions.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const answer = item ? item.querySelector(".faq-answer") : null;
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      questions.forEach((otherButton) => {
        const otherItem = otherButton.closest(".faq-item");
        const otherAnswer = otherItem ? otherItem.querySelector(".faq-answer") : null;
        otherButton.setAttribute("aria-expanded", "false");
        if (otherAnswer) otherAnswer.hidden = true;
      });

      if (!isExpanded && answer) {
        button.setAttribute("aria-expanded", "true");
        answer.hidden = false;
      }
    });
  });
}

function initReveal() {
  const revealItems = Array.from(document.querySelectorAll(".reveal"));

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initTracking() {
  const trackedButtons = Array.from(document.querySelectorAll("[data-track]"));
  trackedButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const eventName = button.getAttribute("data-track");
      console.log("[track]", eventName);
    });
  });
}

function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  const setButtonLabel = () => {
    const lang = document.documentElement.lang || DEFAULT_LANG;
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    const currentTheme = document.documentElement.dataset.theme;
    themeToggle.textContent =
      currentTheme === "dark" ? dict.theme_show_light : dict.theme_show_dark;
  };

  setButtonLabel();

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme, { persist: true });
    setButtonLabel();
  });
}

function initLanguageToggle() {
  const initialLang = getInitialLang();
  applyLanguage(initialLang);

  const langButtons = Array.from(document.querySelectorAll("[data-lang]"));
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (!lang || !I18N[lang]) return;
      localStorage.setItem(LANG_STORAGE_KEY, lang);
      applyLanguage(lang);
    });
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const statusEl = document.getElementById("contactStatus");
  const nameEl = document.getElementById("contactName");
  const emailEl = document.getElementById("contactEmail");
  const messageEl = document.getElementById("contactMessage");

  const getLang = () => document.documentElement.lang || DEFAULT_LANG;
  const getDict = () => I18N[getLang()] || I18N[DEFAULT_LANG];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = (nameEl && nameEl.value ? nameEl.value.trim() : "").slice(0, 120);
    const userEmail = (emailEl && emailEl.value ? emailEl.value.trim() : "").slice(0, 160);
    const message = (messageEl && messageEl.value ? messageEl.value.trim() : "").slice(0, 2000);
    const dict = getDict();

    const lang = getLang();
    const subject = `${dict.contact_subject} - ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${userEmail}`,
      `Language: ${lang}`,
      "",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:${MAIL_TO}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    if (statusEl) statusEl.textContent = dict.contact_sending;
    window.location.href = mailtoUrl;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // 테마는 깜빡임 방지를 위해 가장 먼저 적용
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);

  initNavigation();
  initAccordion();
  initReveal();
  initTracking();

  initThemeToggle();
  initLanguageToggle();
  initContactForm();
});
