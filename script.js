(() => {
  const html = document.documentElement;
  const nav = document.getElementById('siteNav');
  const scrim = document.getElementById('scrim');
  const drawerToggle = document.getElementById('drawerToggle');
  const navClose = document.getElementById('navClose');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  const langSwitch = document.getElementById('langSwitch');

  const STORE_KEY_THEME = 'fourDragons.theme';
  const STORE_KEY_NAV = 'fourDragons.navPosition';
  const STORE_KEY_LANG = 'fourDragons.language';

  const translations = {
    en: {
      navHome: 'Home',
      navCreations: 'Our Creations',
      navStandards: 'Content Standards',
      navFounder: 'Founder Vision',
      navValues: 'The Four Pillars',
      navConstitution: 'Constitution',
      navCulture: 'Culture',
      navAikido: 'Atatakasa Aikido',
      navPhilosophy: 'Creative Philosophy',
      themeLabel: 'Theme',
      themeDark: 'Dark',
      themeLight: 'Light',
      navLabel: 'Navbar position',
      navTop: 'Top',
      navLeft: 'Left',
      navRight: 'Right',
      langLabel: 'Language',
      heroEyebrow: 'Tokyo, Japan · Main Headquarters & Decentralized Worldwide',
      heroTitle: 'Four Dragons Inc. Go <span class="jp">(演劇)</span>',
      heroSub: 'A dragon-gaming entertainment empire building games, anime, film, music and books on a foundation of dignity, creative freedom, and <strong>Atatakasa (温かさ)</strong> — warmth.',
      heroFounder: 'Christopher Lee Cajes — Founder, CEO & Chairman',
      heroPrimary: 'View Our Creations',
      heroSecondary: "The Founder's Vision",
      creationsVol: 'Our Work',
      creationsTitle: 'What we make',
      creationsLead: 'Any entertainment and creativity products — from the heart of every member of the family as creators.',
      standardsVol: 'Product Standards',
      standardsTitle: 'The line we don\'t cross',
      standardsLead: 'All Four Dragons products must uplift, inspire, and bring people together. The following themes are never permitted — across games, anime, film, music or books:',
      standard1: 'Brutal or excessively violent content and gore',
      standard2: 'Horror, scary, or disturbing imagery',
      standard3: 'Inappropriate or mature themes',
      standard4: 'Anything that creates a negative emotional impact',
      standardsLead2: 'Instead, every project strives to be friendly, hopeful, and positive:',
      standardsList1: '+ Friendly &amp; Welcoming',
      standardsList2: '+ Inspirational &amp; Hopeful',
      standardsList3: '+ Positive &amp; Joyful',
      standardsList4: '+ Kind &amp; Compassionate',
      standardsList5: '+ Courageous &amp; Adventurous',
      prod1Category: 'Open-World Action RPG',
      prod1Title: 'Dragon Rising: Ember Chronicles',
      prod1Tagline: 'Carve your legend across the Nine Realms.',
      prod2Category: 'Cozy Life MMO',
      prod2Title: 'Atatakasa Online',
      prod2Tagline: 'Build. Share. Belong.',
      prod3Category: 'Animated Series',
      prod3Title: 'The Four Dragons Saga',
      prod3Tagline: 'Four siblings. Four elements. One destiny.',
      prod4Category: 'Animated Feature Film',
      prod4Title: 'Mona no Hoshi',
      prod4Tagline: "A painter's promise. A dragon's gift.",
      prod5Category: 'Original Soundtrack',
      prod5Title: 'Symphony of Warmth',
      prod5Tagline: 'Music that feels like home.',
      prod6Category: 'Philosophy & Culture Book',
      prod6Title: "The Founder's Blueprint",
      prod6Tagline: 'How to build a company — not a machine.',
      statusAvailable: 'Available',
      statusInDev: 'In Development',
      statusStreaming: 'Streaming Now',
      statusTheaters: 'In Theaters',
      founderVol: "The Founder's Vision (The Heart)",
      founderTitle: 'Why does Four Dragons exist?',
      founderQuote: '“Four Dragons exists to give people the opportunity to create the entertainment they truly want — with passion, purpose, kindness, and artistic freedom. We build not only entertainment, but also people, families, and future creators.”',
      visionTitle: 'Vision',
      visionText: 'Become one of the world\'s greatest entertainment companies while becoming one of the happiest places to work.',
      missionTitle: 'Mission',
      missionText: 'Create unforgettable entertainment. Empower creators. Support families. Inspire children. Improve people\'s lives.',
      mottoTitle: 'Motto',
      mottoText: '“We don\'t build people. We build creators.”',
      mindsetQuote: '“They don\'t work for me. I work for them.”',
      mindsetText: 'A leader exists to remove obstacles, support growth, and enable others to do their best work.',
      valuesVol: 'The Four Core Values',
      valuesTitle: 'The Four Pillars',
      valuesLead: 'The number four — in dragon-blue and dragon-red — stands for the four pillars every creator is asked to carry.',
      pillarMissionTitle: 'Champion the Mission',
      pillarMissionText: 'Unite creators with the broader community to drive the company\'s purpose.',
      pillarHostTitle: 'Be a Host',
      pillarHostText: 'Hospitality first — caring, open, encouraging in every relationship.',
      pillarAdventureTitle: 'Embrace the Adventure',
      pillarAdventureText: 'Meet challenges with hopeful resilience, open curiosity, and eagerness to grow.',
      pillarEntrepreneurTitle: 'Be a Cereal Entrepreneur',
      pillarEntrepreneurText: 'Turn bold, sometimes unconventional ambitions into reality.',
      constitutionVol: 'Corporate Constitution',
      constitutionTitle: 'These almost never change.',
      article1Title: 'Every person deserves dignity.',
      article2Title: 'Good human beings come before great talent.',
      article2Text: 'Character outweighs skill. Skills can be learned. Character must be lived.',
      article3Title: 'Zero corruption.',
      article3Text: 'No bribery. No abuse of authority. No favoritism. No exploitation.',
      article4Title: 'The company exists to improve people\'s lives.',
      article4Text: 'Profit sustains the mission — it does not replace it.',
      article5Title: 'Everyone is a creator.',
      article5Text: 'Teams and individuals may create. Original pitches are welcomed. Passion projects encouraged.',
      article6Title: 'No layoffs for financial optimization alone.',
      article6Text: 'Relocate. Retrain. Create opportunities. The Founder protects his children\'s jobs, dreams, and futures — first, always.',
      article7Title: 'Anyone may leave peacefully to chase their own dreams.',
      article7Text: 'Entrepreneurship is celebrated. Leaving to build your own venture is a success — not betrayal. Former members stay family.',
      article8Title: 'Treat everyone equally.',
      article8Text: 'Titles do not determine worth. Everyone deserves equal human respect.',
      article9Title: 'No forced participation.',
      article9Quote: '“Walang sapilitan.”',
      article9Text: 'Real teamwork comes from willingness — not coercion.',
      article10Title: 'Continuous learning.',
      article10Text: 'Everyone remains a student. Everyone remains a teacher.',
      cultureVol: 'Culture Book',
      cultureTitle: 'Our Values',
      valueKindness: 'Kindness',
      valueRespect: 'Respect',
      valueHonesty: 'Honesty',
      valuePassion: 'Passion',
      valueFamily: 'Family',
      valueHumility: 'Humility',
      valueCreativity: 'Creativity',
      valueCourage: 'Courage',
      valueResponsibility: 'Responsibility',
      valueCompassion: 'Compassion',
      valueCuriosity: 'Curiosity',
      valueGratitude: 'Gratitude',
      valueOptimism: 'Optimism',
      valueService: 'Service',
      rejectTitle: 'We Reject',
      rejectCorruption: 'Corruption',
      rejectBullying: 'Bullying',
      rejectHarassment: 'Harassment',
      rejectDiscrimination: 'Discrimination',
      rejectManipulation: 'Manipulation',
      rejectCruelty: 'Cruelty',
      rejectAbuse: 'Abuse',
      rejectPolitics: 'Workplace politics',
      rejectToxicCompetition: 'Toxic competition',
      rejectFearMgmt: 'Fear-based management',
      rejectToxicWork: 'Toxic work culture',
      rejectReframe1: 'The word <em>"Micromanage" / "Micromanagement"</em> doesn\'t exist — not in this dictionary, not here.',
      rejectReframe2: '<strong>"We speak respectfully. We don\'t criticize people. We lift each other up."</strong>',
      rejectQuote: '“Four Dragons has zero tolerance for toxic work culture. If the environment stops feeling safe, the Founder will act — and protect his family.”',
      aikidoVol: 'Atatakasa Aikido (温かさ)',
      aikidoTitle: '温かさ — Atatakasa',
      aikidoLead: 'Warmth. Kindness. Compassion. An optional weekend program — not a job requirement — open to everyone: families, children, and guests alike.',
      aikidoPurposeTitle: 'Purpose',
      aikidoPurposeText: 'Strengthen health. Build trust. Reduce stress. Promote humility. Encourage lifelong learning.',
      aikidoWeekendTitle: 'Weekend Activities',
      aikidoWeekendText: 'Optional Aikido practice, meditation, stretching, tea gathering — family participation welcome.',
      aikidoPhilosophyTitle: 'Philosophy',
      aikidoPhilosophyText: '温かさ — Warmth. Kindness. Compassion.',
      aikidoInclusivityTitle: 'Radical Inclusivity & Open Sensei Policy',
      aikidoInclusivityText: 'Aikido ranks and dan boundaries are removed. Any martial artist ranked higher than the Chairman is welcomed to take the floor as guest sensei. The organization holds an open aspiration to host Doshu Moriteru Ueshiba as leading master sensei.',
      aikidoUkemiTitle: 'The “Weekend Ukemi” Healing Protocol',
      aikidoUkemiText: 'When children or students face emotional hardship, the Chairman steps down from the dominant nage role on weekends and acts as ukemi — receiver who takes the fall. Reversing the traditional power dynamic creates a space of humility, mutual trust, and active recovery.',
      aikidoSubhead: 'Four Dragons Inc. Go · Atatakasa Aikido — Tokyo, Japan',
      philosophyVol: 'Creative Philosophy',
      philosophyTitle: 'No deadlines. Just great work.',
      philosophyLead1: 'The best work comes when creators are free to explore, iterate, and let ideas breathe — not when a calendar is breathing down their neck.',
      philosophyLine1: '"I\'m not chasing the clock on this."',
      philosophyLine2: '"I\'m focused on the work, not the pressure of the date."',
      philosophyLine3: '"I\'m staying ahead of the game so the deadline isn\'t an issue."',
      philosophyLead2: 'When people aren\'t stressed about arbitrary timelines, they take risks, experiment, and produce work they\'re proud of. Rushing creates mediocrity; patience creates masterpieces.',
      philosophySubhead: 'A living proof — Leonardo da Vinci',
      philosophyPara1: 'Leonardo kept refining the <em>Mona Lisa</em> for 16 years — from 1503 until his death in 1519 — never delivering it, because it wasn\'t finished.',
      philosophyPara2: 'One painting. Nearly two decades. No deadline over his head. The result: the most famous painting on Earth — not because he rushed, but because he refused to settle.',
      philosophyQuote: 'He didn\'t build something to meet a date. He built something to be extraordinary.',
      philosophyPara3: 'That\'s the energy Four Dragons was founded on. Our games, anime, films, music, and books deserve that same patience. We\'d rather take our time and ship something people love than chase a calendar and ship something forgettable.',
      footerText: 'Four Dragons Inc. Go (演劇) — Tokyo, Japan & Decentralized Worldwide',
      footerSub: 'Christopher Lee Cajes · Founder, CEO & Chairman'
    },
    ja: {
      navHome: 'ホーム',
      navCreations: '作品',
      navStandards: 'コンテンツ基準',
      navFounder: '創設者のビジョン',
      navValues: '四つの柱',
      navConstitution: '憲章',
      navCulture: '文化',
      navAikido: 'アタタカサ・アイキドー',
      navPhilosophy: '創造哲学',
      themeLabel: 'テーマ',
      themeDark: 'ダーク',
      themeLight: 'ライト',
      navLabel: 'ナビゲーション位置',
      navTop: '上',
      navLeft: '左',
      navRight: '右',
      langLabel: '言語',
      heroEyebrow: '日本・東京 主要拠点・世界的な分散型拠点',
      heroTitle: 'Four Dragons Inc. Go <span class="jp">（演劇）</span>',
      heroSub: '尊厳、創造的自由、そして <strong>Atatakasa（温かさ）</strong> を土台に、ゲーム・アニメ・映画・音楽・書籍を生み出す、竜と創作を愛するエンタメ帝国。',
      heroFounder: 'クリストファー・リー・カヘス — 創業者・CEO・会長',
      heroPrimary: '作品を見る',
      heroSecondary: '創設者のビジョン',
      creationsVol: '私たちの作品',
      creationsTitle: '私たちが作るもの',
      creationsLead: '家族の全メンバーが創作者として、心を込めて生み出すあらゆるエンターテインメント。',
      standardsVol: '製品基準',
      standardsTitle: '越えない線',
      standardsLead: 'すべての Four Dragons 製品は、力づけ・鼓舞・人々をつなぐべきである。以下のテーマは、ゲーム・アニメ・映画・音楽・書籍を問わず許可されない。',
      standard1: '残虐または過度に暴力的な内容',
      standard2: '恐怖、怖い、または不気味なイメージ',
      standard3: '不適切または成熟したテーマ',
      standard4: 'ネガティブな感情的影響を与えるもの',
      standardsLead2: 'その代わり、すべてのプロジェクトは親しみやすく希望に満ち、前向きであるべきである。',
      standardsList1: '+ 親しみやすく歓迎的',
      standardsList2: '+ 鼓舞的で希望に満ち',
      standardsList3: '+ 前向きで楽しさに満ち',
      standardsList4: '+ 優しく思いやり深く',
      standardsList5: '+ 勇敢で冒険的',
      prod1Category: 'オープンワールドアクションRPG',
      prod1Title: 'ドラゴンライジング：エンバー・クロニクルズ',
      prod1Tagline: '九界を駆ける、伝説を刻め。',
      prod2Category: 'コージー・ライフMMO',
      prod2Title: 'アタタカサ・オンライン',
      prod2Tagline: '造る。分かち合う。属する。',
      prod3Category: 'アニメシリーズ',
      prod3Title: 'ザ・フォー・ドラゴンズ・サーガ',
      prod3Tagline: '四兄弟。四元素。運命ひとつ。',
      prod4Category: '劇場用アニメフィーチャー',
      prod4Title: 'モナの星',
      prod4Tagline: '画家の約束。龍の贈り物。',
      prod5Category: 'オリジナルサウンドトラック',
      prod5Title: 'シンフォニー・オブ・ウォームス',
      prod5Tagline: '家のような音楽。',
      prod6Category: '哲学・文化書',
      prod6Title: 'ザ・ファウンダー\'ズ・ブループリント',
      prod6Tagline: '会社の作り方。機械ではなく。',
      statusAvailable: '配信中',
      statusInDev: '開発中',
      statusStreaming: '配信中',
      statusTheaters: '映館上映中',
      founderVol: '創設者のビジョン（心）',
      founderTitle: 'なぜ Four Dragons は存在するのか？',
      founderQuote: '「Four Dragons は、人々が本当に作りたいエンターテインメントを、情熟・目的・優しさ・芸術的自由のもとで創れる機会を与えるために存在する。エンターテインメントだけでなく、人・家族・未来の創作者も育てる。」',
      visionTitle: 'ビジョン',
      visionText: '世界で最も素晴らしいエンターテインメント企業の一つになり、同時に最高の職場の一つになる。',
      missionTitle: 'ミッション',
      missionText: '忘れないエンターテインメントを創る。創作者を力づける。家族を支える。子どもを励ます。人々の暮らしを良くする。',
      mottoTitle: 'モットー',
      mottoText: '「人を作るのではなく、創作者を作る。」',
      mindsetQuote: '「彼らが私のために働くのではない。私は彼らのために働く。」',
      mindsetText: 'リーダーの役目は、障害を取り除き、成長を支え、他者が最高の力を発揮できるようにすること。',
      valuesVol: '四つの核心価値',
      valuesTitle: '四つの柱',
      valuesLead: '青と赤のドラゴンカラーで描かれた4の数字は、すべての創作者が担うべき四つの柱を象徴する。',
      pillarMissionTitle: '使命を先導する',
      pillarMissionText: '創作者をコミュニティと一体化させ、会社の目的を推進する。',
      pillarHostTitle: 'ホストである',
      pillarHostText: 'もてなしを第一に — ケアし、開かれ、励ますあらゆる関係。',
      pillarAdventureTitle: '冒険を受け入れる',
      pillarAdventureText: '希望に満ちた回復力、開かれた好奇心、成長への意欲とともに挑む。',
      pillarEntrepreneurTitle: 'シリアル起業家である',
      pillarEntrepreneurText: '大胆で時に異常な野望を現実に変える。',
      constitutionVol: '企業憲章',
      constitutionTitle: 'ほとんど変わることのないもの',
      article1Title: 'すべての人に尊厳がある。',
      article2Title: '偉大な才能より、良き人間性を優先する。',
      article2Text: '人格は能力より重い。能力は学べる。人格は生きるものである。',
      article3Title: '腐敗ゼロ。',
      article3Text: '賄賂・権力濫用・忖度・搾取のすべてを拒む。',
      article4Title: '会社は人々の人生を改善するために存在する。',
      article4Text: '利益は使命を支えるものであり、使命に代わるものではない。',
      article5Title: '誰もが創作者である。',
      article5Text: 'チームも個人も創作できる。オリジナルな企画を歓迎する。情熱のプロジェクトを奨励する。',
      article6Title: '財務最適化だけが理由の人員削減はしない。',
      article6Text: '人を移動し、再教育し、新しい機会を作る。創設者は子どもたちの仕事・夢・未来を最優先に守る。',
      article7Title: '誰でも平穏に辞めて、自分の夢を追える。',
      article7Text: '起業を称える。自分の事業を立ち上げるために辞めることは裏切りではなく成功である。元メンバーは家族のまま。',
      article8Title: 'すべての人を平等に扱う。',
      article8Text: '肩書きが価値を決めるのではない。誰もが平等な人間的尊重を受ける。',
      article9Title: '強制参加はしない。',
      article9Quote: '「Walang sapilitan。」',
      article9Text: '真の協働とは、強制ではなく意志によって成り立つ。',
      article10Title: '継続的な学習。',
      article10Text: '誰もが学び続け、誰もが教える存在である。',
      cultureVol: '文化書',
      cultureTitle: '私たちの価値観',
      valueKindness: '優しさ',
      valueRespect: '尊重',
      valueHonesty: '誠実',
      valuePassion: '情熱',
      valueFamily: '家族',
      valueHumility: '謙虚',
      valueCreativity: '創造性',
      valueCourage: '勇気',
      valueResponsibility: '責任',
      valueCompassion: '思いやり',
      valueCuriosity: '好奇心',
      valueGratitude: '感謝',
      valueOptimism: '楽観',
      valueService: '奉仕',
      rejectTitle: '私たちが拒絶するもの',
      rejectCorruption: '腐敗',
      rejectBullying: 'いじめ',
      rejectHarassment: '嫌がらせ',
      rejectDiscrimination: '差別',
      rejectManipulation: '操作',
      rejectCruelty: '残酷さ',
      rejectAbuse: '虐待',
      rejectPolitics: '職場の政治',
      rejectToxicCompetition: '有害な競争',
      rejectFearMgmt: '恐怖に基づくマネジメント',
      rejectToxicWork: '有害な労働文化',
      rejectReframe1: '「Micromanage / Micromanagement」という言葉は存在しない — ここの辞書にはない。',
      rejectReframe2: '<strong>「私たちは敬意をもって話す。人を批判しない。互いを支え合う。」</strong>',
      rejectQuote: '「Four Dragons は有害な労働文化に対してゼロトレランスです。安心できない環境が生まれたら創設者は行動する — そして家族を守る。」',
      aikidoVol: 'アタタカサ・アイキドー（温かさ）',
      aikidoTitle: '温かさ — Atatakasa',
      aikidoLead: '温かさ。優しさ。思いやり。任意の週末プログラムで、仕事の義務ではない。家族・子ども・ゲストを問わず参加できる。',
      aikidoPurposeTitle: '目的',
      aikidoPurposeText: '健康を強める。信頼を築く。ストレスを減らす。謙虚さを育む。生涯学び続けることを奨励する。',
      aikidoWeekendTitle: '週末の活動',
      aikidoWeekendText: '任意の合気道練習、瞑想、ストレッチ、茶会 — 家族参加も歓迎。',
      aikidoPhilosophyTitle: '哲学',
      aikidoPhilosophyText: '温かさ — Atatakasa. Warmth. Kindness. Compassion.',
      aikidoInclusivityTitle: '過激な包摂性とオープン・センセイ方針',
      aikidoInclusivityText: '合気道のランクや段位の境界を完全に撤廃する。会長より上位の武道家は、ゲスト先生としてフロアに上がるよう歓迎する。組織は、月城盛矩を主導的な先生として迎えることを常に望む。',
      aikidoUkemiTitle: '「週末 Ukemi」ヒーリング・プロトコル',
      aikidoUkemiText: '子どもや生徒が感情的苦痛に直面したとき、会長は週末に支配的な nage の役割から降り、ukemi（受ける側）として身体的な影響を受け入れる。伝統的な権力関係を逆転させることで、謙虚さ・相互信頼・積極的な回復の空間を作る。',
      aikidoSubhead: 'Four Dragons Inc. Go · Atatakasa Aikido — 東京、日本',
      philosophyVol: '創造哲学',
      philosophyTitle: '締め切りはない。素晴らしい仕事だけがある。',
      philosophyLead1: '最良の仕事は、創作者が自由に探求し・試し・アイデアを息づかせられるときに生まれる。カレンダーに追われるときではない。',
      philosophyLine1: '「この件に関しては、時刻に追われてはいない。」',
      philosophyLine2: '「日付のプレッシャーではなく、仕事に集中している。」',
      philosophyLine3: '「締め切りが問題にならないよう、常に先回りしている。」',
      philosophyLead2: '恣意的な時間軸に縛られない人は、リスクを取って試し、誇りを持てる仕事を生み出す。急ぐことは平凡さを生み、忍耐は傑作を生む。',
      philosophySubhead: '生きた証拠 — レオナルド・ダ・ヴィンチ',
      philosophyPara1: 'ダ・ヴィンチは <em>モナ・リザ</em> を16年間 — 1503年から1519年没まで — 完成したと思えないので鋭意改良を重ねた。',
      philosophyPara2: '1枚の絵画。20年に近い歳月。締め切りはなかった。結果は地球で最も有名な絵画 — 急いだからではなく、妥協を拒んだから。',
      philosophyQuote: '彼は締め切りに合わせて何かを作ったのではない。並外れのものを作ったのだ。',
      philosophyPara3: 'これこそ Four Dragons が誕生した原動力である。私たちのゲーム・アニメ・映画・音楽・書籍も同じ忍耐を必要とする。カレンダーを追いかけて忘れられる作品より、時間をかけて愛される作品を出したい。',
      footerText: 'Four Dragons Inc. Go (演劇) — 東京、日本と分散型の世界各地',
      footerSub: 'クリストファー・リー・カヘス · 創業者・CEO・会長'
    }
  };

  /* ---------- restore saved preferences ---------- */
  const savedTheme = safeGet(STORE_KEY_THEME);
  const savedNav = safeGet(STORE_KEY_NAV);
  const savedLanguage = safeGet(STORE_KEY_LANG);
  const systemPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

  setTheme(savedTheme || (systemPrefersLight ? 'light' : 'dark'), false);
  setNavPosition(savedNav || 'top', false);
  setLanguage(savedLanguage || 'en', false);

  function safeGet(key){
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value){
    try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable, ignore */ }
  }

  /* ---------- language ---------- */
  function setLanguage(language, persist = true){
    html.setAttribute('data-lang', language);
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
      const key = el.getAttribute('data-i18n-key');
      const value = translations[language]?.[key];
      if (!value) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = value;
      } else {
        el.innerHTML = value;
      }
    });
    if (langSwitch) {
      langSwitch.setAttribute('aria-checked', language === 'ja' ? 'true' : 'false');
      const active = langSwitch.querySelectorAll('.lang-switch-option');
      active.forEach(option => option.classList.toggle('active', option.dataset.lang === language));
    }
    if (persist) safeSet(STORE_KEY_LANG, language);
  }

  if (langSwitch) {
    langSwitch.addEventListener('click', () => {
      const next = html.getAttribute('data-lang') === 'ja' ? 'en' : 'ja';
      setLanguage(next);
    });
  }

  /* ---------- theme ---------- */
  function setTheme(theme, persist = true){
    html.setAttribute('data-theme', theme);
    document.querySelectorAll('[data-theme-choice]').forEach(btn => {
      const active = btn.dataset.themeChoice === theme;
      btn.setAttribute('aria-checked', active ? 'true' : 'false');
    });
    if (persist) safeSet(STORE_KEY_THEME, theme);
  }

  document.querySelectorAll('[data-theme-choice]').forEach(btn => {
    btn.addEventListener('click', () => setTheme(btn.dataset.themeChoice));
  });

  themeToggleMobile.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });

  /* ---------- navbar position ---------- */
  function setNavPosition(position, persist = true){
    html.setAttribute('data-nav', position);
    document.querySelectorAll('[data-nav-choice]').forEach(btn => {
      const active = btn.dataset.navChoice === position;
      btn.setAttribute('aria-checked', active ? 'true' : 'false');
    });
    if (persist) safeSet(STORE_KEY_NAV, position);
  }

  document.querySelectorAll('[data-nav-choice]').forEach(btn => {
    btn.addEventListener('click', () => setNavPosition(btn.dataset.navChoice));
  });

  /* ---------- mobile drawer ---------- */
  function openDrawer(){
    html.classList.add('nav-open');
    scrim.classList.add('show');
    drawerToggle.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer(){
    html.classList.remove('nav-open');
    scrim.classList.remove('show');
    drawerToggle.setAttribute('aria-expanded', 'false');
  }
  drawerToggle.addEventListener('click', () => {
    html.classList.contains('nav-open') ? closeDrawer() : openDrawer();
  });
  navClose.addEventListener('click', closeDrawer);
  scrim.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
  nav.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeDrawer();
  });

  /* ---------- scroll-spy active link ---------- */
  const links = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      const link = links.find(a => a.getAttribute('href') === id);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(sec => spy.observe(sec));

  /* ---------- copyright year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.addEventListener('contextmenu', e => e.preventDefault());
})();
