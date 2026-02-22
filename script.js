// 学習教材のデータ定義
const studyData = {
    math: {
        name: "<ruby>算数<rt>さんすう</rt></ruby>・<ruby>数学<rt>すうがく</rt></ruby>",
        grades: {
            e1: {
                name: "小1",
                categories: [
                    {
                        name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>",
                        units: [
                            { 
                                title: "1. <ruby>数<rt>かず</rt></ruby>", 
                                subUnits: [
                                    { title: "(1) <ruby>比<rt>くら</rt></ruby>べてみよう", content: "<h4>どちらが おおいかな？</h4><p>木（き）と 車（くるま）を 1つずつ つなぐと、車が 1だい あまりますね。</p>" },
                                    { title: "(2) 10までの <ruby>数<rt>かず</rt></ruby>", content: "<h4>10は 5 と 5</h4><p>0（れい）は、なにも ない という ことです。</p>" }
                                ]
                            },
                            { title: "2. <ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>", subUnits: [{ title: "(1) たしざん", content: "<h4>3 ＋ 2 ＝ 5</h4>" }] },
                            { title: "3. <ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>", subUnits: [{ title: "(1) ひきざん", content: "<h4>5 － 2 ＝ 3</h4>" }] }
                        ]
                    },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [] }
                ]
            },
            e2: {
                name: "小2",
                categories: [
                    {
                        name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>",
                        units: [
                            { title: "1. 大きな数", subUnits: [{ title: "(1) 1000までの数", content: "<h4>100が 10こで 1000</h4>" }] },
                            { title: "2. かけ算", subUnits: [{ title: "(1) 九九", content: "<h4>2のだん 〜 9のだん</h4>" }] }
                        ]
                    },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [] }
                ]
            },
            e3: {
                name: "小3",
                categories: [
                    {
                        name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>",
                        units: [
                            {
                                title: "1. 大きな <ruby>数<rt>かず</rt></ruby>",
                                subUnits: [
                                    { title: "(1) 1万の 大きさ", content: "<h4>1000が 10こで 1万</h4><p>9999より 1大きい数。100の 100倍でも あるよ。</p>" },
                                    { title: "(2) 1億までの 数", content: "<h4>千万の つぎは 1億</h4><p>十万、百万、千万、そして 1億（10000万）へ！</p>" }
                                ]
                            },
                            {
                                title: "2. <ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>",
                                subUnits: [
                                    { title: "(1) 3けた・4けたの 計算", content: "<h4>500 ＋ 700 ＝ 1200</h4><p>筆算（ひっさん）は 位（くらい）を そろえて 書こう。</p>" },
                                    { title: "(2) 見積もり（みつもり）", content: "<h4>だいたい どれくらい？</h4><p>398＋205 は だいたい 400＋200 で 600くらいだね。</p>" }
                                ]
                            },
                            {
                                title: "3. <ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>",
                                subUnits: [
                                    { title: "(1) 3けた・4けたの 引き算", content: "<h4>1200 － 500 ＝ 700</h4>" },
                                    { title: "(2) 大きな 数から 引く", content: "<h4>1億 － 1000万 ＝ 9000万</h4>" }
                                ]
                            },
                            {
                                title: "4. かけ算",
                                subUnits: [
                                    { title: "(1) 2位数・3位数 × 1位数の 筆算", content: "<h4>位を そろえて 計算しよう</h4><p>・23 × 3 ➔ 3×3=9、20×3=60 で 69。<br>・124 × 3 ➔ 一の位から 順番に かけていくよ。</p>" },
                                    { title: "(2) 2位数・3位数 × 2位数の 筆算", content: "<h4>2段に 分けて かくよ</h4><p>・23 × 12 ➔ 23×2（46）と 23×10（230）を たして 276。<br>・ずれないように 位を そろえるのが ポイント！</p>" },
                                    { title: "(3) 10倍、100倍と 0 の かけ算", content: "<h4>0 を つける きまり</h4><p>・<b>10倍</b>：25 × 10 ＝ 250 (0を1こつける)<br>・<b>100倍</b>：25 × 100 ＝ 2500 (0を2こつける)<br>・<b>0を かける</b>：どんな数に 0を かけても 0になるよ。</p>" },
                                    { title: "(4) かけ算の きまり（法則）", content: `
                                        <h4>計算が らくに なる 法則</h4>
                                        <ul class='pos-list'>
                                            <li><b>交換法則</b>： 3 × 5 ＝ 5 × 3 (いれかえても 同じ)</li>
                                            <li><b>結合法則</b>： (2 × 3) × 4 ＝ 2 × (3 × 4) (どこから かけても 同じ)</li>
                                            <li><b>分配法則</b>： 18 × 4 ➔ (10 ＋ 8) × 4 ＝ 40 ＋ 32 ＝ 72 (わけて かけても 同じ)</li>
                                        </ul>
                                    ` }
                                ]
                            },
                            {
                                title: "5. わり算",
                                subUnits: [
                                    { title: "(1) わり算の いみと 逆算", content: "<h4>「わける」と 「あつめる」</h4><p>・<b>等分除</b>：12こを 3人に わけると 1人何こ？ (□×3=12)<br>・<b>包含除</b>：12こを 3こずつ わけると 何人に？ (3×□=12)<br>わり算は <b>かけ算の ぎゃく</b> の 計算だね。</p>" },
                                    { title: "(2) 累減（るいげん）", content: "<h4>引き算の くりかえし</h4><p>12 ÷ 3 は、12から 3を 何回 ひけるか？ ということ。<br>12 － 3 － 3 － 3 － 3 ＝ 0 ➔ 4回！</p>" },
                                    { title: "(3) 商（しょう）の ステップ", content: "<h4>1けたから 2けたへ</h4><p>・<b>商が 1けた</b>：15 ÷ 3 ＝ 5<br>・<b>商が 2けた</b>：50 ÷ 2 ＝ 25<br>（10の まとまり 5こを 2つずつわけると、2つできて 10あまる。その 10を 2でわると 5。あわせて 25！）</p>" },
                                    { title: "(4) 0 の わり算", content: "<h4>⚠️ 0で わることは できない！</h4><p>0 ÷ 5 ＝ 0 です。でも、<b>「5 ÷ 0」</b> は できません。<br>かけ算に なおすと <b>0 × ❓ ＝ 5</b> となりますが、0に なにを かけても 5には ならないからです。</p>" }
                                ]
                            },
                            {
                                title: "6. 小数の 足し算",
                                subUnits: [
                                    { title: "(1) 0.1（小数）の いみ", content: "<h4>1を 10こに わけると 0.1</h4><p>1mm ＝ 0.1cm。0.1 が 10こで 1 になるよ。</p>" },
                                    { title: "(2) 小数の 足し算", content: "<h4>小数点を そろえて</h4><p>0.3 ＋ 0.5 ＝ 0.8<br>0.7 ＋ 0.4 ＝ 1.1</p>" }
                                ]
                            },
                            {
                                title: "7. 小数の 引き算",
                                subUnits: [
                                    { title: "(1) 小数の 引き算", content: "<h4>ひきざんも おなじ</h4><p>0.8 － 0.3 ＝ 0.5<br>1.2 － 0.5 ＝ 0.7</p>" }
                                ]
                            },
                            {
                                title: "8. 分数の 足し算",
                                subUnits: [
                                    { title: "(1) 分母と 分子の いみ", content: "<h4>分数の なまえ</h4><p>下の 数が <b>分母</b>、上の 数が <b>分子</b>。1を 3つに わけると 1/3 だよ。</p>" },
                                    { title: "(2) 分数の 足し算", content: "<h4>分子だけを たそう</h4><p>1/3 ＋ 1/3 ＝ 2/3</p>" }
                                ]
                            },
                            {
                                title: "9. 分数の 引き算",
                                subUnits: [
                                    { title: "(1) 分数の 引き算", content: "<h4>分子だけを ひこう</h4><p>3/4 － 1/4 ＝ 2/4<br>1 － 1/3 ＝ 2/3 (1は 3/3 だね！)</p>" }
                                ]
                            },
                            {
                                title: "10. □を つかった 式",
                                subUnits: [
                                    { title: "(1) ぎゃくの 計算（逆算）", content: "<h4>□ を もとめる 方法</h4><p>・3 ＋ □ ＝ 8 ➔ □ ＝ 8 <b>－</b> 3 ＝ 5<br>・□ － 4 ＝ 6 ➔ □ ＝ 6 <b>＋</b> 4 ＝ 10<br>・□ × 3 ＝ 12 ➔ □ ＝ 12 <b>÷</b> 3 ＝ 4</p>" }
                                ]
                            },
                            {
                                title: "11. そろばん",
                                subUnits: [
                                    { title: "(1) 玉の うごかし方", content: "<h4>親指と 人差し指</h4><p>・<b>一だま</b>：親指（おやゆび）で 上にあげると ＋1。<br>・<b>五だま</b>：人差し指で 下におろすと ＋5。</p>" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "2 <ruby>図形<rt>ずけい</rt></ruby>",
                        units: [
                            {
                                title: "1. <ruby>三角形<rt>さんかくけい</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) 二等辺三角形と 正三角形",
                                        content: `
                                            <h4>二等辺三角形（にとうへんさんかくけい）</h4>
                                            <p>2つの 辺の 長さが 等しい 三角形です。</p>
                                            <div class="shape-demo">
                                                <svg width="100" height="100" viewBox="0 0 100 100">
                                                    <polygon points="50,10 20,90 80,90" fill="none" stroke="#3498db" stroke-width="3"/>
                                                    <!-- 左辺のしるし (中心 35,50, 垂直になるよう約20度回転) -->
                                                    <line x1="30" y1="50" x2="40" y2="50" stroke="#e74c3c" stroke-width="2" transform="rotate(20.5 35 50)"/>
                                                    <!-- 右辺のしるし (中心 65,50, 垂直になるよう約-20度回転) -->
                                                    <line x1="60" y1="50" x2="70" y2="50" stroke="#e74c3c" stroke-width="2" transform="rotate(-20.5 65 50)"/>
                                                </svg>
                                                <p>赤いしるしの 辺の長さが 同じだよ！</p>
                                            </div>
                                            <h4>正三角形（せいさんかくけい）</h4>
                                            <p>3つの 辺の 長さが すべて 等しい 三角形です。</p>
                                            <div class="shape-demo">
                                                <svg width="100" height="100" viewBox="0 0 100 100">
                                                    <polygon points="50,15 10,85 90,85" fill="none" stroke="#2ecc71" stroke-width="3"/>
                                                    <!-- 左辺 (中心 30,50, 約30度回転) -->
                                                    <line x1="25" y1="50" x2="35" y2="50" stroke="#e74c3c" stroke-width="2" transform="rotate(30 30 50)"/>
                                                    <!-- 右辺 (中心 70,50, 約-30度回転) -->
                                                    <line x1="65" y1="50" x2="75" y2="50" stroke="#e74c3c" stroke-width="2" transform="rotate(-30 70 50)"/>
                                                    <!-- 底辺 (中心 50,85, 90度回転で垂直に) -->
                                                    <line x1="45" y1="85" x2="55" y2="85" stroke="#e74c3c" stroke-width="2" transform="rotate(90 50 85)"/>
                                                </svg>
                                                <p>ぜんぶの 辺の長さが 同じだね！</p>
                                            </div>
                                        `
                                    },
                                    {
                                        title: "(2) コンパスとは",
                                        content: `
                                            <h4>コンパスの つかいかた</h4>
                                            <p>コンパスは、<b>円を かいたり</b>、<b>長さを はかったり</b> するための どうぐです。</p>
                                            <div class="point-box">
                                                <ul>
                                                    <li>中心（ちゅうしん）を しっかり おさえる</li>
                                                    <li>上の つまみを もって、くるっと まわす</li>
                                                    <li>半径（はんけい）の 長さを かえないように 気をつける</li>
                                                </ul>
                                            </div>
                                        `
                                    },
                                    {
                                        title: "(3) 三角形の 作図（さくず）",
                                        content: `
                                            <h4>コンパスを つかった かきかた</h4>
                                            <h5>① 底辺（ていへん）を 利用する方法</h5>
                                            <p>線分イウがあるとき、点イを中心としてコンパスで弧（こ）をかき、同じ半径で点ウから弧をかいて、交わった点アと結びます。</p>
                                            <div class="shape-demo">
                                                <svg width="200" height="120" viewBox="0 0 200 120">
                                                    <line x1="50" y1="100" x2="150" y2="100" stroke="#333" stroke-width="2"/>
                                                    <path d="M 120 20 A 80 80 0 0 0 40 80" fill="none" stroke="#3498db" stroke-dasharray="4"/>
                                                    <path d="M 80 20 A 80 80 0 0 1 160 80" fill="none" stroke="#e74c3c" stroke-dasharray="4"/>
                                                    <circle cx="100" cy="30.7" r="3" fill="#333"/>
                                                    <text x="95" y="25" font-size="12">ア</text>
                                                    <text x="40" y="115" font-size="12">イ</text>
                                                    <text x="150" y="115" font-size="12">ウ</text>
                                                </svg>
                                            </div>
                                            <h5>② 円を 利用する方法</h5>
                                            <p>円の半径は どこでも 等しい という 性質をつかいます。円の 中心と 円のまわりの 2点を むすぶと 二等辺三角形になります。</p>
                                            <div class="point-box">
                                                二等辺三角形の 底辺も 他の2辺と 同じ長さにすると、<b>正三角形</b>に なるよ！
                                            </div>
                                        `
                                    },
                                    {
                                        title: "(4) しきつめ模様（もよう）",
                                        content: `
                                            <h4>三角形を ならべてみよう</h4>
                                            <p>同じ かたちの 三角形を すきまなく ならべると、きれいな もようが できるよ。</p>
                                            <div class="shape-demo">
                                                <svg width="200" height="100" viewBox="0 0 200 100">
                                                    <polygon points="20,80 50,20 80,80" fill="#3498db" stroke="white" stroke-width="1"/>
                                                    <polygon points="50,20 80,80 110,20" fill="#3498db" stroke="white" stroke-width="1"/>
                                                    <polygon points="80,80 110,20 140,80" fill="#3498db" stroke="white" stroke-width="1"/>
                                                    <polygon points="110,20 140,80 170,20" fill="#3498db" stroke="white" stroke-width="1"/>
                                                </svg>
                                            </div>
                                        `
                                    },
                                    {
                                        title: "(5) 角（かく）の 大きさ",
                                        content: `
                                            <h4>かどを かさねてみよう</h4>
                                            <p>二等辺三角形や 正三角形の 角を 切り取って かさねてみると、ぴったり 重なる 角があるよ。</p>
                                            <div class="point-box">
                                                <ul>
                                                    <li><b>二等辺三角形</b>：下の 2つの角が 同じ大きさ。</li>
                                                    <li><b>正三角形</b>：3つの角が ぜんぶ 同じ大きさ。</li>
                                                </ul>
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "2. <ruby>円<rt>えん</rt></ruby>と<ruby>球<rt>きゅう</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) 円の 中心・半径・直径",
                                        content: `
                                            <h4>円の 各部の なまえ</h4>
                                            <p>円の まんなかの点を <b>中心（ちゅうしん）</b> といいます。</p>
                                            <p>中心から 円のまわりまで ひいた 直線を <b>半径（はんけい）</b> といいます。</p>
                                            <p>中心を とおって、円の まわりから まわりまで ひいた 直線を <b>直径（ちょっけい）</b> といいます。</p>
                                            <div class="shape-demo">
                                                <svg width="150" height="150" viewBox="0 0 150 150">
                                                    <circle cx="75" cy="75" r="60" fill="none" stroke="#333" stroke-width="2"/>
                                                    <circle cx="75" cy="75" r="3" fill="#e74c3c"/>
                                                    <line x1="75" y1="75" x2="135" y2="75" stroke="#3498db" stroke-width="2"/>
                                                    <line x1="15" y1="75" x2="135" y2="75" stroke="#2ecc71" stroke-width="2" stroke-dasharray="4"/>
                                                    <text x="70" y="70" font-size="10" fill="#e74c3c">中心</text>
                                                    <text x="90" y="90" font-size="10" fill="#3498db">半径</text>
                                                    <text x="40" y="70" font-size="10" fill="#2ecc71">直径</text>
                                                </svg>
                                            </div>
                                            <div class="point-box">
                                                直径は、半径の <b>2倍</b> の 長さだよ！
                                            </div>
                                        `
                                    },
                                    {
                                        title: "(2) 球（きゅう）の せいしつ",
                                        content: `
                                            <h4>どこから 見ても 円に見える形</h4>
                                            <p>ボールのような 形を <b>球（きゅう）</b> といいます。</p>
                                            <p>球を まっすぐな 平面（へいめん）で 切ると、切り口は 必ず <b>円</b> になります。</p>
                                            <div class="point-box">
                                                球を ちょうど まんなかで 切ると、切り口の円が いちばん 大きくなります。
                                            </div>
                                            <h4>半球（はんきゅう）</h4>
                                            <p>球を まんなかで 半分に 切った 形を <b>半球</b> といいます。</p>
                                            <h4>ボールの 直径（ちょっけい）</h4>
                                            <p>ボールの 直径を はかるには、2つの はこなどで はさんで、その あいだの 長さを はかります。</p>
                                            <div class="shape-demo">
                                                <svg width="200" height="100" viewBox="0 0 200 100">
                                                    <!-- Box 1 -->
                                                    <rect x="30" y="20" width="30" height="70" fill="#f1c40f" stroke="#333" stroke-width="2"/>
                                                    <!-- Ball -->
                                                    <circle cx="100" cy="55" r="35" fill="#3498db" opacity="0.8"/>
                                                    <circle cx="100" cy="55" r="35" fill="none" stroke="#2980b9" stroke-width="2"/>
                                                    <!-- Box 2 -->
                                                    <rect x="140" y="20" width="30" height="70" fill="#f1c40f" stroke="#333" stroke-width="2"/>
                                                    <!-- Dimension line -->
                                                    <line x1="60" y1="90" x2="140" y2="90" stroke="#e74c3c" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
                                                    <text x="85" y="85" font-size="12" fill="#e74c3c">直径</text>
                                                    <defs>
                                                        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#e74c3c" />
                                                        </marker>
                                                    </defs>
                                                </svg>
                                            </div>
                                        `
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>",
                        units: [
                            {
                                title: "1. <ruby>長<rt>なが</rt></ruby>さ（km）",
                                subUnits: [
                                    {
                                        title: "(1) 1km（キロメートル）の 長さ",
                                        content: `
                                            <h4>1km ＝ 1000m</h4>
                                            <p>100mを 10こ あつめた 長さです。</p>
                                            <div class="point-box">
                                                学校（がっこう）から 1kmの ところは どこかな？ 通学路（つうがくろ）などで 考えてみよう。<br>
                                                運動場（うんどうじょう）の <b>200mトラックを 5しゅう</b> すると 1kmだよ！
                                            </div>
                                            <div class="shape-demo">
                                                <svg width="240" height="60" viewBox="0 0 240 60">
                                                    <rect x="10" y="25" width="220" height="10" fill="#eee" rx="5"/>
                                                    <rect x="10" y="25" width="44" height="10" fill="#3498db" rx="5"/>
                                                    <text x="15" y="20" font-size="10">100m</text>
                                                    <line x1="10" y1="45" x2="230" y2="45" stroke="#333" stroke-width="2" marker-start="url(#arr)" marker-end="url(#arr)"/>
                                                    <text x="100" y="55" font-size="12">1km (1000m)</text>
                                                    <defs>
                                                        <marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#333" />
                                                        </marker>
                                                    </defs>
                                                </svg>
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "2. <ruby>重<rt>おも</rt></ruby>さ（g, kg, t）",
                                subUnits: [
                                    {
                                        title: "(1) グラム(g)と キログラム(kg)",
                                        content: `
                                            <h4>重さの 単位</h4>
                                            <p>・1円玉 1この 重さが 約<b>1g</b> です。<br>・1000g ＝ <b>1kg</b> です。</p>
                                            <div class="point-box">
                                                <b>はかりの つかいかた</b><br>
                                                ・めもりを 正面（しょうめん）から 見る。<br>
                                                ・はじめに 針（はり）が 「0」に あっているか たしかめる。
                                            </div>
                                            <h4>「正味（しょうみ）」の 重さ</h4>
                                            <p>「正味」とは、<b>中身（なかみ）だけ</b>の 重さのことです。</p>
                                            <div class="point-box">
                                                たとえば、クッキーの 缶（かん）づめなら、<b>クッキーだけの 重さ</b> が 「正味」だよ。<br>
                                                中身を知りたいときは、全体の重さから 容器（かん）の重さを ひけばいいね！
                                            </div>
                                            <div class="calc-demo">
                                                正味の重さ ＝ 全体の重さ － 容器の重さ
                                            </div>
                                        `
                                    },
                                    {
                                        title: "(2) トン(t)",
                                        content: `
                                            <h4>大きな 重さを あらわす 単位</h4>
                                            <p>トラックや ゾウの 重さなどには <b>t（トン）</b> をつかいます。</p>
                                            <div class="point-box">
                                                1t ＝ <b>1000kg</b>
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "3. <ruby>単位<rt>たんい</rt></ruby>の しくみ",
                                subUnits: [
                                    {
                                        title: "(1) 接頭語（キロ・ミリ・センチ）",
                                        content: `
                                            <h4>単位の 前につく しるし</h4>
                                            <p>「キロ」や「ミリ」には、決まった いみが あります。</p>
                                            <table class="data-table">
                                                <tr><th>しるし</th><th>なまえ</th><th>いみ</th></tr>
                                                <tr><td><b>k</b></td><td>キロ</td><td><b>1000倍</b></td></tr>
                                                <tr><td><b>m</b></td><td>ミリ</td><td><b>1/1000</b> (1000分の1)</td></tr>
                                                <tr><td><b>c</b></td><td>センチ</td><td><b>1/100</b> (100分の1)</td></tr>
                                            </table>
                                            <div class="point-box">
                                                <b>1000倍の なかまたち</b><br>
                                                ・1<b>k</b>m ＝ 1000m<br>
                                                ・1<b>k</b>g ＝ 1000g<br><br>
                                                <b>1000分の1（あつまると1）の なかまたち</b><br>
                                                ・1000<b>m</b>m ＝ 1m<br>
                                                ・1000<b>m</b>L ＝ 1L
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "4. <ruby>時刻<rt>じこく</rt></ruby>と <ruby>時間<rt>じかん</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) 1秒（びょう）",
                                        content: `
                                            <h4>短い 時間の 単位</h4>
                                            <p>1分よりも 短い時間を <b>秒（びょう）</b> で あらわします。</p>
                                            <div class="point-box">
                                                1分 ＝ <b>60秒</b>
                                            </div>
                                            <div class="shape-demo">
                                                <div class="simple-clock">
                                                    <!-- Numbers -->
                                                    <div class="num n12">12</div>
                                                    <div class="num n1">1</div>
                                                    <div class="num n2">2</div>
                                                    <div class="num n3">3</div>
                                                    <div class="num n4">4</div>
                                                    <div class="num n5">5</div>
                                                    <div class="num n6">6</div>
                                                    <div class="num n7">7</div>
                                                    <div class="num n8">8</div>
                                                    <div class="num n9">9</div>
                                                    <div class="num n10">10</div>
                                                    <div class="num n11">11</div>
                                                    
                                                    <!-- Hands -->
                                                    <div class="hand long" style="transform: translateX(-50%) rotate(30deg); background: #ccc;"></div>
                                                    <div class="hand short" style="transform: translateX(-50%) rotate(0deg);"></div>
                                                    <div class="hand" style="width:2px; height:65px; background: #e74c3c; transform: translateX(-50%) rotate(180deg); bottom: 50%; left: 50%; position: absolute; transform-origin: bottom center;"></div>
                                                </div>
                                                <p>いちばん はやく 動く 針（はり）が 秒針（びょうしん）だよ！</p>
                                            </div>
                                        `
                                    },
                                    {
                                        title: "(2) 何時 何分 何秒",
                                        content: `
                                            <h4>時刻（じこく）の よみかた</h4>
                                            <p>秒針の さしている めもりを よみます。</p>
                                            <div class="point-box">
                                                ストップウォッチで はかってみよう。<br>
                                                1秒は 「ト・ン」 くらいの 短い 時間だね。
                                            </div>
                                        `
                                    },
                                    {
                                        title: "(3) かかる 時間（数直線）",
                                        content: `
                                            <h4>数直線（すうちょくせん）で 考えよう</h4>
                                            <p>「9時40分から 10時15分まで」は 何分間かな？</p>
                                            <div class="shape-demo">
                                                <svg width="240" height="80" viewBox="0 0 240 80">
                                                    <line x1="20" y1="40" x2="220" y2="40" stroke="#333" stroke-width="2"/>
                                                    <!-- Tick marks -->
                                                    <line x1="20" y1="35" x2="20" y2="45" stroke="#333" stroke-width="2"/>
                                                    <line x1="100" y1="35" x2="100" y2="45" stroke="#333" stroke-width="2"/>
                                                    <line x1="200" y1="35" x2="200" y2="45" stroke="#333" stroke-width="2"/>
                                                    <text x="5" y="60" font-size="10">9:40</text>
                                                    <text x="85" y="60" font-size="10">10:00</text>
                                                    <text x="185" y="60" font-size="10">10:15</text>
                                                    
                                                    <!-- Arcs -->
                                                    <path d="M 20 30 Q 60 10 100 30" fill="none" stroke="#e74c3c" stroke-width="2"/>
                                                    <text x="50" y="20" font-size="10" fill="#e74c3c">20分</text>
                                                    <path d="M 100 30 Q 150 10 200 30" fill="none" stroke="#e74c3c" stroke-width="2"/>
                                                    <text x="140" y="20" font-size="10" fill="#e74c3c">15分</text>
                                                </svg>
                                                <p>20分 ＋ 15分 ＝ <b>35分間</b> だね！</p>
                                            </div>
                                        `
                                    }
                                ]
                            }
                        ]
                    },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [] }
                ]
            },
            e4: { name: "小4", categories: [{ name: "1 数と式", units: [] }, { name: "2 図形", units: [] }, { name: "3 測定と関数", units: [] }, { name: "4 データの活用", units: [] }] },
            e5: { name: "小5", categories: [{ name: "1 数と式", units: [] }, { name: "2 図形", units: [] }, { name: "3 測定と関数", units: [] }, { name: "4 データの活用", units: [] }] },
            e6: { name: "小6", categories: [{ name: "1 数と式", units: [] }, { name: "2 図形", units: [] }, { name: "3 測定と関数", units: [] }, { name: "4 データの活用", units: [] }] },
            j1: { name: "中1", categories: [{ name: "1 数と式", units: [] }, { name: "2 図形", units: [] }, { name: "3 測定と関数", units: [] }, { name: "4 データの活用", units: [] }] },
            j2: { name: "中2", categories: [{ name: "1 数と式", units: [] }, { name: "2 図形", units: [] }, { name: "3 測定と関数", units: [] }, { name: "4 データの活用", units: [] }] },
            j3: { name: "中3", categories: [{ name: "1 数と式", units: [] }, { name: "2 図形", units: [] }, { name: "3 測定と関数", units: [] }, { name: "4 データの活用", units: [] }] }
        }
    },
    japanese: { name: "<ruby>国語<rt>こくご</rt></ruby>", grades: {} },
    science: { name: "<ruby>理科<rt>りか</rt></ruby>", grades: {} },
    social: { name: "<ruby>社会<rt>しゃかい</rt></ruby>", grades: {} },
    english: { name: "<ruby>英語<rt>えいご</rt></ruby>", grades: {} }
};

// DOM要素の取得
const homeView = document.getElementById('home-view');
const gradeView = document.getElementById('grade-view');
const categoryView = document.getElementById('category-view');
const unitView = document.getElementById('unit-view');
const subUnitView = document.getElementById('sub-unit-view');
const contentView = document.getElementById('content-view');

const categoryList = document.getElementById('category-list');
const unitList = document.getElementById('unit-list');
const subUnitList = document.getElementById('sub-unit-list');

const selectedGradeName = document.getElementById('selected-grade-name');
const selectedCategoryName = document.getElementById('selected-category-name');
const selectedUnitName = document.getElementById('selected-unit-name');

const contentTitle = document.getElementById('content-title');
const contentBody = document.getElementById('content-body');
const breadcrumb = document.getElementById('breadcrumb');
const homeBtn = document.getElementById('home-btn');

const backToHomeBtn = document.getElementById('back-to-home-btn');
const backToGradeBtn = document.getElementById('back-to-grade-btn');
const backToCategoryBtn = document.getElementById('back-to-category-btn');
const backToUnitBtn = document.getElementById('back-to-unit-btn');
const backToSubUnitBtn = document.getElementById('back-to-sub-unit-btn');

let currentSubject = 'math';
let currentGrade = '';
let currentCategoryIndex = -1;
let currentUnitIndex = -1;

const rubyHome = '<ruby>ホーム<rt>ほーむ</rt></ruby>';

function updateBreadcrumb(pathItems) {
    breadcrumb.innerHTML = '';
    pathItems.forEach((item, index) => {
        const span = document.createElement('span');
        span.innerHTML = item.label;
        if (item.action && index < pathItems.length - 1) {
            span.classList.add('breadcrumb-link');
            span.onclick = item.action;
        }
        breadcrumb.appendChild(span);
        if (index < pathItems.length - 1) {
            const separator = document.createElement('span');
            separator.innerText = ' > ';
            separator.className = 'breadcrumb-separator';
            breadcrumb.appendChild(separator);
        }
    });
}

function showHome() {
    updateBreadcrumb([{ label: rubyHome }]);
    showView('home-view');
}

function showGrades() {
    const subjectData = studyData[currentSubject];
    updateBreadcrumb([{ label: rubyHome, action: showHome }, { label: subjectData.name }]);
    showView('grade-view');
}

function showCategories() {
    const subjectData = studyData[currentSubject];
    const gradeData = subjectData.grades[currentGrade];
    selectedGradeName.innerHTML = `${subjectData.name} (${gradeData.name})`;
    updateBreadcrumb([{ label: rubyHome, action: showHome }, { label: subjectData.name, action: showGrades }, { label: gradeData.name }]);
    categoryList.innerHTML = '';
    gradeData.categories.forEach((cat, index) => {
        const div = document.createElement('div');
        div.className = 'material-item';
        div.innerHTML = `<span>${cat.name}</span> <span>➔</span>`;
        div.onclick = () => showUnits(index);
        categoryList.appendChild(div);
    });
    showView('category-view');
}

function showUnits(index) {
    currentCategoryIndex = index;
    const subjectData = studyData[currentSubject];
    const gradeData = subjectData.grades[currentGrade];
    const category = gradeData.categories[index];
    selectedCategoryName.innerHTML = category.name;
    updateBreadcrumb([{ label: rubyHome, action: showHome }, { label: subjectData.name, action: showGrades }, { label: gradeData.name, action: showCategories }, { label: category.name }]);
    unitList.innerHTML = '';
    category.units.forEach((unit, uIdx) => {
        const div = document.createElement('div');
        div.className = 'material-item';
        div.innerHTML = `<span>${unit.title}</span> <span>➔</span>`;
        div.onclick = () => showSubUnits(uIdx);
        unitList.appendChild(div);
    });
    showView('unit-view');
}

function showSubUnits(uIdx) {
    currentUnitIndex = uIdx;
    const subjectData = studyData[currentSubject];
    const gradeData = subjectData.grades[currentGrade];
    const category = gradeData.categories[currentCategoryIndex];
    const unit = category.units[uIdx];
    selectedUnitName.innerHTML = unit.title;
    updateBreadcrumb([{ label: rubyHome, action: showHome }, { label: subjectData.name, action: showGrades }, { label: gradeData.name, action: showCategories }, { label: category.name, action: () => showUnits(currentCategoryIndex) }, { label: unit.title }]);
    subUnitList.innerHTML = '';
    unit.subUnits.forEach(sub => {
        const div = document.createElement('div');
        div.className = 'material-item';
        div.innerHTML = `<span>${sub.title}</span> <span>➔</span>`;
        div.onclick = () => showContent(sub);
        subUnitList.appendChild(div);
    });
    showView('sub-unit-view');
}

function showContent(sub) {
    contentTitle.innerHTML = sub.title;
    contentBody.innerHTML = sub.content;
    const subjectData = studyData[currentSubject];
    updateBreadcrumb([{ label: rubyHome, action: showHome }, { label: subjectData.name, action: showGrades }, { label: subjectData.grades[currentGrade].name, action: showCategories }, { label: subjectData.grades[currentGrade].categories[currentCategoryIndex].name, action: () => showUnits(currentCategoryIndex) }, { label: subjectData.grades[currentGrade].categories[currentCategoryIndex].units[currentUnitIndex].title, action: () => showSubUnits(currentUnitIndex) }, { label: sub.title }]);
    showView('content-view');
}

function showView(viewId) {
    [homeView, gradeView, categoryView, unitView, subUnitView, contentView].forEach(view => { if (view) view.classList.add('hidden'); });
    document.getElementById(viewId).classList.remove('hidden');
    window.scrollTo(0, 0);
}

homeBtn.onclick = showHome;
document.querySelectorAll('.subject-card').forEach(card => { card.onclick = () => { currentSubject = card.dataset.subject; showGrades(); }; });
document.querySelectorAll('.grade-card').forEach(card => { card.onclick = () => { currentGrade = card.dataset.grade; showCategories(); }; });
backToHomeBtn.onclick = showHome;
backToGradeBtn.onclick = showGrades;
backToCategoryBtn.onclick = showCategories;
backToUnitBtn.onclick = () => showUnits(currentCategoryIndex);
backToSubUnitBtn.onclick = () => showSubUnits(currentUnitIndex);
