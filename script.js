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
                                            ひとつずつ ふえると、かずの なまえも かわるよ。
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
                                        
                                        <h4>かずが ふえると おへやはどうなる？</h4>
                                        <div class="data-demo">
                                            <p><b>① 0 (なにも ないとき)</b></p>
                                            <table class="data-table" style="width: 200px; margin: 0 auto;">
                                                <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                <tr style="font-size: 24px;"><td> </td><td>0</td></tr>
                                            </table>
                                            <p><small>「0」とかくよ。</small></p>

                                            <p style="margin-top:20px;"><b>② 1から 9まで ふえていくよ</b></p>
                                            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
                                                <table class="data-table" style="width: 200px;">
                                                    <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                    <tr style="font-size: 24px;"><td> </td><td>1</td></tr>
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
                                            <p>10こ あつまると、おとなり（ひだり）の お部屋（おへや）に ひっこしするよ！</p>
                                        </div>

                                        <div class="point-box" style="font-size: 14px;">
                                            <b>【きをつけよう！】</b><br>
                                            一番（いちばん） まえの おへやが 0 のときは、かかない きまりだよ。<br>
                                            （「010」とは かかずに、「10」と かくんだよ！）
                                        </div>

                                        <p>0は、<b>「ここにおへやはあるけど、なかみは からっぽだよ！」</b> と おしえてくれる たいせつな しるしんだよ。</p>`,
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
                                            { question: "ねこが 2ひき います. 3びき きました。ぜんぶで なんびき？", display: "🐱🐱 ＋ 🐱🐱🐱", answer: 5 },
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
                                            { question: "あめを 3こ、りんごを 5こ あります。ぜんぶで なんこ？", display: "🍬🍬🍬 ＋ 🍎🍎🍎🍎🍎", answer: 8 },
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
                                            { question: "まえから 2ばんめの うしろに、3にん います. ぜんぶで なんにん？", display: "🔵 <span style='background:#ffe58f; border:1px solid #e74c3c;'>🔴</span> ＋ 🔵 🔵 🔵", answer: 5 },
                                            { question: "まえから 4ばんめの うしろに、2にん います. ぜんぶで なんにん？", display: "🔵 🔵 🔵 <span style='background:#ffe58f; border:1px solid #e74c3c;'>🔴</span> ＋ 🔵 🔵", answer: 6 }
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
                                            { question: "あかい おはなが 4ほん あります. きいろい おはなは、あかいのより 2ほん おおいです。きいろいのは なんぼん？", display: "🌹🌹🌹🌹 ＋ 🌻🌻", answer: 6 },
                                            { question: "クッキーが 5こ あります。ケーキは、キュッキーより 4こ おおいです. ケーキは なんこ？", display: "🍪🍪🍪🍪🍪 ＋ 🍰🍰🍰🍰", answer: 9 },
                                            { question: "いぬが 2ひき います. ねこは、いぬより 3びき おおいです. ねこは なんびき？", display: "🐶🐶 ＋ 🐱🐱🐱", answer: 5 }
                                        ]
                                    },
                                    {
                                        title: "(5) ちいさな 種類のものを あわせよう",
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
                                            { question: "りんごが 3こ、みかんが 4こ あります. あわせて なんこ？", display: "🍎🍎🍎 ＋ 🍊🍊🍊🍊", answer: 7 },
                                            { question: "くるまが 5だい、バスが 3だい あります. あわせて なんだい？", display: "🚗🚗🚗🚗🚗 ＋ 🚌🚌🚌", answer: 8 },
                                            { question: "とりが 1わ、ちょうちょが 6ぴき います. ぜんぶで いくつ？", display: "🐦 ＋ 🦋🦋🦋🦋🦋🦋", answer: 7 }
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
                                            { question: "0 ＋ 0 は いくつかな？", display: "0 ＋ 0", answer: 0 },
                                            { question: "10 ＋ 0 は いくつかな？", display: "10 ＋ 0", answer: 10 },
                                            { question: "0 ＋ 5 は いくつかな？", display: "0 ＋ 5", answer: 5 }
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
                                            { question: "10 ＋ 8 は いくつかな？", display: "10 ＋ 8", answer: 18 },
                                            { question: "10 ＋ 2 は いくつかな？", display: "10 ＋ 2", answer: 12 },
                                            { question: "10 ＋ 9 は いくつかな？", display: "10 ＋ 9", answer: 19 },
                                            { question: "10 ＋ 1 は いくつかな？", display: "10 ＋ 1", answer: 11 }
                                        ]
                                    },
                                    {
                                        title: "(2) 10より 大きい 答えの 計算",
                                        content: `<h4>1の お部屋だけで 計算しよう</h4>
                                        <p><b>12 ＋ 4 ＝ □</b></p>
                                        <div class="point-box">
                                            10の まとまりは そのまま. バラの 2つと 4つを あわせて <b>6</b>！
                                        </div>
                                        <div class="data-demo">
                                            (10) と 🍎🍎 ＋ 🍎🍎🍎🍎<br>
                                            <b>＝ 16</b>
                                        </div>
                                        <p>答えは <b>16</b> だね. くりあがりが ないときは かんたんだよ！</p>`,
                                        quizzes: [
                                            { question: "13 ＋ 2 は いくつかな？", display: "13 ＋ 2", answer: 15 },
                                            { question: "11 ＋ 7 は いくつかな？", display: "11 ＋ 7", answer: 18 },
                                            { question: "15 ＋ 4 は いくつかな？", display: "15 ＋ 4", answer: 19 },
                                            { question: "14 ＋ 5 は いくつかな？", display: "14 ＋ 5", answer: 19 },
                                            { question: "12 ＋ 6 は いくつかな？", display: "12 ＋ 6", answer: 18 }
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
                                            { question: "50 ＋ 40 は いくつかな？", display: "50 ＋ 40", answer: 90 },
                                            { question: "10 ＋ 60 は いくつかな？", display: "10 ＋ 60", answer: 70 },
                                            { question: "30 ＋ 30 は いくつかな？", display: "30 ＋ 30", answer: 60 },
                                            { question: "20 ＋ 70 は いくつかな？", display: "20 ＋ 70", answer: 90 }
                                        ]
                                    },
                                    {
                                        title: "(4) バラの 足し算",
                                        content: `<h4>バラを あわせよう</h4>
                                        <div class="data-demo">
                                            <p><b>20 ＋ 5 ＝ □</b></p>
                                            <p>(10)(10) と 🍎🍎🍎🍎🍎</p>
                                        </div>
                                        <p>10の まとまりが 2つ、バラが 5つで <b>25</b> に なるね！</p>`,
                                        quizzes: [
                                            { question: "30 ＋ 4 は いくつかな？", display: "30 ＋ 4", answer: 34 },
                                            { question: "70 ＋ 9 は いくつかな？", display: "70 ＋ 9", answer: 79 },
                                            { question: "50 ＋ 2 は いくつかな？", display: "50 ＋ 2", answer: 52 },
                                            { question: "10 ＋ 6 は いくつかな？", display: "10 ＋ 6", answer: 16 },
                                            { question: "80 ＋ 3 は いくつかな？", display: "80 ＋ 3", answer: 83 }
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
                                            へったり、たべたり したときに つかうのが <b>「ひきざん」</b> だよ.
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
                                            { question: "クッキーが 4こ ありました. 1こ たべました。のこりは なんこ？", display: "🍪🍪🍪🍪 － 🍪", answer: 3 },
                                            { question: "あめが 6こ ありました. 2こ あげました。のこりは なんこ？", display: "🍬🍬🍬🍬🍬🍬 － 🍬🍬", answer: 4 }
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
                                            { question: "あかい おはなが 5ほん、しろい おはなが 2ほん あります. ちがいは なんぼん？", display: "🌹🌹🌹🌹🌹<br>🌻🌻", answer: 3 },
                                            { question: "バナナが 4ほん、メロンが 1こ あります. どちらが なんこ おおい？", display: "🍌🍌🍌🍌<br>🍈", answer: 3 }
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
                                            { question: "まえから 5にん ならんでいます. まえから 2ばんめの ひとより うしろは なんにん？", display: "🔵🔴 ＋ 🔵🔵🔵", answer: 3 },
                                            { question: "まえから 8にん ならんでいます. まえから 5ばんめの ひとより うしろは なんにん？", display: "🔵🔵🔵🔵🔴 ＋ 🔵🔵🔵", answer: 3 }
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
                                            { question: "おさらが 6まい あります. コップは、おさらより 2こ すくないです。コップは なんこ？", display: "🍽️(6) － 🥛(2すくない)", answer: 4 },
                                            { question: "えんぴつが 8ほん あります. けしごむは、えんぴつより 5こ すくないです。けしごむは なんこ？", display: "✏️(8) － 🧼(5すくない)", answer: 3 }
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
                                            { question: "うさぎが 5ひき、にんじんが 3ぼん あります. にんじんが もらえない うさぎは なんびき？", display: "🐰🐰🐰🐰🐰<br>🥕🥕🥕", answer: 2 },
                                            { question: "ねこが 3びき、おさかなが 5ひき あります. あまる おさかなは なんこ？", display: "🐱🐱🐱<br>🐟🐟🐟🐟🐟", answer: 2 }
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
                                        <p>なにも とらないから、かずは そのまま. 4だね！</p>

                                        <h4>② ぜんぶ ひく (0に なる)</h4>
                                        <p><b>3 － 3 ＝ 0</b></p>
                                        <p>3こ あるなかから、3こ ぜんぶ たべちゃった. のこりは 0だね！</p>`,
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
                                        <p>れいぞうこの なか みたいに、とっても さむい かずの世界（せかい）があるんだ. ふしぎだね！</p>`
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
                                            つくえの ながさと、ドアの はば. かさねられないときは <b>「なにか」</b> を つかおう！
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
                                            { question: "なんじかな？", display: "🕧", answer: "12じはん" },
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
                                title: "1. どっちが おおきい？",
                                subUnits: [
                                    {
                                        title: "(1) 大きさと かず",
                                        content: `<h4>見た目に だまされないで かぞえよう</h4>
                                        <div class="point-box">
                                            「バランスボール」と 「スーパーボール」。<br>
                                            どっちが たくさん あるかな？
                                        </div>

                                        <div class="data-demo">
                                            <p><b>① そのまま 見たとき</b></p>
                                            <div style="font-size: 40px;">🔵 🔵 🔵</div>
                                            <p><small>バランスボール（大きい）</small></p>
                                            <div style="font-size: 14px;">⚪️ ⚪️ ⚪️ ⚪️ ⚪️</div>
                                            <p><small>スーパーボール（小さい）</small></p>
                                        </div>
                                        
                                        <p>大きい バランスボールの ほうが、たくさん あるように 見えるね。</p>

                                        <div class="data-demo" style="margin-top: 20px;">
                                            <p><b>② 大きさを そろえて ならべたとき</b></p>
                                            <table style="margin: 0 auto; border-collapse: collapse; text-align: center; font-size: 20px;">
                                                <tr><td>🔵</td><td>🔵</td><td>🔵</td><td> </td><td> </td></tr>
                                                <tr><td>⚪️</td><td>⚪️</td><td>⚪️</td><td>⚪️</td><td>⚪️</td></tr>
                                            </table>
                                        </div>

                                        <p>大きさを おなじにして ならべると、<br>
                                        スーパーボールの ほうが <b>2つ おおい</b> ことが わかるよ！</p>`,
                                        quizzes: [
                                            { 
                                                question: "どっちが おおいかな？（かずを かぞえてね）", 
                                                display: "🔵 🔵 🔵 (バランスボール)<br>⚪️ ⚪️ ⚪️ ⚪️ ⚪️ (スーパーボール)", 
                                                answer: "⚪️", 
                                                options: ["🔵", "⚪️"] 
                                            },
                                            { 
                                                question: "どっちが おおいかな？（かずを かぞえてね）", 
                                                display: "✏️ ✏️ (ながいえんぴつ)<br>🖍️ 🖍️ 🖍️ 🖍️ (みじかいクレヨン)", 
                                                answer: "🖍️", 
                                                options: ["✏️", "🖍️"] 
                                            }
                                        ]
                                    },
                                    {
                                        title: "(2) ななかまに わけよう",
                                        content: `<h4>おなじ 種類（しゅるい）を あつめよう</h4>
                                        <div class="data-demo">
                                            🍎 🍊 🍎 🍌 🍊 🍎<br>
                                            <small>バラバラだと かぞえにくいね。</small>
                                        </div>
                                        <div class="point-box" style="background: #f6ffed;">
                                            <b>「りんご」</b> <b>「みかん」</b> <b>「バナナ」</b> <br>
                                            種類（しゅるい）ごとに 整理（せいり）してみよう！
                                        </div>
                                        <div class="data-demo">
                                            🍎🍎🍎 (3こ)<br>
                                            🍊🍊 (2こ)<br>
                                            🍌 (1こ)
                                        </div>`,
                                        quizzes: [
                                            { question: "りんご🍎は なんこ あったかな？", display: "🍎 🍊 🍎 🍌 🍊 🍎", answer: 3 }
                                        ]
                                    },
                                    {
                                        title: "(3) グラフに しよう",
                                        content: `<h4>したから つみあげてみよう</h4>
                                        <p>整理（せいり）した かずを、グラフに してみるよ。</p>
                                        <div class="data-demo">
                                            <div style="display:flex; justify-content:center; align-items:flex-end; gap:20px; height:120px;">
                                                <div style="display:flex; flex-direction:column-reverse; border-bottom:2px solid #333;">🍎<br>🍎<br>🍎</div>
                                                <div style="display:flex; flex-direction:column-reverse; border-bottom:2px solid #333;">🍊<br>🍊</div>
                                                <div style="display:flex; flex-direction:column-reverse; border-bottom:2px solid #333;">🍌</div>
                                            </div>
                                            <div style="display:flex; justify-content:center; gap:20px; font-size:12px; margin-top:5px;">
                                                <div style="width:30px;">りんご</div>
                                                <div style="width:30px;">みかん</div>
                                                <div style="width:30px;">バナナ</div>
                                            </div>
                                        </div>
                                        <p>一番（いちばん） 高（たか）いところが、一番 多いね！</p>`,
                                        quizzes: [
                                            { 
                                                question: "グラフを 見てね。一番（いちばん） おおいのは どれかな？", 
                                                display: `<div style="display:flex; justify-content:center; align-items:flex-end; gap:10px; height:80px; font-size:20px;"><div style="display:flex; flex-direction:column-reverse;">🍎<br>🍎<br>🍎</div><div style="display:flex; flex-direction:column-reverse;">🍊<br>🍊</div><div style="display:flex; flex-direction:column-reverse;">🍌</div></div><div style="border-top:1px solid #333; width:120px; margin:0 auto;"></div>`, 
                                                answer: "🍎", options: ["🍎", "🍊", "🍌"] 
                                            },
                                            { 
                                                question: "グラフを 見てね。一番（いちばん） すくないのは どれかな？", 
                                                display: `<div style="display:flex; justify-content:center; align-items:flex-end; gap:10px; height:80px; font-size:20px;"><div style="display:flex; flex-direction:column-reverse;">🍎<br>🍎<br>🍎</div><div style="display:flex; flex-direction:column-reverse;">🍊<br>🍊</div><div style="display:flex; flex-direction:column-reverse;">🍌</div></div><div style="border-top:1px solid #333; width:120px; margin:0 auto;"></div>`, 
                                                answer: "🍌", options: ["🍎", "🍊", "🍌"] 
                                            }
                                        ]
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
                    {
                        name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>",
                        units: [
                            {
                                title: "1. 10000までの かず",
                                subUnits: [
                                    {
                                        title: "(1) 1年生の ふくしゅう と おおきなかず",
                                        content: `<h4>かずが ふえると おへやはどうなる？</h4>
                                        <div class="data-demo">
                                            <p><b>① 0 (なにも ないとき)</b></p>
                                            <table class="data-table" style="width: 200px; margin: 0 auto;">
                                                <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                <tr style="font-size: 24px;"><td> </td><td>0</td></tr>
                                            </table>
                                            <p><small>「0」とかくよ。</small></p>

                                            <p style="margin-top:20px;"><b>② 1から 9まで ふえていくよ</b></p>
                                            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
                                                <table class="data-table" style="width: 200px;">
                                                    <tr><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                    <tr style="font-size: 24px;"><td> </td><td>1</td></tr>
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

                                            <p style="margin-top:20px;"><b>⑤ もっと もっと ふえると？</b></p>
                                            <div style="display: flex; flex-direction: column; gap: 15px; align-items: center;">
                                                <table class="data-table" style="width: 250px;">
                                                    <tr><th style="background:#fff7e6">100の</th><th style="background:#ffe58f">10の</th><th style="background:#bae7ff">1の</th></tr>
                                                    <tr style="font-size: 20px; font-weight: bold;"><td>1</td><td>0</td><td>0</td></tr>
                                                </table>
                                                <p><small>10の まとまりが 10こで <b>100（ひゃく）</b></small></p>

                                                <table class="data-table" style="width: 300px;">
                                                    <tr><th style="background:#d9f7be">1000の</th><th style="background:#fff7e6">100の</th><th style="background:#ffe58f">10の</th><th style="background:#bae7ff">1の</th></tr>
                                                    <tr style="font-size: 20px; font-weight: bold;"><td>1</td><td>0</td><td>0</td><td>0</td></tr>
                                                </table>
                                                <p><small>100の まとまりが 10こで <b>1000（せん）</b></small></p>

                                                <table class="data-table" style="width: 350px;">
                                                    <tr><th style="background:#efdbff">10000の</th><th style="background:#d9f7be">1000の</th><th style="background:#fff7e6">100の</th><th style="background:#ffe58f">10の</th><th style="background:#bae7ff">1の</th></tr>
                                                    <tr style="font-size: 20px; font-weight: bold;"><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                                                </table>
                                                <p><small>1000の まとまりが 10こで <b>10000（いちまん）</b></small></p>
                                            </div>
                                        </div>`
                                    }
                                ]
                            },
                            {
                                title: "2. あつまった かず",
                                subUnits: [
                                    {
                                        title: "(1) 10が いくつ分（ぶん）",
                                        content: `<h4>10を あつめて おおきな かずを 作（つく）ろう</h4>
                                        <div class="point-box">
                                            10の まとまりが たくさん あつまると、いくつに なるかな？
                                        </div>
                                        <div class="data-demo">
                                            <p><b>10が 13こ あつまると？</b></p>
                                            <p>(10)が 10こ ➔ <b>100</b></p>
                                            <p>(10)が 3こ ➔ <b>30</b></p>
                                            <p>あわせて <b>130</b> に なるよ！</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "10が 12こ あつまると、いくつかな？", display: "10が 12こ", answer: 120 },
                                            { question: "10が 18こ あつまると、いくつかな？", display: "10が 18こ", answer: 180 },
                                            { question: "10が 20こ あつまると、いくつかな？", display: "10が 20こ", answer: 200 }
                                        ]
                                    },
                                    {
                                        title: "(2) 100が いくつ分（ぶん）",
                                        content: `<h4>100を あつめてみよう</h4>
                                        <div class="data-demo">
                                            <p><b>100が 25こ あつまると？</b></p>
                                            <p>(100)が 10こ ➔ <b>1000</b></p>
                                            <p>(100)が 10こ ➔ <b>1000</b></p>
                                            <p>(100)が 5こ ➔ <b>500</b></p>
                                            <p>あわせて <b>2500</b>（二千五百）だね！</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "100が 11こ あつまると、いくつかな？", display: "100が 11こ", answer: 1100 },
                                            { question: "100が 15こ あつまると、いくつかな？", display: "100が 15こ", answer: 1500 },
                                            { question: "100が 30こ あつまると、いくつかな？", display: "100が 30こ", answer: 3000 }
                                        ]
                                    },
                                    {
                                        title: "(3) 1000が いくつ分（ぶん）",
                                        content: `<h4>もっと おおきな まとまり</h4>
                                        <div class="data-demo">
                                            <p><b>1000が 10こ あつまると？</b></p>
                                            <p>1000, 2000, 3000... と かぞえていくと、</p>
                                            <p>さいごは <b>10000</b>（一万）に なるね！</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "1000が 3こ あつまると、いくつかな？", display: "1000が 3こ", answer: 3000 },
                                            { question: "1000が 7こ あつまると、いくつかな？", display: "1000が 7こ", answer: 7000 },
                                            { question: "1000が 10こ あつまると、いくつかな？", display: "1000が 10こ", answer: 10000 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "3. どっちが おおきい？ どっちが ちいさい？",
                                subUnits: [
                                    {
                                        title: "(1) おおきい ほうを むく しるし",
                                        content: `<h4>「く」の字（じ）の しるしを おぼえよう</h4>
                                        <div class="point-box">
                                            かずの おおきさを くらべるときは、<b>「＞」</b> や <b>「＜」</b> を つかうよ！
                                        </div>
                                        <div class="data-demo">
                                            <p style="font-size: 24px;"><b>50 ＞ 30</b></p>
                                            <p>おくちが <b>ひらいている ほう</b> が、おおきい かずだよ！</p>
                                            <p style="font-size: 40px;">🐊</p>
                                            <p>「わにさんの おくち」は、おいしいものが たくさん あるほうを むくんだね！</p>
                                        </div>
                                        <h4>おなじ おおきさの ときは？</h4>
                                        <div class="data-demo">
                                            <p style="font-size: 24px;"><b>10 ＝ 10</b></p>
                                            <p>おなじ おおきさなら <b>「＝」（は）</b> を かくよ。</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "あてはまる しるしを えらんでね", display: "45 □ 54", answer: "＜", options: ["＞", "＜", "＝"] },
                                            { question: "あてはまる しるしを えらんでね", display: "120 □ 102", answer: "＞", options: ["＞", "＜", "＝"] },
                                            { question: "あてはまる しるしを えらんでね", display: "88 □ 88", answer: "＝", options: ["＞", "＜", "＝"] },
                                            { question: "あてはまる しるしを えらんでね", display: "1000 □ 999", answer: "＞", options: ["＞", "＜", "＝"] },
                                            { question: "あてはまる しるしを えらんでね", display: "305 □ 350", answer: "＜", options: ["＞", "＜", "＝"] },
                                            { question: "あてはまる しるしを えらんでね", display: "10が 10こ □ 100", answer: "＝", options: ["＞", "＜", "＝"] }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "4. 半分の 半分の……",
                                subUnits: [
                                    {
                                        title: "(1) いろいろな 大きさに 分（わ）けてみよう",
                                        content: `<h4>おなじ 大きさに 分ける</h4>
                                        <div class="point-box">
                                            ひとつの ものを、おなじ 大きさに 分ける べんきょうだよ！
                                        </div>
                                        
                                        <div class="data-demo">
                                            <p><b>① 2つに 分けると？ (1/2)</b></p>
                                            <div style="display:flex; justify-content:center; gap:10px; margin-bottom:10px;">
                                                <div style="width:60px; height:60px; background:#ffd6e7; border:1px solid #ff4d4f;"></div>
                                                <div style="font-size:20px;">➔</div>
                                                <div style="width:60px; height:60px; background:#ffd6e7; border:1px solid #ff4d4f; position:relative;">
                                                    <div style="position:absolute; left:50%; top:0; bottom:0; border-left:2px dashed #ff4d4f;"></div>
                                                </div>
                                            </div>
                                            <p>2つに 分けた 1つ分を <b>2分の1（にぶんのいち）</b> というよ。</p>

                                            <p style="margin-top:20px;"><b>② 3つに 分けると？ (1/3)</b></p>
                                            <div style="width:120px; height:30px; border:2px solid #333; margin:0 auto 10px; display:flex;">
                                                <div style="flex:1; background:#ff7675; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1;"></div>
                                            </div>
                                            <p>3つに 分けた 1つ分を <b>3分の1（さんぶんのいち）</b> というよ。</p>

                                            <p style="margin-top:20px;"><b>③ 4つに 分けると？ (1/4)</b></p>
                                            <div style="width:60px; height:60px; background:#ffd6e7; border:1px solid #ff4d4f; margin:0 auto 10px; position:relative;">
                                                <div style="position:absolute; left:50%; top:0; bottom:0; border-left:2px dashed #ff4d4f;"></div>
                                                <div style="position:absolute; top:50%; left:0; right:0; border-top:2px dashed #ff4d4f;"></div>
                                            </div>
                                            <p>4つに 分けた 1つ分を <b>4分の1（よんぶんのいち）</b> というよ。</p>

                                            <p style="margin-top:20px;"><b>④ もっと たくさんに 分けると？</b></p>
                                            <div style="background:#f9f9f9; padding:15px; border-radius:10px; margin-top:10px; display:grid; grid-template-columns: 1fr 1fr; gap:10px; font-size:14px;">
                                                <div style="border:1px solid #ddd; padding:5px;">
                                                    <div style="display:flex; height:20px; border:1px solid #333;"><div style="flex:1; background:#74b9ff; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1;"></div></div>
                                                    5つに 分けた <b>1/5</b>
                                                </div>
                                                <div style="border:1px solid #ddd; padding:5px;">
                                                    <div style="display:flex; height:20px; border:1px solid #333;"><div style="flex:1; background:#a29bfe; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1;"></div></div>
                                                    6つに 分けた <b>1/6</b>
                                                </div>
                                                <div style="border:1px solid #ddd; padding:5px;">
                                                    <div style="display:flex; height:20px; border:1px solid #333;"><div style="flex:1; background:#55efc4; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1;"></div></div>
                                                    7つに 分けた <b>1/7</b>
                                                </div>
                                                <div style="border:1px solid #ddd; padding:5px;">
                                                    <div style="width:40px; height:40px; background:#ffd6e7; border:1px solid #ff4d4f; margin:0 auto; display:grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(2, 1fr);">
                                                        <div style="border:1px dashed #ff4d4f; background:#ff4d4f;"></div><div style="border:1px dashed #ff4d4f;"></div><div style="border:1px dashed #ff4d4f;"></div><div style="border:1px dashed #ff4d4f;"></div>
                                                        <div style="border:1px dashed #ff4d4f;"></div><div style="border:1px dashed #ff4d4f;"></div><div style="border:1px dashed #ff4d4f;"></div><div style="border:1px dashed #ff4d4f;"></div>
                                                    </div>
                                                    8つに 分けた <b>1/8</b>
                                                </div>
                                            </div>
                                        </div>
                                        <p>分ける 数が <b>おおきくなる</b> ほど、1つ分は <b>ちいさく</b> なるんだね！</p>`,
                                        quizzes: [
                                            { 
                                                question: "2つに 分けた うちの 1つは、なんぶんの1かな？", 
                                                display: `<div style="display:flex; width:150px; height:30px; border:2px solid #333; margin:0 auto;"><div style="flex:1; background:#ffd6e7; border-right:1px solid #333;"></div><div style="flex:1;"></div></div>`, 
                                                answer: 2 
                                            },
                                            { 
                                                question: "3つに 分けた うちの 1つは、なんぶんの1かな？", 
                                                display: `<div style="display:flex; width:150px; height:30px; border:2px solid #333; margin:0 auto;"><div style="flex:1; background:#ff7675; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1;"></div></div>`, 
                                                answer: 3 
                                            },
                                            { 
                                                question: "4つに 分けた うちの 1つは、なんぶんの1かな？", 
                                                display: `<div style="display:flex; width:150px; height:30px; border:2px solid #333; margin:0 auto;"><div style="background:#ffe58f; flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1;"></div></div>`, 
                                                answer: 4 
                                            },
                                            { 
                                                question: "5つに 分けた うちの 1つは、なんぶんの1かな？", 
                                                display: `<div style="display:flex; width:150px; height:30px; border:2px solid #333; margin:0 auto;"><div style="flex:1; background:#74b9ff; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1;"></div></div>`, 
                                                answer: 5 
                                            },
                                            { 
                                                question: "6つに 分けた うちの 1つは、なんぶんの1かな？", 
                                                display: `<div style="display:flex; width:150px; height:30px; border:2px solid #333; margin:0 auto;"><div style="flex:1; background:#a29bfe; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1;"></div></div>`, 
                                                answer: 6 
                                            },
                                            { 
                                                question: "7つに 分けた うちの 1つは、なんぶんの1かな？", 
                                                display: `<div style="display:flex; width:150px; height:30px; border:2px solid #333; margin:0 auto;"><div style="flex:1; background:#55efc4; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1;"></div></div>`, 
                                                answer: 7 
                                            },
                                            { 
                                                question: "8つに 分けた うちの 1つは、なんぶんの1かな？", 
                                                display: `<div style="display:flex; width:150px; height:30px; border:2px solid #333; margin:0 auto;"><div style="flex:1; background:#fab1a0; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1;"></div></div>`, 
                                                answer: 8 
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "5. 足し算（筆算）",
                                subUnits: [
                                    {
                                        title: "(1) 筆算（ひっさん）とは？",
                                        content: `<h4>たてに ならべて けいさんしよう</h4>
                                        <div class="point-box">
                                            かずが おおきくなったら、よこに かくより <b>「たて」</b> に ならべるほうが まちがえにくいよ！これを <b>「筆算（ひっさん）」</b> というよ。
                                        </div>
                                        <div class="data-demo">
                                            <p><b>【ひっさんの おやくそく】</b></p>
                                            <p>① くらい（お部屋）を ぴったり そろえて かく！<br>
                                            ② 右がわ（1の くらい）から じゅんばんに 計算する！</p>
                                        </div>`
                                    },
                                    {
                                        title: "(2) 2位数の 計算（くりあがりなし）",
                                        content: `<h4>2けたの たしざん</h4>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  2 5
+ 1 4
-----
  3 9
                                            </pre>
                                            <p>1の くらい：5 ＋ 4 ＝ 9<br>
                                            10の くらい：2 ＋ 1 ＝ 3</p>
                                        </div>
                                        <p>お部屋ごとに たすだけだから かんたんだね！</p>`,
                                        quizzes: [
                                            { question: "52 ＋ 16 は いくつかな？", display: "  52<br>+ 16", answer: 68 },
                                            { question: "23 ＋ 45 は いくつかな？", display: "  23<br>+ 45", answer: 68 },
                                            { question: "71 ＋ 28 は いくつかな？", display: "  71<br>+ 28", answer: 99 },
                                            { question: "34 ＋ 52 は いくつかな？", display: "  34<br>+ 52", answer: 86 },
                                            { question: "60 ＋ 19 は いくつかな？", display: "  60<br>+ 19", answer: 79 }
                                        ]
                                    },
                                    {
                                        title: "(3) 2位数の 計算（くりあがりあり）",
                                        content: `<h4>おとなりへ おひっこし！</h4>
                                        <div class="point-box">
                                            1の くらいが 10以上に なったら、<b>10の まとまりを おとなりの お部屋（10の くらい）</b> に あげるよ！
                                        </div>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  2 8
+ 1 5
-----
  4 3
                                            </pre>
                                            <p>① 8 ＋ 5 ＝ 13<br>
                                            ② 3を 下にかいて、<b>10（1）</b> を おとなりへ！<br>
                                            ③ 10の くらい：1(くりあがり) ＋ 2 ＋ 1 ＝ 4</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "39 ＋ 45 は いくつかな？", display: "  39<br>+ 45", answer: 84 },
                                            { question: "27 ＋ 56 は いくつかな？", display: "  27<br>+ 56", answer: 83 },
                                            { question: "48 ＋ 37 は いくつかな？", display: "  48<br>+ 37", answer: 85 },
                                            { question: "65 ＋ 29 は いくつかな？", display: "  65<br>+ 29", answer: 94 },
                                            { question: "18 ＋ 74 は いくつかな？", display: "  18<br>+ 74", answer: 92 }
                                        ]
                                    },
                                    {
                                        title: "(4) 3位数の 計算（くりあがりなし）",
                                        content: `<h4>もっと おおきな かずの 筆算</h4>
                                        <p>100の くらいが あっても、やりかたは おなじだよ！</p>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  1 2 3
+ 2 4 5
-------
  3 6 8
                                            </pre>
                                            <p>1の くらい、10の くらい、100の くらい。<br>
                                            右から じゅんばんに 計算しよう！</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "214 ＋ 152 は いくつかな？", display: "  214<br>+ 152", answer: 366 },
                                            { question: "430 ＋ 215 は いくつかな？", display: "  430<br>+ 215", answer: 645 },
                                            { question: "123 ＋ 564 は いくつかな？", display: "  123<br>+ 564", answer: 687 },
                                            { question: "702 ＋ 186 は いくつかな？", display: "  702<br>+ 186", answer: 888 },
                                            { question: "341 ＋ 427 は いくつかな？", display: "  341<br>+ 427", answer: 768 }
                                        ]
                                    },
                                    {
                                        title: "(5) 3位数の 計算（くりあがりあり）",
                                        content: `<h4>なんかいも くりあがるよ</h4>
                                        <p>10の くらいから 100の くらいへ くりあがる ことも あるよ！</p>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  1 5 6
+ 2 7 8
-------
  4 3 4
                                            </pre>
                                            <p>① 6＋8＝14 (1くりあがる)<br>
                                            ② 1＋5＋7＝13 (1くりあがる)<br>
                                            ③ 1＋1＋2＝4</p>
                                        </div>
                                        <p>あわてずに ひとつずつ 計算しよう！</p>`,
                                        quizzes: [
                                            { question: "468 ＋ 215 は いくつかな？", display: "  468<br>+ 215", answer: 683 },
                                            { question: "576 ＋ 287 は いくつかな？", display: "  576<br>+ 287", answer: 863 },
                                            { question: "158 ＋ 264 は いくつかな？", display: "  158<br>+ 264", answer: 422 },
                                            { question: "392 ＋ 415 は いくつかな？", display: "  392<br>+ 415", answer: 807 },
                                            { question: "475 ＋ 386 は いくつかな？", display: "  475<br>+ 386", answer: 861 }
                                        ]
                                    },
                                    {
                                        title: "(6) たしざんの 法則（ほうそく）",
                                        content: `<h4>たしざんの べんりな きまり</h4>
                                        <div class="point-box">
                                            たしざんには、計算（けいさん）が らくに なる <b>2つの きまり</b> が あるよ！
                                        </div>

                                        <h4>① たす じゅんばんを いれかえても OK！</h4>
                                        <div class="data-demo">
                                            <p><b>20 ＋ 30 ＝ 50</b></p>
                                            <p><b>30 ＋ 20 ＝ 50</b></p>
                                            <p><small>これを「交換法則（こうかんほうそく）」というよ。</small></p>
                                        </div>

                                        <h4>② どこから 先に 計算しても OK！</h4>
                                        <div class="data-demo">
                                            <p><b>(12 ＋ 8) ＋ 5 ＝ 25</b></p>
                                            <p><b>12 ＋ (8 ＋ 5) ＝ 25</b></p>
                                            <p><small>これを「結合法則（けつごうほうそく）」というよ。</small></p>
                                        </div>
                                        <p>10や 20など、<b>「ぴったりの かず」</b> を 先につくると 計算が かんたんに なるね！</p>`
                                    }
                                ]
                            },
                            {
                                title: "6. 引き算（筆算）",
                                subUnits: [
                                    {
                                        title: "(1) 引き算の 筆算とは？",
                                        content: `<h4>たてに ならべて 計算しよう</h4>
                                        <div class="point-box">
                                            引き算も 足し算と同じで、大きな数は <b>「たて」</b> にならべると 計算しやすいよ！
                                        </div>
                                        <div class="data-demo">
                                            <p><b>【ひきざん 筆算の ルール】</b></p>
                                            <p>① くらい（お部屋）を ぴったり そろえて かく！<br>
                                            ② 右がわ（1の くらい）から じゅんばんに 引き算する！</p>
                                        </div>`
                                    },
                                    {
                                        title: "(2) 2位数の 計算（くりさがりなし）",
                                        content: `<h4>2けたの 引き算</h4>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  3 8
- 1 5
-----
  2 3
                                            </pre>
                                            <p>1の くらい：8 － 5 ＝ 3<br>
                                            10の くらい：3 － 1 ＝ 2</p>
                                        </div>
                                        <p>足し算と同じように、お部屋ごとに 引くだけだね！</p>`,
                                        quizzes: [
                                            { question: "45 － 12 は いくつかな？", display: "  45<br>- 12", answer: 33 },
                                            { question: "67 － 34 は いくつかな？", display: "  67<br>- 34", answer: 33 },
                                            { question: "89 － 56 は いくつかな？", display: "  89<br>- 56", answer: 33 },
                                            { question: "54 － 21 は いくつかな？", display: "  54<br>- 21", answer: 33 },
                                            { question: "76 － 43 は いくつかな？", display: "  76<br>- 43", answer: 33 }
                                        ]
                                    },
                                    {
                                        title: "(3) 2位数の 計算（くりさがりあり）",
                                        content: `<h4>おとなりから 借りてこよう</h4>
                                        <div class="point-box">
                                            1の くらいが 引けないときは、<b>10の くらいから 1つ 借りてくる（お部屋を バラす）</b> んだよ！
                                        </div>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  4 2
- 1 8
-----
  2 4
                                            </pre>
                                            <p>① 2から 8は 引けないね！<br>
                                            ② 10の くらいから <b>1（10）</b> 借りてくる！<br>
                                            ③ 12 － 8 ＝ 4<br>
                                            ④ 10の くらいは 3に なっているから、3 － 1 ＝ 2</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "32 － 15 は いくつかな？", display: "  32<br>- 15", answer: 17 },
                                            { question: "54 － 28 は いくつかな？", display: "  54<br>- 28", answer: 26 },
                                            { question: "41 － 13 は いくつかな？", display: "  41<br>- 13", answer: 28 },
                                            { question: "63 － 27 は いくつかな？", display: "  63<br>- 27", answer: 36 },
                                            { question: "80 － 45 は いくつかな？", display: "  80<br>- 45", answer: 35 }
                                        ]
                                    },
                                    {
                                        title: "(4) 3位数の 計算（くりさがりなし）",
                                        content: `<h4>100の くらいが ある 引き算</h4>
                                        <p>大きな 数になっても、やりかたは おなじだよ！</p>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  4 5 6
- 1 2 3
-------
  3 3 3
                                            </pre>
                                            <p>1の くらい、10の くらい、100の くらい。<br>
                                            右から じゅんばんに 引き算しよう！</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "358 － 124 は いくつかな？", display: "  358<br>- 124", answer: 234 },
                                            { question: "576 － 241 は いくつかな？", display: "  576<br>- 241", answer: 335 },
                                            { question: "894 － 362 は いくつかな？", display: "  894<br>- 362", answer: 532 },
                                            { question: "467 － 155 は いくつかな？", display: "  467<br>- 155", answer: 312 },
                                            { question: "980 － 450 は いくつかな？", display: "  980<br>- 450", answer: 530 }
                                        ]
                                    },
                                    {
                                        title: "(5) 3位数の 計算（くりさがりあり）",
                                        content: `<h4>なんかいも 借りることもあるよ</h4>
                                        <p>10の くらいから 引けないときは、100の くらいから 借りよう！</p>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  5 2 4
- 1 5 6
-------
  3 6 8
                                            </pre>
                                            <p>① 4から 6は 引けない ➔ 10の くらいから 借りる (14-6=8)<br>
                                            ② 1から 5は 引けない ➔ 100の くらいから 借りる (11-5=6)<br>
                                            ③ 100の くらい：4 － 1 ＝ 3</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "425 － 158 は いくつかな？", display: "  425<br>- 158", answer: 267 },
                                            { question: "612 － 245 は いくつかな？", display: "  612<br>- 245", answer: 367 },
                                            { question: "500 － 123 は いくつかな？", display: "  500<br>- 123", answer: 377 },
                                            { question: "831 － 456 は いくつかな？", display: "  831<br>- 456", answer: 375 },
                                            { question: "740 － 382 は いくつかな？", display: "  740<br>- 382", answer: 358 }
                                        ]
                                    },
                                    {
                                        title: "(6) 引き算の きまり",
                                        content: `<h4>引き算の おもしろい ルール</h4>
                                        <div class="point-box">
                                            足し算とは ちがう 引き算だけの きまりを おぼえよう！
                                        </div>

                                        <h4>① じゅんばんを かえては ダメ！</h4>
                                        <p>足し算は 入れかえても よかったけど、引き算は ダメだよ。</p>
                                        <div class="data-demo">
                                            <p><b>5 － 3 ＝ 2</b></p>
                                            <p><b>3 － 5 ＝ ？？？</b>（ひけない！）</p>
                                        </div>

                                        <h4>② 足し算で たしかめられる！</h4>
                                        <p>引いたあとの 数と、引いた数を たすと、もとの 数に もどるよ！</p>
                                        <div class="data-demo">
                                            <p><b>10 － 3 ＝ 7</b> ➔ <b>7 ＋ 3 ＝ 10</b></p>
                                        </div>
                                        <p>計算が あっているか、足し算で たしかめてみよう！</p>`
                                    }
                                ]
                            },
                            {
                                title: "7. かけ算",
                                subUnits: [
                                    {
                                        title: "(1) かけ算で かいけつ！",
                                        content: `<h4>おなじ 数（かず）を 何回（なんかい）も たすときは？</h4>
                                        <div class="point-box">
                                            「2 ＋ 2 ＋ 2 ＋ 2 ＋ 2」のように、おなじ 数を たくさん たすときは、<b>「かけ算」</b> を つかう回と ひとことで 表（あらわ）せるよ！
                                        </div>
                                        <div class="data-demo">
                                            <p>🍎🍎 🍎🍎 🍎🍎<br>
                                            2こが 3つ分 ➔ <b>2 × 3 ＝ 6</b></p>
                                            <p>「2 かける 3 は 6」と よむよ！</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "5 ＋ 5 ＋ 5 を かけ算の しきに すると？", display: "5が 3つ", answer: "5×3", options: ["5×3", "5+3", "3×5"] },
                                            { question: "3 ＋ 3 ＋ 3 ＋ 3 を かけ算の しきに すると？", display: "3が 4つ", answer: "3×4", options: ["3×4", "4×3", "3+4"] }
                                        ]
                                    },
                                    {
                                        title: "(2) 1の だん",
                                        content: `<h4>1の だん（いんいちが いち）</h4>
                                        <div class="data-demo" style="text-align: left; padding-left: 30%;">
                                            1 × 1 ＝ 1<br>1 × 2 ＝ 2<br>1 × 3 ＝ 3<br>
                                            1 × 4 ＝ 4<br>1 × 5 ＝ 5<br>1 × 6 ＝ 6<br>
                                            1 × 7 ＝ 7<br>1 × 8 ＝ 8<br>1 × 9 ＝ 9
                                        </div>`,
                                        quizzes: [
                                            { question: "1 × 1 ＝ ？", display: "1 × 1", answer: 1 },
                                            { question: "1 × 2 ＝ ？", display: "1 × 2", answer: 2 },
                                            { question: "1 × 3 ＝ ？", display: "1 × 3", answer: 3 },
                                            { question: "1 × 4 ＝ ？", display: "1 × 4", answer: 4 },
                                            { question: "1 × 5 ＝ ？", display: "1 × 5", answer: 5 },
                                            { question: "1 × 6 ＝ ？", display: "1 × 6", answer: 6 },
                                            { question: "1 × 7 ＝ ？", display: "1 × 7", answer: 7 },
                                            { question: "1 × 8 ＝ ？", display: "1 × 8", answer: 8 },
                                            { question: "1 × 9 ＝ ？", display: "1 × 9", answer: 9 }
                                        ]
                                    },
                                    {
                                        title: "(3) 2の だん",
                                        content: `<h4>2の だん（にいちが に）</h4>
                                        <div class="data-demo" style="text-align: left; padding-left: 30%;">
                                            2 × 1 ＝ 2<br>2 × 2 ＝ 4<br>2 × 3 ＝ 6<br>
                                            2 × 4 ＝ 8<br>2 × 5 ＝ 10<br>2 × 6 ＝ 12<br>
                                            2 × 7 ＝ 14<br>2 × 8 ＝ 16<br>2 × 9 ＝ 18
                                        </div>`,
                                        quizzes: [
                                            { question: "2 × 1 ＝ ？", display: "2 × 1", answer: 2 },
                                            { question: "2 × 2 ＝ ？", display: "2 × 2", answer: 4 },
                                            { question: "2 × 3 ＝ ？", display: "2 × 3", answer: 6 },
                                            { question: "2 × 4 ＝ ？", display: "2 × 4", answer: 8 },
                                            { question: "2 × 5 ＝ ？", display: "2 × 5", answer: 10 },
                                            { question: "2 × 6 ＝ ？", display: "2 × 6", answer: 12 },
                                            { question: "2 × 7 ＝ ？", display: "2 × 7", answer: 14 },
                                            { question: "2 × 8 ＝ ？", display: "2 × 8", answer: 16 },
                                            { question: "2 × 9 ＝ ？", display: "2 × 9", answer: 18 }
                                        ]
                                    },
                                    {
                                        title: "(4) 3の だん",
                                        content: `<h4>3の だん（さんいちが さん）</h4>
                                        <div class="data-demo" style="text-align: left; padding-left: 30%;">
                                            3 × 1 ＝ 3<br>3 × 2 ＝ 6<br>3 × 3 ＝ 9<br>
                                            3 × 4 ＝ 12<br>3 × 5 ＝ 15<br>3 × 6 ＝ 18<br>
                                            3 × 7 ＝ 21<br>3 × 8 ＝ 24<br>3 × 9 ＝ 27
                                        </div>`,
                                        quizzes: [
                                            { question: "3 × 1 ＝ ？", display: "3 × 1", answer: 3 },
                                            { question: "3 × 2 ＝ ？", display: "3 × 2", answer: 6 },
                                            { question: "3 × 3 ＝ ？", display: "3 × 3", answer: 9 },
                                            { question: "3 × 4 ＝ ？", display: "3 × 4", answer: 12 },
                                            { question: "3 × 5 ＝ ？", display: "3 × 5", answer: 15 },
                                            { question: "3 × 6 ＝ ？", display: "3 × 6", answer: 18 },
                                            { question: "3 × 7 ＝ ？", display: "3 × 7", answer: 21 },
                                            { question: "3 × 8 ＝ ？", display: "3 × 8", answer: 24 },
                                            { question: "3 × 9 ＝ ？", display: "3 × 9", answer: 27 }
                                        ]
                                    },
                                    {
                                        title: "(5) 4の だん",
                                        content: `<h4>4の だん（しいちが し）</h4>
                                        <div class="data-demo" style="text-align: left; padding-left: 30%;">
                                            4 × 1 ＝ 4<br>4 × 2 ＝ 8<br>4 × 3 ＝ 12<br>
                                            4 × 4 ＝ 16<br>4 × 5 ＝ 20<br>4 × 6 ＝ 24<br>
                                            4 × 7 ＝ 28<br>4 × 8 ＝ 32<br>4 × 9 ＝ 36
                                        </div>`,
                                        quizzes: [
                                            { question: "4 × 1 ＝ ？", display: "4 × 1", answer: 4 },
                                            { question: "4 × 2 ＝ ？", display: "4 × 2", answer: 8 },
                                            { question: "4 × 3 ＝ ？", display: "4 × 3", answer: 12 },
                                            { question: "4 × 4 ＝ ？", display: "4 × 4", answer: 16 },
                                            { question: "4 × 5 ＝ ？", display: "4 × 5", answer: 20 },
                                            { question: "4 × 6 ＝ ？", display: "4 × 6", answer: 24 },
                                            { question: "4 × 7 ＝ ？", display: "4 × 7", answer: 28 },
                                            { question: "4 × 8 ＝ ？", display: "4 × 8", answer: 32 },
                                            { question: "4 × 9 ＝ ？", display: "4 × 9", answer: 36 }
                                        ]
                                    },
                                    {
                                        title: "(6) 5の だん",
                                        content: `<h4>5の だん（ごいちが ご）</h4>
                                        <div class="data-demo" style="text-align: left; padding-left: 30%;">
                                            5 × 1 ＝ 5<br>5 × 2 ＝ 10<br>5 × 3 ＝ 15<br>
                                            5 × 4 ＝ 20<br>5 × 5 ＝ 25<br>5 × 6 ＝ 30<br>
                                            5 × 7 ＝ 35<br>5 × 8 ＝ 40<br>5 × 9 ＝ 45
                                        </div>`,
                                        quizzes: [
                                            { question: "5 × 1 ＝ ？", display: "5 × 1", answer: 5 },
                                            { question: "5 × 2 ＝ ？", display: "5 × 2", answer: 10 },
                                            { question: "5 × 3 ＝ ？", display: "5 × 3", answer: 15 },
                                            { question: "5 × 4 ＝ ？", display: "5 × 4", answer: 20 },
                                            { question: "5 × 5 ＝ ？", display: "5 × 5", answer: 25 },
                                            { question: "5 × 6 ＝ ？", display: "5 × 6", answer: 30 },
                                            { question: "5 × 7 ＝ ？", display: "5 × 7", answer: 35 },
                                            { question: "5 × 8 ＝ ？", display: "5 × 8", answer: 40 },
                                            { question: "5 × 9 ＝ ？", display: "5 × 9", answer: 45 }
                                        ]
                                    },
                                    {
                                        title: "(7) 6の だん",
                                        content: `<h4>6の だん（ろくいちが ろく）</h4>
                                        <div class="data-demo" style="text-align: left; padding-left: 30%;">
                                            6 × 1 ＝ 6<br>6 × 2 ＝ 12<br>6 × 3 ＝ 18<br>
                                            6 × 4 ＝ 24<br>6 × 5 ＝ 30<br>6 × 6 ＝ 36<br>
                                            6 × 7 ＝ 42<br>6 × 8 ＝ 48<br>6 × 9 ＝ 54
                                        </div>`,
                                        quizzes: [
                                            { question: "6 × 1 ＝ ？", display: "6 × 1", answer: 6 },
                                            { question: "6 × 2 ＝ ？", display: "6 × 2", answer: 12 },
                                            { question: "6 × 3 ＝ ？", display: "6 × 3", answer: 18 },
                                            { question: "6 × 4 ＝ ？", display: "6 × 4", answer: 24 },
                                            { question: "6 × 5 ＝ ？", display: "6 × 5", answer: 30 },
                                            { question: "6 × 6 ＝ ？", display: "6 × 6", answer: 36 },
                                            { question: "6 × 7 ＝ ？", display: "6 × 7", answer: 42 },
                                            { question: "6 × 8 ＝ ？", display: "6 × 8", answer: 48 },
                                            { question: "6 × 9 ＝ ？", display: "6 × 9", answer: 54 }
                                        ]
                                    },
                                    {
                                        title: "(8) 7の だん",
                                        content: `<h4>7の だん（しちいちが しち）</h4>
                                        <div class="data-demo" style="text-align: left; padding-left: 30%;">
                                            7 × 1 ＝ 7<br>7 × 2 ＝ 14<br>7 × 3 ＝ 21<br>
                                            7 × 4 ＝ 28<br>7 × 5 ＝ 35<br>7 × 6 ＝ 42<br>
                                            7 × 7 ＝ 49<br>7 × 8 ＝ 56<br>7 × 9 ＝ 63
                                        </div>`,
                                        quizzes: [
                                            { question: "7 × 1 ＝ ？", display: "7 × 1", answer: 7 },
                                            { question: "7 × 2 ＝ ？", display: "7 × 2", answer: 14 },
                                            { question: "7 × 3 ＝ ？", display: "7 × 3", answer: 21 },
                                            { question: "7 × 4 ＝ ？", display: "7 × 4", answer: 28 },
                                            { question: "7 × 5 ＝ ？", display: "7 × 5", answer: 35 },
                                            { question: "7 × 6 ＝ ？", display: "7 × 6", answer: 42 },
                                            { question: "7 × 7 ＝ ？", display: "7 × 7", answer: 49 },
                                            { question: "7 × 8 ＝ ？", display: "7 × 8", answer: 56 },
                                            { question: "7 × 9 ＝ ？", display: "7 × 9", answer: 63 }
                                        ]
                                    },
                                    {
                                        title: "(9) 8の だん",
                                        content: `<h4>8の だん（はちいちが はち）</h4>
                                        <div class="data-demo" style="text-align: left; padding-left: 30%;">
                                            8 × 1 ＝ 8<br>8 × 2 ＝ 16<br>8 × 3 ＝ 24<br>
                                            8 × 4 ＝ 32<br>8 × 5 ＝ 40<br>8 × 6 ＝ 48<br>
                                            8 × 7 ＝ 56<br>8 × 8 ＝ 64<br>8 × 9 ＝ 72
                                        </div>`,
                                        quizzes: [
                                            { question: "8 × 1 ＝ ？", display: "8 × 1", answer: 8 },
                                            { question: "8 × 2 ＝ ？", display: "8 × 2", answer: 16 },
                                            { question: "8 × 3 ＝ ？", display: "8 × 3", answer: 24 },
                                            { question: "8 × 4 ＝ ？", display: "8 × 4", answer: 32 },
                                            { question: "8 × 5 ＝ ？", display: "8 × 5", answer: 40 },
                                            { question: "8 × 6 ＝ ？", display: "8 × 6", answer: 48 },
                                            { question: "8 × 7 ＝ ？", display: "8 × 7", answer: 56 },
                                            { question: "8 × 8 ＝ ？", display: "8 × 8", answer: 64 },
                                            { question: "8 × 9 ＝ ？", display: "8 × 9", answer: 72 }
                                        ]
                                    },
                                    {
                                        title: "(10) 9の だん",
                                        content: `<h4>9の だん（くいちが く）</h4>
                                        <div class="data-demo" style="text-align: left; padding-left: 30%;">
                                            9 × 1 ＝ 9<br>9 × 2 ＝ 18<br>9 × 3 ＝ 27<br>
                                            9 × 4 ＝ 36<br>9 × 5 ＝ 45<br>9 × 6 ＝ 54<br>
                                            9 × 7 ＝ 63<br>9 × 8 ＝ 72<br>9 × 9 ＝ 81
                                        </div>`,
                                        quizzes: [
                                            { question: "9 × 1 ＝ ？", display: "9 × 1", answer: 9 },
                                            { question: "9 × 2 ＝ ？", display: "9 × 2", answer: 18 },
                                            { question: "9 × 3 ＝ ？", display: "9 × 3", answer: 27 },
                                            { question: "9 × 4 ＝ ？", display: "9 × 4", answer: 36 },
                                            { question: "9 × 5 ＝ ？", display: "9 × 5", answer: 45 },
                                            { question: "9 × 6 ＝ ？", display: "9 × 6", answer: 54 },
                                            { question: "9 × 7 ＝ ？", display: "9 × 7", answer: 63 },
                                            { question: "9 × 8 ＝ ？", display: "9 × 8", answer: 72 },
                                            { question: "9 × 9 ＝ ？", display: "9 × 9", answer: 81 }
                                        ]
                                    },
                                    {
                                        title: "(11) 10を かける 計算",
                                        content: `<h4>10を かけると どうなる？</h4>
                                        <div class="data-demo" style="text-align: left; padding-left: 30%;">
                                            1 × 10 ＝ 10<br>2 × 10 ＝ 20<br>3 × 10 ＝ 30<br>
                                            4 × 10 ＝ 40<br>5 × 10 ＝ 50<br>6 × 10 ＝ 60<br>
                                            7 × 10 ＝ 70<br>8 × 10 ＝ 80<br>9 × 10 ＝ 90<br>
                                            10 × 10 ＝ 100<br>11 × 10 ＝ 110<br>12 × 10 ＝ 120
                                        </div>
                                        <p>どんな 数（かず）でも、10を かけると 右がわに 0が つくね！</p>`,
                                        quizzes: [
                                            { question: "1 × 10 ＝ ？", display: "1 × 10", answer: 10 },
                                            { question: "2 × 10 ＝ ？", display: "2 × 10", answer: 20 },
                                            { question: "3 × 10 ＝ ？", display: "3 × 10", answer: 30 },
                                            { question: "4 × 10 ＝ ？", display: "4 × 10", answer: 40 },
                                            { question: "5 × 10 ＝ ？", display: "5 × 10", answer: 50 },
                                            { question: "6 × 10 ＝ ？", display: "6 × 10", answer: 60 },
                                            { question: "7 × 10 ＝ ？", display: "7 × 10", answer: 70 },
                                            { question: "8 × 10 ＝ ？", display: "8 × 10", answer: 80 },
                                            { question: "9 × 10 ＝ ？", display: "9 × 10", answer: 90 },
                                            { question: "10 × 10 ＝ ？", display: "10 × 10", answer: 100 },
                                            { question: "11 × 10 ＝ ？", display: "11 × 10", answer: 110 },
                                            { question: "12 × 10 ＝ ？", display: "12 × 10", answer: 120 }
                                        ]
                                    },
                                    {
                                        title: "(12) 11を かける 計算",
                                        content: `<h4>11を かけてみよう</h4>
                                        <div class="data-demo" style="text-align: left; padding-left: 30%;">
                                            1 × 11 ＝ 11<br>2 × 11 ＝ 22<br>3 × 11 ＝ 33<br>
                                            4 × 11 ＝ 44<br>5 × 11 ＝ 55<br>6 × 11 ＝ 66<br>
                                            7 × 11 ＝ 77<br>8 × 11 ＝ 88<br>9 × 11 ＝ 99<br>
                                            10 × 11 ＝ 110<br>11 × 11 ＝ 121<br>12 × 11 ＝ 132
                                        </div>`,
                                        quizzes: [
                                            { question: "1 × 11 ＝ ？", display: "1 × 11", answer: 11 },
                                            { question: "2 × 11 ＝ ？", display: "2 × 11", answer: 22 },
                                            { question: "3 × 11 ＝ ？", display: "3 × 11", answer: 33 },
                                            { question: "4 × 11 ＝ ？", display: "4 × 11", answer: 44 },
                                            { question: "5 × 11 ＝ ？", display: "5 × 11", answer: 55 },
                                            { question: "6 × 11 ＝ ？", display: "6 × 11", answer: 66 },
                                            { question: "7 × 11 ＝ ？", display: "7 × 11", answer: 77 },
                                            { question: "8 × 11 ＝ ？", display: "8 × 11", answer: 88 },
                                            { question: "9 × 11 ＝ ？", display: "9 × 11", answer: 99 },
                                            { question: "10 × 11 ＝ ？", display: "10 × 11", answer: 110 },
                                            { question: "11 × 11 ＝ ？", display: "11 × 11", answer: 121 },
                                            { question: "12 × 11 ＝ ？", display: "12 × 11", answer: 132 }
                                        ]
                                    },
                                    {
                                        title: "(13) 12を かける 計算",
                                        content: `<h4>12を かけてみよう</h4>
                                        <div class="data-demo" style="text-align: left; padding-left: 30%;">
                                            1 × 12 ＝ 12<br>2 × 12 ＝ 24<br>3 × 12 ＝ 36<br>
                                            4 × 12 ＝ 48<br>5 × 12 ＝ 60<br>6 × 12 ＝ 72<br>
                                            7 × 12 ＝ 84<br>8 × 12 ＝ 96<br>9 × 12 ＝ 108<br>
                                            10 × 12 ＝ 120<br>11 × 12 ＝ 132<br>12 × 12 ＝ 144
                                        </div>`,
                                        quizzes: [
                                            { question: "1 × 12 ＝ ？", display: "1 × 12", answer: 12 },
                                            { question: "2 × 12 ＝ ？", display: "2 × 12", answer: 24 },
                                            { question: "3 × 12 ＝ ？", display: "3 × 12", answer: 36 },
                                            { question: "4 × 12 ＝ ？", display: "4 × 12", answer: 48 },
                                            { question: "5 × 12 ＝ ？", display: "5 × 12", answer: 60 },
                                            { question: "6 × 12 ＝ ？", display: "6 × 12", answer: 72 },
                                            { question: "7 × 12 ＝ ？", display: "7 × 12", answer: 84 },
                                            { question: "8 × 12 ＝ ？", display: "8 × 12", answer: 96 },
                                            { question: "9 × 12 ＝ ？", display: "9 × 12", answer: 108 },
                                            { question: "10 × 12 ＝ ？", display: "10 × 12", answer: 120 },
                                            { question: "11 × 12 ＝ ？", display: "11 × 12", answer: 132 },
                                            { question: "12 × 12 ＝ ？", display: "12 × 12", answer: 144 }
                                        ]
                                    },
                                    {
                                        title: "(14) 0の かけ算",
                                        content: `<h4>0を かけると どうなる？</h4>
                                        <div class="point-box">
                                            どんなに 大きな 数（かず）でも、<b>0</b> を かけたら こたえは ぜったいに <b>0</b> に なるんだよ！
                                        </div>
                                        <div class="data-demo">
                                            5 × 0 ＝ 0<br>
                                            0 × 8 ＝ 0<br>
                                            123 × 0 ＝ 0
                                        </div>`,
                                        quizzes: [
                                            { question: "3 × 0 ＝ ？", display: "3 × 0", answer: 0 },
                                            { question: "0 × 9 ＝ ？", display: "0 × 9", answer: 0 },
                                            { question: "120 × 0 ＝ ？", display: "120 × 0", answer: 0 },
                                            { question: "0 × 0 ＝ ？", display: "0 × 0", answer: 0 },
                                            { question: "15 × 0 ＝ ？", display: "15 × 0", answer: 0 }
                                        ]
                                    },
                                    {
                                        title: "(15) 九九（くく）の 表（ひょう）",
                                        content: `<h4>ぜんぶ まとめた 表を見てみよう</h4>
                                        <div class="kuku-table-container">
                                            <table class="kuku-table">
                                                <tr><th>×</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr>
                                                <tr><th>1</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
                                                <tr><th>2</th><td>2</td><td>4</td><td>6</td><td>8</td><td>10</td><td>12</td><td>14</td><td>16</td><td>18</td></tr>
                                                <tr><th>3</th><td>3</td><td>6</td><td>9</td><td>12</td><td>15</td><td>18</td><td>21</td><td>24</td><td>27</td></tr>
                                                <tr><th>4</th><td>4</td><td>8</td><td>12</td><td>16</td><td>20</td><td>24</td><td>28</td><td>32</td><td>36</td></tr>
                                                <tr><th>5</th><td>5</td><td>10</td><td>15</td><td>20</td><td>25</td><td>30</td><td>35</td><td>40</td><td>45</td></tr>
                                                <tr><th>6</th><td>6</td><td>12</td><td>18</td><td>24</td><td>30</td><td>36</td><td>42</td><td>48</td><td>54</td></tr>
                                                <tr><th>7</th><td>7</td><td>14</td><td>21</td><td>28</td><td>35</td><td>42</td><td>49</td><td>56</td><td>63</td></tr>
                                                <tr><th>8</th><td>8</td><td>16</td><td>24</td><td>32</td><td>40</td><td>48</td><td>56</td><td>64</td><td>72</td></tr>
                                                <tr><th>9</th><td>9</td><td>18</td><td>27</td><td>36</td><td>45</td><td>54</td><td>63</td><td>72</td><td>81</td></tr>
                                            </table>
                                        </div>`
                                    },
                                    {
                                        title: "(16) かけ算の せいしつ",
                                        content: `<h4>かけ算の べんりな きまり</h4>
                                        <div class="point-box">
                                            ① かける数（右がわ）が 1ふえると、こたえは <b>「かけられる数（左がわ）」</b> だけ ふえるよ！
                                        </div>
                                        <div class="data-demo">
                                            <p><b>【2の だん】</b>（2ずつ ふえる）<br>
                                            2 × 3 ＝ 6<br>
                                            2 × 4 ＝ 8 （6より <b>2</b> ふえた！）</p>
                                            <p><b>【5の だん】</b>（5ずつ ふえる）<br>
                                            5 × 3 ＝ 15<br>
                                            5 × 4 ＝ 20 （15より <b>5</b> ふえた！）</p>
                                        </div>
                                        <div class="point-box">
                                            ② じゅんばんを 入れかえても こたえは おなじ！
                                        </div>
                                        <div class="data-demo">
                                            3 × 5 ＝ 15<br>
                                            5 × 3 ＝ 15
                                        </div>`
                                    },
                                    {
                                        title: "(17) おなじ 数を かける（0×0 〜 1000×1000）",
                                        content: `<h4>おなじ 数どうしを かけると？</h4>
                                        <div class="data-demo" style="font-size: 14px; text-align: left; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                                            <div>
                                                0 × 0 ＝ 0<br>1 × 1 ＝ 1<br>2 × 2 ＝ 4<br>3 × 3 ＝ 9<br>4 × 4 ＝ 16<br>
                                                5 × 5 ＝ 25<br>6 × 6 ＝ 36<br>7 × 7 ＝ 49<br>8 × 8 ＝ 64<br>9 × 9 ＝ 81<br>
                                                10 × 10 ＝ 100
                                            </div>
                                            <div>
                                                11 × 11 ＝ 121<br>12 × 12 ＝ 144<br>
                                                13 × 13 ＝ 169<br>14 × 14 ＝ 196<br>15 × 15 ＝ 225<br>
                                                16 × 16 ＝ 256<br>17 × 17 ＝ 289<br>18 × 18 ＝ 324<br>
                                                19 × 19 ＝ 361<br>20 × 20 ＝ 400
                                            </div>
                                        </div>
                                        <h4>もっと 大きな 特別（とくべつ）な 計算</h4>
                                        <div class="data-demo" style="text-align: left;">
                                            <b>60 × 60 ＝ 3600</b> （1時間は 3600秒！）<br>
                                            <b>100 × 100 ＝ 10000</b> （一万になった！）<br>
                                            <b>1000 × 1000 ＝ 1000000</b> （百万！）
                                        </div>
                                        <p>0が たくさん 並（なら）ぶ 計算は、0の 数を かぞえると かんたんだね！</p>`
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "2 <ruby>図形<rt>ずけい</rt></ruby>",
                        units: [
                            {
                                title: "1. 三角形と 四角形",
                                subUnits: [
                                    {
                                        title: "(1) 三角形（さんかくけい）の やくそく",
                                        content: `<h4>三角形って どんな形？</h4>
                                        <div class="point-box">
                                            3本の まっすぐな 線（辺）で、すきまなく <b>「かこまれている」</b> 形を 三角形というよ！
                                        </div>
                                        <div class="data-demo">
                                            <p><b>【三角形の パーツ】</b></p>
                                            <p>・<b>辺（へん）</b>：3本<br>
                                            ・<b>頂点（ちょうてん）</b>：3こ</p>
                                        </div>
                                        <div class="point-box" style="background: #fff2f0;">
                                            <b>【これは 三角形じゃないよ！】</b><br>
                                            ・線が つながっていない（あいている）<br>
                                            ・線が まがっている
                                        </div>`,
                                        quizzes: [{ question: "三矩形の辺の数は？", display: "三角形の辺の数は？", answer: 3 }

                                        ]
                                    },
                                    {
                                        title: "(2) 四角形（しかくけい）の やくそく",
                                        content: `<h4>四角形って どんな形？</h4>
                                        <div class="point-box">
                                            4本の まっすぐな 線（辺）で、すきまなく <b>「かこまれている」</b> 形を 四角形というよ！
                                        </div>
                                        <div class="data-demo">
                                            <p><b>【四角形の パーツ】</b></p>
                                            <p>・<b>辺（へん）</b>：4本<br>
                                            ・<b>頂点（ちょうてん）</b>：4こ</p>
                                        </div>`,
                                        quizzes: [{ question: "四矩形の辺の数は？", display: "四角形の辺の数は？", answer: 4 }]
                                    },
                                    {
                                        title: "(3) 辺（へん）と 頂点（ちょうてん）",
                                        content: `<h4>名前を 正しく おぼえよう</h4>
                                        <div class="point-box">
                                            ・<b>辺（へん）</b>：図形（ずけい）を つくっている まっすぐな 線。<br>
                                            ・<b>頂点（ちょうてん）</b>：辺と 辺が ぶつかっている かどの 点。
                                        </div>
                                        <p>図形を かくときは、定規（じょうぎ）を つかって まっすぐな 辺を かくのが ポイントだよ！</p>`,
                                        quizzes: []
                                    },
                                    {
                                        title: "(4) 直角（ちょっかく）と 長方形・正方形",
                                        content: `<h4>かどの 形を 見てみよう</h4>
                                        <div class="point-box">
                                            おりがみの かど のように、ぴったりした かどを <b>「直角（ちょっかく）」</b> というよ。
                                        </div>
                                        <div class="data-demo">
                                            <p><b>■ 長方形（ちょうほうけい）</b><br>
                                            4つの かどが ぜんぶ <b>直角</b> の 四角形。</p>
                                            <p><b>■ 正方形（せいほうけい）</b><br>
                                            4つの 辺の 長さが ぜんぶ <b>おなじ</b> で、かどが ぜんぶ <b>直角</b> の 四角形。</p>
                                        </div>`,

                                    }
                                ]
                            },
                            {
                                title: "2. はこの かたち",
                                subUnits: [
                                    {
                                        title: "(1) はこの まわりを かこむもの",
                                        content: `<h4>はこの 特徴（とくちょう）</h4>
                                        <div class="point-box">
                                            はこの まわりにある 平らな ところを <b>「面（めん）」</b> というよ。
                                        </div>
                                        <div class="data-demo">
                                            <p>はこの 形には ぜんぶで <b>6つの 面</b> が あるよ！</p>
                                            <p>さいコロのような 形や、キャラメルの はこのような 長い形が あるね。</p>
                                        </div>
                                        <div class="point-box">
                                            ・面（めん）：6こ<br>
                                            ・辺（へん）：12本<br>
                                            ・頂点（ちょうてん）：8こ
                                        </div>`,
                                        quizzes: [
                                            { question: "はこの 「面（めん）」は ぜんぶで 何こかな？", display: "📦", answer: 6 },
                                            { question: "はこの 「頂点（ちょうてん）」は 何こかな？", display: "📦", answer: 8 }
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
                                title: "1. <ruby>長<rt>なが</rt></ruby>さと<ruby>かさ<rt>かさ</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>長<rt>なが</rt></ruby>さの <ruby>単位<rt>たんい</rt></ruby>（cm, mm）",
                                        content: `<h4>ものさしで はかってみよう</h4>
                                        <div class="point-box">
                                            ・<b>cm（センチメートル）</b>：ものさしの 大きな めもり。<br>
                                            ・<b>mm（ミリメートル）</b>：ものさしの 小さな めもり。
                                        </div>
                                        <div class="data-demo">
                                            <p><b>1cm ＝ 10mm</b></p>
                                        </div>
                                        <p>1cmを 10こに 分けた 1つ分が 1mmだよ！</p>`,
                                        quizzes: [
                                            { question: "1cmは 何mmかな？", display: "1cm ＝ □mm", answer: 10 },
                                            { question: "3cmは 何mmかな？", display: "3cm ＝ □mm", answer: 30 },
                                            { question: "10mmは 何cmかな？", display: "10mm ＝ □cm", answer: 1 }
                                        ]
                                    },
                                    {
                                        title: "(2) <ruby>長<rt>なが</rt></ruby>さの けいさん",
                                        content: `<h4>おなじ 単位（たんい）どうしで 計算（けいさん）しよう</h4>
                                        <div class="data-demo">
                                            5cm ＋ 3cm ＝ <b>8cm</b><br>
                                            7mm － 2mm ＝ <b>5mm</b>
                                        </div>
                                        <p>単位が ちがうときは、どちらかに そろえてから 計算するよ！</p>`,
                                        quizzes: [
                                            { question: "4cm ＋ 2cm は？", display: "4cm ＋ 2cm", answer: "6cm", options: ["6cm", "8cm", "6mm"] },
                                            { question: "1cm ＋ 5mm は 何mmかな？", display: "10mm ＋ 5mm", answer: 15 }
                                        ]
                                    },
                                    {
                                        title: "(3) <ruby>かさ<rt>かさ</rt></ruby>の <ruby>単位<rt>たんい</rt></ruby>（L, dL, mL）",
                                        content: `<h4>みずの りょうを あらわそう</h4>
                                        <div class="point-box">
                                            ・<b>L（リットル）</b>：大きな かさ。<br>
                                            ・<b>dL（デシリットル）</b>：Lの 次に大きな かさ。<br>
                                            ・<b>mL（ミリリットル）</b>：小さな かさ。
                                        </div>
                                        <div class="data-demo">
                                            <p><b>1L ＝ 10dL</b></p>
                                            <p><b>1dL ＝ 100mL</b></p>
                                            <p><b>1L ＝ 1000mL</b></p>
                                        </div>`,
                                        quizzes: [
                                            { question: "1Lは 何dLかな？", display: "1L ＝ □dL", answer: 10 },
                                            { question: "1dLは 何mLかな？", display: "1dL ＝ □mL", answer: 100 },
                                            { question: "2Lは 何dLかな？", display: "2L ＝ □dL", answer: 20 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "2. <ruby>単位<rt>たんい</rt></ruby>の <ruby>選択<rt>せんたく</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) どれを つかう？",
                                        content: `<h4>ふさわしい 単位（たんい）を えらぼう</h4>
                                        <div class="point-box">
                                            ものの 大きさに あわせて、つかう 単位を かえるよ！
                                        </div>
                                        <div class="data-demo">
                                            <p>・<b>えんぴつの 長さ</b> ➔ cm<br>
                                            ・<b>教科書の あつさ</b> ➔ mm<br>
                                            ・<b>教室の はば</b> ➔ m（メートル）</p>
                                            <p>・<b>ペットボトルの 水</b> ➔ L または mL<br>
                                            ・<b>計量（けいりょう）スプーン</b> ➔ mL</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "えんぴつの ながさを はかるのに ちょうどいいのは？", display: "えんぴつ", answer: "cm", options: ["mm", "cm", "m"] },
                                            { question: "牛乳（ぎゅうにゅう）パックの かさを はかるのに ちょうどいいのは？", display: "牛乳パック", answer: "L", options: ["mm", "cm", "L"] },
                                            { question: "ノートの あつさを はかるのに ちょうどいいのは？", display: "ノートのあつさ", answer: "mm", options: ["mm", "cm", "m"] }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "3. <ruby>時間<rt>じかん</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>時<rt>じ</rt></ruby>と <ruby>分<rt>ふん</rt></ruby>",
                                        content: `<h4>時間の 長さを しろう</h4>
                                        <div class="point-box">
                                            <b>1時間 ＝ 60分</b>
                                        </div>
                                        <div class="data-demo">
                                            <p>長い はりが 1しゅう すると、1時間だね！</p>
                                            <p>午前（ごぜん）は 12時間、午後（ごご）も 12時間。<br>
                                            あわせて <b>1日 ＝ 24時間</b> だよ！</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "1時間は 何分かな？", display: "1時間 ＝ □分", answer: 60 },
                                            { question: "1日は 何時間かな？", display: "1日 ＝ □時間", answer: 24 },
                                            { question: "2時間は 何分かな？", display: "2時間 ＝ □分", answer: 120 }
                                        ]
                                    },
                                    {
                                        title: "(2) 時間（じかん）と 時刻（じこく）",
                                        content: `<h4>ちがいを わかるかな？</h4>
                                        <div class="point-box">
                                            ・<b>時刻（じこく）</b>：「3時10分」などの、そのときのこと。<br>
                                            ・<b>時間（じかん）</b>：「10分間」などの、長さのこと。
                                        </div>
                                        <div class="data-demo">
                                            <p>3時10分から 3時20分までの <b>時間は 10分</b> だね！</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "2時から 2時30分までの 時間は 何分かな？", display: "2時 ➔ 2時30分", answer: 30 },
                                            { question: "10時40分から 11時までの 時間は 何分かな？", display: "10時40分 ➔ 11時", answer: 20 }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },

                ]
            },
            e3: {
                name: "小3",
                categories: [
                    {
                        name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>",
                        units: [
                            {
                                title: "1. 1<ruby>億<rt>おく</rt></ruby>までの <ruby>数<rt>かず</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) 2<ruby>年生<rt>ねんせい</rt></ruby>の <ruby>復習<rt>ふくしゅう</rt></ruby> と おおきな数",
                                        content: `<h4>かずが ふえると おへやはどうなる？</h4>
                                        <div class="data-demo">
                                            <p><b>① 1000に なったとき</b></p>
                                            <table class="data-table" style="width: 300px; margin: 0 auto;">
                                                <tr><th style="background:#d9f7be">1000の<br>おへや</th><th style="background:#fff7e6">100の<br>おへや</th><th style="background:#ffe58f">10の<br>おへや</th><th style="background:#bae7ff">1の<br>おへや</th></tr>
                                                <tr style="font-size: 24px; font-weight: bold; color: #e74c3c;"><td>1</td><td>0</td><td>0</td><td>0</td></tr>
                                            </table>
                                            <p><small>「100の おへや」がいっぱいに なって、<br>「1000の おへや」に <b>1つ</b> おひっこし したよ！</small></p>

                                            <p style="margin-top:20px;"><b>② 10000（一万）に なったとき</b></p>
                                            <table class="data-table" style="width: 350px; margin: 0 auto;">
                                                <tr><th style="background:#efdbff">一万の<br>おへや</th><th style="background:#d9f7be">1000の</th><th style="background:#fff7e6">100の</th><th style="background:#ffe58f">10の</th><th style="background:#bae7ff">1の</th></tr>
                                                <tr style="font-size: 24px; font-weight: bold; color: #e74c3c;"><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                                            </table>
                                            <p><small>1000の まとまりが 10こで <b>10000（いちまん）</b> に なったね！</small></p>

                                            <p style="margin-top:20px;"><b>③ もっと もっと ふえると？</b></p>
                                            <div style="display: flex; flex-direction: column; gap: 15px; align-items: center;">
                                                <table class="data-table" style="width: 400px;">
                                                    <tr><th style="background:#efdbff">十万の</th><th style="background:#efdbff">一万の</th><th style="background:#d9f7be">千の</th><th style="background:#fff7e6">百の</th><th style="background:#ffe58f">十の</th><th style="background:#bae7ff">一の</th></tr>
                                                    <tr style="font-size: 20px; font-weight: bold;"><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                                                </table>
                                                <p><small>一万の まとまりが 10こで <b>100000（じゅうまん）</b></small></p>

                                                <table class="data-table" style="width: 450px;">
                                                    <tr><th style="background:#efdbff">千万の</th><th style="background:#efdbff">百万の</th><th style="background:#efdbff">十万の</th><th style="background:#efdbff">一万の</th><th style="background:#d9f7be">千の</th><th style="background:#fff7e6">百の</th><th style="background:#ffe58f">十の</th><th style="background:#bae7ff">一の</th></tr>
                                                    <tr style="font-size: 18px; font-weight: bold;"><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                                                </table>
                                                <p><small>百万の まとまりが 10こで <b>10000000（せんまん）</b></small></p>

                                                <p style="font-size: 20px; color: #e74c3c; font-weight: bold;">④ ついに 1億（いちおく）！</p>
                                                <table class="data-table" style="width: 500px; font-size: 12px;">
                                                    <tr><th style="background:#ffccc7">一億の<br>おへや</th><th style="background:#efdbff">千万</th><th style="background:#efdbff">百万</th><th style="background:#efdbff">十万</th><th style="background:#efdbff">一万</th><th style="background:#d9f7be">千</th><th style="background:#fff7e6">百</th><th style="background:#ffe58f">十</th><th style="background:#bae7ff">一</th></tr>
                                                    <tr style="font-size: 18px; font-weight: bold; color: #e74c3c;"><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                                                </table>
                                                <p><small>千万の まとまりが 10こで <b>100000000（いちおく）</b> に おひっこし！</small></p>
                                            </div>
                                        </div>`,
                                        quizzes: [
                                            { question: "1000が 10こ あつまると いくつかな？", display: "1000が 10こ", answer: 10000 },
                                            { question: "一万が 10こ あつまると いくつかな？", display: "一万が 10こ", answer: 100000 },
                                            { question: "千万が 10こ あつまると いくつかな？", display: "千万が 10こ", answer: 100000000 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "2. <ruby>等号<rt>とうごう</rt></ruby>と <ruby>不等号<rt>ふとうごう</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) おおきい ほうを むく しるし",
                                        content: `<h4>「く」の字（じ）の しるしを おぼえよう</h4>
                                        <div class="point-box">
                                            かずの おおきさを くらべるときは、<b>「＞」</b> や <b>「＜」</b> を つかうよ！
                                        </div>
                                        <div class="data-demo">
                                            <p style="font-size: 24px;"><b>5000 ＞ 3000</b></p>
                                            <p>おくちが <b>ひらいている ほう</b> が、おおきい かずだよ！</p>
                                            <p style="font-size: 40px;">🐊</p>
                                            <p>「わにさんの おくち」は、おいしいものが たくさん あるほうを むくんだね！</p>
                                        </div>
                                        <h4>おなじ おおきさの ときは？</h4>
                                        <div class="data-demo">
                                            <p style="font-size: 24px;"><b>1000 ＝ 1000</b></p>
                                            <p>おなじ おおきさなら <b>「＝」（は）</b> を かくよ。</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "あてはまる しるしを えらんでね", display: "4500 □ 5400", answer: "＜", options: ["＞", "＜", "＝"] },
                                            { question: "あてはまる しるしを えらんでね", display: "一万 □ 9999", answer: "＞", options: ["＞", "＜", "＝"] },
                                            { question: "あてはまる しるしを えらんでね", display: "10000 □ 10000", answer: "＝", options: ["＞", "＜", "＝"] }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "3. <ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>（<ruby>筆算<rt>ひっさん</rt></ruby>）",
                                subUnits: [
                                    {
                                        title: "(1) 3けたの <ruby>足<rt>た</rt></ruby>し算（くりあがりなし）",
                                        content: `<h4>お部屋ごとに たすだけ！</h4>
                                        <div class="point-box">
                                            どの お部屋も 10より ちいさいときは、そのまま たすだけで OKだよ。
                                        </div>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  1 2 3
+ 4 5 6
-------
  5 7 9
                                            </pre>
                                        </div>`,
                                        quizzes: [
                                            { question: "214 ＋ 352 は いくつかな？", display: "  214<br>+ 352", answer: 566 }
                                        ]
                                    },
                                    {
                                        title: "(2) 3けたの <ruby>足<rt>た</rt></ruby>し算（くりあがりあり）",
                                        content: `<h4>10あつまったら お引（ひ）っこし！</h4>
                                        <div class="point-box">
                                            合計（ごうけい）が 10以上に なったら、おとなりの お部屋へ 1つ あげるんだったね。
                                        </div>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  5 8 2
+ 1 3 9
-------
  7 2 1
                                            </pre>
                                        </div>`,
                                        quizzes: [
                                            { question: "468 ＋ 275 は いくつかな？", display: "  468<br>+ 275", answer: 743 }
                                        ]
                                    },
                                    {
                                        title: "(3) 4けたの <ruby>足<rt>た</rt></ruby>し算",
                                        content: `<h4>千のお部屋まで たしてみよう</h4>
                                        <div class="point-box">
                                            お部屋が ふえても、やりかたは おなじ！ 右から じゅんばんに けいさんしよう。
                                        </div>
                                        <div class="data-demo">
                                            <p><b>① くりあがりなし</b></p>
                                            <pre style="font-size: 20px; line-height: 1.2; letter-spacing: 5px;">
  1 2 0 0
+ 3 4 0 0
---------
  4 6 0 0
                                            </pre>
                                            <p style="margin-top:10px;"><b>② くりあがりあり</b></p>
                                            <pre style="font-size: 20px; line-height: 1.2; letter-spacing: 5px;">
  4 5 0 0
+ 2 8 0 0
---------
  7 3 0 0
                                            </pre>
                                        </div>`,
                                        quizzes: [
                                            { question: "2300 ＋ 1500 は？", display: "2300 ＋ 1500", answer: 3800 },
                                            { question: "5700 ＋ 2600 は？", display: "5700 ＋ 2600", answer: 8300 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "4. <ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>（<ruby>筆算<rt>ひっさん</rt></ruby>）",
                                subUnits: [
                                    {
                                        title: "(1) 3けたの <ruby>引<rt>ひ</rt></ruby>き算（くりさがりなし）",
                                        content: `<h4>お部屋ごとに ひくだけ！</h4>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  8 4 5
- 2 1 3
-------
  6 3 2
                                            </pre>
                                        </div>`,
                                        quizzes: [
                                            { question: "789 － 456 は いくつかな？", display: "  789<br>- 456", answer: 333 }
                                        ]
                                    },
                                    {
                                        title: "(2) 3けたの <ruby>引<rt>ひ</rt></ruby>き算（くりさがりあり）",
                                        content: `<h4>おとなりから 借りてこよう</h4>
                                        <div class="point-box">
                                            引けないときは、おとなりの お部屋を 1つ バラして 10個 もらうよ。
                                        </div>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  5 1 2
- 2 4 5
-------
  2 6 7
                                            </pre>
                                        </div>`,
                                        quizzes: [
                                            { question: "634 － 258 は いくつかな？", display: "  634<br>- 258", answer: 376 }
                                        ]
                                    },
                                    {
                                        title: "(2) 4けたの <ruby>引<rt>ひ</rt></ruby>き算",
                                        content: `<h4>大きな 数の 引き算</h4>
                                        <div class="data-demo">
                                            <p><b>① くりさがりなし</b></p>
                                            <pre style="font-size: 20px; line-height: 1.2; letter-spacing: 5px;">
  4 5 0 0
- 1 2 0 0
---------
  3 3 0 0
                                            </pre>
                                            <p style="margin-top:10px;"><b>② くりさがりあり</b></p>
                                            <pre style="font-size: 20px; line-height: 1.2; letter-spacing: 5px;">
  5 0 0 0
- 1 2 0 0
---------
  3 8 0 0
                                            </pre>
                                        </div>`,
                                        quizzes: [
                                            { question: "8900 － 3400 は？", display: "8900 － 3400", answer: 5500 },
                                            { question: "4000 － 1500 は？", display: "4000 － 1500", answer: 2500 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "5. かけ<ruby>算<rt>ざん</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) 2けた ✕ 1けた の 筆算（ひっさん）",
                                        content: `<h4>たてに ならべて 計算しよう</h4>
                                        <div class="point-box">
                                            2年生の 九九（くく）を つかって、お部屋ごとに 計算するよ！
                                        </div>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  2 1
✕   3
-----
  6 3
                                            </pre>
                                            <p>① 3 ✕ 1 ＝ 3<br>
                                            ② 3 ✕ 2 ＝ 6</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "23 ✕ 3 は いくつかな？", display: "  23<br>✕  3", answer: 69 },
                                            { question: "12 ✕ 4 は いくつかな？", display: "  12<br>✕  4", answer: 48 }
                                        ]
                                    },
                                    {
                                        title: "(2) 3けた ✕ 1けた の 筆算（ひっさん）",
                                        content: `<h4>お部屋が ふえても やりかたは おなじ！</h4>
                                        <div class="point-box">
                                            百のお部屋、十のお部屋、一のお部屋。右から じゅんばんに かけていこう。
                                        </div>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  1 2 3
✕   2
-------
  2 4 6
                                            </pre>
                                        </div>`,
                                        quizzes: [
                                            { question: "312 ✕ 2 は いくつかな？", display: "  312<br>✕   2", answer: 624 },
                                            { question: "102 ✕ 3 は いくつかな？", display: "  102<br>✕   3", answer: 306 }
                                        ]
                                    },
                                    {
                                        title: "(3) 2けた ✕ 2けた の 筆算（ひっさん）",
                                        content: `<h4>2だんに わけて 計算しよう</h4>
                                        <div class="point-box">
                                            かける数の 「一の位」と 「十の位」で、2回 かけ算をするんだよ。
                                        </div>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
    2 1
  ✕ 1 3
  -----
    6 3  (3 ✕ 21)
  2 1    (1 ✕ 21)
  -----
  2 7 3
                                            </pre>
                                        </div>
                                        <p>さいごに 2つの 答えを たすと、できあがり！</p>`,
                                        quizzes: [
                                            { question: "12 ✕ 13 は いくつかな？", display: "  12<br>✕ 13", answer: 156 },
                                            { question: "21 ✕ 32 は いくつかな？", display: "  21<br>✕ 32", answer: 672 }
                                        ]
                                    },
                                    {
                                        title: "(4) 3けた ✕ 2けた の 筆算（ひっさん）",
                                        content: `<h4>もっと おおきな かけ算</h4>
                                        <div class="point-box">
                                            これも 2だんに わけて 書いて、さいごに たし算をするよ！
                                        </div>
                                        <div class="data-demo">
                                            <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
    1 2 3
  ✕   1 2
  -------
    2 4 6
  1 2 3
  -------
  1 4 7 6
                                            </pre>
                                        </div>`,
                                        quizzes: [
                                            { question: "231 ✕ 12 は いくつかな？", display: "  231<br>✕  12", answer: 2772 }
                                        ]
                                    },
                                    {
                                        title: "(5) かけ算の きまり（性質）",
                                        content: `<h4>計算（けいさん）が らくになる 3つの きまり</h4>
                                        <div class="point-box" style="background:#eef7ff;">
                                            <b>① 交換（こうかん）の きまり</b><br>
                                            <ruby>掛<rt>か</rt></ruby>ける 数を 入れかえても、答えは 同じだよ！<br>
                                            <p style="text-align:center;"><b>3 ✕ 5 ＝ 5 ✕ 3</b></p>
                                        </div>
                                        <div class="point-box" style="background:#fff2f0;">
                                            <b>② 結合（けつごう）の きまり</b><br>
                                            3つの 数の かけ算は、どこから 先に 計算しても 答えは 同じ！<br>
                                            <p style="text-align:center;"><b>(2 ✕ 3) ✕ 4 ＝ 2 ✕ (3 ✕ 4)</b></p>
                                        </div>
                                        <div class="point-box" style="background:#f6ffed;">
                                            <b>③ 分配（ぶんぱい）の きまり</b><br>
                                            たし算の 答えに 数を かけても、バラバラに かけてから たしても 同じ！<br>
                                            <p style="text-align:center;"><b>(10 ＋ 2) ✕ 3 ＝ 10 ✕ 3 ＋ 2 ✕ 3</b></p>
                                        </div>
                                        <p>この きまりを つかうと、むずかしい 計算も かんたんに できるよ！</p>`,
                                        quizzes: [
                                            { question: "「3 ✕ 8」と 答えが 同じなのは？", display: "3 ✕ 8", answer: "8 ✕ 3", options: ["8 ✕ 3", "3 ＋ 8", "8 － 3"] },
                                            { question: "「(7 ＋ 3) ✕ 2」と 答えが 同じなのは？", display: "(7 ＋ 3) ✕ 2", answer: "7✕2＋3✕2", options: ["7✕2＋3✕2", "7 ＋ 3 ＋ 2", "7✕3✕2"] }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "6. わり<ruby>算<rt>ざん</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) わり算の いみ（1位数 ✕ 1位数）",
                                        content: `<h4>おなじ 数ずつ 分（わ）けると？</h4>
                                        <div class="point-box">
                                            12この 🍎を 3人に おなじ数ずつ 分けると、1人 <b>4こ</b> になるね。
                                        </div>
                                        <div class="data-demo">
                                            <p style="font-size: 24px;"><b>12 ÷ 3 ＝ 4</b></p>
                                            <p>「12 わる 3 は 4」と よむよ！</p>
                                        </div>
                                                                                <p>このように、おなじ数ずつ 分ける 計算を <b>わり算</b> というよ。</p>`,
                                                                                quizzes: [
                                                                                    { question: "8こを 2人で 同じ数ずつ 分けると、1人 何こかな？", display: "8 ÷ 2", answer: 4 },
                                                                                    { question: "15こを 3人で 同じ数ずつ 分けると、1人 何こかな？", display: "15 ÷ 3", answer: 5 },
                                                                                    { question: "24こを 4人で 同じ数ずつ 分けると、1人 何こかな？", display: "24 ÷ 4", answer: 6 },
                                                                                    { question: "30こを 5人で 同じ数ずつ 分けると、1人 何こかな？", display: "30 ÷ 5", answer: 6 },
                                                                                    { question: "18こを 6人で 同じ数ずつ 分けると、1人 何こかな？", display: "18 ÷ 6", answer: 3 }
                                                                                ]
                                                                            },
                                                                            {
                                                                                title: "(2) かけ算・たし算・ひき算との かんけい",
                                                                                content: `<h4>わり算の 答えを 見つける ヒント</h4>
                                                                                <div class="point-box" style="background:#eef7ff;">
                                                                                    <b>かけ算との かんけい</b><br>
                                                                                    12 ÷ 3 の 答えは、<b>3 ✕ □ ＝ 12</b> になる □ を さがせばいいんだよ！
                                                                                </div>
                                                                                <div class="point-box" style="background:#fff2f0;">
                                                                                    <b>ひきざんとの かんけい</b><br>
                                                                                    12から 3を 何回 引（ひ）けるかな？<br>
                                                                                    12 － 3 － 3 － 3 － 3 ＝ 0 ➔ <b>4回</b> 引けるから、答えは 4！
                                                                                </div>`,
                                                                                quizzes: [
                                                                                    { question: "「20 ÷ 4」の 答えを かけ算で さがすと？", display: "4 ✕ □ ＝ 20", answer: 5 },
                                                                                    { question: "「10 ÷ 2」の 答えを ひき算で さがすと？", display: "10 － 2 － 2 － ... 何回引ける？", answer: 5 },
                                                                                    { question: "「18 ÷ 3」の 答えを かけ算で さがすと？", display: "3 ✕ □ ＝ 18", answer: 6 },
                                                                                    { question: "「35 ÷ 5」の 答えを かけ算で さがすと？", display: "5 ✕ □ ＝ 35", answer: 7 },
                                                                                    { question: "「16 ÷ 4」の 答えを かけ算で さがすと？", display: "4 ✕ □ ＝ 16", answer: 4 }
                                                                                ]
                                                                            },
                                                                            {
                                                                                title: "(3) 1位数で わる 計算（けいさん）",
                                                                                content: `<h4>九九（くく）を つかって パッと とこう</h4>
                                                                                <div class="point-box">
                                                                                    わる数（右がわの数）の だんの 九九を おもい出そう！
                                                                                </div>
                                                                                <div class="data-demo">
                                                                                    <p><b>24 ÷ 6 ＝ □</b></p>
                                                                                    <p>➔ 6のだん：6 ✕ 1＝6, 6 ✕ 2＝12, 6 ✕ 3＝18, <b>6 ✕ 4＝24</b>！</p>
                                                                                    <p>答えは <b>4</b> だね！</p>
                                                                                </div>`,
                                                                                quizzes: [
                                                                                    { question: "32 ÷ 8 は いくつかな？", display: "32 ÷ 8", answer: 4 },
                                                                                    { question: "45 ÷ 9 は いくつかな？", display: "45 ÷ 9", answer: 5 },
                                                                                    { question: "21 ÷ 7 は いくつかな？", display: "21 ÷ 7", answer: 3 },
                                                                                    { question: "54 ÷ 6 は いくつかな？", display: "54 ÷ 6", answer: 9 },
                                                                                    { question: "28 ÷ 4 は いくつかな？", display: "28 ÷ 4", answer: 7 }
                                                                                ]
                                                                            },
                                                                            {
                                                                                title: "(4) 答えが 2けたに なる わり算",
                                                                                content: `<h4>50 や 30 などの 計算</h4>
                                                                                <div class="point-box">
                                                                                    大きな 数でも、10の まとまりで かんがえると かんたんだよ！
                                                                                </div>
                                                                                <div class="data-demo">
                                                                                    <p><b>80 ÷ 2 ＝ □</b></p>
                                                                                    <p>➔ 10の まとまりが <b>8つ</b> あるよ。</p>
                                                                                    <p>➔ 8 ÷ 2 ＝ 4</p>
                                                                                    <p>➔ 10の まとまりが 4つだから、答えは <b>40</b> だね！</p>
                                                                                </div>`,
                                                                                quizzes: [
                                                                                    { question: "60 ÷ 3 は いくつかな？", display: "60 ÷ 3", answer: 20 },
                                                                                    { question: "100 ÷ 2 は いくつかな？", display: "100 ÷ 2", answer: 50 },
                                                                                    { question: "90 ÷ 3 は いくつかな？", display: "90 ÷ 3", answer: 30 },
                                                                                    { question: "40 ÷ 2 は いくつかな？", display: "40 ÷ 2", answer: 20 },
                                                                                    { question: "120 ÷ 4 は いくつかな？", display: "120 ÷ 4", answer: 30 }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        title: "7. <ruby>小数<rt>しょうすう</rt></ruby>",
                                                                        subUnits: [
                                                                            {
                                                                                title: "(1) 「.」（てん）と 1/10 の おはなし",
                                                                                content: `<h4>1より ちいさい お部屋（位）</h4>
                                                                                <div class="point-box">
                                                                                    1を 10こに 分けた 1つ分を <b>0.1（れい てん いち）</b> というよ。<br>
                                                                                    この 「 . 」 を <b>小数（しょうすう）点</b> と よぶんだ！
                                                                                </div>
                                                                                <div class="data-demo">
                                                                                    <p>0.1 が 10こ あつまると <b>1</b> になるよ！</p>
                                                                                    <div style="display:flex; width:200px; height:30px; border:2px solid #333; margin:0 auto;">
                                                                                        <div style="flex:1; background:#ffd6e7; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1; border-right:1px solid #333;"></div><div style="flex:1;"></div>
                                                                                    </div>
                                                                                </div>`,
                                                                                quizzes: [
                                                                                    { question: "0.1 が 10こ あつまると いくつ？", display: "0.1 ✕ 10", answer: 1 },
                                                                                    { question: "1を 10こに 分けた 1つ分は？", display: "1 ÷ 10", answer: 0.1 },
                                                                                    { question: "0.1 が 5こ あつまると いくつ？", display: "0.1 ✕ 5", answer: 0.5 }
                                                                                ]
                                                                            },
                                                                            {
                                                                                title: "(2) 小数の たし算",
                                                                                content: `<h4>「.」を そろえて たそう</h4>
                                                                                <div class="point-box">
                                                                                    たし算の ときは、小数点の ばしょを ぴったり そろえて 書くのが ポイント！
                                                                                </div>
                                                                                <div class="data-demo">
                                                                                    <p><b>0.3 ＋ 0.5 ＝ 0.8</b></p>
                                                                                    <p>3 ＋ 5 ＝ 8 と 同じように かんがえていいよ！</p>
                                                                                </div>`,
                                                                                quizzes: [
                                                                                    { question: "0.4 ＋ 0.2 は いくつかな？", display: "0.4 ＋ 0.2", answer: 0.6 },
                                                                                    { question: "0.6 ＋ 0.4 は いくつかな？", display: "0.6 ＋ 0.4", answer: 1 },
                                                                                    { question: "1.2 ＋ 0.5 は いくつかな？", display: "1.2 ＋ 0.5", answer: 1.7 },
                                                                                    { question: "0.8 ＋ 0.7 は いくつかな？", display: "0.8 ＋ 0.7", answer: 1.5 },
                                                                                    { question: "2.3 ＋ 1.4 は いくつかな？", display: "2.3 ＋ 1.4", answer: 3.7 }
                                                                                ]
                                                                            },
                                                                            {
                                                                                title: "(3) 小数の 引き算",
                                                                                content: `<h4>「.」を そろえて ひこう</h4>
                                                                                <div class="point-box">
                                                                                    引き算も 同じ！ 小数点を そろえて 計算しよう。
                                                                                </div>
                                                                                <div class="data-demo">
                                                                                    <p><b>0.8 － 0.3 ＝ 0.5</b></p>
                                                                                    <p><b>1 － 0.2</b> のときは、1を <b>1.0</b> だと かんがえると まちがえにくいよ！</p>
                                                                                </div>`,
                                                                                quizzes: [
                                                                                    { question: "0.9 － 0.5 は いくつかな？", display: "0.9 － 0.5", answer: 0.4 },
                                                                                    { question: "1 － 0.3 は いくつかな？", display: "1 － 0.3", answer: 0.7 },
                                                                                    { question: "1.5 － 0.4 は いくつかな？", display: "1.5 － 0.4", answer: 1.1 },
                                                                                    { question: "2.8 － 1.3 は いくつかな？", display: "2.8 － 1.3", answer: 1.5 },
                                                                                    { question: "1.2 － 0.6 は いくつかな？", display: "1.2 － 0.6", answer: 0.6 }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        title: "8. <ruby>分数<rt>ぶんすう</rt></ruby>",
                                                                        subUnits: [
                                                                            {
                                                                                title: "(1) <ruby>分母<rt>ぶんぼ</rt></ruby>と <ruby>分子<rt>ぶんし</rt></ruby>",
                                                                                content: `<h4>分数の なまえを おぼえよう</h4>
                                                                                <div class="point-box">
                                                                                    ・下の数 ➔ <b>分母（ぶんぼ）</b>：お母さんが 子を おんぶしているよ。<br>
                                                                                    ・上の数 ➔ <b>分子（ぶんし）</b>：上に 乗っているのが 子どもだよ。
                                                                                </div>
                                                                                <div class="data-demo">
                                                                                    <p style="font-size: 32px;"><b><ruby>1<rt>（分子）</rt></ruby><br>―<br><ruby>3<rt>（分母）</rt></ruby></b></p>
                                                                                </div>`,
                                                                                quizzes: [
                                                                                    { question: "「3分の1」の下の数（3）のなまえは？", display: "1/3", answer: "分母", options: ["分母", "分子"] },
                                                                                    { question: "「4分の3」の上の数（3）のなまえは？", display: "3/4", answer: "分子", options: ["分母", "分子"] },
                                                                                    { question: "分母が5、分子が2の分数は？", display: "分母5, 分子2", answer: "2/5", options: ["2/5", "5/2"] }
                                                                                ]
                                                                            },
                                                                            {
                                                                                title: "(2) <ruby>単位<rt>たんい</rt></ruby>分数の いくつ分",
                                                                                content: `<h4>もとになる 大きさ</h4>
                                                                                <div class="point-box">
                                                                                    1/3（3分の1）が 2こ あつまると <b>2/3（3分の2）</b> になるよ！
                                                                                </div>
                                                                                <div class="data-demo">
                                                                                    <p>1/4 が 3こ あつまると ➔ <b>3/4</b></p>
                                                                                    <p>1/4 が 4こ あつまると ➔ <b>4/4（つまり 1！）</b></p>
                                                                                </div>`,
                                                                                quizzes: [
                                                                                    { question: "1/5 が 3こ あつまると いくつ？", display: "1/5 ✕ 3", answer: "3/5" },
                                                                                    { question: "1/8 が 5こ あつまると いくつ？", display: "1/8 ✕ 5", answer: "5/8" },
                                                                                    { question: "1/3 が 3こ あつまると いくつ？", display: "1/3 ✕ 3", answer: "1", options: ["1/3", "3/3 (1)", "2/3"] },
                                                                                    { question: "1/10 が 7こ あつまると いくつ？", display: "1/10 ✕ 7", answer: "7/10" },
                                                                                    { question: "1/6 が 2こ あつまると いくつ？", display: "1/6 ✕ 2", answer: "2/6" }
                                                                                ]
                                                                            },
                                                                            {
                                                                                title: "(3) 分数の たし算",
                                                                                content: `<h4>上の数（分子）だけ たそう</h4>
                                                                                <div class="point-box">
                                                                                    分母（下の数）が 同じなら、上の数（分子）を たすだけだよ！
                                                                                </div>
                                                                                <div class="data-demo">
                                                                                    <p><b>1/5 ＋ 2/5 ＝ 3/5</b></p>
                                                                                    <p>※ 下の数は 5のままで 変わらないよ！</p>
                                                                                </div>`,
                                                                                quizzes: [
                                                                                    { question: "1/4 ＋ 2/4 は いくつ？", display: "1/4 ＋ 2/4", answer: "3/4" },
                                                                                    { question: "2/7 ＋ 3/7 は いくつ？", display: "2/7 ＋ 3/7", answer: "5/7" },
                                                                                    { question: "1/5 ＋ 3/5 は いくつ？", display: "1/5 ＋ 3/5", answer: "4/5" },
                                                                                    { question: "2/9 ＋ 5/9 は いくつ？", display: "2/9 ＋ 5/9", answer: "7/9" },
                                                                                    { question: "1/3 ＋ 1/3 は いくつ？", display: "1/3 ＋ 1/3", answer: "2/3" }
                                                                                ]
                                                                            },
                                                                            {
                                                                                title: "(4) 分数の 引き算",
                                                                                content: `<h4>上の数（分子）だけ ひこう</h4>
                                                                                <div class="point-box">
                                                                                    分母が 同じなら、上の数（分子）を ひくだけ！
                                                                                </div>
                                                                                <div class="data-demo">
                                                                                    <p><b>3/5 － 1/5 ＝ 2/5</b></p>
                                                                                    <p><b>1 － 1/3</b> のときは、1を <b>3/3</b> だと かんがえよう！</p>
                                                                                </div>`,
                                                                                quizzes: [
                                                                                    { question: "4/5 － 1/5 は いくつ？", display: "4/5 － 1/5", answer: "3/5" },
                                                                                    { question: "1 － 1/4 は いくつ？", display: "1 － 1/4", answer: "3/4" },
                                                                                    { question: "7/8 － 3/8 は いくつ？", display: "7/8 － 3/8", answer: "4/8" },
                                                                                    { question: "5/6 － 4/6 は いくつ？", display: "5/6 － 4/6", answer: "1/6" },
                                                                                    { question: "1 － 2/5 は いくつ？", display: "5/5 － 2/5", answer: "3/5" }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                        ,
                            {
                                title: "9. □を つかった <ruby>式<rt>しき</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) わからない <ruby>数<rt>かず</rt></ruby>を □に しよう",
                                        content: `<h4>おはなしを そのまま 式（しき）にする</h4>
                                        <div class="point-box">
                                            わからない 数があるときは、そこに<b>「□」</b>を 書いて 式を たてることができるよ！
                                        </div>
                                        <div class="data-demo">
                                            <p><b>【もんだい】</b><br>
                                            あめを 何こか もっていました。8こ もらったら、ぜんぶで 17こに なりました。</p>
                                            <p style="text-align:center; font-size: 24px; font-weight: bold;">
                                                <span style="border: 2px solid #333; padding: 0 10px; border-radius: 5px;">？</span> ＋ 8 ＝ 17<br>
                                                ↓<br>
                                                <span style="border: 2px solid #333; padding: 0 10px; border-radius: 5px;">□</span> ＋ 8 ＝ 17
                                            </p>
                                        </div>
                                        <p>おはなしの じゅんばん 通（どお）りに 式を つくれるから、とっても わかりやすいね！</p>`,
                                        quizzes: [
                                            { question: "「はじめに 5こ あって、いくつか もらったら 12こに なった」を 式にすると？", display: "5 ＋ □ ＝ 12", answer: "5+□=12", options: ["5+□=12", "5+12=□", "□-5=12"] }
                                        ]
                                    },
                                    {
                                        title: "(2) □に あてはまる <ruby>数<rt>かず</rt></ruby>を 見（み）つけよう",
                                        content: `<h4>どうやって さがす？</h4>
                                        <div class="point-box" style="background:#eef7ff;">
                                            <b>① じゅんばんに 入（い）れてみる</b><br>
                                            1, 2, 3... と じゅんばんに 入れてみて、ぴったりに なるのを さがすよ。<br>
                                            「8かな？ 9かな？」と およその 見当（けんとう）を つけるのも いいね！
                                        </div>
                                        <div class="point-box" style="background:#fff2f0;">
                                            <b>② ぎゃくの 計算（けいさん）を する</b><br>
                                            <b>□ ＋ 8 ＝ 17</b> なら、<br>
                                            <b>17 － 8</b> を すると、□が <b>9</b> だって すぐわかるよ！
                                        </div>
                                        <p>□を つかった 「□ ＋ 8」という 式そのものが、17 という 一つの 数を あらわしているんだね。</p>`,
                                        quizzes: [
                                            { question: "□ ＋ 5 ＝ 13 。 □は いくつかな？", display: "□ ＋ 5 ＝ 13", answer: 8 },
                                            { question: "20 － □ ＝ 15 。 □は いくつかな？", display: "20 － □ ＝ 15", answer: 5 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "10. そろばん",
                                subUnits: [
                                    {
                                        title: "(1) そろばんの 道具（どうぐ）と おやくそく",
                                        content: `<h4>お部屋（くらい）が よくわかる！</h4>
                                        <div class="point-box">
                                            そろばんは、珠（たま）を 動（うご）かして 計算する 道具（どうぐ）だよ。
                                        </div>
                                        <div class="data-demo">
                                            <p>・上にある 1つの珠 ➔ <b>5</b>（五だま）<br>
                                            ・下にある 4つの珠 ➔ <b>1</b>（一だま）</p>
                                        </div>
                                        <p>そろばんの 縦（たて）の 棒（ぼう）は、一つひとつが <b>「お部屋（位）」</b> を あらわしているんだよ！</p>`,
                                        quizzes: [
                                            { question: "そろばんの 上にある 珠（たま）1つは、いくつ分かな？", display: "上にある珠", answer: 5 }
                                        ]
                                    },
                                    {
                                        title: "(2) <ruby>整数<rt>せいすう</rt></ruby>と <ruby>小数<rt>しょうすう</rt></ruby>の 表し方",
                                        content: `<h4>お部屋を 決（き）めて 数（かず）を おこう</h4>
                                        <div class="point-box">
                                            どこを 「一の位」に するか 決めたら、そこから 左へ いくほど 大きな数に なるよ。
                                        </div>
                                        <div class="data-demo">
                                            <p><b>① 整数（せいすう）</b><br>
                                            一、十、百、千、<b>万（まん）</b> の 単位まで 表せるよ！</p>
                                            <p><b>② 小数（しょうすう）</b><br>
                                            一の位の 右どなりを <b>0.1（1/10）</b> の お部屋に するんだよ。</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "一の位の 左どなりは、何の お部屋かな？", display: "一の位 ➔ ❓", answer: "十の位", options: ["十の位", "百の位", "0.1の位"] }
                                        ]
                                    },
                                    {
                                        title: "(3) そろばんで <ruby>足<rt>た</rt></ruby>し算",
                                        content: `<h4>珠（たま）を 入れてみよう</h4>
                                        <div class="point-box" style="background:#eef7ff;">
                                            <b>① そのまま 入れる</b><br>
                                            「2＋1」なら 一だまを 1つ 入れるだけ。
                                        </div>
                                        <div class="point-box" style="background:#fffbe6;">
                                            <b>② 「5」の まとまりを つかう</b><br>
                                            「4＋3」なら、五だまを 入れてから、一だまを 2つ 取るよ！
                                        </div>
                                        <div class="point-box" style="background:#f6ffed;">
                                            <b>③ お引（ひ）っこし（くりあがり）</b><br>
                                            「8＋9」なら、おとなりの お部屋に 1入れて、自分のお部屋から 一だまを 1つ取るよ。
                                        </div>`,
                                        quizzes: [
                                            { question: "「4 ＋ 3」を するとき、五だまを 入れたあとに 取る 一だまは 何こ？", display: "4 ＋ 3", answer: 2 },
                                            { question: "「8 ＋ 9」を するとき、おとなりの お部屋に いくつ 入れる？", display: "8 ＋ 9", answer: 1 }
                                        ]
                                    },
                                    {
                                        title: "(4) そろばんで <ruby>引<rt>ひ</rt></ruby>き算",
                                        content: `<h4>珠（たま）を 取ってみよう</h4>
                                        <div class="point-box" style="background:#eef7ff;">
                                            <b>① そのまま 取る</b><br>
                                            「3－1」なら 一だまを 1つ 取るだけ！
                                        </div>
                                        <div class="point-box" style="background:#fffbe6;">
                                            <b>② 「5」から 借りる</b><br>
                                            「6－4」なら、五だまを 取ってから、一だまを 1つ 入れるよ。
                                        </div>
                                        <div class="point-box" style="background:#fff2f0;">
                                            <b>③ おとなりから 借りる（くりさがり）</b><br>
                                            「15－7」なら、おとなりの お部屋から 1取って、自分のお部屋に 一だまを 3つ 入れるよ。
                                        </div>`,
                                        quizzes: [
                                            { question: "「6 － 4」を するとき、五だまを 取ったあとに 入れる 一だまは 何こ？", display: "6 － 4", answer: 1 }
                                        ]
                                    },
                                    {
                                        title: "(5) おおきな数や 小数の 計算",
                                        content: `<h4>万（まん）や 小数（しょうすう）も かんたん！</h4>
                                        <div class="point-box">
                                            どこの お部屋を つかうか 決（き）めれば、どんな 計算も おなじ やりかた！
                                        </div>
                                        <div class="data-demo">
                                            <p><b>① 万の 単位（たんい）</b><br>
                                            3万 ＋ 5万 ➔ 万の お部屋で 3 ＋ 5 を するだけ！ ➔ <b>8万</b></p>
                                            <p><b>② 小数（しょうすう）</b><br>
                                            2.6 ＋ 0.3 ➔ 0.1の お部屋で 6＋3 を すれば OK！ ➔ <b>2.9</b></p>
                                        </div>`,
                                        quizzes: [
                                            { question: "「2万 ＋ 4万」は いくつかな？", display: "2万 ＋ 4万", answer: "6万" },
                                            { question: "「1.5 ＋ 0.2」は いくつかな？", display: "1.5 ＋ 0.2", answer: 1.7 }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "2 <ruby>図形<rt>ずけい</rt></ruby>",
                        units: [
                            {
                                title: "1. いろいろな <ruby>三角形<rt>さんかくけい</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) <ruby>二等辺<rt>にとうへん</rt></ruby>三角形",
                                        content: `<h4>2つの 辺（へん）が 同じ ながさ</h4>
                                        <div class="point-box">
                                            3つの 辺のうち、<b>2つの 辺の ながさが 同じ</b> 三角形を <b>二等辺三角形</b> と いうよ！
                                        </div>
                                        <div class="data-demo">
                                            <div style="width:100px; height:100px; margin:0 auto; position:relative;">
                                                <div style="width:100%; height:100%; background:#3498db; clip-path:polygon(50% 0%, 0% 100%, 100% 100%);"></div>
                                                <div style="position:absolute; left:15px; top:45px; transform:rotate(-63deg); font-weight:bold; color:white;">||</div>
                                                <div style="position:absolute; right:15px; top:45px; transform:rotate(63deg); font-weight:bold; color:white;">||</div>
                                            </div>
                                            <p>左右（さゆう）の 辺が ぴったり 同じなんだね。</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "二等辺三角形は、何本の 辺の長さが 同じかな？", display: "二等辺三角形", answer: 2 }
                                        ]
                                    },
                                    {
                                        title: "(2) <ruby>正三角形<rt>せいさんかくけい</rt></ruby>",
                                        content: `<h4>3つの 辺が ぜんぶ 同じ ながさ</h4>
                                        <div class="point-box">
                                            <b>3つの 辺の ながさが ぜんぶ 同じ</b> 三角形を <b>正三角形</b> と いうよ！
                                        </div>
                                        <div class="data-demo">
                                            <div style="width:100px; height:100px; margin:0 auto 20px; position:relative;">
                                                <div style="width:100%; height:100%; background:#2ecc71; clip-path:polygon(50% 13.4%, 0% 100%, 100% 100%);"></div>
                                                <div style="position:absolute; left:18px; top:50px; transform:rotate(-60deg); font-weight:bold; color:white;">|</div>
                                                <div style="position:absolute; right:18px; top:50px; transform:rotate(60deg); font-weight:bold; color:white;">|</div>
                                                <div style="position:absolute; left:50%; bottom:-8px; transform:translateX(-50%); font-weight:bold; color:#333;">|</div>
                                            </div>
                                            <p>どこを 見ても 同じ ながさ。きれいな かたちだね！</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "正三角形は、何本の 辺の長さが 同じかな？", display: "正三角形", answer: 3 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "2. <ruby>作図<rt>さくず</rt></ruby>（かきかた）",
                                subUnits: [
                                    {
                                        title: "(1) コンパスを つかった かきかた",
                                        content: `<h4>きれいな 三角形を かこう</h4>
                                        <div class="point-box">
                                            コンパスは、円（えん）を かくだけじゃないよ。<br>
                                            <b>「ながさを はかって うつす」</b> のに とっても べんりなんだ！
                                        </div>
                                        <div class="data-demo">
                                            <p><b>【正三角形の かきかた】</b></p>
                                            <ol style="text-align: left; display: inline-block;">
                                                <li>1つの 辺を 定規（じょうぎ）で ひく。</li>
                                                <li>コンパスを その 辺の ながさに あわせる。</li>
                                                <li>両（りょう）はしから シュッ！と 線（弧）を かく。</li>
                                                <li>交わった ところと 両はしを むすぶ。</li>
                                            </ol>
                                        </div>`,
                                        quizzes: [
                                            { question: "長さを はかって うつすのに つかう 道具（どうぐ）は？", display: "📐？ 📏？ 🧭？", answer: "コンパス", options: ["コンパス", "じょうぎ", "ふでばこ"] }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "3. <ruby>円<rt>えん</rt></ruby>と <ruby>球<rt>きゅう</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) 中心（ちゅうしん）からの きょり",
                                        content: `<h4>どこを はかっても 同じ</h4>
                                        <div class="point-box">
                                            円の <b>中心</b> から まわりの 線までの ながさを <b>半径（はんけい）</b> というよ。
                                        </div>
                                        <div class="data-demo">
                                            <div style="width:100px; height:100px; border:2px solid #333; border-radius:50%; margin:0 auto; position:relative;">
                                                <div style="position:absolute; width:4px; height:4px; background:red; border-radius:50%; top:48px; left:48px;"></div>
                                                <div style="position:absolute; width:50px; height:2px; background:red; top:50px; left:50px; transform-origin: left center; transform: rotate(-30deg);"></div>
                                                <div style="position:absolute; width:50px; height:2px; background:red; top:50px; left:50px; transform-origin: left center; transform: rotate(120deg);"></div>
                                            </div>
                                            <p>中心から 出ている 赤い線は、ぜんぶ 同じ ながさだよ！</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "円の 中心から まわりの線までの ながさを 何という？", display: "中心 ➔ まわり", answer: "半径", options: ["半径", "直径", "一万"] }
                                        ]
                                    },
                                    {
                                        title: "(2) <ruby>直径<rt>ちょっけい</rt></ruby>の はかりかた",
                                        content: `<h4>一番（いちばん） ながい ところ</h4>
                                        <div class="point-box">
                                            中心を 通（とお）って、はしから はしまで ひいた 直線を <b>直径</b> というよ。<br>
                                            直径は <b>半径 2つ分</b> の ながさだよ！
                                        </div>
                                        <div class="data-demo">
                                            <p><b>球（きゅう）の 直径を はかるには？</b></p>
                                            <p>ボールのような 球は、定規（じょうぎ）ではさむようにして はかると うまくいくよ！</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "直径は、半径の 何倍（なんばい）かな？", display: "直径 ＝ 半径 ✕ □", answer: 2 },
                                            { question: "半径が 5cm の 円の 直径は 何cm？", display: "半径5cm ➔ 直径？", answer: 10 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "4. <ruby>角<rt>かく</rt></ruby>",
                                subUnits: [
                                    {
                                        title: "(1) 角（かく）って なに？",
                                        content: `<h4>2本の 辺（へん）が つくる かたち</h4>
                                        <div class="point-box">
                                            1つの 頂点（ちょうてん）から 出ている <b>2本の まっすぐな 線（辺）</b> が つくる かたちを <b>角</b> というよ。
                                        </div>
                                        <div class="data-demo" style="font-size: 40px;">
                                            ∠
                                        </div>`,
                                        quizzes: [
                                            { question: "角（かく）をつくるのは、1つの 頂点から 出る 何本の 辺かな？", display: "角", answer: 2 }
                                        ]
                                    },
                                    {
                                        title: "(2) 角の 大きさを くらべよう",
                                        content: `<h4>かさねて みよう</h4>
                                        <p>どっちの 角が おおきいかな？</p>
                                        <div class="point-box">
                                            紙（かみ）を 折（お）って 重（かさ）ねてみると、大きさが わかるよ！
                                        </div>
                                        <div class="data-demo" style="text-align: left;">
                                            <p><b>【二等辺三角形で ためそう】</b></p>
                                            <p>ながさの 同じ 辺を ぴったり 重ねるように 折ってみると…</p>
                                            <p>➔ 下の 2つの 角が <b>ぴったり 重なったね！</b></p>
                                        </div>
                                        <p>ぴったり 重なるということは、角の 大きさが <b>同じ</b> ということなんだね！</p>`,
                                        quizzes: [
                                            { question: "ぴったり 重なるとき、角の 大きさは どうなっている？", display: "重なる ➔ ？", answer: "同じ", options: ["同じ", "ちがう"] }
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
                                title: "1. 長さ",
                                subUnits: [
                                    {
                                        title: "(1) 1km（キロメートル）",
                                        content: `<h4>1kmって どのくらい？</h4>
                                        <div class="point-box" style="background:#eef7ff;">
                                            1000m を あつめると <b>1km（1キロメートル）</b> に なるよ！
                                        </div>
                                        <div class="data-demo">
                                            <p style="font-size: 24px;"><b>1000m ＝ 1km</b></p>
                                        </div>
                                        <p>学校から おうちまで など、ながい 道（みち）のりを あらわすときに つかうよ！</p>`,
                                        quizzes: [
                                            { question: "1000m は 何kmかな？", display: "1000m ＝ □km", answer: 1 },
                                            { question: "3000m は 何kmかな？", display: "3000m ＝ □km", answer: 3 },
                                            { question: "1km 500m は 何mかな？", display: "1km 500m ＝ □m", answer: 1500 }
                                        ]
                                    },
                                    {
                                        title: "(2) まきじゃくで はかろう",
                                        content: `<h4>ながい ものを はかる 道具</h4>
                                        <p>ものさし よりも、もっと ながいものを はかるには <b>「まきじゃく」</b> を つかうよ。</p>
                                        <div class="point-box">
                                            ・<b>まるまった</b> 形（かたち）をしているよ。<br>
                                            ・<b>カーブ</b> している ところも はかれるよ！
                                        </div>
                                        <p>体育館（たいいくかん）の ながさ や、木の まわり を はかってみよう！</p>`
                                    }
                                ]
                            },
                            {
                                title: "2. 重さ",
                                subUnits: [
                                    {
                                        title: "(1) g（グラム）と kg（キログラム）",
                                        content: `<h4>重さの たんい</h4>
                                        <div class="point-box" style="background:#fff2f0;">
                                            ・<b>g（グラム）</b>：1円玉（えんだま）1こ分 くらいの 重さ。<br>
                                            ・<b>kg（キログラム）</b>：1000g あつまった 重さ。
                                        </div>
                                        <div class="data-demo">
                                            <p style="font-size: 24px;"><b>1000g ＝ 1kg</b></p>
                                        </div>
                                        <p>キッチンスケール や 体重計（たいじゅうけい）で はかってみよう！</p>`,
                                        quizzes: [
                                            { question: "1000g は 何kgかな？", display: "1000g ＝ □kg", answer: 1 },
                                            { question: "2kg は 何gかな？", display: "2kg ＝ □g", answer: 2000 },
                                            { question: "1kg 200g は 何gかな？", display: "1kg 200g ＝ □g", answer: 1200 }
                                        ]
                                    },
                                    {
                                        title: "(2) t（トン）",
                                        content: `<h4>とっても おもい もの</h4>
                                        <div class="point-box" style="background:#f6ffed;">
                                            ゾウ や トラック など、すごく おもい ものには <b>t（トン）</b> を つかうよ！
                                        </div>
                                        <div class="data-demo">
                                            <p style="font-size: 24px;"><b>1000kg ＝ 1t</b></p>
                                        </div>`,
                                        quizzes: [
                                            { question: "1000kg は 何tかな？", display: "1000kg ＝ □t", answer: 1 },
                                            { question: "3t は 何kgかな？", display: "3t ＝ □kg", answer: 3000 }
                                        ]
                                    },
                                    {
                                        title: "(3) はかりの よみかた",
                                        content: `<h4>めもりを よもう</h4>
                                        <div class="point-box">
                                            はかりの めもりを よむときは、<b>1めもりが 何gか</b> を さきに たしかめよう！
                                        </div>
                                        <p>・1kg までのはかりで、めもりが 10こ あったら ➔ 1めもり 100g<br>
                                        ・1kg までのはかりで、めもりが 100こ あったら ➔ 1めもり 10g</p>`
                                    }
                                ]
                            },
                            {
                                title: "3. 単位の まとめ",
                                subUnits: [
                                    {
                                        title: "(1) いろいろな 単位のまとめ",
                                        content: `<h4>【1. 長さの単位】</h4>
                                        <div class="data-demo">
                                            <p>短いものから長いものへと単位が変わります。</p>
                                            <table class="data-table">
                                                <tr><th>単位</th><th>読み方</th><th>関係</th><th>使い道の例</th></tr>
                                                <tr><td>mm</td><td>ミリメートル</td><td>-</td><td>消しゴムの厚み、アリの長さ</td></tr>
                                                <tr><td>cm</td><td>センチメートル</td><td>1cm = <b>10mm</b></td><td>ノートの大きさ、身長</td></tr>
                                                <tr><td>m</td><td>メートル</td><td>1m = <b>100cm</b></td><td>教室の長さ、プールの長さ</td></tr>
                                                <tr><td>km</td><td>キロメートル</td><td>1km = <b>1000m</b></td><td>隣の町までの道のり、マラソン</td></tr>
                                            </table>
                                        </div>

                                        <h4>【2. 重さの単位】</h4>
                                        <div class="data-demo">
                                            <p>重さの単位は、名前に「キロ」がつくと1000倍になると覚えるのがコツです。</p>
                                            <table class="data-table">
                                                <tr><th>単位</th><th>読み方</th><th>関係</th><th>使い道の例</th></tr>
                                                <tr><td>g</td><td>グラム</td><td>-</td><td>1円玉（1g）、たまご1こ（約60g）</td></tr>
                                                <tr><td>kg</td><td>キログラム</td><td>1kg = <b>1000g</b></td><td>ランドセル、自分の体重</td></tr>
                                                <tr><td>t</td><td>トン</td><td>1t = <b>1000kg</b></td><td>ゾウの重さ、大きなトラック</td></tr>
                                            </table>
                                        </div>

                                        <h4>【3. 時間の単位】</h4>
                                        <div class="data-demo">
                                            <p>時間は100ではなく「60」で単位が変わるのが特徴です。</p>
                                            <table class="data-table">
                                                <tr><th>単位</th><th>読み方</th><th>関係</th></tr>
                                                <tr><td>秒</td><td>びょう</td><td>-</td></tr>
                                                <tr><td>分</td><td>ふん</td><td>1分 = <b>60秒</b></td></tr>
                                                <tr><td>時間</td><td>じかん</td><td>1時間 = <b>60分</b></td></tr>
                                                <tr><td>日</td><td>にち</td><td>1日 = <b>24時間</b></td></tr>
                                            </table>
                                        </div>

                                        <h4>【4. かさ（水など）の単位】</h4>
                                        <div class="data-demo">
                                            <p></p>
                                            <table class="data-table">
                                                <tr><th>単位</th><th>読み方</th><th>関係</th><th>使い道の例</th></tr>
                                                <tr><td>mL</td><td>ミリリットル</td><td>-</td><td>牛乳パック（小）、薬の量</td></tr>
                                                <tr><td>dL</td><td>デシリットル</td><td>1dL = <b>100mL</b></td><td>小さなコップ</td></tr>
                                                <tr><td>L</td><td>リットル</td><td>1L = <b>10dL</b> = <b>1000mL</b></td><td>牛乳パック（大）、バケツの水</td></tr>
                                            </table>
                                        </div>

                                        <div class="point-box">
                                            <b>【💡 覚えるポイント】</b><br>
                                            <ul>
                                                <li><b>「m（ミリ）」</b>がつくと：<b>1000分の1</b>（1000集まると元の単位になる）</li>
                                                <li><b>「k（キロ）」</b>がつくと：<b>1000倍</b>（元の単位が1000個分）</li>
                                                <li><b>「d（デシ）」</b>がつくと：<b>10分の1</b>（10集まると元の単位になる）</li>
                                            </ul>
                                            このように整理すると、バラバラな単位がすっきり繋がります！
                                        </div>`,
                                        quizzes: []
                                    },
                                    {
                                        title: "(2) ぴったりな 単位を えらぼう",
                                        content: `<h4>どの 単位（たんい）を つかう？</h4>
                                        <div class="point-box">
                                            はかる ものの 大きさに あわせて、単位を かえると わかりやすくなるよ！
                                        </div>
                                        <div class="data-demo">
                                            <p><b>【長さ】</b><br>
                                            ・ありの ながさ ➔ <b>mm</b><br>
                                            ・ノートの ながさ ➔ <b>cm</b><br>
                                            ・教室（きょうしつ）の ながさ ➔ <b>m</b><br>
                                            ・となりの 町までの みちのり ➔ <b>km</b></p>
                                            
                                            <p style="margin-top:20px;"><b>【重さ】</b><br>
                                            ・クリップ ➔ <b>g</b><br>
                                            ・ランドセル ➔ <b>kg</b><br>
                                            ・クジラ ➔ <b>t</b></p>
                                        </div>`,
                                        quizzes: [
                                            { question: "えんぴつの 長さを はかるときは？", display: "えんぴつの 長さ", answer: "cm", options: ["mm", "cm", "km"] },
                                            { question: "マラソンの きょりを はかるときは？", display: "マラソンの きょり", answer: "km", options: ["cm", "m", "km"] },
                                            { question: "たまご 1この 重さを はかるときは？", display: "たまご 1この 重さ", answer: "g", options: ["g", "kg", "t"] },
                                            { question: "ゾウの 重さを はかるときは？", display: "ゾウの 重さ", answer: "t", options: ["g", "kg", "t"] }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "4. 時間",
                                subUnits: [
                                    {
                                        title: "(1) 秒（びょう）",
                                        content: `<h4>みじかい 時間の たんい</h4>
                                        <div class="point-box" style="background:#f9f0ff;">
                                            1分（いっぷん） よりも みじかい 時間を <b>「秒（びょう）」</b> というよ。
                                        </div>
                                        <div class="data-demo">
                                            <p style="font-size: 24px;"><b>1分 ＝ 60秒</b></p>
                                        </div>
                                        <p>ストップウォッチを つかって、10秒（じゅうびょう） ぴったりで とめられるか やってみよう！</p>`,
                                        quizzes: [
                                            { question: "1分は 何秒かな？", display: "1分 ＝ □秒", answer: 60 },
                                            { question: "2分は 何秒かな？", display: "2分 ＝ □秒", answer: 120 },
                                            { question: "90秒は 何分何秒かな？", display: "90秒 ＝ □分□秒", answer: "1分30秒", options: ["1分20秒", "1分30秒", "1分40秒"] }
                                        ]
                                    },
                                    {
                                        title: "(2) 時刻（じこく）と 時間（じかん）",
                                        content: `<h4>「じこく」と 「じかん」の ちがい</h4>
                                        <div class="point-box">
                                            ・<b>時刻（じこく）</b>：「9時（じ）」のように、とけいの <b>数字（すうじ）</b> のこと。<br>
                                            ・<b>時間（じかん）</b>：「1時間（じかん）」のように、ある時刻から ある時刻までの <b>あいだ</b> のこと。
                                        </div>
                                        <div class="data-demo">
                                            <p>9時 ➔ (30分間) ➔ 9時30分</p>
                                            <p>この <b>「30分間」</b> が 時間（じかん）だよ！</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "10時から 10時20分までの 「時間」は 何分かな？", display: "10:00 ➔ 10:20", answer: 20 },
                                            { question: "2時30分の 10分まえの 「時刻」は 何時何分かな？", display: "2:30 の 10分まえ", answer: "2時20分", options: ["2時10分", "2時20分", "2時40分"] }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [
                            {
                                title: "1. データを整理しよう",
                                subUnits: [
                                    {
                                        title: "(1) 落ちや重なりがない整理",
                                        content: `<h4>正しく 数（かず）を かぞえよう</h4>
                                        <div class="point-box">
                                            データを 正しく 整理（せいり）するには、<br>
                                            <b>「数え忘れ（かぞえわすれ）」</b> や <b>「二重（にじゅう）に数える」</b> ことがないように 気をつけよう！
                                        </div>
                                        <div class="data-demo">
                                            <p><b>【例：好きな くだもの アンケート】</b></p>
                                            <p>🍎🍊🍌🍎🍊🍇🍎🍌🍊</p>
                                            <p>バラバラだと 数えにくいね。</p>
                                            <p style="margin-top:20px;"><b>数えるときは、線（せん）を 引（ひ）いて 消（け）していくと いいよ！</b></p>
                                            <p style="font-size: 24px;"><s>🍎</s>🍊🍌<s>🍎</s>🍊🍇<s>🍎</s>🍌🍊</p>
                                            <p>➔ りんご🍎：3こ、みかん🍊：3こ、バナナ🍌：2こ、ぶどう🍇：1こ</p>
                                            <p>こうすると、落ちや重なりがなく、正しく数えられるね！</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "次の動物たちを、正しく数えてみよう！犬は 何匹（なんびき）かな？", display: "🐶🐱🐶🐰🐶🐱🐶", answer: 4 },
                                            { question: "次の色を数えてみよう！赤は 何個（なんこ）かな？", display: "🔴🔵🔴🟢🔵🔴", answer: 3 }
                                        ]
                                    },
                                    {
                                        title: "(2) 2つの見方で整理（せいり）",
                                        content: `<h4>たてと よこで 比（くら）べよう</h4>
                                        <div class="point-box">
                                            データの整理には <b>「表（ひょう）」</b> が とっても べんりだよ！<br>
                                            たてと よこの 2つの 見方で、もっとくわしく 分（わ）かるようになるよ。
                                        </div>
                                        <div class="data-demo">
                                            <p><b>【例：好きな くだもの アンケート（男の子と女の子）】</b></p>
                                            <table class="data-table" style="width: 80%; margin: 20px auto;">
                                                <tr><th></th><th>りんご</th><th>みかん</th><th>バナナ</th><th>合計</th></tr>
                                                <tr><td>男の子</td><td>3</td><td>2</td><td>1</td><td>6</td></tr>
                                                <tr><td>女の子</td><td>2</td><td>3</td><td>2</td><td>7</td></tr>
                                                <tr><td>合計</td><td>5</td><td>5</td><td>3</td><td>13</td></tr>
                                            </table>
                                            <p>この表を見ると、男の子は りんごが 好きで、女の子は みかんが 好きなことが わかるね！</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "上の表を見て、好きなくだものが「バナナ」の女の子は 何人かな？", display: "", answer: 2 },
                                            { question: "上の表を見て、好きなくだものが「みかん」の男の子は 何人かな？", display: "", answer: 2 }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "2. 棒グラフで表そう",
                                subUnits: [
                                    {
                                        title: "(1) 棒グラフって何？",
                                        content: `<h4>数（かず）を 棒（ぼう）の 長さで 表す グラフ</h4>
                                        <div class="point-box">
                                            棒グラフは、データの 数を <b>棒の 長さ</b> で 表して、<br>
                                            何が どれくらいあるか、ひと目で わかるようにする グラフだよ。
                                        </div>
                                        <div class="data-demo">
                                            <img src="https://via.placeholder.com/300x200?text=Bar+Graph+Example" alt="棒グラフの例" style="max-width:100%;">
                                            <p>・たての線（目盛り）➔ <b>数（かず）の 大きさ</b> を 表すよ。<br>
                                            ・よこの線 ➔ <b>しゅるい</b> や <b>項目（こうもく）</b> を 表すよ。</p>
                                        </div>`,
                                        quizzes: [
                                            { question: "棒グラフで、数の大きさを表すのは 何の長さかな？", display: "棒グラフ", answer: "棒", options: ["棒", "線", "数字"] },
                                            { question: "棒グラフのたての線（目盛り）が表すものは 何かな？", display: "棒グラフのたての線", answer: "数", options: ["種類", "時間", "数"] }
                                        ]
                                    },
                                    {
                                        title: "(2) 目盛り（めもり）の読み方",
                                        content: `<h4>目盛りの 大きさを たしかめよう</h4>
                                        <div class="point-box">
                                            棒グラフの 目盛りを 読むときは、<b>1つの 目盛りが いくつ分か</b> を 最初に 確かめることが 大事だよ！
                                        </div>
                                        <div class="data-demo">
                                            <img src="https://via.placeholder.com/300x200?text=Bar+Graph+Scale+Example" alt="棒グラフの目盛りの例" style="max-width:100%;">
                                            <p>・0から 10までで、線が 5本なら ➔ 1目盛り 2<br>
                                            ・0から 10までで、線が 10本なら ➔ 1目盛り 1</p>
                                            <p>目盛りの間（あいだ）の 数を、均等（きんとう）に分けているんだね。</p>
                                        </div>`,
                                        quizzes: [
                                            { 
                                                question: "0から 10までの 目盛りで、線が 5本（0, 2, 4, 6, 8, 10）あるとき、1目盛りは いくつ分かな？", 
                                                display: "0-10, 線が5本", 
                                                answer: 2 
                                            },
                                            { 
                                                question: "0から 20までの 目盛りで、線が 4本（0, 5, 10, 15, 20）あるとき、1目盛りは いくつ分かな？", 
                                                display: "0-20, 線が4本", 
                                                answer: 5 
                                            },
                                            { 
                                                question: "下の棒グラフを見て、リンゴの数はいくつかな？", 
                                                display: `<div style="display:flex; height:150px; align-items:flex-end; border-left:2px solid black; border-bottom:2px solid black; margin:20px; padding-left:5px;">
                                                                <div style="width:30px; background-color:red; height:60%; margin-right:10px;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 2px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 15px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 30px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 45px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 60px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 75px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 90px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 105px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 120px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 135px); width:5px; height:2px; background:black;"></div>
                                                                <span style="position:absolute; left:-25px; top:135px;">0</span>
                                                                <span style="position:absolute; left:-25px; top:120px;">1</span>
                                                                <span style="position:absolute; left:-25px; top:105px;">2</span>
                                                                <span style="position:absolute; left:-25px; top:90px;">3</span>
                                                                <span style="position:absolute; left:-25px; top:75px;">4</span>
                                                                <span style="position:absolute; left:-25px; top:60px;">5</span>
                                                                <span style="position:absolute; left:-25px; top:45px;">6</span>
                                                                <span style="position:absolute; left:-25px; top:30px;">7</span>
                                                                <span style="position:absolute; left:-25px; top:15px;">8</span>
                                                                <span style="position:absolute; left:-25px; top:0px;">9</span>
                                                                <span style="position:absolute; left:50px; bottom:-20px;">リンゴ</span>
                                                            </div>`,
                                                answer: 6
                                            },
                                            { 
                                                question: "下の棒グラフを見て、ミカンの数はいくつかな？", 
                                                display: `<div style="display:flex; height:150px; align-items:flex-end; border-left:2px solid black; border-bottom:2px solid black; margin:20px; padding-left:5px;">
                                                                <div style="width:30px; background-color:orange; height:40%; margin-right:10px;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 2px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 15px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 30px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 45px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 60px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 75px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 90px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 105px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 120px); width:5px; height:2px; background:black;"></div>
                                                                <div style="position:absolute; left:0; top:calc(150px - 135px); width:5px; height:2px; background:black;"></div>
                                                                <span style="position:absolute; left:-25px; top:135px;">0</span>
                                                                <span style="position:absolute; left:-25px; top:120px;">1</span>
                                                                <span style="position:absolute; left:-25px; top:105px;">2</span>
                                                                <span style="position:absolute; left:-25px; top:90px;">3</span>
                                                                <span style="position:absolute; left:-25px; top:75px;">4</span>
                                                                <span style="position:absolute; left:-25px; top:60px;">5</span>
                                                                <span style="position:absolute; left:-25px; top:45px;">6</span>
                                                                <span style="position:absolute; left:-25px; top:30px;">7</span>
                                                                <span style="position:absolute; left:-25px; top:15px;">8</span>
                                                                <span style="position:absolute; left:-25px; top:0px;">9</span>
                                                                <span style="position:absolute; left:50px; bottom:-20px;">ミカン</span>
                                                            </div>`,
                                                answer: 4
                                            }
                                        ]
                                    },
                                    {
                                        title: "(3) 棒グラフをかこう",
                                        content: `<h4>データを見やすく！</h4>
                                        <div class="point-box">
                                            棒グラフをかくときは、<b>「目盛り（めもり）」</b> と <b>「棒（ぼう）の長さ」</b> に 気をつけよう。<br>
                                            タイトルや 項目名（こうもくめい）も 忘れずに 書こうね！
                                        </div>
                                        <div class="data-demo">
                                            <p><b>【棒グラフをかく手順（てじゅん）】</b></p>
                                            <ol style="text-align: left; display: inline-block;">
                                                <li>いちばん大きい 数が入る 目盛りを 決める。</li>
                                                <li>たてと よこの 軸（じく）を かく。</li>
                                                <li>項目名と 棒の 長さを かく。</li>
                                                <li>グラフの 名前（タイトル）を つける。</li>
                                            </ol>
                                            <img src="https://via.placeholder.com/300x200?text=Draw+Bar+Graph+Example" alt="棒グラフのかき方の例" style="max-width:100%;">
                                        </div>`,
                                        quizzes: [
                                            { question: "棒グラフをかくときに、いちばん最初に決めることは何かな？", display: "棒グラフ作成", answer: "目盛り", options: ["棒の太さ", "棒の色", "目盛り"] }
                                        ]
                                    }
                                ]
                            }
                        ] }
                ]
            },
            e4: {
                name: "小4",
                categories: [
                    { name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>", units: [
                        {
                            title: "1. 大きな数",
                            subUnits: [
                                {
                                    title: "(1) 兆（ちょう）までの大きな数",
                                    content: `<h4>億（おく）の つぎは 兆！</h4>
                                    <div class="point-box">
                                        一、十、百、千、万（まん）、億（おく）の つぎは、<b>兆（ちょう）</b> だよ！<br>
                                        一、十、百、千の <b>4つ</b> が ひとまとまりに なっていることに 気づいたかな？
                                    </div>
                                    <div class="data-demo">
                                        <table class="data-table" style="width: 500px; margin: 0 auto; font-size: 12px;">
                                            <tr><th style="background:#b5f5ec">兆</th><th style="background:#ffccc7">億</th><th style="background:#efdbff">万</th><th style="background:#d9f7be">千</th><th style="background:#fff7e6">百</th><th style="background:#ffe58f">十</th><th style="background:#bae7ff">一</th></tr>
                                            <tr style="font-size: 18px; font-weight: bold; color: #e74c3c;"><td>1</td><td>0000</td><td>0000</td><td>0000</td><td>0000</td><td>0000</td><td>0000</td></tr>
                                        </table>
                                        <p style="margin-top:10px;"><small>読み方：一兆（いっちょう）</small></p>

                                        <p style="margin-top:20px;"><b>【大きな数を 読むときのコツ】</b></p>
                                        <p>右から <b>4つずつ</b>、点で 区切（くぎ）って 考えるのが コツだよ！</p>
                                        <p style="font-size: 24px;"><b>1,2345,6789,0123</b><br>
                                        <small>↑ 兆の位 ↑ 億の位 ↑ 万の位 ↑ 一の位</small></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "1000億の 10倍（ばい）は いくつかな？", display: "1000億 ✕ 10", answer: "1兆" },
                                        { question: "「5兆3000億」と 書いてあるのは どっち？", display: "5兆3000億", answer: "5,3000,0000,0000", options: ["5,3000,0000,0000", "5,0000,3000,0000"] }
                                    ]
                                },
                                {
                                    title: "(2) 3桁（けた）ごとに 区切る",
                                    content: `<h4>世界（せかい）の 大きな数</h4>
                                    <div class="point-box">
                                        日本（にほん）では <b>4つずつ</b> 区切るけど、世界では <b>3つずつ</b> 区切るのが 多いよ！<br>
                                        英語（えいご）だと 「thousand（せん）」「million（ひゃくまん）」「billion（じゅうおく）」のように 読み方が 変わっていくよ。
                                    </div>
                                    <div class="data-demo">
                                        <p style="font-size: 24px;"><b>1,000,000,000</b><br>
                                        <small>↑ billion ↑ million ↑ thousand ↑ one</small></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "日本で 4桁ずつ 区切るのは？", display: "区切り方", answer: "日本", options: ["日本", "世界"] },
                                        { question: "「million」は 日本の 数で いくつかな？", display: "million", answer: "百万" }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 概数（がいすう）と見積もり",
                            subUnits: [
                                {
                                    title: "(1) 四捨五入（ししゃごにゅう）",
                                    content: `<h4>およそ このくらい の数</h4>
                                    <div class="point-box">
                                        細かい数（かず）を、わかりやすく 簡単に した数を <b>概数（がいすう）</b> というよ。<br>
                                        概数を 出すときに よく使うのが <b>四捨五入（ししゃごにゅう）</b> だよ！
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【四捨五入の ルール】</b></p>
                                        <p>・残（のこ）したい 位（くらい）の <b>1つ 右</b> の 数字（すうじ）を見る。<br>
                                        ・それが <b>0, 1, 2, 3, 4</b> なら <b>捨（す）てる</b> （切り捨てる）。<br>
                                        ・それが <b>5, 6, 7, 8, 9</b> なら <b>繰（く）り上げる</b> （切り上げる）。</p>
                                        <p><b>【例：432を 十の位まで 四捨五入】</b><br>
                                        ➔ 十の位の 1つ右は <b>2</b>。<br>
                                        ➔ 2は 0〜4なので <b>捨てる</b>。<br>
                                        ➔ 答えは <b>430</b>。</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "87を 十の位まで 四捨五入すると？", display: "87 → 十の位まで", answer: 90 },
                                        { question: "123を 百の位まで 四捨五入すると？", display: "123 → 百の位まで", answer: 100 },
                                        { question: "75を 十の位まで 四捨五入すると？", display: "75 → 十の位まで", answer: 80 }
                                    ]
                                },
                                {
                                    title: "(2) 以上（いじょう）・以下（いか）・未満（みまん）",
                                    content: `<h4>数の範囲（はんい）を 表す言葉</h4>
                                    <div class="point-box">
                                        ・<b>以上</b>：その数（かず）と、それより 大きい数（○○も含まれる）<br>
                                        ・<b>以下</b>：その数と、それより 小さい数（○○も含まれる）<br>
                                        ・<b>未満</b>：その数より 小さい数（○○は含まれない）
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【例：5以上 10未満】</b><br>
                                        ➔ 5, 6, 7, 8, 9</p>
                                        <p>「その数」が 含まれるか 含まれないかで、とても 大事な 違いがあるよ！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "3以上 の数を選んでね", display: "1, 2, 3, 4, 5", answer: "3, 4, 5", options: ["1, 2", "3, 4, 5", "4, 5"] },
                                        { question: "7以下 の数を選んでね", display: "6, 7, 8, 9, 10", answer: "6, 7", options: ["8, 9, 10", "6, 7", "7, 8"] },
                                        { question: "4未満 の数を選んでね", display: "1, 2, 3, 4, 5", answer: "1, 2, 3", options: ["1, 2, 3", "1, 2, 3, 4", "4, 5"] }
                                    ]
                                },
                                {
                                    title: "(3) 見積もり計算",
                                    content: `<h4>おおよそで 計算しよう</h4>
                                    <div class="point-box">
                                        買い物のときなど、細かい計算を しなくても、<b>おおよその数（概数）</b> で 計算すると べんりだよ！
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【例：28円 と 42円 の合計を見積もる】</b><br>
                                        ➔ 28円を <b>30円</b> に、42円を <b>40円</b> に 四捨五入する。<br>
                                        ➔ 30 ＋ 40 ＝ <b>70円</b></p>
                                        <p>正確（せいかく）な答えは 70円だけど、見積もりでも 同じだったね！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "32円と 59円の 合計を、十の位まで 四捨五入して 見積もってみよう。", display: "32 + 59", answer: 90 },
                                        { question: "180円と 210円の 合計を、百の位まで 四捨五入して 見積もってみよう。", display: "180 + 210", answer: 400 }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. わり算",
                            subUnits: [
                                {
                                    title: "(1) （2桁）÷（1桁）のわり算",
                                    content: `<h4>九九を 使う わり算</h4>
                                    <div class="point-box">
                                        わる数（右の数）の 九九を おもい出（だ）すと、答えが 見つかるよ！
                                    </div>
                                    <div class="data-demo">
                                        <p><b>12 ÷ 3 ＝ □</b></p>
                                        <p>3のだん：3 ✕ 1＝3, 3 ✕ 2＝6, 3 ✕ 3＝9, <b>3 ✕ 4＝12</b>！</p>
                                        <p>答えは <b>4</b> だね！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "18 ÷ 2 は いくつかな？", display: "18 ÷ 2", answer: 9 },
                                        { question: "24 ÷ 4 は いくつかな？", display: "24 ÷ 4", answer: 6 }
                                    ]
                                },
                                {
                                    title: "(2) （3桁）÷（1桁）のわり算",
                                    content: `<h4>筆算（ひっさん）で 計算しよう</h4>
                                    <div class="point-box">
                                        大きな数の わり算は <b>筆算（ひっさん）</b> で 計算すると、まちがえにくいよ。<br>
                                        わられる数（左の数）の <b>大きい位</b> から 順番（じゅんばん）に わるよ！
                                    </div>
                                    <div class="data-demo">
                                        <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
    1 2 3
  _______
3 ) 3 6 9
    3
    ---
      6
      6
      ---
        9
        9
        ---
          0
                                        </pre>
                                    </div>`,
                                    quizzes: [
                                        { question: "484 ÷ 4 は いくつかな？", display: "484 ÷ 4", answer: 121 },
                                        { question: "525 ÷ 5 は いくつかな？", display: "525 ÷ 5", answer: 105 }
                                    ]
                                },
                                {
                                    title: "(3) （2桁）÷（2桁）のわり算",
                                    content: `<h4>商（しょう）が 1に なるときの わり算</h4>
                                    <div class="point-box">
                                        わられる数と わる数が 同じくらいの 大きさのとき、商は <b>1</b> になることが 多いよ。
                                    </div>
                                    <div class="data-demo">
                                        <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
    1
  _______
21) 21
    21
    ---
     0
                                        </pre>
                                    </div>`,
                                    quizzes: [
                                        { question: "34 ÷ 34 は いくつかな？", display: "34 ÷ 34", answer: 1 },
                                        { question: "50 ÷ 25 は いくつかな？", display: "50 ÷ 25", answer: 2 }
                                    ]
                                },
                                {
                                    title: "(4) （3桁）÷（2桁）のわり算",
                                    content: `<h4>商（しょう）を 見つけるのが 大事！</h4>
                                    <div class="point-box">
                                        わる数が 2桁に なっても、筆算の やり方は 基本（きほん）は 同じ。<br>
                                        商を 見つけるために、わる数を <b>およそ</b> の数（がいすう）で かんがえると いいよ！
                                    </div>
                                    <div class="data-demo">
                                        <p><b>150 ÷ 25 ＝ □</b></p>
                                        <p>➔ 25を <b>「30」</b> だと かんがえると、<br>
                                        150の中に 30は <b>5回</b> はいってるかな？ ➔ 25 ✕ 5 ＝ 125！ まだ入る！<br>
                                        <b>6回</b> なら？ ➔ 25 ✕ 6 ＝ 150！ ぴったり！</p>
                                        <p>答えは <b>6</b> だね！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "120 ÷ 20 は いくつかな？", display: "120 ÷ 20", answer: 6 },
                                        { question: "240 ÷ 30 は いくつかな？", display: "240 ÷ 30", answer: 8 }
                                    ]
                                },
                                {
                                    title: "(5) （わられる数）＝（わる数）✕（商）＋（あまり）",
                                    content: `<h4>わり算の 答えを たしかめよう</h4>
                                    <div class="point-box">
                                        わり算の 計算が あっているか、<br>
                                        <b>かけ算と たし算</b> を つかって たしかめることが できるよ！
                                    </div>
                                    <div class="data-demo">
                                        <p><b>10 ÷ 3 ＝ 3 あまり 1</b></p>
                                        <p>たしかめの式：<b>3（わる数） ✕ 3（商） ＋ 1（あまり） ＝ 10（わられる数）</b></p>
                                        <p>この式が 成立（せいりつ）すれば、わり算は 正解（せいかい）だよ！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "13 ÷ 4 ＝ 3 あまり 1。たしかめの式は？", display: "13 ÷ 4 ＝ 3 ... 1", answer: "4✕3+1=13", options: ["4✕3+1=13", "3✕4+1=13", "13-4✕3=1"] }
                                    ]
                                },
                                {
                                    title: "(6) わり算の性質（せいしつ）",
                                    content: `<h4>わり算の べんりな きまり</h4>
                                    <div class="point-box">
                                        ・わられる数と わる数に <b>同じ数を かけても</b>、商は 同じ。<br>
                                        ・わられる数と わる数から <b>同じ数を わっても</b>、商は 同じ。
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【例：12 ÷ 4 ＝ 3】</b></p>
                                        <p>・わられる数と わる数に <b>2をかける</b> ➔ （12✕2）÷（4✕2）＝ 24 ÷ 8 ＝ 3！<br>
                                        ・わられる数と わる数から <b>2をわる</b> ➔ （12÷2）÷（4÷2）＝ 6 ÷ 2 ＝ 3！</p>
                                        <p>どちらも 商は <b>3</b> で 同じだったね！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "20 ÷ 5 ＝ 4。わられる数と わる数を 3倍（ばい）すると？", display: "20 ÷ 5", answer: 4, options: [4, 12, 60] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. 小数（しょうすう）",
                            subUnits: [
                                {
                                    title: "(1) 1/10, 1/100, 1/1000",
                                    content: `<h4>もっと 小さな数</h4>
                                    <div class="point-box">
                                        1を 10こに 分けた 1つ分 ➔ <b>0.1</b>（れい てん いち）<br>
                                        1を 100こに 分けた 1つ分 ➔ <b>0.01</b>（れい てん れい いち）<br>
                                        1を 1000こに 分けた 1つ分 ➔ <b>0.001</b>（れい てん れい れい いち）
                                    </div>
                                    <div class="data-demo">
                                        <table class="data-table" style="width: 300px; margin: 0 auto;">
                                            <tr><th style="background:#bae7ff">1の位</th><th style="background:#ffe58f">1/10の位</th><th style="background:#fff7e6">1/100の位</th><th style="background:#d9f7be">1/1000の位</th></tr>
                                            <tr><td>0</td><td>.</td><td>1</td><td></td><td></td></tr>
                                            <tr><td>0</td><td>.</td><td>0</td><td>1</td><td></td></tr>
                                            <tr><td>0</td><td>.</td><td>0</td><td>0</td><td>1</td></tr>
                                        </table>
                                    </div>`,
                                    quizzes: [
                                        { question: "0.1が 10こ あつまると いくつかな？", display: "0.1 ✕ 10", answer: 1 },
                                        { question: "0.01が 10こ あつまると いくつかな？", display: "0.01 ✕ 10", answer: 0.1 },
                                        { question: "0.001が 1000こ あつまると いくつかな？", display: "0.001 ✕ 1000", answer: 1 }
                                    ]
                                },
                                {
                                    title: "(2) 小数のたし算",
                                    content: `<h4>小数点を ぴったりそろえよう</h4>
                                    <div class="point-box">
                                        小数点の 位置（いち）を ぴったりそろえて、位（くらい）を まちがえないように 足し算しよう！
                                    </div>
                                    <div class="data-demo">
                                        <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  1 . 2
+ 3 . 4
-------
  4 . 6
                                        </pre>
                                    </div>`,
                                    quizzes: [
                                        { question: "0.5 ＋ 0.3 は いくつかな？", display: "0.5 ＋ 0.3", answer: 0.8 },
                                        { question: "1.2 ＋ 2.5 は いくつかな？", display: "1.2 ＋ 2.5", answer: 3.7 }
                                    ]
                                },
                                {
                                    title: "(3) 小数のひき算",
                                    content: `<h4>小数点を ぴったりそろえよう</h4>
                                    <div class="point-box">
                                        引き算も、小数点の 位置（いち）を ぴったりそろえて 計算しよう！
                                    </div>
                                    <div class="data-demo">
                                        <pre style="font-size: 24px; line-height: 1.2; letter-spacing: 5px;">
  4 . 6
- 1 . 2
-------
  3 . 4
                                        </pre>
                                    </div>`,
                                    quizzes: [
                                        { question: "0.8 － 0.3 は いくつかな？", display: "0.8 － 0.3", answer: 0.5 },
                                        { question: "3.7 － 1.5 は いくつかな？", display: "3.7 － 1.5", answer: 2.2 }
                                    ]
                                },
                                {
                                    title: "(4) 小数のかけ算（整数をかける）",
                                    content: `<h4>小数を 整数倍（せいすうばい）する</h4>
                                    <div class="point-box">
                                        小数に 整数をかける 計算は、整数のかけ算と 同じように 計算して、<br>
                                        あとで 小数点を 打（う）つ位置を 気をつけよう！
                                    </div>
                                    <div class="data-demo">
                                        <p><b>0.3 ✕ 2 ＝ □</b></p>
                                        <p>➔ 3 ✕ 2 ＝ 6 だから、小数点は 1つ左に ずらして <b>0.6</b>！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "0.4 ✕ 3 は いくつかな？", display: "0.4 ✕ 3", answer: 1.2 },
                                        { question: "1.5 ✕ 2 は いくつかな？", display: "1.5 ✕ 2", answer: 3.0 }
                                    ]
                                },
                                {
                                    title: "(5) 小数のわり算（整数でわる）",
                                    content: `<h4>小数を 整数で分ける</h4>
                                    <div class="point-box">
                                        小数を 整数でわる 計算も、整数でのわり算と 同じように 計算して、<br>
                                        商（しょう）の 小数点は、わられる数（左の数）の 小数点に そろえて 打（う）とう！
                                    </div>
                                    <div class="data-demo">
                                        <p><b>0.8 ÷ 2 ＝ □</b></p>
                                        <p>➔ 8 ÷ 2 ＝ 4 だから、小数点は 1つ左に ずらして <b>0.4</b>！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "0.9 ÷ 3 は いくつかな？", display: "0.9 ÷ 3", answer: 0.3 },
                                        { question: "3.6 ÷ 4 は いくつかな？", display: "3.6 ÷ 4", answer: 0.9 }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "5. 分数（ぶんすう）",
                            subUnits: [
                                {
                                    title: "(1) 同（どう）分母（ぶんぼ）のたし算",
                                    content: `<h4>分母が 同じなら、分子を たすだけ！</h4>
                                    <div class="point-box">
                                        分母（下の数）が 同じ分数の たし算は、分子（上の数）どうしを 足すだけで いいよ！<br>
                                        分母は そのまま 変（か）わらないよ。
                                    </div>
                                    <div class="data-demo">
                                        <p style="font-size: 32px;"><b>1/3 ＋ 1/3 ＝ 2/3</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "1/5 ＋ 2/5 は いくつかな？", display: "1/5 ＋ 2/5", answer: "3/5" },
                                        { question: "2/7 ＋ 3/7 は いくつかな？", display: "2/7 ＋ 3/7", answer: "5/7" }
                                    ]
                                },
                                {
                                    title: "(2) 同（どう）分母（ぶんぼ）のひき算",
                                    content: `<h4>分母が 同じなら、分子を ひくだけ！</h4>
                                    <div class="point-box">
                                        分母（下の数）が 同じ分数の ひき算も、分子（上の数）どうしを 引くだけで いいよ！<br>
                                        分母は そのまま 変（か）わらないよ。
                                    </div>
                                    <div class="data-demo">
                                        <p style="font-size: 32px;"><b>2/3 － 1/3 ＝ 1/3</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "3/5 － 1/5 は いくつかな？", display: "3/5 － 1/5", answer: "2/5" },
                                        { question: "5/7 － 2/7 は いくつかな？", display: "5/7 － 2/7", answer: "3/7" }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "6. 四則演算（しそくえんざん）のルール",
                            subUnits: [
                                {
                                    title: "(1) 計算（けいさん）の順番（じゅんばん）",
                                    content: `<h4>カッコのなか、かけ算・わり算が 先！</h4>
                                    <div class="point-box">
                                        計算は、まちがえないように 正しい 順番（じゅんばん）で しよう！
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【計算の 順番】</b></p>
                                        <ol style="text-align: left; display: inline-block;">
                                            <li><b>カッコ（　）</b>の中</li>
                                            <li><b>かけ算（✕）</b>と <b>わり算（÷）</b></li>
                                            <li><b>たし算（＋）</b>と <b>ひき算（－）</b></li>
                                        </ol>
                                        <p style="margin-top:10px;">同じ 順番の 計算は、左（ひだり）から 順番に するよ！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "「3 ＋ 4 ✕ 2」の 計算の答えは？", display: "3 ＋ 4 ✕ 2", answer: 11 },
                                        { question: "「(5 ＋ 3) ÷ 2」の 計算の答えは？", display: "(5 ＋ 3) ÷ 2", answer: 4 }
                                    ]
                                },
                                {
                                    title: "(2) 四則演算の性質",
                                    content: `<h4>計算を らくにする きまり</h4>
                                    <div class="point-box">
                                        たし算と かけ算には、べんりな きまりが あるよ！
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【たし算の きまり】</b></p>
                                        <p>・<b>交換（こうかん）の法則（ほうそく）</b>：順番を 入れかえても 同じ（A＋B＝B＋A）<br>
                                        ・<b>結合（けつごう）の法則</b>：どこから 先に 計算しても 同じ（(A＋B)＋C＝A＋(B＋C)）</p>

                                        <p style="margin-top:20px;"><b>【かけ算の きまり】</b></p>
                                        <p>・<b>交換の法則</b>：順番を 入れかえても 同じ（A✕B＝B✕A）<br>
                                        ・<b>結合の法則</b>：どこから 先に 計算しても 同じ（(A✕B)✕C＝A✕(B✕C)）<br>
                                        ・<b>分配（ぶんぱい）の法則</b>：カッコを 外（はず）して 計算しても 同じ（(A＋B)✕C＝A✕C＋B✕C）</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "「5 ＋ 3 ＝ 3 ＋ 5」のような きまりを 何という？", display: "5 ＋ 3 ＝ 3 ＋ 5", answer: "交換の法則", options: ["交換の法則", "結合の法則", "分配の法則"] },
                                        { question: "「(2 ✕ 4) ✕ 5 ＝ 2 ✕ (4 ✕ 5)」のような きまりを 何という？", display: "(2✕4)✕5＝2✕(4✕5)", answer: "結合の法則", options: ["交換の法則", "結合の法則", "分配の法則"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "7. そろばん",
                            subUnits: [
                                {
                                    title: "(1) 大きな数（かず）の表し方",
                                    content: `<h4>そろばんで 大きな数を 理解（りかい）しよう</h4>
                                    <div class="point-box">
                                        そろばんは、<b>位（くらい）</b> のしくみを 理解するのに とても べんりな 道具だよ！
                                    </div>
                                    <div class="data-demo">
                                        <p>そろばんは、珠（たま）を 置く位置（いち）で 位が決まるから、<br>
                                        万（まん）、億（おく）、兆（ちょう）などの 大きな数も、正しく 表すことが できるよ。</p>
                                        <p style="margin-top:10px;">どこかを 「一の位」と 決めれば、左へ いくほど 大きな数に なるんだね。</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "そろばんで、万の位の珠を 置くのは どの位置かな？", display: "そろばんの位", answer: "一の位の左から4番目", options: ["一の位の左から3番目", "一の位の左から4番目", "一の位の右から1番目"] }
                                    ]
                                },
                                {
                                    title: "(2) 小数（しょうすう）の表し方",
                                    content: `<h4>そろばんで 小数を 理解（りかい）しよう</h4>
                                    <div class="point-box">
                                        そろばんは、小数（しょうすう）の 計算にも つかうことができるよ！
                                    </div>
                                    <div class="data-demo">
                                        <p>そろばんでは、どこかを 「一の位」と 決めれば、<br>
                                        その右が 0.1、さらに右が 0.01 といった 小数も 表せるんだ。</p>
                                        <p style="margin-top:10px;">小数点を 意識（いしき）して、正確（せいかく）な 計算を しよう！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "そろばんで 0.1を表すのは、一の位の どの位置かな？", display: "そろばんの小数", answer: "一の位のすぐ右", options: ["一の位のすぐ右", "一の位のすぐ左", "十の位のすぐ右"] }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [
                        {
                            title: "1. 垂直（すいちょく）と 平行（へいこう）",
                            subUnits: [
                                {
                                    title: "(1) 垂直（すいちょく）",
                                    content: `<h4>まじわりかたを 見てみよう</h4>
                                    <div class="point-box">
                                        2つの 直線が <b>直角（90°）</b> に まじわるとき、この 2つの直線は <b>垂直</b> であるというよ。
                                    </div>
                                    <div class="data-demo">
                                        <div style="display:flex; justify-content:center; align-items:center; height:100px;">
                                            <div style="width:2px; height:80px; background:#333; position:relative;">
                                                <div style="width:80px; height:2px; background:#333; position:absolute; top:40px; left:-40px;"></div>
                                                <div style="width:10px; height:10px; border-top:2px solid red; border-right:2px solid red; position:absolute; top:40px; left:0;"></div>
                                            </div>
                                        </div>
                                        <p>三角定規（さんかくじょうぎ）の 直角の部分を あててみると、たしかめることができるね！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "2つの直線が 垂直にまじわるとき、その角度は 何度？", display: "垂直の角度", answer: 90 }
                                    ]
                                },
                                                                {
                                                                    title: "(2) 平行（へいこう）",
                                                                    content: `<h4>どこまでいっても 交わらない</h4>
                                                                    <div class="point-box">
                                                                        1つの 直線に 垂直な 2つの直線は、<b>平行</b> であるというよ。<br>
                                                                        平行な 直線は、どこまで のばしても 交（まじ）わらないんだ。
                                                                    </div>
                                                                    <div class="data-demo">
                                                                        <div style="display:flex; flex-direction:column; gap:20px; align-items:center; padding:20px;">
                                                                            <div style="width:150px; height:3px; background:#3498db;"></div>
                                                                            <div style="width:150px; height:3px; background:#3498db;"></div>
                                                                        </div>
                                                                        <p>平行な 2つの直線の はば（きょり）は、どこでも <b>同じ</b> になっているよ。</p>
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "平行な 2本の線の 角度（はば）の関係は？", display: "平行線の特徴", answer: "どこでも同じ", options: ["だんだん広がる", "どこでも同じ", "いつか交わる"] },
                                                                        { question: "1本の直線に垂直な2本の直線は、お互いにどうなっていますか？", display: "垂直と平行", answer: "平行", options: ["垂直", "平行", "交わる"] },
                                                                        { question: "平行な線同士の間隔（はば）は途中で変わりますか？", display: "平行線のきょり", answer: "変わらない", options: ["広がる", "狭くなる", "変わらない"] }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            title: "2. 台形、平行四辺形、ひし形の性質・敷き詰め",
                                                            subUnits: [
                                                                {
                                                                    title: "(1) 台形（だいけい）",
                                                                    content: `<h4>一組（ひとくみ）だけ 平行</h4>
                                                                    <div class="point-box">
                                                                        向（む）かいあった 一組の 辺が <b>平行</b> な 四角形を <b>台形</b> というよ。
                                                                    </div>
                                                                    <div class="data-demo">
                                                                        <div style="width:100px; height:50px; background:#ffe58f; clip-path:polygon(20% 0, 80% 0, 100% 100%, 0 100%); margin:0 auto;"></div>
                                                                        <p>上と下の 辺が まっすぐ 平行（へいこう）だね！</p>
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "台形は、何組の辺が 平行かな？", display: "台形の平行な辺", answer: 1 },
                                                                        { question: "一組の向かい合う辺が平行な四角形は何？", display: "四角形の名前", answer: "台形", options: ["台形", "平行四辺形", "ひし形"] },
                                                                        { question: "台形の「平行な一組の辺」を何と呼ぶ？（上と下の場合）", display: "上底と下底", answer: "上底と下底", options: ["上底と下底", "対角線", "斜辺"] }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "(2) 平行四辺形（へいこうしへんけい）",
                                                                    content: `<h4>二組（ふたくみ）とも 平行</h4>
                                                                    <div class="point-box">
                                                                        向かいあった 二組の 辺が どちらも <b>平行</b> な 四角形を <b>平行四辺形</b> というよ。
                                                                    </div>
                                                                    <div class="data-demo">
                                                                        <div style="width:100px; height:50px; background:#bae7ff; clip-path:polygon(20% 0, 100% 0, 80% 100%, 0 100%); margin:0 auto;"></div>
                                                                        <p><b>【平行四辺形の 特徴（とくちょう）】</b></p>
                                                                        <p>・向かいあった 辺の <b>長さ</b> が 同じ。<br>
                                                                        ・向かいあった 角の <b>大きさ</b> が 同じ。</p>
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "平行四辺形は、何組の辺が 平行かな？", display: "平行四辺形の平行な辺", answer: 2 },
                                                                        { question: "平行四辺形の向かい合う角の大きさはどうなっていますか？", display: "角の大きさ", answer: "同じ", options: ["同じ", "ちがう", "合わせて90度"] },
                                                                        { question: "向かい合う2組の辺がどちらも平行な四角形は？", display: "図形の種類", answer: "平行四辺形", options: ["台形", "平行四辺形", "正方形"] }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "(3) ひし形（ひしがた）",
                                                                    content: `<h4>全部（ぜんぶ）の 辺の長さが 同じ</h4>
                                                                    <div class="point-box">
                                                                        4つの 辺の <b>長さが すべて同じ</b> 四角形を <b>ひし形</b> というよ。
                                                                    </div>
                                                                    <div class="data-demo">
                                                                        <div style="width:60px; height:60px; background:#ffd6e7; clip-path:polygon(50% 0, 100% 50%, 50% 100%, 0 50%); margin:0 auto;"></div>
                                                                        <p>ひし形も 向かいあった 辺が 平行だから、平行四辺形の なかまだよ！</p>
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "4つの辺の長さが すべて同じ四角形は？", display: "辺の長さが全部同じ", answer: "ひし形", options: ["台形", "平行四辺形", "ひし形"] },
                                                                        { question: "ひし形の向かい合う辺の関係はどうなっていますか？", display: "辺の関係", answer: "平行", options: ["平行", "垂直", "交わらない"] },
                                                                        { question: "全ての辺が5cmの四角形（角は直角ではない）は何？", display: "図形の名前", answer: "ひし形", options: ["長方形", "台形", "ひし形"] }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "(4) 対角線（たいかくせん）",
                                                                    content: `<h4>図形を つなぐ線</h4>
                                                                    <div class="point-box">
                                                                        向かいあった 頂点（ちょうてん）を 結（むす）んだ 直線を <b>対角線</b> というよ。
                                                                    </div>
                                                                    <div class="data-demo">
                                                                        <p><b>【図形と 対角線の 関係】</b></p>
                                                                        <p>・<b>平行四辺形</b>：対角線が 真ん中で 交わる。<br>
                                                                        ・<b>ひし形</b>：対角線が <b>垂直（すいちょく）</b> に 交わる！</p>
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "対角線が 垂直（90°）に まじわる 四角形は？", display: "対角線が垂直", answer: "ひし形", options: ["長方形", "平行四辺形", "ひし形"] },
                                                                        { question: "長方形の2本の対角線の長さはどうなっていますか？", display: "対角線の長さ", answer: "同じ", options: ["同じ", "ちがう", "2倍になる"] },
                                                                        { question: "向かい合う頂点を結んだ線を何と呼ぶ？", display: "線の名前", answer: "対角線", options: ["辺", "対角線", "垂直線"] }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            title: "3. 立体（見取り図や展開図など）",
                                                            subUnits: [
                                                                {
                                                                    title: "(1) 直方体（ちょくほうたい）と 立方体（りっぽうたい）",
                                                                    content: `<h4>はこの かたち</h4>
                                                                    <div class="point-box">
                                                                        ・<b>直方体</b>：長方形（または正方形）だけで かこまれた 立体。<br>
                                                                        ・<b>立方体</b>：正方形 だけで かこまれた 立体。
                                                                    </div>
                                                                    <div class="data-demo">
                                                                        <p><b>【立体の パーツ】</b></p>
                                                                        <p>・<b>面（めん）</b>：6つ<br>
                                                                        ・<b>辺（へん）</b>：12本<br>
                                                                        ・<b>頂点（ちょうてん）</b>：8こ</p>
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "直方体や 立方体の 面の数は 全部で いくつ？", display: "面の数", answer: 6 },
                                                                        { question: "直方体や 立方体の 辺の数は 全部で いくつ？", display: "辺の数", answer: 12 },
                                                                        { question: "直方体や 立方体の 頂点の数は 全部で いくつ？", display: "頂点の数", answer: 8 }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "(2) 見取（みと）り図",
                                                                    content: `<h4>ななめから 見た図</h4>
                                                                    <div class="point-box">
                                                                        立体の 全体の 形が わかるように かいた図を <b>見取り図</b> というよ。
                                                                    </div>
                                                                    <div class="box-demo-container">
                                                                        <div class="box-3d"></div>
                                                                    </div>
                                                                    <p>・目に見えない 辺は <b>点線</b> で かくのが ルールだよ！</p>`,
                                                                    quizzes: [
                                                                        { question: "見取り図で、実際には見えない辺は何線でかきますか？", display: "線の種類", answer: "点線", options: ["太線", "点線", "赤線"] },
                                                                        { question: "見取り図は何のためにかきますか？", display: "図の目的", answer: "全体の形をわかるようにするため", options: ["色を塗るため", "全体の形をわかるようにするため", "重さをはかるため"] },
                                                                        { question: "見取り図で、平行な辺は図の中でも平行にかきますか？", display: "平行のルール", answer: "はい", options: ["はい", "いいえ"] }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "(3) 展開図（てんかいず）",
                                                                    content: `<h4>切りひらいた図</h4>
                                                                    <div class="point-box">
                                                                        立体を 切りひらいて 平面（へいめん）に した図を <b>展開図</b> というよ。
                                                                    </div>
                                                                    <div class="data-demo">
                                                                        <div style=" flex-direction: column; align-items: center; display: flex; justify-content: center; padding: 20px;">
                                                                            <div style="display: grid; grid-template-columns: repeat(3, 30px); grid-template-rows: repeat(4, 30px); gap: 0;">
                                                                                <!-- Row 1 -->
                                                                                <div style="grid-column: 2; border: 1px solid #333;"></div>
                                                                                <!-- Row 2 -->
                                                                                <div style="grid-row: 2; grid-column: 1; border: 1px solid #333;"></div>
                                                                                <div style="grid-row: 2; grid-column: 2; border: 1px solid #333; background: #ffd6e7;"></div>
                                                                                <div style="grid-row: 2; grid-column: 3; border: 1px solid #333;"></div>
                                                                                <!-- Row 3 -->
                                                                                <div style="grid-row: 3; grid-column: 2; border: 1px solid #333;"></div>
                                                                                <!-- Row 4 -->
                                                                                <div style="grid-row: 4; grid-column: 2; border: 1px solid #333;"></div>
                                                                            </div>
                                                                        </div>
                                                                        <p>組み立てたときに、どの面と どの面が <b>向かいあうか</b> 考えるのが 大事だよ！</p>
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "正六面体（立方体）の 展開図は 全部で 何種類（なんしゅるい）あるかな？", display: "展開図の種類", answer: 11, options: [6, 11, 14] },
                                                                        { question: "立方体の展開図を組み立てた時、隣り合う面同士は何度で交わりますか？", display: "面の角度", answer: 90, options: [45, 90, 180] },
                                                                        { question: "展開図を組み立てるとどんな形になりますか？", display: "組み立て後", answer: "立体", options: ["平面", "立体", "線"] }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                ,
                        {
                            title: "4. 位置（いち）",
                            subUnits: [
                                {
                                    title: "(1) 平面（へいめん）の位置",
                                    content: `<h4>どこに あるかな？</h4>
                                    <div class="point-box">
                                        「横（よこ）」と 「縦（たて）」の 2つの 数を使って、場所（ばしょ）を 表すことができるよ。
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【例：たからもの の場所】</b></p>
                                        <p>横に 3、縦に 2 進んだところ ➔ <b>(3, 2)</b></p>
                                        <p>このように、基準（きじゅん）からの きょりで 位置が 決まるんだね！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "横に 5、縦に 4 進んだ位置を 表すと？", display: "位置の表し方", answer: "(5, 4)" }
                                    ]
                                },
                                {
                                    title: "(2) 空間（くうかん）の位置",
                                    content: `<h4>高さも 加（くわ）えよう</h4>
                                    <div class="point-box">
                                        空間（立体の中など）では、<b>「横」「縦」「高さ」</b> の 3つの 数を使って 表すよ。
                                    </div>
                                    <div class="data-demo">
                                        <p>教室の 中の 自分の席（せき）も、「前から○列目、右から○番目、高さ○階」のように 表せるね！</p>
                                    </div>`
                                }
                            ]
                        },
                        {
                            title: "5. 単位（たんい）",
                            subUnits: [
                                {
                                    title: "(1) 面積の単位（㎠，㎡，㎢）",
                                    content: `<h4>広さを表す 単位</h4>
                                    <div class="point-box">
                                        面積（広さ）を表すときには、次のような 単位を使うよ。<br>
                                        ・<b>㎠</b>（平方センチメートル）<br>
                                        ・<b>㎡</b>（平方メートル）<br>
                                        ・<b>㎢</b>（平方キロメートル）
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【単位の関係】</b></p>
                                        <p>・1㎡ ＝ 10000 ㎠<br>
                                        ・1㎢ ＝ 1000000 ㎡</p>
                                        <p>図形や 場所の大きさに あわせて、使いわけよう！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "1㎡ は 何 ㎠ かな？", display: "1㎡", answer: 10000 },
                                        { question: "1㎢ は 何 ㎡ かな？", display: "1㎢", answer: 1000000 }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "6. 角度（かくど）",
                            subUnits: [
                                {
                                    title: "(1) 角の大きさとは",
                                    content: `<h4>開（ひら）きぐあいを はかろう</h4>
                                    <div class="point-box">
                                        辺（へん）と 辺の 開きぐあいの ことを <b>角（かく）の大きさ（角度）</b> というよ。<br>
                                        単位（たんい）は <b>度（ど）</b> を使い、<b>「°」</b> と書くよ。
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【いろいろな 角度】</b></p>
                                        <div style="display:flex; justify-content:center; gap:30px; align-items:flex-end;">
                                            <div style="text-align:center;">
                                                <div style="width:60px; height:2px; background:#333; position:relative; margin-bottom:10px;">
                                                    <div style="width:60px; height:2px; background:#333; position:absolute; left:0; bottom:0; transform:rotate(-45deg); transform-origin:left center;"></div>
                                                </div>
                                                <div>45°</div>
                                            </div>
                                            <div style="text-align:center;">
                                                <div style="width:60px; height:2px; background:#333; position:relative; margin-bottom:10px;">
                                                    <div style="width:60px; height:2px; background:#333; position:absolute; left:0; bottom:0; transform:rotate(-90deg); transform-origin:left center;"></div>
                                                </div>
                                                <div>直角（90°）</div>
                                            </div>
                                            <div style="text-align:center;">
                                                <div style="width:60px; height:2px; background:#333; position:relative; margin-bottom:10px;">
                                                    <div style="width:60px; height:2px; background:#333; position:absolute; left:0; bottom:0; transform:rotate(-180deg); transform-origin:left center;"></div>
                                                </div>
                                                <div>180°</div>
                                            </div>
                                        </div>
                                    </div>`,
                                    quizzes: [
                                        { question: "直角（ちょっかく）は 何度かな？", display: "直角", answer: 90 },
                                        { question: "直角が 2つ分だと 何度かな？", display: "90° ✕ 2", answer: 180 }
                                    ]
                                },
                                {
                                    title: "(2) 分度器（ぶんどき）の使い方",
                                    content: `<h4>正しい はかりかた</h4>
                                    <div class="point-box">
                                        ① 分度器の <b>中心</b> を、角の <b>頂点（ちょうてん）</b> に あわせる。<br>
                                        ② <b>0°の線</b> を、一方の 辺（へん）に ぴったりあわせる。<br>
                                        ③ もう一方の 辺が 指（さ）している 目盛りを よむ。
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【読むときの注意】</b></p>
                                        <p>目盛りには 右から始まるものと 左から始まるものがあるよ。<br>
                                        <b>0から 始まっているほう</b> を 数えていこう！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "直角の半分（半分に 折った角度）は 何度かな？", display: "90 ÷ 2", answer: 45 }
                                    ]
                                },
                                {
                                    title: "(3) 180度より 大きい角",
                                    content: `<h4>くふうして はかろう</h4>
                                    <div class="point-box">
                                        分度器は 180度までしか ないけど、くふうすれば もっと大きい角も はかれるよ！
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【2つの やりかた】</b></p>
                                        <p>① <b>180度 ＋（はみ出したぶん）</b> で 計算する。<br>
                                        ② <b>360度 －（はんたいがわ）</b> で 計算する。<br>
                                        一周（いっしゅう）は <b>360度</b> だということを おぼえておこう！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "一回転（いっかいてん）した 角度は 何度かな？", display: "一周", answer: 360 },
                                        { question: "直角が 3つ分だと 何度かな？", display: "90° ✕ 3", answer: 270 }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "7. 長方形・正方形、複雑な図形の面積",
                            subUnits: [
                                {
                                    title: "(1) 長方形と正方形の面積",
                                    content: `<h4>広さを 計算で もとめよう</h4>
                                    <div class="point-box">
                                        ・<b>長方形の面積 ＝ 縦 ✕ 横</b><br>
                                        ・<b>正方形の面積 ＝ 一辺 ✕ 一辺</b>
                                    </div>
                                    <div class="data-demo">
                                        <p>面積の 単位は、<b>㎠</b>（平方センチメートル）、<b>㎡</b>（平方メートル）、<b>㎢</b>（平方キロメートル）を使うよ。</p>
                                    </div>`,
                                                                        quizzes: [
                                                                            { question: "縦 5cm、横 8cm の長方形の面積は？", display: "5cm ✕ 8cm", answer: 40 },
                                                                            { question: "一辺が 6cm の正方形の面積は？", display: "6cm ✕ 6cm", answer: 36 },
                                                                            { question: "縦 10m、横 4m の長方形の面積は？", display: "10m ✕ 4m", answer: 40 },
                                                                            { question: "一辺が 9cm の正方形の面積は？", display: "9cm ✕ 9cm", answer: 81 },
                                                                            { question: "縦 2km、横 3km の長方形の面積は？", display: "2km ✕ 3km", answer: 6 }
                                                                        ]
                                                                    },
                                                                    {
                                                                        title: "(2) 複雑（ふくざつ）な図形の面積",
                                                                        content: `<h4>くふうして 計算しよう</h4>
                                                                        <div class="point-box">
                                                                            L字型のような 複雑な図形は、次の 3つの考え方で もとめることができるよ！
                                                                        </div>
                                                                        <div class="data-demo" style="display:flex; flex-wrap:wrap; justify-content:center; gap:20px;">
                                                                                                                                                            <!-- パターン1: たてにわける -->
                                                                                                                                                            <div style="text-align:center; width:120px;">
                                                                                                                                                                <div style="width:80px; height:80px; position:relative; margin:0 auto 10px;">
                                                                                                                                                                    <!-- 左の長方形(40x80): 上・左・下を黒 -->
                                                                                                                                                                    <div style="width:40px; height:80px; position:absolute; left:0; top:0; border:2px solid #333; border-right:none;"></div>
                                                                                                                                                                    <!-- 右の長方形(40x40): 上・右・下を黒 -->
                                                                                                                                                                    <div style="width:40px; height:40px; position:absolute; left:40px; top:40px; border:2px solid #333; border-left:none;"></div>
                                                                                                                                                                    <!-- L字の外郭の「段差」の垂直線（黒） -->
                                                                                                                                                                    <div style="width:2px; height:40px; background:#333; position:absolute; left:40px; top:0;"></div>
                                                                                                                                                                    <!-- 境界線（赤点線） -->
                                                                                                                                                                    <div style="width:0; height:40px; border-left:2px dashed red; position:absolute; left:40px; top:40px;"></div>
                                                                                                                                                                </div>
                                                                                                                                                                <p style="font-size:12px;">①たてに<br>わけてたす</p>
                                                                                                                                                            </div>
                                                                                                                                                            <!-- パターン2: よこにわける -->
                                                                                                                                                            <div style="text-align:center; width:120px;">
                                                                                                                                                                <div style="width:80px; height:80px; position:relative; margin:0 auto 10px;">
                                                                                                                                                                    <!-- 上の長方形(40x40): 上・左・右を黒 -->
                                                                                                                                                                    <div style="width:40px; height:40px; position:absolute; left:0; top:0; border:2px solid #333; border-bottom:none;"></div>
                                                                                                                                                                    <!-- 下の長方形(80x40): 左・右・下を黒 -->
                                                                                                                                                                    <div style="width:80px; height:40px; position:absolute; left:0; top:40px; border:2px solid #333; border-top:none;"></div>
                                                                                                                                                                    <!-- L字の外郭の「段差」の水平線（黒） -->
                                                                                                                                                                    <div style="width:40px; height:2px; background:#333; position:absolute; left:40px; top:40px;"></div>
                                                                                                                                                                    <!-- 境界線（赤点線） -->
                                                                                                                                                                    <div style="width:40px; height:0; border-top:2px dashed red; position:absolute; left:0; top:40px;"></div>
                                                                                                                                                                </div>
                                                                                                                                                                <p style="font-size:12px;">②よこに<br>わけてたす</p>
                                                                                                                                                            </div>
                                                                                                                                                                                                                                            <!-- パターン3: 大きい四角 － 小さい四角 -->
                                                                                                                                                                                                                                            <div style="text-align:center; width:220px;">
                                                                                                                                                                                                                                                <div style="display:flex; align-items:center; justify-content:center; height:110px; margin-bottom:10px; gap:15px;">
                                                                                                                                                                                                                                                    <!-- 大きい四角 -->
                                                                                                                                                                                                                                                    <div style="display:flex; flex-direction:column; align-items:center;">
                                                                                                                                                                                                                                                        <div style="width:80px; height:80px; border:2px solid #333; background:#f9f9f9;"></div>
                                                                                                                                                                                                                                                        <span style="font-size:11px; margin-top:5px;">全体</span>
                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                    <div style="font-size:28px; font-weight:bold; color:#333; margin-top:-20px;">－</div>
                                                                                                                                                                                                                                                    <!-- 小さい四角（右上に対応する位置に配置） -->
                                                                                                                                                                                                                                                    <div style="display:flex; flex-direction:column; align-items:center; align-self: flex-start; margin-top:5px;">
                                                                                                                                                                                                                                                        <div style="width:40px; height:40px; border:2px dashed red; background:rgba(255,0,0,0.05);"></div>
                                                                                                                                                                                                                                                        <span style="font-size:11px; margin-top:5px; color:red; white-space:nowrap;">欠けた部分</span>
                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                <p style="font-size:12px; margin-top:5px;">③大きい四角 － 小さい四角</p>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                            
                                                                        <p style="margin-top:15px;">どの方法を使っても 答えは同じになるよ。自分が計算しやすい方法を見つけよう！</p>`,
                                                                        quizzes: [
                                                                            { question: "縦3cm・横4cmの長方形と、一辺2cmの正方形をあわせた図形の面積は？", display: "(3x4) + (2x2)", answer: 16 },
                                                                            { question: "一辺が6cmの正方形から、縦2cm・横3cmの長方形を切り取った面積は？", display: "(6x6) - (2x3)", answer: 30 },
                                                                            { question: "縦5cm・横5cmの正方形に、縦2cm・横2cmの正方形をたした面積は？", display: "25 + 4", answer: 29 },
                                                                            { question: "縦10cm・横10cmの正方形から、縦5cm・横5cmの正方形をひいた面積は？", display: "100 - 25", answer: 75 },
                                                                            { question: "縦4cm・横6cmの長方形を2つ合わせた面積は？", display: "(4x6) ✕ 2", answer: 48 }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                title: "8. 周（まわ）りの長さ",
                                                                subUnits: [
                                                                    {
                                                                        title: "(1) 周りの長さの もとめ方",
                                                                        content: `<h4>すべての 辺を たそう</h4>
                                                                        <div class="point-box">
                                                                            図形の <b>周りの長さ</b> とは、その図形を かこんでいる 線の 長さの 合計のことだよ。
                                                                        </div>
                                                                        <div class="data-demo">
                                                                            <p><b>【長方形の ばあい】</b></p>
                                                                            <p>（縦 ＋ 横） ✕ 2 ＝ 周りの長さ</p>
                                                                            <p><b>【正方形の ばあい】</b></p>
                                                                            <p>一辺 ✕ 4 ＝ 周りの長さ</p>
                                                                        </div>`,
                                                                        quizzes: [
                                                                            { question: "縦 3cm、横 7cm の長方形の 周りの長さは？", display: "(3+7) ✕ 2", answer: 20 },
                                                                            { question: "一辺が 5cm の正方形の 周りの長さは？", display: "5 ✕ 4", answer: 20 },
                                                                            { question: "縦 10cm、横 2cm の長方形の 周りの長さは？", display: "(10+2) ✕ 2", answer: 24 },
                                                                            { question: "一辺が 8cm の正方形の 周りの長さは？", display: "8 ✕ 4", answer: 32 },
                                                                            { question: "縦 4m、横 6m の長方形の 周りの長さは？", display: "(4+6) ✕ 2", answer: 20 }
                                                                        ]
                                                                    }
                                    ,
                                {
                                    title: "(2) 複雑な図形の 周りの長さ",
                                    content: `<h4>線を いどうさせて 考える</h4>
                                    <div class="point-box">
                                        階段（かいだん）のような かたちの 周りの長さは、<b>線を はしっこへ 移動（いどう）</b> させると、大きな長方形と 同じになることに 気づけるよ！
                                    </div>
                                    <div class="data-demo">
                                        <p>へこんでいる部分の 辺を、外側（そとがわ）へ ずらしてみよう。<br>
                                        すると、ふつうの 長方形として 計算できるんだ。ふしぎだね！</p>
                                    </div>`
                                }
                            ]
                        }
                    ] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [
                        {
                            title: "1. 変わり方（△三角形と周りの長さ）",
                            subUnits: [
                                {
                                    title: "(1) 三角形を並べたときの周りの長さ",
                                    content: `<h4>規則性（きそくせい）を見つけよう</h4>
                                    <div class="point-box">
                                        1辺が 1cmの 正三角形を 横に並べていくときの <b>周りの長さ</b> を調べるよ。
                                    </div>
                                    <div class="data-demo">
                                        <!-- 三角形を 繋げる図解 -->
                                        <div style="display:flex; justify-content:center; align-items:flex-end; gap:15px; margin-bottom:15px;">
                                            <!-- 1個 -->
                                            <div style="text-align:center;">
                                                <div style="width:0; height:0; border-left:15px solid transparent; border-right:15px solid transparent; border-bottom:26px solid #ff7675; margin:0 auto;"></div>
                                                <div style="font-size:10px; margin-top:5px;">1個: 3cm</div>
                                            </div>
                                            <div style="font-size:18px;">→</div>
                                            <!-- 2個 (△▽) -->
                                            <div style="text-align:center;">
                                                <div style="display:flex; align-items:flex-end; justify-content:center;">
                                                    <div style="width:0; height:0; border-left:15px solid transparent; border-right:15px solid transparent; border-bottom:26px solid #ff7675;"></div>
                                                    <div style="width:0; height:0; border-left:15px solid transparent; border-right:15px solid transparent; border-top:26px solid #fab1a0; margin-left:-15px;"></div>
                                                </div>
                                                <div style="font-size:10px; margin-top:5px;">2個: 4cm</div>
                                            </div>
                                            <div style="font-size:18px;">→</div>
                                            <!-- 3個 (△▽△) -->
                                            <div style="text-align:center;">
                                                <div style="display:flex; align-items:flex-end; justify-content:center;">
                                                    <div style="width:0; height:0; border-left:15px solid transparent; border-right:15px solid transparent; border-bottom:26px solid #ff7675;"></div>
                                                    <div style="width:0; height:0; border-left:15px solid transparent; border-right:15px solid transparent; border-top:26px solid #fab1a0; margin-left:-15px;"></div>
                                                    <div style="width:0; height:0; border-left:15px solid transparent; border-right:15px solid transparent; border-bottom:26px solid #ff7675; margin-left:-15px;"></div>
                                                </div>
                                                <div style="font-size:10px; margin-top:5px;">3個: 5cm</div>
                                            </div>
                                        </div>
                                        <p>三角形が 1個ふえると、周りの長さは <b>1cmずつ</b> ふえるね！<br>
                                        <b>周りの長さ ＝ 三角形の数 ＋ 2</b> という決まりがあるよ。</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "三角形を 8個 並べたとき、周りの長さは 何cmかな？", display: "8 ＋ 2", answer: 10 }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 割合（わりあい）",
                            subUnits: [
                                {
                                    title: "(1) 割合（何倍かな？）",
                                    content: `<h4>どちらが 何倍か 調べよう</h4>
                                    <div class="point-box">
                                        ある数が、もう一方の数の **何倍** にあたるかを表したものを **割合（わりあい）** というよ。<br>
                                        計算は シンプルな **わり算** で出せるんだ！
                                    </div>
                                    <div class="data-demo">
                                        <p style="text-align:center; font-size:18px; font-weight:bold;">割合 ＝ 比べたい数 ÷ もとにする数</p>
                                        <p>たとえば…<br>
                                        「10mは 5mの 何倍かな？」と考えたら、<br>
                                        10 ÷ 5 ＝ 2 なので、割合は <b>2</b> になるよ。</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "15cmは 5cmの 何倍（割合）かな？", display: "15 ÷ 5", answer: 3 },
                                        { question: "80円は 20円の 何倍（割合）かな？", display: "80 ÷ 20", answer: 4 },
                                        { question: "2Lは 10Lの 何倍（割合）かな？", display: "2 ÷ 10", answer: 0.2 }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [
                        {
                            title: "1. 折れ線グラフ",
                            subUnits: [
                                {
                                    title: "(1) 折れ線グラフの見方",
                                    content: `<h4>変わり方が 一目でわかる</h4>
                                    <div class="point-box">
                                        点の 位置（高さ）で 数を表し、それを 線でつないだものを <b>折れ線グラフ</b> というよ。<br>
                                        線が <b>右上がり</b> なら 増えている、<b>右下がり</b> なら 減っていることがわかるね。
                                    </div>
                                    <div class="data-demo">
                                        <div style="width:180px; height:100px; border-left:2px solid #333; border-bottom:2px solid #333; margin:0 auto; position:relative; display:flex; align-items:flex-end; padding-bottom:10px;">
                                            <svg width="100%" height="100%" style="position:absolute; bottom:0; left:0;">
                                                <polyline points="20,80 60,60 100,70 140,30 180,20" fill="none" stroke="#3498db" stroke-width="3" />
                                                <circle cx="20" cy="80" r="4" fill="#3498db" />
                                                <circle cx="60" cy="60" r="4" fill="#3498db" />
                                                <circle cx="100" cy="70" r="4" fill="#3498db" />
                                                <circle cx="140" cy="30" r="4" fill="#3498db" />
                                                <circle cx="180" cy="20" r="4" fill="#3498db" />
                                            </svg>
                                        </div>
                                        <p style="font-size:12px; text-align:center;">横軸：時間 / 縦軸：気温 など</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "グラフの線が 右上がりになっているとき、数は どうなっている？", display: "右上がりの線", answer: "増えている", options: ["増えている", "減っている", "変わらない"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. グラフの活用（応用）",
                            subUnits: [
                                {
                                    title: "(1) 2つの地域の気温を比べる",
                                    content: `<h4>ちがいを見つけよう</h4>
                                    <div class="point-box">
                                        2つのデータを 1つのグラフに書くと、どちらが高いかや、変わり方のちがいが よくわかるよ。
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【東京と札幌の気温】</b></p>
                                        <div style="width:180px; height:100px; border-left:2px solid #333; border-bottom:2px solid #333; margin:0 auto; position:relative; display:flex; align-items:flex-end; padding-bottom:10px;">
                                            <svg width="100%" height="100%" style="position:absolute; bottom:0; left:0;">
                                                <!-- 地域A (青) -->
                                                <polyline points="20,60 60,40 100,30 140,20 180,10" fill="none" stroke="#3498db" stroke-width="2" />
                                                <!-- 地域B (赤) -->
                                                <polyline points="20,90 60,80 100,70 140,60 180,55" fill="none" stroke="#e74c3c" stroke-width="2" />
                                            </svg>
                                        </div>
                                        <p style="font-size:11px; margin-top:5px;"><span style="color:#3498db;">● 東京</span> / <span style="color:#e74c3c;">● 札幌</span></p>
                                        <p style="font-size:12px;">2つの線の **間（はば）** を見ると、気温の差が どれくらいあるかわかるね！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "2つの折れ線が 交差（こうさ）したとき、何が起きたといえる？", display: "線の入れ替わり", answer: "順位が変わった", options: ["順位が変わった", "差が広がった", "雨が降った"] }
                                    ]
                                }
                            ]
                        }
                    ] }
                ]
            },
            e5: {
                name: "小5",
                categories: [
                    { name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>", units: [
                        {
                            title: "1. 偶数・奇数、倍数・約数",
                            subUnits: [
                                                                {
                                                                    title: "(1) 偶数（ぐうすう）と 奇数（きすう）",
                                                                    content: `<h4>2で われるかな？</h4>
                                                                    <div class="point-box">
                                                                        ・<b>偶数</b>：2で わり切れる整数（0, 2, 4, 6...）<br>
                                                                                　　※ 0 も 偶数に ふくめるよ。<br>
                                                                        ・<b>奇数</b>：2で わり切れない整数（1, 3, 5, 7...）
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "「15」は 偶数・奇数 どっちかな？", display: "15", answer: "奇数", options: ["偶数", "奇数"] },
                                                                        { question: "「0」は 偶数・奇数 どっちかな？", display: "0", answer: "偶数", options: ["偶数", "奇数"] },
                                                                        { question: "「102」は 偶数・奇数 どっちかな？", display: "102", answer: "偶数", options: ["偶数", "奇数"] }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "(2) 倍数（ばいすう）と 公倍数",
                                                                    content: `<h4>どんどん ふえる数</h4>
                                                                    <div class="point-box">
                                                                        ・<b>倍数</b>：ある数に 1, 2, 3... を かけてできる数。<br>
                                                                        ・<b>公倍数</b>：2つ以上の数に 共通する 倍数。<br>
                                                                        ・<b>最小公倍数</b>：公倍数の中で いちばん小さい数。
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "3 と 4 の 最小公倍数は？", display: "3, 4", answer: 12 },
                                                                        { question: "2 と 5 の 最小公倍数は？", display: "2, 5", answer: 10 },
                                                                        { question: "6 の 倍数を 小さいほうから 3つ言うと？", display: "6の倍数", answer: "6, 12, 18", options: ["6, 12, 18", "1, 2, 3", "6, 8, 10"] }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "(3) 約数（やくすう）と 公約数",
                                                                    content: `<h4>わり切れる数</h4>
                                                                    <div class="point-box">
                                                                        ・<b>約数</b>：ある数を わり切ることができる数。<br>
                                                                        ・<b>公約数</b>：2つ以上の数に 共通する 約数。<br>
                                                                        ・<b>最大公約数</b>：公約数の中で いちばん大きい数。
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "12 と 18 の 最大公約数は？", display: "12, 18", answer: 6 },
                                                                        { question: "8 の 約数は 全部で いくつある？", display: "1, 2, 4, 8", answer: 4 },
                                                                        { question: "9 と 15 の 公約数は 1 と 何？", display: "9, 15", answer: 3 }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            title: "2. 小数のしくみ（10倍、1/10倍）",
                                                            subUnits: [
                                                                {
                                                                    title: "(1) 位（くらい）の移動",
                                                                    content: `<h4>小数点が 動くよ</h4>
                                                                    <div class="point-box">
                                                                        ・10倍, 100倍すると、小数点は <b>右</b> に移動する。<br>
                                                                        ・1/10, 1/100にすると、小数点は <b>左</b> に移動する。
                                                                    </div>
                                                                    <div class="data-demo">
                                                                        <p>例：1.23<br>
                                                                        ・10倍 ＝ <b>12.3</b><br>
                                                                        ・1/10 ＝ <b>0.123</b></p>
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "2.5 を 100倍すると いくらになる？", display: "2.5 ✕ 100", answer: 250 },
                                                                        { question: "45 を 1/100 にすると いくらになる？", display: "45 ÷ 100", answer: 0.45 },
                                                                        { question: "0.08 を 10倍すると いくらになる？", display: "0.08 ✕ 10", answer: 0.8 },
                                                                        { question: "320 を 1/1000 にすると いくらになる？", display: "320 ÷ 1000", answer: 0.32 },
                                                                        { question: "1.234 を 1000倍すると いくらになる？", display: "1.234 ✕ 1000", answer: 1234 }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            title: "3. 小数のかけ算",
                                                            subUnits: [
                                                                {
                                                                    title: "(1) 小数 ✕ 小数",
                                                                    content: `<h4>小数点の位置が ポイント</h4>
                                                                    <div class="point-box">
                                                                        ① 小数点がないものとして 計算する。<br>
                                                                        ② かける数と かけられる数の 小数位の合計ぶん、小数点を打つ。
                                                                    </div>
                                                                    <div class="data-demo">
                                                                        <p>0.3 ✕ 0.2 ＝ <b>0.06</b><br>
                                                                        （1位 ＋ 1位 ＝ 2位）</p>
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "0.4 ✕ 0.8 は？", display: "0.4 ✕ 0.8", answer: 0.32 },
                                                                        { question: "1.2 ✕ 0.3 は？", display: "1.2 ✕ 0.3", answer: 0.36 },
                                                                        { question: "0.5 ✕ 0.5 は？", display: "0.5 ✕ 0.5", answer: 0.25 },
                                                                        { question: "2.5 ✕ 0.4 は？", display: "2.5 ✕ 0.4", answer: 1 },
                                                                        { question: "0.02 ✕ 0.3 は？", display: "0.02 ✕ 0.3", answer: 0.006 }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            title: "4. 小数のわり算",
                                                            subUnits: [
                                                                {
                                                                    title: "(1) 小数でわる計算",
                                                                    content: `<h4>整数にしてから わろう</h4>
                                                                    <div class="point-box">
                                                                        わる数が 整数になるように、小数点を <b>右</b> に動かして計算するよ。<br>
                                                                        （わられる数も 同じだけ動かす！）
                                                                    </div>
                                                                    <div class="data-demo">
                                                                        <p>1.2 ÷ 0.3<br>
                                                                        ↓ 両方を10倍<br>
                                                                        12 ÷ 3 ＝ <b>4</b></p>
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "0.8 ÷ 0.2 は？", display: "0.8 ÷ 0.2", answer: 4 },
                                                                        { question: "1.5 ÷ 0.5 は？", display: "1.5 ÷ 0.5", answer: 3 },
                                                                        { question: "2.4 ÷ 0.06 は？ (240÷6)", display: "2.4 ÷ 0.06", answer: 40 },
                                                                        { question: "0.36 ÷ 0.4 は？ (3.6÷4)", display: "0.36 ÷ 0.4", answer: 0.9 },
                                                                        { question: "1 ÷ 0.5 は？", display: "1 ÷ 0.5", answer: 2 }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                ,
                        {
                            title: "5. 小数でも成り立つ性質",
                            subUnits: [
                                {
                                    title: "(1) 計算のきまり",
                                    content: `<h4>小数になっても 同じだよ</h4>
                                    <div class="point-box">
                                        ・ア ＋ イ ＝ イ ＋ ア<br>
                                        ・（ア ＋ イ） ✕ ウ ＝ ア ✕ ウ ＋ イ ✕ ウ
                                    </div>
                                    <p>これらを使うと、計算が らくになることがあるよ！</p>`,
                                    quizzes: [
                                        { question: "3.2 ✕ 4 ＋ 6.8 ✕ 4 ＝ （3.2＋6.8）✕ 4 ＝ ？", display: "10 ✕ 4", answer: 40 }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "6. 分数・小数・整数の関係",
                            subUnits: [
                                {
                                    title: "(1) 書きかえの ルール",
                                    content: `<h4>なかま分けを しよう</h4>
                                    <div class="point-box">
                                        ・<b>整数 ＝ 分数</b>（例：2 ＝ 2/1）<br>
                                        ・<b>小数 ＝ 分数</b>（例：0.3 ＝ 3/10）<br>
                                        ・<b>分数 ＝ 小数</b>（分子 ÷ 分母 で出せるよ！）
                                    </div>`,
                                    quizzes: [
                                        { question: "0.7 を 分数で表すと？", display: "0.7", answer: "7/10", options: ["7/10", "1/7", "7/100"] },
                                        { question: "1/4 を 小数で表すと？", display: "1 ÷ 4", answer: 0.25 },
                                        { question: "2 を 分数で表すと？", display: "2", answer: "2/1", options: ["2/1", "1/2", "2/2"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "7. わり算と分数",
                            subUnits: [
                                {
                                    title: "(1) わり算を 分数で表す",
                                    content: `<h4>商（しょう）を 分数に</h4>
                                    <div class="point-box">
                                        <b>ア ÷ イ ＝ ア / イ</b><br>
                                        （わられる数 が 分子、わる数 が 分母になるよ）
                                    </div>`,
                                    quizzes: [
                                        { question: "2 ÷ 3 を 分数で表すと？", display: "2 ÷ 3", answer: "2/3", options: ["2/3", "3/2"] },
                                        { question: "5 ÷ 8 を 分数で表すと？", display: "5 ÷ 8", answer: "5/8", options: ["5/8", "8/5"] },
                                        { question: "1 ÷ 2 を 分数で表すと？", display: "1 ÷ 2", answer: "1/2", options: ["1/2", "2/1"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "8. 大きさの等しい分数",
                            subUnits: [
                                {
                                    title: "(1) 約分（やくぶん）と 通分",
                                    content: `<h4>見た目は ちがうけど 同じ大きさ</h4>
                                    <div class="point-box">
                                        ・<b>約分</b>：分子と分母を 同じ数でわって シンプルにすること。<br>
                                        ・<b>通分</b>：分母を 最小公倍数に そろえること。
                                    </div>`,
                                    quizzes: [
                                        { question: "4/8 を 約分して いちばん小さくすると？", display: "4/8", answer: "1/2", options: ["1/2", "2/4", "1/4"] },
                                        { question: "6/9 を 約分して いちばん小さくすると？", display: "6/9", answer: "2/3", options: ["2/3", "1/3", "3/4"] },
                                        { question: "1/2 と 1/3 を通分すると、分母は何になる？", display: "最小公倍数", answer: 6 }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "9. 異分母の たし算",
                            subUnits: [
                                {
                                    title: "(1) 分母が ちがう たし算",
                                    content: `<h4>まず 通分しよう</h4>
                                    <div class="point-box">
                                        ① 分母を 通分して そろえる。<br>
                                        ② 分子だけを たす。<br>
                                        ③ 約分できるときは 約分する。
                                    </div>`,
                                    quizzes: [
                                        { question: "1/2 ＋ 1/3 は？ (通分して答えよう)", display: "3/6 ＋ 2/6", answer: "5/6", options: ["5/6", "2/5", "1/5"] },
                                        { question: "1/4 ＋ 1/2 は？ (通分して答えよう)", display: "1/4 ＋ 2/4", answer: "3/4", options: ["3/4", "2/6", "1/6"] },
                                        { question: "2/5 ＋ 1/10 は？", display: "4/10 ＋ 1/10", answer: "5/10 (1/2)", options: ["1/2", "3/15", "3/10"] },
                                        { question: "1/3 ＋ 1/4 は？", display: "4/12 ＋ 3/12", answer: "7/12", options: ["7/12", "2/7", "1/7"] },
                                        { question: "1/6 ＋ 1/2 は？", display: "1/6 ＋ 3/6", answer: "4/6 (2/3)", options: ["2/3", "2/8", "1/4"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "10. 異分母の ひき算",
                            subUnits: [
                                {
                                    title: "(1) 分母が ちがう ひき算",
                                    content: `<h4>ひくときも 通分！</h4>
                                    <div class="point-box">
                                        ① 分母を 通分して そろえる。<br>
                                        ② 分子を ひく。
                                    </div>`,
                                    quizzes: [
                                        { question: "1/2 － 1/4 は？", display: "2/4 － 1/4", answer: "1/4", options: ["1/4", "1/2", "1/6"] },
                                        { question: "2/3 － 1/2 は？", display: "4/6 － 3/6", answer: "1/6", options: ["1/6", "1/1", "1/5"] },
                                        { question: "3/4 － 1/8 は？", display: "6/8 － 1/8", answer: "5/8", options: ["5/8", "2/4", "2/8"] },
                                        { question: "1/3 － 1/5 は？", display: "5/15 － 3/15", answer: "2/15", options: ["2/15", "0", "1/2"] },
                                        { question: "5/6 － 1/3 は？", display: "5/6 － 2/6", answer: "3/6 (1/2)", options: ["1/2", "4/3", "4/6"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "11. □や△を使った式（小数の計算）",
                            subUnits: [
                                {
                                    title: "(1) □をもとめる式",
                                    content: `<h4>わからない数を □におく</h4>
                                    <div class="point-box">
                                        小数の計算でも、わからない数を □（しかく）とおいて 式をつくることができるよ。<br>
                                        逆の計算（ぎゃくさん）で □を もとめよう。
                                    </div>`,
                                    quizzes: [
                                        { question: "□ ✕ 0.5 ＝ 4 のとき、□は？", display: "4 ÷ 0.5", answer: 8 },
                                        { question: "□ ＋ 1.2 ＝ 5 のとき、□は？", display: "5 － 1.2", answer: 3.8 },
                                        { question: "□ ÷ 3 ＝ 1.5 のとき、□は？", display: "1.5 ✕ 3", answer: 4.5 },
                                        { question: "8 － □ ＝ 2.5 のとき、□は？", display: "8 － 2.5", answer: 5.5 },
                                        { question: "□ ✕ 0.2 ＝ 10 のとき、□は？", display: "10 ÷ 0.2", answer: 50 }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [
                        {
                            title: "1. 合同（ごうどう）",
                            subUnits: [
                                {
                                    title: "(1) 合同な図形とは",
                                    content: `<h4>ぴったり 重なるかたち</h4>
                                    <div class="point-box">
                                        形も 大きさも 同じで、裏（うら）返したり 回したりして ぴったり重なる 2つの図形を <b>合同</b> というよ。
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【合同な図形の 特徴】</b></p>
                                        <p>・対応する <b>辺の長さ</b> が すべて同じ。<br>
                                        ・対応する <b>角の大きさ</b> が すべて同じ。</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "ぴったり重なる2つの図形の関係を何という？", display: "図形の関係", answer: "合同", options: ["合同", "平行", "垂直"] },
                                        { question: "合同な図形で、対応する角の大きさはどうなっていますか？", display: "角の大きさ", answer: "同じ", options: ["同じ", "ちがう", "合わせて180度"] },
                                        { question: "合同な図形で、対応する辺の長さはどうなっていますか？", display: "辺の長さ", answer: "同じ", options: ["同じ", "ちがう", "半分になる"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 多角形（たかくけい）と 角の和",
                            subUnits: [
                                {
                                    title: "(1) 三角形と 四角形の 角の和",
                                    content: `<h4>全部たすと 何度？</h4>
                                    <div class="point-box">
                                        ・三角形の 3つの角の和 ＝ <b>180°</b><br>
                                        ・四角形の 4つの角の和 ＝ <b>360°</b>
                                    </div>`,
                                    quizzes: [
                                        { question: "三角形の3つの角を全部たすと何度？", display: "三角形の和", answer: 180 },
                                        { question: "四角形の4つの角を全部たすと何度？", display: "四角形の和", answer: 360 },
                                        { question: "三角形の2つの角が60度と40度の時、残りの角は何度？", display: "180 - (60+40)", answer: 80 },
                                        { question: "四角形で3つの角が90度の時、残りの角は何度？", display: "360 - 270", answer: 90 },
                                        { question: "正三角形の1つの角は何度？", display: "180 ÷ 3", answer: 60 }
                                    ]
                                },
                                {
                                    title: "(2) 正多角形（せいたかくけい）",
                                    content: `<h4>辺も 角も すべて同じ</h4>
                                    <div class="point-box">
                                        辺の長さが すべて等しく、角の大きさも すべて等しい 多角形を <b>正多角形</b> というよ。<br>
                                        （正三角形、正方形、正五角形、正六角形など）
                                    </div>`,
                                    quizzes: [
                                        { question: "全ての辺と角が等しい図形を何という？", display: "図形の名前", answer: "正多角形", options: ["多角形", "正多角形", "台形"] },
                                        { question: "正六角形には、同じ大きさの角がいくつありますか？", display: "正六角形", answer: 6 },
                                        { question: "円の中に正多角形をかくとき、中心の角を等しく分ければいいですか？", display: "かきかた", answer: "はい", options: ["はい", "いいえ"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 円周（えんしゅう）と 円周率",
                            subUnits: [
                                {
                                    title: "(1) 円周率（えんしゅうりつ）",
                                    content: `<h4>直径と 円周の関係</h4>
                                    <div class="point-box">
                                        円のまわりの長さを <b>円周</b> というよ。<br>
                                        ・<b>円周 ＝ 直径 ✕ 円周率</b>（3.14）
                                    </div>
                                    <div class="data-demo">
                                        <p>円周率は 約 <b>3.14</b> だよ。<br>
                                        円が 大きくなっても、この割合は 変わらないんだ！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "円周を求める式は「直径 ✕ ？」", display: "円周の公式", answer: 3.14 },
                                        { question: "直径 10cm の円の円周は 何cm？", display: "10 ✕ 3.14", answer: 31.4 },
                                        { question: "半径 5cm の円の円周は 何cm？ (直径に注意！)", display: "10 ✕ 3.14", answer: 31.4 },
                                        { question: "円周が 15.7cm の円の直径は 何cm？", display: "15.7 ÷ 3.14", answer: 5 },
                                        { question: "直径が 2倍になると、円周は何倍になる？", display: "円周の変化", answer: 2 }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. 面積の公式（いろいろな形）",
                            subUnits: [
                                {
                                    title: "(1) 平行四辺形 と 三角形の面積",
                                    content: `<h4>高さを 見つけよう</h4>
                                    <div class="point-box">
                                        ・<b>平行四辺形の面積 ＝ 底辺 ✕ 高さ</b><br>
                                        ・<b>三角形の面積 ＝ 底辺 ✕ 高さ ÷ 2</b>
                                    </div>`,
                                    quizzes: [
                                        { question: "底辺 6cm、高さ 4cm の平行四辺形の面積は？", display: "6 ✕ 4", answer: 24 },
                                        { question: "底辺 8cm、高さ 5cm の三角形の面積は？", display: "8 ✕ 5 ÷ 2", answer: 20 },
                                        { question: "底辺 10m、高さ 7m の平行四辺形の面積は？", display: "10 ✕ 7", answer: 70 },
                                        { question: "底辺 4cm、高さ 9cm の三角形の面積は？", display: "4 ✕ 9 ÷ 2", answer: 18 },
                                        { question: "三角形の面積を出すとき、最後に何でわりますか？", display: "公式のルール", answer: 2 }
                                    ]
                                },
                                {
                                    title: "(2) 台形（だいけい）と ひし形の面積",
                                    content: `<h4>公式を おぼえよう</h4>
                                    <div class="point-box">
                                        ・<b>台形の面積 ＝（上底 ＋ 下底）✕ 高さ ÷ 2</b><br>
                                        ・<b>ひし形の面積 ＝ 対角線 ✕ 対角線 ÷ 2</b>
                                    </div>`,
                                    quizzes: [
                                        { question: "上底 3cm、下底 5cm、高さ 4cm の台形の面積は？", display: "(3+5) ✕ 4 ÷ 2", answer: 16 },
                                        { question: "対角線 6cm と 8cm のひし形の面積は？", display: "6 ✕ 8 ÷ 2", answer: 24 },
                                        { question: "上底 2cm、下底 8cm、高さ 5cm の台形の面積は？", display: "(2+8) ✕ 5 ÷ 2", answer: 25 },
                                        { question: "対角線 10cm と 10cm のひし形の面積は？", display: "10 ✕ 10 ÷ 2", answer: 50 },
                                        { question: "台形の面積で、( ) の中身は何と何をたしたもの？", display: "公式のパーツ", answer: "上底と下底", options: ["上底と下底", "底辺と高さ", "対角線"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "5. 立体（角柱と円柱）と 体積",
                            subUnits: [
                                {
                                    title: "(1) 角柱（かくちゅう）と 円柱（えんちゅう）",
                                    content: `<h4>柱（はしら）のかたち</h4>
                                    <div class="point-box">
                                        上下に 同じ形の面（<b>底面</b>）があり、まわりの面（<b>側面</b>）が 垂直になっている立体だよ。
                                    </div>
                                    <div class="data-demo">
                                        <p>・<b>底面（ていめん）</b>：上下にある 2つの面。<br>
                                        ・<b>側面（そくめん）</b>：まわりを かこむ面。</p>
                                    </div>`
                                },
                                {
                                    title: "(2) 角柱・円柱の体積（たいせき）",
                                    content: `<h4>かさを もとめよう</h4>
                                    <div class="point-box">
                                        ・<b>体積 ＝ 底面積 ✕ 高さ</b>
                                    </div>
                                    <div class="data-demo">
                                        <p>底面の 面積（底面積）に 高さを かけるだけ！<br>
                                        どんな 柱の形でも 使える べんりな公式だよ。</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "底面積 10㎠、高さ 5cm の角柱の体積は？", display: "10 ✕ 5", answer: 50 },
                                        { question: "底面積 20㎠、高さ 3cm の円柱の体積は？", display: "20 ✕ 3", answer: 60 },
                                        { question: "1辺 2cm の正方形が底面の、高さ 10cm の四角柱の体積は？", display: "(2✕2) ✕ 10", answer: 40 },
                                        { question: "底面積 15㎠、高さ 4cm の角柱の体積は？", display: "15 ✕ 4", answer: 60 },
                                        { question: "体積を出すとき、底面積にかけるものは何？", display: "公式", answer: "高さ", options: ["高さ", "横幅", "重さ"] }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [
                        {
                            title: "1. 比例（ひれい）",
                            subUnits: [
                                {
                                    title: "(1) ともなって変わる量",
                                    content: `<h4>かたほうが 2倍になると…？</h4>
                                    <div class="point-box">
                                        2つの量 ア と イ があって、アが 2倍, 3倍... になると、イも 2倍, 3倍... になるとき、<b>イはアに比例する</b> というよ。
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【正三角形を並べたとき】</b></p>
                                        <p>三角形の数 <b>1, 2, 3...</b><br>
                                        周りの長さ <b>3, 4, 5...</b><br>
                                        これは 比例しているかな？（2倍になっていないから、比例じゃないね！）</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "アが2倍になった時、イも2倍になる関係を何という？", display: "2倍 ➔ 2倍", answer: "比例", options: ["比例", "反比例", "合同"] },
                                        { question: "1個100円のリンゴを買う時、個数と代金の関係は比例？", display: "買い物", answer: "はい", options: ["はい", "いいえ"] },
                                        { question: "自分の年齢と、身長の関係は比例といえる？", display: "成長", answer: "いいえ", options: ["はい", "いいえ"] }
                                    ]
                                }
                            ]
                        },
                                                {
                                                    title: "2. 速さ（はやさ）",
                                                    subUnits: [
                                                        {
                                                            title: "(1) 速さ・道のり・時間",
                                                            content: `<h4>「みはじ」の関係</h4>
                                                            <div class="point-box">
                                                                ・<b>道のり ＝ 速さ ✕ 時間</b><br>
                                                                ・<b>速さ ＝ 道のり ÷ 時間</b><br>
                                                                ・<b>時間 ＝ 道のり ÷ 速さ</b>
                                                            </div>
                                                                                                <div class="data-demo">
                                                                                                    <div style="display:flex; justify-content:center; align-items:center; gap:20px;">
                                                                                                        <div style="width:80px; height:80px; border-radius:50%; border:3px solid #333; position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; font-weight:bold; overflow:hidden;">
                                                                                                            <!-- 上段: み -->
                                                                                                            <div style="flex:1; width:100%; display:flex; justify-content:center; align-items:center; border-bottom:2px solid #333; background:#f9f9f9;">み</div>
                                                                                                            <!-- 下段: は | じ -->
                                                                                                            <div style="flex:1; width:100%; display:flex;">
                                                                                                                <div style="flex:1; display:flex; justify-content:center; align-items:center; border-right:1px solid #333;">は</div>
                                                                                                                <div style="flex:1; display:flex; justify-content:center; align-items:center;">じ</div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div style="font-size:14px;">
                                                                                                            み：<b>道のり（距離）</b><br>
                                                                                                            は：<b>速さ</b><br>
                                                                                                            じ：<b>時間</b>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <p style="margin-top:10px; font-size:12px;">指で かくしたところを 求める式が わかるよ！</p>
                                                                                                </div>
                                                            `,
                                                            quizzes: [
                                                                { question: "150km を 3時間で走った時の時速は？", display: "150 ÷ 3", answer: 50 },
                                                                { question: "時速 4km で 2時間歩いた時の道のりは？", display: "4 ✕ 2", answer: 8 },
                                                                { question: "時速 60km で 180km 進むのにかかる時間は？", display: "180 ÷ 60", answer: 3 },
                                                                { question: "分速 70m で 10分歩くと何m進む？", display: "70 ✕ 10", answer: 700 },
                                                                { question: "速さを求める公式は？", display: "公式", answer: "道のり ÷ 時間", options: ["道のり ÷ 時間", "道のり ✕ 時間", "時間 ÷ 道のり"] }
                                                            ]
                                                        }
                                                    ]
                                                }
                        ,
                        {
                            title: "3. 人口密度（じんこうみつど）",
                            subUnits: [
                                {
                                    title: "(1) 混みぐあいを数値で表す",
                                    content: `<h4>1㎢ あたりに 何人いるか</h4>
                                    <div class="point-box">
                                        <b>人口密度 ＝ 人数 ÷ 面積</b><br>
                                        単位は 「人 / ㎢」 を使うことが多いよ。
                                    </div>
                                    <div class="data-demo">
                                        <table style="width:100%; border-collapse:collapse; text-align:center; background:white; font-size:13px;">
                                            <tr style="background:#f0f0f0; border-bottom:1px solid #ddd;">
                                                <th>地域</th><th>人数</th><th>面積</th><th>人口密度</th>
                                            </tr>
                                            <tr style="border-bottom:1px solid #eee;">
                                                <td>A市</td><td>4000人</td><td>10㎢</td><td><b>400</b></td>
                                            </tr>
                                            <tr>
                                                <td>B市</td><td>6000人</td><td>20㎢</td><td><b>300</b></td>
                                            </tr>
                                        </table>
                                        <p style="margin-top:10px;">A市のほうが、1㎢あたりの人数が多いから「混んでいる」ね！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "面積 5㎢ に 1000人住んでいる町の人口密度は？", display: "1000 ÷ 5", answer: 200 },
                                        { question: "人口密度を出す式は「人数 ÷ ？」", display: "公式", answer: "面積", options: ["面積", "速さ", "重さ"] },
                                        { question: "人口密度が高いほど、その場所はどうなっていますか？", display: "状態", answer: "混んでいる", options: ["混んでいる", "すいている"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. 割合（わりあい）と 百分率",
                            subUnits: [
                                {
                                    title: "(1) 割合・百分率（％）",
                                    content: `<h4>比べられる量・もとにする量</h4>
                                    <div class="point-box">
                                        ・<b>割合 ＝ 比べられる量 ÷ もとにする量</b><br>
                                        ・<b>百分率 ＝ 割合 ✕ 100</b> （単位：％）
                                    </div>
                                    <div class="data-demo">
                                        <p>0.2 ➔ <b>20％</b><br>
                                        0.05 ➔ <b>5％</b><br>
                                        1.2 ➔ <b>120％</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "40人を もとにして 10人の割合を 百分率で表すと？", display: "(10 ÷ 40) ✕ 100", answer: 25 },
                                        { question: "定価 1000円の 20％引きは 何円引き？", display: "1000 ✕ 0.2", answer: 200 },
                                        { question: "800円の 10％の消費税（しょうひぜい）は何円？", display: "800 ✕ 0.1", answer: 80 },
                                        { question: "割合 0.75 は 何％？", display: "0.75 ✕ 100", answer: 75 },
                                        { question: "150％ を 割合（小数）で表すと？", display: "150 ÷ 100", answer: 1.5 }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [
                        {
                            title: "1. 円グラフ（えんぐらふ）",
                            subUnits: [
                                {
                                    title: "(1) 円グラフの特徴",
                                    content: `<h4>全体の 割合を 円で表そう</h4>
                                    <div class="point-box">
                                        円全体を <b>100％</b> として、項目の 大きさを 扇形の 広さで 表したグラフだよ。
                                    </div>
                                    <div class="data-demo">
                                        <div style="width:100px; height:100px; border-radius:50%; border:2px solid #333; margin:0 auto; background: conic-gradient(#3498db 0% 60%, #e74c3c 60% 100%);"></div>
                                        <p style="font-size:11px; margin-top:5px;"><span style="color:#3498db;">● A (60%)</span> / <span style="color:#e74c3c;">● B (40%)</span></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "円グラフ全体を百分率で表すと何％ですか？", display: "全体", answer: 100 },
                                        { question: "円グラフで、項目の大きさは何の広さで表されますか？", display: "扇形の形", answer: "広さ", options: ["広さ", "高さ", "長さ"] },
                                        { question: "一番大きな割合の項目を見つけるのに適したグラフは？", display: "グラフ選び", answer: "円グラフ", options: ["折れ線グラフ", "円グラフ"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 帯グラフ（おびぐらふ）",
                            subUnits: [
                                {
                                    title: "(1) 帯グラフの見方",
                                    content: `<h4>横長の 帯で 比べよう</h4>
                                    <div class="point-box">
                                        長方形を 区切って 割合を表したグラフだよ。複数の グラフを 並べて 比べるのに べんり！
                                    </div>
                                    <div class="data-demo">
                                        <div style="width:200px; height:30px; border:2px solid #333; margin:0 auto; display:flex;">
                                            <div style="width:70%; background:#3498db; height:100%;"></div>
                                            <div style="width:30%; background:#e74c3c; height:100%;"></div>
                                        </div>
                                        <p style="font-size:11px; text-align:center;">左から 割合の大きい順に 並べるのが 基本だよ。</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "帯グラフ全体は何％を表していますか？", display: "全体", answer: 100 },
                                        { question: "帯グラフで、各項目は通常どの順に並べますか？", display: "並び順", answer: "大きい順", options: ["大きい順", "小さい順", "あいうえお順"] },
                                        { question: "割合の変化を2つのグラフで比べるのに適しているのは？", display: "比較", answer: "帯グラフ", options: ["帯グラフ", "円グラフ"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 統計的な 問題解決",
                            subUnits: [
                                {
                                    title: "(1) データの 活用サイクル",
                                    content: `<h4>グラフから 何が言えるかな？</h4>
                                    <div class="point-box">
                                        目的に あわせて データを 集め、適切な グラフを 選んで 分析（ぶんせき）することが 大事だよ。
                                    </div>
                                    <p>・<b>変化</b> を見たい ➔ <b>折れ線グラフ</b><br>
                                    ・<b>割合</b> を見たい ➔ <b>円グラフ・帯グラフ</b></p>`,
                                    quizzes: [
                                        { question: "1年間の気温の変化を調べるのに最適なグラフは？", display: "目的別", answer: "折れ線グラフ", options: ["折れ線グラフ", "円グラフ", "帯グラフ"] },
                                        { question: "クラスの好きな果物の割合を調べるのに最適なグラフは？", display: "目的別", answer: "円グラフ", options: ["折れ線グラフ", "円グラフ"] },
                                        { question: "データを分析する目的は何ですか？", display: "分析の目的", answer: "問題を解決するため", options: ["きれいにするため", "問題を解決するため", "紙を埋めるため"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. 平均（へいきん）",
                            subUnits: [
                                {
                                    title: "(1) 平均の 求め方",
                                    content: `<h4>ならすと いくつ？</h4>
                                    <div class="point-box">
                                        いくつかの 数を 同じ大きさに なるように ならすことを <b>平均</b> というよ。<br>
                                        ・<b>平均 ＝ 合計 ÷ 個数</b>
                                    </div>`,
                                    quizzes: [
                                        { question: "2, 4, 6 の平均は？", display: "(2+4+6) ÷ 3", answer: 4 },
                                        { question: "10, 20, 30, 40 の平均は？", display: "100 ÷ 4", answer: 25 },
                                        { question: "5回のテストが全部80点なら、平均は何点？", display: "同じ数の平均", answer: 80 },
                                        { question: "合計が 150、個数が 5 のとき、平均は？", display: "150 ÷ 5", answer: 30 },
                                        { question: "合計を出す式は「平均 ✕ ？」", display: "逆の計算", answer: "個数", options: ["個数", "最大値", "外れ値"] }
                                    ]
                                },
                                {
                                    title: "(2) 外れ値（はずれち）",
                                    content: `<h4>平均を 変えてしまう 特別な数</h4>
                                    <div class="point-box">
                                        データの中で、他と 比べて 極端（きょくたん）に 大きかったり 小さかったりする 数を <b>外れ値</b> というよ。
                                    </div>
                                    <div class="data-demo">
                                        <p>例：10, 12, 11, <b>90</b>, 13<br>
                                        90 があるせいで、平均が すごく 大きくなってしまうね。<br>
                                        正しい 分析をするために、あえて 外して 考えることもあるよ。</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "他と比べて極端にちがう数値を何という？", display: "名前", answer: "外れ値", options: ["外れ値", "当たり値", "真ん中"] },
                                        { question: "外れ値があると、平均はどうなりますか？", display: "平均への影響", answer: "大きく変わる", options: ["変わらない", "大きく変わる"] },
                                        { question: "外れ値は必ず平均に含めなければなりませんか？", display: "分析のコツ", answer: "いいえ", options: ["はい", "いいえ"] }
                                    ]
                                }
                            ]
                        }
                    ] }
                ]
            },
            e6: {
                name: "小6",
                categories: [
                    { name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>", units: [
                        {
                            title: "1. 分数（ぶんすう）のかけ算",
                            subUnits: [
                                {
                                    title: "(1) 分数 ✕ 整数 / 分数 ✕ 分数",
                                    content: `<h4>分子どうし、分母どうしを かけよう</h4>
                                    <div class="point-box">
                                        ・<b>分数 ✕ 整数</b>：分子に 整数を かける。<br>
                                        ・<b>分数 ✕ 分数</b>：分母は 分母どうし、分子は 分子どうしを かける。
                                    </div>
                                    <div class="data-demo">
                                        <p>2/3 ✕ 4/5 ＝ (2✕4) / (3✕5) ＝ <b>8/15</b></p>
                                        <p>計算の 途中で <b>約分（やくぶん）</b> できるときは、先に しておくと らくになるよ！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "1/3 ✕ 2 は いくつかな？", display: "1/3 ✕ 2", answer: "2/3" },
                                        { question: "2/5 ✕ 3/4 は いくつ？ (約分に注意！)", display: "2/5 ✕ 3/4", answer: "3/10", options: ["3/10", "6/20", "5/9"] },
                                        { question: "3/8 ✕ 4 は いくつかな？", display: "3/8 ✕ 4", answer: "3/2 (1 1/2)", options: ["3/2", "12/8", "3/4"] },
                                        { question: "5/6 ✕ 3/10 は いくつ？", display: "5/6 ✕ 3/10", answer: "1/4", options: ["1/4", "15/60", "1/2"] },
                                        { question: "2/7 ✕ 1/3 は いくつ？", display: "2/7 ✕ 1/3", answer: "2/21" }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 分数（ぶんすう）のわり算",
                            subUnits: [
                                {
                                    title: "(1) ひっくり返して かけよう",
                                    content: `<h4>逆数（ぎゃくすう）を つかおう</h4>
                                    <div class="point-box">
                                        分数の わり算は、わる数の <b>分子と 分母を ひっくり返して（逆数にして）</b> かければいいんだよ！
                                    </div>
                                    <div class="data-demo">
                                        <p>2/3 ÷ 4/5 ＝ 2/3 ✕ <b>5/4</b> ＝ 10/12 ＝ <b>5/6</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "2/3 ÷ 2 は いくつかな？ (2/3 ✕ 1/2)", display: "2/3 ÷ 2", answer: "1/3" },
                                        { question: "3/4 ÷ 1/2 は いくつ？ (3/4 ✕ 2/1)", display: "3/4 ÷ 1/2", answer: "3/2 (1 1/2)", options: ["3/2", "3/8", "2/3"] },
                                        { question: "5/8 ÷ 5/6 は いくつ？", display: "5/8 ÷ 5/6", answer: "3/4", options: ["3/4", "30/40", "25/48"] },
                                        { question: "1/2 ÷ 1/3 は いくつ？", display: "1/2 ÷ 1/3", answer: "3/2 (1 1/2)" },
                                        { question: "わり算をするとき、わる数は どうする？", display: "わりのルール", answer: "ひっくり返してかける", options: ["ひっくり返してかける", "そのままかける", "分子だけかける"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 分数でも成り立つ性質",
                            subUnits: [
                                {
                                    title: "(1) 計算の きまり",
                                    content: `<h4>ルールは 整数と同じ</h4>
                                    <div class="point-box">
                                        分数になっても、交換（こうかん）法則や 分配（ぶんぱい）法則は 成り立つよ。<br>
                                        ・(a + b) ✕ c ＝ a ✕ c + b ✕ c
                                    </div>`,
                                    quizzes: [
                                        { question: "(1/2 + 1/3) ✕ 6 ＝ 1/2 ✕ 6 + 1/3 ✕ 6 ＝ 3 + 2 ＝ ？", display: "計算の工夫", answer: 5 },
                                        { question: "2/3 ✕ 3/4 と 3/4 ✕ 2/3 の答えは同じ？", display: "入れかえ", answer: "はい", options: ["はい", "いいえ"] },
                                        { question: "分数の計算でも分配法則は使えますか？", display: "きまり", answer: "はい", options: ["はい", "いいえ"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. □や△を使った式（分数）",
                            subUnits: [
                                {
                                    title: "(1) 分数の 逆算（ぎゃくさん）",
                                    content: `<h4>□を もとめよう</h4>
                                    <div class="point-box">
                                        分数の 式でも □ を使って 表せるよ。逆の計算で □ を出そう。
                                    </div>`,
                                    quizzes: [
                                        { question: "□ ✕ 1/3 ＝ 2/3 のとき、□は？", display: "2/3 ÷ 1/3", answer: 2 },
                                        { question: "□ ÷ 1/2 ＝ 3/4 のとき、□は？", display: "3/4 ✕ 1/2", answer: "3/8" },
                                        { question: "□ ＋ 1/4 ＝ 3/4 のとき、□は？", display: "3/4 － 1/4", answer: "1/2", options: ["1/2", "2/4", "1"] },
                                        { question: "1 － □ ＝ 1/3 のとき、□は？", display: "1 － 1/3", answer: "2/3" },
                                        { question: "□ ✕ 2/5 ＝ 4/5 のとき、□は？", display: "4/5 ÷ 2/5", answer: 2 }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [
                        {
                            title: "1. 拡大図（かくだいず）と 縮図（しゅくず）",
                            subUnits: [
                                {
                                    title: "(1) 形は同じで 大きさがちがう",
                                    content: `<h4>倍率（ばいりつ）を考えよう</h4>
                                    <div class="point-box">
                                        ・<b>拡大図</b>：形を変えずに 大きくした図。<br>
                                        ・<b>縮図</b>：形を変えずに 小さくした図。<br>
                                        対応する角の大きさは <b>同じ</b> で、辺の長さの <b>比</b> が等しいよ。
                                    </div>`,
                                    quizzes: [
                                        { question: "2倍の拡大図にしたとき、角の大きさはどうなりますか？", display: "角度の変化", answer: "変わらない", options: ["2倍になる", "変わらない", "半分になる"] },
                                        { question: "辺の長さを半分にした図を何といいますか？", display: "図の名前", answer: "縮図", options: ["拡大図", "縮図", "合同な図"] },
                                        { question: "拡大図や縮図で、対応する辺の長さの割合を何といいますか？", display: "用語", answer: "倍率 (比)", options: ["倍率 (比)", "角度", "面積"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 線対称（せんたいしょう）と 点対称（てんたいしょう）",
                            subUnits: [
                                {
                                    title: "(1) 線対称な図形",
                                    content: `<h4>折り目で見よう</h4>
                                    <div class="point-box">
                                        1本の 直線を 折り目にして 重ねたとき、ぴったり重なる図形だよ。<br>
                                        この直線を <b>対称の軸（じく）</b> というよ。
                                    </div>
                                    <div class="data-demo">
                                        <div style="width:80px; height:80px; border:2px solid #333; margin:0 auto; position:relative; clip-path:polygon(50% 0, 100% 100%, 0 100%);">
                                            <div style="width:2px; height:100%; background:red; position:absolute; left:39px; top:0;"></div>
                                        </div>
                                        <p style="font-size:11px; color:red; text-align:center;">赤い線が 対称の軸</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "線対称な図形で、折り目になる線を何という？", display: "線のなまえ", answer: "対称の軸", options: ["対称の軸", "対称の中心", "対角線"] },
                                        { question: "正方形には対称の軸が何本ありますか？", display: "軸の数", answer: 4 },
                                        { question: "二等辺三角形は線対称な図形ですか？", display: "判定", answer: "はい", options: ["はい", "いいえ"] }
                                    ]
                                },
                                {
                                    title: "(2) 点対称な図形",
                                    content: `<h4>180度 まわしてみよう</h4>
                                    <div class="point-box">
                                        1つの 点を中心に <b>180度</b> まわしたとき、もとの図形と ぴったり重なる図形だよ。<br>
                                        この点を <b>対称の中心</b> というよ。
                                    </div>`,
                                    quizzes: [
                                        { question: "点対称な図形は、何中心に何度まわすと重なりますか？", display: "回転角度", answer: 180, options: [90, 180, 360] },
                                        { question: "平行四辺形は点対称な図形ですか？", display: "判定", answer: "はい", options: ["はい", "いいえ"] },
                                        { question: "点対称な図形で、中心を通る直線で分けた2つの図形は合同ですか？", display: "性質", answer: "はい", options: ["はい", "いいえ"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 円の面積",
                            subUnits: [
                                {
                                    title: "(1) 円の面積の公式",
                                    content: `<h4>半径をつかった計算</h4>
                                    <div class="point-box">
                                        ・<b>円の面積 ＝ 半径 ✕ 半径 ✕ 3.14</b>
                                    </div>
                                    <div class="data-demo">
                                        <p>円を 細かく切って 並べかえると、長方形に 近づくことから この公式が生まれるんだよ！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "半径 10cm の円の面積は？", display: "10 ✕ 10 ✕ 3.14", answer: 314 },
                                        { question: "半径 2cm の円の面積は？", display: "2 ✕ 2 ✕ 3.14", answer: 12.56 },
                                        { question: "直径 6cm の円の面積は？ (半径に注意！)", display: "3 ✕ 3 ✕ 3.14", answer: 28.26 },
                                        { question: "半径が 3倍になると、面積は何倍になる？", display: "3 ✕ 3", answer: 9 },
                                        { question: "円の面積を求める公式は？", display: "公式", answer: "半径 ✕ 半径 ✕ 3.14", options: ["半径 ✕ 半径 ✕ 3.14", "直径 ✕ 3.14", "半径 ✕ 2 ✕ 3.14"] }
                                    ]
                                }
                            ]
                        },
                                                {
                                                    title: "4. 立体の体積（たいせき）",
                                                    subUnits: [
                                                        {
                                                            title: "(1) 角柱と 円柱の体積",
                                                            content: `<h4>底面積（ていめんせき）に 注目！</h4>
                                                            <div class="point-box">
                                                                どちらも <b>体積 ＝ 底面積 ✕ 高さ</b> で もとめられるよ！
                                                            </div>
                                                            <div class="data-demo">
                                                                <p><b>【角柱のばあい】</b></p>
                                                                <p>底面（三角形や四角形）の 面積を だしてから、高さを かける。</p>
                                                                <p><b>【円柱のばあい】</b></p>
                                                                <p><b>半径 ✕ 半径 ✕ 3.14</b> で 円の面積（底面積）を だしてから、高さを かける。</p>
                                                            </div>`,
                                                            quizzes: [
                                                                { question: "底面積 30㎠、高さ 5cm の角柱の体積は？", display: "30 ✕ 5", answer: 150 },
                                                                { question: "半径 2cm、高さ 10cm の円柱の体積は？", display: "(2✕2✕3.14) ✕ 10", answer: 125.6 },
                                                                { question: "底面が 1辺5cmの正方形で、高さ 4cm の四角柱の体積は？", display: "(5✕5) ✕ 4", answer: 100 },
                                                                { question: "円柱の体積をだすとき、底面積は何の面積のこと？", display: "円柱の底面", answer: "円の面積", options: ["円の面積", "正方形の面積", "三角形の面積"] },
                                                                { question: "体積 200㎤、高さ 10cm の立体の底面積は？", display: "200 ÷ 10", answer: 20 }
                                                            ]
                                                        }
                                                    ]
                                                }
                        ,
                        {
                            title: "5. おおよその面積と 体積",
                            subUnits: [
                                {
                                    title: "(1) 身の回りのものを 図形にたとえる",
                                    content: `<h4>だいたいの 大きさを 知ろう</h4>
                                    <div class="point-box">
                                        複雑な形も、<b>長方形</b> や <b>直方体</b> など 知っている図形に 見立てることで、だいたいの大きさを 計算できるよ。
                                    </div>`,
                                    quizzes: [
                                        { question: "自分の手のひらの面積をだいたい求めるには、何の形にたとえる？", display: "見立て", answer: "長方形", options: ["円", "長方形", "球"] },
                                        { question: "山のような形の体積をだいたい求めるには、何の形にたとえる？", display: "見立て", answer: "円錐や角錐 (または柱)", options: ["円柱・角柱", "円", "線"] },
                                        { question: "おおよその計算をする時、端数（はすう）はどうしますか？", display: "計算のコツ", answer: "四捨五入などで丸める", options: ["細かく計算する", "四捨五入などで丸める"] }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [
                        {
                            title: "1. 比例（ひれい）",
                            subUnits: [
                                {
                                    title: "(1) 比例のグラフと式",
                                    content: `<h4>まっすぐ 伸びるグラフ</h4>
                                    <div class="point-box">
                                        x が 2倍, 3倍... になると、y も 2倍, 3倍... になる関係だよ。<br>
                                        ・式：<b>y ＝ 決まった数 ✕ x</b><br>
                                        ・グラフ：<b>原点（0,0）を通る 直線</b> になる。
                                    </div>
                                    <div class="data-demo">
                                        <svg width="150" height="100" style="border-left:2px solid #333; border-bottom:2px solid #333; margin:0 auto; display:block;">
                                            <line x1="0" y1="100" x2="140" y2="20" stroke="#3498db" stroke-width="2" />
                                        </svg>
                                    </div>`,
                                    quizzes: [
                                        { question: "xが2倍のときyも2倍になる関係を何という？", display: "変化のきまり", answer: "比例", options: ["比例", "反比例"] },
                                        { question: "比例のグラフはどんな形になりますか？", display: "グラフの形", answer: "直線", options: ["直線", "曲線"] },
                                        { question: "y ＝ 3 ✕ x のとき、x ＝ 4 なら y はいくつ？", display: "3 ✕ 4", answer: 12 },
                                        { question: "y ＝ 2 ✕ x のとき、y ＝ 10 なら x はいくつ？", display: "10 ÷ 2", answer: 5 },
                                        { question: "比例のグラフは必ずどこを通りますか？", display: "グラフの特徴", answer: "原点 (0,0)", options: ["原点 (0,0)", "どこでもいい"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 反比例（はんぴれい）",
                            subUnits: [
                                {
                                    title: "(1) 反比例の性質と式",
                                    content: `<h4>一方が増えると もう一方が減る</h4>
                                    <div class="point-box">
                                        x が 2倍, 3倍... になると、y は <b>1/2倍, 1/3倍...</b> になる関係だよ。<br>
                                        ・式：<b>y ＝ 決まった数 ÷ x</b><br>
                                        ・x ✕ y ＝ 決まった数（いつも一定）
                                    </div>
                                    <div class="data-demo">
                                        <svg width="150" height="100" style="border-left:2px solid #333; border-bottom:2px solid #333; margin:0 auto; display:block;">
                                            <path d="M10,10 Q20,80 140,90" fill="none" stroke="#e74c3c" stroke-width="2" />
                                        </svg>
                                    </div>`,
                                    quizzes: [
                                        { question: "xが2倍のときyが1/2倍になる関係を何という？", display: "変化のきまり", answer: "反比例", options: ["比例", "反比例"] },
                                        { question: "y ＝ 12 ÷ x のとき、x ＝ 3 なら y はいくつ？", display: "12 ÷ 3", answer: 4 },
                                        { question: "x ✕ y の値がいつも一定になるのはどっち？", display: "特徴", answer: "反比例", options: ["比例", "反比例"] },
                                        { question: "y ＝ 24 ÷ x のとき、y ＝ 6 なら x はいくつ？", display: "24 ÷ 6", answer: 4 },
                                        { question: "面積 24㎠ の長方形の「縦 x」と「横 y」の関係は？", display: "具体例", answer: "反比例", options: ["比例", "反比例"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 比（ひ）",
                            subUnits: [
                                {
                                    title: "(1) 比と 比の値",
                                    content: `<h4>割合を 簡単な数で表そう</h4>
                                    <div class="point-box">
                                        ・<b>比</b>：2つの数量の割合を <b>「a : b」</b> と表したもの。<br>
                                        ・<b>比の値</b>：a : b のとき、<b>a ÷ b</b> で計算した数。
                                    </div>`,
                                    quizzes: [
                                        { question: "2 : 3 の比の値を分数で表すと？", display: "2 : 3", answer: "2/3", options: ["2/3", "3/2", "5"] },
                                        { question: "10 : 5 の比の値を整数で表すと？", display: "10 : 5", answer: 2 },
                                        { question: "比 4 : 6 をもっとも簡単な整数の比にすると？", display: "4 : 6", answer: "2 : 3" },
                                        { question: "比の値が 0.5 になる比はどれ？", display: "比の値 0.5", answer: "1 : 2", options: ["1 : 2", "2 : 1", "5 : 1"] },
                                        { question: "x : 10 ＝ 2 : 5 のとき、xはいくつ？", display: "比の計算", answer: 4 }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [
                        {
                            title: "1. 代表値（だいひょうち）",
                            subUnits: [
                                {
                                    title: "(1) 平均・中央値・最頻値",
                                    content: `<h4>データの 特徴をつかもう</h4>
                                    <div class="point-box">
                                        ・<b>平均（へいきん）</b>：合計 ÷ 個数。<br>
                                        ・<b>中央値（メジアン）</b>：大きさ順に並べた 真ん中の値。<br>
                                        ・<b>最頻値（モード）</b>：もっとも多く出てくる値。
                                    </div>
                                    <div class="data-demo">
                                        <p>データ：[1, 2, 2, 3, 7]<br>
                                        ・中央値：<b>2</b><br>
                                        ・最頻値：<b>2</b><br>
                                        ・平均：<b>3</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "[3, 5, 8, 10, 14] の中央値はいくつ？", display: "真ん中の値", answer: 8 },
                                        { question: "[1, 2, 2, 4, 5] の最頻値はいくつ？", display: "一番多い値", answer: 2 },
                                        { question: "[2, 4, 6] の平均はいくつ？", display: "(2+4+6) ÷ 3", answer: 4 },
                                        { question: "データの値が偶数個の時、中央値はどう出す？", display: "中央値の出し方", answer: "真ん中の2つの平均", options: ["真ん中の2つの平均", "大きい方を選ぶ", "小さい方を選ぶ"] },
                                        { question: "他と比べて極端に大きい数値の影響を一番受けやすいのは？", display: "代表値の性質", answer: "平均", options: ["平均", "中央値", "最頻値"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 度数分布表（どすうぶんぷひょう）",
                            subUnits: [
                                {
                                    title: "(1) 階級と度数",
                                    content: `<h4>データを 整理しよう</h4>
                                    <div class="point-box">
                                        ・<b>階級（かいきゅう）</b>：データを区切った区間。<br>
                                        ・<b>度数（どすう）</b>：各階級に入っているデータの数。<br>
                                        ・<b>柱状グラフ（ヒストグラム）</b>：度数分布表をグラフにしたもの。
                                    </div>`,
                                    quizzes: [
                                        { question: "データがいくつあるかを表す数を何という？", display: "用語", answer: "度数", options: ["度数", "階級", "平均"] },
                                        { question: "「10以上〜20未満」のように分けた区間を何という？", display: "用語", answer: "階級", options: ["度数", "階級", "範囲"] },
                                        { question: "度数分布表を棒グラフのような形で表したものを何という？", display: "グラフの名前", answer: "ヒストグラム (柱状グラフ)", options: ["折れ線グラフ", "ヒストグラム", "円グラフ"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 順列（じゅんれつ）",
                            subUnits: [
                                {
                                    title: "(1) 並び方の数",
                                    content: `<h4>順番（じゅんばん）が 大事！</h4>
                                    <div class="point-box">
                                        異なるいくつかのものを <b>順番に並べる</b> ときの 全てのパターンの数だよ。
                                    </div>
                                    <div class="data-demo">
                                        <p>A, B, C の3人を並べる方法：<br>
                                        ABC, ACB, BAC, BCA, CAB, CBA<br>
                                        全部で <b>6通り</b> だね！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "赤、青、黄の3枚のカードを横一列に並べる方法は？", display: "3 ✕ 2 ✕ 1", answer: 6 },
                                        { question: "1, 2, 3, 4 の4つの数字から2桁の数を作る方法は？", display: "4 ✕ 3", answer: 12 },
                                        { question: "A, B の2人を並べる方法は？", display: "2 ✕ 1", answer: 2 },
                                        { question: "3人のリレーの走順（走る順番）を決めるのは順列？", display: "判定", answer: "はい", options: ["はい", "いいえ"] },
                                        { question: "樹形図（じゅけいず）は何をかくときに使いますか？", display: "道具", answer: "全てのパターンを出すとき", options: ["全てのパターンを出すとき", "面積を出すとき"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. 組み合わせ",
                            subUnits: [
                                {
                                    title: "(1) 選び方の数",
                                    content: `<h4>順番は 気にしない！</h4>
                                    <div class="point-box">
                                        順番は関係なく、<b>どのメンバーを選ぶか</b> だけを考えるパターンの数だよ。
                                    </div>
                                    <div class="data-demo">
                                        <p>A, B, C の3人から 2人選ぶ方法：<br>
                                        (A,B), (A,C), (B,C)<br>
                                        全部で <b>3通り</b> だね！</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "4人の中から、掃除当番を2人選ぶ方法は？", display: "4 ✕ 3 ÷ 2", answer: 6 },
                                        { question: "赤、青、白、緑の4色から2色選ぶ方法は？", display: "4 ✕ 3 ÷ 2", answer: 6 },
                                        { question: "3人の中から代表を2人選ぶ方法は？", display: "3 ✕ 2 ÷ 2", answer: 3 },
                                        { question: "5人の中から2人選ぶ方法は？", display: "5 ✕ 4 ÷ 2", answer: 10 },
                                        { question: "選ぶだけの「組み合わせ」は、並べる「順列」より数は多い？少ない？", display: "比較", answer: "少ない", options: ["多い", "少ない", "同じ"] }
                                    ]
                                }
                            ]
                        }
                    ] }
                ]
            },
            j1: {
                name: "中1",
                categories: [
                    { name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>", units: [
                        {
                            title: "1. 正負の数（せいふのすう）",
                            subUnits: [
                                {
                                    title: "(1) 負の数とは",
                                    content: `<h4>0より 小さい数</h4>
                                    <div class="point-box">
                                        ・<b>正の数</b>：0より 大きい数（＋5 など）<br>
                                        ・<b>負の数</b>：0より 小さい数（－3 など）
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【絶対値（ぜったいち）】</b></p>
                                        <p>0 からの 距離のこと。<br>
                                        例：－5 の絶対値は <b>5</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "「－10」の絶対値はいくつ？", display: "絶対値", answer: 10 },
                                        { question: "0より 7 小さい数を表すと？", display: "0 － 7", answer: -7 },
                                        { question: "－3 と －5、大きいのはどっち？", display: "数の大小", answer: "-3", options: ["-3", "-5"] }
                                    ]
                                },
                                {
                                    title: "(2) 加法（たし算）",
                                    content: `<h4>同じ向きか、逆向きか</h4>
                                    <div class="point-box">
                                        ・<b>同じ符号</b>：絶対値をたして、共通の符号をつける。<br>
                                        ・<b>違う符号</b>：絶対値の大きい方から小さい方をひき、大きい方の符号をつける。
                                    </div>`,
                                    quizzes: [
                                        { question: "(－2) ＋ (－3) は？", display: "-2 + -3", answer: -5 },
                                        { question: "(＋5) ＋ (+4) は？", display: "5 + 4", answer: 9 },
                                        { question: "(－8) ＋ (+3) は？", display: "-8 + 3", answer: -5 },
                                        { question: "(＋7) ＋ (－10) は？", display: "7 + -10", answer: -3 },
                                        { question: "(－1.5) ＋ (－0.5) は？", display: "-1.5 + -0.5", answer: -2 }
                                    ]
                                },
                                {
                                    title: "(3) 減法（ひき算）",
                                    content: `<h4>たし算になおして計算</h4>
                                    <div class="point-box">
                                        <b>ひく数の 符号を 逆（＋ ➔ －、－ ➔ ＋）</b> にして、たし算になおそう！
                                    </div>
                                    <div class="data-demo">
                                        <p>5 － (－3) ➔ 5 <b>＋ (＋3)</b> ＝ 8</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "(＋4) － (＋9) は？", display: "4 - 9", answer: -5 },
                                        { question: "(－6) － (－2) は？", display: "-6 - (-2)", answer: -4 },
                                        { question: "(－3) － (+5) は？", display: "-3 - 5", answer: -8 },
                                        { question: "0 － (－12) は？", display: "0 - (-12)", answer: 12 },
                                        { question: "(－7) － (－7) は？", display: "-7 - (-7)", answer: 0 }
                                    ]
                                },
                                {
                                    title: "(4) 乗法（かけ算）",
                                    content: `<h4>マイナスの個数に注目</h4>
                                    <div class="point-box">
                                        ・<b>マイナスが 1個（奇数）</b> ➔ 答えは <b>マイナス</b><br>
                                        ・<b>マイナスが 2個（偶数）</b> ➔ 答えは <b>プラス</b>
                                    </div>`,
                                    quizzes: [
                                        { question: "(－3) ✕ (+6) は？", display: "-3 ✕ 6", answer: -18 },
                                        { question: "(－4) ✕ (－5) は？", display: "-4 ✕ -5", answer: 20 },
                                        { question: "(＋2) ✕ (－8) は？", display: "2 ✕ -8", answer: -16 },
                                        { question: "(－1) ✕ (－1) ✕ (－1) は？", display: "-1 ✕ -1 ✕ -1", answer: -1 },
                                        { question: "0 ✕ (－99) は？", display: "0 ✕ -99", answer: 0 }
                                    ]
                                },
                                {
                                    title: "(5) 除法（わり算）",
                                    content: `<h4>符号のルールはかけ算と同じ</h4>
                                    <div class="point-box">
                                        ・<b>（－） ÷ （－） ＝ （＋）</b><br>
                                        ・<b>（＋） ÷ （－） ＝ （－）</b>
                                    </div>`,
                                    quizzes: [
                                        { question: "(－15) ÷ (－3) は？", display: "-15 ÷ -3", answer: 5 },
                                        { question: "(－24) ÷ (＋4) は？", display: "-24 ÷ 4", answer: -6 },
                                        { question: "(＋10) ÷ (－5) は？", display: "10 ÷ -5", answer: -2 },
                                        { question: "0 ÷ (－8) は？", display: "0 ÷ -8", answer: 0 },
                                        { question: "(－100) ÷ (－10) は？", display: "-100 ÷ -10", answer: 10 }
                                    ]
                                },
                                {
                                    title: "(6) 累乗（るいじょう）",
                                    content: `<h4>同じ数を 何回もかけよう</h4>
                                    <div class="point-box">
                                        ・<b>2乗（平方）</b>：a ✕ a ＝ a²<br>
                                        ・<b>3乗（立方）</b>：a ✕ a ✕ a ＝ a³<br>
                                        <br>
                                        <b>【注意！】</b> カッコがあるかないかで 答えが変わるよ！<br>
                                        ・<b>(－3)²</b> ＝ (－3) ✕ (－3) ＝ <b>9</b><br>
                                        ・<b>－3²</b> ＝ －(3 ✕ 3) ＝ <b>－9</b>
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【2のn乗の 規則性】</b></p>
                                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; font-size:13px;">
                                            <div>
                                                2¹ ＝ 2<br>2² ＝ 4<br>2³ ＝ 8<br>2⁴ ＝ 16<br>2⁵ ＝ 32
                                            </div>
                                            <div>
                                                2⁶ ＝ 64<br>2⁷ ＝ 128<br>2⁸ ＝ 256<br>2⁹ ＝ 512<br>2¹⁰ ＝ <b>1024</b>
                                            </div>
                                        </div>
                                        <p style="margin-top:10px; font-size:12px;">2¹⁰ の <b>1024</b> は、コンピュータの世界（キロバイトなど）でも よく使われる 重要な数字だよ！</p>
                                        <p><b>【0乗（発展）】</b></p>
                                        <p>どんな数でも（0以外）、<b>0乗すると 1</b> になるという ルールがあるよ！<br>
                                        例：2⁰ ＝ 1, 100⁰ ＝ 1</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "(－4)² は いくつ？", display: "(-4) ✕ (-4)", answer: 16 },
                                        { question: "－2⁴ は いくつ？ (2の4乗にマイナス)", display: "-(2✕2✕2✕2)", answer: -16 },
                                        { question: "2の10乗（2¹⁰）は いくつ？", display: "1024", answer: 1024 },
                                        { question: "2の6乗（2⁶）は いくつ？", display: "64", answer: 64 },
                                        { question: "「5⁰」は いくつになる？ (発展)", display: "5の0乗", answer: 1 }
                                    ]
                                },
                                {
                                    title: "(7) 四則の混じった計算と 性質",
                                    content: `<h4>計算の じゅんばん</h4>
                                    <div class="point-box">
                                        ① 累乗（指数）➔ ② カッコ内 ➔ ③ かけ算・わり算 ➔ ④ たし算・ひき算
                                    </div>
                                    <p>分配法則 a(b + c) ＝ ab + ac も活用しよう！</p>`,
                                    quizzes: [
                                        { question: "5 ＋ (－2) ✕ 3 は？", display: "5 + (-6)", answer: -1 },
                                        { question: "12 ÷ (－2)² は？", display: "12 ÷ 4", answer: 3 },
                                        { question: "(－3) ✕ 102 ➔ －3 ✕ (100＋2) ➔ ？", display: "分配法則", answer: -306 }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 自然数（しぜんすう）と 素因数分解",
                            subUnits: [
                                {
                                    title: "(1) 自然数と 素数",
                                    content: `<h4>数の なかま分け</h4>
                                    <div class="point-box">
                                        ・<b>自然数</b>：正の整数（1, 2, 3...）。 ※ 0 は入らないよ。<br>
                                        ・<b>素数</b>：1 と その数 自身でしか わり切れない 1より大きい数。
                                    </div>`,
                                    quizzes: [
                                        { question: "10 以下の 素数を すべて言うと？", display: "2, 3, 5, 7", answer: "2, 3, 5, 7", options: ["2, 3, 5, 7", "1, 3, 5, 7, 9", "2, 4, 6, 8"] },
                                        { question: "「1」は 素数ですか？", display: "判定", answer: "いいえ", options: ["はい", "いいえ"] },
                                        { question: "もっとも 小さい 自然数は何？", display: "自然数", answer: 1 }
                                    ]
                                },
                                {
                                    title: "(2) 素因数分解（そいんすうぶんかい）",
                                    content: `<h4>素数の かけ算に 分解しよう</h4>
                                    <div class="point-box">
                                        自然数を 素数だけの かけ算の形に 表すことだよ。
                                    </div>
                                    <div class="data-demo">
                                        <p>12 ＝ 2 ✕ 2 ✕ 3 ＝ <b>2² ✕ 3</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "「6」を 素因数分解すると？", display: "6", answer: "2 ✕ 3" },
                                        { question: "「20」を 素因数分解すると？", display: "20", answer: "2² ✕ 5" },
                                        { question: "「18」を 素因数分解すると？", display: "18", answer: "2 ✕ 3²" },
                                        { question: "「25」を 素因数分解すると？", display: "25", answer: "5²" },
                                        { question: "「30」を 素因数分解すると？", display: "30", answer: "2 ✕ 3 ✕ 5" }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 文字（もじ）の式",
                            subUnits: [
                                {
                                    title: "(1) 文字を使った 式のルール",
                                    content: `<h4>✕（かける）を はぶいて書こう</h4>
                                    <div class="point-box">
                                        ・✕ は 書かない。（a ✕ b ➔ <b>ab</b>）<br>
                                        ・数字を 文字の <b>前</b> に書く。（x ✕ 3 ➔ <b>3x</b>）<br>
                                        ・1 は 書かない。（1 ✕ x ➔ <b>x</b>）
                                    </div>`,
                                    quizzes: [
                                        { question: "a ✕ (－5) を ルール通りに 書くと？", display: "a ✕ -5", answer: "-5a" },
                                        { question: "x ✕ y ✕ x を ルール通りに 書くと？", display: "x ✕ y ✕ x", answer: "x²y" },
                                        { question: "a ÷ 4 を 分数で 書くと？", display: "a ÷ 4", answer: "a/4" },
                                        { question: "x ＝ 3 のとき、5x － 2 の値は？ (代入)", display: "5 ✕ 3 - 2", answer: 13 },
                                        { question: "3x ＋ 2x を 計算すると？", display: "3x + 2x", answer: "5x" }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. 一次方程式（いちじほうていしき）",
                            subUnits: [
                                {
                                    title: "(1) 方程式の 解き方",
                                    content: `<h4>移項（いこう）を マスターしよう</h4>
                                    <div class="point-box">
                                        ＝（わ）を こえて 反対側に 行くとき、<b>符号（＋や－）が 逆になる</b> よ！
                                    </div>
                                    <div class="data-demo">
                                        <p>x ＋ 3 ＝ 10<br>
                                        ↓ 3を 右に 移項<br>
                                        x ＝ 10 <b>－ 3</b><br>
                                        x ＝ <b>7</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "x － 5 ＝ 2 のとき、xは？", display: "x - 5 = 2", answer: 7 },
                                        { question: "3x ＝ 12 のとき、xは？", display: "3x = 12", answer: 4 },
                                        { question: "2x ＋ 1 ＝ 9 のとき、xは？", display: "2x = 8", answer: 4 },
                                        { question: "5x ＝ 2x ＋ 6 のとき、xは？", display: "3x = 6", answer: 2 },
                                        { question: "方程式の答えのことを 何という？", display: "用語", answer: "解 (かい)", options: ["解 (かい)", "係数", "符号"] }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [
                        {
                            title: "1. 平面図形の 作図（さくず）",
                            subUnits: [
                                {
                                    title: "(1) 基本の 作図",
                                    content: `<h4>コンパスと 定規だけで かこう</h4>
                                    <div class="point-box">
                                        ・<b>垂直二等分線</b>：線分を 垂直に 2等分する線。<br>
                                        ・<b>角の二等分線</b>：角を 2等分する線。<br>
                                        ・<b>垂線</b>：点を通って直線に 垂直（90°）に交わる線。
                                    </div>
                                    <div class="data-demo" style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;">
                                        <div style="text-align:center; width:100px;">
                                            <div style="width:100px; height:60px; position:relative; border-bottom:2px solid #333; margin:0 auto;">
                                                <div style="width:2px; height:80px; background:red; position:absolute; left:49px; top:-10px;"></div>
                                                <div style="width:40px; height:40px; border:1px dashed #aaa; border-radius:50%; position:absolute; left:30px; top:-20px;"></div>
                                            </div>
                                            <p style="font-size:10px;">垂直二等分線</p>
                                        </div>
                                        <div style="text-align:center; width:100px;">
                                            <div style="width:100px; height:60px; position:relative; margin:0 auto;">
                                                <div style="width:80px; height:2px; background:#333; position:absolute; bottom:0; left:10px;"></div>
                                                <div style="width:80px; height:2px; background:#333; position:absolute; bottom:0; left:10px; transform:rotate(-45deg); transform-origin:left center;"></div>
                                                <div style="width:100px; height:2px; background:red; position:absolute; bottom:0; left:10px; transform:rotate(-22.5deg); transform-origin:left center;"></div>
                                            </div>
                                            <p style="font-size:10px;">角の二等分線</p>
                                        </div>
                                        <div style="text-align:center; width:100px;">
                                            <div style="width:100px; height:60px; position:relative; border-bottom:2px solid #333; margin:0 auto;">
                                                <div style="width:4px; height:4px; background:black; border-radius:50%; position:absolute; left:48px; top:10px;"></div>
                                                <div style="width:2px; height:50px; background:red; position:absolute; left:49px; top:10px;"></div>
                                                <div style="width:10px; height:10px; border-top:1px solid red; border-right:1px solid red; position:absolute; bottom:0; left:49px;"></div>
                                            </div>
                                            <p style="font-size:10px;">垂線</p>
                                        </div>
                                    </div>`,
                                    quizzes: [
                                        { question: "線分を垂直に半分に分ける線を何という？", display: "用語", answer: "垂直二等分線", options: ["垂直二等分線", "角の二等分線", "平行線"] },
                                        { question: "垂直二等分線上の点から、線分の両端までの距離はどうなっていますか？", display: "性質", answer: "等しい", options: ["等しい", "ちがう", "2倍になる"] },
                                        { question: "角の二等分線上の点から、2つの辺までの距離はどうなっていますか？", display: "性質", answer: "等しい", options: ["等しい", "ちがう"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 図形の 移動（いどう）",
                            subUnits: [
                                {
                                    title: "(1) 3つの 移動",
                                    content: `<h4>形を変えずに 位置をかえる</h4>
                                    <div class="point-box">
                                        ・<b>平行移動</b>：一定の方向に 一定の長さだけ ずらす。<br>
                                        ・<b>回転移動</b>：1つの点を中心に 一定の角度だけ まわす。<br>
                                        ・<b>対称移動</b>：1つの直線を軸として 裏返す。
                                    </div>`,
                                    quizzes: [
                                        { question: "形を変えずに、向きを変えずにずらす移動を何という？", display: "移動の名前", answer: "平行移動", options: ["平行移動", "回転移動", "対称移動"] },
                                        { question: "1つの点（中心）のまわりにまわす移動を何という？", display: "移動の名前", answer: "回転移動", options: ["平行移動", "回転移動", "対称移動"] },
                                        { question: "対称移動で、対応する点をつなぐ線分と対称の軸の関係は？", display: "性質", answer: "垂直に交わる", options: ["平行になる", "垂直に交わる", "重なる"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 空間図形（くうかんずけい）",
                            subUnits: [
                                {
                                    title: "(1) 位置関係と 回転体",
                                    content: `<h4>立体を イメージしよう</h4>
                                    <div id="explanation-container" style="background: #ffffff; padding: 15px; border: 1px solid #cccccc; border-radius: 8px; font-family: sans-serif; margin-bottom:15px;">
                                        <h5 style="margin-top: 0; border-bottom: 2px solid #333333; padding-bottom: 5px;">空間図形：ねじれの位置の解説</h5>
                                        <div style="position: relative; width: 260px; height: 260px; margin: 10px auto;">
                                            <canvas id="nejire-canvas" width="260" height="260" style="width:100%; height:auto;"></canvas>
                                        </div>
                                        <div id="explanation-text" style="background: #f9f9f9; padding: 10px; border-radius: 5px; min-height: 50px; font-size: 13px; line-height: 1.4;">
                                            下のボタンをクリックして、辺の関係を確認してください。
                                        </div>
                                        <div style="display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; justify-content: center;">
                                            <button onclick="showRelation('parallel')" style="padding: 5px 10px; cursor: pointer; font-size:12px;">平行な辺</button>
                                            <button onclick="showRelation('intersect')" style="padding: 5px 10px; cursor: pointer; font-size:12px;">交わる辺</button>
                                            <button onclick="showRelation('skew')" style="padding: 5px 10px; cursor: pointer; background: #d93025; color: white; border: none; border-radius: 4px; font-weight: bold; font-size:12px;">ねじれの位置</button>
                                            <button onclick="resetCanvas()" style="padding: 5px 10px; cursor: pointer; background: #eeeeee; border: 1px solid #cccccc; font-size:12px;">リセット</button>
                                        </div>
                                    </div>
                                    <script>
                                        (function() {
                                            const nCanvas = document.getElementById('nejire-canvas');
                                            const nCtx = nCanvas.getContext('2d');
                                            const pts = {
                                                A: [50, 70],  B: [180, 70],  C: [230, 30],  D: [100, 30],
                                                E: [50, 200], F: [180, 200], G: [230, 160], H: [100, 160]
                                            };
                                            function drawLine(p1, p2, color = '#dddddd', width = 2) {
                                                nCtx.beginPath();
                                                nCtx.strokeStyle = color;
                                                nCtx.lineWidth = width;
                                                nCtx.moveTo(p1[0], p1[1]);
                                                nCtx.lineTo(p2[0], p2[1]);
                                                nCtx.stroke();
                                            }
                                            window.drawBaseBox = function() {
                                                nCtx.clearRect(0, 0, nCanvas.width, nCanvas.height);
                                                drawLine(pts.D, pts.C); drawLine(pts.C, pts.G); drawLine(pts.G, pts.H); drawLine(pts.H, pts.D);
                                                drawLine(pts.A, pts.B); drawLine(pts.B, pts.F); drawLine(pts.F, pts.E); drawLine(pts.E, pts.A);
                                                drawLine(pts.A, pts.D); drawLine(pts.B, pts.C); drawLine(pts.F, pts.G); drawLine(pts.E, pts.H);
                                                drawLine(pts.A, pts.B, '#1a73e8', 5);
                                                nCtx.fillStyle = '#1a73e8';
                                                nCtx.font = 'bold 12px sans-serif';
                                                nCtx.fillText('基準となる辺', 80, 60);
                                            };
                                            window.showRelation = function(type) {
                                                drawBaseBox();
                                                const display = document.getElementById('explanation-text');
                                                if (type === 'parallel') {
                                                    const targets = [[pts.E, pts.F], [pts.D, pts.C], [pts.H, pts.G]];
                                                    targets.forEach(t => drawLine(t[0], t[1], '#34a853', 5));
                                                    display.innerHTML = "<strong>平行な辺：</strong> 基準と同じ向きの辺です。これらは基準の辺と同じ平面上にあります。";
                                                } else if (type === 'intersect') {
                                                    const targets = [[pts.A, pts.D], [pts.A, pts.E], [pts.B, pts.C], [pts.B, pts.F]];
                                                    targets.forEach(t => drawLine(t[0], t[1], '#f9ab00', 5));
                                                    display.innerHTML = "<strong>交わる辺：</strong> 頂点で基準の辺とつながっている辺です。";
                                                } else if (type === 'skew') {
                                                    const targets = [[pts.D, pts.H], [pts.C, pts.G], [pts.E, pts.H], [pts.F, pts.G]];
                                                    targets.forEach(t => drawLine(t[0], t[1], '#d93025', 5));
                                                    display.innerHTML = "<strong>ねじれの位置：</strong> 「平行ではなく」かつ「交わらない」関係です。これらは基準の辺と<strong>同じ平面上に存在しません。</strong>";
                                                }
                                            };
                                            window.resetCanvas = function() {
                                                drawBaseBox();
                                                document.getElementById('explanation-text').innerText = "下のボタンをクリックして、辺の関係を確認してください。";
                                            };
                                            drawBaseBox();
                                        })();
                                    </script>
                                    <div class="point-box" style="margin-top:10px;">
                                        ・<b>回転体</b>：平面図形を 1回転させてできる立体。<br>
                                        ・<b>投影図</b>：立面図（正面）と 平面図（真上）。
                                    </div>`,
                                    quizzes: [
                                        { question: "同じ平面になく、平行でも交わりもしない位置関係を？", display: "用語", answer: "ねじれの位置", options: ["平行", "垂直", "ねじれの位置"] },
                                        { question: "長方形を1回転させると、どんな立体になりますか？", display: "回転体", answer: "円柱", options: ["円柱", "円錐", "球"] },
                                        { question: "直角三角形を1回転させると、どんな立体になりますか？", display: "回転体", answer: "円錐", options: ["円柱", "円錐", "球"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. おうぎ形・表面積・体積",
                            subUnits: [
                                {
                                    title: "(1) おうぎ形 の計算",
                                    content: `<h4>円の一部を 考えよう</h4>
                                    <div class="point-box">
                                        ・<b>弧（こ）の長さ ＝ 直径 ✕ 3.14 ✕（中心角/360）</b><br>
                                        ・<b>おうぎ形の面積 ＝ 半径 ✕ 半径 ✕ 3.14 ✕（中心角/360）</b>
                                    </div>`,
                                    quizzes: [
                                        { question: "半径 6cm、中心角 120° のおうぎ形の面積は？ (円の1/3)", display: "6 ✕ 6 ✕ 3.14 ✕ (120/360)", answer: 37.68 },
                                        { question: "半径 10cm、中心角 90° のおうぎ形の弧の長さは？ (円の1/4)", display: "20 ✕ 3.14 ÷ 4", answer: 15.7 },
                                        { question: "半径 4cm、中心角 180° のおうぎ形の面積は？ (半円)", display: "4 ✕ 4 ✕ 3.14 ÷ 2", answer: 25.12 },
                                        { question: "中心角が 360° のおうぎ形は、何の形と同じですか？", display: "形", answer: "円", options: ["円", "半円", "三角形"] },
                                        { question: "おうぎ形の面積は、中心角の大きさに比例しますか？", display: "性質", answer: "はい", options: ["はい", "いいえ"] }
                                    ]
                                },
                                {
                                    title: "(2) 表面積 と 体積（錐体・球）",
                                    content: `<h4>尖（とが）った形 と 丸い形</h4>
                                    <div class="point-box">
                                        ・<b>錐体（すいたい）の体積 ＝ 底面積 ✕ 高さ ÷ 3</b><br>
                                        ・<b>球の体積 ＝ (4/3) ✕ 3.14 ✕ 半径³</b><br>
                                        ・<b>球の表面積 ＝ 4 ✕ 3.14 ✕ 半径²</b>
                                    </div>`,
                                    quizzes: [
                                        { question: "底面積 30㎠、高さ 9cm の角錐の体積は？", display: "30 ✕ 9 ÷ 3", answer: 90 },
                                        { question: "半径 3cm の球の表面積は？ (4 ✕ 3.14 ✕ 3²)", display: "4 ✕ 3.14 ✕ 9", answer: 113.04 },
                                        { question: "錐（すい）の体積は、同じ底面・高さの柱の体積の何倍？", display: "比較", answer: "1/3倍", options: ["1/2倍", "1/3倍", "3倍"] },
                                        { question: "球の表面積を覚える呪文は？", display: "覚え方", answer: "心配ある事情", options: ["身の上に心配あり", "心配ある事情"] },
                                        { question: "底面積 20㎠、高さ 6cm の円錐の体積は？", display: "20 ✕ 6 ÷ 3", answer: 40 }
                                    ]
                                }
                            ]
                        }
                    ] },
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
        name: "<ruby>理科<rt>理科</rt></ruby>", 
        grades: {
            e3: { name: "小3", categories: [{ name: "生き物", units: [{ title: "昆虫", subUnits: [{ title: "チョウの育ち方", content: "たまごから成虫までを調べよう。" }] }] }] }
        } 
    },
    social: { 
        name: "<ruby>社会<rt>社会</rt></ruby>", 
        grades: {
            e3: { name: "小3", categories: [{ name: "町", units: [{ title: "わたしたちの町", subUnits: [{ title: "町の地図", content: "地図記号を覚えよう。" }] }] }] }
        } 
    },
    english: { 
        name: "<ruby>英語<rt>英語</rt></ruby>", 
        grades: {
            j1: { name: "中1", categories: [{ name: "文法", units: [{ title: "be動詞", subUnits: [{ title: "I am / You are", content: "自己紹介をしてみよう。" }] }] }] }
        } 
    }
};

window.onload = () => {
    const homeView = document.getElementById('home-view');
    const gradeView = document.getElementById('grade-view');
    const categoryView = document.getElementById('category-view');
    const unitView = document.getElementById('unit-view');
    const subUnitView = document.getElementById('sub-unit-view');
    const contentView = document.getElementById('content-view');
    const quizView = document.getElementById('quiz-view');

    const categoryList = document.getElementById('category-list');
    const unitList = document.getElementById('unit-list');
    const subUnitList = document.getElementById('sub-unit-list');

    const selectedGradeName = document.getElementById('selected-grade-name');
    const selectedCategoryName = document.getElementById('selected-category-name');
    const selectedUnitName = document.getElementById('selected-unit-name');

    const contentTitle = document.getElementById('content-title');
    const contentBody = document.getElementById('content-body');
    const quizViewBody = document.getElementById('quiz-view-body');
    const breadcrumb = document.getElementById('breadcrumb');

    const homeBtn = document.getElementById('home-btn');
    const backToHomeBtn = document.getElementById('back-to-home-btn');
    const backToGradeBtn = document.getElementById('back-to-grade-btn');
    const backToCategoryBtn = document.getElementById('back-to-category-btn');
    const backToUnitBtn = document.getElementById('back-to-unit-btn');
    const backToSubUnitBtn = document.getElementById('back-to-sub-unit-btn');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const backToContentBtn = document.getElementById('back-to-content-btn');

    let currentSubject = 'math';
    let currentGrade = '';
    let currentCategoryIndex = -1;
    let currentUnitIndex = -1;
    let currentSubUnit = null;
    let currentInput = "";
    let currentQuizIndex = 0;
    let correctCount = 0;
    let shuffledQuizzes = []; 

    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

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

    function showContent(s) {
        currentSubUnit = s;
        currentQuizIndex = 0;
        correctCount = 0;
        
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

        // コンテンツ内のスクリプトを実行できるようにする
        const scripts = contentBody.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
            const newScript = document.createElement('script');
            newScript.text = scripts[i].innerText;
            document.head.appendChild(newScript).parentNode.removeChild(newScript);
        }
        
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
        if (index === 0) correctCount = 0; 
        
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
                    <div class="quiz-options" style="margin-top: 20px;">
                        ${q.options.map(opt => `<button class="quiz-btn" style="width: auto; min-width: 80px; padding: 10px;">${opt}</button>`).join('')}
                    </div>
                ` : `
                    <div style="display:flex; justify-content:center; align-items:center;">
                        <div class="quiz-input-display" id="input-display"> </div>
                        <button class="clear-btn" id="quiz-clear-btn">けす</button>
                    </div>

                    <div class="numeric-pad" id="numeric-pad">
                        ${[1,2,3,4,5,6,7,8,9,0].map(n => `<button class="quiz-btn">${n}</button>`).join('')}
                        <button class="quiz-btn" style="background:#fffbe6;">じ</button>
                        <button class="quiz-btn" style="background:#fffbe6;">はん</button>
                    </div>
                    
                    <button class="answer-btn" id="quiz-submit-btn">こたえあわせ</button>
                `}
                <div class="quiz-feedback" id="quiz-feedback"></div>
            </div>
        `;

        if (q.options) {
            const btns = quizViewBody.querySelectorAll('.quiz-options .quiz-btn');
            btns.forEach(btn => {
                btn.onclick = () => checkPictorialAnswer(btn, q.answer);
            });
        } else {
            const padBtns = quizViewBody.querySelectorAll('#numeric-pad .quiz-btn');
            padBtns.forEach(btn => {
                btn.onclick = () => typeNumber(btn.innerText);
            });
            quizViewBody.querySelector('#quiz-clear-btn').onclick = clearNumber;
            quizViewBody.querySelector('#quiz-submit-btn').onclick = submitAnswer;
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
        btns.forEach(b => b.disabled = true); 

        const selectedVal = btn.innerText;
        const isCorrect = (selectedVal == correctVal); 

        if (isCorrect) {
            btn.classList.add('correct');
            correctCount++;
            feedback.innerHTML = `<div style="color: #2ecc71; margin-bottom: 15px; font-size: 24px;">✨ せいかい！ ✨</div>`;
        } else {
            btn.classList.add('wrong');
            feedback.innerHTML = `
                <div style="color: #ff7675; margin-bottom: 15px; font-size: 20px;">ざんねん！<br>もういちど かんがえてみてね.</div>
            `;
        }

        const isLast = currentQuizIndex === shuffledQuizzes.length - 1;
        if (!isLast) {
            feedback.innerHTML += `<button class="action-btn" id="next-quiz-btn">つぎの もんだいへ</button>`;
            document.getElementById('next-quiz-btn').onclick = () => startQuiz(currentQuizIndex + 1);
        } else {
            feedback.innerHTML += `<button class="action-btn" id="results-btn">さいごの けっかを見る</button>`;
            document.getElementById('results-btn').onclick = showResults;
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
                <div style="color: #ff7675; margin-bottom: 15px; font-size: 20px;">ざんねん！<br>もういちど かんがえてみてね.</div>
            `;
        }

        if (!isLast) {
            feedback.innerHTML += `<button class="action-btn" id="next-quiz-btn">つぎの もんだいへ</button>`;
            document.getElementById('next-quiz-btn').onclick = () => startQuiz(currentQuizIndex + 1);
        } else {
            feedback.innerHTML += `<button class="action-btn" id="results-btn">さいごの けっかを見る</button>`;
            document.getElementById('results-btn').onclick = showResults;
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
                <button class="action-btn" style="background:#95a5a6" id="back-study-btn">お勉強（べんきょう）にもどる</button>
                <button class="action-btn" style="margin-top:10px" id="retry-quiz-btn">もういちど くいずをやる</button>
            </div>
        `;
        
        document.getElementById('back-study-btn').onclick = () => showContent(currentSubUnit);
        document.getElementById('retry-quiz-btn').onclick = () => {
            showContent(currentSubUnit);
            setTimeout(() => startQuiz(0), 10);
        };

        updateBreadcrumb([
            { label: 'ホーム', action: showHome },
            { label: studyData[currentSubject].name, action: showGrades },
            { label: 'けっか' }
        ]);
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

    homeBtn.onclick = showHome;
    document.querySelectorAll('.subject-card').forEach(c => { c.onclick = () => { currentSubject = c.dataset.subject; showGrades(); }; });
    document.querySelectorAll('.grade-card').forEach(c => { c.onclick = () => { currentGrade = c.dataset.grade; showCategories(); }; });
    backToHomeBtn.onclick = showHome;
    backToGradeBtn.onclick = showGrades;
    backToCategoryBtn.onclick = showCategories;
    backToUnitBtn.onclick = () => showUnits(currentCategoryIndex);
    backToSubUnitBtn.onclick = () => showSubUnits(currentUnitIndex);

    if (startQuizBtn) startQuizBtn.onclick = () => startQuiz(0);
    if (backToContentBtn) backToContentBtn.onclick = () => showContent(currentSubUnit);

    // --- メモ機能（お絵かき & テキスト）のロジック ---
    const memoContainer = document.getElementById('memo-container');
    const memoCanvas = document.getElementById('memo-canvas');
    const textMemoWrapper = document.getElementById('text-memo-wrapper');
    const memoTextarea = document.getElementById('memo-textarea');
    const penWidthInput = document.getElementById('pen-width');
    const toggleMemoBtn = document.getElementById('toggle-memo-btn');
    const toggleModeBtn = document.getElementById('toggle-mode-btn');
    const clearMemoBtn = document.getElementById('clear-memo-btn');
    const closeMemoBtn = document.getElementById('close-memo-btn');
    const penToolBtn = document.getElementById('pen-tool-btn');
    const eraserToolBtn = document.getElementById('eraser-tool-btn');
    const ctx = memoCanvas.getContext('2d');

    let isDrawing = false;
    let isTextMode = false;
    let currentTool = 'pen'; // 'pen' または 'eraser'
    let lastX = 0;
    let lastY = 0;

    function resizeCanvas() {
        const rect = memoCanvas.getBoundingClientRect();
        if (rect.width === 0) return;
        memoCanvas.width = rect.width;
        memoCanvas.height = rect.height;
        applyStrokeSettings();
    }

    function applyStrokeSettings() {
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = penWidthInput.value;
        ctx.lineCap = 'round';      
        ctx.lineJoin = 'round';
        
        if (currentTool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = penWidthInput.value * 2; 
        } else {
            ctx.globalCompositeOperation = 'source-over';
        }
    }

    penWidthInput.oninput = () => {
        applyStrokeSettings();
    };

    penToolBtn.onclick = () => {
        currentTool = 'pen';
        penToolBtn.classList.add('active');
        eraserToolBtn.classList.remove('active');
        applyStrokeSettings();
    };

    eraserToolBtn.onclick = () => {
        currentTool = 'eraser';
        eraserToolBtn.classList.add('active');
        penToolBtn.classList.remove('active');
        applyStrokeSettings();
    };

    function getPos(e) {
        const rect = memoCanvas.getBoundingClientRect();
        let clientX, clientY;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        const scaleX = memoCanvas.width / rect.width;
        const scaleY = memoCanvas.height / rect.height;
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    }

    function startDraw(e) {
        if (isTextMode) return;
        if (memoCanvas.width === 0) resizeCanvas();
        isDrawing = true;
        const { x, y } = getPos(e);
        lastX = x; lastY = y;
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    function draw(e) {
        if (!isDrawing || isTextMode) return;
        const { x, y } = getPos(e);
        ctx.lineTo(x, y);
        ctx.stroke();
        lastX = x; lastY = y;
        if (e.touches) e.preventDefault(); 
    }

    function stopDraw() {
        isDrawing = false;
        ctx.closePath();
    }

    toggleModeBtn.onclick = () => {
        isTextMode = !isTextMode;
        const memoBox = document.querySelector('.memo-box');
        const penControl = document.querySelector('.pen-control');
        const toolGroup = document.querySelector('.tool-group');
        
        if (isTextMode) {
            memoCanvas.classList.add('hidden');
            textMemoWrapper.classList.remove('hidden');
            penControl.classList.add('hidden');
            toolGroup.classList.add('hidden');
            memoBox.style.background = '#fff'; 
            toggleModeBtn.innerText = '✏️ お絵かき';
            memoTextarea.focus();
        } else {
            memoCanvas.classList.remove('hidden');
            textMemoWrapper.classList.add('hidden');
            penControl.classList.remove('hidden');
            toolGroup.classList.remove('hidden');
            memoBox.style.background = 'rgba(255, 255, 255, 0.2)'; 
            toggleModeBtn.innerText = '⌨️ 文字入力';
            setTimeout(resizeCanvas, 50);
        }
    };

    toggleMemoBtn.onclick = () => {
        memoContainer.classList.remove('hidden');
        toggleMemoBtn.classList.add('hidden');
        const memoBox = document.querySelector('.memo-box');
        memoBox.style.background = isTextMode ? '#fff' : 'rgba(255, 255, 255, 0.2)';
        memoTextarea.value = localStorage.getItem('study-memo-text') || '';
        if (!isTextMode) setTimeout(resizeCanvas, 50);
    };

    closeMemoBtn.onclick = () => {
        localStorage.setItem('study-memo-text', memoTextarea.value);
        memoContainer.classList.add('hidden');
        toggleMemoBtn.classList.remove('hidden');
    };

    clearMemoBtn.onclick = () => {
        const msg = isTextMode ? '文字を全部消していいかな？' : '書いたものを全部消していいかな？';
        if (confirm(msg)) {
            if (isTextMode) {
                memoTextarea.value = '';
                localStorage.removeItem('study-memo-text');
            } else {
                ctx.clearRect(0, 0, memoCanvas.width, memoCanvas.height);
            }
        }
    };

    memoTextarea.oninput = () => {
        localStorage.setItem('study-memo-text', memoTextarea.value);
    };

    memoCanvas.addEventListener('mousedown', startDraw);
    memoCanvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', stopDraw);
    memoCanvas.addEventListener('touchstart', (e) => {
        if (e.target === memoCanvas) e.preventDefault();
        startDraw(e);
    }, { passive: false });
    memoCanvas.addEventListener('touchmove', (e) => {
        if (e.target === memoCanvas) e.preventDefault();
        draw(e);
    }, { passive: false });
    memoCanvas.addEventListener('touchend', stopDraw);

    window.addEventListener('resize', () => {
        if (!memoContainer.classList.contains('hidden') && !isTextMode) resizeCanvas();
    });

    showHome();
};