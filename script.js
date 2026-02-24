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
                                title: "1. <ruby>数<rt>かず</rt></ruby>の<ruby>表<rt>あらわ</rt></ruby>し<ruby>方<rt>かた</rt></ruby>", 
                                subUnits: [
                                    {
                                        title: "(1) いくつある？",
                                        content: `<h4>1から じゅんばんに ふえていくよ</h4>
                                        <div class="point-box">
                                            ひとつずつ ふえると、かずの なまえも かわるよ.
                                        </div>
                                        <div class="data-demo" style="text-align: left; line-height: 2;">
                                            🍎 ➔ <b>1</b>（いち）<br>
                                            🍎🍎 ➔ <b>2</b>（に）<br>
                                            🍎🍎🍎 ➔ <b>3</b>（さん）<br>
                                            🍎🍎🍎🍎 ➔ <b>4</b>（し・よん）<br>
                                            🍎🍎🍎🍎🍎 ➔ <b>5</b>（ご）<br>
                                            🍎🍎🍎🍎🍎 🍎 ➔ <b>6</b>（ろく）<br>
                                            🍎🍎🍎🍎🍎 🍎🍎 ➔ <b>7</b>（しち・なな）<br>
                                            🍎🍎🍎🍎🍎 🍎🍎🍎 ➔ <b>8</b>（はち）<br>
                                            🍎🍎🍎🍎🍎 🍎🍎🍎🍎 ➔ <b>9</b>（く・きゅう）<br>
                                            🍎🍎🍎🍎🍎 🍎🍎🍎🍎🍎 ➔ <b>10</b>（じゅう）
                                        </div>
                                        <p>10は、<b>5が 2つ</b> あつまった かずだね！<br>
                                        えを ゆびで さしながら、こえに だして かぞえてみよう！</p>`,
                                        quizzes: [
                                            { question: "【だい1もん】 くだものは なんこ あるかな？", display: "🍎 🍎 🍎 🍎", answer: 4 },
                                            { question: "【だい2もん】 くだものは なんこ あるかな？", display: "🍌 🍌 🍌 🍌 🍌 🍌", answer: 6 },
                                            { question: "【だい3もん】 くだものは なんこ あるかな？", display: "🍊 🍊 🍊", answer: 3 },
                                            { question: "【だい4もん】 くだものは なんこ あるかな？", display: "🍇 🍇 🍇 🍇 🍇", answer: 5 },
                                            { question: "【だい5もん】 くだものは なんこ あるかな？", display: "🍓 🍓 🍓 🍓 🍓 🍓 🍓 🍓", answer: 8 },
                                            { question: "【だい6もん】 くだものは なんこ あるかな？", display: "🍐 🍐", answer: 2 },
                                            { question: "【だい7もん】 くだものは なんこ あるかな？", display: "🍉", answer: 1 },
                                            { question: "【だい8もん】 くだものは なんこ あるかな？", display: "🍈 🍈 🍈 🍈 🍈 🍈 🍈", answer: 7 },
                                            { question: "【だい9もん】 くだものは なんこ あるかな？", display: "🌰 🌰 🌰 🌰 🌰 🌰 🌰 🌰 🌰", answer: 9 },
                                            { question: "【だい10もん】 くだものは なんこ あるかな？", display: "🍍 🍍 🍍 🍍 🍍 🍍 🍍 🍍 🍍 🍍", answer: 10 }
                                        ]
                                    },
                                    {
                                        title: "(2) なにもないとき",
                                        content: `<h4>「0」という かず</h4>
                                        <div class="point-box">
                                            かごの なかに りんごが ひとつも ありません。<br>
                                            このような 「なにも ない」じょうたいを <b>0（ぜろ）</b> と かくよ！
                                        </div>
                                        
                                        <h4>「おへや（くらい）」の だいじな ルール</h4>
                                        <p>それぞれの おへやには、<b>「0, 1, 2, 3, 4, 5, 6, 7, 8, 9」</b> の どれか <b>ひとつだけ</b> 数字（すうじ）を いれることが できるよ。</p>
                                        
                                        <div class="data-demo">
                                            <table class="data-table" style="width: 200px; margin: 0 auto;">
                                                <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                <tr style="font-size: 16px;"><td>0〜9</td><td>0〜9</td></tr>
                                            </table>
                                            <p><small>どっちの おへやも 0から 9まで はいるよ。</small></p>
                                        </div>

                                        <h4>かずが ふえると おへやはどうなる？</h4>
                                        <div class="data-demo">
                                            <p><b>① 0 (なにも ないとき)</b></p>
                                            <table class="data-table" style="width: 200px; margin: 0 auto;">
                                                <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                <tr style="font-size: 24px;"><td> </td><td>0</td></tr>
                                            </table>

                                            <p style="margin-top:20px;"><b>② 1から 9まで ふえていくよ</b></p>
                                            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
                                                <table class="data-table" style="width: 200px;">
                                                    <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                    <tr style="font-size: 24px;"><td> </td><td>1</td></tr>
                                                </table>
                                                <div style="font-size: 16px;">↓</div>
                                                <table class="data-table" style="width: 200px;">
                                                    <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                    <tr style="font-size: 24px;"><td> </td><td>2</td></tr>
                                                </table>
                                                <div style="font-size: 16px;">↓</div>
                                                <table class="data-table" style="width: 200px;">
                                                    <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                    <tr style="font-size: 24px;"><td> </td><td>3</td></tr>
                                                </table>
                                                <div style="font-size: 16px;">↓</div>
                                                <table class="data-table" style="width: 200px;">
                                                    <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                    <tr style="font-size: 24px;"><td> </td><td>4</td></tr>
                                                </table>
                                                <div style="font-size: 16px;">↓</div>
                                                <table class="data-table" style="width: 200px;">
                                                    <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                    <tr style="font-size: 24px;"><td> </td><td>5</td></tr>
                                                </table>
                                                <div style="font-size: 16px;">↓</div>
                                                <table class="data-table" style="width: 200px;">
                                                    <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                    <tr style="font-size: 24px;"><td> </td><td>6</td></tr>
                                                </table>
                                                <div style="font-size: 16px;">↓</div>
                                                <table class="data-table" style="width: 200px;">
                                                    <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                    <tr style="font-size: 24px;"><td> </td><td>7</td></tr>
                                                </table>
                                                <div style="font-size: 16px;">↓</div>
                                                <table class="data-table" style="width: 200px;">
                                                    <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                    <tr style="font-size: 24px;"><td> </td><td>8</td></tr>
                                                </table>
                                                <div style="font-size: 16px;">↓</div>
                                                <table class="data-table" style="width: 200px;">
                                                    <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                    <tr style="font-size: 24px;"><td> </td><td>9</td></tr>
                                                </table>
                                            </div>

                                            <p style="margin-top:20px;"><b>③ 10に なったとき</b></p>
                                            <table class="data-table" style="width: 200px; margin: 0 auto;">
                                                <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                <tr style="font-size: 24px; font-weight: bold; color: #e74c3c;"><td>1</td><td>0</td></tr>
                                            </table>
                                            <p><small>「1の おへや」がいっぱいに なって、<br>「10の おへや」に <b>1つ</b> おひっこし したよ！</small></p>
                                        </div>

                                        <p>この <b>0</b> が ないと、「1」なのか 「10」なのか わからなくなっちゃうね。</p>

                                        <h4>「おへや（くらい）」の だいじな ルール</h4>
                                        <p>それぞれの おへやには、<b>「0, 1, 2, 3, 4, 5, 6, 7, 8, 9」</b> の どれか <b>ひとつだけ</b> 数字（すうじ）を いれることが できるよ。</p>
                                        
                                        <div class="data-demo">
                                            <p><b>① 1の おへや</b><br>
                                            0から 9まで はいるよ。10に なると、おとなり（10の おへや）に 「まとまり」を ひとつ わたすよ。</p>
                                            
                                            <p><b>② 10の おへや</b><br>
                                            ここも 0から 9まで はいるよ。10, 20, 30... と まとまりが ふえていくんだよ。</p>
                                        </div>

                                        <div class="point-box" style="font-size: 14px;">
                                            <b>【きをつけよう！】</b><br>
                                            1から 9までの ときは、「10の おへや」は 0 だけど、まえの 0は かかない きまりだよ。<br>
                                            （「01, 02...」とは かかずに、「1, 2...」と かくんだよ！）
                                        </div>

                                        <p>0は、<b>「ここにおへやはあるけど、なかみは からっぽだよ！」</b> と おしえてくれる たいせつな しるしなんだよ。</p>`,
                                        quizzes: [
                                            {
                                                question: "かごの なかに りんごは なんこ あるかな？",
                                                display: "🧺",
                                                answer: 0
                                            }
                                        ]
                                    },
                                    {
                                        title: "(3) どっちがおおきい？どっちがちいさい？どのくらいちがう？",
                                        content: `<h4>かずを くらべてみよう</h4>
                                        <div class="compare-box">
                                            <div class="row">🍎 🍎 🍎 🍎 🍎 (5)</div>
                                            <div class="row">🍊 🍊 🍊 (3)</div>
                                        </div>
                                        <p><b>5 は 3 より おおきい</b> ね。<br>
                                        <b>3 は 5 より ちいさい</b> ね。</p>
                                        <h4>どのくらい ちがう？</h4>
                                        <p>5 － 3 ＝ 2 だから、<b>2つ ちがう</b> ことが わかるよ！</p>`,
                                        quizzes: [
                                            {
                                                question: "5 と 3、どっちが おおきいかな？（おおきい ほうを かいてね）",
                                                display: "5 , 3",
                                                answer: 5
                                            }
                                        ]
                                    },
                                    {
                                        title: "(4) まとまりでかぞえよう",
                                        content: `<h4>いろいろな まとまりで かぞえよう</h4>
                                        <div class="point-box">
                                            1つずつ かぞえるよりも、<b>「まとまり」</b> を つくると はやくて まちがえにくいよ！
                                        </div>
                                        
                                        <h4>① 10ずつ かぞえる</h4>
                                        <div class="data-demo">
                                            (🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵) 10<br>
                                            (🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵) 20<br>
                                            <b>10, 20, 30...</b> と かぞえるよ。
                                        </div>

                                        <h4>② 2ずつ かぞえる（2とび）</h4>
                                        <div class="data-demo">
                                            (🍒) (🍒) (🍒) (🍒)<br>
                                            <b>2, 4, 6, 8...</b> と 2こずつ まとめるよ。
                                        </div>

                                        <h4>③ 5ずつ かぞえる（5とび）</h4>
                                        <div class="data-demo">
                                            (🖐️) (🖐️) (🖐️)<br>
                                            <b>5, 10, 15...</b> と かぞえると 10が すぐ つくれるね！
                                        </div>`,
                                        quizzes: [
                                            {
                                                question: "ぜんぶで なんこ あるかな？",
                                                display: "(🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵) 🔵 🔵",
                                                answer: 12
                                            }
                                        ]
                                    },
                                    {
                                        title: "(5) なんばんめ",
                                        content: `<h4>「かず」と 「じゅんばん」の ちがい</h4>
                                        <div class="point-box">
                                            「〜にん」と 「〜ばんめ」は、にているけど ちがうよ！
                                        </div>
                                        
                                        <div class="data-demo">
                                            <p>🐱 🐰 🦊 🐻 🦁<br>
                                            <small>まえ　➔　うしろ</small></p>

                                            <div style="background: #fff; padding: 10px; border-radius: 10px; border: 2px solid #eee;">
                                                <p><b>① まえから 3にん</b></p>
                                                <p><span style="background: #bae7ff;">🐱 🐰 🦊</span> 🐻 🦁</p>
                                                <p><small>まえから 3にん <b>ぜんぶ</b> の ことだよ。</small></p>
                                            </div>

                                            <div style="background: #fff; padding: 10px; border-radius: 10px; border: 2px solid #eee; margin-top: 10px;">
                                                <p><b>② まえから 3ばんめ</b></p>
                                                <p>🐱 🐰 <span style="background: #ffe58f; padding: 2px 5px; border-radius: 5px; border: 2px solid #e74c3c;">🦊</span> 🐻 🦁</p>
                                                <p><small>3ばんめの <b>ひとりだけ</b> の ことだよ。</small></p>
                                            </div>
                                        </div>
                                        
                                        <p>「まえから」か 「うしろから」か、よく きいて かぞえてみよう！</p>`,
                                        quizzes: [
                                            {
                                                question: "うさぎ🐰は まえから なんばんめ かな？",
                                                display: "🐱 🐰 🦊 🐻 🦁",
                                                answer: 2
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "2. <ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) あわせると いくつ？",
                                        content: `<h4>たしざんの しき</h4>
                                        <div class="calc-demo">3 ＋ 2 ＝ 5</div>
                                        <p>3びきの ねこに 2ひきの ねこが きたら、ぜんぶで 5ひきだね。</p>`
                                    }
                                ]
                            },
                            {
                                title: "3. <ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) のこりは いくつ？",
                                        content: `<h4>ひきざんの しき</h4>
                                        <div class="calc-demo">5 － 2 ＝ 3</div>
                                        <p>5この クッキーを 2こ たべたら、のこりは 3こだね。</p>`
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "2 <ruby>図形<rt>ずけい</rt></ruby>",
                        units: [
                            {
                                title: "1. かたちあそび",
                                subUnits: [
                                    {
                                        title: "(1) いろいろな かたち",
                                        content: `<h4>はこや つつの かたち</h4>
                                        <div class="shape-demo-box">
                                            <div class="demo-shape rectangle-box" style="background:#3498db">📦<br>はこの形</div>
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
                                title: "1. ながさくらべ",
                                subUnits: [
                                    {
                                        title: "(1) はしを そろえて くらべよう",
                                        content: `<h4>どっちが ながいかな？</h4>
                                        <div class="pencil-compare">
                                            <div class="pencil p1">✏️</div>
                                            <div class="pencil p2">✏️</div>
                                            <div class="desk-line"></div>
                                        </div>`
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>",
                        units: [
                            {
                                title: "1. なかまづくりと グラフ",
                                subUnits: [
                                    {
                                        title: "(1) なかまに わけよう",
                                        content: `<h4>おなじ 種類（しゅるい）を あつめよう</h4>
                                        <p>整理すると、みかんのほうが 多いことが すぐに わかるね！</p>`
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            e2: {
                name: "小2",
                categories: [
                    { name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>", units: [{ title: "1. 1000までの 数", subUnits: [{ title: "(1) 数の しくみ", content: "1000までの数について学びましょう。" }] }] },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [{ title: "1. 三角形と 四角形", subUnits: [{ title: "(1) 正方形・長方形", content: "形の特徴を学びましょう。" }] }] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [{ title: "1. 長さ(cm, mm)", subUnits: [{ title: "(1) ものさしの使い方", content: "長さをはかってみよう。" }] }] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [{ title: "1. 表とグラフ", subUnits: [{ title: "(1) データの整理", content: "表にまとめてみよう。" }] }] }
                ]
            },
            e3: {
                name: "小3",
                categories: [
                    { name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>", units: [{ title: "1. わり算", subUnits: [{ title: "(1) わり算の意味", content: "同じ数ずつ分けよう。" }] }] },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [{ title: "1. 円と球", subUnits: [{ title: "(1) コンパスの使い方", content: "きれいな円をかこう。" }] }] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [{ title: "1. 重さ(g, kg)", subUnits: [{ title: "(1) はかりの使い方", content: "重さをはかってみよう。" }] }] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [{ title: "1. 棒グラフ", subUnits: [{ title: "(1) グラフのかき方", content: "データをグラフにしよう。" }] }] }
                ]
            },
            e4: {
                name: "小4",
                categories: [
                    { name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>", units: [{ title: "1. 大きな数", subUnits: [{ title: "(1) 億と兆", content: "大きな数を読もう。" }] }] },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [{ title: "1. 角の大きさ", subUnits: [{ title: "(1) 分度器の使い方", content: "角度をはかろう。" }] }] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [{ title: "1. 面積", subUnits: [{ title: "(1) 広さの表し方", content: "面積の公式を覚えよう。" }] }] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [{ title: "1. 折れ線グラフ", subUnits: [{ title: "(1) 変化を見る", content: "グラフで変化を調べよう。" }] }] }
                ]
            },
            e5: {
                name: "小5",
                categories: [
                    { name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>", units: [{ title: "1. 小数の計算", subUnits: [{ title: "(1) 小数のかけ算", content: "小数点に注意しよう。" }] }] },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [{ title: "1. 体積", subUnits: [{ title: "(1) 直方体の体積", content: "体積を求めよう。" }] }] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [{ title: "1. 割合", subUnits: [{ title: "(1) 割合の計算", content: "比べられる量を求めよう。" }] }] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [{ title: "1. 平均", subUnits: [{ title: "(1) 平均の求め方", content: "平均を計算しよう。" }] }] }
                ]
            },
            e6: {
                name: "小6",
                categories: [
                    { name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>", units: [{ title: "1. 分数の計算", subUnits: [{ title: "(1) 分数のかけ算", content: "分数の計算をマスターしよう。" }] }] },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [{ title: "1. 対称な図形", subUnits: [{ title: "(1) 線対称・点対称", content: "図形の重なりを調べよう。" }] }] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [{ title: "1. 比", subUnits: [{ title: "(1) 比の等しさ", content: "比の値を求めよう。" }] }] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [{ title: "1. データの分布", subUnits: [{ title: "(1) ドットプロット", content: "データの散らばりを見よう。" }] }] }
                ]
            },
            j1: {
                name: "中1",
                categories: [
                    { name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>", units: [{ title: "1. 正負の数", subUnits: [{ title: "(1) プラスとマイナス", content: "負の数を学びましょう。" }] }] },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [{ title: "1. 平面図形", subUnits: [{ title: "(1) 基本的な作図", content: "垂直二等分線などをかこう。" }] }] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [{ title: "1. 比例と反比例", subUnits: [{ title: "(1) 関数の考え方", content: "変化する2つの量を調べよう。" }] }] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [{ title: "1. データの分析", subUnits: [{ title: "(1) ヒストグラム", content: "データの傾向をつかもう。" }] }] }
                ]
            },
            j2: {
                name: "中2",
                categories: [
                    { name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>", units: [{ title: "1. 連立方程式", subUnits: [{ title: "(1) 2つの文字の方程式", content: "2つの未知数を求めよう。" }] }] },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [{ title: "1. 図形の性質", subUnits: [{ title: "(1) 三角形の合同", content: "図形が重なることを証明しよう。" }] }] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [{ title: "1. 一次関数", subUnits: [{ title: "(1) 直線の式", content: "グラフを式で表そう。" }] }] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [{ title: "1. 確率", subUnits: [{ title: "(1) 起こりやすさ", content: "確率を計算しよう。" }] }] }
                ]
            },
            j3: {
                name: "中3",
                categories: [
                    { name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>", units: [{ title: "1. 因数分解", subUnits: [{ title: "(1) 式の展開", content: "式を積の形にしよう。" }] }] },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [{ title: "1. 三平方の定理", subUnits: [{ title: "(1) 直角三角形の辺", content: "辺の長さを求めよう。" }] }] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [{ title: "1. 関数 y=ax^2", subUnits: [{ title: "(1) 放物線", content: "2次関数を調べよう。" }] }] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [{ title: "1. 標本調査", subUnits: [{ title: "(1) 全体と標本", content: "一部から全体を推測しよう。" }] }] }
                ]
            }
        }
    },
    japanese: { 
        name: "<ruby>国語<rt>こくご</rt></ruby>", 
        grades: {
            e1: { name: "小1", categories: [{ name: "漢字", units: [{ title: "1年生の漢字", subUnits: [{ title: "山の書き方", content: "山、川などの漢字を覚えよう。" }] }] }] }
        } 
    },
    science: { 
        name: "<ruby>理科<rt>りか</rt></ruby>", 
        grades: {
            e3: { name: "小3", categories: [{ name: "生き物", units: [{ title: "昆虫", subUnits: [{ title: "チョウの育ち方", content: "たまごから成虫までを調べよう。" }] }] }] }
        } 
    },
    social: { 
        name: "<ruby>社会<rt>しゃかい</rt></ruby>", 
        grades: {
            e3: { name: "小3", categories: [{ name: "町", units: [{ title: "わたしたちの町", subUnits: [{ title: "町の地図", content: "地図記号を覚えよう。" }] }] }] }
        } 
    },
    english: { 
        name: "<ruby>英語<rt>えいご</rt></ruby>", 
        grades: {
            j1: { name: "中1", categories: [{ name: "文法", units: [{ title: "be動詞", subUnits: [{ title: "I am / You are", content: "自己紹介をしてみよう。" }] }] }] }
        } 
    }
};

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
            breadcrumb.appendChild(separator);
        }
    });
}

function showHome() { 
    updateBreadcrumb([{ label: 'ホーム' }]); 
    showView('home-view'); 
}

function showGrades() { 
    const subjectName = studyData[currentSubject].name;
    updateBreadcrumb([
        { label: 'ホーム', action: showHome },
        { label: subjectName }
    ]);
    showView('grade-view'); 
}

function showCategories() {
    const subjectName = studyData[currentSubject].name;
    const gradeData = studyData[currentSubject].grades[currentGrade];
    if (!gradeData) {
        alert("まだデータがありません。");
        return;
    }
    selectedGradeName.innerHTML = gradeData.name;

    updateBreadcrumb([
        { label: 'ホーム', action: showHome },
        { label: subjectName, action: showGrades },
        { label: gradeData.name }
    ]);

    categoryList.innerHTML = '';
    if (gradeData.categories) {
        gradeData.categories.forEach((cat, i) => {
            const div = document.createElement('div');
            div.className = 'material-item';
            div.innerHTML = `<span>${cat.name}</span>`;
            div.onclick = () => showUnits(i);
            categoryList.appendChild(div);
        });
    }
    showView('category-view');
}

function showUnits(i) {
    currentCategoryIndex = i;
    const subjectName = studyData[currentSubject].name;
    const gradeData = studyData[currentSubject].grades[currentGrade];
    const cat = gradeData.categories[i];
    selectedCategoryName.innerHTML = cat.name;

    updateBreadcrumb([
        { label: 'ホーム', action: showHome },
        { label: subjectName, action: showGrades },
        { label: gradeData.name, action: showCategories },
        { label: cat.name }
    ]);

    unitList.innerHTML = '';
    cat.units.forEach((u, j) => {
        const div = document.createElement('div');
        div.className = 'material-item';
        div.innerHTML = `<span>${u.title}</span>`;
        div.onclick = () => showSubUnits(j);
        unitList.appendChild(div);
    });
    showView('unit-view');
}

function showSubUnits(j) {
    currentUnitIndex = j;
    const subjectName = studyData[currentSubject].name;
    const gradeData = studyData[currentSubject].grades[currentGrade];
    const cat = gradeData.categories[currentCategoryIndex];
    const unit = cat.units[j];
    selectedUnitName.innerHTML = unit.title;

    updateBreadcrumb([
        { label: 'ホーム', action: showHome },
        { label: subjectName, action: showGrades },
        { label: gradeData.name, action: showCategories },
        { label: cat.name, action: () => showUnits(currentCategoryIndex) },
        { label: unit.title }
    ]);

    subUnitList.innerHTML = '';
    unit.subUnits.forEach(s => {
        const div = document.createElement('div');
        div.className = 'material-item';
        div.innerHTML = `<span>${s.title}</span>`;
        div.onclick = () => showContent(s);
        subUnitList.appendChild(div);
    });
    showView('sub-unit-view');
}

let currentSubUnit = null;
let currentInput = "";
let currentQuizIndex = 0;
let correctCount = 0; // 正解した数をかぞえる

function showContent(s) {
    currentSubUnit = s;
    currentQuizIndex = 0;
    correctCount = 0; // リセット
    const subjectName = studyData[currentSubject].name;
    const gradeData = studyData[currentSubject].grades[currentGrade];
    const cat = gradeData.categories[currentCategoryIndex];
    const unit = cat.units[currentUnitIndex];

    updateBreadcrumb([
        { label: 'ホーム', action: showHome },
        { label: subjectName, action: showGrades },
        { label: gradeData.name, action: showCategories },
        { label: cat.name, action: () => showUnits(currentCategoryIndex) },
        { label: unit.title, action: () => showSubUnits(currentUnitIndex) },
        { label: s.title }
    ]);

    contentTitle.innerHTML = s.title;
    contentBody.innerHTML = s.content;
    
    const startBtnContainer = document.getElementById('quiz-start-container');
    if (s.quizzes && s.quizzes.length > 0) {
        startBtnContainer.style.display = 'block';
    } else {
        startBtnContainer.style.display = 'none';
    }
    
    showView('content-view');
}

function startQuiz(index = 0) {
    if (!currentSubUnit || !currentSubUnit.quizzes || !currentSubUnit.quizzes[index]) return;
    currentQuizIndex = index;
    if (index === 0) correctCount = 0; // 1問目ならリセット
    
    const q = currentSubUnit.quizzes[currentQuizIndex];
    const quizViewBody = document.getElementById('quiz-view-body');
    currentInput = ""; 
    
    quizViewBody.innerHTML = `
        <div class="quiz-container">
            <div style="font-size: 18px; color: #666; margin-bottom: 10px;">
                ${currentQuizIndex + 1} / ${currentSubUnit.quizzes.length} もんめ
            </div>
            <div class="quiz-question">${q.question}</div>
            <div class="quiz-display">${q.display}</div>
            
            <div style="display:flex; justify-content:center; align-items:center;">
                <div class="quiz-input-display" id="input-display"> </div>
                <button class="clear-btn" onclick="clearNumber()">けす</button>
            </div>

            <div class="numeric-pad">
                ${[1,2,3,4,5,6,7,8,9,0].map(n => `<button class="quiz-btn" onclick="typeNumber(${n})">${n}</button>`).join('')}
            </div>
            
            <button class="answer-btn" onclick="submitAnswer()">こたえあわせ</button>
            <div class="quiz-feedback" id="quiz-feedback"></div>
        </div>
    `;
    
    const subjectName = studyData[currentSubject].name;
    const gradeData = studyData[currentSubject].grades[currentGrade];
    const cat = gradeData.categories[currentCategoryIndex];
    const unit = cat.units[currentUnitIndex];

    updateBreadcrumb([
        { label: 'ホーム', action: showHome },
        { label: subjectName, action: showGrades },
        { label: gradeData.name, action: showCategories },
        { label: cat.name, action: () => showUnits(currentCategoryIndex) },
        { label: unit.title, action: () => showSubUnits(currentUnitIndex) },
        { label: currentSubUnit.title, action: () => showContent(currentSubUnit) },
        { label: `${currentQuizIndex + 1}もんめ` }
    ]);
    
    showView('quiz-view');
}

function typeNumber(n) {
    if (currentInput.length < 5) {
        currentInput += n.toString();
        const display = document.getElementById('input-display');
        if (display) display.innerText = currentInput;
    }
}

function clearNumber() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        const display = document.getElementById('input-display');
        if (display) display.innerText = currentInput === "" ? " " : currentInput;
    }
}

function submitAnswer() {
    if (currentInput === "") return;
    
    const feedback = document.getElementById('quiz-feedback');
    const q = currentSubUnit.quizzes[currentQuizIndex];
    const correctVal = q.answer.toString();

    const btns = document.querySelectorAll('.quiz-btn, .clear-btn, .answer-btn');
    btns.forEach(b => b.disabled = true);
    
    const isLast = currentQuizIndex === currentSubUnit.quizzes.length - 1;
    const isCorrect = currentInput === correctVal;
    
    if (isCorrect) {
        correctCount++;
        feedback.innerHTML = `<div style="color: #2ecc71; margin-bottom: 15px; font-size: 24px;">✨ せいかい！ ✨</div>`;
    } else {
        feedback.innerHTML = `
            <div style="color: #ff7675; margin-bottom: 15px; font-size: 20px;">ざんねん！<br>もういちど かんがえてみてね。</div>
        `;
    }

    if (!isLast) {
        feedback.innerHTML += `<button class="action-btn" onclick="startQuiz(${currentQuizIndex + 1})">つぎの もんだいへ</button>`;
    } else {
        feedback.innerHTML += `<button class="action-btn" onclick="showResults()">さいごの けっかを見る</button>`;
    }
}

function showResults() {
    const quizViewBody = document.getElementById('quiz-view-body');
    const total = currentSubUnit.quizzes.length;
    
    quizViewBody.innerHTML = `
        <div class="quiz-container">
            <h2 style="color: #3498db; margin-bottom: 20px;">✨ くいず おわり！ ✨</h2>
            <div style="font-size: 24px; margin-bottom: 20px;">
                ${total}もん ちゅう <b style="font-size: 40px; color: #e74c3c;">${correctCount}</b> もん せいかい！
            </div>
            <div style="margin-bottom: 30px;">
                ${correctCount === total ? 'ぜんぶ せいかい！ 天才（てんさい）だね！' : 'よく がんばったね！'}
            </div>
            <button class="action-btn" style="background:#95a5a6" onclick="showContent(currentSubUnit)">お勉強（べんきょう）にもどる</button>
            <button class="action-btn" style="margin-top:10px" onclick="startQuiz(0)">もういちど くいずをやる</button>
        </div>
    `;
    
    updateBreadcrumb([
        { label: 'ホーム', action: showHome },
        { label: studyData[currentSubject].name, action: showGrades },
        { label: 'けっか' }
    ]);
}

function checkAnswer(btn, correctVal) {
    // 従来のボタン形式判定（互換性のために残すか、将来的に統合）
}

function showView(id) {
    const views = ['home-view', 'grade-view', 'category-view', 'unit-view', 'sub-unit-view', 'content-view', 'quiz-view'];
    views.forEach(v => {
        const el = document.getElementById(v);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById(id);
    if (target) target.classList.remove('hidden');
}

function initQuiz() {
    const quizBox = document.getElementById('quiz-1');
    if (quizBox) {
        const nums = quizBox.querySelectorAll('.meas-num');
        const result = document.getElementById('quiz-result');
        nums.forEach(num => {
            num.onclick = () => {
                if (num.dataset.type === 'slant') {
                    num.classList.add('wrong');
                    result.innerText = 'おっと！ななめは使わないよ。';
                    setTimeout(() => num.classList.remove('wrong'), 500);
                } else {
                    num.classList.toggle('selected');
                    const sel = Array.from(quizBox.querySelectorAll('.meas-num.selected')).map(n => n.dataset.type);
                    if (sel.includes('base') && sel.includes('height')) {
                        result.innerText = '正解！ 14 × 8 ＝ 112';
                        result.style.color = '#2ecc71';
                    }
                }
            };
        });
    }
}

homeBtn.onclick = showHome;
document.querySelectorAll('.subject-card').forEach(c => { c.onclick = () => { currentSubject = c.dataset.subject; showGrades(); }; });
document.querySelectorAll('.grade-card').forEach(c => { c.onclick = () => { currentGrade = c.dataset.grade; showCategories(); }; });
backToHomeBtn.onclick = showHome;
backToGradeBtn.onclick = showGrades;
backToCategoryBtn.onclick = showCategories;
backToUnitBtn.onclick = () => showUnits(currentCategoryIndex);
backToSubUnitBtn.onclick = () => showSubUnits(currentUnitIndex);

const startQuizBtn = document.getElementById('start-quiz-btn');
const backToContentBtn = document.getElementById('back-to-content-btn');
if (startQuizBtn) startQuizBtn.onclick = () => startQuiz(0);
if (backToContentBtn) backToContentBtn.onclick = () => showContent(currentSubUnit);

showHome();
