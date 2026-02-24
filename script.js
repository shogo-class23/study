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
                                            { question: "クッキーが 5こ あります。ケーキは、キュッキーより 4こ おおいです. ケーキは なんこ？", display: "🍪🍪🍪🍪🍪 ＋ 🍰🍰🍰🍰", answer: 9 }
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
                                            { question: "くるまが 5だい、バスが 3だい あります. あわせて なんだい？", display: "🚗🚗🚗🚗🚗 ＋ 🚌🚌🚌", answer: 8 }
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
                                            10の まとまりは そのまま. バラの 2つと 4つを あわせて <b>6</b>！
                                        </div>
                                        <div class="data-demo">
                                            (10) と 🍎🍎 ＋ 🍎🍎🍎🍎<br>
                                            <b>＝ 16</b>
                                        </div>
                                        <p>答えは <b>16</b> だね. くりあがりが ないときは かんたんだよ！</p>`,
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
                                        content: `<h4>バラを あわせよう</h4>
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
                    }
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