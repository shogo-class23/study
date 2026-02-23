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
                                    { title: "(1) 玉の うごかし方", content: "<h4>親指 and 人差し指</h4><p>・<b>一だま</b>：親指（おやゆび）で 上にあげると ＋1。<br>・<b>五だま</b>：人差し指で 下におろすと ＋5。</p>" }
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
                                                <ul>
                                                    <li>はじめに 針（はり）が 「0」に あっているか たしかめる。</li>
                                                    <li>めもりを <b>正面（しょうめん）</b> から 見る（ななめから見ると 正しくよめないよ）。</li>
                                                </ul>
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
                                        title: "(2) はかりの 目もり",
                                        content: `
                                            <h4>目もりの よみかた</h4>
                                            <p>はかりを つかうときは、まず <b>1めもりが 何gか</b> を たしかめましょう。</p>
                                            <div class="point-box">
                                                <ul>
                                                    <li><b>秤量（ひょうりょう）</b>：その はかりで はかれる いちばん 大きな 重さ。</li>
                                                    <li><b>最小目盛り（感量）</b>：いちばん 小さい 1めもりが あらわす 重さ。</li>
                                                </ul>
                                            </div>
                                            <div class="shape-demo">
                                                <svg width="150" height="100" viewBox="0 0 150 100">
                                                    <!-- 目盛り板のイメージ -->
                                                    <path d="M 20 80 A 60 60 0 0 1 130 80" fill="none" stroke="#333" stroke-width="2"/>
                                                    <line x1="25" y1="75" x2="35" y2="70" stroke="#333" stroke-width="2"/>
                                                    <text x="15" y="95" font-size="10">0g</text>
                                                    <line x1="125" y1="75" x2="115" y2="70" stroke="#333" stroke-width="2"/>
                                                    <text x="115" y="95" font-size="10">1kg</text>
                                                    <!-- 針 -->
                                                    <line x1="75" y1="80" x2="100" y2="40" stroke="#e74c3c" stroke-width="3" marker-end="url(#tip)"/>
                                                    <defs>
                                                        <marker id="tip" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                                                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#e74c3c" />
                                                        </marker>
                                                    </defs>
                                                </svg>
                                                <p>このはかりは 1kgまで はかれて、<br>1めもりは 10gだね！</p>
                                            </div>
                                        `
                                    },
                                    {
                                        title: "(3) トン(t)",
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
                    {
                        name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>",
                        units: [
                            {
                                title: "1. 表（ひょう）に せいりする",
                                subUnits: [
                                    {
                                        title: "(1) 分類（ぶんるい）の かんてん",
                                        content: `
                                            <h4>整理（せいり）の しかた</h4>
                                            <p>資料（しりょう）を 分類するときは、つぎのような 観点（かんてん）で 分けましょう。</p>
                                            <ul class="pos-list">
                                                <li>・日時（いつ）</li>
                                                <li>・場所（どこで）</li>
                                                <li>・しゅるい</li>
                                            </ul>
                                            <div class="point-box">
                                                <b>「正（せい）」の 字を つかおう</b><br>
                                                ・数えもれや、かさなりが ないように、しるしを つけながら 数えます。<br>
                                                ・さいごに、ぜんぶを たした <b>合計（ごうけい）</b> が、もとの資料の数と おなじか たしかめよう。
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "2. 棒（ぼう）グラフ",
                                subUnits: [
                                    {
                                        title: "(1) 棒グラフの 特徴（とくちょう）",
                                        content: `
                                            <h4>一目で 大きさが わかる</h4>
                                            <p>数量（すうりょう）の 大きさや ちがいを くらべるとき、棒（ぼう）の ながさで あらわすと わかりやすくなります。</p>
                                            <div class="shape-demo">
                                                <svg width="240" height="150" viewBox="0 0 240 150">
                                                    <!-- Axis -->
                                                    <line x1="40" y1="120" x2="200" y2="120" stroke="#333" stroke-width="2"/>
                                                    <line x1="40" y1="120" x2="40" y2="20" stroke="#333" stroke-width="2"/>
                                                    <!-- Bars -->
                                                    <rect x="60" y="40" width="20" height="80" fill="#3498db"/>
                                                    <rect x="100" y="70" width="20" height="50" fill="#2ecc71"/>
                                                    <rect x="140" y="30" width="20" height="90" fill="#e74c3c"/>
                                                    <text x="60" y="135" font-size="10">リンゴ</text>
                                                    <text x="100" y="135" font-size="10">バナナ</text>
                                                    <text x="140" y="135" font-size="10">イチゴ</text>
                                                    <text x="15" y="115" font-size="10">0</text>
                                                    <text x="15" y="45" font-size="10">10</text>
                                                </svg>
                                                <p>いちばん 多いのが イチゴ、少ないのが バナナだと すぐに わかるね！</p>
                                            </div>
                                        `
                                    },
                                    {
                                        title: "(2) 目（め）もりの 工夫（くふう）",
                                        content: `
                                            <h4>最小目盛り（さいしょうめもり）の きめかた</h4>
                                            <p>あらわす 数によって、1めもりを 何に するか 選びます。</p>
                                            <ul class="pos-list">
                                                <li>・1めもり ＝ <b>1</b> (ちいさな 数)</li>
                                                <li>・1めもり ＝ <b>2</b> や <b>5</b></li>
                                                <li>・1めもり ＝ <b>10</b> や <b>100</b> (大きな 数)</li>
                                            </ul>
                                            <div class="point-box">
                                                グラフを かくときは、表題（タイトル）や 単位（たんい）を かくのを わすれないように しよう！
                                            </div>
                                        `
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            e4: {
                name: "小4",
                categories: [
                    {
                        name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>",
                        units: [
                            {
                                title: "1. 大きな数（億・兆）",
                                subUnits: [
                                    { title: "(1) 億と 兆の 単位", content: "<h4>万の 次は 億、その次は 兆</h4><p>1000万の 10倍が 1億、1000億の 10倍が 1兆です。</p>" },
                                    { title: "(2) 3けたごとの 区切り", content: "<h4>読みやすくする工夫</h4><p>大きな数は 3けたごとに カンマ（ , ）を つけます。<br>例：1,234,567,890</p>" },
                                    { title: "(3) 10進法と 0〜9 の数字", content: "<h4>数の しくみ</h4><p>数は 0,1,2,3,4,5,6,7,8,9 の 10この 数字だけで できています。これ以外の 記号は つかいません。</p>" }
                                ]
                            },
                            {
                                title: "2. 概数（がいすう）と 見積もり",
                                subUnits: [
                                    { title: "(1) 四捨五入（ししゃごにゅう）", content: "<h4>約の数に する</h4><p>4までは 切り捨て、5からは 切り上げます。</p>" },
                                    { title: "(2) 計算の 見積もり", content: "<h4>だいたいの 答え</h4><p>四則計算を する前に、概数（がいすう）を つかって 答えを 予想します。</p>" }
                                ]
                            },
                            {
                                title: "3. わり算（わりざん）の 筆算",
                                subUnits: [
                                    { title: "(1) 1けたで わる わり算", content: "<h4>（2〜3けた）÷（1けた）</h4><p>例：84 ÷ 4、144 ÷ 6</p>" },
                                    { title: "(2) 2けたで わる わり算", content: "<h4>（2〜3けた）÷（2けた）</h4><p>例：96 ÷ 12、156 ÷ 13</p>" }
                                ]
                            },
                            {
                                title: "4. わり算の きまりと 余り",
                                subUnits: [
                                    { title: "(1) 余（あま）りの 計算", content: "<h4>あまりの ルール</h4><div class='point-box'><b>余りは、わる数よりも 必ず 小さくなります。</b></div>" },
                                    { title: "(2) わり算の たしかめ（検算）", content: "<h4>正しいか チェックする 式</h4><div class='calc-demo'><b>（わられる数）＝（わる数）×（商）＋（あまり）</b></div>" },
                                    { title: "(3) わり算の 性質", content: "<h4>商（しょう）は かわらない</h4><p>わられる数と わる数の 両方に、<b>同じ数を かけても 割っても</b>、商は かわりません。<br>例：150 ÷ 30 ＝ 15 ÷ 3</p>" }
                                ]
                            },
                            {
                                title: "5. 小数の 足し算（たしざん）",
                                subUnits: [
                                    { title: "(1) 小数の しくみ（1/100, 1/1000）", content: "<h4>もっと 細かい 小数</h4><p>0.01（1/100）や 0.001（1/1000）の 位を 学習します。</p>" },
                                    { title: "(2) 小数の 足し算", content: "<h4>小数点を そろえて</h4><p>例：1.25 ＋ 0.38<br>位を そろえて 筆算を します。</p>" }
                                ]
                            },
                            {
                                title: "6. 小数の 引き算（ひきざん）",
                                subUnits: [
                                    { title: "(1) 小数の 引き算", content: "<h4>小数点を そろえて</h4><p>例：2.4 － 1.15<br>ひけないときは 上の位から かりてきます。</p>" }
                                ]
                            },
                            {
                                title: "7. 小数のかけ算",
                                subUnits: [
                                    { title: "(1) 小数 × 整数（せいすう）", content: "<h4>小数点を あとで うつ</h4><p>例：1.2 × 3 ➔ 3.6<br>かけられる数が 小数の 計算です。</p>" },
                                    { title: "(2) 小数の 倍（ばい）", content: "<h4>10倍、100倍</h4><p>小数点が 右に うごきます。</p>" }
                                ]
                            },
                            {
                                title: "8. 小数のわり算",
                                subUnits: [
                                    { title: "(1) 小数 ÷ 整数（せいすう）", content: "<h4>小数点を 上に あげる</h4><p>例：7.2 ÷ 3 ➔ 2.4<br>わられる数が 小数の 計算です。</p>" }
                                ]
                            },
                            {
                                title: "9. 分数（ぶんすう）",
                                subUnits: [
                                    { title: "(1) 真分数・仮分数・帯分数", content: "<h4>分数の ななかま</h4><ul><li><b>真分数</b>：分子が 小さい</li><li><b>仮分数</b>：分子が 大きい</li><li><b>帯分数</b>：整数がついている</li></ul>" },
                                    { title: "(2) 大きさの 等しい 分数", content: "<h4>同じ 大きさ</h4><p>1/2 ＝ 2/4 ＝ 4/8</p>" }
                                ]
                            },
                            {
                                title: "10. 分数の 足し算",
                                subUnits: [
                                    { title: "(1) 分母が 同じ 足し算", content: "<h4>分子を たす</h4><p>例：2/5 ＋ 4/5 ＝ 6/5 ＝ 1と 1/5</p>" }
                                ]
                            },
                            {
                                title: "11. 分数の 引き算",
                                subUnits: [
                                    { title: "(1) 分母が 同じ 引き算", content: "<h4>分子を ひく</h4><p>例：1と 1/4 － 3/4 ＝ 5/4 － 3/4 ＝ 2/4</p>" }
                                ]
                            },
                            {
                                title: "12. 四則演算の きまりと 性質",
                                subUnits: [
                                    { title: "(1) 計算の じゅんばん", content: "<h4>ルール</h4><ol><li>( ) の 中</li><li>× ÷</li><li>＋ －</li></ol>" },
                                    { title: "(2) □ や ○ を つかった 式", content: "<h4>わからない 数</h4><p>35 ＋ □ ＝ 50 ➔ □ ＝ 15</p>" }
                                ]
                            },
                            {
                                title: "13. そろばん（足し算）",
                                subUnits: [
                                    { title: "(1) 兆・小数までの たし算", content: "<h4>位を そろえて</h4><p>1/100 の 位まで 正しく 計算しましょう。</p>" }
                                ]
                            },
                            {
                                title: "14. そろばん（引き算）",
                                subUnits: [
                                    { title: "(1) 兆・小数までの ひき算", content: "<h4>位を そろえて</h4><p>1/100 の 位まで 正しく 計算しましょう。</p>" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "2 <ruby>図形<rt>ずけい</rt></ruby>",
                        units: [
                            {
                                title: "1. 垂直（すいちょく）と 平行（へいこう）",
                                subUnits: [
                                    {
                                        title: "(1) 直角と 垂直",
                                        content: `<h4>直角に 交わる</h4><p>2本の 直線が 交わってできる 角が 直角のとき、その2つの 直線は <b>垂直</b> であるといいます。</p>
                                        <div class="shape-demo">
                                            <svg width="100" height="100" viewBox="0 0 100 100">
                                                <line x1="10" y1="50" x2="90" y2="50" stroke="#333" stroke-width="2"/>
                                                <line x1="50" y1="10" x2="50" y2="90" stroke="#333" stroke-width="2"/>
                                                <!-- Right angle mark -->
                                                <polyline points="50,40 60,40 60,50" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
                                            </svg>
                                        </div>`
                                    },
                                    {
                                        title: "(2) 平行な 直線",
                                        content: `<h4>どこまでいっても 交わらない</h4><p>1本の 直線に 垂直な 2本の 直線は <b>平行</b> であるといいます。</p>
                                        <div class="shape-demo">
                                            <svg width="120" height="100" viewBox="0 0 120 100">
                                                <line x1="10" y1="30" x2="110" y2="30" stroke="#3498db" stroke-width="3"/>
                                                <line x1="10" y1="70" x2="110" y2="70" stroke="#3498db" stroke-width="3"/>
                                                <!-- Parallel marks (arrows) -->
                                                <path d="M 55 25 L 65 30 L 55 35" fill="none" stroke="#e74c3c" stroke-width="2"/>
                                                <path d="M 55 65 L 65 70 L 55 75" fill="none" stroke="#e74c3c" stroke-width="2"/>
                                                <text x="40" y="55" font-size="10" fill="#999">はばが同じ</text>
                                            </svg>
                                        </div>`
                                    }
                                ]
                            },
                            {
                                title: "2. 四角形（しかくけい）",
                                subUnits: [
                                    {
                                        title: "(1) 台形（だいけい）",
                                        content: `<h4>1組の 辺が 平行</h4><p>向かい合った <b>一組（ひとくみ）の 辺が 平行</b> な 四角形を 台形といいます。</p>
                                        <div class="shape-demo">
                                            <svg width="120" height="80" viewBox="0 0 120 80">
                                                <polygon points="30,20 90,20 110,60 10,60" fill="none" stroke="#3498db" stroke-width="2"/>
                                                <!-- Parallel marks -->
                                                <path d="M 55 15 L 65 20 L 55 25" fill="none" stroke="#e74c3c" stroke-width="2"/>
                                                <path d="M 55 55 L 65 60 L 55 65" fill="none" stroke="#e74c3c" stroke-width="2"/>
                                            </svg>
                                        </div>`
                                    },
                                    {
                                        title: "(2) 平行四辺形（へいこうしへんけい）",
                                        content: `<h4>2組の 辺が 平行</h4><p>向かい合った <b>二組（ふたくみ）の 辺が 平行</b> な 四角形を 平行四辺形といいます。</p>
                                        <div class="shape-demo">
                                            <svg width="120" height="80" viewBox="0 0 120 80">
                                                <polygon points="40,20 110,20 80,60 10,60" fill="none" stroke="#2ecc71" stroke-width="2"/>
                                                <!-- Parallel marks (set 1) -->
                                                <path d="M 70 15 L 80 20 L 70 25" fill="none" stroke="#e74c3c" stroke-width="2"/>
                                                <path d="M 40 55 L 50 60 L 40 65" fill="none" stroke="#e74c3c" stroke-width="2"/>
                                                <!-- Parallel marks (set 2 - double arrow) -->
                                                <path d="M 20 35 L 30 40 L 20 45 M 25 35 L 35 40 L 25 45" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
                                                <path d="M 90 35 L 100 40 L 90 45 M 95 35 L 105 40 L 95 45" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
                                            </svg>
                                        </div>`
                                    },
                                    {
                                        title: "(3) ひし形",
                                        content: `<h4>4つの 辺が 等しい</h4><p><b>四つの 辺の 長さが すべて 等しい</b> 四角形を ひし形といいます。</p>
                                        <div class="shape-demo">
                                            <svg width="120" height="100" viewBox="0 0 120 100">
                                                <polygon points="60,10 100,50 60,90 20,50" fill="none" stroke="#9b59b6" stroke-width="2"/>
                                                <!-- Diagonal lines -->
                                                <line x1="60" y1="10" x2="60" y2="90" stroke="#ccc" stroke-width="1" stroke-dasharray="2"/>
                                                <line x1="20" y1="50" x2="100" y2="50" stroke="#ccc" stroke-width="1" stroke-dasharray="2"/>
                                                <!-- Right angle at center -->
                                                <polyline points="60,40 70,40 70,50" fill="none" stroke="#e74c3c" stroke-width="1"/>
                                            </svg>
                                        </div>`
                                    },
                                    {
                                        title: "(4) 台形の しきつめと 合体",
                                        content: `<h4>図形を あわせる</h4>
                                        <div class="shape-demo">
                                            <svg width="200" height="80" viewBox="0 0 200 80">
                                                <!-- Two trapezoids making a parallelogram -->
                                                <polygon points="10,50 40,20 80,20 100,50" fill="#3498db" opacity="0.5" stroke="#333"/>
                                                <polygon points="100,50 120,80 160,80 190,50" fill="#3498db" opacity="0.3" stroke="#333" stroke-dasharray="2" transform="rotate(180 145 50) translate(0 -30)"/>
                                                <text x="45" y="75" font-size="12">台形を2つあわせると...</text>
                                            </svg>
                                            <p>同じ 台形を 2つ 逆向きに あわせると、<br><b>平行四辺形</b> になるよ！</p>
                                        </div>`
                                    },
                                    {
                                        title: "(5) 角（かく）の 大きさの 発見",
                                        content: `<h4>直角（90度）を 基準にしよう</h4>
                                        <div class="shape-demo">
                                            <svg width="240" height="120" viewBox="0 0 240 120">
                                                <!-- 90 deg -->
                                                <path d="M 30 40 L 60 40 L 60 10" fill="none" stroke="#333" stroke-width="2"/>
                                                <rect x="50" y="30" width="10" height="10" fill="none" stroke="#e74c3c"/>
                                                <text x="35" y="55" font-size="10">90度</text>
                                                <!-- 180 deg -->
                                                <line x1="80" y1="40" x2="140" y2="40" stroke="#333" stroke-width="2"/>
                                                <path d="M 120 40 A 10 10 0 0 0 100 40" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
                                                <text x="95" y="55" font-size="10">180度</text>
                                                <!-- 360 deg -->
                                                <line x1="170" y1="40" x2="200" y2="40" stroke="#333" stroke-width="2"/>
                                                <circle cx="185" cy="40" r="10" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
                                                <text x="175" y="65" font-size="10">360度</text>
                                            </svg>
                                            <p>90度 ➔ 180度 ➔ 270度 ➔ 360度 と、<br>直角が ふえるごとに 角が 大きくなるね。</p>
                                        </div>`
                                    }
                                ]
                            },
                            {
                                title: "3. 立体（りったい）「箱のかたち」",
                                subUnits: [
                                    {
                                        title: "(1) 直方体と 立方体",
                                        content: `<h4>箱の 形</h4>
                                        <div class="shape-demo">
                                            <svg width="120" height="100" viewBox="0 0 120 100">
                                                <path d="M20,40 L70,40 L90,20 L40,20 Z" fill="none" stroke="#333" stroke-width="1.5"/>
                                                <path d="M20,40 L20,80 L70,80 L70,40" fill="none" stroke="#333" stroke-width="1.5"/>
                                                <path d="M70,80 L90,60 L90,20" fill="none" stroke="#333" stroke-width="1.5"/>
                                                <!-- Hidden lines -->
                                                <path d="M20,80 L40,60 L90,60 M40,60 L40,20" fill="none" stroke="#ccc" stroke-width="1" stroke-dasharray="2"/>
                                            </svg>
                                            <p>直方体の 見取り図（みとりず）</p>
                                        </div>`
                                    },
                                    {
                                        title: "(2) 展開図（てんかいず）",
                                        content: `<h4>切り開いた 図</h4>
                                        <div class="shape-demo">
                                            <svg width="150" height="120" viewBox="0 0 150 120">
                                                <!-- Standard T-shape net for a cube -->
                                                <rect x="50" y="10" width="25" height="25" fill="none" stroke="#333"/>
                                                <rect x="50" y="35" width="25" height="25" fill="none" stroke="#333"/>
                                                <rect x="50" y="60" width="25" height="25" fill="none" stroke="#333"/>
                                                <rect x="50" y="85" width="25" height="25" fill="none" stroke="#333"/>
                                                <rect x="25" y="35" width="25" height="25" fill="none" stroke="#333"/>
                                                <rect x="75" y="35" width="25" height="25" fill="none" stroke="#333"/>
                                            </svg>
                                            <p>立方体の 展開図のれい</p>
                                        </div>`
                                    }
                                ]
                            },
                            {
                                title: "4. 三角形の まとめ",
                                subUnits: [
                                    {
                                        title: "(1) 二等辺三角形と 正三角形",
                                        content: `<h4>三角形の しゅるい</h4>
                                        <div class="shape-demo">
                                            <div style="display:flex; gap:30px; align-items:flex-end;">
                                                <div style="text-align:center;">
                                                    <svg width="60" height="80"><polygon points="30,10 5,70 55,70" fill="none" stroke="#e74c3c" stroke-width="2"/></svg>
                                                    <p style="font-size:10px;">二等辺三角形</p>
                                                </div>
                                                <div style="text-align:center;">
                                                    <svg width="60" height="60"><polygon points="30,5 5,55 55,55" fill="none" stroke="#2ecc71" stroke-width="2"/></svg>
                                                    <p style="font-size:10px;">正三角形</p>
                                                </div>
                                            </div>
                                        </div>`
                                    }
                                ]
                            },
                            {
                                title: "5. 平面図形と 面積",
                                subUnits: [
                                    {
                                        title: "(1) たて・よこ・高さ",
                                        content: `<h4>長さの よびかた</h4>
                                        <div class="shape-demo">
                                            <div style="display:flex; gap:30px; align-items:flex-end; justify-content:center;">
                                                <div style="text-align:center;">
                                                    <svg width="100" height="80">
                                                        <rect x="15" y="15" width="60" height="40" fill="none" stroke="#333" stroke-width="2"/>
                                                        <line x1="10" y1="15" x2="10" y2="55" stroke="#e74c3c" stroke-width="2"/>
                                                        <text x="0" y="40" font-size="10" fill="#e74c3c" style="writing-mode: tb;">たて</text>
                                                        <line x1="15" y1="65" x2="75" y2="65" stroke="#3498db" stroke-width="2"/>
                                                        <text x="35" y="78" font-size="10" fill="#3498db">よこ</text>
                                                    </svg>
                                                    <p style="font-size:10px; margin-top:5px;">平面（長方形）</p>
                                                </div>
                                                <div style="text-align:center;">
                                                    <svg width="100" height="90">
                                                        <!-- Box edges -->
                                                        <path d="M15,40 L55,40 L75,25 L35,25 Z" fill="none" stroke="#333"/>
                                                        <path d="M15,40 L15,70 L55,70 L55,40" fill="none" stroke="#333"/>
                                                        <path d="M55,70 L75,55 L75,25" fill="none" stroke="#333"/>
                                                        <!-- Labels -->
                                                        <text x="25" y="82" font-size="10" fill="#3498db">よこ</text>
                                                        <text x="65" y="70" font-size="10" fill="#e74c3c">たて</text>
                                                        <text x="80" y="45" font-size="10" fill="#2ecc71">高さ</text>
                                                        <!-- Arrows/Lines for labels -->
                                                        <line x1="15" y1="75" x2="55" y2="75" stroke="#3498db" stroke-width="1"/>
                                                        <line x1="58" y1="72" x2="78" y2="57" stroke="#e74c3c" stroke-width="1"/>
                                                        <line x1="80" y1="25" x2="80" y2="55" stroke="#2ecc71" stroke-width="1"/>
                                                    </svg>
                                                    <p style="font-size:10px; margin-top:5px;">立体（箱）</p>
                                                </div>
                                            </div>
                                        </div>`
                                    },
                                    {
                                        title: "(2) 正方形と 長方形の 面積",
                                        content: `<h4>面積の 公式と 単位</h4>
                                        <div class="point-box">
                                            ・<b>長方形</b> ＝ たて × よこ<br>
                                            ・<b>正方形</b> ＝ 一辺 × 一辺
                                        </div>
                                        <div class="shape-demo">
                                            <svg width="120" height="80" viewBox="0 0 120 80">
                                                <rect x="10" y="10" width="60" height="40" fill="#eee" stroke="#ccc" stroke-width="0.5"/>
                                                <line x1="30" y1="10" x2="30" y2="50" stroke="#ccc"/>
                                                <line x1="50" y1="10" x2="50" y2="50" stroke="#ccc"/>
                                                <line x1="10" y1="30" x2="70" y2="30" stroke="#ccc"/>
                                                <rect x="10" y="10" width="60" height="40" fill="none" stroke="#333" stroke-width="2"/>
                                                <text x="75" y="35" font-size="12">2cm</text>
                                                <text x="35" y="65" font-size="12">3cm</text>
                                            </svg>
                                            <p>1cm<sup>2</sup> が 6こ分で <b>6cm<sup>2</sup></b> ！</p>
                                        </div>`
                                    },
                                    {
                                        title: "(3) 複雑な 形の 面積",
                                        content: `<h4>面積を もとめる 3つのくふう</h4>
                                        <div class="shape-demo">
                                            <div style="display:flex; flex-direction:column; gap:25px; align-items:center;">
                                                <div style="display:flex; gap:30px;">
                                                    <div style="text-align:center;">
                                                        <svg width="80" height="80">
                                                            <path d="M10,10 H35 V35 H65 V65 H10 Z" fill="#eee" stroke="#333"/>
                                                            <line x1="35" y1="35" x2="35" y2="65" stroke="#e74c3c" stroke-width="2" stroke-dasharray="3"/>
                                                        </svg>
                                                        <p style="font-size:10px; color:#e74c3c;">①たてに 分ける</p>
                                                    </div>
                                                    <div style="text-align:center;">
                                                        <svg width="80" height="80">
                                                            <path d="M10,10 H35 V35 H65 V65 H10 Z" fill="#eee" stroke="#333"/>
                                                            <line x1="10" y1="35" x2="35" y2="35" stroke="#e74c3c" stroke-width="2" stroke-dasharray="3"/>
                                                        </svg>
                                                        <p style="font-size:10px; color:#e74c3c;">②よこに 分ける</p>
                                                    </div>
                                                </div>
                                                <div style="text-align:center;">
                                                    <svg width="220" height="80" viewBox="0 0 220 80">
                                                        <!-- Complete Large Rectangle -->
                                                        <rect x="5" y="15" width="55" height="55" fill="#eee" stroke="#333" stroke-width="1"/>
                                                        <rect x="30" y="15" width="30" height="25" fill="none" stroke="#e74c3c" stroke-dasharray="2"/>
                                                        
                                                        <text x="65" y="45" font-size="16" fill="#333">➔</text>
                                                        
                                                        <!-- Large Rect - Small Rect -->
                                                        <rect x="90" y="15" width="55" height="55" fill="#eee" stroke="#333" stroke-width="1.5"/>
                                                        <text x="150" y="45" font-size="16" fill="#e74c3c">－</text>
                                                        <rect x="175" y="15" width="30" height="25" fill="#fff" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="2"/>
                                                        <text x="185" y="33" font-size="12" fill="#e74c3c">×</text>
                                                    </svg>
                                                    <p style="font-size:10px; color:#e74c3c;">③全体から ひく（大きな四角 － 小さな四角）</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="point-box">
                                            どの方法を使っても、答えは 同じになるよ！<br>
                                            自分が 計算しやすい 方法を えらぼう。
                                        </div>`
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>",
                        units: [
                            {
                                title: "1. 変わり方（三角形の ならび）",
                                subUnits: [
                                    {
                                        title: "(1) 三角形の数と 周りの長さ",
                                        content: `<h4>ならべて 規則（きそく）をみつけよう</h4>
                                        <p>1辺が 1cmの 正三角形を 横に ならべていきます。</p>
                                        <div class="shape-demo">
                                            <svg width="240" height="60" viewBox="0 0 240 60">
                                                <!-- 1 tri -->
                                                <polygon points="10,50 25,15 40,50" fill="none" stroke="#333" stroke-width="1.5"/>
                                                <text x="20" y="58" font-size="10">1こ</text>
                                                <!-- 2 tri -->
                                                <polygon points="60,50 75,15 90,50 75,15 60,50" fill="none" stroke="#333" stroke-width="1.5"/>
                                                <polygon points="75,15 90,50 105,15" fill="none" stroke="#333" stroke-width="1.5" stroke-dasharray="2"/>
                                                <text x="75" y="58" font-size="10">2こ</text>
                                                <!-- Arrow -->
                                                <text x="120" y="35" font-size="15">➔</text>
                                                <text x="140" y="35" font-size="12">規則性があるよ！</text>
                                            </svg>
                                        </div>
                                        <table class="data-table">
                                            <tr><th>三角形の数</th><td>1</td><td>2</td><td>3</td><td>4</td><td>...</td></tr>
                                            <tr><th>周りの長さ</th><td>3</td><td>4</td><td>5</td><td>6</td><td>...</td></tr>
                                        </table>
                                        <div class="point-box">
                                            <b>きまりの 式</b><br>
                                            （三角形の数） ＋ 2 ＝ （周りの長さ）
                                        </div>`
                                    }
                                ]
                            },
                            {
                                title: "2. 割合（わりあい）",
                                subUnits: [
                                    {
                                        title: "(1) 何倍（なんばい）になったかな？",
                                        content: `<h4>ちがいを 比べる 方法</h4>
                                        <p>「もとの大きさ」を 1 としたとき、もう一方が どれくらいかを <b>割合</b> といいます。</p>
                                        <div class="thinking-box">
                                            <b>どっちが よく 値上がりした？</b><br>
                                            ・トマト：100円 ➔ 200円（<b>2倍</b>）<br>
                                            ・ミニトマト：50円 ➔ 150円（<b>3倍</b>）<br>
                                            ➔ ミニトマトのほうが よく値上がりしたといえるね！
                                        </div>`
                                    },
                                    {
                                        title: "(2) ゴムの のびかた",
                                        content: `<h4>長さが ちがっても 比べられる</h4>
                                        <div class="point-box">
                                            ・ゴムA：50cm ➔ 150cm（150 ÷ 50 ＝ <b>3倍</b>）<br>
                                            ・ゴムB：100cm ➔ 200cm（200 ÷ 100 ＝ <b>2倍</b>）
                                        </div>
                                        <p>差（ひき算）ではなく、<b>倍（わり算）</b> で考えると、どちらが よくのびるか 正しく比べられます。</p>`
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>",
                        units: [
                            {
                                title: "1. 二つの かんてんで 整理する",
                                subUnits: [
                                    {
                                        title: "(1) 二次元（にじげん）の 表",
                                        content: `<h4>組み合わせて 分類しよう</h4>
                                        <p>たとえば「けがをした場所」と「しゅるい」のように、2つの 観点（かんてん）を 組み合わせて 表にします。</p>
                                        <div class="point-box">
                                            <b>数え間違いを なくすコツ</b><br>
                                            ・落ち（わわすれ）や 重なり（だぶり）がないように、数えたものに <b>印や 色</b> をつけましょう。<br>
                                            ・横の 合計と 縦の 合計が、全体の数と 同じになるか たしかめよう。
                                        </div>`
                                    }
                                ]
                            },
                            {
                                title: "2. 折（お）れ線（せん）グラフ",
                                subUnits: [
                                    {
                                        title: "(1) 変化の ようすが わかる",
                                        content: `<h4>折れ線グラフの 特徴</h4>
                                        <p>気温の変化のように、時間が たつにつれて <b>どのように 変わったか</b> を 見るのに 適しています。</p>
                                        <div class="shape-demo">
                                            <svg width="240" height="150" viewBox="0 0 240 150">
                                                <!-- Grid lines -->
                                                <line x1="40" y1="120" x2="200" y2="120" stroke="#333" stroke-width="2"/>
                                                <line x1="40" y1="120" x2="40" y2="20" stroke="#333" stroke-width="2"/>
                                                <!-- Line graph -->
                                                <polyline points="60,100 90,70 120,40 150,50 180,30" fill="none" stroke="#e74c3c" stroke-width="2" marker-start="url(#dot)" marker-mid="url(#dot)" marker-end="url(#dot)"/>
                                                <defs>
                                                    <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
                                                        <circle cx="5" cy="5" r="5" fill="#e74c3c" />
                                                    </marker>
                                                </defs>
                                                <text x="60" y="135" font-size="10">4月</text>
                                                <text x="180" y="135" font-size="10">8月</text>
                                            </svg>
                                        </div>`
                                    },
                                    {
                                        title: "(2) グラフを えらぼう",
                                        content: `<h4>棒グラフと 折れ線グラフの 使い分け</h4>
                                        <ul>
                                            <li><b>棒グラフ</b>：大きさの ちがいを くらべるとき。（例：好きな本）</li>
                                            <li><b>折れ線グラフ</b>：変わり方の ようすを みるとき。（例：身長ののび）</li>
                                        </ul>
                                        <div class="thinking-box">
                                            <b>考えてみよう</b><br>
                                            「図書室で 怖い話が 人気なのは なぜ？」<br>
                                            データから 結論（けろん）を 出すときは、男女の ちがいや 時期など、いろいろな 理由を 考えてみることが 大切だよ。
                                        </div>`
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            e5: {
                name: "小5",
                categories: [
                    {
                        name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>",
                        units: [
                            {
                                title: "1. <ruby>偶数<rt>ぐうすう</rt></ruby>と<ruby>奇数<rt>きすう</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>整数<rt>せいすう</rt></ruby>の<ruby>分類<rt>ぶんるい</rt></ruby>",
                                        content: `
                                            <h4>2で わりきれるか どうか</h4>
                                            <p>整数を 2でわると、あまりは 0か 1になります。</p>
                                            <div class='point-box'>
                                                <ul>
                                                    <li><b>偶数（ぐうすう）</b>：2でわったときの あまりが 0になる数。</li>
                                                    <li><b>奇数（きすう）</b>：2でわったときの あまりが 1になる数。</li>
                                                </ul>
                                            </div>
                                            <p>このように、すべての整数は 偶数か 奇数の どちらかに 分けることができます。</p>
                                            <div class="thinking-box">
                                                一の位の数字だけでなく、「2でわって わりきれるか」という 性質に 着目することが 大切だよ。
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "2. <ruby>約数<rt>やくすう</rt></ruby>と<ruby>倍数<rt>ばいすう</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) 倍数（ばいすう）",
                                        content: `
                                            <h4>「2に 整数を かけてできた数」</h4>
                                            <p>ある数に 整数を かけてできる数を、その数の <b>倍数</b> といいます。</p>
                                            <div class='point-box'>
                                                <b>公倍数（こうばいすう）</b>：2つ以上の数に 共通する 倍数のこと。<br>
                                                <b>最小公倍数</b>：公倍数のなかで いちばん 小さな数。
                                            </div>
                                        `
                                    },
                                    {
                                        title: "(2) 約数（やくすう）",
                                        content: `
                                            <h4>「その数を わりきることができる数」</h4>
                                            <p>ある数を わりきることができる整数を、その数の <b>約数</b> といいます。</p>
                                            <div class='point-box'>
                                                <b>公約数（こうやくすう）</b>：2つ以上の数に 共通する 約数のこと。<br>
                                                <b>最大公約数</b>：公約数のなかで いちばん 大きな数。
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "3. 小数の しくみ",
                                subUnits: [
                                    {
                                        title: "(1) 10倍、1/10などの 大きさ",
                                        content: `
                                            <h4>小数点の いどう</h4>
                                            <p>位取り（くらいどり）の きまりを 考えよう。</p>
                                            <ul class="pos-list">
                                                <li>・<b>10倍, 100倍, 1000倍</b> ➔ 小数点が 右に 1, 2, 3こ うごく。</li>
                                                <li>・<b>1/10, 1/100</b> ➔ 小数点が 左に 1, 2こ うごく。</li>
                                            </ul>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "4. 小数のかけ算",
                                subUnits: [
                                    {
                                        title: "(1) 小数 × 小数",
                                        content: "<h4>計算の しかた</h4><p>整数と同じように計算して、さいごに積（答え）の小数点の位置を、かけられる数とかける数の小数のけた数の合計分だけ うごかします。</p>"
                                    }
                                ]
                            },
                            {
                                title: "5. 小数の割り算",
                                subUnits: [
                                    {
                                        title: "(1) 小数 ÷ 小数",
                                        content: "<h4>わり算の しかた</h4><p>わる数が整数になるように、小数点を 右に うつして計算します。わられる数の小数点も 同じだけ うごかしましょう。</p>"
                                    }
                                ]
                            },
                            {
                                title: "6. 計算の 性質",
                                subUnits: [
                                    {
                                        title: "(1) 小数でも なりたつ きまり",
                                        content: "<h4>整数のときと 同じ</h4><p>小数の計算でも、計算の順序や 交換・結合・分配の法則が そのまま成り立ちます。</p>"
                                    }
                                ]
                            },
                            {
                                title: "7. 分数、整数、小数の関係",
                                subUnits: [
                                    {
                                        title: "(1) いろいろな 数と 分数",
                                        content: `
                                            <h4>同じ大きさを あらわす</h4>
                                            <p>0.3 ＝ 3/10 のように、小数は 分数で あらわせます。<br>また、0.333... のように わりきれない数も 分数なら 正確に あらわせるよ。</p>
                                            <div class="point-box">
                                                <b>同じ大きさを表す分数</b>：2/4 ＝ 1/2 のように、形はちがっても 同じ大きさを 表すことが あるね。
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "8. 分数の 大小",
                                subUnits: [
                                    {
                                        title: "(1) 大きさを くらべる",
                                        content: "<h4>通分（つうぶん）して 比べる</h4><p>分母が ちがうときは、分母を 同じ数に そろえてから 大きさを くらべます。</p>"
                                    }
                                ]
                            },
                            {
                                title: "9. 分数の 足し算",
                                subUnits: [
                                    {
                                        title: "(1) 異分母（いぶんぼ）の 足し算",
                                        content: "<h4>通分して 計算しよう</h4><p>分母が 異なる 足し算は、分母を 最小公倍数に そろえて（通分して）から、分子だけを 足します。答えが 約分できるときは 約分しましょう。</p>"
                                    }
                                ]
                            },
                            {
                                title: "10. 分数の 引き算",
                                subUnits: [
                                    {
                                        title: "(1) 異分母（いぶんぼ）の 引き算",
                                        content: "<h4>通分して 計算しよう</h4><p>分母が 異なる 引き算も 足し算と同じで、まずは 分母を 通分して そろえます。そのあと 分子を 引き算します。</p>"
                                    }
                                ]
                            },
                            {
                                title: "11. 数量の関係と式",
                                subUnits: [
                                    {
                                        title: "(1) □ ＝ 2 ＋ △ などの式",
                                        content: `
                                            <h4>二つの数量の対応</h4>
                                            <p>ここでは、<b>□ ＝ 2 ＋ △</b>、<b>□ ＝ 2 × △</b>、<b>□ ＝ 3 × △ ＋ 1</b> などの式で表されている関係について学習します。</p>
                                            <div class="point-box">
                                                <b>表を使って 変化のしかたを 調べよう</b><br>
                                                二つの数量の対応を基に、△に 1, 2, 3, … を入れたときの □が 幾つになるかを調べ、表に表します。
                                            </div>
                                            <table class="data-table">
                                                <tr><th>△</th><td>1</td><td>2</td><td>3</td><td>4</td><td>...</td></tr>
                                                <tr><th>□ (2×△)</th><td>2</td><td>4</td><td>6</td><td>8</td><td>...</td></tr>
                                            </table>
                                            <p>伴って変わる二つの数量の変化の仕方について、表を使って考察し、一方の数量が変化するともう一方の数量がどのように変化するかについてまとめた表から、対応の関係を見いだし、簡単に式で表現できるようにすることが大切です。</p>
                                            <div class="thinking-box">
                                                <b>関数の考えを 伸ばす</b><br>
                                                このように二つの数量の変わり方を、表や式を用いて考察することによって、式の意味を深めるとともに関数の考えを伸ばすようにします。<br><br>
                                                関数の考えや式の表現と読みは、他領域の内容を考察したり、活用したりする際に重要になるものです。例えば、<b>三角形の高さと面積の関係</b>や<b>直径の長さと円周の長さの関係</b>など、二つの数量の関係を捉えるのに有効です。
                                            </div>
                                        `
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "2 <ruby>図形<rt>ずけい</rt></ruby>",
                        units: [
                            {
                                title: "1. <ruby>平面図形<rt>へいめんずけい</rt></ruby>の 性質",
                                subUnits: [
                                    {
                                        title: "(1) 図形が 決まる 条件",
                                        content: `
                                            <h4>全ての 辺や 角を 調べなくてもよい</h4>
                                            <p>二つの図形が合同かどうか確かめる場合には、全ての辺や角を調べなくてもよいことに着目しましょう。</p>
                                            <div class="point-box">
                                                <b>図形が 決まる 観点</b><br>
                                                ・<b>長方形</b>： 縦と横の長さが 分かれば決まる。<br>
                                                ・<b>ひし形</b>： 二つの対角線の長さが 分かれば決まる。<br>
                                                ・<b>円</b>： 半径の長さが 分かれば決まる。<br>
                                                ・<b>正方形・正三角形</b>： 一辺の長さが 分かれば決まる。
                                            </div>
                                            <p>このように、図形が決まる条件を考えることで、中学校で学習する「三角形の合同条件」への気づきにつなげます。</p>
                                        `
                                    },
                                    {
                                        title: "(2) 合同（ごうどう）の意味",
                                        content: `
                                            <h4>位置に 関係なく 重なる形</h4>
                                            <p>二つの合同な図形が、ずらしたり、回したり、裏返したりして置かれた場合でも、その位置に関係なく、必要な辺と辺、角と角が対応していることが大切です。</p>
                                            <div class="thinking-box">
                                                <b>合同の 観点から 見直す</b><br>
                                                ・平行四辺形を 対角線で分けると、合同な二つの三角形ができる。<br>
                                                ・二つの合同な三角形を 組み合わせると、平行四辺形ができる。
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "2. <ruby>多角形<rt>たかくけい</rt></ruby>と <ruby>正多角形<rt>せいたかくけい</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) 多角形・正多角形の性質",
                                        content: `
                                            <h4>多角形（たかくけい）とは？</h4>
                                            <p>多角形とは、<b>三つ以上の直線で囲まれた図形</b>である。例えば、6本の直線で囲まれた図形を、<b>六角形</b>という。</p>
                                            
                                            <h4>図形の性質（せいしつ）</h4>
                                            <p>ある図形について、いつでも成り立つような事柄がある。そうしたものを<b>図形の性質</b>という。</p>
                                            
                                            <div class="point-box">
                                                <b>三角形の性質</b><br>
                                                どんな三角形でも、三つの角の大きさを加えると <b>180度</b> になる。これは、三角形のもつ性質である。
                                            </div>
                                            
                                            <div class="thinking-box">
                                                <h4>四角形や五角形の性質を調べよう</h4>
                                                <p>四角形については、どんな四角形でも、四つの角の大きさを加えると <b>360度</b> になる。これは、四角形を対角線で分けると、<b>三角形が2つ</b>できることから説明できるよ。</p>
                                                <div class="shape-demo">
                                                    <svg width="120" height="80" viewBox="0 0 120 80">
                                                        <polygon points="10,60 40,10 110,20 90,70" fill="#eee" stroke="#333" stroke-width="2"/>
                                                        <line x1="10" y1="60" x2="110" y2="20" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4"/>
                                                        <text x="25" y="35" font-size="10" fill="#e74c3c">180°</text>
                                                        <text x="70" y="55" font-size="10" fill="#e74c3c">180°</text>
                                                    </svg>
                                                    <p>180度 × 2 ＝ 360度</p>
                                                </div>
                                                
                                                <p>さらに、五角形についても、三角形のこの性質を用いると、<b>五つの角の大きさを加えると 540度</b> になることが分かる。</p>
                                                <div class="shape-demo">
                                                    <svg width="120" height="100" viewBox="0 0 120 100">
                                                        <polygon points="60,10 110,40 90,90 30,90 10,40" fill="#eee" stroke="#333" stroke-width="2"/>
                                                        <line x1="60" y1="10" x2="90" y2="90" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="3"/>
                                                        <line x1="60" y1="10" x2="30" y2="90" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="3"/>
                                                        <text x="35" y="60" font-size="9" fill="#e74c3c">180°</text>
                                                        <text x="60" y="70" font-size="9" fill="#e74c3c">180°</text>
                                                        <text x="85" y="60" font-size="9" fill="#e74c3c">180°</text>
                                                    </svg>
                                                    <p>180度 × 3 ＝ 540度</p>
                                                </div>
                                            </div>
                                            <p>このように、三角形の「180度」という性質を使うと、いろいろな多角形の角の大きさを計算することができるんだね。</p>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "3. <ruby>円<rt>えん</rt></ruby>の <ruby>周<rt>まわ</rt></ruby>り（円周）",
                                subUnits: [
                                    {
                                        title: "(1) 円周と 円周率",
                                        content: `
                                            <h4>直径と 円周の 関係を 探る</h4>
                                            <p>円周の長さは 直計の長さの 何倍になるか、見通しを立ててみましょう。</p>
                                            <div class="thinking-box">
                                                <b>図形で 範囲を 見積もる</b><br>
                                                ・<b>内接する正六角形</b>： 周りの長さは 半径の6倍（直径の3倍）。円周は これより長い。<br>
                                                ・<b>外接する正方形</b>： 周りの長さは 直径の4倍。円周は これより短い。<br>
                                                ➔ 円周は、<b>直径の 3倍より長く、4倍より短い</b> ことがわかります。
                                            </div>
                                            <div class="point-box">
                                                <b>円周率 ≒ 約 3.14</b><br>
                                                円周率は、<b>3.14159... と どこまでも続く わりきれない数</b> です。
                                                どんな大きさの円についても、円周の長さの直径に対する割合が一定であることを理解します。この割合を <b>円周率</b> といい、小学校の計算では <b>3.14</b> を使います。
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "4. <ruby>立体図形<rt>りったいずけい</rt></ruby>の 性質",
                                subUnits: [
                                    {
                                        title: "(1) 角柱（かくちゅう）と 円柱（えんちゅう）",
                                        content: `
                                            <h4>頂点・辺・面に着目</h4>
                                            <p>図形を構成する要素として、頂点、辺、面を取り上げます。</p>
                                            <div class="point-box">
                                                <b>角柱の 特徴</b><br>
                                                ・底面は、三角形、四角形、五角形などがある。<br>
                                                ・側面は、すべて <b>長方形 や 正方形</b> である。
                                            </div>
                                            <p>角柱について、頂点の数、辺の数、面の数などを調べ、その関係についてまとめられるようにしましょう。</p>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "5. <ruby>平面図形<rt>へいめんずけい</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "1 <ruby>新<rt>あたら</rt></ruby>した<ruby>図形<rt>ずけい</rt></ruby>の<ruby>面積<rt>めんせき</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>える",
                                        content: `
                                            <h4>どの 長さを つかえばいいかな？</h4>
                                            <p>面積を求めるとき、図面にはたくさんの数値が書かれていることがありますが、公式に使う「底辺」や「高さ」を正しく選ぶ力が必要です。</p>
                                            
                                            <div class="challenge-box">
                                                <h5>チャレンジ：必要な数値を選ぼう！</h5>
                                                <p>下の平行四辺形の面積を出すために必要な<b>「底辺」</b>と<b>「高さ」</b>を2つ選んでね。</p>
                                                <div class="quiz-diagram" id="quiz-1">
                                                    <svg width="240" height="150" viewBox="0 0 240 150">
                                                        <polygon points="60,30 200,30 180,110 40,110" fill="none" stroke="#333" stroke-width="2"/>
                                                        <!-- Slant side measurement line -->
                                                        <line x1="35" y1="35" x2="15" y2="105" stroke="#ccc" stroke-dasharray="2"/>
                                                        <!-- Height line -->
                                                        <line x1="60" y1="30" x2="60" y2="110" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="4"/>
                                                        <rect x="60" y="100" width="10" height="10" fill="none" stroke="#e74c3c"/>
                                                    </svg>
                                                    <div class="meas-num" style="top:20px; left:120px;" data-type="base">14cm</div>
                                                    <div class="meas-num" style="top:70px; left:20px;" data-type="slant">9cm</div>
                                                    <div class="meas-num" style="top:70px; left:65px;" data-type="height">8cm</div>
                                                    <div class="meas-num" style="bottom:20px; left:100px;" data-type="base">14cm</div>
                                                </div>
                                                <div id="quiz-result" style="font-weight:bold; height:24px; color:var(--japanese-color); text-align:center;"></div>
                                            </div>

                                            <div class="point-box">
                                                <h4>面積を求める3つの手法</h4>
                                                <ol>
                                                    <li><b>① 等積変形（形を変える）</b>： 図形の一部を切り取って移動させ、長方形などの面積が求めやすい形に作り変える。</li>
                                                    <li><b>② 倍・半分（面積の比較）</b>：
                                                        <ul>
                                                            <li>三角形：平行四辺形の半分として捉える。</li>
                                                            <li>ひし形：周囲を囲む長方形の半分として捉える。</li>
                                                            <li>台形：同じものを2つくっつけて平行四辺形にすると、底辺が「上底＋底辺」になる。</li>
                                                        </ul>
                                                    </li>
                                                    <li><b>③ 分割（分ける）</b>： 台形を対角線で切り、2つの三角形に分けてそれぞれの面積を合計する。</li>
                                                </ol>
                                            </div>

                                            <div class="calc-demo">
                                                <h4><ruby>平面図形<rt>へいめんずけい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>まとめ</h4>
                                                <ul style="list-style:none; text-align:left; font-size:20px; display:inline-block;">
                                                    <li>🔷 <ruby>平行四辺形<rt>へいこうしへんけい</rt></ruby> ＝ <ruby>底辺<rt>ていてん</rt></ruby> × <ruby>高<rt>たか</rt></ruby>さ</li>
                                                    <li>🔺 <ruby>三角形<rt>さんかくけい</rt></ruby> ＝ <ruby>底辺<rt>ていてん</rt></ruby> × <ruby>高<rt>たか</rt></ruby>さ ÷ 2</li>
                                                    <li>🔶 <ruby>台形<rt>だいけい</rt></ruby> ＝ (<ruby>上底<rt>じょうてい</rt></ruby> ＋ <ruby>下底<rt>かてい</rt></ruby>) × <ruby>高<rt>たか</rt></ruby>さ ÷ 2</li>
                                                    <li>💎 <ruby>ひし形<rt>がた</rt></ruby> ＝ <ruby>対角線<rt>たいかくせん</rt></ruby> × <ruby>対角線<rt>たいかくせん</rt></ruby> ÷ 2</li>
                                                </ul>
                                            </div>

                                            <h5>① 等積変形（形を変える）のデモ</h5>
                                            <div class="interactive-container">
                                                <div class="anim-box" id="anim-transform">
                                                    <!-- Parallelogram to Rectangle -->
                                                    <svg width="300" height="200" viewBox="0 0 300 200">
                                                        <g id="main-shape">
                                                            <!-- Fixed part -->
                                                            <polygon points="100,50 220,50 220,150 100,150" fill="#3498db" opacity="0.6"/>
                                                            <!-- Moving triangle -->
                                                            <polygon id="moving-tri" points="100,50 60,150 100,150" fill="#3498db" opacity="0.8">
                                                                <animate id="to-rect" attributeName="points" dur="1s" fill="freeze" begin="indefinite" from="100,50 60,150 100,150" to="220,50 260,150 220,150" />
                                                                <animate id="to-para" attributeName="points" dur="1s" fill="freeze" begin="indefinite" from="220,50 260,150 220,150" to="100,50 60,150 100,150" />
                                                            </polygon>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <button class="action-btn" onclick="document.getElementById('to-rect').beginElement()">形を変える（長方形へ）</button>
                                                <button class="action-btn" onclick="document.getElementById('to-para').beginElement()">元に戻す</button>
                                            </div>

                                            <h5>② 倍・半分（面積の比較）のデモ</h5>
                                            <div class="interactive-container">
                                                <div class="anim-box">
                                                    <svg width="300" height="200" viewBox="0 0 300 200">
                                                        <polygon points="80,50 220,50 150,150" fill="#2ecc71" opacity="0.6"/>
                                                        <polygon id="tri-copy" points="80,50 220,50 150,150" fill="#2ecc71" opacity="0.3" stroke="#27ae60" stroke-dasharray="4">
                                                            <animate id="tri-double" attributeName="points" dur="1s" fill="freeze" begin="indefinite" to="150,150 290,150 220,50" />
                                                            <animate id="tri-single" attributeName="points" dur="1s" fill="freeze" begin="indefinite" to="80,50 220,50 150,150" />
                                                        </polygon>
                                                    </svg>
                                                </div>
                                                <button class="action-btn" onclick="document.getElementById('tri-double').beginElement()">2つくっつける</button>
                                                <button class="action-btn" onclick="document.getElementById('tri-single').beginElement()">1つに戻す</button>
                                            </div>

                                            <div class="interactive-container">
                                                <div class="anim-box">
                                                    <svg width="300" height="200" viewBox="0 0 300 200">
                                                        <polygon points="80,60 160,60 200,140 40,140" fill="#f1c40f" opacity="0.6" stroke="#f39c12"/>
                                                        <g id="trap-copy-group">
                                                            <polygon id="trap-copy" points="80,60 160,60 200,140 40,140" fill="#f1c40f" opacity="0.3" stroke="#f39c12" stroke-dasharray="4">
                                                                <animateTransform id="trap-double" attributeName="transform" type="rotate" from="0 180 100" to="180 180 100" dur="1s" fill="freeze" begin="indefinite" />
                                                                <animateTransform id="trap-single" attributeName="transform" type="rotate" from="180 180 100" to="0 180 100" dur="1s" fill="freeze" begin="indefinite" />
                                                            </polygon>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <button class="action-btn" onclick="document.getElementById('trap-double').beginElement()">2つくっつける</button>
                                                <button class="action-btn" onclick="document.getElementById('trap-single').beginElement()">1つに戻す</button>
                                                <p style="margin-top:10px;">底辺が<b>「上底 ＋ 下底」</b>の平行四辺形になるよ！</p>
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "6. <ruby>立体図形<rt>りったいずけい</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "1 <ruby>体積<rt>たいせき</rt></ruby>の<ruby>求<rt>もと</rt></ruby>め<ruby>方<rt>かた</rt></ruby>を<ruby>公式<rt>こうしき</rt></ruby>にしよう",
                                        content: `
                                            <h4>単位体積（1cm³）の積み重ね</h4>
                                            <p>1辺が1cmの立方体の個数を数えることで、体積を求めます。</p>
                                            
                                            <div class="point-box">
                                                <b>考えるプロセス：</b>
                                                <ol>
                                                    <li>1段にいくつ並んでいるかな？（縦 × 横）</li>
                                                    <li>それが何段あるかな？（高さ）</li>
                                                </ol>
                                                <p>バラバラに数えるより、<b>かけ算（乗法）</b>を使うと手際よく求められるね！</p>
                                            </div>

                                            <div class="box-demo-container">
                                                <svg width="240" height="180" viewBox="0 0 240 180">
                                                    <!-- Layered cubes representation -->
                                                    <g transform="translate(40,40)">
                                                        <!-- Bottom Layer -->
                                                        <rect x="0" y="80" width="40" height="40" fill="#fff" stroke="#3498db" stroke-width="1"/>
                                                        <rect x="40" y="80" width="40" height="40" fill="#fff" stroke="#3498db" stroke-width="1"/>
                                                        <rect x="0" y="40" width="40" height="40" fill="#fff" stroke="#3498db" stroke-width="1"/>
                                                        <rect x="40" y="40" width="40" height="40" fill="#fff" stroke="#3498db" stroke-width="1"/>
                                                        
                                                        <!-- Top Layer -->
                                                        <rect x="10" y="70" width="40" height="40" fill="#3498db" opacity="0.3" stroke="#3498db"/>
                                                        <rect x="50" y="70" width="40" height="40" fill="#3498db" opacity="0.3" stroke="#3498db"/>
                                                        <rect x="10" y="30" width="40" height="40" fill="#3498db" opacity="0.3" stroke="#3498db"/>
                                                        <rect x="50" y="30" width="40" height="40" fill="#3498db" opacity="0.3" stroke="#3498db"/>
                                                        
                                                        <!-- Labels -->
                                                        <text x="20" y="135" font-size="12" fill="#333">横に 2こ</text>
                                                        <text x="100" y="100" font-size="12" fill="#333" style="writing-mode: vertical-rl;">縦に 2こ</text>
                                                        <text x="-30" y="60" font-size="12" fill="#e74c3c">高さ 2だん</text>
                                                    </g>
                                                </svg>
                                            </div>

                                            <div class="calc-demo">
                                                <b>（直方体の体積） ＝ （縦） × （横） × （高さ）</b>
                                            </div>
                                            <p>この公式を使うと、どんなに大きな箱でも簡単に体積が計算できるよ。</p>
                                        `
                                    },
                                    {
                                        title: "2 <ruby>単位<rt>たんい</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>をまとめよう",
                                        content: `
                                            <h4>長さ・面積・体積のくらべっこ</h4>
                                            <p>これまで学習した単位を整理して、つながり（統合）を理解しましょう。</p>

                                            <table class="data-table">
                                                <tr>
                                                    <th>図形</th>
                                                    <th>単位</th>
                                                    <th>意味（1単位）</th>
                                                    <th>次元</th>
                                                </tr>
                                                <tr>
                                                    <td><b>長さ</b></td>
                                                    <td>cm</td>
                                                    <td>1cm の 線</td>
                                                    <td>1次元</td>
                                                </tr>
                                                <tr>
                                                    <td><b>面積</b></td>
                                                    <td>cm²</td>
                                                    <td>1辺1cm の 正方形</td>
                                                    <td>2次元<br>(縦×横)</td>
                                                </tr>
                                                <tr>
                                                    <td><b>体積</b></td>
                                                    <td>cm³</td>
                                                    <td>1辺1cm の 立方体</td>
                                                    <td>3次元<br>(縦×横×高)</td>
                                                </tr>
                                            </table>

                                            <div class="thinking-box">
                                                <b>量のかんかくを養おう</b>
                                                <p>長さは「線」、面積は「広さ」、体積は「かさ（大きさ）」を表しているんだね。単位につく右上の数字（2や3）は、いくつ長さをかけたかを表していると考えると分かりやすいよ！</p>
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
                                title: "1. <ruby>比例<rt>ひれい</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>伴<rt>ともな</rt></ruby>って<ruby>変<rt>か</rt></ruby>わる<ruby>二<rt>ふた</rt></ruby>つの<ruby>数量<rt>すうりょう</rt></ruby>",
                                        content: `
                                            <h4>一方が2倍、3倍になると…？</h4>
                                            <p>二つの数量があって、片方が <b>2倍、3倍、4倍…</b> になれば、それに伴ってもう片方も <b>2倍、3倍、4倍…</b> になる関係を <b>比例（ひれい）</b> といいます。</p>
                                            
                                            <div class="thinking-box">
                                                <h5>具体例①：階段（かいだん）の高さ</h5>
                                                <p>1段の高さが 15cm のとき、段数が増えると全体の高さはどう変わるかな？</p>
                                                <table class="data-table">
                                                    <tr><th>段数（段）</th><td>1</td><td>2</td><td>3</td><td>4</td><td>...</td></tr>
                                                    <tr><th>全体の高さ（cm）</th><td>15</td><td>30</td><td>45</td><td>60</td><td>...</td></tr>
                                                </table>
                                                <p style="margin-top:10px;">段数が <b>1 ➔ 2 (2倍)</b> になると、高さも <b>15 ➔ 30 (2倍)</b> になっているね！</p>
                                            </div>

                                            <div class="thinking-box">
                                                <h5>具体例②：長方形の面積（横の長さ 6cm 固定）</h5>
                                                <p>横の長さが決まっているとき、縦を伸ばすと面積はどうなるかな？</p>
                                                <table class="data-table">
                                                    <tr><th>縦の長さ（cm）</th><td>1</td><td>2</td><td>3</td><td>4</td><td>...</td></tr>
                                                    <tr><th>面積（cm²）</th><td>6</td><td>12</td><td>18</td><td>24</td><td>...</td></tr>
                                                </table>
                                                <p style="margin-top:10px;">縦の長さが <b>2 ➔ 4 (2倍)</b> になれば、面積も <b>12 ➔ 24 (2倍)</b> になる。どこから調べてもこの関係は変わらないよ。</p>
                                            </div>

                                            <div class="point-box">
                                                <b>かけ算・わり算との関係：</b>
                                                <ul>
                                                    <li>比例は、これまでに学習した <b>かけ算（乗法）</b> と深く関わっています。</li>
                                                    <li>2倍や3倍にするのは <b>「×2」「×3」</b> をすること。</li>
                                                    <li>逆にみると、<b>「÷2」「÷3」</b> をしていることにもなるんだね。</li>
                                                </ul>
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "2. <ruby>単位量<rt>たんいりょう</rt></ruby>あたりの<ruby>大<rt>おお</rt></ruby>きさ",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>速<rt>はや</rt></ruby>さを<ruby>比<rt>くら</rt></ruby>べる",
                                        content: `
                                            <h4>「道のり」と「時間」の関係</h4>
                                            <p>速さを表すには、<b>移動する長さ（道のり）</b> と <b>かかる時間</b> の二つが必要です。</p>
                                            
                                            <div class="calc-demo">
                                                <b>（速さ） ＝ （長さ） ÷ （時間）</b>
                                            </div>
                                            <p>例えば、<b>時速 60km</b> とは、1時間に 60km の長さを移動する速さのことです。</p>

                                            <div class="thinking-box">
                                                <h5>速さの二つのとらえ方：</h5>
                                                <ul>
                                                    <li><b>① 単位時間あたりに進む長さ：</b> 数値が大きいほど速い！（時速、分速など）</li>
                                                    <li><b>② 一定の長さを進むのにかかる時間：</b> 100m走などの競技。数値が <b>小さいほど速い！</b></li>
                                                </ul>
                                                <p>一般的には、速いほど大きな数値になる「①」の方法で比べることが多いよ。</p>
                                            </div>
                                        `
                                    },
                                    {
                                        title: "(2) いろいろな<ruby>単位量<rt>たんいりょう</rt></ruby>あたりの<ruby>大<rt>おお</rt></ruby>きさ",
                                        content: `
                                            <h4>能率（のうりつ）よく比べるために</h4>
                                            <p>三つ以上のものを比べたり、いつでも比べられるようにするには、単位量（1あたり）の大きさを使うのが便利です。</p>
                                            
                                            <div class="point-box">
                                                <ul>
                                                    <li><b>人口密度（じんこうみつど）：</b> 1km² あたりに住んでいる人数。</li>
                                                    <li><b>米の収量：</b> 1a（アール）あたりにどれくらい収穫できたか。</li>
                                                </ul>
                                            </div>
                                            <p>「1あたり」にそろえることで、全体の大きさが違っても正しく比べることができるんだね。</p>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "3. <ruby>割合<rt>わりあい</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>割合<rt>わりあい</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>",
                                        content: `
                                            <h4>基準（もと）にするとどれくらい？</h4>
                                            <p>二つの数量のうちの一方を <b>基準にする大きさ（基準量）</b> としたとき、もう一方がどれだけにあたるかを表した数を <b>割合</b> といいます。</p>
                                            
                                            <div class="calc-demo">
                                                <b>（割合） ＝ （比較量） ÷ （基準量）</b>
                                            </div>

                                            <div class="thinking-box">
                                                <h5>具体例：シュートの「うまさ」を比べる</h5>
                                                <p>全体のシュート数に対して、入った数の割合（成功率）を見てみよう。</p>
                                                <ul style="list-style:none;">
                                                    <li>・10回中 6回入る ➔ 6 ÷ 10 ＝ <b>0.6</b></li>
                                                    <li>・20回中 12回入る ➔ 12 ÷ 20 ＝ <b>0.6</b></li>
                                                    <li>・30回中 18回入る ➔ 18 ÷ 30 ＝ <b>0.6</b></li>
                                                </ul>
                                                <p>回数が違っても、割合（0.6）で見れば「うまさ」は同じだとわかるね！</p>
                                            </div>
                                        `
                                    },
                                    {
                                        title: "(2) <ruby>百分率<rt>ひゃくぶんりつ</rt></ruby>と<ruby>歩合<rt>ぶあい</rt></ruby>",
                                        content: `
                                            <h4>日常生活でよく使う表し方</h4>
                                            <p>割合をよりわかりやすく、整数で表す工夫です。</p>
                                            
                                            <div class="point-box">
                                                <h5>① 百分率（パーセント、％）</h5>
                                                <p>基準にする大きさを <b>100</b> としたときの割合です。</p>
                                                <ul>
                                                    <li>例：「欠席率が 15％ だった」</li>
                                                    <li>例：「定価の 20％ 引きで買った」</li>
                                                    <li>例：「降水確率は 20％」</li>
                                                </ul>
                                            </div>

                                            <div class="point-box">
                                                <h5>② 歩合（ぶあい）</h5>
                                                <p>基準にする大きさを <b>10</b> とみて、「割（わり）」で表します。</p>
                                                <ul>
                                                    <li><b>1割</b> ＝ 百分率の 10％ (割合の 0.1)</li>
                                                    <li>野球の打率や、お店の割引などでよく使われるね。</li>
                                                </ul>
                                            </div>

                                            <p style="margin-top:10px;">計算が大変なときは、電卓（でんたく）を上手に使って処理することも大切だよ！</p>
                                        `
                                    }
                                ]
                            }
                        ]
                    },
                                        {
                                            name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>",
                                            units: [
                                                {
                                                    title: "1. <ruby>円<rt>えん</rt></ruby>グラフと <ruby>帯<rt>おび</rt></ruby>グラフ",
                                                    subUnits: [
                                                        {
                                                            title: "(1) <ruby>割合<rt>わりあい</rt></ruby>をグラフに表す",
                                                            content: `
                                                                <h4>全体を100％として表す</h4>
                                                                <p>データの全体に対する割合を表すには、<b>円グラフ</b>や<b>帯グラフ</b>が便利です。</p>
                                                                
                                                                                                            <div class="shape-demo">
                                                                                                                <div style="display:flex; justify-content:center; gap:20px; align-items:center; flex-wrap:wrap;">
                                                                                                                    <div style="text-align:center;">
                                                                                                                        <h5>帯（おび）グラフ</h5>
                                                                                                                        <svg width="240" height="60" viewBox="0 0 300 60">
                                                                                                                            <rect x="0" y="10" width="180" height="40" fill="#3498db" stroke="#fff"/>
                                                                                                                            <rect x="180" y="10" width="90" height="40" fill="#2ecc71" stroke="#fff"/>
                                                                                                                            <rect x="270" y="10" width="30" height="40" fill="#f1c40f" stroke="#fff"/>
                                                                                                                            <text x="60" y="35" fill="#fff" font-size="12">60%</text>
                                                                                                                            <text x="210" y="35" fill="#fff" font-size="12">30%</text>
                                                                                                                        </svg>
                                                                                                                    </div>
                                                                                                                    <div style="text-align:center;">
                                                                                                                        <h5>円（えん）グラフ</h5>
                                                                                                                        <svg width="100" height="100" viewBox="0 0 32 32">
                                                                                                                            <circle r="16" cx="16" cy="16" fill="#3498db" />
                                                                                                                            <path d="M 16 16 L 16 0 A 16 16 0 0 1 31.2 20.9 L 16 16" fill="#2ecc71" transform="rotate(216 16 16)" />
                                                                                                                            <path d="M 16 16 L 16 0 A 16 16 0 0 1 25.4 3.1 L 16 16" fill="#f1c40f" transform="rotate(324 16 16)" />
                                                                                                                            <circle r="8" cx="16" cy="16" fill="#fff" />
                                                                                                                            <text x="16" y="18" font-size="4" text-anchor="middle" fill="#333">割合</text>
                                                                                                                        </svg>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                <div class="point-box" style="border-left-color: #e74c3c;">
                                                                    <b>⚠️ ここに注意！</b><br>
                                                                    割合（％）が同じでも、<b>全体の数（合計）</b>がちがうと、実際の数は変わります。<br>
                                                                    例：合計100冊の60％ ➔ 60冊、合計200冊の60％ ➔ 120冊。<br>
                                                                    グラフを見るときは、合計の数にも注目しよう！
                                                                </div>
                                                            `
                                                        }
                                                    ]
                                                },
                                                {
                                                    title: "2. <ruby>統計的<rt>とうけいてき</rt></ruby>な<ruby>問題解決<rt>もんだいかいけつ</rt></ruby>",
                                                    subUnits: [
                                                        {
                                                            title: "(1) 5つのステップで考えよう",
                                                            content: `
                                                                <h4>データにもとづいて判断する</h4>
                                                                <p>身の回りの問題を解決するために、以下の<b>「問題－計画－データ－分析－結論」</b>の5段階で進める方法を学びます。</p>
                                                                
                                                                <div class="thinking-box">
                                                                    <ol>
                                                                        <li><b>① 問題：</b> 解決したい問題をはっきりさせる。</li>
                                                                        <li><b>② 計画：</b> どんなデータを、どうやって集めるか決める。</li>
                                                                        <li><b>③ データ：</b> 実際にデータを集めて、整理する。</li>
                                                                        <li><b>④ 分析：</b> グラフや表にして、特徴（とくちょう）をつかむ。</li>
                                                                        <li><b>⑤ 結論：</b> まとめを作り、さらに新しい問題を見つける。</li>
                                                                    </ol>
                                                                </div>
                                                                <p>「なんとなく」ではなく、数字やデータを使って考えることが大切んだね。</p>
                                                            `
                                                        }
                                                    ]
                                                },
                                                {
                                                    title: "3. <ruby>平均<rt>へいきん</rt></ruby>",
                                                    subUnits: [
                                                        {
                                                            title: "(1) <ruby>平<rt>たい</rt></ruby>らにならす",
                                                            content: `
                                                                <h4>平均（へいきん）の意味</h4>
                                                                <p>いくつかある数値を、どれも同じ大きさになるように「ならしたもの」を<b>平均</b>といいます。</p>
                                                                
                                                                                                            <div class="calc-demo">
                                                                                                                <b>（平均） ＝ （全ての数値の足し算） ÷ （個数）</b>
                                                                                                            </div>
                                                                                                                                <div class="shape-demo">
                                                                    <p>デコボコを平らにするイメージ：</p>
                                                                    <svg width="200" height="100" viewBox="0 0 200 100">
                                                                        <!-- Before -->
                                                                        <rect x="20" y="40" width="20" height="40" fill="#3498db"/>
                                                                        <rect x="50" y="20" width="20" height="60" fill="#3498db"/>
                                                                        <rect x="80" y="60" width="20" height="20" fill="#3498db"/>
                                                                        <text x="45" y="95" font-size="10">ならす前</text>
                                                                        <text x="110" y="55" font-size="20">➔</text>
                                                                        <!-- After -->
                                                                        <rect x="140" y="40" width="20" height="40" fill="#2ecc71"/>
                                                                        <rect x="165" y="40" width="20" height="40" fill="#2ecc71"/>
                                                                        <rect x="190" y="40" width="20" height="40" fill="#2ecc71"/>
                                                                        <text x="155" y="95" font-size="10">平均</text>
                                                                    </svg>
                                                                </div>
                                                                <p>自分の歩幅（ほはば）の平均を出したり、テストの平均点を計算したり、生活のいろんな場面で使われているよ。</p>
                                                            `
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                            e6: {
                                                name: "小6",
                                                categories: [
                                                    {
                                                        name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>",
                                                        units: [
                                                            {
                                                                title: "1. <ruby>分数<rt>ぶんすう</rt></ruby>の かけ算",
                                                                subUnits: [
                                                                    {
                                                                        title: "(1) <ruby>分数<rt>ぶんすう</rt></ruby> × <ruby>分数<rt>ぶんすう</rt></ruby>",
                                                                        content: `
                                                                            <h4>計算のしかた</h4>
                                                                            <p>分数の かけ算は、<b>「分母（ぶんぼ）どうし」</b>、<b>「分子（ぶんし）どうし」</b>を それぞれ かけます。</p>
                                                                            
                                                                            <div class="calc-demo">
                                                                                <b>分子 × 分子<br>────────<br>分母 × 分母</b>
                                                                            </div>
                                
                                                                            <div class="point-box">
                                                                                <b>計算のコツ：</b><br>
                                                                                ・計算の とちゅうで <b>約分（やくぶん）</b> ができるときは、先にしておくと 計算が らくになるよ！
                                                                            </div>
                                                                        `
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                title: "2. <ruby>分数<rt>ぶんすう</rt></ruby>の わり算",
                                                                subUnits: [
                                                                    {
                                                                        title: "(1) <ruby>逆数<rt>ぎゃくすう</rt></ruby>を つかった 計算",
                                                                        content: `
                                                                            <h4>「さかさま」にして かける</h4>
                                                                            <p>分数の わり算は、わる数の <b>逆数（ぎゃくすう）</b> を かけます。</p>
                                                                            
                                                                            <div class="calc-demo">
                                                                                <b>（分数） ÷ （分数） ＝ （分数） × （逆数）</b>
                                                                            </div>
                                
                                                                            <div class="point-box">
                                                                                <b>逆数（ぎゃくすう）とは？</b><br>
                                                                                ・分母と 分子を <b>いれかえた数</b> のことです。<br>
                                                                                ・2/3 の 逆数は 3/2 です。
                                                                            </div>
                                                                        `
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                title: "3. <ruby>分数<rt>ぶんすう</rt></ruby>の <ruby>計算<rt>けいさん</rt></ruby>の きまり",
                                                                subUnits: [
                                                                    {
                                                                        title: "(1) <ruby>性質<rt>せいしつ</rt></ruby>は <ruby>分数<rt>ぶんすう</rt></ruby>でも なりたつ",
                                                                        content: `
                                                                            <h4>整数のときと 同じルール</h4>
                                                                            <p>これまで 学習してきた 計算の きまりは、分数でも そのまま 使えます。</p>
                                                                            
                                                                            <div class="point-box">
                                                                                <ul>
                                                                                    <li><b>交換法則：</b> a × b ＝ b × a</li>
                                                                                    <li><b>結合法則：</b> (a × b) × c ＝ a × (b × c)</li>
                                                                                    <li><b>分配法則：</b> (a ＋ b) × c ＝ a × c ＋ b × c</li>
                                                                                </ul>
                                                                            </div>
                                                                            <p>計算の じゅんばんを くふうして、計算ミスを なくそう！</p>
                                                                        `
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                title: "4. <ruby>文字<rt>もじ</rt></ruby>を つかった <ruby>式<rt>しき</rt></ruby>",
                                                                subUnits: [
                                                                    {
                                                                        title: "(1) x, y, z を つかおう",
                                                                        content: `
                                                                            <h4>□ や ○ から 卒業（そつぎょう）しよう</h4>
                                                                            <p>わからない数や、いろいろな値が入る数を表すとき、これまでは □ や ○ を使ってきましたが、これからは <b>x（エックス）</b> や <b>y（ワイ）</b> などの文字を使います。</p>
                                                                            
                                                                            <div class="thinking-box">
                                                                                <h5>例：100円のノートを x 冊買ったときの代金 y 円</h5>
                                                                                <p style="font-size:24px; text-align:center;"><b>100 × x ＝ y</b></p>
                                                                            </div>
                                
                                                                            <div class="point-box">
                                                                                文字を使うと、たくさんの数量の関係を、短くスッキリ表すことができるんだね。
                                                                            </div>
                                                                        `
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                        name: "2 <ruby>図形<rt>ずけい</rt></ruby>",
                        units: [
                            {
                                title: "1. <ruby>拡大図<rt>かくだいず</rt></ruby>と <ruby>縮図<rt>しゅくず</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>形<rt>かたち</rt></ruby>はそのまま、<ruby>大<rt>おお</rt></ruby>きさをかえる",
                                        content: `
                                            <h4>日常にある拡大・縮小</h4>
                                            <p>コピー機、地図、設計図、顕微鏡（けんびきょう）、写真、映画など、私たちの周りでは拡大や縮小がいろいろなところで使われています。</p>
                                            
                                            <div class="point-box">
                                                <b>拡大図・縮図の特徴：</b>
                                                <ul>
                                                    <li>対応する <b>角の大きさ</b> はすべて同じ。</li>
                                                    <li>対応する <b>辺の長さの比</b> はすべて一定。</li>
                                                </ul>
                                            </div>

                                            <div class="thinking-box">
                                                <h5>地図の縮尺（しゅくしゃく）と木の問題</h5>
                                                <p>・<b>地図：</b> 実際の距離を 1/25000 などに縮めて表したものが縮図です。</p>
                                                <p>・<b>木の問題：</b> 木の高さを直接測れなくても、地面にできる影の長さや、縮図を使って計算で求めることができます。</p>
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "2. <ruby>対称<rt>たいしょう</rt></ruby>な <ruby>図形<rt>ずけい</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>線対称<rt>せんたいしょう</rt></ruby>と <ruby>点対称<rt>てんたいしょう</rt></ruby>",
                                        content: `
                                            <h4>対応（たいおう）に着目しよう</h4>
                                            <p>図形を折ったり回したりしたときに重なる点、辺、角を調べることが大切です。</p>
                                            
                                            <div class="point-box">
                                                <ul>
                                                    <li><b>線対称（せんたいしょう）：</b> 1本の直線を軸に折ると、両側がぴったり重なる形。<br>➔ 二等辺三角形、正三角形など。</li>
                                                    <li><b>点対称（てんたいしょう）：</b> 1つの点を中心に180度回すと、もとの形と重なる形。対応する点、辺、角がすべて同じになります。<br>➔ 平行四辺形、ひし形、長方形、正方形など。</li>
                                                </ul>
                                            </div>

                                            <div class="thinking-box">
                                                <h5>図形のなかま分け（対称性）</h5>
                                                <table class="data-table">
                                                    <tr><th>図形</th><th>線対称</th><th>点対称</th></tr>
                                                    <tr><td>二等辺三角形</td><td>○</td><td>×</td></tr>
                                                    <tr><td>平行四辺形</td><td>×</td><td>○</td></tr>
                                                    <tr><td>ひし形</td><td>○</td><td>○</td></tr>
                                                    <tr><td>正方形</td><td>○</td><td>○</td></tr>
                                                </table>
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "3. <ruby>円<rt>えん</rt></ruby>の <ruby>面積<rt>めんせき</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>面積<rt>めんせき</rt></ruby>の <ruby>公式<rt>こうしき</rt></ruby>",
                                        content: `
                                            <h4>なぜこの公式になるの？</h4>
                                            <p>円をケーキのように細かく切って並びかえると、<b>長方形（ちょうほうけい）</b>に近い形になります。</p>
                                            
                                            <div class="thinking-box">
                                                <h5>長方形として考えてみよう：</h5>
                                                <ul>
                                                    <li><b>たての長さ：</b> 円の <b>半径</b> と同じ。</li>
                                                    <li><b>よこの長さ：</b> <b>円周の半分</b> と同じ。<br>➔ (直径 × 3.14) ÷ 2 ＝ <b>半径 × 3.14</b></li>
                                                </ul>
                                                <p style="margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;">
                                                    長方形の面積 ＝ たて × よこ<br>
                                                    <b>円の面積 ＝ 半径 × (半径 × 3.14)</b>
                                                </p>
                                            </div>

                                            <div class="calc-demo">
                                                <b>（円の面積） ＝ 半径 × 半径 × 3.14</b>
                                            </div>

                                            <div class="shape-demo">
                                                <svg width="240" height="120" viewBox="0 0 240 120">
                                                    <!-- Circle cut -->
                                                    <circle cx="50" cy="60" r="40" fill="none" stroke="#333" stroke-dasharray="2"/>
                                                    <path d="M 50 60 L 90 60 A 40 40 0 0 0 84.6 31.7 Z" fill="#3498db" opacity="0.5"/>
                                                    <path d="M 50 60 L 84.6 31.7 A 40 40 0 0 0 50 20 Z" fill="#2ecc71" opacity="0.5"/>
                                                    
                                                    <text x="100" y="65" font-size="20">➔</text>
                                                    
                                                    <!-- Rearranged shape -->
                                                    <g transform="translate(130,40)">
                                                        <rect x="0" y="0" width="80" height="40" fill="none" stroke="#333" stroke-dasharray="4"/>
                                                        <path d="M 0 40 L 10 0 L 20 40 L 30 0 L 40 40 L 50 0 L 60 40 L 70 0 L 80 40" fill="none" stroke="#3498db" stroke-width="2"/>
                                                        <text x="-35" y="25" font-size="10" fill="#e74c3c">半径</text>
                                                        <text x="10" y="55" font-size="10" fill="#3498db">円周の半分</text>
                                                    </g>
                                                </svg>
                                                <p>細かく切るほど、きれいな長方形になっていくんだね！</p>
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "4. <ruby>角柱<rt>かくちゅう</rt></ruby>と <ruby>円柱<rt>えんちゅう</rt></ruby>の <ruby>体積<rt>たいせき</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>体積<rt>たいせき</rt></ruby>の <ruby>公式<rt>こうしき</rt></ruby>",
                                        content: `
                                            <h4>底面積（ていめんせき）に着目</h4>
                                            <p>どんな形の柱でも、「底面の広さ」が「高さの分だけ積み重なっている」と考えます。</p>
                                            
                                            <div class="calc-demo">
                                                <b>（体積） ＝ 底面積 × 高さ</b>
                                            </div>

                                            <div class="point-box">
                                                <ul>
                                                    <li><b>角柱：</b> 底面が多角形の柱。</li>
                                                    <li><b>円柱：</b> 底面が円の柱。➔ （半径×半径×3.14）× 高さ</li>
                                                </ul>
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
                                title: "1. <ruby>比<rt>ひ</rt></ruby>とその<ruby>利用<rt>りよう</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>比<rt>ひ</rt></ruby>の<ruby>表<rt>あらわ</rt></ruby>し方と <ruby>等<rt>ひと</rt></ruby>しい比",
                                        content: `
                                            <h4>「：」を使って大きさを比べる</h4>
                                            <p>2つの数量の割合を、<b>「a ： b」</b> の形で表したものを <b>比（ひ）</b> といいます。</p>
                                            
                                            <div class="point-box">
                                                <b>比の性質：</b><br>
                                                比のどちらの数にも <b>同じ数をかけたり、同じ数でわったり</b> しても、比の大きさは変わりません。
                                                <ul style="margin-top:10px;">
                                                    <li>3 ： 4 ＝ (3×2) ： (4×2) ＝ <b>6 ： 8</b></li>
                                                    <li>12 ： 18 ＝ (12÷6) ： (18÷6) ＝ <b>2 ： 3</b></li>
                                                </ul>
                                            </div>

                                            <div class="calc-demo">
                                                <b>比をかんたんにしよう：</b><br>
                                                できるだけ小さな整数の比に直すことを「比をかんたんにする」といいます。
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "2. <ruby>比例<rt>ひれい</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>比例<rt>ひれい</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>",
                                        content: `
                                            <h4>決まった数を見つけよう</h4>
                                            <p>x が 2倍, 3倍... になると、y も 2倍, 3倍... になるとき、<b>y は x に比例する</b> といいます。</p>
                                            
                                            <div class="calc-demo">
                                                <b>y ＝ 決まった数 × x</b>
                                            </div>

                                            <div class="thinking-box">
                                                <h5>比例の関係にありそうなもの：</h5>
                                                <ul>
                                                    <li><b>買い物：</b> 個数 と 代金（1つの値段が決まっているとき）</li>
                                                    <li><b>道のり：</b> 時間 と 道のり（速さが一定のとき）</li>
                                                    <li><b>積み重ね：</b> 段数 と 全体の高さ</li>
                                                    <li><b>お風呂：</b> 水を入れる時間 と 水の深さ</li>
                                                </ul>
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "3. <ruby>反比例<rt>はんぴれい</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>反比例<rt>はんぴれい</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>",
                                        content: `
                                            <h4>一方が増えると、もう一方は減る？</h4>
                                            <p>x が 2倍, 3倍... になると、y が <b>1/2倍, 1/3倍...</b> になるとき、<b>y は x に反比例する</b> といいます。</p>
                                            
                                            <div class="calc-demo">
                                                <b>x × y ＝ 決まった数</b><br>
                                                （または y ＝ 決まった数 ÷ x）
                                            </div>

                                            <div class="thinking-box">
                                                <h5>反比例の具体例：</h5>
                                                <p>・<b>長方形：</b> 面積が決まっているときの、<b>たて</b> と <b>よこ</b> の長さ。</p>
                                                <p>・<b>速さ：</b> 道のりが決まっているときの、<b>速さ</b> と <b>時間</b>。</p>
                                            </div>

                                            <table class="data-table">
                                                <tr><th>x (速さ)</th><td>2</td><td>4</td><td>8</td></tr>
                                                <tr><th>y (時間)</th><td>12</td><td>6</td><td>3</td></tr>
                                            </table>
                                            <p>x が 2倍になると、y は 半分（1/2）になっているね！</p>
                                        `
                                    }
                                ]
                            }
                        ]
                    },
                                                    {
                        name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>",
                        units: [
                            {
                                title: "1. <ruby>代表値<rt>だいひょうち</rt></ruby>とデータの<ruby>特徴<rt>とくちょう</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>中央値<rt>ちゅうおうち</rt></ruby>・<ruby>最頻値<rt>さいひんち</rt></ruby>",
                                        content: `
                                            <h4>データの真ん中や、一番多いのは？</h4>
                                            <p>データ全体の特徴を一つの数で表したものを <b>代表値（だいひょうち）</b> といいます。</p>
                                            
                                            <div class="point-box">
                                                <ul>
                                                    <li><b>平均値（へいきんち）：</b> 全部をたして、数でわったもの。</li>
                                                    <li><b>中央値（メジアン）：</b> 大きさ順に並べたとき、真ん中にくる値。</li>
                                                    <li><b>最頻値（モード）：</b> データの中で一番多く出てくる値。</li>
                                                </ul>
                                            </div>

                                            <div class="thinking-box">
                                                <h5>代表値の使い分けに注意！</h5>
                                                <p>一つの数（代表値）にまとめると比較しやすくなりますが、<b>「分布の形」などの大切な情報が消えてしまう</b> という弱点もあります。</p>
                                                <p>特に <b>平均値</b> は、極端に大きすぎる（または小さすぎる）数字が一つあるだけで、データが集中しているところからズレてしまうことがあるんだね。</p>
                                            </div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "2. <ruby>度数分布表<rt>どすうぶんぷひょう</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) データのちらばりを整理する",
                                        content: `
                                            <h4>「区切り」ごとに数える</h4>
                                            <p>データをある区間（階級）ごとに整理した表を <b>度数分布表（どすうぶんぷひょう）</b> といいます。</p>
                                            
                                            <table class="data-table">
                                                <tr><th>記録（秒）</th><th>人数（人）</th></tr>
                                                <tr><td>8.0 〜 8.5</td><td>2</td></tr>
                                                <tr><td>8.5 〜 9.0</td><td>5</td></tr>
                                                <tr><td>9.0 〜 9.5</td><td>3</td></tr>
                                            </table>
                                            <p>表にすることで、どこにデータが集中しているか一目でわかるようになるよ。</p>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "3. <ruby>場合<rt>ばあい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>と <ruby>確率<rt>かくりつ</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>落<rt>お</rt></ruby>ちなく、重ならず数える",
                                        content: `
                                            <h4>樹形図（じゅけいず）とトーナメント</h4>
                                            <p>全部で何通りのことが起こりうるかを調べるときは、図をかくと正確に数えられます。</p>
                                            
                                            <div class="thinking-box">
                                                <h5>① 樹形図（じゅけいず）：</h5>
                                                <p>枝分かれするようにかいていく図。コインを2回投げたときなど。</p>
                                                <pre style="font-family:monospace; background:#fff; padding:10px;">
表 ─┬─ 表
   └─ 裏
裏 ─┬─ 表
   └─ 裏</pre>
                                                <p>➔ 全部で <b>4通り</b> だね！</p>
                                            </div>

                                                                                         <div class="thinking-box">
                                                                                             <h5>② トーナメント表：</h5>
                                                                                             <p>試合の組み合わせなどを表す図。4チームで優勝を決めるには何試合必要かな？</p>
                                                                                             <div style="text-align:center;">
                                                                                                 <svg width="120" height="80" viewBox="0 0 120 80">
                                                                                                     <path d="M20,60 V40 H100 V60 M60,40 V20" fill="none" stroke="#333" stroke-width="2"/>
                                                                                                     <path d="M20,60 V50 M40,60 V50 M80,60 V50 M100,60 V50" fill="none" stroke="#333" stroke-width="1"/>
                                                                                                     <text x="55" y="15" font-size="10">優勝</text>
                                                                                                 </svg>
                                                                                             </div>
                                                                                         </div>
                                            
                                                                                         <div class="thinking-box">
                                                                                             <h5>③ 総当たり（リーグ戦）：</h5>
                                                                                             <p>すべてのチームと1回ずつ試合をする方法です。重なりがないように「表」で考えると分かりやすいよ！</p>
                                                                                             <table class="data-table" style="font-size:14px; width:auto; margin:10px auto;">
                                                                                                 <tr><th></th><th>A</th><th>B</th><th>C</th></tr>
                                                                                                 <tr><th>A</th><td style="background:#eee;">-</td><td>○</td><td>○</td></tr>
                                                                                                 <tr><th>B</th><td style="background:#eee;">-</td><td style="background:#eee;">-</td><td>○</td></tr>
                                                                                                 <tr><th>C</th><td style="background:#eee;">-</td><td style="background:#eee;">-</td><td style="background:#eee;">-</td></tr>
                                                                                             </table>
                                                                                             <p>➔ A-B, A-C, B-C の <b>3通り</b> だね。自分どうしや、同じ組み合わせを2回数えないように気をつけよう。</p>
                                                                                         </div>
                                                                                     `
                                            
                                    }
                                ]
                            }
                        ]
                    }
                                                ]
                                            },
                                j1: { name: "中1",
                                 categories: [{ name: "1 数と式", units: [] }, { name: "2 図形", units: [] }, { name: "3 測定と関数", units: [] }, { name: "4 データの活用", units: [] }] },
            j2: { name: "中2", categories: [{ name: "1 数と式", units: [] }, { name: "2 図形", units: [] }, { name: "3 測定と関数", units: [] }, { name: "4 データの活用", units: [] }] },
            j3: { name: "中3", categories: [{ name: "1 数と式", units: [] }, { name: "2 図形", units: [] }, { name: "3 測定と関数", units: [] }, { name: "4 データの活用", units: [] }] }
        }
    },
    japanese: { name: "<ruby>国語<rt>こくご</rt></ruby>", grades: {} },
    science: { name: "<ruby>理科<rt>理科</rt></ruby>", grades: {} },
    social: { name: "<ruby>社会<rt>社会</rt></ruby>", grades: {} },
    english: { name: "<ruby>英語<rt>英語</rt></ruby>", grades: {} }
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
    
    // クイズの初期化
    initQuiz();
}

function initQuiz() {
    const quizBox = document.getElementById('quiz-1');
    if (!quizBox) return;

    const nums = quizBox.querySelectorAll('.meas-num');
    const result = document.getElementById('quiz-result');

    nums.forEach(num => {
        num.onclick = () => {
            const type = num.dataset.type;
            if (type === 'slant') {
                num.classList.add('wrong');
                result.innerText = 'おっと！ななめの長さは面積には使わないよ。';
                setTimeout(() => num.classList.remove('wrong'), 500);
                return;
            }
            
            num.classList.toggle('selected');
            
            // 現在の選択状態を確認
            const selectedTypes = Array.from(quizBox.querySelectorAll('.meas-num.selected'))
                                    .map(n => n.dataset.type);
            
            const hasBase = selectedTypes.includes('base');
            const hasHeight = selectedTypes.includes('height');

            if (hasBase && hasHeight) {
                result.innerHTML = '正解！🎉 面積は 14 × 8 ＝ 112cm² だね！';
                result.style.color = '#2ecc71';
            } else if (hasBase || hasHeight) {
                result.innerHTML = 'あと1つ！「底辺」と「高さ」をそろえよう。';
                result.style.color = 'var(--primary-color)';
            } else {
                result.innerText = '';
            }
        };
    });
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
