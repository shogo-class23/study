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

                                            <p style="margin-top:20px;"><b>④ そのつぎは？ (11)</b></p>
                                            <table class="data-table" style="width: 200px; margin: 0 auto;">
                                                <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                <tr style="font-size: 24px; font-weight: bold;"><td>1</td><td>1</td></tr>
                                            </table>
                                            <p><small>「10の まとまり」が 1つと、<br>「バラ」が 1つで <b>11</b>（じゅういち）に なるんだね！</small></p>
                                        </div>

                                        <p>この <b>0</b> が ないと、「1」なのか 「10」なのか わからなくなっちゃうね。</p>

                                        <div class="point-box" style="background: #fffbe6; border: 2px solid #ffe58f;">
                                            <b>【とっても だいじな ルール】</b><br>
                                            どんなに おおきな かずでも、<b>「0, 1, 2, 3, 4, 5, 6, 7, 8, 9」</b> の 10この すうじを くみあわせて かくんだよ！
                                        </div>

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
                                            { question: "くだものは なんこ あるかな？", display: " ", answer: 0 },
                                            { question: "くだものは なんこ あるかな？", display: "(🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎)", answer: 10 },
                                            { question: "くだものは なんこ あるかな？", display: "(🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎) 🍎", answer: 11 },
                                            { question: "くだものは なんこ あるかな？", display: "🍎 🍎 🍎 🍎 🍎", answer: 5 },
                                            { question: "くだものは なんこ あるかな？", display: "🍎 🍎 🍎 🍎 🍎 🍎 🍎 🍎 🍎", answer: 9 }
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
                                        <p>ふたつの かずを じゅんばんに ならべて くらべてみよう。<br>
                                        <b>「たりない かず」</b> を かぞえると、ちがいが わかるよ！</p>
                                        
                                        <div class="data-demo">
                                            <table style="margin: 0 auto; border-collapse: collapse; text-align: center; font-size: 24px;">
                                                <tr><td>🍎</td><td>🍎</td><td>🍎</td><td>🍎</td><td>🍎</td></tr>
                                                <tr style="font-size: 16px; color: #3498db; line-height: 1;"><td>↕</td><td>↕</td><td>↕</td><td> </td><td> </td></tr>
                                                <tr><td>🍎</td><td>🍎</td><td>🍎</td><td style="color: #ccc;">○</td><td style="color: #ccc;">○</td></tr>
                                            </table>
                                        </div>
                                        
                                        <p>したの 🍎 が <b>2つ</b> たりなくて、まるが 2つあるね。<br>
                                        だから、<b>「2つ ちがう」</b> ということが わかるよ！</p>`,
                                        quizzes: [
                                            { question: "どっちが おおきいかな？（おおきい ほうの かずを おしてね）", display: "🍎🍎🍎🍎🍎 (5)<br>🍎🍎 (2)", answer: 5, options: [2, 5] },
                                            { question: "どっちが おおきいかな？（おおきい ほうの かずを おしてね）", display: "🍌🍌 (2)<br>🍌🍌🍌🍌🍌🍌🍌🍌 (8)", answer: 8, options: [2, 8] },
                                            { question: "どっちが ちいさいかな？（ちいさい ほうの かずを おしてね）", display: "🍓🍓🍓 (3)<br>🍓🍓🍓🍓🍓🍓🍓 (7)", answer: 3, options: [3, 7] },
                                            { question: "どっちが ちいさいかな？（ちいさい ほうの かずを おしてね）", display: "🍇🍇🍇🍇🍇🍇 (6)<br>🍇🍇🍇🍇 (4)", answer: 4, options: [4, 6] },
                                            { question: "なんこ ちがうかな？", display: "🍎🍎🍎🍎🍎 (5)<br>🍎🍎 (2)", answer: 3 },
                                            { question: "なんこ ちがうかな？", display: "🐱🐱🐱🐱 (4)<br>🐱🐱🐱 (3)", answer: 1 },
                                            { question: "なんこ ちがうかな？", display: "🍰 (1)<br>🍰🍰🍰 (3)", answer: 2 }
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
                                            { question: "5の まとまりは なんこ あるかな？", display: "(🖐️) (🖐️) (🖐️) (🖐️)", answer: 4 },
                                            { question: "2の まとまりは なんこ あるかな？", display: "(🍒) (🍒) (🍒)", answer: 3 },
                                            { question: "10の まとまりは なんこ あるかな？", display: "(🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵) (🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵)", answer: 2 },
                                            { question: "5の まとまりは なんこ あるかな？", display: "(🖐️) (🖐️)", answer: 2 },
                                            { question: "2の まとまりは なんこ あるかな？", display: "(🍒) (🍒) (🍒) (🍒) (🍒) (🍒)", answer: 6 },
                                            { question: "10の まとまりは なんこ あるかな？", display: "(🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵)", answer: 1 }
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

                                            <div style="background: #fff; padding: 10px; border-radius: 10px; border: 2px solid #eee; margin-top: 10px;">
                                                <p><b>③ うしろから 2ばんめ</b></p>
                                                <p>🐱 🐰 🦊 <span style="background: #ffe58f; padding: 2px 5px; border-radius: 5px; border: 2px solid #e74c3c;">🐻</span> 🦁</p>
                                                <p><small>うしろ（いちばん 右）から かぞえて 2ばんめの ことだよ。</small></p>
                                            </div>
                                        </div>
                                        
                                        <div class="point-box" style="background: #eef7ff;">
                                            <b>【ここが ポイント！】</b><br>
                                            「まえから」か 「うしろから」かで、おなじ どうぶつでも じゅんばんが かわるよ！<br>
                                            たとえば くま🐻は、まえから 4ばんめ だけど、うしろからは 2ばんめ だね。
                                        </div>
                                        
                                        <p>よく きいて、どちらから かぞえるか まちがえないように しよう！</p>`,
                                        quizzes: [
                                            { question: "「まえから 5にん」は、ぜんぶで なんこ かな？", display: "🐱 🐰 🦊 🐻 🦁 🐵 🐶 🐷 🐮", answer: 5 },
                                            { question: "さる🐵は、まえから なんばんめ かな？", display: "🐱 🐰 🦊 🐻 🦁 🐵 🐶 🐷 🐮", answer: 6 },
                                            { question: "さる🐵は、うしろから なんばんめ かな？", display: "🐱 🐰 🦊 🐻 🦁 🐵 🐶 🐷 🐮", answer: 4 },
                                            { question: "「うしろから 5にん」は、ぜんぶで なんこ かな？", display: "🐱 🐰 🦊 🐻 🦁 🐵 🐶 🐷 🐮", answer: 5 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "2. <ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) いくつになった？",
                                        content: `<h4>ふえると いくつかな？</h4>
                                        <div class="point-box" style="background: #eef7ff;">
                                            あとから ふえたときに つかうのが <b>「たしざん」</b> だよ。
                                        </div>

                                        <div class="data-demo">
                                            <h4>「＋」と 「＝」の つかいかた</h4>
                                            <p style="font-size: 24px;"><b>3 ＋ 2 ＝ 5</b></p>
                                            <div style="text-align: left; display: inline-block;">
                                                <p><b>＋（たす）：</b> ふえる、あわせる しるし。</p>
                                                <p><b>＝（は）：</b> ぜんぶで いくつに なったか おしえる しるし。</p>
                                            </div>
                                        </div>

                                        <div class="point-box" style="font-size: 14px; background: #fffbe6;">
                                            <b>【かぞえかたの ヒント】</b><br>
                                            どうぶつを かぞえるときは、<br>
                                            「1ぴき、2ひき、3びき...」と かぞえるよ。
                                        </div>

                                        <div class="data-demo" style="margin-top: 20px;">
                                            🐱 🐱 🐱 (3びき) いるところに、<br>
                                            🐱 🐱 (2ひき) きました。<br>
                                            <b>3 ＋ 2 ＝ 5</b>
                                        </div>
                                        <p>ぜんぶで <b>5ひき</b> に なったね！</p>`,
                                        quizzes: [
                                            { question: "ねこが 2ひき います。3びき きました。ぜんぶで なんびき？", display: "🐱🐱 ＋ 🐱🐱🐱", answer: 5 },
                                            { question: "あめを 4こ もっていました。2こ もらいました。ぜんぶで なんこ？", display: "🍬🍬🍬🍬 ＋ 🍬🍬", answer: 6 }
                                        ]
                                    },
                                    {
                                        title: "(2) がったいすると",
                                        content: `<h4>あわせると いくつかな？</h4>
                                        <div class="point-box">
                                            べつべつの ものを ひとつに まとめるときも <b>「たしざん」</b> だよ。
                                        </div>

                                        <div class="point-box" style="font-size: 14px; background: #fffbe6;">
                                            <b>【かぞえかたの ヒント】</b><br>
                                            ものを かぞえるときは、<br>
                                            「1つ（ひとつ）、2つ（ふたつ）、3つ（みっつ）...」と かぞえるよ。
                                        </div>

                                        <div class="data-demo">
                                            ひだりに 🍎 🍎 🍎 🍎 (4こ)<br>
                                            みぎに 🍎 🍎 (2こ)<br>
                                            <b>4 ＋ 2 ＝ 6</b>
                                        </div>
                                        <p>がったいして <b>6こ</b> に なったね！</p>`,
                                        quizzes: [
                                            { question: "あかい おはじきが 3こ、あおい おはじきが 5こ あります。ぜんぶで なんこ？", display: "🔴🔴🔴 ＋ 🔵🔵🔵🔵🔵", answer: 8 },
                                            { question: "みかんが 1こ、りんごが 4こ あります。ぜんぶで なんこ？", display: "🍊 ＋ 🍎🍎🍎🍎", answer: 5 }
                                        ]
                                    },
                                    {
                                        title: "(3) なんばんめ？",
                                        content: `<h4>じゅんばんの たしざん</h4>
                                        <p>まえから 3ばんめの うしろに、4にん ならんでいるよ。<br>
                                        ぜんぶで なんにん かな？</p>
                                        <div class="data-demo">
                                            🔵 🔵 <span style="background:#ffe58f; padding:2px; border:1px solid #e74c3c;">🔴</span> (3ばんめ)<br>
                                            ＋ 🔵 🔵 🔵 🔵 (4にん)<br>
                                            <b>3 ＋ 4 ＝ 7</b>
                                        </div>
                                        <p>ぜんぶで <b>7にん</b> だね！</p>`,
                                        quizzes: [
                                            { question: "まえから 2ばんめの うしろに、3にん います。ぜんぶで なんにん？", display: "🔵 <span style='background:#ffe58f; border:1px solid #e74c3c;'>🔴</span> ＋ 🔵 🔵 🔵", answer: 5 },
                                            { question: "まえから 4ばんめの うしろに、2にん います。ぜんぶで なんにん？", display: "🔵 🔵 🔵 <span style='background:#ffe58f; border:1px solid #e74c3c;'>🔴</span> ＋ 🔵 🔵", answer: 6 }
                                        ]
                                    },
                                    {
                                        title: "(4) ○こおおい",
                                        content: `<h4>おおいほうを もとめよう</h4>
                                        <p>りんごが 3こ あります。みかんは りんごより 2こ おおいです。<br>
                                        みかんは なんこ かな？</p>
                                        <div class="data-demo">
                                            🍎 🍎 🍎 (3こ)<br>
                                            🍊 🍊 🍊 ＋ 🍊 🍊 (2こ おおい)<br>
                                            <b>3 ＋ 2 ＝ 5</b>
                                        </div>
                                        <p>みかんは <b>5こ</b> だね！</p>`,
                                        quizzes: [
                                            { question: "あかい おはなが 4ほん あります。きいろい おはなは、あかいのより 2ほん おおいです。きいろいのは なんぼん？", display: "🌹🌹🌹🌹 ＋ 🌻🌻", answer: 6 },
                                            { question: "クッキーが 5こ あります。ケーキは、クッキーより 4こ おおいです。ケーキは なんこ？", display: "🍪🍪🍪🍪🍪 ＋ 🍰🍰🍰🍰", answer: 9 }
                                        ]
                                    },
                                    {
                                        title: "(5) ちがうものどうし",
                                        content: `<h4>ちがう 種類のものを あわせよう</h4>
                                        <p>ねこが 2ひき、いぬが 4ひき います。<br>
                                        どうぶつは ぜんぶで なんびき？</p>
                                        <div class="data-demo">
                                            🐱 🐱 (2ひき)<br>
                                            🐶 🐶 🐶 🐶 (4ひき)<br>
                                            <b>2 ＋ 4 ＝ 6</b>
                                        </div>
                                        <p>ぜんぶで <b>6ぴき</b> だね！</p>`,
                                        quizzes: [
                                            { question: "りんごが 3こ、みかんが 4こ あります。あわせて なんこ？", display: "🍎🍎🍎 ＋ 🍊🍊🍊🍊", answer: 7 },
                                            { question: "くるまが 5だい、バスが 3だい あります。あわせて なんだい？", display: "🚗🚗🚗🚗🚗 ＋ 🚌🚌🚌", answer: 8 }
                                        ]
                                    },
                                    {
                                        title: "(6) 0の たしざん",
                                        content: `<h4>なにも たさないときは？</h4>
                                        <p><b>3 ＋ 0 ＝ □</b></p>
                                        <div class="point-box" style="background: #eef7ff;">
                                            0は 「なにも ない」ことだったね。<br>
                                            なにも たさないから、かずは <b>かわらない</b> んだよ。
                                        </div>
                                        <div class="data-demo">
                                            🍎 🍎 🍎 ＋ (なし)<br>
                                            <b>＝ 3</b>
                                        </div>
                                        <p>3に 0を たしても <b>3</b> のままだね！</p>`,
                                        quizzes: [
                                            { question: "4 ＋ 0 は いくつかな？", display: "4 ＋ 0", answer: 4 },
                                            { question: "0 ＋ 7 は いくつかな？", display: "0 ＋ 7", answer: 7 },
                                            { question: "0 ＋ 0 は いくつかな？", display: "0 ＋ 0", answer: 0 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "3. <ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>（2）",
                                subUnits: [
                                    {
                                        title: "(1) 10と ◯の 足し算",
                                        content: `<h4>10と あわせると？</h4>
                                        <div class="point-box">
                                            10の まとまりに バラを あわせると、11から 19に なるよ.
                                        </div>
                                        <div class="data-demo">
                                            <p><b>10 ＋ 3 ＝ 13</b></p>
                                            <p>(10) ＋ 🍎🍎🍎</p>
                                        </div>
                                        <p>10のお部屋に 1、1のお部屋に 3を かくだけだね！</p>`,
                                        quizzes: [
                                            { question: "10 ＋ 5 は いくつかな？", display: "10 ＋ 5", answer: 15 },
                                            { question: "10 ＋ 8 は いくつかな？", display: "10 ＋ 8", answer: 18 }
                                        ]
                                    },
                                    {
                                        title: "(2) 10より 大きい 答えの 計算",
                                        content: `<h4>1の お部屋だけで 計算しよう</h4>
                                        <p><b>12 ＋ 4 ＝ □</b></p>
                                        <div class="point-box">
                                            10の まとまりは そのまま。バラの 2つと 4つを あわせて <b>6</b>！
                                        </div>
                                        <div class="data-demo">
                                            (10) と 🍎🍎 ＋ 🍎🍎🍎🍎<br>
                                            <b>＝ 16</b>
                                        </div>
                                        <p>答えは <b>16</b> だね。くりあがりが ないときは かんたんだよ！</p>`,
                                        quizzes: [
                                            { question: "13 ＋ 2 は いくつかな？", display: "13 ＋ 2", answer: 15 },
                                            { question: "11 ＋ 7 は いくつかな？", display: "11 ＋ 7", answer: 18 }
                                        ]
                                    },
                                    {
                                        title: "(3) 10の まとまりの 計算",
                                        content: `<h4>10の たばで かんがえよう</h4>
                                        <div class="point-box">
                                            10の まとまりが いくつあるか かぞえると かんたんだよ。
                                        </div>
                                        <div class="data-demo">
                                            <p><b>30 ＋ 40 ＝ □</b></p>
                                            <p>(10)(10)(10) ＋ (10)(10)(10)(10)</p>
                                            <p>3つ ＋ 4つ ＝ <b>7つ</b></p>
                                        </div>
                                        <p>10の まとまりが 7つだから、こたえは <b>70</b> だね！</p>`,
                                        quizzes: [
                                            { question: "20 ＋ 30 は いくつかな？", display: "20 ＋ 30", answer: 50 },
                                            { question: "50 ＋ 40 は いくつかな？", display: "50 ＋ 40", answer: 90 }
                                        ]
                                    },
                                    {
                                        title: "(4) バラの 足し算",
                                        content: `<h4>まとまりと バラを あわせよう</h4>
                                        <div class="data-demo">
                                            <p><b>20 ＋ 5 ＝ □</b></p>
                                            <p>(10)(10) と 🍎🍎🍎🍎🍎</p>
                                        </div>
                                        <p>10の まとまりが 2つ、バラが 5つで <b>25</b> に なるね！</p>`,
                                        quizzes: [
                                            { question: "30 ＋ 4 は いくつかな？", display: "30 ＋ 4", answer: 34 },
                                            { question: "70 ＋ 9 は いくつかな？", display: "70 ＋ 9", answer: 79 }
                                        ]
                                    },
                                    {
                                        title: "(5) 100に なったとき",
                                        content: `<h4>あたらしい おへや「100の くらい」</h4>
                                        <p>10の まとまりが <b>10こ</b> あつまると…？</p>
                                        
                                        <div class="data-demo">
                                            <table class="data-table" style="width: 300px; margin: 0 auto;">
                                                <tr>
                                                    <th style="background:#d9f7be">100の<br>おへや</th>
                                                    <th style="background:#ffe58f">10の<br>おへや</th>
                                                    <th style="background:#bae7ff">1の<br>おへや</th>
                                                </tr>
                                                <tr style="font-size: 24px; font-weight: bold; color: #e74c3c;">
                                                    <td>1</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                            </table>
                                        </div>
                                        
                                        <p>ついに 10のお部屋も いっぱいに なって、<br>もっと おおきな <b>「100のおへや」</b> に おひっこししたよ！</p>
                                        <div class="point-box">
                                            100は <b>「ひゃく」</b> と よむよ！
                                        </div>`,
                                        quizzes: [
                                            { question: "90 ＋ 10 は いくつかな？", display: "90 ＋ 10", answer: 100 },
                                            { question: "10の まとまりが 10こ あつまると いくつかな？", display: "(10)が 10こ", answer: 100 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "4. <ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) のこりは いくつ？",
                                        content: `<h4>へると いくつかな？</h4>
                                        <div class="point-box" style="background: #fff2f0;">
                                            へったり、たべたり したときに つかうのが <b>「ひきざん」</b> だよ。
                                        </div>

                                        <div class="data-demo">
                                            <h4>「－」と 「＝」の つかいかた</h4>
                                            <p style="font-size: 24px;"><b>5 － 2 ＝ 3</b></p>
                                            <div style="text-align: left; display: inline-block;">
                                                <p><b>－（ひく）：</b> へる、とる しるし。</p>
                                                <p><b>＝（は）：</b> のこりが いくつに なったか おしえる しるし。</p>
                                            </div>
                                        </div>

                                        <div class="data-demo" style="margin-top: 20px;">
                                            🍎 🍎 🍎 🍎 🍎 (5こ) あるなかから、<br>
                                            🍎 🍎 (2こ) たべました。<br>
                                            <b>5 － 2 ＝ 3</b>
                                        </div>
                                        <p>のこりは <b>3こ</b> に なったね！</p>`,
                                        quizzes: [
                                            { question: "クッキーが 4こ ありました。1こ たべました。のこりは なんこ？", display: "🍪🍪🍪🍪 － 🍪", answer: 3 },
                                            { question: "あめが 6こ ありました。2こ あげました。のこりは なんこ？", display: "🍬🍬🍬🍬🍬🍬 － 🍬🍬", answer: 4 }
                                        ]
                                    },
                                    {
                                        title: "(2) ちがいは いくつ？",
                                        content: `<h4>くらべると いくつ ちがうかな？</h4>
                                        <div class="point-box">
                                            ふたつの かずを ならべて、どちらが どのくらい おおいか（すくないか）を みるときも <b>「ひきざん」</b> だよ。
                                        </div>
                                        <div class="data-demo">
                                            <table style="margin: 0 auto; border-collapse: collapse; text-align: center; font-size: 24px;">
                                                <tr><td>🍎</td><td>🍎</td><td>🍎</td><td>🍎</td><td>🍎</td></tr>
                                                <tr style="font-size: 16px; color: #3498db; line-height: 1;"><td>↕</td><td>↕</td><td>↕</td><td> </td><td> </td></tr>
                                                <tr><td>🍊</td><td>🍊</td><td>🍊</td><td style="color: #ccc;">○</td><td style="color: #ccc;">○</td></tr>
                                            </table>
                                        </div>
                                        <p>りんごが 5こ、みかんが 3こ。ペアを つくると、りんごが <b>2つ</b> あまるね。<br>
                                        <b>5 － 3 ＝ 2</b><br>
                                        ちがいは <b>2つ</b> だね！</p>`,
                                        quizzes: [
                                            { question: "あかい おはなが 5ほん、しろい おはなが 2ほん あります。ちがいは なんぼん？", display: "🌹🌹🌹🌹🌹<br>🌻🌻", answer: 3 },
                                            { question: "バナナが 4ほん、メロンが 1こ あります。どちらが なんこ おおい？", display: "🍌🍌🍌🍌<br>🍈", answer: 3 }
                                        ]
                                    },
                                    {
                                        title: "(3) なんばんめ？",
                                        content: `<h4>じゅんばんの ひきざん</h4>
                                        <p>まえから 7にん ならんでいるよ。<br>
                                        まえから 3ばんめの ひとから うしろは、なんにん かな？</p>
                                        <div class="data-demo">
                                            🔵 🔵 <span style="background:#ffe58f; border:1px solid #e74c3c;">🔴</span> (3ばんめ)<br>
                                            ＋ 🔵 🔵 🔵 🔵 (ここを もとめたい)<br>
                                            <b>7 － 3 ＝ 4</b>
                                        </div>
                                        <p>のこりは <b>4にん</b> だね！</p>`,
                                        quizzes: [
                                            { question: "まえから 5にん ならんでいます。まえから 2ばんめの ひとより うしろは なんにん？", display: "🔵🔴 ＋ 🔵🔵🔵", answer: 3 },
                                            { question: "まえから 8にん ならんでいます。まえから 5ばんめの ひとより うしろは なんにん？", display: "🔵🔵🔵🔵🔴 ＋ 🔵🔵🔵", answer: 3 }
                                        ]
                                    },
                                    {
                                        title: "(4) なんこ すくない",
                                        content: `<h4>すくないほうを もとめよう</h4>
                                        <p>りんごが 5こ あります。みかんは りんごより 2こ すくないです。<br>
                                        みかんは なんこ かな？</p>
                                        <div class="data-demo" style="font-size: 24px;">
                                            🍎 🍎 🍎 <span style="text-decoration: line-through; color: #ccc;">🍎 🍎</span> (5こ)<br>
                                            🍊 🍊 🍊 (3こ)<br>
                                            <b>5 － 2 ＝ 3</b>
                                        </div>
                                        <p>みかんは <b>3こ</b> だね！</p>`,
                                        quizzes: [
                                            { question: "おさらが 6まい あります。コップは、おさらより 2こ すくないです。コップは なんこ？", display: "🍽️(6) － 🥛(2すくない)", answer: 4 },
                                            { question: "えんぴつが 8ほん あります。けしごむは、えんぴつより 5こ すくないです。けしごむは なんこ？", display: "✏️(8) － 🧼(5すくない)", answer: 3 }
                                        ]
                                    },
                                    {
                                        title: "(5) ちがうものどうし",
                                        content: `<h4>のこったのは どっち？</h4>
                                        <p>いぬが 4ひき、いぬのごはんが 3こ あります。<br>
                                        ごはんが あたらない いぬは なんびき？</p>
                                        <div class="data-demo">
                                            🐶 🐶 🐶 🐶 (4ひき)<br>
                                            🍖 🍖 🍖 (3こ)<br>
                                            <b>4 － 3 ＝ 1</b>
                                        </div>
                                        <p>ごはんが もらえない いぬは <b>1ぴき</b> だね！</p>`,
                                        quizzes: [
                                            { question: "うさぎが 5ひき、にんじんが 3ぼん あります。にんじんが もらえない うさぎは なんびき？", display: "🐰🐰🐰🐰🐰<br>🥕🥕🥕", answer: 2 },
                                            { question: "ねこが 3びき、おさかなが 5ひき あります。あまる おさかなは なんこ？", display: "🐱🐱🐱<br>🐟🐟🐟🐟🐟", answer: 2 }
                                        ]
                                    },
                                    {
                                        title: "(6) 0の ひきざん",
                                        content: `<h4>なにも ひかないとき、こたえが 0のとき</h4>
                                        <div class="point-box" style="background: #fff2f0;">
                                            「0を ひく」ときと、「ぜんぶ ひく」ときの お勉強だよ。
                                        </div>

                                        <h4>① 0を ひく (かわらない)</h4>
                                        <p><b>4 － 0 ＝ 4</b></p>
                                        <p>なにも とらないから、かずは そのまま。4だね！</p>

                                        <h4>② ぜんぶ ひく (0に なる)</h4>
                                        <p><b>3 － 3 ＝ 0</b></p>
                                        <p>3こ あるなかから、3こ ぜんぶ たべちゃった。のこりは 0だね！</p>`,
                                        quizzes: [
                                            { question: "5 － 0 は いくつかな？", display: "5 － 0", answer: 5 },
                                            { question: "2 － 2 は いくつかな？", display: "2 － 2", answer: 0 },
                                            { question: "0 － 0 は いくつかな？", display: "0 － 0", answer: 0 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "5. <ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>（2）",
                                subUnits: [
                                    {
                                        title: "(1) 10を つかった 引き算",
                                        content: `<h4>10から ひいてみよう</h4>
                                        <div class="data-demo">
                                            <p><b>10 － 3 ＝ 7</b></p>
                                            <p>(10) － 🍎🍎🍎</p>
                                        </div>
                                        <p>10の まとまりから バラを ひく けいさんだよ。</p>`,
                                        quizzes: [
                                            { question: "10 － 2 は いくつかな？", display: "10 － 2", answer: 8 },
                                            { question: "10 － 5 は いくつかな？", display: "10 － 5", answer: 5 }
                                        ]
                                    },
                                    {
                                        title: "(2) 10より 大きい かずの 引き算",
                                        content: `<h4>1の お部屋だけで 計算しよう</h4>
                                        <p><b>15 － 3 ＝ □</b></p>
                                        <div class="point-box">
                                            10の まとまりは そのまま。バラの 5つから 3つを ひいて <b>2</b>！
                                        </div>
                                        <div class="data-demo">
                                            (10) と 🍎🍎🍎🍎🍎 － 🍎🍎🍎<br>
                                            <b>＝ 12</b>
                                        </div>
                                        <p>答えは <b>12</b> だね！</p>`,
                                        quizzes: [
                                            { question: "17 － 4 は いくつかな？", display: "17 － 4", answer: 13 },
                                            { question: "19 － 6 は いくつかな？", display: "19 － 6", answer: 13 }
                                        ]
                                    },
                                    {
                                        title: "(3) 10の まとまりの 引き算",
                                        content: `<h4>10の たばで ひいてみよう</h4>
                                        <div class="data-demo">
                                            <p><b>70 － 30 ＝ □</b></p>
                                            <p>(10)(10)(10)(10)(10)(10)(10) － (10)(10)(10)</p>
                                            <p>7つ － 3つ ＝ <b>4つ</b></p>
                                        </div>
                                        <p>10の まとまりが 4つだから、こたえは <b>40</b> だね！</p>`,
                                        quizzes: [
                                            { question: "50 － 20 は いくつかな？", display: "50 － 20", answer: 30 },
                                            { question: "80 － 40 は いくつかな？", display: "80 － 40", answer: 40 }
                                        ]
                                    },
                                    {
                                        title: "(4) バラの 引き算",
                                        content: `<h4>バラを ぜんぶ ひいてみよう</h4>
                                        <p><b>25 － 5 ＝ □</b></p>
                                        <div class="data-demo">
                                            (10)(10) と 🍎🍎🍎🍎🍎 － 🍎🍎🍎🍎🍎<br>
                                            <b>＝ 20</b>
                                        </div>
                                        <p>バラが なくなって、10の まとまりだけが のこるね！</p>`,
                                        quizzes: [
                                            { question: "34 － 4 は いくつかな？", display: "34 － 4", answer: 30 },
                                            { question: "68 － 8 は いくつかな？", display: "68 － 8", answer: 60 }
                                        ]
                                    },
                                    {
                                        title: "(5) 100からの 引き算",
                                        content: `<h4>100から 10を ひくと？</h4>
                                        <div class="point-box">
                                            100は 10の まとまりが 10こ だったね。<br>
                                            そこから 10（まとまり1つ）を ひくと…？
                                        </div>
                                        <div class="data-demo">
                                            (10)が 10こ － (10)が 1こ<br>
                                            <b>＝ (10)が 9こ</b>
                                        </div>
                                        <p>答えは <b>90</b> だね！</p>`,
                                        quizzes: [
                                            { question: "100 － 10 は いくつかな？", display: "100 － 10", answer: 90 },
                                            { question: "100 － 50 は いくつかな？", display: "100 － 50", answer: 50 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "6. 3つの かずの けいさん",
                                subUnits: [
                                    {
                                        title: "(1) じゅんばんに 計算しよう",
                                        content: `<h4>まえから ひとつずつ 計算しよう</h4>
                                        <div class="point-box">
                                            かずが 3つ 以上（いじょう）あっても、まえから じゅんばんに やれば 大丈夫（だいじょうぶ）だよ！
                                        </div>

                                        <h4>① たしざん だけの とき</h4>
                                        <p><b>2 ＋ 3 ＋ 4 ＝ □</b></p>
                                        <p>2 ＋ 3 をして <b>5</b>。つぎに 5 ＋ 4 をして <b>9</b>！</p>

                                        <h4>② ひきざん だけの とき</h4>
                                        <p><b>10 － 2 － 3 ＝ □</b></p>
                                        <p>10 － 2 をして <b>8</b>。つぎに 8 － 3 をして <b>5</b>！</p>

                                        <h4>③ たしざんと ひきざんが まざっている とき</h4>
                                        <div class="data-demo">
                                            <p><b>5 ＋ 4 － 2 ＝ □</b></p>
                                            <p>5 ＋ 4 をして <b>9</b>。そのあとに 9 － 2 をして <b>7</b>！</p>
                                        </div>
                                        <p>どんなときでも、<b>「まえから ひとつずつ」</b> が 合言葉（あいことば）だよ！</p>`,
                                        quizzes: [
                                            { question: "2 ＋ 5 ＋ 1 は いくつかな？", display: "2 ＋ 5 ＋ 1", answer: 8 },
                                            { question: "9 － 4 － 2 は いくつかな？", display: "9 － 4 － 2", answer: 3 },
                                            { question: "6 ＋ 3 － 5 は いくつかな？", display: "6 ＋ 3 － 5", answer: 4 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "7. <ruby>引<rt>ひ</rt></ruby>けない？！",
                                subUnits: [
                                    {
                                        title: "(1) ちいさい かずから ひけるかな？",
                                        content: `<h4>3つしかないのに 5つ ひける？</h4>
                                        <div class="data-demo">
                                            🍎 🍎 🍎 － 🍎 🍎 🍎 🍎 🍎 ＝ <b>？</b>
                                        </div>
                                        <p>1ねんせいの みんなは、<b>「ひけない！」</b> って おもうよね。</p>
                                        <div class="point-box" style="background: #f0f5ff;">
                                            <b>【みらいの おべんきょう】</b><br>
                                            ちゅうがくせいに なると、<b>「マイナス」</b> という かずを つかって、<br>
                                            0よりも ちいさい かずを おべんきょうするんだよ！
                                        </div>
                                        <p>れいぞうこの なか みたいに、とっても さむい かずの世界（せかい）があるんだ。ふしぎだね！</p>`
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "2 <ruby>図形<rt>ずけい</rt></ruby>",
                        units: [
                            {
                                title: "1. いろいろな かたち",
                                subUnits: [
                                    {
                                        title: "(1) かたちの なまえ",
                                        content: `<h4>かたちと なまえ</h4>
                                        <div class="shape-demo-box" style="display:flex; justify-content:center; gap:30px; align-items:flex-end;">
                                            <div style="text-align:center;">
                                                <div style="width:60px; height:60px; background:#e74c3c; border-radius:50%; margin:0 auto 10px;"></div>
                                                <div style="font-weight:bold;">まる</div>
                                            </div>
                                            <div style="text-align:center;">
                                                <div style="width:0; height:0; border-left:30px solid transparent; border-right:30px solid transparent; border-bottom:50px solid #2ecc71; margin:0 auto 10px;"></div>
                                                <div style="font-weight:bold;">さんかく</div>
                                            </div>
                                            <div style="text-align:center;">
                                                <div style="width:60px; height:60px; background:#3498db; margin:0 auto 10px;"></div>
                                                <div style="font-weight:bold;">しかく</div>
                                            </div>
                                        </div>
                                        <p>まわりにある ものから、いろいろな 形（かたち）を 見（み）つけてみよう！</p>`
                                    },
                                    {
                                        title: "(2) はこ、つつ、ボール",
                                        content: `<h4>かたちの とくちょうを 知（し）ろう</h4>
                                        
                                        <div style="display:flex; flex-direction:column; gap:20px;">
                                            <div class="point-box" style="background:#eef7ff;">
                                                <b>① はこの かたち (📦)</b><br>
                                                ・<b>たいらな ところ</b> ばかり だから、ころがらないよ。<br>
                                                ・きれいに <b>つめる</b> ことができるよ。
                                            </div>

                                            <div class="point-box" style="background:#fff2f0;">
                                                <b>② ボールの かたち (⚽️)</b><br>
                                                ・どこも <b>まるい ところ</b> ばかり だから、どこへでも ころがるよ。
                                            </div>

                                            <div class="point-box" style="background:#f6ffed; border-left-color:#52c41a;">
                                                <b>③ つつの かたち (🥤)</b><br>
                                                ・<b>まるい ところ</b> を つかうと、ころがるよ。<br>
                                                ・<b>たいらな ところ</b> を つかうと、つめるよ！
                                            </div>
                                        </div>
                                        
                                        <p>おきかたを かえると ころがったり つめたり できる 「つつ」は おもしろいね！</p>`
                                    }
                                ]
                            },
                            {
                                title: "2. かたちづくり",
                                subUnits: [
                                    {
                                        title: "(1) さんかくを くっつける",
                                        content: `<h4>さんかく 2まいで なにが できる？</h4>
                                        <div class="data-demo">
                                            <p>おなじ さんかくを 2まい あわせると…</p>
                                            <div style="display:flex; justify-content:center; align-items:center; gap:10px;">
                                                <div style="width:40px; height:40px; background:#e74c3c; clip-path:polygon(0 0, 100% 0, 0 100%)"></div>
                                                <span>＋</span>
                                                <div style="width:40px; height:40px; background:#e74c3c; clip-path:polygon(0 0, 100% 0, 0 100%); transform:rotate(180deg)"></div>
                                                <span>＝</span>
                                                <div style="width:40px; height:40px; background:#e74c3c;"></div>
                                            </div>
                                            <p>大きな <b>しかく</b> に なったね！</p>
                                        </div>`
                                    },
                                    {
                                        title: "(2) しかくを くっつける",
                                        content: `<h4>しかくを ならべてみよう</h4>
                                        <div class="data-demo">
                                            <p>しかくを 2つ よこに ならべると…</p>
                                            <div style="display:flex; justify-content:center; align-items:center; gap:5px;">
                                                <div style="width:40px; height:40px; background:#3498db;"></div>
                                                <div style="width:40px; height:40px; background:#3498db;"></div>
                                            </div>
                                            <p>ながい <b>しかく（長方形）</b> に なったね！</p>
                                        </div>
                                        <p>たくさん ならべると、おうち や ロケット も つくれるよ。</p>`
                                    }
                                ]
                            },
                            {
                                title: "3. 位置（どこに あるかな？）",
                                subUnits: [
                                    {
                                        title: "(1) うえ・した・まえ・うしろ",
                                        content: `<h4>ことばで おしえてあげよう</h4>
                                        <div class="data-demo" style="background:#fff; padding:20px; border-radius:10px;">
                                            ☁️ (うえ)<br>
                                            🏠 (まんなか)<br>
                                            🌻 (した)
                                        </div>
                                        <p>おうちの <b>うえ</b> には くも、<b>した</b> には ひまわりが あるね！</p>`,
                                        quizzes: [
                                            { question: "いすの 「うえ」に あるものは なにかな？", display: "🕒 (とけい)<br>🪑 (いす)<br>📦 (はこ)", answer: "🕒", options: ["🕒", "🪑", "📦"] },
                                            { question: "とけいの 「した」に あるものは なにかな？", display: "🕒 (とけい)<br>🪑 (いす)<br>📦 (はこ)", answer: "🪑", options: ["🕒", "🪑", "📦"] }
                                        ]
                                    },
                                    {
                                        title: "(2) ひだり・みぎ",
                                        content: `<h4>て を 見て おぼえよう</h4>
                                        <div class="data-demo" style="display:flex; justify-content:center; gap:50px; font-size:40px;">
                                            <div>✋<br><small style="font-size:14px;">ひだり</small></div>
                                            <div>🤚<br><small style="font-size:14px;">みぎ</small></div>
                                        </div>
                                        <p>おはしを もつほう（または、おちゃわんを もつほう）は どっちかな？</p>`,
                                        quizzes: [
                                            { question: "いすの 「ひだり」に あるものは なにかな？", display: "📚 (たな)　🪑 (いす)　🗑️ (ごみばこ)", answer: "📚", options: ["📚", "🪑", "🗑️"] },
                                            { question: "たなの 「みぎ」に あるものは なにかな？", display: "📚 (たな)　🪑 (いす)　🗑️ (ごみばこ)", answer: "🪑", options: ["📚", "🪑", "🗑️"] }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>",
                        units: [
                            {
                                title: "1. どっちが ながい？",
                                subUnits: [
                                    {
                                        title: "(1) はしを そろえて くらべよう",
                                        content: `<h4>ながさを くらべるときは？</h4>
                                        <div class="point-box" style="background:#eef7ff;">
                                            ふたつの ものを くらべるときは、<b>「はし」を ぴったり あわせる</b> ことが、とっても だいじだよ！
                                        </div>

                                        <div class="data-demo">
                                            <p><b>① はしが そろっていないとき (だめ❌)</b></p>
                                            <div style="text-align: left; padding-left: 80px; line-height: 2.5;">
                                                　　<span style="background:#ffd6e7; padding: 5px 60px 5px 2px; border-radius: 3px;">✏️</span><br>
                                                <span style="background:#bae7ff; padding: 5px 40px 5px 2px; border-radius: 3px;">✏️</span>
                                            </div>
                                            <p><small>これだと、どっちが ながいか よくわからないね。</small></p>

                                            <p style="margin-top: 20px;"><b>② はしを そろえたとき (せいかい⭕️)</b></p>
                                            <div style="display:flex; justify-content:center; align-items:flex-end; gap:5px; line-height: 2.5;">
                                                <div style="border-left: 3px solid #ff4d4f; height: 70px;"></div>
                                                <div style="text-align: left;">
                                                    <span style="background:#ffd6e7; padding: 5px 60px 5px 2px; border-radius: 3px;">✏️</span><br>
                                                    <span style="background:#bae7ff; padding: 5px 40px 5px 2px; border-radius: 3px;">✏️</span>
                                                </div>
                                            </div>
                                            <p><small>はしを そろえると、ピンクの ほうが ながいことが すぐわかるよ！</small></p>
                                        </div>`
                                    }
                                ]
                            },
                            {
                                title: "2. どっちが おおきい？",
                                subUnits: [
                                    {
                                        title: "(1) ひろさを くらべよう",
                                        content: `<h4>ひろさくらべ</h4>
                                        <div class="point-box" style="background:#fff2f0;">
                                            ・かさねてみて、<b>はみ出した ほう</b> が ひろいよ。<br>
                                            ・<b>マスの かず</b> を かぞえて くらべることも できるよ！
                                        </div>
                                        <div class="tile-grid">
                                            <div class="tiles" style="background:#bae7ff; padding:5px;">🟦🟦<br>🟦🟦 (4つ)</div>
                                            <div style="font-size:24px;">＜</div>
                                            <div class="tiles" style="background:#ffd6e7; padding:5px;">💗💗💗<br>💗💗💗 (6つ)</div>
                                        </div>`
                                    }
                                ]
                            },
                            {
                                title: "3. どっちが おおい？",
                                subUnits: [
                                    {
                                        title: "(1) かさ（みずの りょう）を くらべよう",
                                        content: `<h4>かさくらべ</h4>
                                        <p>どちらが たくさん はいるかな？</p>
                                        <div class="point-box" style="background:#f6ffed; border-left-color:#52c41a;">
                                            <b>おなじ コップ</b> で なんばいぶん あるか かぞえてみよう！
                                        </div>
                                        <div class="data-demo">
                                            🫖 ➔ 🥤🥤🥤🥤 (4はい)<br>
                                            🍶 ➔ 🥤🥤 (2はい)
                                        </div>
                                        <p>コップの かずが おおいほうが、たくさん はいるね！</p>`
                                    }
                                ]
                            },
                            {
                                title: "4. ちょくせつ 計れない 場合",
                                subUnits: [
                                    {
                                        title: "(1) なにかに かえて くらべよう",
                                        content: `<h4>はなれた ところに あるときは？</h4>
                                        <div class="point-box" style="background:#fffbe6;">
                                            つくえの ながさと、ドアの はば。かさねられないときは <b>「なにか」</b> を つかおう！
                                        </div>
                                        <p>・<b>ひも</b> で はかって、その ひもの ながさを くらべる。<br>
                                        ・<b>えんぴつ</b> が なんぼんぶん あるか かぞえる。</p>
                                        <div class="data-demo">
                                            📐 ➔ ✏️ ✏️ ✏️ (3ぼんぶん)<br>
                                            📋 ➔ ✏️ ✏️ (2ほんぶん)
                                        </div>
                                        <p>このように、かずで あらわすと くらべやすくなるよ！</p>`
                                    }
                                ]
                            },
                            {
                                title: "5. とけい",
                                subUnits: [
                                    {
                                        title: "(1) なんじ・なんじはん",
                                        content: `<h4>とけいの よみかた</h4>
                                        <div class="point-box" style="background:#f9f0ff; border-left-color:#722ed1;">
                                            ・<b>みじかい はり：</b> 「なんじ」を おしえるよ。<br>
                                            ・<b>ながい はり：</b> 「なんぷん」を おしえるよ。
                                        </div>

                                        <div class="data-demo" style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;">
                                            <div style="background:#fff; padding:15px; border-radius:10px; border:2px solid #eee; width:150px;">
                                                <div style="font-size:40px;">🕛</div>
                                                <div style="font-weight:bold; color:#e74c3c; font-size:20px; margin-top:10px;">12じ</div>
                                                <div style="font-size:12px; color:#666;">（ちょうど）</div>
                                            </div>
                                            <div style="background:#fff; padding:15px; border-radius:10px; border:2px solid #eee; width:150px;">
                                                <div style="font-size:40px;">🕡</div>
                                                <div style="font-weight:bold; color:#3498db; font-size:20px; margin-top:10px;">6じはん</div>
                                                <div style="font-size:12px; color:#666;">（はん）</div>
                                            </div>
                                        </div>

                                        <p style="margin-top:20px;">ながい はりが <b>12</b> なら 「〜じ」、<br>
                                        ながい はりが <b>6</b> なら 「〜じはん」だよ！</p>`,
                                        quizzes: [
                                            { question: "なんじかな？", display: "🕘", answer: "9じ" },
                                            { question: "なんじかな？", display: "🕓", answer: "4じ" },
                                            { question: "なんじかな？", display: "🕞", answer: "3じはん" }
                                        ]
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
let correctCount = 0;
let shuffledQuizzes = []; // シャッフルした問題をいれる

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function showContent(s) {
    currentSubUnit = s;
    currentQuizIndex = 0;
    correctCount = 0;
    
    // クイズがある場合はシャッフルして準備する
    if (s.quizzes && s.quizzes.length > 0) {
        shuffledQuizzes = shuffleArray(s.quizzes);
    } else {
        shuffledQuizzes = [];
    }

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
    if (!currentSubUnit || shuffledQuizzes.length === 0 || !shuffledQuizzes[index]) return;
    currentQuizIndex = index;
    if (index === 0) correctCount = 0; // 1問目ならリセット
    
    const q = shuffledQuizzes[currentQuizIndex];
    const quizViewBody = document.getElementById('quiz-view-body');
    currentInput = ""; 
    
    quizViewBody.innerHTML = `
        <div class="quiz-container">
            <div style="font-size: 18px; color: #666; margin-bottom: 10px;">
                ${currentQuizIndex + 1} / ${shuffledQuizzes.length} もんめ
            </div>
            <div class="quiz-question">${q.question}</div>
            <div class="quiz-display">${q.display}</div>
            
            ${q.options ? `
                <!-- 選択肢が指定されている場合（どっちが大きい？など） -->
                <div class="quiz-options" style="margin-top: 20px;">
                    ${q.options.map(opt => `<button class="quiz-btn" style="width: auto; min-width: 80px; padding: 10px;" onclick="checkPictorialAnswer(this, '${q.answer}')">${opt}</button>`).join('')}
                </div>
            ` : `
                <!-- テンキー入力の場合（いくつある？など） -->
                <div style="display:flex; justify-content:center; align-items:center;">
                    <div class="quiz-input-display" id="input-display"> </div>
                    <button class="clear-btn" onclick="clearNumber()">けす</button>
                </div>

                <div class="numeric-pad">
                    ${[1,2,3,4,5,6,7,8,9,0].map(n => `<button class="quiz-btn" onclick="typeNumber(${n})">${n}</button>`).join('')}
                    <button class="quiz-btn" style="background:#fffbe6;" onclick="typeNumber('じ')">じ</button>
                    <button class="quiz-btn" style="background:#fffbe6;" onclick="typeNumber('はん')">はん</button>
                </div>
                
                <button class="answer-btn" onclick="submitAnswer()">こたえあわせ</button>
            `}
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
        if (currentInput.endsWith('はん')) {
            currentInput = currentInput.slice(0, -2);
        } else {
            currentInput = currentInput.slice(0, -1);
        }
        const display = document.getElementById('input-display');
        if (display) display.innerText = currentInput === "" ? " " : currentInput;
    }
}

function checkPictorialAnswer(btn, correctVal) {
    const feedback = document.getElementById('quiz-feedback');
    const btns = btn.parentElement.querySelectorAll('.quiz-btn');
    btns.forEach(b => b.disabled = true); // すべて無効化

    // 正解の値（文字列か数値か）を調整して比較
    const selectedVal = btn.innerText;
    const isCorrect = (selectedVal == correctVal); // 型を気にせず比較

    if (isCorrect) {
        btn.classList.add('correct');
        correctCount++;
        feedback.innerHTML = `<div style="color: #2ecc71; margin-bottom: 15px; font-size: 24px;">✨ せいかい！ ✨</div>`;
    } else {
        btn.classList.add('wrong');
        feedback.innerHTML = `
            <div style="color: #ff7675; margin-bottom: 15px; font-size: 20px;">ざんねん！<br>もういちど かんがえてみてね。</div>
        `;
    }

    const isLast = currentQuizIndex === shuffledQuizzes.length - 1;
    if (!isLast) {
        feedback.innerHTML += `<button class="action-btn" onclick="startQuiz(${currentQuizIndex + 1})">つぎの もんだいへ</button>`;
    } else {
        feedback.innerHTML += `<button class="action-btn" onclick="showResults()">さいごの けっかを見る</button>`;
    }
}

function submitAnswer() {
    if (currentInput === "") return;
    
    const feedback = document.getElementById('quiz-feedback');
    const q = shuffledQuizzes[currentQuizIndex];
    const correctVal = q.answer.toString();

    const btns = document.querySelectorAll('.quiz-btn, .clear-btn, .answer-btn');
    btns.forEach(b => b.disabled = true);
    
    const isLast = currentQuizIndex === shuffledQuizzes.length - 1;
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
    const total = shuffledQuizzes.length;
    
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
            <button class="action-btn" style="margin-top:10px" onclick="showContent(currentSubUnit); setTimeout(()=>startQuiz(0), 10);">もういちど くいずをやる</button>
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
