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
                                },
                                {
                                    title: "(2) いろいろな 角の作図",
                                    content: `<h4>角度の パズルを 解こう</h4>
                                    <div class="point-box">
                                        基本の角度（90°, 60°）を <b>たしたり 二等分したり</b> することで、いろいろな角度が作れるよ！
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【よく出る 角度の作り方】</b></p>
                                        <ul style="font-size:13px;">
                                            <li><b>45度</b> ➔ 90度を 二等分する。</li>
                                            <li><b>30度</b> ➔ 60度を 二等分する。</li>
                                            <li><b>75度</b> ➔ 60度 ＋ 15度（30度の半分）</li>
                                            <li><b>105度</b> ➔ 90度 ＋ 15度、または 60度 ＋ 45度</li>
                                        </ul>
                                    </div>
                                    <div class="data-demo" style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;">
                                        <div style="text-align:center; width:120px;">
                                            <div style="width:100px; height:80px; position:relative; margin:0 auto;">
                                                <div style="width:80px; height:2px; background:#333; position:absolute; bottom:10px; left:10px;"></div>
                                                <div style="width:80px; height:2px; background:red; position:absolute; bottom:10px; left:10px; transform:rotate(-60deg); transform-origin:left center;"></div>
                                                <div style="width:40px; height:40px; border:1px dashed #aaa; border-radius:50%; position:absolute; left:50px; bottom:20px;"></div>
                                            </div>
                                            <p style="font-size:10px;"><b>60度の作図</b></p>
                                        </div>
                                        <div style="text-align:center; width:120px;">
                                            <div style="width:100px; height:80px; position:relative; margin:0 auto;">
                                                <div style="width:80px; height:2px; background:#333; position:absolute; bottom:10px; left:10px;"></div>
                                                <div style="width:80px; height:2px; background:red; position:absolute; bottom:10px; left:10px; transform:rotate(-75deg); transform-origin:left center;"></div>
                                                <div style="width:10px; height:10px; border-left:1px dashed #aaa; border-bottom:1px dashed #aaa; position:absolute; left:30px; bottom:30px; transform:rotate(-37.5deg);"></div>
                                            </div>
                                            <p style="font-size:10px;"><b>75度の作図</b><br>(60 + 15)</p>
                                        </div>
                                    </div>`,
                                    quizzes: [
                                        { question: "60度を作図するとき、どんな図形の性質を使いますか？", display: "ヒント：3つの辺が同じ", answer: "正三角形", options: ["正三角形", "直角三角形", "二等辺三角形"] },
                                        { question: "75度を作るには、60度に何度をたせばいい？", display: "60 ＋ □ ＝ 75", answer: 15 },
                                        { question: "45度を作るには、何度を二等分すればいい？", display: "□ ÷ 2 ＝ 45", answer: 90 },
                                        { question: "105度を作る組み合わせはどれ？", display: "足し算", answer: "90 + 15", options: ["90 + 15", "60 + 30", "45 + 45"] },
                                        { question: "15度を作るには、30度をどうすればいい？", display: "半分にする", answer: "二等分する" }
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
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [
                        {
                            title: "1. 関数（かんすう）",
                            subUnits: [
                                {
                                    title: "(1) 変数（へんすう）と 変域（へんいき）",
                                    content: `<h4>ともなって変わる 2つの量</h4>
                                    <div class="point-box">
                                        ・<b>変数</b>：いろいろな値をとる文字（x, y など）。<br>
                                        ・<b>関数</b>：x の値を決めると、それにともなって y の値が <b>ただ1つ</b> 決まる関係。<br>
                                        ・<b>変域</b>：変数のとる値の <b>範囲（はんい）</b>。
                                    </div>`,
                                    quizzes: [
                                        { question: "xの値を決めるとyがただ1つ決まる関係を何という？", display: "用語", answer: "関数", options: ["関数", "比例", "代入"] },
                                        { question: "変数がとる値の範囲のことを何という？", display: "用語", answer: "変域", options: ["変域", "全域", "領域"] },
                                        { question: "「xは 0以上 5以下」を変域の記号で表すと？", display: "記号", answer: "0 ≦ x ≦ 5", options: ["0 ≦ x ≦ 5", "0 < x < 5", "x = 5"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 比例（ひれい）",
                            subUnits: [
                                {
                                    title: "(1) 比例の式と グラフ",
                                    content: `<h4>y は x に 比例する</h4>
                                    <div class="point-box">
                                        ・<b>式：y ＝ ax</b> （a は比例定数）<br>
                                        ・<b>グラフ</b>：原点を通る <b>直線</b>。
                                    </div>
                                    <div class="data-demo">
                                        <svg width="160" height="120" style="border-left:2px solid #333; border-bottom:2px solid #333; margin:0 auto; display:block; background:#f9f9f9;">
                                            <line x1="0" y1="120" x2="140" y2="20" stroke="#3498db" stroke-width="3" />
                                            <circle cx="0" cy="120" r="4" fill="#e74c3c" />
                                            <text x="5" y="115" font-size="10">原点</text>
                                        </svg>
                                    </div>`,
                                    quizzes: [
                                        { question: "y ＝ 4x のとき、x ＝ 3 なら y はいくつ？", display: "4 ✕ 3", answer: 12 },
                                        { question: "y ＝ －2x のとき、x ＝ 5 なら y はいくつ？", display: "-2 ✕ 5", answer: -10 },
                                        { question: "x ＝ 2 のとき y ＝ 10 なら、比例定数 a はいくつ？", display: "10 ＝ a ✕ 2", answer: 5 },
                                        { question: "y ＝ 3x のグラフが通る点はどれ？", display: "座標", answer: "(1, 3)", options: ["(1, 3)", "(3, 1)", "(0, 3)"] },
                                        { question: "比例定数 a が負の数（マイナス）のとき、グラフは右下がりになる？", display: "グラフの向き", answer: "はい", options: ["はい", "いいえ"] }
                                    ]
                                },
                                {
                                    title: "(2) 比例の 変域（へんいき）",
                                    content: `<h4>グラフの 使う部分を決めよう</h4>
                                    <div class="point-box">
                                        x の範囲（変域）が決まると、それにあわせて y の範囲（変域）も決まるよ。<br>
                                        <b>端（はし）の値を 式に代入</b> して確かめよう。
                                    </div>
                                    <div class="data-demo">
                                        <p>例：y ＝ 2x で、x の変域が 1 ≦ x ≦ 4 のとき<br>
                                        ・x ＝ 1 のとき y ＝ 2<br>
                                        ・x ＝ 4 のとき y ＝ 8<br>
                                        ➔ y の変域は <b>2 ≦ y ≦ 8</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "y ＝ 3x で、0 ≦ x ≦ 2 のとき、y の変域は？", display: "0 ≦ y ≦ □", answer: 6 },
                                        { question: "y ＝ －2x で、1 ≦ x ≦ 5 のとき、y の最大値は？", display: "代入して計算", answer: -2 },
                                        { question: "変域で、数を含まない（〜より大きい）ときに使う記号は？", display: "不等号", answer: "<", options: ["<", "≦"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 反比例（はんぴれい）",
                            subUnits: [
                                {
                                    title: "(1) 反比例の式と グラフ",
                                    content: `<h4>y は x に 反比例する</h4>
                                    <div class="point-box">
                                        ・<b>式：y ＝ a/x</b> または <b>xy ＝ a</b><br>
                                        ・<b>グラフ</b>：2つのなめらかな曲線（<b>双曲線</b>）。
                                    </div>
                                    <div class="data-demo">
                                        <svg width="160" height="120" style="border-left:2px solid #333; border-bottom:2px solid #333; margin:0 auto; display:block; background:#f9f9f9;">
                                            <path d="M10,10 Q20,100 140,110" fill="none" stroke="#e74c3c" stroke-width="3" />
                                        </svg>
                                    </div>`,
                                    quizzes: [
                                        { question: "y ＝ 12/x のとき、x ＝ 4 なら y はいくつ？", display: "12 ÷ 4", answer: 3 },
                                        { question: "y ＝ －18/x のとき、x ＝ 3 なら y はいくつ？", display: "-18 ÷ 3", answer: -6 },
                                        { question: "x ＝ 2 のとき y ＝ 6 なら、比例定数 a はいくつ？", display: "a ＝ x ✕ y", answer: 12 },
                                        { question: "反比例のグラフの形を何という？", display: "用語", answer: "双曲線", options: ["双曲線", "放物線", "直線"] },
                                        { question: "反比例のグラフは原点（0,0）を通りますか？", display: "グラフの特徴", answer: "いいえ", options: ["はい", "いいえ"] }
                                    ]
                                },
                                {
                                    title: "(2) 反比例の 変域",
                                    content: `<h4>0 を またがないように注意</h4>
                                    <div class="point-box">
                                        反比例では <b>x ＝ 0</b> は考えないよ。x の変域に 0 が入ることはないので 安心しよう。
                                    </div>
                                    <div class="data-demo">
                                        <p>例：y ＝ 12/x で、2 ≦ x ≦ 6 のとき<br>
                                        ・x ＝ 2 のとき y ＝ 6<br>
                                        ・x ＝ 6 のとき y ＝ 2<br>
                                        ➔ y の変域は <b>2 ≦ y ≦ 6</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "y ＝ 8/x で、1 ≦ x ≦ 4 のとき、y の変域は？", display: "2 ≦ y ≦ □", answer: 8 },
                                        { question: "y ＝ 10/x で、x ＝ 2 のときの y の値はいくつ？", display: "代入", answer: 5 },
                                        { question: "反比例 y ＝ a/x で、x が 2倍、3倍になると y はどうなる？", display: "変化のきまり", answer: "1/2倍, 1/3倍になる", options: ["1/2倍, 1/3倍になる", "2倍, 3倍になる"] }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [
                        {
                            title: "1. ヒストグラム（柱状グラフ）",
                            subUnits: [
                                {
                                    title: "(1) データの分布を見る",
                                    content: `<h4>柱の高さで度数を表そう</h4>
                                    <div class="point-box">
                                        横軸に階級、縦軸に度数をとったグラフだよ。データの <b>散らばり（分布）</b> の様子がよくわかるね。
                                    </div>`,
                                    quizzes: [
                                        { question: "ヒストグラムの横軸は何を表していますか？", display: "グラフの軸", answer: "階級", options: ["度数", "階級", "名前"] },
                                        { question: "ヒストグラムの縦軸は何を表していますか？", display: "グラフの軸", answer: "度数", options: ["度数", "階級", "平均"] },
                                        { question: "ヒストグラムで一番高い柱がある階級を何という？", display: "用語", answer: "最頻値 (の階級)", options: ["最頻値 (の階級)", "中央値", "範囲"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 相対度数（そうたいどすう）と 累積度数",
                            subUnits: [
                                {
                                    title: "(1) 相対度数と 累積（るいせき）度数",
                                    content: `<h4>割合と 合計を考えよう</h4>
                                    <div class="point-box">
                                        ・<b>相対度数</b>：その階級の度数 ÷ 度数の合計。<br>
                                        ・<b>累積度数</b>：最初の階級から その階級までの 度数の合計。
                                    </div>
                                    <div class="data-demo">
                                        <p>例：合計 20人で 度数が 4人のとき<br>
                                        相対度数 ＝ 4 ÷ 20 ＝ <b>0.20</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "合計50人で度数が10人のとき、相対度数は？", display: "相対度数をもとめよう", answer: 0.2 },
                                        { question: "合計25人で度数が5人のとき、相対度数は？", display: "相対度数をもとめよう", answer: 0.2 },
                                        { question: "相対度数の合計は必ずいくつになりますか？", display: "ルール", answer: 1 },
                                        { question: "一番上の階級から順番に度数をたしたものを何という？", display: "用語", answer: "累積度数", options: ["累積度数", "相対度数", "平均度数"] },
                                        { question: "相対度数はデータの何を表していますか？", display: "意味", answer: "割合", options: ["割合", "合計", "個数"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 範囲（はんい）",
                            subUnits: [
                                {
                                    title: "(1) データの散らばりの大きさ",
                                    content: `<h4>最大値 と 最小値 の差</h4>
                                    <div class="point-box">
                                        <b>範囲（レンジ） ＝ 最大の値 － 最小の値</b><br>
                                        値が大きければ大きいほど、データの散らばりが大きいことがわかるよ。
                                    </div>`,
                                    quizzes: [
                                        { question: "データ [3, 5, 10, 15] の範囲は？", display: "15 － 3", answer: 12 },
                                        { question: "データ [20, 2, 45, 30] の範囲は？", display: "45 － 2", answer: 43 },
                                        { question: "範囲を求める式は「最大値 － ？」", display: "公式", answer: "最小値", options: ["最小値", "平均値", "中央値"] },
                                        { question: "データ [100, 150, 200, 250] の範囲は？", display: "250 － 100", answer: 100 },
                                        { question: "データ [7, 7, 7, 7] の範囲は？", display: "7 － 7", answer: 0 }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. 確率（かくりつ）",
                            subUnits: [
                                {
                                    title: "(1) 起こりやすさを数で表す",
                                    content: `<h4>どっちが 起きやすい？</h4>
                                    <div class="point-box">
                                        ・<b>確率 ＝（ある事柄の起こる数）÷（すべての場合の数）</b><br>
                                        絶対に起こる確率は <b>1</b>、絶対に起こらない確率は <b>0</b> だよ。
                                    </div>`,
                                    quizzes: [
                                        { question: "サイコロを振って「1」が出る確率は？", display: "1 ÷ 6", answer: "1/6", options: ["1/6", "1/2", "1"] },
                                        { question: "コインを投げて「表」が出る確率は？", display: "1 ÷ 2", answer: "1/2", options: ["1/2", "1/4", "0"] },
                                        { question: "絶対（ぜったい）に起こる確率を数で言うと？", display: "数値", answer: 1 },
                                        { question: "1から10のカードから偶数を引く確率は？", display: "5 ÷ 10", answer: "1/2", options: ["1/2", "5/10", "2/5"] },
                                        { question: "確率は必ず 0 から いくつの間の数になりますか？", display: "範囲", answer: 1 }
                                    ]
                                }
                            ]
                        }
                    ] }
                ]
            },
            j2: {
                name: "中2",
                categories: [
                    { name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>", units: [
                        {
                            title: "1. 文字式の 計算",
                            subUnits: [
                                {
                                    title: "(1) 加法（たし算）",
                                    content: `<h4>同類項をまとめよう</h4>
                                    <div class="point-box">
                                        文字と 次数が同じ項を たし算するときは、係数を たすだけ！
                                    </div>`,
                                    quizzes: [
                                        { question: "3x ＋ 5x は？", display: "係数をたそう", answer: "8x" },
                                        { question: "2a ＋ 4b ＋ 3a は？", display: "同じ文字どうし", answer: "5a + 4b" },
                                        { question: "x² ＋ 2x² は？", display: "次数が同じ", answer: "3x^2" },
                                        { question: "0.5y ＋ 1.2y は？", display: "小数の係数", answer: "1.7y" },
                                        { question: "a ＋ a は？", display: "1を忘れずに", answer: "2a" }
                                    ]
                                },
                                {
                                    title: "(2) 減法（ひき算）",
                                    content: `<h4>カッコをはずすときは 符号に注意</h4>
                                    <div class="point-box">
                                        カッコの前の － は、中のすべての項の 符号を 逆に変えよう。
                                    </div>`,
                                    quizzes: [
                                        { question: "7a － 2a は？", display: "ひき算", answer: "5a" },
                                        { question: "3x － (x － 2y) は？", display: "符号に注意", answer: "2x + 2y" },
                                        { question: "5b － (－3b) は？", display: "マイナス ✕ マイナス", answer: "8b" },
                                        { question: "(4a － 2b) － (a ＋ 3b) は？", display: "カッコをはずす", answer: "3a - 5b" },
                                        { question: "x － 5x は？", display: "マイナスになるよ", answer: "-4x" }
                                    ]
                                },
                                {
                                    title: "(3) 乗法（かけ算）",
                                    content: `<h4>係数は数字、文字は累乗</h4>
                                    <div class="point-box">
                                        数字どうしをかけ、同じ文字は 指数を使ってまとめよう。
                                    </div>`,
                                    quizzes: [
                                        { question: "2a ✕ 4b は？", display: "かけ算", answer: "8ab" },
                                        { question: "(－3x) ✕ 5x は？", display: "累乗に注意", answer: "-15x^2" },
                                        { question: "2a² ✕ 3a は？", display: "aが3つになる", answer: "6a^3" },
                                        { question: "(－2y)² はいくつ？", display: "(-2y) ✕ (-2y)", answer: "4y^2" },
                                        { question: "x ✕ y ✕ x は？", display: "文字をまとめよう", answer: "x^2y" }
                                    ]
                                },
                                {
                                    title: "(4) 除法（わり算）",
                                    content: `<h4>分数にして 約分しよう</h4>
                                    <div class="point-box">
                                        わる数を 分母に。文字も 数字も 約分して スッキリ！
                                    </div>`,
                                    quizzes: [
                                        { question: "12ab ÷ 3a は？", display: "約分しよう", answer: "4b" },
                                        { question: "8x² ÷ 2x は？", display: "xが1つのこる", answer: "4x" },
                                        { question: "－15xy ÷ (－5y) は？", display: "符号に注意", answer: "3x" },
                                        { question: "6a³ ÷ 2a は？", display: "指数をひく", answer: "3a^2" },
                                        { question: "10x²y ÷ 5xy は？", display: "文字を消去", answer: "2x" }
                                    ]
                                },
                                {
                                    title: "(5) 式の変形",
                                    content: `<h4>等式の変形（とうしきのへんけい）</h4>
                                    <div class="point-box">
                                        ある文字について 解く（その文字 ＝ ... の形にする）ことだよ。
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【例：三角形の面積 S ＝ ah/2 を h について解く】</b></p>
                                        <p>① 両辺を 2倍する ➔ 2S ＝ ah<br>
                                        ② 左右をいれかえる ➔ ah ＝ 2S<br>
                                        ③ a でわる ➔ <b>h ＝ 2S/a</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "x ＋ y ＝ 5 を y について解くと？", display: "y ＝ ？", answer: "y = 5 - x" },
                                        { question: "三角形の面積 S ＝ ah/2 を a について解くと？", display: "a ＝ ？", answer: "a = 2S/h" },
                                        { question: "円周の長さ ℓ ＝ 2πr を r について解くと？", display: "r ＝ ？", answer: "r = ℓ/2π" },
                                        { question: "2x ＋ 3y ＝ 12 を y について解くと？", display: "3y ＝ 12 - 2x ➔ y ＝ ？", answer: "y = (12-2x)/3" },
                                        { question: "ある文字について解くとき、＝ をこえて移動させることを何という？", display: "用語", answer: "移項", options: ["移項", "代入", "約分"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 連立二元一次方程式",
                            subUnits: [
                                {
                                    title: "(1) 加減法（かげんほう）",
                                    content: `<h4>文字を 消去しよう</h4>
                                    <div class="point-box">
                                        たしたり ひいたりして 1つの文字を 消す方法だよ。
                                    </div>`,
                                    quizzes: [
                                        { question: "x＋y＝7, x－y＝3 のとき、xは？", display: "①＋②で 2x=10", answer: 5 },
                                        { question: "2x＋y＝8, x＋y＝5 のとき、xは？", display: "①－②", answer: 3 },
                                        { question: "x＋2y＝10, x＋y＝6 のとき、yは？", display: "①－②", answer: 4 },
                                        { question: "3x＋y＝11, x－y＝1 のとき、xは？", display: "①＋②で 4x=12", answer: 3 }
                                    ]
                                },
                                {
                                    title: "(2) 代入法（だいにゅうほう）",
                                    content: `<h4>式を そのまま入れかえる</h4>
                                    <div class="point-box">
                                        y ＝ ... の式を、もう片方の y に 代入する方法だよ。
                                    </div>`,
                                    quizzes: [
                                        { question: "x＋y＝9, y＝2x のとき、xは？", display: "x＋(2x)＝9", answer: 3 },
                                        { question: "2x＋y＝12, y＝x＋3 のとき、xは？", display: "2x＋(x+3)＝12", answer: 3 },
                                        { question: "x＝y＋1, 2x＋y＝11 のとき、yは？", display: "2(y+1)＋y＝11", answer: 3 },
                                        { question: "y＝3x, x＋y＝12 のとき、yは？", display: "代入して計算", answer: 9 }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [
                        {
                            title: "1. 平行線（へいこうせん）と 角の性質",
                            subUnits: [
                                {
                                    title: "(1) 対頂角・同位角・錯角",
                                    content: `<h4>角の名前と関係</h4>
                                    <div class="point-box">
                                        ・<b>対頂角（たいちょうかく）</b>：向かい合う角。いつでも等しい。<br>
                                        ・<b>同位角（どういかく）</b>：同じ位置にある角。平行なら等しい。<br>
                                        ・<b>錯角（さっかく）</b>：Z字の内側にある角。平行なら等しい。
                                    </div>
                                    <div class="data-demo" style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;">
                                        <!-- 対頂角 -->
                                        <div style="text-align:center;">
                                            <svg width="100" height="100">
                                                <line x1="10" y1="10" x2="90" y2="90" stroke="#333" stroke-width="2" />
                                                <line x1="10" y1="90" x2="90" y2="10" stroke="#333" stroke-width="2" />
                                                <!-- ペアをオレンジで強調 -->
                                                <path d="M 50 50 L 70 30 A 28 28 0 0 0 30 30 Z" fill="orange" opacity="0.6" />
                                                <path d="M 50 50 L 30 70 A 28 28 0 0 0 70 70 Z" fill="orange" opacity="0.6" />
                                            </svg>
                                            <p style="font-size:10px;">対頂角</p>
                                        </div>
                                        <!-- 同位角 -->
                                        <div style="text-align:center;">
                                            <svg width="100" height="100">
                                                <!-- 平行線 -->
                                                <line x1="10" y1="30" x2="90" y2="30" stroke="#333" stroke-width="2" />
                                                <line x1="10" y1="70" x2="90" y2="70" stroke="#333" stroke-width="2" />
                                                <!-- 交差する線 -->
                                                <line x1="20" y1="10" x2="80" y2="90" stroke="#333" stroke-width="2" />
                                                <!-- ペアを青で塗りつぶし（左上） -->
                                                <!-- 上側: 頂点(35, 30) -->
                                                <path d="M 35 30 L 15 30 A 20 20 0 0 1 20 10 Z" fill="blue" opacity="0.5" />
                                                <text x="18" y="25" font-size="12" fill="blue" font-weight="bold">a</text>
                                                <!-- 下側: 頂点(65, 70) -->
                                                <path d="M 65 70 L 45 70 A 20 20 0 0 1 50 50 Z" fill="blue" opacity="0.5" />
                                                <text x="48" y="65" font-size="12" fill="blue" font-weight="bold">A</text>
                                            </svg>
                                            <p style="font-size:10px;">同位角 (a ＝ A)</p>
                                        </div>
                                        <!-- 錯角 -->
                                        <div style="text-align:center;">
                                            <svg width="100" height="100">
                                                <line x1="10" y1="30" x2="90" y2="30" stroke="#333" stroke-width="2" />
                                                <line x1="10" y1="70" x2="90" y2="70" stroke="#333" stroke-width="2" />
                                                <line x1="70" y1="30" x2="30" y2="70" stroke="red" stroke-width="2" />
                                                <!-- ペアを赤で強調 -->
                                                <path d="M 70 30 L 50 30 A 20 20 0 0 1 60 40 Z" fill="red" opacity="0.6" />
                                                <path d="M 30 70 L 50 70 A 20 20 0 0 0 40 60 Z" fill="red" opacity="0.6" />
                                            </svg>
                                            <p style="font-size:10px;">錯角 (Z字)</p>
                                        </div>
                                    </div>`,
                                    quizzes: [
                                        { question: "向かい合う角（対頂角）の大きさはいつでも等しい？", display: "性質", answer: "はい", options: ["はい", "いいえ"] },
                                        { question: "2本の直線が平行なとき、錯角の大きさはどうなりますか？", display: "性質", answer: "等しい", options: ["等しい", "ちがう", "合わせて180度"] },
                                        { question: "Z字の形に見つけられる角を何という？", display: "用語", answer: "錯角", options: ["対頂角", "同位角", "錯角"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 多角形（たかくけい）の角",
                            subUnits: [
                                {
                                    title: "(1) 内角（ないかく）と 外角（がいかく）",
                                    content: `<h4>角の和の 公式</h4>
                                    <div class="point-box">
                                        ・<b>三角形の外角</b>：それと隣り合わない2つの内角の和に等しい。<br>
                                        ・<b>n角形の内角の和</b> ＝ 180° ✕ (n － 2)<br>
                                        ・<b>多角形の外角の和</b> ＝ 360° （何角形でも一定！）
                                    </div>`,
                                    quizzes: [
                                        { question: "五角形（n=5）の内角の和は何度？", display: "180 ✕ (5-2)", answer: 540 },
                                        { question: "十角形の外角の和は何度？", display: "外角の和", answer: 360 },
                                        { question: "三角形の2つの内角が50°と70°のとき、もう1つの角の外角は？", display: "50 + 70", answer: 120 },
                                        { question: "六角形の内角の和は何度？", display: "180 ✕ 4", answer: 720 },
                                        { question: "正六角形の1つの外角は何度？", display: "360 ÷ 6", answer: 60 }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 三角形の合同条件（ごうどうじょうけん）と 証明",
                            subUnits: [
                                {
                                    title: "(1) 3つの 合同条件",
                                    content: `<h4>ぴったり重なるための ルール</h4>
                                    <div class="point-box">
                                        1. <b>3組の辺</b>がそれぞれ等しい。<br>
                                        2. <b>2組の辺とその間の角</b>がそれぞれ等しい。<br>
                                        3. <b>1組の辺とその両端の角</b>がそれぞれ等しい。
                                    </div>`,
                                    quizzes: [
                                        { question: "三角形の合同条件は全部でいくつ？", display: "知識", answer: 3 },
                                        { question: "「3組の辺がそれぞれ等しい」は合同条件？", display: "判定", answer: "はい", options: ["はい", "いいえ"] },
                                        { question: "2組の辺が等しい時、どこの角が等しければ合同といえますか？", display: "条件", answer: "その間の角", options: ["その間の角", "どこでもいい"] }
                                    ]
                                },
                                {
                                    title: "(2) 証明（しょうめい）の進め方",
                                    content: `<h4>論理的（ろんりてき）に説明しよう</h4>
                                    <div class="point-box">
                                        <b>【証明の 型】</b><br>
                                        1. <b>仮定（かてい）</b>：問題でわかっていること。<br>
                                        2. <b>根拠（こんきょ）</b>：合同条件や図形の性質。<br>
                                        3. <b>結論（けつろん）</b>：いいたいこと。
                                    </div>
                                    <div class="data-demo" style="font-size:13px; text-align:left;">
                                        △ABCと△DEFにおいて、<br>
                                        仮定より AB=DE...①<br>
                                        ...中略...<br>
                                        ①②③より<b>合同条件</b>を書き、<br>
                                        よって △ABC≡△DEF である。
                                    </div>`,
                                    quizzes: [
                                        { question: "証明で、問題文にあらかじめ与えられている条件を何という？", display: "用語", answer: "仮定", options: ["仮定", "結論", "根拠"] },
                                        { question: "証明の最後にかく、言いたい目標のことを何という？", display: "用語", answer: "結論", options: ["仮定", "結論", "理由"] },
                                        { question: "合同を表す記号「≡」の読み方は？", display: "記号", answer: "合同 (ごうどう)", options: ["合同 (ごうどう)", "等しい", "似ている"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. 三角形と 四角形の性質",
                            subUnits: [
                                {
                                    title: "(1) 特別な 三角形と 四角形",
                                    content: `<h4>定義（ていぎ）と 性質</h4>
                                    <div class="point-box">
                                        ・<b>二等辺三角形</b>：2つの底角が等しい。<br>
                                        ・<b>平行四辺形</b>：対辺が平行、対角が等しい、対角線が中点で交わる。
                                    </div>`,
                                    quizzes: [
                                        { question: "二等辺三角形の底角（下の2つの角）の大きさは？", display: "性質", answer: "等しい", options: ["等しい", "ちがう"] },
                                        { question: "平行四辺形の対角線はどこで交わりますか？", display: "性質", answer: "それぞれの中点", options: ["中点", "端っこ", "交わらない"] },
                                        { question: "長方形は平行四辺形のなかまといえる？", display: "関係", answer: "はい", options: ["はい", "いいえ"] },
                                        { question: "ひし形の対角線はどのように交わりますか？", display: "性質", answer: "垂直に交わる", options: ["垂直に交わる", "平行になる"] },
                                        { question: "4つの角がすべて直角で、4つの辺がすべて等しい四角形は？", display: "名前", answer: "正方形" }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [
                        {
                            title: "1. 一次関数（いちじかんすう）",
                            subUnits: [
                                {
                                    title: "(1) 一次関数の式",
                                    content: `<h4>y は x の 一次式で表される</h4>
                                    <div class="point-box">
                                        x の値を決めると、y の値がただ1つ決まり、<br>
                                        <b>y ＝ ax ＋ b</b> （a, b は定数）<br>
                                        という形で表される関数だよ。
                                    </div>
                                    <p>・b ＝ 0 のときは、中1で習った「比例」と同じになるね！</p>`,
                                    quizzes: [
                                        { question: "y ＝ 2x ＋ 3 のとき、x ＝ 4 なら y はいくつ？", display: "2 ✕ 4 + 3", answer: 11 },
                                        { question: "y ＝ －3x ＋ 10 のとき、x ＝ 2 なら y はいくつ？", display: "-3 ✕ 2 + 10", answer: 4 },
                                        { question: "一次関数の一般式「y ＝ ax ＋ b」で、bのことを何という？", display: "用語", answer: "切片 (せっぺん)", options: ["傾き", "切片 (せっぺん)", "係数"] },
                                        { question: "y ＝ 5x － 2 のとき、x ＝ 0 なら y はいくつ？", display: "x=0を代入", answer: -2 },
                                        { question: "次のうち一次関数はどれ？", display: "判定", answer: "y = 3x + 1", options: ["y = 3x + 1", "y = 5/x", "y = x²"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 変化の割合・傾き・切片",
                            subUnits: [
                                {
                                    title: "(1) 変化の割合と グラフ",
                                    content: `<h4>どれくらい 急（きゅう）かな？</h4>
                                    <div class="point-box">
                                        ・<b>変化の割合</b> ＝ yの増加量 / xの増加量 ＝ <b>a</b><br>
                                        ・<b>傾き</b>：グラフの直線の 傾き具合。変化の割合（a）と等しい。<br>
                                        ・<b>切片（b）</b>：グラフが y軸と交わる点の y座標。
                                    </div>`,
                                    quizzes: [
                                        { question: "y ＝ 4x ＋ 5 の「傾き」はいくつ？", display: "a の値", answer: 4 },
                                        { question: "y ＝ －2x ＋ 8 の「切片」はいくつ？", display: "b の値", answer: 8 },
                                        { question: "xが1増えるとき、yが3増える一次関数の「変化の割合」は？", display: "3 ÷ 1", answer: 3 },
                                        { question: "一次関数 y ＝ ax ＋ b で、常に一定な値（変化の割合）はどれ？", display: "性質", answer: "a", options: ["a", "b", "x", "y"] },
                                        { question: "傾きが －3 で、切片が 2 の直線の式は？", display: "式をつくる", answer: "y = -3x + 2" }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 二元一次方程式と 一次関数",
                            subUnits: [
                                {
                                    title: "(1) 方程式のグラフ",
                                    content: `<h4>方程式を 関数の形になおそう</h4>
                                    <div class="point-box">
                                        2x ＋ y ＝ 6 のような方程式も、y について解くと<br>
                                        <b>y ＝ －2x ＋ 6</b> となり、一次関数のグラフとして書けるよ。
                                    </div>`,
                                    quizzes: [
                                        { question: "x ＋ y ＝ 5 を y について解くと？", display: "y ＝ ？", answer: "y = -x + 5" },
                                        { question: "3x － y ＝ 2 を y について解くと？", display: "y ＝ ？", answer: "y = 3x - 2" },
                                        { question: "2x ＋ 3y ＝ 12 のグラフの切片は？ (x=0を代入)", display: "3y = 12", answer: 4 },
                                        { question: "x ＝ 3 のグラフはどんな直線？", display: "特殊なグラフ", answer: "y軸に平行な直線", options: ["y軸に平行な直線", "x軸に平行な直線", "斜めの直線"] },
                                        { question: "連立方程式の解は、2つの直線の何にあたりますか？", display: "グラフの関係", answer: "交点", options: ["交点", "切片", "端点"] }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [
                        {
                            title: "1. 四分位数（しぶんいすう）と 箱ひげ図",
                            subUnits: [
                                {
                                    title: "(1) データの散らばりを 4等分しよう",
                                    content: `<h4>中央値を さらに分ける</h4>
                                    <div class="point-box">
                                        ・<b>四分位数</b>：データを大きさ順に並べ、4等分した位置の値。<br>
                                        ・<b>箱ひげ図</b>：最小値、第1四分位数、中央値、第3四分位数、最大値を 1つの図にしたもの。<br>
                                        ・<b>四分位範囲</b>：第3四分位数 － 第1四分位数。
                                    </div>
                                    <div class="data-demo">
                                        <div style="width:200px; height:60px; position:relative; margin:0 auto; border-bottom:1px solid #333; padding-top:20px;">
                                            <div style="width:1px; height:20px; background:#333; position:absolute; left:10px; top:20px;"></div><!-- min -->
                                            <div style="width:40px; height:1px; background:#333; position:absolute; left:10px; top:30px;"></div><!-- whisker -->
                                            <div style="width:100px; height:20px; border:2px solid #333; position:absolute; left:50px; top:20px; background:#fff;">
                                                <div style="width:2px; height:100%; background:red; position:absolute; left:40%;"></div><!-- Q2 -->
                                            </div><!-- box -->
                                            <div style="width:40px; height:1px; background:#333; position:absolute; left:150px; top:30px;"></div><!-- whisker -->
                                            <div style="width:1px; height:20px; background:#333; position:absolute; left:190px; top:20px;"></div><!-- max -->
                                        </div>
                                        <p style="font-size:10px; text-align:center;">箱の中の赤い線が「中央値」だよ</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "データを4等分した時の区切りの値を何という？", display: "用語", answer: "四分位数", options: ["四分位数", "平均値", "最頻値"] },
                                        { question: "箱ひげ図の「箱の長さ」が表しているのはどれ？", display: "図の見方", answer: "四分位範囲", options: ["四分位範囲", "全範囲", "中央値"] },
                                        { question: "第3四分位数から第1四分位数をひいた値を何という？", display: "用語", answer: "四分位範囲", options: ["四分位範囲", "平均偏差", "誤差"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 場合の数（ばあいのすう）と 確率",
                            subUnits: [
                                {
                                    title: "(1) 起こりうる すべてのパターン",
                                    content: `<h4>樹形図（じゅけいず）を使おう</h4>
                                    <div class="point-box">
                                        ・<b>同様に確からしい</b>：どの結果が起こることも 同じくらい期待できること。<br>
                                        ・<b>確率</b> ＝ 起こるパターンの数 / すべてのパターンの数
                                    </div>`,
                                    quizzes: [
                                        { question: "2枚のコインを投げた時、すべての場合の数は？", display: "(表,表), (表,裏), ...", answer: 4 },
                                        { question: "サイコロを2つ振った時、すべての場合の数は？", display: "6 ✕ 6", answer: 36 },
                                        { question: "2枚のコインを投げて、2枚とも「表」になる確率は？", display: "1 ÷ 4", answer: "1/4" },
                                        { question: "3人のリレーの走順の決め方は全部で何通り？", display: "3 ✕ 2 ✕ 1", answer: 6 },
                                        { question: "「絶対に起こらない」確率を数で言うと？", display: "数値", answer: 0 }
                                    ]
                                }
                            ]
                        }
                    ] }
                ]
            },
            j3: {
                name: "中3",
                categories: [
                    { name: "1 <ruby>数<rt>かず</rt></ruby>と<ruby>式<rt>しき</rt></ruby>", units: [
                        {
                            title: "1. 平方根（へいほうこん）",
                            subUnits: [
                                {
                                    title: "(1) ルートの 意味と性質",
                                    content: `<h4>2乗すると その数になる数</h4>
                                    <div class="point-box">
                                        ・<b>平方根</b>：2乗すると a になる数を、a の平方根というよ。<br>
                                        ・<b>記号 √（ルート）</b> を使って表す。<br>
                                        ・√a ✕ √a ＝ a
                                    </div>
                                    <div class="data-demo">
                                        <p>例：4 の平方根は <b>2 と －2</b><br>
                                        例：√2 ✕ √3 ＝ <b>√6</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "9 の平方根は？", display: "2乗して9になる数", answer: "3 と -3", options: ["3 と -3", "3", "81"] },
                                        { question: "√25 はいくつ？", display: "√25", answer: 5 },
                                        { question: "√2 ✕ √5 はいくつ？", display: "ルートのかけ算", answer: "√10" },
                                        { question: "3√2 ＋ 5√2 を計算すると？", display: "ルートのたし算", answer: "8√2" },
                                        { question: "√の中をできるだけ簡単な数にせよ：√12", display: "√12 ➔ 2√3", answer: "2√3" }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 多項式の 展開（てんかい）と 因数分解",
                            subUnits: [
                                {
                                    title: "(1) 展開と 因数分解の 公式",
                                    content: `<h4>逆（ぎゃく）の関係をおぼえよう</h4>
                                    <div class="point-box">
                                        ・<b>展開</b>：カッコをはずして バラバラにする。<br>
                                        ・<b>因数分解</b>：たし算の形を かけ算の形に まとめる。
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【公式】</b></p>
                                        <p>1. (x+a)(x+b) ＝ x²+(a+b)x+ab<br>
                                        2. (x+a)² ＝ x²+2ax+a²<br>
                                        3. (x+a)(x-a) ＝ x²-a²</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "(x + 2)(x + 3) を展開すると？", display: "展開公式1", answer: "x^2 + 5x + 6" },
                                        { question: "(x + 5)^2 を展開すると？", display: "展開公式2", answer: "x^2 + 10x + 25" },
                                        { question: "x^2 － 9 を因数分解すると？", display: "2乗のひき算", answer: "(x+3)(x-3)" },
                                        { question: "x^2 + 6x + 8 を因数分解すると？", display: "たして6, かけて8", answer: "(x+2)(x+4)" },
                                        { question: "共通な因数でくくる因数分解：ax + ay ➔ ？", display: "くくりだし", answer: "a(x+y)" }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 二次方程式（にじほうていしき）",
                            subUnits: [
                                {
                                    title: "(1) 二次方程式の 解き方",
                                    content: `<h4>いろいろな 武器（ぶき）を使おう</h4>
                                    <div class="point-box">
                                        1. <b>因数分解</b> を使う： (x-2)(x-3)=0 ➔ x=2, 3<br>
                                        2. <b>平方根</b> を使う： x²=5 ➔ x=±√5<br>
                                        3. <b>解の公式</b> を使う： どんな式でも解ける最強の公式！
                                    </div>`,
                                    quizzes: [
                                        { question: "x^2 ＝ 16 の解は？", display: "x^2 = 16", answer: "4 と -4" },
                                        { question: "(x － 1)(x － 2) ＝ 0 の解は？", display: "因数分解の形", answer: "1, 2" },
                                        { question: "x^2 + 5x + 6 ＝ 0 の解は？", display: "因数分解して解く", answer: "-2, -3" },
                                        { question: "二次方程式の解の公式、分母は何？", display: "公式の形", answer: "2a", options: ["2a", "a", "4ac"] },
                                        { question: "x^2 ＝ 0 の解はいくつありますか？", display: "重解", answer: "1つ (0)", options: ["1つ", "2つ", "なし"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. 誤差（ごさ）・近似値・有効数字",
                            subUnits: [
                                {
                                    title: "(1) 近似値（きんじち）と 有効数字",
                                    content: `<h4>だいたいの数と 信頼できる数字</h4>
                                    <div class="point-box">
                                        ・<b>近似値</b>：真の値に近い値。<br>
                                        ・<b>誤差</b>：誤差 ＝ 近似値 － 真の値。<br>
                                        ・<b>有効数字</b>：測定して得られた、信頼できる数字。
                                    </div>
                                    <div class="data-demo">
                                        <p>例：3.14 ✕ 10² ➔ 有効数字は 3, 1, 4 の <b>3桁</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "近似値から真の値をひいたものを何という？", display: "用語", answer: "誤差", options: ["誤差", "有効数字", "余り"] },
                                        { question: "測定値 1.50m の有効数字は何桁？", display: "1.50", answer: 3 },
                                        { question: "有効数字をはっきりさせる書き方は？", display: "表現", answer: "a ✕ 10^n", options: ["a ✕ 10^n", "分数", "√"] }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [
                        {
                            title: "1. 相似（そうじ）",
                            subUnits: [
                                {
                                    title: "(1) 相似な図形と 条件",
                                    content: `<h4>形は同じで 大きさがちがう</h4>
                                    <div class="point-box">
                                        ある図形を 拡大または縮小した図形を <b>相似</b> といい、記号 <b>∽</b> で表すよ。
                                    </div>
                                    <div class="data-demo" style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;">
                                        <div style="text-align:center;">
                                            <svg width="100" height="80">
                                                <polygon points="50,5 10,75 90,75" fill="none" stroke="#333" stroke-width="2" />
                                                <line x1="25" y1="48" x2="75" y2="48" stroke="red" stroke-width="2" />
                                            </svg>
                                            <p style="font-size:10px;">ピラミッド型</p>
                                        </div>
                                        <div style="text-align:center;">
                                            <svg width="100" height="80">
                                                <line x1="10" y1="5" x2="90" y2="5" stroke="#333" stroke-width="2" />
                                                <line x1="10" y1="75" x2="90" y2="75" stroke="#333" stroke-width="2" />
                                                <line x1="10" y1="5" x2="90" y2="75" stroke="red" stroke-width="1" />
                                                <line x1="90" y1="5" x2="10" y2="75" stroke="red" stroke-width="1" />
                                            </svg>
                                            <p style="font-size:10px;">砂時計（クロス）型</p>
                                        </div>
                                    </div>
                                    <div class="point-box">
                                        <b>【三角形の相似条件】</b><br>
                                        1. 3組の辺の <b>比</b> がすべて等しい。<br>
                                        2. 2組の辺の <b>比</b> とその間の角がそれぞれ等しい。<br>
                                        3. <b>2組の角</b> がそれぞれ等しい。
                                    </div>`,
                                    quizzes: [
                                        { question: "形が同じで大きさがちがう図形の関係を何という？", display: "用語", answer: "相似 (そうじ)", options: ["相似 (そうじ)", "合同", "平行"] },
                                        { question: "三角形の相似条件のうち、2つの角が等しければ相似といえる？", display: "判定", answer: "はい", options: ["はい", "いいえ"] },
                                        { question: "相似を表す記号はどれ？", display: "記号", answer: "∽", options: ["∽", "≡", "＝"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 平行線（へいこうせん）と 線分の比",
                            subUnits: [
                                {
                                    title: "(1) 線分の比の 性質",
                                    content: `<h4>平行なら 比が等しい</h4>
                                    <div class="point-box">
                                        三角形の辺に平行な線をひくと、切り取られた線分の <b>長さの比</b> は等しくなるよ。
                                    </div>
                                    <div class="data-demo">
                                        <svg width="160" height="120" style="margin:0 auto; display:block;">
                                            <polygon points="80,10 20,110 140,110" fill="none" stroke="#333" stroke-width="2" />
                                            <line x1="44" y1="70" x2="116" y2="70" stroke="red" stroke-width="2" />
                                            <text x="40" y="50" font-size="10" fill="red">a</text>
                                            <text x="25" y="95" font-size="10" fill="red">b</text>
                                            <text x="110" y="50" font-size="10" fill="blue">c</text>
                                            <text x="125" y="95" font-size="10" fill="blue">d</text>
                                        </svg>
                                        <p style="font-size:11px; text-align:center;">赤い線が平行なら <b>a : b ＝ c : d</b></p>
                                    </div>
                                    <div class="point-box">
                                        ・<b>中点連結定理</b>：2辺の中点をつなぐと、底辺に平行で 長さは半分になる！
                                    </div>`,
                                    quizzes: [
                                        { question: "三角形の2辺の中点をつないだ線は、底辺の何倍の長さ？", display: "中点連結定理", answer: "1/2倍", options: ["1/2倍", "2倍", "同じ"] },
                                        { question: "中点連結定理で、つないだ線と底辺の関係は？", display: "位置関係", answer: "平行", options: ["平行", "垂直", "ねじれ"] },
                                        { question: "平行線によって分けられた線分の比はどうなりますか？", display: "性質", answer: "等しくなる", options: ["等しくなる", "逆になる", "2倍になる"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 円周角（えんしゅうかく）の定理",
                            subUnits: [
                                {
                                    title: "(1) 中心角と 円周角",
                                    content: `<h4>中心角の 半分</h4>
                                    <div class="point-box">
                                        同じ 弧（こ）に対する 円周角の大きさは 一定で、<b>中心角の 半分</b> になるよ。
                                    </div>
                                    <div class="data-demo">
                                        <svg width="120" height="120" style="margin:0 auto; display:block;">
                                            <circle cx="60" cy="60" r="50" fill="none" stroke="#333" stroke-width="2" />
                                            <polyline points="25,95 60,60 95,95" fill="none" stroke="#aaa" stroke-width="1" />
                                            <polyline points="25,95 60,10 95,95" fill="none" stroke="red" stroke-width="2" />
                                            <circle cx="60" cy="60" r="3" fill="#333" />
                                            <text x="52" y="85" font-size="10">2a</text>
                                            <text x="55" y="30" font-size="10" fill="red">a</text>
                                        </svg>
                                        <p style="font-size:11px; text-align:center;">同じ弧からの角は、<b>中心 ＝ 円周 ✕ 2</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "ある弧に対する中心角が100°のとき、円周角は何度？", display: "100 ÷ 2", answer: 50 },
                                        { question: "直径に対する円周角は必ず何度になりますか？", display: "特別な角", answer: 90 },
                                        { question: "円周角の大きさは中心角の何倍ですか？", display: "公式", answer: "1/2倍", options: ["1/2倍", "2倍", "同じ"] },
                                        { question: "同じ弧に対する円周角の大きさは、場所によって変わる？", display: "性質", answer: "変わらない", options: ["変わらない", "変わる"] },
                                        { question: "円周角が 30° のとき、対応する中心角は何度？", display: "30 ✕ 2", answer: 60 }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. 三平方の定理（ピタゴラスの定理）",
                            subUnits: [
                                {
                                    title: "(1) 直角三角形の 3辺の関係",
                                    content: `<h4>a² ＋ b² ＝ c²</h4>
                                    <div class="point-box">
                                        直角三角形の 斜辺（一番長い辺）を <b>c</b> とすると、<br>
                                        <b>a² ＋ b² ＝ c²</b> が成り立つよ。
                                    </div>
                                    <div class="data-demo">
                                        <svg width="140" height="100" style="margin:0 auto; display:block;">
                                            <polygon points="20,10 20,90 120,90" fill="none" stroke="#333" stroke-width="2" />
                                            <line x1="20" y1="80" x2="30" y2="80" stroke="#333" stroke-width="1" />
                                            <line x1="30" y1="80" x2="30" y2="90" stroke="#333" stroke-width="1" />
                                            <text x="5" y="55" font-size="12">a</text>
                                            <text x="65" y="105" font-size="12">b</text>
                                            <text x="75" y="45" font-size="12" fill="red">c</text>
                                        </svg>
                                    </div>
                                                                        <div class="data-demo">
                                                                            <p><b>【必ずおぼえる 特別な比】</b></p>
                                                                            <div style="display:flex; justify-content:center; gap:15px; font-size:11px; flex-wrap:wrap;">
                                                                                <div style="text-align:center;">
                                                                                    <div style="width:40px; height:30px; border-left:2px solid #3498db; border-bottom:2px solid #3498db; position:relative;">
                                                                                        <div style="width:50px; height:2px; background:#3498db; position:absolute; top:0; left:0; transform:rotate(37deg); transform-origin:left top;"></div>
                                                                                    </div>
                                                                                    <b>3 : 4 : 5</b>
                                                                                </div>
                                                                                <div style="text-align:center;">
                                                                                    <div style="width:30px; height:30px; border-left:2px solid #e74c3c; border-bottom:2px solid #e74c3c; position:relative;">
                                                                                        <div style="width:42.4px; height:2px; background:#e74c3c; position:absolute; top:0; left:0; transform:rotate(45deg); transform-origin:left top;"></div>
                                                                                    </div>
                                                                                    <b>1 : 1 : √2</b>
                                                                                </div>
                                                                                <div style="text-align:center;">
                                                                                    <div style="width:30px; height:52px; border-left:2px solid #2ecc71; border-bottom:2px solid #2ecc71; position:relative;">
                                                                                        <div style="width:60px; height:2px; background:#2ecc71; position:absolute; top:0; left:0; transform:rotate(60deg); transform-origin:left top;"></div>
                                                                                    </div>
                                                                                    <b>1 : √3 : 2</b>
                                                                                </div>
                                                                            </div>
                                                                            <p style="font-size:12px; margin-top:10px;"><b>【他にも便利な比】</b><br>
                                                                            ・<b>5 : 12 : 13</b><br>
                                                                            ・<b>8 : 15 : 17</b><br>
                                                                            ・<b>7 : 24 : 25</b></p>
                                                                        </div>
                                    `,
                                    quizzes: [
                                        { question: "直角をはさむ2辺が 3, 4 のとき、斜辺は？", display: "3² + 4² = c²", answer: 5 },
                                        { question: "直角三角形の3辺の比 1 : 1 : √2 のときの角は？", display: "特別な三角形", answer: "45°, 45°, 90°", options: ["45°, 45°, 90°", "30°, 60°, 90°"] },
                                        { question: "3辺の比 1 : √3 : 2 のときの角は？", display: "特別な三角形", answer: "30°, 60°, 90°", options: ["30°, 60°, 90°", "45°, 45°, 90°"] },
                                        { question: "三平方の定理の別名は？", display: "別名", answer: "ピタゴラスの定理" },
                                        { question: "斜辺が 10、1辺が 6 のとき、残りの1辺は？", display: "10² - 6² = b²", answer: 8 }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [
                        {
                            title: "1. 関数 y ＝ ax²",
                            subUnits: [
                                {
                                    title: "(1) 2乗に比例する関数",
                                    content: `<h4>y は x の 2乗に比例する</h4>
                                    <div class="point-box">
                                        x の値を 2倍, 3倍... にすると、y の値が <b>4倍, 9倍...</b> になる関係だよ。<br>
                                        ・<b>式：y ＝ ax²</b>
                                    </div>
                                    <div class="data-demo">
                                        <p>例：y ＝ 2x² で x ＝ 3 のとき<br>
                                        y ＝ 2 ✕ 3² ＝ 2 ✕ 9 ＝ <b>18</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "y ＝ 3x² のとき、x ＝ 2 なら y はいくつ？", display: "3 ✕ 2²", answer: 12 },
                                        { question: "y ＝ －x² のとき、x ＝ 4 なら y はいくつ？", display: "－(4²)", answer: -16 },
                                        { question: "x ＝ 2 のとき y ＝ 20 なら、定数 a はいくつ？", display: "20 ＝ a ✕ 2²", answer: 5 },
                                        { question: "x ＝ －3 のとき y ＝ 18 なら、定数 a はいくつ？", display: "18 ＝ a ✕ (－3)²", answer: 2 },
                                        { question: "y ＝ ax² で、x が 4倍になると y は何倍になる？", display: "4の2乗", answer: 16 }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 放物線（ほうぶつせん）の特徴",
                            subUnits: [
                                {
                                    title: "(1) グラフの形と 向き",
                                    content: `<h4>なめらかな 曲線</h4>
                                    <div class="point-box">
                                        ・<b>a ＞ 0</b> ➔ 上に開く（谷の形）<br>
                                        ・<b>a ＜ 0</b> ➔ 下に開く（山の形）<br>
                                        ・<b>y軸</b> について対称な曲線だよ。
                                    </div>
                                    <div class="data-demo">
                                        <svg width="160" height="120" style="border-left:1px solid #ccc; border-bottom:1px solid #ccc; margin:0 auto; display:block; background:#fff;">
                                            <path d="M30,10 Q80,110 130,10" fill="none" stroke="#3498db" stroke-width="3" />
                                            <line x1="80" y1="0" x2="80" y2="120" stroke="#aaa" stroke-dasharray="4" />
                                        </svg>
                                        <p style="font-size:10px; text-align:center;">y ＝ ax² (a ＞ 0) のイメージ</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "y ＝ ax² のグラフの形を何という？", display: "用語", answer: "放物線", options: ["放物線", "双曲線", "直線"] },
                                        { question: "a の絶対値が大きくなると、グラフの開き方はどうなる？", display: "開き方", answer: "しぼむ (狭くなる)", options: ["広がる", "しぼむ (狭くなる)"] },
                                        { question: "y ＝ ax² のグラフが必ず通る点はどこ？", display: "座標", answer: "原点 (0,0)" }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 変化の割合",
                            subUnits: [
                                {
                                    title: "(1) 変化の割合の 計算",
                                    content: `<h4>一定ではない 変化</h4>
                                    <div class="point-box">
                                        ・<b>変化の割合 ＝ yの増加量 / xの増加量</b><br>
                                        関数 y ＝ ax² では、場所によって変化の割合が変わるよ。
                                    </div>
                                    <div class="data-demo">
                                        <p><b>【裏ワザ公式】</b></p>
                                        x が p から q まで変化するとき<br>
                                        <b>変化の割合 ＝ a(p ＋ q)</b>
                                    </div>`,
                                    quizzes: [
                                        { question: "y ＝ 2x² で、x が 1 から 3 まで変化する時の変化の割合は？", display: "2 ✕ (1 ＋ 3)", answer: 8 },
                                        { question: "y ＝ －x² で、x が 2 から 5 まで変化する時の変化の割合は？", display: "－1 ✕ (2 ＋ 5)", answer: -7 },
                                        { question: "y ＝ 3x² で、x が －2 から 4 まで変化する時の変化の割合は？", display: "3 ✕ (－2 ＋ 4)", answer: 6 },
                                        { question: "一次関数の変化の割合は一定だが、y＝ax²は一定？", display: "性質", answer: "いいえ", options: ["はい", "いいえ"] },
                                        { question: "y ＝ ax² で x が 0 から 2 まで変化する時の変化の割合が 6 のとき、a は？", display: "a ✕ (0 ＋ 2) ＝ 6", answer: 3 }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. いろいろな 関数",
                            subUnits: [
                                {
                                    title: "(1) 階段状のグラフ など",
                                    content: `<h4>日常にある 特殊な関数</h4>
                                    <div class="point-box">
                                        郵便料金や タクシー代のように、ある範囲で値が <b>階段状（ステップ状）</b> に変わる関数があるよ。
                                    </div>
                                    <div class="data-demo">
                                        <svg width="160" height="100" style="margin:0 auto; display:block;">
                                            <line x1="10" y1="80" x2="50" y2="80" stroke="#333" stroke-width="3" />
                                            <line x1="50" y1="50" x2="90" y2="50" stroke="#333" stroke-width="3" />
                                            <line x1="90" y1="20" x2="130" y2="20" stroke="#333" stroke-width="3" />
                                        </svg>
                                        <p style="font-size:10px; text-align:center;">階段状のグラフのイメージ</p>
                                    </div>`,
                                    quizzes: [
                                        { question: "重さによって料金が決まる郵便代金のグラフはどんな形？", display: "生活の中の関数", answer: "階段状", options: ["直線", "曲線", "階段状"] },
                                        { question: "階段状のグラフで、値がジャンプする境界線に注意が必要？", display: "見方", answer: "はい", options: ["はい", "いいえ"] },
                                        { question: "関数とは、xを決めるとyが「いくつ」決まる関係のこと？", display: "定義の復習", answer: "1つ", options: ["1つ", "2つ", "たくさん"] }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [
                        {
                            title: "1. 標本調査（ひょうほんちょうさ）と 全数調査",
                            subUnits: [
                                {
                                    title: "(1) 全て調べるか、一部を調べるか",
                                    content: `<h4>調査（ちょうさ）の方法</h4>
                                    <div class="point-box">
                                        ・<b>全数調査</b>：対象となるもの全てを調査する方法（国勢調査など）。<br>
                                        ・<b>標本調査</b>：全体の一部を取り出して調査し、全体を推測する方法。
                                    </div>
                                    <p>・<b>母集団（ぼしゅうだん）</b>：調査の対象全体の集まり。<br>
                                    ・<b>標本（ひょうほん）</b>：母集団から取り出した一部の集まり。</p>`,
                                    quizzes: [
                                        { question: "対象を1つ残らず全て調べる調査を何という？", display: "用語", answer: "全数調査", options: ["全数調査", "標本調査", "抜取り調査"] },
                                        { question: "電球の寿命テストのように、壊れるまで調べる場合に適した調査は？", display: "調査の選び方", answer: "標本調査", options: ["全数調査", "標本調査"] },
                                        { question: "調査の対象となる全体の集まりのことを何という？", display: "用語", answer: "母集団", options: ["母集団", "標本", "サンプル"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 標本誤差（ひょうほんごさ）",
                            subUnits: [
                                {
                                    title: "(1) 誤差と 信頼性",
                                    content: `<h4>推測（すいそく）には ズレがつきもの</h4>
                                    <div class="point-box">
                                        標本調査から得られた値と、真の値との差を <b>標本誤差</b> というよ。
                                    </div>
                                    <p>標本の大きさを <b>大きくする</b> ほど、誤差は小さくなり、信頼性は高くなるんだ！</p>`,
                                    quizzes: [
                                        { question: "標本調査の値と真の値とのズレを何という？", display: "用語", answer: "標本誤差", options: ["標本誤差", "有効数字", "近似値"] },
                                        { question: "標本の大きさを大きくすると、誤差はどうなりますか？", display: "信頼性", answer: "小さくなる", options: ["大きくなる", "小さくなる", "変わらない"] },
                                        { question: "テレビの視聴率調査は、標本調査の一種といえる？", display: "身近な例", answer: "はい", options: ["はい", "いいえ"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 無作為抽出（むさくいちゅうしゅつ）と 乱数",
                            subUnits: [
                                {
                                    title: "(1) 偏（かたよ）りなく 取り出そう",
                                    content: `<h4>公平（こうへい）な 選び方</h4>
                                    <div class="point-box">
                                        母集団の性質を正しく推測するには、個々のデータが選ばれる確率が等しくなるように選ぶ <b>無作為抽出</b> が不可欠だよ。
                                    </div>
                                    <p>・<b>乱数（らんすう）</b>：規則性がなく、でたらめに現れる数。無作為抽出に使うよ。</p>`,
                                    quizzes: [
                                        { question: "自分の好きな人だけを選んで調査するのは、無作為抽出といえる？", display: "選び方", answer: "いいえ", options: ["はい", "いいえ"] },
                                        { question: "でたらめに現れる数のことを何という？", display: "用語", answer: "乱数", options: ["乱数", "整数", "定数"] },
                                        { question: "公平に標本を選ぶために必要なことは何？", display: "抽出のルール", answer: "無作為に抽出する", options: ["無作為に抽出する", "大きい順に選ぶ"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. 母集団の 傾向の推定",
                            subUnits: [
                                {
                                    title: "(1) 比（ひ）を使って 全体を当てる",
                                    content: `<h4>一部から 全体を計算しよう</h4>
                                    <div class="point-box">
                                        <b>（母集団の数） : （標本の数） ＝ （母集団の対象数） : （標本の対象数）</b>
                                    </div>
                                    <div class="data-demo">
                                        <p>例：池の魚の数を推定する<br>
                                        ① 50匹つかまえて印をつけて戻す。<br>
                                        ② 後日 40匹つかまえたら、印付きが 4匹いた。<br>
                                        ➔ x : 50 ＝ 40 : 4 ➔ 4x ＝ 2000 ➔ <b>x ＝ 500匹</b></p>
                                    </div>`,
                                    quizzes: [
                                        { question: "袋の中の白玉の数を推定。標本50個中 白玉10個。袋全体が500個なら白玉は約何個？", display: "500 ✕ (10/50)", answer: 100 },
                                        { question: "ある池で100匹に印をつけた。後で80匹捕まえたら印付きが8匹。池の魚は約何匹？", display: "100 ✕ (80/8)", answer: 1000 },
                                        { question: "全1200人の学校で、無作為に選んだ100人のうち30人がメガネ。全校でメガネは約何人？", display: "1200 ✕ (30/100)", answer: 360 },
                                        { question: "みかん1000個中、50個を調べたら3個腐っていた。全体で腐っているのは約何個？", display: "1000 ✕ (3/50)", answer: 60 },
                                        { question: "標本調査で推測した値には、必ず「およそ（約）」をつけるべき？", display: "推定の性質", answer: "はい", options: ["はい", "いいえ"] }
                                    ]
                                }
                            ]
                        }
                    ] }
                ]
            },
            summary: {
                name: "重要まとめ",
                categories: [
                    { name: "1 数と計算の応用", units: [
                        {
                            title: "1. 利益（りえき）などの計算",
                            subUnits: [
                                {
                                    title: "(1) 原価・定価・売価",
                                    content: `<h4>商売（しょうばい）の計算</h4>
                                    <div class="point-box">
                                        ・<b>定価 ＝ 原価 ✕ (1 ＋ 利益率)</b><br>
                                        ・<b>売価 ＝ 定価 ✕ (1 － 割引率)</b><br>
                                        ・<b>利益 ＝ 売価 － 原価</b>
                                    </div>`,
                                    quizzes: [
                                        { question: "原価1000円に2割の利益をのせた定価は？", display: "1000 ✕ 1.2", answer: 1200 },
                                        { question: "定価2000円の3割引の売価は？", display: "2000 ✕ 0.7", answer: 1400 },
                                        { question: "原価800円、売価1000円のときの利益は？", display: "1000 － 800", answer: 200 },
                                        { question: "1500円の品物を10%引きで買った時の代金は？", display: "1500 ✕ 0.9", answer: 1350 },
                                        { question: "原価にのせる利益の割合のことを何という？", display: "用語", answer: "利益率", options: ["利益率", "割引率", "原価率"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 割合（わりあい）の総合",
                            subUnits: [
                                {
                                    title: "(1) 割合の使いこなし",
                                    content: `<h4>「く・わ・も」の復習</h4>
                                    <div class="point-box">
                                        ・<b>割合 ＝ 比べる量 ÷ もとにする量</b><br>
                                        ・<b>100% ＝ 1</b>（全体）として考えよう。
                                    </div>`,
                                    quizzes: [
                                        { question: "200人の80%は何人？", display: "200 ✕ 0.8", answer: 160 },
                                        { question: "40人は200人の何%？", display: "40 ÷ 200", answer: 20 },
                                        { question: "15人が全体の30%のとき、全体の人数は？", display: "15 ÷ 0.3", answer: 50 },
                                        { question: "割合 0.05 を百分率（%）で表すと？", display: "0.05 ✕ 100", answer: 5 },
                                        { question: "全体を「1」とした時の割合の表し方を何という？", display: "用語", answer: "割合", options: ["割合", "百分率", "歩合"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 仕事算（しごとざん）",
                            subUnits: [
                                {
                                    title: "(1) 全体の仕事を 1 とおく",
                                    content: `<h4>協力して終わらせよう</h4>
                                    <div class="point-box">
                                        ・全体の仕事量を <b>1</b> とおく。<br>
                                        ・1日（1時間）あたりの仕事量をだして、足し合わせる。
                                    </div>`,
                                    quizzes: [
                                        { question: "Aが12日、Bが12日で終わる仕事。2人ですると何日？", display: "1 ÷ (1/12 + 1/12)", answer: 6 },
                                        { question: "Aが20分、Bが30分で終わる仕事。2人ですると何分？", display: "1 ÷ (1/20 + 1/30)", answer: 12 },
                                        { question: "仕事算で、最初に決める「全体の量」は普通いくつ？", display: "考え方", answer: 1, options: [1, 100, 0] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "4. 濃度（のうど）",
                            subUnits: [
                                {
                                    title: "(1) 食塩水の濃さ",
                                    content: `<h4>溶けている量を考えよう</h4>
                                    <div class="point-box">
                                        <b>濃度(%) ＝（食塩 / 食塩水）✕ 100</b><br>
                                        ※ 食塩水 ＝ 食塩 ＋ 水
                                    </div>`,
                                    quizzes: [
                                        { question: "水90gに食塩10gを溶かした濃度は？", display: "10 ÷ (90+10)", answer: 10 },
                                        { question: "200gの5%食塩水に含まれる食塩は何g？", display: "200 ✕ 0.05", answer: 10 },
                                        { question: "食塩12gが溶けている濃度6%の食塩水は何g？", display: "12 ÷ 0.06", answer: 200 },
                                        { question: "水を追加すると、濃度はどうなりますか？", display: "性質", answer: "薄くなる", options: ["濃くなる", "薄くなる"] },
                                        { question: "濃度10%の食塩水100gと水100gを混ぜると濃度は何%？", display: "10 ÷ 200", answer: 5 }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "2 図形と空間", units: [
                        {
                            title: "1. 展開図と 断面（だんめん）",
                            subUnits: [
                                {
                                    title: "(1) 立体を切る・開く",
                                    content: `<h4>頭の中で組み立てよう</h4>
                                    <div class="point-box">
                                        ・<b>断面</b>：立体を平面で切ったときの切り口。<br>
                                        ・<b>最短距離</b>：展開図上で <b>直線</b> をひいて考える。
                                    </div>`,
                                    quizzes: [
                                        { question: "立方体を1つの平面で切った時、断面が三角形になることはある？", display: "切断", answer: "ある", options: ["ある", "ない"] },
                                        { question: "円柱を軸に並行に切った断面の形は？", display: "切断", answer: "長方形", options: ["円", "長方形", "楕円"] },
                                        { question: "立方体の表面を通る最短距離を求めるのに使う図は？", display: "道具", answer: "展開図", options: ["見取り図", "展開図", "投影図"] }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "3 関数とグラフ", units: [
                        {
                            title: "1. みはじ（道のり・速さ・時間）",
                            subUnits: [
                                {
                                    title: "(1) 3つの関係のまとめ",
                                    content: `<h4>公式の使い分け</h4>
                                    <div style="display:flex; justify-content:center; margin:10px;">
                                        <div style="width:60px; height:60px; border:2px solid #333; border-radius:50%; display:flex; flex-direction:column; align-items:center; overflow:hidden;">
                                            <div style="flex:1; border-bottom:1px solid #333; width:100%; display:flex; justify-content:center; align-items:center; font-weight:bold;">み</div>
                                            <div style="flex:1; width:100%; display:flex;">
                                                <div style="flex:1; border-right:1px solid #333; display:flex; justify-content:center; align-items:center; font-weight:bold;">は</div>
                                                <div style="flex:1; display:flex; justify-content:center; align-items:center; font-weight:bold;">じ</div>
                                            </div>
                                        </div>
                                    </div>`,
                                    quizzes: [
                                        { question: "分速80mで15分走った道のりは？", display: "80 ✕ 15", answer: 1200 },
                                        { question: "12kmを時速4kmで歩いた時間は？", display: "12 ÷ 4", answer: 3 },
                                        { question: "100mを20秒で走った時の秒速は？", display: "100 ÷ 20", answer: 5 },
                                        { question: "分速60mは、時速何km？", display: "(60 ✕ 60) ÷ 1000", answer: 3.6 },
                                        { question: "道のりを出す式は？", display: "公式", answer: "速さ ✕ 時間", options: ["速さ ✕ 時間", "速さ ÷ 時間"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. グラフの領域（りょういき）",
                            subUnits: [
                                {
                                    title: "(1) 不等式と グラフの範囲",
                                    content: `<h4>境界線のどちら側？</h4>
                                    <div class="point-box">
                                        ・<b>y ＞ ax ＋ b</b> ➔ 直線より <b>上側</b><br>
                                        ・<b>y ＜ ax ＋ b</b> ➔ 直線より <b>下側</b>
                                    </div>`,
                                    quizzes: [
                                        { question: "y ≧ x の領域は、直線 y=x の上側・下側どっち？", display: "範囲", answer: "上側", options: ["上側", "下側"] },
                                        { question: "x² + y² ≦ 1 が表す領域の形は？", display: "円の式", answer: "円の内側", options: ["円の内側", "円の外側", "四角形"] },
                                        { question: "不等号に「＝」がついている時、境界線は含みますか？", display: "ルール", answer: "含む", options: ["含む", "含まない"] }
                                    ]
                                }
                            ]
                        }
                    ] },
                    { name: "4 データ・推論", units: [
                        {
                            title: "1. 表・資料の読み取り",
                            subUnits: [
                                {
                                    title: "(1) 必要なデータを探す",
                                    content: `<h4>正確に 情報をぬきだそう</h4>
                                    <div class="point-box">
                                        大きな表から、計算に必要な数字だけを 正確に選ぶ練習だよ。
                                    </div>`,
                                    quizzes: [
                                        { question: "1月から12月の表から、夏（7-9月）の合計を出す時、使うのは何ヶ月分？", display: "抽出", answer: 3 },
                                        { question: "前年比110%とは、前年より増えた？減った？", display: "割合の読解", answer: "増えた", options: ["増えた", "減った"] },
                                        { question: "平均値と合計値、どちらが全体の規模を表しやすい？", display: "読み取り", answer: "合計値", options: ["合計値", "平均値"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "2. 順列 と 組み合わせ",
                            subUnits: [
                                {
                                    title: "(1) 並べるか、選ぶか",
                                    content: `<h4>パターンの数え方</h4>
                                    <div class="point-box">
                                        ・<b>順列</b>：順番が関係ある（リレーの走順など）。<br>
                                        ・<b>組み合わせ</b>：順番は関係ない（掃除当番など）。
                                    </div>`,
                                    quizzes: [
                                        { question: "4人から2人選ぶ組み合わせは何通り？", display: "4 ✕ 3 ÷ 2", answer: 6 },
                                        { question: "3人を1列に並べる方法は何通り？", display: "3 ✕ 2 ✕ 1", answer: 6 },
                                        { question: "A,B,Cの3人から代表1人、副代表1人を選ぶのはどっち？", display: "判定", answer: "順列", options: ["順列", "組み合わせ"] },
                                        { question: "5種類のアイスから2つ選ぶ方法は？", display: "5 ✕ 4 ÷ 2", answer: 10 },
                                        { question: "「n人を並べる」計算で、nから1まで順にかけることを何という？", display: "用語", answer: "階乗", options: ["階乗", "累乗", "約数"] }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "3. 確率（かくりつ）",
                            subUnits: [
                                {
                                    title: "(1) 期待される割合",
                                    content: `<h4>起こりやすさの数値</h4>
                                    <div class="point-box">
                                        <b>確率 ＝ 求める場合 / すべての場合</b>
                                    </div>`,
                                    quizzes: [
                                        { question: "1つのサイコロで偶数が出る確率は？", display: "3/6", answer: "1/2" },
                                        { question: "2枚のコインが両方表になる確率は？", display: "1/4", answer: "1/4" },
                                        { question: "当たりが2本入った10本のくじで、1本引いて当たる確率は？", display: "2/10", answer: "1/5" },
                                        { question: "確率は最大でいくつになりますか？", display: "数値", answer: 1 },
                                        { question: "「降水確率0%」は、絶対に雨が降らないという意味？", display: "統計の考え方", answer: "はい", options: ["はい", "いいえ"] }
                                    ]
                                }
                            ]
                        },
                                                        {
                                                            title: "4. 集合（しゅうごう）",
                                                            subUnits: [
                                                                {
                                                                    title: "(1) 重なりを考えよう",
                                                                    content: `<h4>ベン図 で整理しよう</h4>
                                                                    <div class="data-demo">
                                                                        <svg width="200" height="120" style="margin:0 auto; display:block;">
                                                                            <!-- 円A -->
                                                                            <circle cx="70" cy="60" r="45" fill="rgba(52, 152, 219, 0.3)" stroke="#3498db" stroke-width="2" />
                                                                            <!-- 円B -->
                                                                            <circle cx="130" cy="60" r="45" fill="rgba(231, 76, 60, 0.3)" stroke="#e74c3c" stroke-width="2" />
                                                                            <text x="40" y="65" font-size="14" font-weight="bold" fill="#2980b9">A</text>
                                                                            <text x="150" y="65" font-size="14" font-weight="bold" fill="#c0392b">B</text>
                                                                        </svg>
                                                                        <p style="font-size:11px; text-align:center;">重なっている部分が <b>「A かつ B」</b> だよ</p>
                                                                    </div>
                                                                    <div class="point-box">
                                                                        ・<b>和集合 (A ∪ B)</b>：A または B（どちらかに入っていればOK）。<br>
                                                                        ・<b>共通部分 (A ∩ B)</b>：A かつ B（両方に入っている）。
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "A(10人), B(8人)で共通が3人のとき、AまたはBの合計は？", display: "10 + 8 - 3", answer: 15 },
                                                                        { question: "「AであってBでない」人を求める式は？", display: "引き算", answer: "A - 共通部分", options: ["A - 共通部分", "A + B", "B - A"] },
                                                                        { question: "集合を円で囲って表した図を何という？", display: "用語", answer: "ベン図", options: ["ベン図", "樹形図", "線分図"] }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                        
                        {
                            title: "5. 推論 と 論証",
                            subUnits: [
                                {
                                    title: "(1) 正しい結論をみちびく",
                                    content: `<h4>論理的なパズル</h4>
                                    <div class="point-box">
                                        「AならBである」という条件を組み合わせて、新しい事実を見つけることだよ。
                                    </div>`,
                                    quizzes: [
                                        { question: "「AならB」「BならC」のとき言えるのは？", display: "三段論法", answer: "AならC", options: ["AならC", "CならA", "BならA"] },
                                        { question: "「すべての人間は死ぬ」「ソクラテスは人間だ」よって？", display: "推論", answer: "ソクラテスは死ぬ" },
                                        { question: "推論をする時に、図（ベン図など）をかくと整理しやすい？", display: "コツ", answer: "はい", options: ["はい", "いいえ"] }
                                    ]
                                }
                            ]
                        }
                    ] }
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
                elementary: { 
                    name: "小学生", 
                    categories: [
                        { 
                            name: "生物", 
                            units: [
                                {
                                    title: "1. 昆虫（こんちゅう）",
                                    subUnits: [
                                        {
                                            title: "(1) 昆虫（こんちゅう）の 育（そだ）ち方",
                                            content: `<h4>成長（せいちょう）の じゅんじょ</h4>
                                            <div class="point-box">
                                                ・多くの昆虫は<b>「卵 ➔ 幼虫 ➔ 蛹（さなぎ） ➔ 成虫」</b>という じゅんじょで 成長します。これを<b>完全変態（かんぜんへんたい）</b>と呼びます。<br>
                                                ・幼虫の時期は 食べ物をたくさん食べて 脱皮（だっぴ）をくり返しますが、<b>蛹の時期は 食べ物を食べません。</b>
                                            </div>
                                            <h4>蛹（さなぎ）に ならない 昆虫</h4>
                                            <div class="point-box">
                                                ・バッタやカマキリのように、蛹にならずに<b>「卵 ➔ 幼虫 ➔ 成虫」</b>と育つ昆虫もいます。これを<b>不完全変態（ふかんぜんへんたい）</b>と呼びます。
                                            </div>`,
                                            quizzes: [
                                                { question: "モンシロチョウのように、蛹（さなぎ）になる育ち方を何という？", display: "育ち方", answer: "完全変態", options: ["完全変態", "不完全変態"] },
                                                { question: "昆虫が、蛹（さなぎ）の時期にすることはどれ？", display: "蛹の様子", answer: "じっとして食べない", options: ["じっとして食べない", "たくさん食べる", "脱皮をくり返す"] },
                                                { question: "蛹（さなぎ）にならない昆虫はどれ？", display: "昆虫の種類", answer: "バッタ", options: ["バッタ", "モンシロチョウ", "カブトムシ"] }
                                            ]
                                        },
                                        {
                                            title: "(2) 昆虫（こんちゅう）の 体（からだ）の つくり",
                                            content: `<h4>体の 区分（くぶん）</h4>
                                            <div class="point-box">
                                                ・昆虫の体は<b>「頭（あたま）」「胸（むね）」「腹（はら）」</b>の 3つの部分に 分かれています。
                                            </div>
                                            <h4>それぞれの 部分の とくちょう</h4>
                                            <div class="point-box">
                                                ・<b>頭部</b>：目、触角（しょっかく）、口があります。<br>
                                                ・<b>胸部</b>：<b>3対6本の あし</b>があり、多くは「はね」もついています。<br>
                                                ・<b>腹部</b>：いくつかの 節（ふし）で できています。
                                            </div>`,
                                            quizzes: [
                                                { question: "昆虫のあしは、全部で何本かな？", display: "あしの数", answer: "6本", options: ["6本", "4本", "8本"] },
                                                { question: "昆虫のあしは、体のどの部分についているかな？", display: "あしの場所", answer: "胸（むね）", options: ["胸（むね）", "頭（あたま）", "腹（はら）"] },
                                                { question: "昆虫の体は、頭・腹ともう一つ何に分かれている？", display: "体のつくり", answer: "胸（むね）", options: ["胸（むね）", "背中", "腰"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "2. 植物（しょくぶつ）",
                                    subUnits: [
                                        {
                                            title: "(ア) 植物（しょくぶつ）の 成長（せいちょう）",
                                            content: `<h4>植物（しょくぶつ）の 一生（いっしょう）</h4>
                                            <div class="point-box">
                                                ・植物には<b>「種子（しゅし） ➔ 発芽（はつが） ➔ 子葉（しよう） ➔ 葉がしげる ➔ 花が咲く ➔ 果実・種子ができる ➔ 枯死（こし）」</b>という、一定のサイクルがあります。
                                            </div>
                                            <h4>共通（きょうつう）の流れ</h4>
                                            <div class="point-box">
                                                ・ヒマワリやホウセンカなど、多くの植物で同じような一生の流れが見られます。
                                            </div>`,
                                            quizzes: [
                                                { question: "植物の芽（め）が出ることを何という？", display: "用語", answer: "発芽", options: ["発芽", "開花", "枯死"] },
                                                { question: "発芽して最初に出る葉のことを何という？", display: "葉の名前", answer: "子葉", options: ["子葉", "本葉", "枯れ葉"] },
                                                { question: "花が咲いた後にできるものは何かな？", display: "一生の流れ", answer: "果実や種子", options: ["果実や種子", "根", "子葉"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 植物（しょくぶつ）の 体（からだ）の つくり",
                                            content: `<h4>部位（ぶい）の 名前</h4>
                                            <div class="point-box">
                                                ・植物の体は、主に<b>「根（ね）」「茎（くき）」「葉（は）」</b>の 3つの部分から できています。
                                            </div>
                                            <h4>役割（やくわり）と 位置（いち）</h4>
                                            <div class="point-box">
                                                ・<b>根</b>：主に地中にあり、水や養分を吸い上げたり、体を支えたりします。<br>
                                                ・<b>茎</b>：葉や花を支え、根から吸い上げた水の通り道になります。
                                            </div>`,
                                            quizzes: [
                                                { question: "植物の体は、茎・葉ともう一つ何からできている？", display: "体のつくり", answer: "根", options: ["根", "花", "種"] },
                                                { question: "主に地面（じめん）の下にある部分はどこかな？", display: "部位の場所", answer: "根", options: ["根", "茎", "葉"] },
                                                { question: "葉や花を支（ささ）えている部分はどこかな？", display: "部位の役割", answer: "茎", options: ["茎", "根", "葉"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "3. 人（ひと）の 体（からだ）",
                                    subUnits: [
                                        {
                                            title: "(ア) 骨（ほね）と 筋肉（きんにく）の 存在（そんざい）",
                                            content: `<h4>体を 支（ささ）える 骨と 筋肉</h4>
                                            <div class="point-box">
                                                ・体には、かたい部分としての <b>骨（ほね）</b>と、やわらかい部分としての <b>筋肉（きんにく）</b>が あります。<br>
                                                ・骨や 筋肉は、体を 支えたり 動かしたりするために とても大切な 役割（やくわり）を はたしています。
                                            </div>`,
                                            quizzes: [
                                                { question: "体の中にある「かたい部分」の名前は何かな？", display: "体のつくり", answer: "骨（ほね）", options: ["骨（ほね）", "筋肉（きんにく）", "皮"] },
                                                { question: "筋肉（きんにく）の役割（やくわり）として正しいのはどれ？", display: "役割", answer: "体を動かす", options: ["体を動かす", "物を見る", "音を聞く"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 体の 動きの しくみ",
                                            content: `<h4>どうやって 動（うご）いているの？</h4>
                                            <div class="point-box">
                                                ・腕（うで）や 足などを 動かすとき、<b>筋肉が 縮（ちぢ）んだり 緩（ゆる）んだりする</b> ことで、骨を 動かしています。
                                            </div>
                                            <h4>曲（ま）がるところ「関節（かんせつ）」</h4>
                                            <div class="point-box">
                                                ・手や 足には、曲がるところと 曲がらないところが あります。<br>
                                                ・曲がるところを <b>関節（かんせつ）</b> と 呼びます。
                                            </div>`,
                                            quizzes: [
                                                { question: "腕を曲げるとき、筋肉（きんにく）はどうなっているかな？", display: "筋肉の動き", answer: "縮（ちぢ）む", options: ["縮（ちぢ）む", "伸びる", "消える"] },
                                                { question: "手や足の「曲がるところ」の名前を何という？", display: "用語", answer: "関節（かんせつ）", options: ["関節（かんせつ）", "骨折", "脱皮"] },
                                                { question: "筋肉（きんにく）がつながっている「かたいもの」は何かな？", display: "体の仕組み", answer: "骨（ほね）", options: ["骨（ほね）", "爪（つめ）", "髪の毛"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "4. 生物（せいぶつ）と 季節（きせつ）",
                                    subUnits: [
                                        {
                                            title: "(ア) 動物（どうぶつ）の 活動（かつどう）と 季節",
                                            content: `<h4>暖かい（あたたかい）季節</h4>
                                            <div class="point-box">
                                                ・暖かくなると、動物の 数が多くなり、食べ物をさがしたり 子供を育てたりする 活動が 活発（かっぱつ）になります。
                                            </div>
                                            <h4>寒い（さむい）季節</h4>
                                            <div class="point-box">
                                                ・冬になると、活動が にぶくなったり、卵や さなぎの姿で <b>越冬（えっとう）</b>したりするものが 多くなります。<br>
                                                ・魚や カエルなどは 水温の変化に、鳥は 渡（わた）りなどの 時期に 季節の影響を 受けています。
                                            </div>`,
                                            quizzes: [
                                                { question: "寒い冬をこすことを、漢字で何というかな？", display: "用語", answer: "越冬（えっとう）", options: ["越冬（えっとう）", "冬眠", "冬休み"] },
                                                { question: "多くの動物が活発に動き回るのは、どんな季節かな？", display: "活動と季節", answer: "暖かい季節", options: ["暖かい季節", "寒い季節"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 植物（しょくぶつ）の 成長（せいちょう）と 季節",
                                            content: `<h4>春から 夏にかけて</h4>
                                            <div class="point-box">
                                                ・暖かくなるにつれて、茎（くき）が のびたり 葉が しげったりするなど、体全体が 大きく成長します。
                                            </div>
                                            <h4>秋から 冬にかけて</h4>
                                            <div class="point-box">
                                                ・寒くなると 成長は 止まりますが、果実が 実ったり <b>種子（しゅし）</b> が できたりします。<br>
                                                ・冬には、種子を残して 枯（か）れるものや、<b>冬芽（とうが）</b> や 地下茎（ちかけい）などの 姿で 冬をこすものが あります。
                                            </div>`,
                                            quizzes: [
                                                { question: "木が冬をこすために準備（じゅんび）する、春に芽吹く部分の名前は？", display: "用語", answer: "冬芽（とうが）", options: ["冬芽（とうが）", "種子", "花びら"] },
                                                { question: "植物が最も大きく、活発に成長するのはいつかな？", display: "成長と季節", answer: "春から夏", options: ["春から夏", "秋から冬"] },
                                                { question: "冬に種子（しゅし）だけを残して全体が枯れてしまう植物はある？", display: "冬の姿", answer: "ある", options: ["ある", "ない"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "5. 植物（しょくぶつ）の 成長（せいちょう）",
                                    subUnits: [
                                        {
                                            title: "(ア)(イ) 発芽（はつが）の 条件（じょうけん）と 養分（ようぶん）",
                                            content: `<h4>発芽（はつが）の 3条件</h4>
                                            <div class="point-box">
                                                種子が 芽（め）を出すためには、次の 3つが 必要です。<br>
                                                <b>① 水　② 空気（くうき）　③ 適当（てきとう）な 温度</b>
                                            </div>
                                            <h4>種子（しゅし）の 養分（ようぶん）</h4>
                                            <div class="point-box">
                                                ・種子の中には、発芽するための 養分（でんぷん）が つまっています。<br>
                                                ・<b>ヨウ素液（よそえき）</b>を つけると、青むらさき色に 変わることで 確認できます。
                                            </div>`,
                                            quizzes: [
                                                { question: "植物が発芽するために必要な「3つの条件」はどれ？", display: "発芽の条件", answer: "水・空気・適当な温度", options: ["水・空気・適当な温度", "水・土・日光", "空気・肥料・暗い場所"] },
                                                { question: "種子に含まれる養分（でんぷん）を調べるために使う液の名前は？", display: "ヨウ素液", answer: "ヨウ素液", options: ["ヨウ素液", "食塩水", "石灰水"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 成長（せいちょう）の 条件（じょうけん）",
                                            content: `<h4>芽が出たあとの 成長</h4>
                                            <div class="point-box">
                                                ・発芽したあとの 植物が 大きく育つためには、主に <b>日光（にっこう）</b> や <b>肥料（ひりょう）</b> が 関係しています。
                                            </div>`,
                                            quizzes: [
                                                { question: "植物が発芽したあと、元気に大きく育つために必要なものはどれかな？", display: "成長の条件", answer: "日光や肥料", options: ["日光や肥料", "暗い場所", "氷"] }
                                            ]
                                        },
                                        {
                                            title: "(エ) 花の つくりと 実",
                                            content: `<h4>実ができる しくみ</h4>
                                            <div class="point-box">
                                                ・花には <b>おしべ</b> と <b>めしべ</b> があります。<br>
                                                ・めしべの先に 花粉（かふん）が つくことを <b>受粉（じゅふん）</b> といい、受粉すると 実ができ、その中に 種子ができます。
                                            </div>
                                            <h4>花粉（かふん）を はこぶ 仲間</h4>
                                            <div class="point-box">
                                                ・自然界（しぜんかい）では、<b>風</b> や <b>昆虫（こんちゅう）</b> が 花粉をはこぶ 大切な役割を はたしています。
                                            </div>`,
                                            quizzes: [
                                                { question: "めしべの先に花粉がつくことを何という？", display: "用語", answer: "受粉（じゅふん）", options: ["受粉（じゅふん）", "発芽", "蒸発"] },
                                                { question: "昆虫（チョウやハチなど）が花にやってくる大切な理由は？", display: "昆虫の役割", answer: "花粉をはこぶため", options: ["花粉をはこぶため", "花を食べるため", "遊ぶため"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "6. 動物（どうぶつ）の 誕生（たんじょう）と 成長（せいちょう）",
                                    subUnits: [
                                        {
                                            title: "(ア) 魚（さかな）の 誕生（たんじょう）",
                                            content: `<h4>メダカの オスと メス</h4>
                                            <div class="point-box">
                                                ・魚には オスと メス（雌雄）があり、ひれの形などに ちがいが あります。
                                            </div>
                                            <h4>卵（たまご）の 変化（へんか）と ふ化</h4>
                                            <div class="point-box">
                                                ・受精卵（じゅせいらん）は 時間がたつにつれて、中の様子が変わり、やがて <b>ふ化</b>（赤ちゃんが生まれること）します。<br>
                                                ・卵の中にも、赤ちゃんが育つための 養分（ようぶん）が ふくまれています。
                                            </div>`,
                                            quizzes: [
                                                { question: "メダカの卵から赤ちゃんが生まれることを何という？", display: "用語", answer: "ふ化", options: ["ふ化", "受粉", "脱皮"] },
                                                { question: "メダカの赤ちゃんは、育つための養分（食べ物）をどこからもらっているかな？", display: "養分", answer: "卵の中", options: ["卵の中", "外の食べ物", "お母さんのお腹"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 人（ひと）の 誕生（たんじょう）",
                                            content: `<h4>お腹（なか）の中での 成長（せいちょう）</h4>
                                            <div class="point-box">
                                                ・人は 母体（お母さん）の中の <b>子宮（しきゅう）</b> で、受精卵から 少しずつ 体ができていきます。
                                            </div>
                                            <h4>へそ（お）の 役割（やくわり）</h4>
                                            <div class="point-box">
                                                ・赤ちゃん（胎児）は <b>へその緒</b> を通して、お母さんから <b>養分（ようぶん）や 酸素（さんそ）</b> をもらって 大きくなります。
                                            </div>`,
                                            quizzes: [
                                                { question: "お母さんのお腹の中で、赤ちゃんが育つ場所の名前は？", display: "用語", answer: "子宮（しきゅう）", options: ["子宮（しきゅう）", "胃", "心臓"] },
                                                { question: "赤ちゃんがお母さんから養分や酸素をもらうための管（くだ）の名前は？", display: "用語", answer: "へその緒", options: ["へその緒", "血管", "筋肉"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "7. 動物（どうぶつ）の 体（からだ）の 働（はたら）き",
                                    subUnits: [
                                        {
                                            title: "(ア) 呼吸（こきゅう）の 働（はたら）き",
                                            content: `<h4>空気（くうき）の 出（で）入り</h4>
                                            <div class="point-box">
                                                ・わたしたちは <b>肺（はい）</b> を 通（とお）して 呼吸（こきゅう）を しています。<br>
                                                ・吸（す）い込（こ）んだ 空気（くうき）の中の <b>酸素（さんそ）</b> を 血液（けつえき）に 取り入れ、体の中で できた <b>二酸化炭素（にさんかたんそ）</b> を 外（そと）に 出（だ）しています。
                                            </div>`,
                                            quizzes: [
                                                { question: "呼吸（こきゅう）をするとき、体に取り入れている気体は何かな？", display: "取り入れる気体", answer: "酸素", options: ["酸素", "二酸化炭素", "窒素"] },
                                                { question: "呼吸に関係（かんけい）している、胸にある臓器（ぞうき）の名前は？", display: "臓器の名前", answer: "肺（はい）", options: ["肺（はい）", "胃", "心臓"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 消化（しょうか）と 吸収（きゅうしゅう）",
                                            content: `<h4>食べ物の 通（とお）り道（みち）</h4>
                                            <div class="point-box">
                                                ・食べた物は、<b>口 ➔ 食道（しょくどう） ➔ 胃（い） ➔ 小腸（しょうちょう） ➔ 大腸（だいちょう）</b> を 通る間に 消化されます。
                                            </div>
                                            <h4>養分（ようぶん）の 吸収</h4>
                                            <div class="point-box">
                                                ・消化された 養分は、主に <b>小腸（しょうちょう）</b> で 吸収されて 血液に 入ります。<br>
                                                ・残（のこ）った カスは 大腸を通って <b>肛門（こうもん）</b> から 排出されます。
                                            </div>`,
                                            quizzes: [
                                                { question: "食べ物の養分（ようぶん）が、主に吸収される場所はどこかな？", display: "吸収される場所", answer: "小腸", options: ["小腸", "胃", "大腸"] },
                                                { question: "食べた物が通る順番で、胃（い）の次に行くのはどこかな？", display: "通り道", answer: "小腸", options: ["小腸", "大腸", "食道"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 血液（けつえき）の 循環（じゅんかん）",
                                            content: `<h4>心臓（しんぞう）の ポンプ</h4>
                                            <div class="point-box">
                                                ・<b>心臓（しんぞう）</b> は ポンプのような 役割を 果たし、たえず 血液を 全身（ぜんしん）に 送り出しています。
                                            </div>
                                            <h4>血液の 役割</h4>
                                            <div class="point-box">
                                                ・血液は、<b>酸素（さんそ）や 養分（ようぶん）</b> を 全身の 細胞（さいぼう）に 運びます。<br>
                                                ・また、いらなくなった <b>二酸化炭素（にさんかたんそ）</b> などを 回収（かいしゅう）して 戻ってきます。
                                            </div>`,
                                            quizzes: [
                                                { question: "血液（けつえき）を全身に送り出すポンプの役割をしている臓器は？", display: "ポンプの役割", answer: "心臓", options: ["心臓", "肺", "肝臓"] },
                                                { question: "血液が全身の細胞（さいぼう）に運んでいる、大切なものは何かな？", display: "運んでいるもの", answer: "酸素や養分", options: ["酸素や養分", "水だけ", "二酸化炭素"] }
                                            ]
                                        },
                                        {
                                            title: "(エ) 臓器（ぞうき）の 連携（れんけい）",
                                            content: `<h4>みんな つながっている</h4>
                                            <div class="point-box">
                                                ・体の中では、<b>肺（呼吸）</b>、<b>胃・腸（消化・吸収）</b>、<b>心臓（循環）</b>、<b>腎臓（排出）</b> などの 各臓器が 助け合って 働いています。<br>
                                                ・これらが 連携（れんけい）することで、わたしたちの 生命（せいめい）は 維持（いじ）されています。
                                            </div>`,
                                            quizzes: [
                                                { question: "いらなくなったものを、体の外に出す（排出）働きに関係する臓器はどれ？", display: "排出の働き", answer: "腎臓", options: ["腎臓", "心臓", "胃"] },
                                                { question: "肺（はい）は「呼吸」、胃（い）は「消化」のように、臓器はそれぞれ役割が決まっている？", display: "臓器の役割", answer: "はい", options: ["はい", "いいえ"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "8. 植物（しょくぶつ）と 水（みず）",
                                    subUnits: [
                                        {
                                            title: "(ア) 葉での 養分（ようぶん）づくり",
                                            content: `<h4>光（ひかり）と 養分（ようぶん）</h4>
                                            <div class="point-box">
                                                ・植物は <b>日光（にっこう）</b> に 当（あ）たることで、葉の中で <b>でんぷん（養分）</b> を 作り出しています。<br>
                                                ・葉に <b>ヨウ素液（よそえき）</b> を つけると、青むらさき色に 変わることで、でんぷんが できたことを 確（たし）かめられます。
                                            </div>`,
                                            quizzes: [
                                                { question: "植物が葉で養分（でんぷん）を作るために必要なものは何かな？", display: "必要なもの", answer: "日光", options: ["日光", "肥料", "土"] },
                                                { question: "葉にでんぷんができたことを調べるために使う液の名前は？", display: "液の名前", answer: "ヨウ素液", options: ["ヨウ素液", "石灰水", "食塩水"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 水の 通り道（みち）と 蒸散（じょうさん）",
                                            content: `<h4>水の 通り道</h4>
                                            <div class="point-box">
                                                ・根から 吸い上げられた 水は、<b>茎（くき）</b> を 通って 葉まで 運（はこ）ばれます。<br>
                                                ・植物の 体の中には、水の 運搬（うんぱん）のための <b>専用（せんよう）の 通り道</b> が あります。
                                            </div>
                                            <h4>蒸散（じょうさん）の しくみ</h4>
                                            <div class="point-box">
                                                ・体に取り込まれた 水は、主に <b>葉（は）</b> から 水蒸気（すいじょうき）となって 外（そと）に 出ていきます。これを <b>蒸散（じょうさん）</b> といいます。
                                            </div>`,
                                            quizzes: [
                                                { question: "根から吸い上げた水は、体のどこを通って葉まで運ばれるかな？", display: "水の通り道", answer: "茎（くき）", options: ["茎（くき）", "花びら", "実"] },
                                                { question: "葉から水が水蒸気（すいじょうき）になって出ていくことを何という？", display: "用語", answer: "蒸散", options: ["蒸散", "蒸発", "受粉"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "9. 生物（せいぶつ）と 環境（かんきょう）",
                                    subUnits: [
                                        {
                                            title: "(ア) 生物（せいぶつ）と 空気（くうき）・水（みず）の 関（かか）わり",
                                            content: `<h4>なくては ならないもの</h4>
                                            <div class="point-box">
                                                ・すべての 生物は、<b>空気（くうき）や 水（みず）</b> が ないと 生きていくことが できません。
                                            </div>
                                            <h4>酸素（さんそ）と 二酸化炭素（にさんかたんそ）の バランス</h4>
                                            <div class="point-box">
                                                ・動物は 呼吸（こきゅう）で 酸素を 吸（す）って 二酸化炭素を 出（だ）します。<br>
                                                ・植物は 日光が 当（あ）たると <b>二酸化炭素を 吸（す）って 酸素を 出（だ）す</b>（光合成）ため、空気の バランスが 保（たも）たれています。
                                            </div>`,
                                            quizzes: [
                                                { question: "植物が日光に当たっているとき、空気中に出している気体は何かな？", display: "出す気体", answer: "酸素", options: ["酸素", "二酸化炭素", "窒素"] },
                                                { question: "生物が生きていくために、どうしても必要なものはどれかな？", display: "必要なもの", answer: "空気や水", options: ["空気や水", "お菓子", "テレビ"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 生物（せいぶつ）同士（どうし）の 関（かか）わり（食物連鎖）",
                                            content: `<h4>「食（く）う・食（く）われる」の関係</h4>
                                            <div class="point-box">
                                                ・生物の間には、<b>「食べられる側（がわ）」と「食べる側（がわ）」</b> という つながりが あります。これを <b>食物連鎖（しょくもつれんさ）</b> といいます。
                                            </div>
                                            <h4>命（いのち）の つながり</h4>
                                            <div class="point-box">
                                                ・水中の 小さな 生物を 小さな 魚が 食べ、その魚を 大きな 魚や 鳥が 食べるというように、命は つながっています。
                                            </div>`,
                                            quizzes: [
                                                { question: "生物の「食べる・食べられる」というつながりのことを何という？", display: "用語", answer: "食物連鎖", options: ["食物連鎖", "お友達", "リサイクル"] },
                                                { question: "池や海の中で、一番小さな生き物を食べるのはどんな生き物かな？", display: "つながり", answer: "小さな魚など", options: ["小さな魚など", "一番大きなクジラ", "人間だけ"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 人（ひと）と 環境（かんきょう）",
                                            content: `<h4>わたしたちに できること</h4>
                                            <div class="point-box">
                                                ・人の 生活（せいかつ）は、自然（しぜん）環境に 大きな 影響（えいきょう）を 与（あた）えています。<br>
                                                ・資源（しげん）を 大切に 使ったり、ゴミを 減（へ）らしたりするなど、<b>環境を守るための 工夫（くふう）</b> が 大切です。
                                            </div>
                                            <h4>持続可能（じぞくかのう）な 社会（しゃかい）</h4>
                                            <div class="point-box">
                                                ・未来（みらい）まで ずっと 自然と いっしょに 暮（く）らしていけるように 考（かんが）えて 行動することが 求（もと）められています。
                                            </div>`,
                                            quizzes: [
                                                { question: "環境（かんきょう）を守るために大切なことはどれかな？", display: "わたしたちの行動", answer: "資源を大切に使う", options: ["資源を大切に使う", "ゴミをたくさん出す", "水を出しっぱなしにする"] }
                                            ]
                                        }
                                    ]
                                }
                            ] 
                        },
                        { 
                            name: "化学", 
                            units: [
                                {
                                    title: "1. 物の 溶（と）け方",
                                    subUnits: [
                                        {
                                            title: "(ア) 溶（と）けた 物の 行方（ゆくえ）と 重さ",
                                            content: `<h4>見えなくなっても 無（な）くなったわけじゃない</h4>
                                            <div class="point-box">
                                                ・物が 水に溶けて 目に見えなくなっても、その物自体が 無くなったわけでは ありません。<br>
                                                ・溶かす前の 全体の重さ（水 ＋ 物）と、溶かした後の 重さは <b>変わりません。</b>
                                            </div>`,
                                            quizzes: [
                                                { question: "水に砂糖を10g溶かしたとき、砂糖の重さはどうなるかな？", display: "重さの変化", answer: "10gのまま変わらない", options: ["10gのまま変わらない", "0gになる", "軽くなる"] },
                                                { question: "50gの水に5gの塩を溶かしました。全体の重さは何gになる？", display: "全体の重さ", answer: "55g", options: ["55g", "50g", "5g"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 溶（と）ける 量（りょう）の 限度（げんど）",
                                            content: `<h4>どこまでも 溶けるのかな？</h4>
                                            <div class="point-box">
                                                ・決まった量の 水に 溶ける物の量には、<b>限り（限界）</b>が あります。<br>
                                                ・それ以上 溶けなくなった 状態（じょうたい）を 覚えておきましょう。
                                            </div>`,
                                            quizzes: [
                                                { question: "一定の量の水に、物は無限（むげん）に溶けるかな？", display: "溶ける量", answer: "溶ける量には限りがある", options: ["溶ける量には限りがある", "いくらでも溶ける"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 溶（と）け方を 変（か）える 条件（じょうけん）",
                                            content: `<h4>もっと たくさん 溶かすには？</h4>
                                            <div class="point-box">
                                                ・<b>水の量を増やす</b>：溶ける量も 増えます。<br>
                                                ・<b>水の温度を上げる</b>：ミョウバンなどのように、溶ける量が 増える物があります。
                                            </div>
                                            <h4>溶けた物を取り出す</h4>
                                            <div class="point-box">
                                                ・<b>蒸発（じょうはつ）</b>：水を 蒸発させると、溶けている物を 取り出せます。<br>
                                                ・<b>冷やす</b>：温度を上げて たくさん溶かした液を 冷やすと、物が出てきます（<b>再結晶（さいけっしょう）</b>）。
                                            </div>`,
                                            quizzes: [
                                                { question: "水を蒸発（じょうはつ）させると、溶けていた物はどうなる？", display: "物の取り出し方", answer: "残る", options: ["残る", "一緒に消える"] },
                                                { question: "温度を上げると溶ける量が増えるものが多いのはどっち？", display: "温度の影響", answer: "ミョウバン", options: ["ミョウバン", "食塩（しお）"] },
                                                { question: "溶けている物を、再び粒（つぶ）として取り出すことを何という？", display: "用語", answer: "再結晶（さいけっしょう）", options: ["再結晶（さいけっしょう）", "蒸発", "沸騰"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "2. 物の 燃（も）え方",
                                    subUnits: [
                                        {
                                            title: "(ア) 燃焼（ねんしょう）と 空気の 変化",
                                            content: `<h4>燃（も）えるために 必要なもの</h4>
                                            <div class="point-box">
                                                ・空気の中には、窒素（ちっそ）、酸素（さんそ）、二酸化炭素（にさんかたんそ）などが ふくまれています。<br>
                                                ・その中の <b>酸素</b> には、物を 燃やす働きがあります。
                                            </div>
                                            <h4>燃えたあとの 気体の変化</h4>
                                            <div class="point-box">
                                                ・物が 燃えると、空気中の 酸素が 使われ、代わりに <b>二酸化炭素</b> が できます。<br>
                                                ・二酸化炭素が できたことは、<b>石灰水（せっかいすい）</b> が 白くにごることで たしかめられます。
                                            </div>
                                            <h4>空気の 入れかわり</h4>
                                            <div class="point-box">
                                                ・容器（ようき）の中で 物を 燃やし続けるには、空気が 入れかわる（通り道がある）ことが 必要です。
                                            </div>`,
                                            quizzes: [
                                                { question: "空気の中で、物を燃やす働きがある気体は何かな？", display: "気体の働き", answer: "酸素", options: ["酸素", "窒素", "二酸化炭素"] },
                                                { question: "物を燃やしたあとのビンの中に石灰水を入れると、どうなる？", display: "石灰水の変化", answer: "白くにごる", options: ["白くにごる", "青くなる", "透明（とうめい）のまま"] },
                                                { question: "物を燃やしたあとに増える気体は何かな？", display: "燃えたあとの変化", answer: "二酸化炭素", options: ["二酸化炭素", "酸素", "水素"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "3. 水溶液（すいようえき）の 性質（せいしつ）",
                                    subUnits: [
                                        {
                                            title: "(ア) 水溶液（すいようえき）の 分類（ぶんるい）",
                                            content: `<h4>酸性（さんせい）・中性（ちゅうせい）・アルカリ性（せい）</h4>
                                            <div class="point-box">
                                                ・<b>リトマス紙</b> などの 指示薬（しじやく）を 使うと、水溶液の 性質を 調べることができます。<br>
                                                ・性質は、<b>酸性・中性・アルカリ性</b> の 3つに 分けられます。
                                            </div>`,
                                            quizzes: [
                                                { question: "青色のリトマス紙が赤色に変わったとき、その水溶液の性質は何かな？", display: "液性の判定", answer: "酸性", options: ["酸性", "中性", "アルカリ性"] },
                                                { question: "赤色のリトマス紙が青色に変わったとき、その水溶液の性質は何かな？", display: "液性の判定", answer: "アルカリ性", options: ["アルカリ性", "中性", "酸性"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 気体（きたい）が 溶（と）けている 水溶液",
                                            content: `<h4>目に見えない 気体が 溶けている？</h4>
                                            <div class="point-box">
                                                ・水溶液には、固体だけでなく <b>気体</b> が 溶けているもの（炭酸水や アンモニア水など）が あります。<br>
                                                ・熱（あつ）くしても 何も 残（のこ）らない場合は、溶けていたのが 気体であったと 判断（はんだん）できます。
                                            </div>`,
                                            quizzes: [
                                                { question: "炭酸水（たんさんすい）に溶けている気体は何かな？", display: "溶けている気体", answer: "二酸化炭素", options: ["二酸化炭素", "酸素", "窒素"] },
                                                { question: "気体が溶けている水溶液を蒸発（じょうはつ）させると、あとに残るものは？", display: "蒸発残留物", answer: "何も残らない", options: ["何も残らない", "白い粉", "砂糖"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 水溶液（すいようえき）と 金属（きんぞく）",
                                            content: `<h4>金属を 溶（と）かす 働き</h4>
                                            <div class="point-box">
                                                ・酸性や アルカリ性の 水溶液の中には、アルミニウムや 鉄などの <b>金属を 溶かす</b> 働きが あるものが あります。
                                            </div>
                                            <h4>新しい 物質（ぶっしつ）の 生成（せいせい）</h4>
                                            <div class="point-box">
                                                ・金属が 溶けたあとの 液を 蒸発させて残った物は、<b>元の金属とは ちがう 性質</b> を 持っています。
                                            </div>`,
                                            quizzes: [
                                                { question: "塩酸（えんさん）にアルミニウムを入れると、どうなるかな？", display: "金属の変化", answer: "あわを出して溶ける", options: ["あわを出して溶ける", "何も変わらない", "金に変わる"] },
                                                { question: "溶けたあとの金属を蒸発させて取り出したものは、元の金属と同じもの？", display: "性質の変化", answer: "ちがう物質", options: ["ちがう物質", "同じ物質"] }
                                            ]
                                        }
                                    ]
                                }
                            ] 
                        },
                        {
                            name: "物理",
                            units: [
                                {
                                    title: "1. 物（形・体積）と 重さ",
                                    subUnits: [
                                        {
                                            title: "(ア) 形と 重さ",
                                            content: `<h4>形が変わっても 重さは変わる？</h4><div class="point-box">粘土などを「広げる」「分ける」「丸める」といった操作で形を変えても、<b>その物の重さは変わらない</b>ことを理解しましょう。</div><div class="data-demo">🍎（まるめる）➔ 🍎（ひらたくする）➔ 🍎（わける）<br><b>重さは ずっと おなじ！</b></div>`,
                                            quizzes: [
                                                { question: "100gの粘土を3つに分けました。全部あわせた重さはいくつ？", display: "分けた後の合計", answer: "100g", options: ["100g", "軽くなる", "重くなる"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 体積と 重さ",
                                            content: `<h4>同じ大きさでも 重さはちがう？</h4><div class="point-box">木、鉄、プラスチックなど、<b>体積（大きさ）を同じにした複数の物</b>を比較すると、物質の種類によって重さに違いがあります。</div><div class="data-demo">【重いじゅんばん】<br><b>鉄 ＞ プラスチック ＞ 木</b></div>`,
                                            quizzes: [
                                                { question: "同じ大きさの「鉄」と「木」では、どちらが重いかな？", display: "しゅるいと重さ", answer: "鉄", options: ["鉄", "木"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "2. 風や ゴムの 力の 働き",
                                    subUnits: [
                                        {
                                            title: "(ア) 風の 力",
                                            content: `<h4>風で 物を 動かそう</h4><div class="point-box">風の強さを変えると、物の動き方（動く距離や速さ）が変わります。<br>風が<b>強いほど</b>、物は<b>遠くまで速く</b>動きます。</div>`,
                                            quizzes: [
                                                { question: "送風機の風を強くすると、車はどうなるかな？", display: "風を強くする", answer: "遠くまで速く進む", options: ["遠くまで速く進む", "進む距離は変わらない", "止まる"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) ゴムの 力",
                                            content: `<h4>ゴムの のびと もどる力</h4><div class="point-box">ゴムを引っぱる長さを変えて、元に戻ろうとする力の大きさを変えると、物の動く様子が変わります。</div>`,
                                            quizzes: [
                                                { question: "ゴムを長く引っぱると、進む距離はどうなる？", display: "ゴムを引く長さ", answer: "長くなる", options: ["長くなる", "短くなる", "変わらない"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "3. 光の 性質",
                                    subUnits: [
                                        {
                                            title: "(ア) 光の 進み方",
                                            content: `<h4>日光は まっすぐ進む</h4><div class="point-box">・日光は<b>直進（まっすぐ進む）</b>します。<br>・鏡を使うと光を<b>反射</b>させることができます。<br>・虫眼鏡を使うと日光を<b>一点に集める</b>ことができます。</div>`,
                                            quizzes: [
                                                { question: "鏡に当たった日光がはね返ることを何という？", display: "用語", answer: "反射", options: ["反射", "屈折", "直進"] },
                                                { question: "日光を集めることができる道具はどれ？", display: "道具", answer: "虫眼鏡", options: ["虫眼鏡", "定規", "消しゴム"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 光の 熱と 明るさ",
                                            content: `<h4>光を集めると どうなる？</h4><div class="point-box">反射させた光を重ねたり、虫眼鏡で集めたりすると、当てた場所の<b>明るさや暖かさが増します。</b></div>`,
                                            quizzes: [
                                                { question: "反射させた光を3枚分重ねると、1枚の時よりどうなる？", display: "光を重ねる", answer: "明るく、暖かくなる", options: ["明るく、暖かくなる", "暗く、冷たくなる", "変わらない"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "4. 音の 性質",
                                    subUnits: [
                                        {
                                            title: "(ア) 音と 震え",
                                            content: `<h4>音の正体は「ふるえ」</h4><div class="point-box">音が出ているときや伝わるときは、<b>物が震えている（振動している）</b>ことを理解しましょう。</div>`,
                                            quizzes: [
                                                { question: "太鼓を叩いて音が出ているとき、皮はどうなっている？", display: "音と震え", answer: "ふるえている", options: ["ふるえている", "止まっている"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 音の 大きさと 震え",
                                            content: `<h4>大きくたたくと どうなる？</h4><div class="point-box">音が<b>大きく</b>なれば震え方も<b>大きく</b>なり、音が小さければ震え方も小さくなります。</div>`,
                                            quizzes: [
                                                { question: "大きな音が出ているときの震え方は？", display: "音の大きさと震え", answer: "大きく震える", options: ["大きく震える", "小さく震える"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "5. 磁石の 性質",
                                    subUnits: [
                                        {
                                            title: "(ア) 引き付けられる物",
                                            content: `<h4>磁石にくっつくものは？</h4><div class="point-box">・<b>鉄</b>は磁石に引き付けられますが、アルミニウムや銅などは引き付けられません。<br>・磁石に付いた鉄は、それ自身も磁石の性質を帯びます（<b>磁化</b>）。</div>`,
                                            quizzes: [
                                                { question: "磁石に引き付けられる金属はどれ？", display: "磁石と金属", answer: "鉄", options: ["鉄", "アルミニウム", "銅"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 極と 向き",
                                            content: `<h4>N極と S極</h4><div class="point-box">・磁石には<b>N極</b>と<b>S極</b>があります。<br>・ちがう極（NとS）は引き合い、同じ極（NとNなど）はしりぞけ合います。<br>・自由に動く磁石は、常に<b>南北</b>の向きを指して止まります。</div>`,
                                            quizzes: [
                                                { question: "磁石のN極とN極を近づけるとどうなる？", display: "極の性質", answer: "しりぞけ合う", options: ["しりぞけ合う", "引き合う"] },
                                                { question: "方位磁針が指す方向はどこ？", display: "磁石と向き", answer: "北と南", options: ["北と南", "東と西"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "6. 電気の 回路",
                                    subUnits: [
                                        {
                                            title: "(ア) 回路の つなぎ方",
                                            content: `<h4>電気が通る道「回路」</h4><div class="point-box">乾電池、導線、豆電球がひと繋がりになった電気の通り道を<b>「回路（かいろ）」</b>といいます。回路がつながっていないと、豆電球はつきません。</div>`,
                                            quizzes: [
                                                { question: "電気が通る、ひと繋がりの道のことを何という？", display: "用語", answer: "回路", options: ["回路", "線路", "道路"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 電気を 通す物",
                                            content: `<h4>金属は電気を通す</h4><div class="point-box">回路の一部に色々な物を入れると、<b>電気を通す物（金属など）</b>と、通さない物（プラスチック、ゴムなど）があることがわかります。</div>`,
                                            quizzes: [
                                                { question: "次のうち、電気を通すものはどれ？", display: "電気を通す物", answer: "10円玉（銅）", options: ["10円玉（銅）", "ゴム消しゴム", "プラスチックの定規"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "7. 水（みず）の 性質（せいしつ）",
                                    subUnits: [
                                        {
                                            title: "(ア) 空気（くうき）の 性質",
                                            content: `<h4>空気を おしちぢめると？</h4>
                                            <div class="point-box">
                                                ・とじこめた 空気を おすと、<b>体積（たいせき）は 小さく</b>なります。<br>
                                                ・空気を おすほど、<b>おしかえす力は 大きく</b>なります。
                                            </div>`,
                                            quizzes: [
                                                { question: "とじこめた空気を強くおすと、体積（かさ）はどうなる？", display: "空気を押す", answer: "小さくなる", options: ["小さくなる", "大きくなる", "変わらない"] },
                                                { question: "空気を強くおしたとき、手ごたえ（押し返す力）はどうなる？", display: "空気の手ごたえ", answer: "大きくなる", options: ["大きくなる", "小さくなる", "なくなる"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 水（みず）の 性質",
                                            content: `<h4>水は おしちぢめられる？</h4>
                                            <div class="point-box">
                                                ・空気は おしちぢめることが できますが、<b>水は おしても 体積が 変わりません。</b><br>
                                                ・水は おしちぢめることが できないという ことを 覚えておきましょう。
                                            </div>`,
                                            quizzes: [
                                                { question: "とじこめた水を強くおすと、体積（かさ）はどうなる？", display: "水を押す", answer: "変わらない", options: ["変わらない", "小さくなる", "大きくなる"] },
                                                { question: "空気と水、おしちぢめることができるのはどっち？", display: "比較", answer: "空気", options: ["空気", "水", "両方"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 水の 状態（じょうたい）変化",
                                            content: `<h4>水・氷・水蒸気（すいじょうき）</h4>
                                            <div class="point-box">
                                                ・水は 温度によって、<b>氷（固体）</b>、<b>水（液体）</b>、<b>水蒸気（気体）</b>と 姿を変えます。
                                            </div>
                                            <h4>沸騰（ふっとう）</h4>
                                            <div class="point-box">
                                                ・水は 100℃近くで 沸騰します。出てくる 泡（あわ）の 正体は <b>水蒸気（水）</b>です。
                                            </div>
                                            <h4>凍結（とうけつ）</h4>
                                            <div class="point-box">
                                                ・水が 氷になると、<b>体積（かさ）が 増える</b>という 特別な 性質が あります。
                                            </div>`,
                                            quizzes: [
                                                { question: "水が沸騰（ふっとう）しているときに出る泡（あわ）の正体は？", display: "泡の正体", answer: "水蒸気", options: ["水蒸気", "空気", "水素"] },
                                                { question: "水が凍（こお）って氷になると、体積（かさ）はどうなる？", display: "凍結", answer: "増える", options: ["増える", "減る", "変わらない"] },
                                                { question: "水が沸騰するときの温度はおよそ何度かな？", display: "温度", answer: "100℃", options: ["100℃", "0℃", "50℃"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "8. 温度（おんど）と 熱（ねつ）",
                                    subUnits: [
                                        {
                                            title: "(ア) 温度（おんど）による 体積（たいせき）の 変化",
                                            content: `<h4>あたためると ふくらむ？</h4>
                                            <div class="point-box">
                                                ・金属、水、空気は、<b>あたためると 体積が増え、冷やすと 体積が減ります。</b>
                                            </div>
                                            <h4>変化（へんか）の 大きさ</h4>
                                            <div class="point-box">
                                                ・体積の変化が 一番大きいのは <b>空気</b> で、次いで <b>水</b>、<b>金属</b> の じゅんになります。<br>
                                                【変化の大きさ】 <b>空気 ＞ 水 ＞ 金属</b>
                                            </div>`,
                                            quizzes: [
                                                { question: "空気をあたためると、体積（かさ）はどうなるかな？", display: "空気の変化", answer: "大きくなる", options: ["大きくなる", "小さくなる", "変わらない"] },
                                                { question: "あたためたとき、体積の変化が一番大きいのはどれ？", display: "比較", answer: "空気", options: ["空気", "水", "金属"] },
                                                { question: "金属をひやすと、体積はどうなるかな？", display: "金属の変化", answer: "小さくなる", options: ["小さくなる", "大きくなる", "変わらない"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 熱（ねつ）の 伝（つた）わり方",
                                            content: `<h4>熱はどうやって伝わる？</h4>
                                            <div class="point-box">
                                                ・<b>金属</b>：熱せられた部分から じゅんに 熱が伝わっていきます。これを<b>熱伝導（ねつでんどう）</b>といいます。<br>
                                                ・<b>水・空気</b>：あたためられた部分が <b>上に移動</b>し、全体が 入れかわるように 温まります。これを<b>対流（たいりゅう）</b>といいます。
                                            </div>`,
                                            quizzes: [
                                                { question: "金属の棒のはじを熱したとき、熱はどう伝わる？", display: "金属の伝わり方", answer: "熱したところから順に", options: ["熱したところから順に", "全体がいっぺんに", "反対側から順に"] },
                                                { question: "水があたたまるとき、あたたかくなった水はどちらに動く？", display: "水の温まり方", answer: "上へ動く", options: ["上へ動く", "下へ動く", "動かない"] },
                                                { question: "水や空気が、場所を入れかえながら温まることを何という？", display: "用語", answer: "対流", options: ["対流", "熱伝導", "反射"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "9. 金属（きんぞく）の 性質",
                                    subUnits: []
                                },
                                {
                                    title: "10. 電気（でんき）と 電流（でんりゅう）",
                                    subUnits: [
                                        {
                                            title: "(ア) 乾電池（かんでんち）の つなぎ方",
                                            content: `<h4>直列（ちょくれつ）と 並列（へいれつ）</h4>
                                            <div class="point-box">
                                                ・<b>直列つなぎ</b>：2個の乾電池を たてにつなぐ方法。豆電球は <b>明るく</b>なり、モーターは <b>速く</b>回ります。<br>
                                                ・<b>並列つなぎ</b>：2個の乾電池を 横にならべてつなぐ方法。明るさは 乾電池1個のときと <b>変わりません</b>が、長く使えます。
                                            </div>`,
                                            quizzes: [
                                                { question: "乾電池2個を「直列」につなぐと、豆電球の明るさはどうなる？", display: "直列つなぎ", answer: "明るくなる", options: ["明るくなる", "変わらない", "暗くなる"] },
                                                { question: "モーターを速く回したいとき、乾電池はどうつなぐのがいいかな？", display: "つなぎ方の工夫", answer: "直列つなぎ", options: ["直列つなぎ", "並列つなぎ"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 電流（でんりゅう）の 大きさと 向き",
                                            content: `<h4>電気の流れを 見てみよう</h4>
                                            <div class="point-box">
                                                ・<b>検流計（けんりゅうけい）</b>を使うと、電流の大きさや 向きを 調べることができます。<br>
                                                ・乾電池の向きを逆にすると、電流の向きが変わり、モーターの回る向きも <b>逆</b>になります。
                                            </div>`,
                                            quizzes: [
                                                { question: "電流の大きさをはかるための道具の名前は？", display: "道具の名前", answer: "検流計", options: ["検流計", "温度計", "方位磁針"] },
                                                { question: "乾電池の向きを反対にすると、モーターの回る向きはどうなる？", display: "電流の向き", answer: "反対になる", options: ["反対になる", "変わらない", "止まる"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 発光（はっこう）ダイオード（LED）",
                                            content: `<h4>LEDの とくべつな 性質（せいしつ）</h4>
                                            <div class="point-box">
                                                ・LEDは、<b>電流の向き</b>によって 点灯（てんとう）するかどうかが 決まる性質があります。<br>
                                                ・正しい向きにつなぐと光りますが、逆にすると光りません。
                                            </div>`,
                                            quizzes: [
                                                { question: "発光ダイオード（LED）が光らないとき、どうすればいいかな？", display: "LEDの使い方", answer: "つなぐ向きを逆にする", options: ["つなぐ向きを逆にする", "乾電池を増やす", "あきらめる"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "11. 振り子（ふりこ）の 働き",
                                    subUnits: [
                                        {
                                            title: "(ア) 1往復（おうふく）する 時間（じかん）",
                                            content: `<h4>時間に かかわる 条件（じょうけん）</h4>
                                            <div class="point-box">
                                                振り子が 1往復する 時間が 何によって 変わるのか 調べてみましょう。
                                            </div>
                                            <h4>① おもりの 重さ</h4>
                                            <div class="point-box">
                                                ・おもりを 重くしても 軽くしても、1往復する 時間は <b>変わりません。</b>
                                            </div>
                                            <h4>② 振（ふ）れ幅（はば）</h4>
                                            <div class="point-box">
                                                ・大きく 揺（ゆ）らしても 小さく 揺らしても、1往復する 時間は <b>変わりません。</b>
                                            </div>
                                            <h4>③ 振り子の 長さ</h4>
                                            <div class="point-box">
                                                ・振り子の 長さを 長くすると、1往復する 時間は <b>長くなります。</b><br>
                                                ・振り子の 長さを 短くすると、1往復する 時間は <b>短くなります。</b>
                                            </div>
                                            <h4>【たいせつ！】 長さの はかりかた</h4>
                                            <div class="point-box">
                                                ・振り子の 長さは、支点（してん）から <b>「おもりの 重心（じゅうしん）」</b> までの 長さのことです。
                                            </div>`,
                                            quizzes: [
                                                { question: "振り子の「おもりの重さ」を重くすると、1往復する時間はどうなる？", display: "おもりの重さ", answer: "変わらない", options: ["変わらない", "長くなる", "短くなる"] },
                                                { question: "振り子の「振れ幅（はば）」を大きくすると、1往復する時間はどうなる？", display: "振れ幅", answer: "変わらない", options: ["変わらない", "長くなる", "短くなる"] },
                                                { question: "振り子の「長さ」を短くすると、1往復する時間はどうなる？", display: "振り子の長さ", answer: "短くなる", options: ["短くなる", "長くなる", "変わらない"] },
                                                { question: "振り子の長さは、支点からどこまでの長さのことかな？", display: "長さの測り方", answer: "おもりの重心まで", options: ["おもりの重心まで", "おもりの上の端まで", "糸の結び目まで"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "12. 電磁石（でんじしゃく）の 性質",
                                    subUnits: [
                                        {
                                            title: "(ア) 電磁石（でんじしゃく）の しくみと 極（きょく）",
                                            content: `<h4>電気（でんき）を 流（なが）したときだけ 磁石になる</h4>
                                            <div class="point-box">
                                                ・コイルに 電流を流すと、中の 鉄心が 磁石になります。これを<b>磁化（じか）</b>といいます。<br>
                                                ・電流を 止めると、磁石の 性質は <b>なくなります。</b>
                                            </div>
                                            <h4>電流（でんりゅう）の 向きと 極</h4>
                                            <div class="point-box">
                                                ・電流の 向きを 逆にすると、電磁石の 極（N極・S極）も <b>逆になります。</b>
                                            </div>`,
                                            quizzes: [
                                                { question: "電磁石の電流を止めると、磁石としての性質はどうなるかな？", display: "電流を止める", answer: "なくなる", options: ["なくなる", "そのまま残る", "強くなる"] },
                                                { question: "電磁石の極（N極・S極）を反対にするにはどうすればいい？", display: "極を変える", answer: "電流の向きを逆にする", options: ["電流の向きを逆にする", "コイルを太くする", "電池を増やす"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 電磁石を 強くする 条件（じょうけん）",
                                            content: `<h4>もっと 強い 磁石にするには？</h4>
                                            <div class="point-box">
                                                電磁石を 強くするためには、次の 2つの方法が 有効（ゆうこう）です。
                                            </div>
                                            <h4>① 電流を 大きくする</h4>
                                            <div class="point-box">
                                                ・乾電池を 直列につなぐなどして、流れる電流を 大きくすると 磁力も 強くなります。
                                            </div>
                                            <h4>② コイルの 巻き数を 増やす</h4>
                                            <div class="point-box">
                                                ・コイルを たくさん 巻（ま）くと、磁力は より強くなります。
                                            </div>`,
                                            quizzes: [
                                                { question: "電磁石を強くする方法として正しいのはどれ？", display: "強さを変える", answer: "電流を大きくする", options: ["電流を大きくする", "コイルの巻き数を減らす", "電流を止める"] },
                                                { question: "コイルの「巻き数」を増やすと、電磁石の強さはどうなるかな？", display: "巻き数と強さ", answer: "強くなる", options: ["強くなる", "弱くなる", "変わらない"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "13. てこ（てこ）の 規則性（きそくせい）",
                                    subUnits: [
                                        {
                                            title: "(ア) てこの つり合い",
                                            content: `<h4>てこを 傾（かたむ）ける 働き</h4>
                                            <div class="point-box">
                                                ・支点（してん）からの <b>距離（きょり）</b> や <b>おもりの重さ</b> を変えると、てこを 傾ける 働きが 変わります。
                                            </div>
                                            <h4>つり合いの 規則性（きそくせい）</h4>
                                            <div class="point-box">
                                                ・てこが つり合うときには、次の 決まりがあります。<br>
                                                <b>「左側の（重さ ✕ 距離） ＝ 右側の（重さ ✕ 距離）」</b>
                                            </div>
                                            <h4>水平（すいへい）になる とき</h4>
                                            <div class="point-box">
                                                ・支点から 同じ距離に 同じ重さの物をつるすと、てこは 水平になります。
                                            </div>`,
                                            quizzes: [
                                                { question: "支点から2の距離に、重さ3のおもりを下げました。反対側の距離3の場所には、重さいくつのおもりを下げればつり合うかな？", display: "計算問題", answer: 2, options: [2, 3, 6] },
                                                { question: "てこを傾ける働きを大きくするには、支点から離（はな）れた場所をおせばいいかな？", display: "てこの原理", answer: "はい", options: ["はい", "いいえ"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) てこの 利用（りよう）",
                                            content: `<h4>身の回りの 便利な道具</h4>
                                            <div class="point-box">
                                                ・ペンチ、釘抜き（くぎぬき）、ハサミ、トングなどは、すべて てこの 仕組みを 利用しています。
                                            </div>
                                            <h4>てこを 使う メリット</h4>
                                            <div class="point-box">
                                                ・<b>小さな力で 大きな力を出す</b>（釘抜きなど）<br>
                                                ・<b>動かす距離を 大きくする</b>（トングなど）<br>
                                                目的に応じて、てこの 規則性が 日常生活に 活用されています。
                                            </div>`,
                                            quizzes: [
                                                { question: "次のうち、てこの仕組みを利用している道具はどれ？", display: "道具の種類", answer: "ハサミ", options: ["ハサミ", "鉛筆", "消しゴム"] },
                                                { question: "重いものを小さな力で持ち上げたいとき、力点（力を加える場所）は支点から遠いほうがいい？", display: "利用の工夫", answer: "遠いほうがいい", options: ["遠いほうがいい", "近いほうがいい"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "14. 電気（でんき）の 利用（りよう）（発電（はつでん）・蓄電（ちくでん））",
                                    subUnits: [
                                        {
                                            title: "(ア) 発電（はつでん）と 蓄電（ちくでん）",
                                            content: `<h4>電気を つくる、ためる</h4>
                                            <div class="point-box">
                                                ・手回し発電機や 光電池（こうでんち）を 使うと、自分たちで <b>電気を つくる（発電）</b> ことができます。<br>
                                                ・<b>蓄電器（コンデンサー）</b> を 使うと、つくった 電気を <b>ためておく（蓄電）</b> ことができます。
                                            </div>`,
                                            quizzes: [
                                                { question: "電気を蓄（たくわ）えておくことができる装置（そうち）の名前は？", display: "用語", answer: "蓄電器（コンデンサー）", options: ["蓄電器（コンデンサー）", "発電機", "モーター"] },
                                                { question: "手回し発電機（てまわしはつでんき）は、何を何に変える装置かな？", display: "発電の仕組み", answer: "動きを電気に", options: ["動きを電気に", "電気を熱に", "光を音に"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 電気の 変換（へんかん）",
                                            content: `<h4>電気を いろいろな姿に変える</h4>
                                            <div class="point-box">
                                                電気は、使いたい 目的（もくてき）に合わせて、いろいろな姿に 変えることができます。
                                            </div>
                                            <div class="point-box">
                                                ・<b>光</b>：豆電球、発光ダイオード（LED）<br>
                                                ・<b>音</b>：電子オルゴール<br>
                                                ・<b>熱</b>：電熱線（でんねつせん）<br>
                                                ・<b>運動</b>：モーター
                                            </div>
                                            <h4>省エネ（しょうえね）の 工夫</h4>
                                            <div class="point-box">
                                                ・豆電球と LEDでは、LEDのほうが 少ない電気で 同じくらいの 明るさを 出すことができます（効率（こうりつ）が良い）。
                                            </div>`,
                                            quizzes: [
                                                { question: "電気を「熱」に変えて使っているものはどれかな？", display: "電気の変換", answer: "電熱線（アイロンなど）", options: ["電熱線（アイロンなど）", "モーター", "オルゴール"] },
                                                { question: "豆電球と発光ダイオード（LED）、少ない電気で光るのはどっち？", display: "効率の比較", answer: "発光ダイオード（LED）", options: ["発光ダイオード（LED）", "豆電球"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 電気の 制御（せいぎょ）と 効率的な 利用",
                                            content: `<h4>むだなく 電気を使う しくみ</h4>
                                            <div class="point-box">
                                                ・身の回りの 電化製品（でんかせいひん）は、プログラムによって 必要な時だけ 動くように <b>制御（せいぎょ）</b> されています。<br>
                                                ・これにより、エネルギーを むだなく 使うことができます。
                                            </div>`,
                                            quizzes: [
                                                { question: "人が通ったときだけライトがつく仕組みは、何の助けをかりているかな？", display: "電気の制御", answer: "プログラム（センサー）", options: ["プログラム（センサー）", "魔法", "ずっとつけっぱなし"] }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        { 
                            name: "地学", 
                            units: [
                                {
                                    title: "1. 天気（てんき）と 太陽",
                                    subUnits: [
                                        {
                                            title: "(ア) 日陰（ひかげ）と 太陽の 動き",
                                            content: `<h4>影（かげ）の 性質（せいしつ）</h4>
                                            <div class="point-box">
                                                ・影は <b>太陽の 反対側（はんたいがわ）</b>に できます。<br>
                                                ・日陰は、太陽の 光が 物に さえぎられることで 発生（はっせい）します。
                                            </div>
                                            <h4>太陽の 通り道</h4>
                                            <div class="point-box">
                                                ・影の位置が 時間とともに 変わることから、太陽は<b>「東の方 ➔ 南の空 ➔ 西の方」</b>へと 移動（いどう）することが わかります。
                                            </div>`,
                                            quizzes: [
                                                { question: "影（かげ）ができるのは、太陽に対してどの方向かな？", display: "影の方向", answer: "反対側（はんたいがわ）", options: ["反対側（はんたいがわ）", "同じ側", "真下"] },
                                                { question: "太陽は、どの方向（ほうこう）から のぼるかな？", display: "太陽の動き", answer: "東", options: ["東", "西", "南"] },
                                                { question: "お昼（ひる）ごろ、太陽はどの空に見えるかな？", display: "太陽の動き", answer: "南の空", options: ["南の空", "北の空", "東の空"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 太陽による 地面の 暖（あたた）まり方",
                                            content: `<h4>日なた と 日陰（ひかげ）</h4>
                                            <div class="point-box">
                                                ・<b>日なた</b>：太陽の光が 当たっている場所。暖かく、地面がかわいています。<br>
                                                ・<b>日陰</b>：太陽の光が 当たっていない場所。涼しく、地面がしめっていることが 多いです。
                                            </div>
                                            <h4>地面の 温度（おんど）変化</h4>
                                            <div class="point-box">
                                                ・太陽の 光によって 地面が 暖められるため、1日の中で 地面の温度は 変化します。
                                            </div>`,
                                            quizzes: [
                                                { question: "「日なた」と「日陰」、地面があたたかいのはどっちかな？", display: "温度の比較", answer: "日なた", options: ["日なた", "日陰"] },
                                                { question: "日陰の地面が、日なたよりも湿（しめ）っていることが多いのはなぜ？", display: "地面の様子", answer: "光が当たらないから", options: ["光が当たらないから", "水がわいているから", "雨がふるから"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 地面（じめん）の 傾（かたむ）きと 水の流れ",
                                            content: `<h4>水は どちらへ 流れる？</h4>
                                            <div class="point-box">
                                                ・雨水は 地面の <b>高い場所から 低い場所へと</b> 流れて集まります。<br>
                                                ・ふだんは 気づきにくい わずかな 傾きが、水の流れる方向を 決めています。
                                            </div>`,
                                            quizzes: [
                                                { question: "地面にふった雨水は、どちらのほうへ流れるかな？", display: "水の流れ", answer: "高いところから低いところへ", options: ["高いところから低いところへ", "低いところから高いところへ", "どちらにも流れない"] }
                                            ]
                                        },
                                        {
                                            title: "(エ) 土の粒（つぶ）と 水の しみ込み方",
                                            content: `<h4>しみ込みやすい 土は どれ？</h4>
                                            <div class="point-box">
                                                ・<b>砂（すな）</b>などの 粒が大きい土：水は <b>速く</b> しみ込みます。<br>
                                                ・<b>粘土（ねんど）</b>などの 粒が小さい土：水は しみ込みにくいです。<br>
                                                ・校庭（こうてい）の 水たまりが できる場所は、土の粒が 小さいことが 多いです。
                                            </div>`,
                                            quizzes: [
                                                { question: "砂場（すなば）のように粒が大きい場所は、水がしみ込みやすいかな？", display: "土と水", answer: "しみ込みやすい", options: ["しみ込みやすい", "しみ込みにくい"] },
                                                { question: "水たまりができやすいのは、土の粒がどんな場所かな？", display: "水たまり", answer: "粒が小さい場所", options: ["粒が小さい場所", "粒が大きい場所"] }
                                            ]
                                        },
                                        {
                                            title: "(オ) 天気（てんき）と 気温（きおん）の 変化",
                                            content: `<h4>天気によって 温度の 変わり方が ちがう？</h4>
                                            <div class="point-box">
                                                ・<b>晴れの日</b>：お昼（ひる）ごろに 気温が大きく上がる <b>「山型（やまがた）」</b> のグラフになります。<br>
                                                ・<b>くもり・雨の日</b>：1日を通して 気温の変化が 小さく、平らな グラフになります。
                                            </div>`,
                                            quizzes: [
                                                { question: "晴れの日の気温は、いつごろが一番高くなるかな？", display: "気温の変化", answer: "お昼（ひる）すぎ", options: ["お昼（ひる）すぎ", "朝（あさ）", "夜（よる）"] },
                                                { question: "1日の気温の変化が一番大きいのは、どんな天気の日かな？", display: "天気と気温", answer: "晴れの日", options: ["晴れの日", "くもりの日", "雨の日"] }
                                            ]
                                        },
                                        {
                                            title: "(カ) 自然界（しぜんかい）の 水の ゆくえ",
                                            content: `<h4>蒸発（じょうはつ）と 結露（けつろ）</h4>
                                            <div class="point-box">
                                                ・<b>蒸発</b>：地面などの 水が <b>水蒸気（すいじょうき）</b> になって 空気中に出ていくこと。<br>
                                                ・<b>結露</b>：空気中の 水蒸気が 冷やされて、再び <b>水滴（すいてき）</b> になること。
                                            </div>
                                            <h4>水の じゅんかん</h4>
                                            <div class="point-box">
                                                ・地球の 水は、蒸発して 雲になり、雨になって ふり、再び 蒸発するという サイクルを くり返しています。
                                            </div>`,
                                            quizzes: [
                                                { question: "水が水蒸気（気体）になって、空気中に出ていくことを何という？", display: "用語", answer: "蒸発", options: ["蒸発", "結露", "沸騰"] },
                                                { question: "冷たいコップのまわりに水滴がつく現象を何という？", display: "用語", answer: "結露", options: ["結露", "蒸発", "降水"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "2. 宇宙（うちゅう）と 星",
                                    subUnits: [
                                        {
                                            title: "(ア) 月の 見え方",
                                            content: `<h4>形（かたち）が 変わる 月</h4>
                                            <div class="point-box">
                                                ・月は 日によって、三日月（みかづき）や 満月（まんげつ）など、<b>形が 変わって 見えます。</b>
                                            </div>
                                            <h4>月の 位置（いち）の 変化</h4>
                                            <div class="point-box">
                                                ・1日の うちでも、時間が たつにつれて 月の位置は 変わっていきます。まわりの 建物などを 目印（めじるし）にして 観察してみましょう。
                                            </div>`,
                                            quizzes: [
                                                { question: "月がまん丸に見えるときの名前は何かな？", display: "月の名前", answer: "満月（まんげつ）", options: ["満月（まんげつ）", "三日月", "新月"] },
                                                { question: "時間がたつと、月の位置（場所）は変わるかな？", display: "月の動き", answer: "変わる", options: ["変わる", "変わらない"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 星の 特徴（とくちょう）",
                                            content: `<h4>明るさと 色の ちがい</h4>
                                            <div class="point-box">
                                                ・星には <b>明るさの違い</b>（1等星など）があります。<br>
                                                ・また、<b>色の違い</b>（青白い色、赤い色など）も あります。
                                            </div>`,
                                            quizzes: [
                                                { question: "星の中で、もっとも明るいグループの星を何等星（なんとうせい）という？", display: "星の明るさ", answer: "1等星", options: ["1等星", "5等星", "10等星"] },
                                                { question: "星の色は全部同じかな？", display: "星の色", answer: "ちがう色がある", options: ["ちがう色がある", "全部同じ白"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 星の 位置（いち）の 変化",
                                            content: `<h4>星座（せいざ）の 動き</h4>
                                            <div class="point-box">
                                                ・星の 並び方（星座）は、時間が たっても <b>変わりません。</b><br>
                                                ・しかし、星の集まり 全体としては、太陽や 月と同じように <b>東 ➔ 南 ➔ 西</b> へと 動いて見えます。
                                            </div>`,
                                            quizzes: [
                                                { question: "星の並び方（星座の形）は、時間がたつと変わるかな？", display: "星座の形", answer: "変わらない", options: ["変わらない", "バラバラになる"] },
                                                { question: "星は空のどの方向（ほうこう）へ動いて見えるかな？", display: "星の動き", answer: "東から西", options: ["東から西", "西から東", "北から南"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "3. 流（なが）れる 水（みず）の 働（はたら）き（川）",
                                    subUnits: [
                                        {
                                            title: "(ア) 流（なが）れる 水（みず）の 3つの 働（はたら）き",
                                            content: `<h4>川の水が 土地を変える</h4>
                                            <div class="point-box">
                                                ・<b>侵食（しんしょく）</b>：土地を けずる 働き。<br>
                                                ・<b>運搬（うんぱん）</b>：けずった 土砂（どしゃ）を はこぶ 働き。<br>
                                                ・<b>堆積（たいせき）</b>：はこんできた 土砂を つもらせる 働き。
                                            </div>`,
                                            quizzes: [
                                                { question: "川の水が土地をけずる働きを何という？", display: "用語", answer: "侵食（しんしょく）", options: ["侵食（しんしょく）", "運搬（うんぱん）", "堆積（たいせき）"] },
                                                { question: "はこばれてきた土や石が、底にたまることを何という？", display: "用語", answer: "堆積（たいせき）", options: ["堆積（たいせき）", "侵食", "蒸発"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 川の 上流（じょうりゅう）と 下流（かりゅう）の ちがい",
                                            content: `<h4>場所（ばしょ）による 川の様子</h4>
                                            <div class="point-box">
                                                ・<b>上流</b>：流れが速く、侵食が強いため、石は <b>大きく 角ばっています。</b><br>
                                                ・<b>下流</b>：流れが遅く、堆積が強いため、石は <b>小さく 丸みを帯びています。</b>
                                            </div>`,
                                            quizzes: [
                                                { question: "川の下流（うみの近く）にある石は、どんな形をしているかな？", display: "石の形", answer: "小さくて丸い", options: ["小さくて丸い", "大きくて角ばっている", "三角形"] },
                                                { question: "川の流れが速く、石がゴロゴロと大きいのは上流・下流どっち？", display: "場所のちがい", answer: "上流", options: ["上流", "下流"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 増水（ぞうすい）による 変化（へんか）",
                                            content: `<h4>大雨（おおあめ）が ふると？</h4>
                                            <div class="point-box">
                                                ・大雨などで 水の速さや 量が増すと、侵食や 運搬の力が <b>急激に（きゅうげきに）強く</b>なります。<br>
                                                ・これにより 土地の様子が 大きく変わったり、洪水（こうずい）などの さいがいが 起きたりすることが あります。
                                            </div>`,
                                            quizzes: [
                                                { question: "川の水が増えたとき、土地をけずる力はどうなるかな？", display: "増水の影響", answer: "強くなる", options: ["強くなる", "弱くなる", "変わらない"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "4. 天気（てんき）の 変化（へんか）（雲）",
                                    subUnits: [
                                        {
                                            title: "(ア) 雲の 量・動きと 天気の 関係",
                                            content: `<h4>雲の 量で 天気が決まる</h4>
                                            <div class="point-box">
                                                ・空全体を 10としたときの 雲のわりあい（<b>雲量（うんりょう）</b>）で 天気を はんだんします。
                                            </div>
                                            <h4>雲の 動きと 種類</h4>
                                            <div class="point-box">
                                                ・雲が 動くことで 天気が 移り変わります。<br>
                                                ・雲には 積乱雲（せきらんうん）や 乱層雲（らんそううん）など、いろいろな 形や高さが あります。
                                            </div>`,
                                            quizzes: [
                                                { question: "空全体を10としたとき、雲の量が「9以上」のときの天気は何かな？", display: "雲量と天気", answer: "くもり", options: ["くもり", "晴れ", "雨"] },
                                                { question: "夏の夕方によく見られる、入道雲（にゅうどうぐも）の正式な名前は？", display: "雲の種類", answer: "積乱雲（せきらんうん）", options: ["積乱雲（せきらんうん）", "巻雲", "すじ雲"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 天気の 変化の 規則性（きそくせい）と 予想",
                                            content: `<h4>西から 東へ 動く天気</h4>
                                            <div class="point-box">
                                                ・日本付近では、多くの場合、天気は <b>西から 東へと</b> 変化していくという 規則性が あります。
                                            </div>
                                            <h4>台風（たいふう）の 特徴</h4>
                                            <div class="point-box">
                                                ・台風は、ふつうの天気とは ちがう動きをすることが あります。<br>
                                                ・台風が 近づくと、風が 強く吹（ふ）くだけでなく、<b>はげしい雨</b> が ふることが あります。
                                            </div>`,
                                            quizzes: [
                                                { question: "日本付近の天気は、ふつうどちらの方向からどちらへ変わっていく？", display: "天気の規則性", answer: "西から東", options: ["西から東", "東から西", "北から南"] },
                                                { question: "台風が近づいたときに注意（ちゅうい）することはどれ？", display: "台風の影響", answer: "強い風とはげしい雨", options: ["強い風とはげしい雨", "強い日差し", "気温が急に下がる"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "5. 土地（とち）の つくりと 変（か）わり方（地層）",
                                    subUnits: [
                                        {
                                            title: "(ア) 土地（とち）の つくり（地層）",
                                            content: `<h4>重（かさ）なりあう 地層</h4>
                                            <div class="point-box">
                                                ・土地は、<b>礫（れき）、砂（すな）、泥（どろ）、火山灰（かざんばい）</b> などが 幾重（いくえ）にも 層状（そうじょう）に 積み重なって できています。
                                            </div>
                                            <h4>環境（かんきょう）を 知る 手（て）がかり</h4>
                                            <div class="point-box">
                                                ・地層の中の <b>化石（かせき）</b> は、その地層が できた当時の 環境（海だったのか、陸だったのかなど）を 知るための 大切な 手がかりになります。
                                            </div>
                                            <h4>粒（つぶ）の 大きさによる 分類</h4>
                                            <div class="point-box">
                                                ・礫、砂、泥は、それぞれの <b>粒の大きさ</b> によって 分けられます。複数の 場所の データを 比（くら）べることで、地層が どのように 広（ひろ）がっているかを 捉（とら）えることができます。
                                            </div>`,
                                            quizzes: [
                                                { question: "地層を作っている粒のうち、一番大きいものはどれかな？", display: "粒の種類", answer: "礫（れき）", options: ["礫（れき）", "砂（すな）", "泥（どろ）"] },
                                                { question: "地層の中に化石があると、何を知る手がかりになるかな？", display: "化石の役割", answer: "当時の環境", options: ["当時の環境", "明日の天気", "土の重さ"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 地層（ちそう）が できる しくみ",
                                            content: `<h4>流（なが）れる 水（みず）の 働き</h4>
                                            <div class="point-box">
                                                ・水によって 運ばれた 礫・砂・泥が つもって できた 地層には、<b>丸みを 帯（お）びた 粒</b> が 含まれます。<br>
                                                ・これらが 固（かた）まった 岩石を、<b>礫岩（れきがん）、砂岩（さがん）、泥岩（でいがん）</b> と 呼びます。
                                            </div>
                                            <h4>火山（かざん）の 働き</h4>
                                            <div class="point-box">
                                                ・<b>火山灰</b> や、気泡（きほう）のある 石（<b>軽石（かるいし）</b> など）が 含まれる 地層は、火山の 噴火（ふんか）によって できたものです。
                                            </div>`,
                                            quizzes: [
                                                { question: "流れる水の働きでできた地層の粒は、どんな形をしているかな？", display: "粒の形", answer: "丸みを帯びている", options: ["丸みを帯びている", "角ばっている", "星の形"] },
                                                { question: "火山灰（かざんばい）などが含まれる地層は、何によってできたかな？", display: "でき方", answer: "火山の噴火", options: ["火山の噴火", "川の流れ", "強い風"] },
                                                { question: "火山から飛んできた、小さな穴がたくさんある軽い石を何という？", display: "用語", answer: "軽石（かるいし）", options: ["軽石（かるいし）", "泥岩", "砂利"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "6. 火山（かざん）と 地震（じしん）",
                                    subUnits: [
                                        {
                                            title: "(ア) 火山の 働き",
                                            content: `<h4>火を ふく 山</h4>
                                            <div class="point-box">
                                                ・地下深いところにある 溶（と）けた 岩石（<b>マグマ</b>）が 地表に出ることで <b>火山</b> が できます。<br>
                                                ・噴火（ふんか）すると、溶岩（ようがん）や 火山灰（かざんばい）が 周りに 積（つ）もります。
                                            </div>`,
                                            quizzes: [
                                                { question: "火山の地下深くにある、どろどろに溶けた岩石の名前は？", display: "用語", answer: "マグマ", options: ["マグマ", "温泉", "泥（どろ）"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 地震の 働き",
                                            content: `<h4>地面が ゆれる</h4>
                                            <div class="point-box">
                                                ・地面が 急に ゆれることを <b>地震（じしん）</b> といいます。<br>
                                                ・大きな地震が 起きると、土地が もり上がったり（隆起）、しずんだり（沈降）して、土地の様子が 変わることが あります。
                                            </div>`,
                                            quizzes: [
                                                { question: "地震によって地面がもり上がることを何という？", display: "用語", answer: "隆起（りゅうき）", options: ["隆起（りゅうき）", "沈降（ちんこう）", "噴火"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 土地（とち）の 急激（きゅうげき）な 変化（へんか）",
                                            content: `<h4>一瞬（いっしゅん）で 変わる 土地</h4>
                                            <div class="point-box">
                                                ・土地（とち）は、<b>火山の 噴火（ふんか）</b>（溶岩（ようがん）の 流出（りゅうしゅつ）、火山灰（かざんばい）の 堆積（たいせき））や、<b>地震（じしん）</b>（断層（だんそう）の 出現（しゅつげん）、地割（じわ）れ、土砂崩（どしゃくず）れ）によって、<b>急激（きゅうげき）に 変化（へんか）</b> します。
                                            </div>`,
                                            quizzes: [
                                                { question: "地震によって地面に大きなズレ（断層）ができたり、地割れが起きたりすることはある？", display: "地震の影響", answer: "ある", options: ["ある", "ない"] },
                                                { question: "火山の噴火で周りの景色が急に変わってしまう原因として正しいのはどれ？", display: "火山の変化", answer: "溶岩や火山灰", options: ["溶岩や火山灰", "きれいなお花", "雨水"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "7. 月（つき）の 満（み）ち欠（か）け",
                                    subUnits: [
                                        {
                                            title: "(ア) 月の 輝（かがや）きと 太陽（たいよう）",
                                            content: `<h4>光（ひかり）の 当（あ）たる 方向（ほうこう）</h4>
                                            <div class="point-box">
                                                ・月の 輝いている 側（がわ）には、必ず <b>太陽</b> が あります。<br>
                                                ・観察（かんさつ）や ボールを 使（つか）った モデル実験（じっけん）を 通（とお）して、太陽の 光が 当たることで 月が 光って見えることを 捉（とら）えます。
                                            </div>`,
                                            quizzes: [
                                                { question: "月の輝いている（光っている）側には、必ず何があるかな？", display: "月の向き", answer: "太陽", options: ["太陽", "北極星", "雲"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 月の 満（み）ち欠（か）けの しくみ",
                                            content: `<h4>位置関係（いちかんけい）と 月の形</h4>
                                            <div class="point-box">
                                                ・月の形（満ち欠け）は、<b>太陽・月・地球の 位置関係</b> によって 変わって 見えます。
                                            </div>
                                            <h4>地球から 見た 視点（してん）</h4>
                                            <div class="point-box">
                                                ・この段階（だんかい）では、まず <b>「地球から 見た 視点」</b> での位置関係を 整理（せいり）しましょう。<br>
                                                ・月が 公転（こうてん）するような 立体的な しくみは、中学校（ちゅうがっこう）で 詳しく 学（まな）びます。
                                            </div>`,
                                            quizzes: [
                                                { question: "月の形が変わって見えるのは、太陽・月ともう一つ何の場所が関係しているかな？", display: "位置関係", answer: "地球", options: ["地球", "火星", "木星"] },
                                                { question: "三日月（みかづき）や満月（まんげつ）など、月の形が変わることを何という？", display: "用語", answer: "満（み）ち欠（か）け", options: ["満（み）ち欠（か）け", "衣（ころ）もがえ", "日焼け"] }
                                            ]
                                        }
                                    ]
                                }
                            ] 
                        }
                    ] 
                },
                juniorHigh: { 
                    name: "中学生", 
                    categories: [
                        { 
                            name: "生物", 
                            units: [
                                {
                                    title: "1. 生物の 観察（かんさつ）と 分類（ぶんるい）の 基礎（きそ）",
                                    subUnits: [
                                        {
                                            title: "(ア) 観察（かんさつ）の 視点（してん）",
                                            content: `<h4>観察の ポイント</h4>
                                            <div class="point-box">
                                                ・生物を観察するときは、大きさ、色、形といった外見だけでなく、<b>生活場所</b> や <b>栄養の取り方</b> に注目することが大切です。
                                            </div>`,
                                            quizzes: [
                                                { question: "生物の観察で、外見（大きさ・色・形）以外に注目すべき重要な点は？", display: "視点", answer: "生活場所や栄養の取り方", options: ["生活場所や栄養の取り方", "名前の長さ", "見つけやすさ"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 分類（ぶんるい）の 考え方",
                                            content: `<h4>分類の しくみ</h4>
                                            <div class="point-box">
                                                ・<b>共通点</b> と <b>相違点</b> をもとに「観点」を選び、「基準」を設定して仲間分けを行います。<br>
                                                ・分類は、調べる目的によって多様な分け方があることを理解しましょう。
                                            </div>`,
                                            quizzes: [
                                                { question: "生物を仲間分けするときに、もとにするものは「共通点」となにかな？", display: "分類", answer: "相違点", options: ["相違点", "個体数", "重さ"] },
                                                { question: "分類を行う際に、自分で決める判断のよりどころを何という？", display: "用語", answer: "基準", options: ["基準", "結果", "予想"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "2. 植物（しょくぶつ）の つくりと 分類（ぶんるい）",
                                    subUnits: [
                                        {
                                            title: "(ア) 花（はな）の 基本的（きほんてき）な つくり",
                                            content: `<h4>花の つくり</h4>
                                            <div class="point-box">
                                                ・中心から <b>めしべ</b>、<b>おしべ</b>、<b>花弁（花びら）</b>、<b>がく</b> の順に並んでいます。
                                            </div>
                                            <h4>各部分の はたらき</h4>
                                            <div class="point-box">
                                                ・<b>めしべ</b>：柱頭（ちゅうとう）、花柱（かちゅう）、子房（しぼう）から成ります。<br>
                                                ・<b>おしべ</b>：先端に花粉が入った <b>やく</b> があります。<br>
                                                ・<b>胚珠（はいしゅ）</b>：子房の中にあり、将来 <b>種子（しゅし）</b> になる部分です。
                                            </div>`,
                                            quizzes: [
                                                { question: "めしべの根元のふくらんだ部分（将来果実になる部分）を何という？", display: "用語", answer: "子房", options: ["子房", "柱頭", "胚珠"] },
                                                { question: "子房の中にある、将来「種子」になる部分はどこかな？", display: "用語", answer: "胚珠", options: ["胚珠", "やく", "花柱"] },
                                                { question: "おしべの先にある、花粉がつまった袋のような部分を何という？", display: "用語", answer: "やく", options: ["やく", "子房", "がく"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 種子植物（しゅししょくぶつ）の 分類",
                                            content: `<h4>被子植物（ひししょくぶつ）</h4>
                                            <div class="point-box">
                                                ・<b>被子植物</b>：胚珠が <b>子房</b> に包まれている仲間。<br>
                                                &nbsp;&nbsp;・<b>双子葉類</b>：子葉が2枚。葉脈は <b>網状脈（もうじょうみゃく）</b>。根は <b>主根と側根</b>。<br>
                                                &nbsp;&nbsp;・<b>単子葉類</b>：子葉が1枚。葉脈は <b>平行脈</b>。根は <b>ひげ根</b>。
                                            </div>
                                            <h4>裸子植物（らししょくぶつ）</h4>
                                            <div class="point-box">
                                                ・<b>裸子植物</b>：マツやイチョウのように、子房がなく <b>胚珠がむき出し</b> の仲間。
                                            </div>`,
                                            quizzes: [
                                                { question: "胚珠が子房に包まれている植物を何という？", display: "用語", answer: "被子植物", options: ["被子植物", "裸子植物", "コケ植物"] },
                                                { question: "双子葉類の根のつくりは「主根」となにかな？", display: "植物の体", answer: "側根", options: ["側根", "ひげ根", "支柱根"] },
                                                { question: "マツのように、胚珠がむき出しになっている植物を何という？", display: "用語", answer: "裸子植物", options: ["裸子植物", "被子植物", "シダ植物"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 種子（しゅし）を つくらない 植物",
                                            content: `<h4>胞子（ほうし）で ふえる</h4>
                                            <div class="point-box">
                                                ・<b>シダ植物</b> や <b>コケ植物</b> などは、種子の代わりに <b>胞子</b> でなかまをふやします。
                                            </div>`,
                                            quizzes: [
                                                { question: "シダ植物やコケ植物がなかまをふやすために出すものは何かな？", display: "用語", answer: "胞子", options: ["胞子", "種子", "花粉"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "3. 動物（どうぶつ）の 分類（ぶんるい）と 特徴（とくちょう）",
                                    subUnits: [
                                        {
                                            title: "(ア) 脊椎動物（せきついどうぶつ）の 5つの なかま",
                                            content: `<h4>背骨（せぼね）のある 動物</h4>
                                            <div class="point-box">
                                                ・<b>脊椎動物</b>：背骨がある動物。大きく5つのグループに分けられます。<br>
                                                &nbsp;&nbsp;① <b>魚類</b>：えら呼吸、卵生（水中に殻のない卵）。<br>
                                                &nbsp;&nbsp;② <b>両生類</b>：子はえら、親は肺と皮膚で呼吸。卵生。<br>
                                                &nbsp;&nbsp;③ <b>爬（は）虫類</b>：肺呼吸、卵生（陸上に殻のある卵）。<br>
                                                &nbsp;&nbsp;④ <b>鳥類</b>：肺呼吸、羽毛、卵生。恒温動物。<br>
                                                &nbsp;&nbsp;⑤ <b>哺乳類</b>：肺呼吸、毛、<b>胎生（たいせい）</b>。恒温動物。
                                            </div>`,
                                            quizzes: [
                                                { question: "子はえらで、親は主に肺と皮膚で呼吸する動物のなかまは？", display: "分類", answer: "両生類", options: ["両生類", "魚類", "爬虫類"] },
                                                { question: "親の体内で子がある程度育ってから生まれるふえ方を何という？", display: "用語", answer: "胎生", options: ["胎生", "卵生", "胞子"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 無脊椎動物（むせきついどうぶつ）の 分類",
                                            content: `<h4>背骨のない 動物</h4>
                                            <div class="point-box">
                                                ・<b>節足動物</b>：外骨格を持ち、足に節（ふし）がある（昆虫類、甲殻類など）。<br>
                                                ・<b>軟体動物</b>：体が柔らかく、<b>外とう膜</b> に包まれている（イカ、タコ、貝類など）。<br>
                                                ・その他：ミミズ、ウニ、ヒトデ、クラゲなど多様ななかまがいます。
                                            </div>`,
                                            quizzes: [
                                                { question: "カニやバッタのように、足に節があり外骨格を持つ動物のなかまは？", display: "分類", answer: "節足動物", options: ["節足動物", "軟体動物", "脊椎動物"] },
                                                { question: "イカやマイマイの体にある、内臓を包んでいる膜を何という？", display: "用語", answer: "外とう膜", options: ["外とう膜", "外骨格", "皮膚"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "4. 細胞（さいぼう）の つくりと はたらき",
                                    subUnits: [
                                        {
                                            title: "(ア) 細胞（さいぼう）の 構造（こうぞう）",
                                            content: `<h4>共通点と 相違点</h4>
                                            <div class="point-box">
                                                ・<b>共通点</b>：核、細胞質、細胞膜をすべての細胞が持っています。<br>
                                                ・<b>相違点（植物のみ）</b>：<b>細胞壁</b>（体を支える）、<b>葉緑体</b>（光合成をする）、発達した <b>液胞</b> が見られます。
                                            </div>
                                            <h4>体の 成り立ち</h4>
                                            <div class="point-box">
                                                ・細胞 ➔ <b>組織（そしき）</b> ➔ <b>器官（きかん）</b> ➔ 個体 という順に、複雑な体が成り立っています。
                                            </div>`,
                                            quizzes: [
                                                { question: "植物の細胞にあり、体を支えるためのかたい仕切りを何という？", display: "用語", answer: "細胞壁", options: ["細胞壁", "細胞膜", "核"] },
                                                { question: "細胞が集まってでき、特定の役割をもつ「組織」がさらに集まったものを何という？", display: "体の構成", answer: "器官", options: ["器官", "個体", "細胞膜"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "5. 植物（しょくぶつ）の 生活（せいかつ）と つくり",
                                    subUnits: [
                                        {
                                            title: "(ア) 光合成（こうごうせい）と 呼吸（こきゅう）",
                                            content: `<h4>植物の エネルギー</h4>
                                            <div class="point-box">
                                                ・<b>光合成</b>：葉緑体で光エネルギーを使い、二酸化炭素と水から <b>有機物（デンプンなど）</b> と酸素を作ります。<br>
                                                ・<b>呼吸</b>：常に酸素を取り入れ二酸化炭素を出すはたらき。植物も24時間行っています。
                                            </div>`,
                                            quizzes: [
                                                { question: "光合成によって、二酸化炭素と水から作られる有機物（養分）の代表例は？", display: "物質", answer: "デンプン", options: ["デンプン", "脂肪", "タンパク質"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 蒸散（じょうさん）と 物質（ぶっしつ）の 通り道",
                                            content: `<h4>水の 流れと 維管束（いかんそく）</h4>
                                            <div class="point-box">
                                                ・<b>蒸散</b>：葉の <b>気孔（きこう）</b> から水蒸気を出すことで、根からの吸水を促します。<br>
                                                ・<b>道管（どうかん）</b>：根から吸い上げた水や肥料分が通る管。茎の <b>内側</b> にあります。<br>
                                                ・<b>師管（しかん）</b>：葉で作られた養分が通る管。茎の <b>外側</b> にあります。
                                            </div>`,
                                            quizzes: [
                                                { question: "根から吸い上げた水の通り道である、維管束の内側にある管を何という？", display: "用語", answer: "道管", options: ["道管", "師管", "気孔"] },
                                                { question: "葉で作られた養分が通る、維管束の外側にある管を何という？", display: "用語", answer: "師管", options: ["師管", "道管", "根毛"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "6. 動物（どうぶつ）の 生活（せいかつ）と つくり",
                                    subUnits: [
                                        {
                                            title: "(ア) 消化（しょうか）と 吸収（きゅうしゅう）",
                                            content: `<h4>栄養を 取り入れる</h4>
                                            <div class="point-box">
                                                ・<b>消化酵素</b>：食べ物を分解する物質（唾液のアミラーゼ、胃液のペプシンなど）。<br>
                                                ・<b>柔毛（じゅうもう）</b>：小腸の内壁にある小さな突起。表面積を広げ、効率よく栄養分を吸収します。
                                            </div>`,
                                            quizzes: [
                                                { question: "唾液に含まれ、デンプンを分解するはたらきをもつ消化酵素は何かな？", display: "酵素名", answer: "アミラーゼ", options: ["アミラーゼ", "ペプシン", "トリプシン"] },
                                                { question: "小腸の内壁にある、栄養分を吸収するための小さな突起を何という？", display: "用語", answer: "柔毛", options: ["柔毛", "気孔", "根毛"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 呼吸（こきゅう）と 循環（じゅんかん）",
                                            content: `<h4>ガス交換と 血液</h4>
                                            <div class="point-box">
                                                ・<b>肺胞（はいほう）</b>：肺にある無数の小さな袋。酸素と二酸化炭素の交換を効率よく行います。<br>
                                                ・<b>心臓</b>：血液を送り出すポンプ。4つの部屋に分かれています。<br>
                                                ・<b>成分</b>：赤血球（酸素を運ぶ）、血漿（けっしょう：養分や不要物を運ぶ）。
                                            </div>`,
                                            quizzes: [
                                                { question: "肺にある無数の小さな袋で、空気とのガス交換を行う場所を何という？", display: "用語", answer: "肺胞", options: ["肺胞", "気管支", "心房"] },
                                                { question: "血液の成分のうち、全身に酸素を運ぶ役割をもっているのはどれ？", display: "血液", answer: "赤血球", options: ["赤血球", "白血球", "血漿"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 排出（はいしゅつ）と 調節（ちょうせつ）",
                                            content: `<h4>不要物を 取り除く</h4>
                                            <div class="point-box">
                                                ・<b>腎臓（じんぞう）</b>：血液中の不要物をこし出し、尿をつくります。<br>
                                                ・<b>肝臓（かんぞう）</b>：有害なアンモニアを無害な尿素に変えたり、養分を貯蔵したりします。
                                            </div>`,
                                            quizzes: [
                                                { question: "血液中の不要物をこし出して尿をつくる器官はどこかな？", display: "器官", answer: "腎臓", options: ["腎臓", "肝臓", "胃"] }
                                            ]
                                        },
                                        {
                                            title: "(エ) 刺激（しげき）と 反応（はんのう）",
                                            content: `<h4>感じて 動く</h4>
                                            <div class="point-box">
                                                ・<b>感覚器官</b>：目（光）や耳（音）など、特定の刺激を受け取る器官。<br>
                                                ・<b>神経系</b>：刺激は <b>感覚神経 ➔ 中枢神経（脳・脊髄） ➔ 運動神経</b> の順に伝わります。<br>
                                                ・<b>反射</b>：脳を通さず、刺激に対して無意識に起こる反応。
                                            </div>`,
                                            quizzes: [
                                                { question: "刺激に対して無意識に起こる、生まれつき備わった反応を何という？", display: "用語", answer: "反射", options: ["反射", "思考", "記憶"] },
                                                { question: "刺激を伝える経路で、脳や脊髄（せきずい）のことを何という？", display: "用語", answer: "中枢神経", options: ["中枢神経", "末梢神経", "自律神経"] }
                                            ]
                                        },
                                        {
                                            title: "(オ) 運動器官（うんどうきかん）",
                                            content: `<h4>体を 動かす</h4>
                                            <div class="point-box">
                                                ・<b>骨格と筋肉</b>：骨と筋肉が連携して関節を曲げることで、体が動きます。
                                            </div>`,
                                            quizzes: [
                                                { question: "腕を曲げるとき、内側の筋肉はどうなっているかな？", display: "筋肉の動き", answer: "縮んでいる", options: ["縮んでいる", "ゆるんでいる"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "7. 生命（せいめい）の 連続性（れんぞくせい）と 遺伝（いでん）",
                                    subUnits: [
                                        {
                                            title: "(ア) 細胞分裂（さいぼうぶんれつ）",
                                            content: `<h4>体が 大きくなる しくみ</h4>
                                            <div class="point-box">
                                                ・<b>体細胞分裂</b>：1つの細胞が2つに分かれる際、<b>染色体（せんしょくたい）</b> が複製されて等しく分配されます。
                                            </div>`,
                                            quizzes: [
                                                { question: "細胞分裂のときに核の中に現れる、遺伝に関係するひも状のものを何という？", display: "用語", answer: "染色体", options: ["染色体", "細胞壁", "核膜"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 生殖（せいしょく）の 種類（しゅるい）",
                                            content: `<h4>なかまを ふやす</h4>
                                            <div class="point-box">
                                                ・<b>無性生殖</b>：分裂や栄養生殖（ジャガイモなど）。親と全く同じ形質の子ができます。<br>
                                                ・<b>有性生殖</b>：卵と精子（受精）による生殖。新しい個体ができる過程を学びます。
                                            </div>`,
                                            quizzes: [
                                                { question: "卵と精子が受精することによって新しい個体をつくるふえ方を何という？", display: "用語", answer: "有性生殖", options: ["有性生殖", "無性生殖", "栄養生殖"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 遺伝（いでん）の 規則性（きそくせい）",
                                            content: `<h4>親から 子へ</h4>
                                            <div class="point-box">
                                                ・<b>遺伝子</b>：形質を決めるもとになるもの。本体は <b>DNA</b> です。<br>
                                                ・<b>分離の法則</b>：対になっている遺伝子が分かれて別々の生殖細胞に入るというメンデルの法則。
                                            </div>`,
                                            quizzes: [
                                                { question: "遺伝子の本体である物質をアルファベット3文字で何という？", display: "用語", answer: "DNA", options: ["DNA", "ATP", "RNA"] },
                                                { question: "対になっている遺伝子が分かれて別々の生殖細胞に入るという法則は？", display: "用語", answer: "分離の法則", options: ["分離の法則", "優性の法則", "慣性の法則"] }
                                            ]
                                        },
                                        {
                                            title: "(エ) 生物（せいぶつ）の 進化（しんか）",
                                            content: `<h4>生命（せいめい）の 歴（れきし）</h4>
                                            <div class="point-box">
                                                ・<b>相同器官（そうどうきかん）</b>：形やはたらきは違っても、もともとは同じ起源をもつ器官（例：鳥の翼とヒトの腕）。進化の証拠になります。<br>
                                                ・進化の流れ：水中生活から陸上生活へ（魚類 ➔ 両生類 ➔ 爬虫類 ➔ 鳥類・哺乳類）。
                                            </div>`,
                                            quizzes: [
                                                { question: "鳥の翼とヒトの腕のように、もともと同じものから変化したと考えられる器官を何という？", display: "用語", answer: "相同器官", options: ["相同器官", "感覚器官", "消化器官"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "8. 自然界（しぜんかい）の つながり",
                                    subUnits: [
                                        {
                                            title: "(ア) 生態系（せいたいけい）の 役割（やくわり）",
                                            content: `<h4>食べる・食べられるの関係</h4>
                                            <div class="point-box">
                                                ・<b>食物網（しょくもつもう）</b>：食う・食われるの関係が網の目のように複雑に絡み合い、生態系のバランスが保たれています。<br>
                                                ・<b>生産者</b>：光合成によって無機物から有機物（デンプンなど）をつくり出す（植物など）。<br>
                                                ・<b>消費者</b>：他の生物を食べて有機物を取り入れる（動物など）。<br>
                                                ・<b>分解者</b>：生物の遺骸や排出物を無機物に分解する（菌類・細菌類など）。
                                            </div>`,
                                            quizzes: [
                                                { question: "生態系において、光合成をして自分で養分をつくる植物を何という？", display: "役割", answer: "生産者", options: ["生産者", "消費者", "分解者"] },
                                                { question: "死骸や排出物を分解して土に還す役割の生物（キノコやカビなど）を何という？", display: "役割", answer: "分解者", options: ["分解者", "生産者", "消費者"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 物質（ぶっしつ）の 循環（じゅんかん）",
                                            content: `<h4>炭素（たんそ）の めぐり</h4>
                                            <div class="point-box">
                                                ・<b>炭素の循環</b>：有機物（デンプンなど）と無機物（二酸化炭素）が、光合成・呼吸・分解・燃焼を通じて、環境中を循環しています。
                                            </div>`,
                                            quizzes: [
                                                { question: "植物が光合成で二酸化炭素を取り込み、有機物に変えるときに循環している元素は何かな？", display: "元素", answer: "炭素", options: ["炭素", "窒素", "酸素"] }
                                            ]
                                        }
                                    ]
                                }
                            ] 
                        },
                        { 
                            name: "化学", 
                            units: [
                                {
                                    title: "1. 身（み）の回（まわ）りの 物質（ぶっしつ）と 性質（せいしつ）",
                                    subUnits: [
                                        {
                                            title: "(ア) 有機物（ゆうきぶつ）・無機物（むきぶつ）と 金属",
                                            content: `<h4>物質の 分類（ぶんるい）</h4>
                                            <div class="point-box">
                                                ・<b>有機物</b>：炭素をふくみ、燃えると <b>二酸化炭素</b> を出し、<b>炭（すみ）</b> になる物質（砂糖、エタノールなど）。<br>
                                                ・<b>無機物</b>：有機物以外の物質（食塩、鉄、ガラスなど）。
                                            </div>
                                            <h4>金属（きんぞく）の 共通（きょうつう）の 性質</h4>
                                            <div class="point-box">
                                                ① <b>電気伝導性</b>（電気をよく通す）<br>
                                                ② <b>金属光沢</b>（みがくと光る）<br>
                                                ③ <b>展性（てんせい）・延性（えんせい）</b>（たたくと広がる・引きのばせる）
                                            </div>`,
                                            quizzes: [
                                                { question: "燃えたときに二酸化炭素を出し、炭になる性質をもつ物質を何という？", display: "用語", answer: "有機物", options: ["有機物", "無機物", "金属"] },
                                                { question: "金属の性質のうち、たたいて薄く広げることができる性質を何という？", display: "用語", answer: "展性（てんせい）", options: ["展性", "光沢", "熱伝導"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 密度（みつど）の 測定（そどてい）",
                                            content: `<h4>物質を見分ける 手がかり</h4>
                                            <div class="point-box">
                                                ・<b>密度</b>：一定の体積（1cm3）あたりの質量。物質の種類によって決まっています。<br>
                                                ・式：<b>密度 [g/cm3] = 質量 [g] ÷ 体積 [cm3]</b>
                                            </div>`,
                                            quizzes: [
                                                { question: "密度を求める式として正しいのはどれかな？", display: "計算式", answer: "質量 ÷ 体積", options: ["質量 ÷ 体積", "体積 ÷ 質量", "質量 ✕ 体積"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 気体（きたい）の 性質と 集め方",
                                            content: `<h4>いろいろな 気体</h4>
                                            <div class="point-box">
                                                ・<b>酸素</b>：物を燃やす働き。二酸化マンガンに過酸化水素水を加える。<br>
                                                ・<b>二酸化炭素</b>：石灰水を白くにごす。石灰石に塩酸を加える。<br>
                                                ・<b>水素</b>：音を立てて燃える。亜鉛などの金属に塩酸を加える。<br>
                                                ・<b>アンモニア</b>：刺激臭があり、水に非常によく溶ける。
                                            </div>
                                            <h4>気体の 捕集法（ほしゅうほう）</h4>
                                            <div class="point-box">
                                                ・<b>水上置換法</b>：水に溶けにくい気体（酸素、水素など）。<br>
                                                ・<b>上方置換法</b>：水に溶けやすく、空気より軽い気体（アンモニア）。<br>
                                                ・<b>下方置換法</b>：水に溶けやすく、空気より重い気体（二酸化炭素、塩素）。
                                            </div>`,
                                            quizzes: [
                                                { question: "アンモニアのように、水に溶けやすく空気より軽い気体を集める方法は？", display: "捕集法", answer: "上方置換法", options: ["上方置換法", "下方置換法", "水上置換法"] },
                                                { question: "石灰石に塩酸を加えたときに発生する気体は何かな？", display: "気体の発生", answer: "二酸化炭素", options: ["二酸化炭素", "酸素", "水素"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "2. 水溶液（すいようえき）と 粒子（りゅうし）の モデル",
                                    subUnits: [
                                        {
                                            title: "(ア) 溶解（ようかい）の モデルと 濃度（のうど）",
                                            content: `<h4>溶（と）ける ということ</h4>
                                            <div class="point-box">
                                                ・物質が水に溶けて均一になるのは、目に見えない <b>粒子（りゅうし）</b> が全体に広がって（拡散）混ざり合うからです。
                                            </div>
                                            <h4>質量（しつりょう）パーセント濃度</h4>
                                            <div class="point-box">
                                                ・式：<b>濃度 [％] = (溶質の質量 ÷ 溶液の質量) ✕ 100</b><br>
                                                ※溶液の質量 = 溶質の質量 ＋ 溶媒（水）の質量
                                            </div>`,
                                            quizzes: [
                                                { question: "水溶液の濃さを表す、溶液全体に対する溶質の割合を何という？", display: "用語", answer: "質量パーセント濃度", options: ["質量パーセント濃度", "密度", "体積パーセント濃度"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 溶解度（ようかいど）と 再結晶（さいけっしょう）",
                                            content: `<h4>結晶（けっしょう）を 取り出す</h4>
                                            <div class="point-box">
                                                ・<b>溶解度</b>：水 100g に溶ける物質の最大量。<br>
                                                ・<b>再結晶</b>：一度溶かした物質を、再び結晶として取り出すこと。<br>
                                                ・<b>温度変化</b>：温度による溶解度の差が大きい物質（ミョウバンなど）に有効。<br>
                                                ・<b>蒸発</b>：溶解度の変化が小さい物質（食塩など）は、水を蒸発させて取り出す。
                                            </div>`,
                                            quizzes: [
                                                { question: "食塩のように、温度が変わっても溶ける量がほぼ変わらない物質から結晶を取り出す方法は？", display: "再結晶", answer: "水を蒸発させる", options: ["水を蒸発させる", "冷やす", "かき混ぜる"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "3. 状態変化（じょうたいへんか）と 熱（ねつ）",
                                    subUnits: [
                                        {
                                            title: "(ア) 質量（しつりょう）と 体積（たいせき）の変化",
                                            content: `<h4>粒子の モデルで 考える</h4>
                                            <div class="point-box">
                                                ・状態変化しても粒子の数自体は変わらないため、<b>質量は変化しません</b>。<br>
                                                ・粒子の間隔が変わるため、<b>体積は変化します</b>。
                                            </div>`,
                                            quizzes: [
                                                { question: "物質が状態変化しても変わらないのはどっちかな？", display: "保存される量", answer: "質量", options: ["質量", "体積"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 融点（ゆうてん）・沸点（ふってん）と 蒸留（じょうりゅう）",
                                            content: `<h4>温度の 変化</h4>
                                            <div class="point-box">
                                                ・純粋な物質は、状態変化の最中（融解中や沸騰中）は <b>温度が一定</b> に保たれます。
                                            </div>
                                            <h4>蒸留（じょうりゅう）</h4>
                                            <div class="point-box">
                                                ・<b>沸点のちがい</b> を利用して、混合物の液体を加熱して気体にし、それを冷やして再び液体にして分ける操作. ワインからエタノールを取り出すときなどに使われます。
                                            </div>`,
                                            quizzes: [
                                                { question: "沸点の違いを利用して、液体の混合物から物質を分ける操作を何という？", display: "用語", answer: "蒸留", options: ["蒸留", "再結晶", "ろ過"] },
                                                { question: "物質が沸騰している間の温度はどうなっているかな？", display: "温度変化", answer: "一定に保たれる", options: ["一定に保たれる", "上がり続ける", "下がる"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "4. 化学変化（かがくへんか）と 原子（げんし）・分子（ぶんし）",
                                    subUnits: [
                                        {
                                            title: "(ア) 物質の 分解（ぶんかい）",
                                            content: `<h4>化学変化（化学反応）</h4>
                                            <div class="point-box">
                                                ・<b>熱分解</b>：加熱によって物質が分解すること（炭酸水素ナトリウムの分解など）。<br>
                                                ・<b>電気分解</b>：電流を流すことで物質が分解すること（水の分解など）。
                                            </div>`,
                                            quizzes: [
                                                { question: "炭酸水素ナトリウムを加熱したときに、発生する気体は何かな？", display: "実験", answer: "二酸化炭素", options: ["二酸化炭素", "酸素", "水素"] },
                                                { question: "電流を流して物質を分解することを何という？", display: "用語", answer: "電気分解", options: ["電気分解", "熱分解", "酸化"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 原子（げんし）・分子（ぶんし）と 化学反応式",
                                            content: `<h4>物質の 成り立ち</h4>
                                            <div class="point-box">
                                                ・<b>原子</b>：それ以上分けることができない、物質を形づくる小さな粒子。<br>
                                                ・<b>分子</b>：いくつかの原子が結びついた、物質の性質を示す最小の単位。
                                            </div>
                                            <h4>化学反応式（かがくはんのうしき）</h4>
                                            <div class="point-box">
                                                ・化学変化を、化学式を使って表したもの。反応の前後で <b>原子の種類と数は変わらない</b>。
                                            </div>`,
                                            quizzes: [
                                                { question: "物質の性質を示す、原子が結びついた最小の単位を何という？", display: "用語", answer: "分子", options: ["分子", "原子", "イオン"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 酸化（さんか）と 還元（かんげん）",
                                            content: `<h4>酸素との 反応</h4>
                                            <div class="point-box">
                                                ・<b>酸化</b>：物質が酸素と結びつくこと（銅の酸化など）。<br>
                                                ・<b>還元</b>：酸化物から酸素が取り除かれること（酸化銅の炭素による還元など）。<br>
                                                ・<b>同時性</b>：酸化と還元は多くの場合、同時に起こります。
                                            </div>`,
                                            quizzes: [
                                                { question: "酸化銅を炭素と一緒に加熱して銅を取り出す変化を何という？", display: "用語", answer: "還元", options: ["還元", "酸化", "分解"] }
                                            ]
                                        },
                                        {
                                            title: "(エ) 化学変化と 質量（しつりょう）の 規則（きそく）",
                                            content: `<h4>質量の 法則（ほうそく）</h4>
                                            <div class="point-box">
                                                ・<b>質量保存の法則</b>：反応の前後で、物質全体の質量の総和は変わりません。沈殿反応や、密閉容器内での気体発生実験で確かめられます。<br>
                                                ・<b>定比例の法則</b>：物質が反応する際、結びつく質量の比は常に一定です。<br>
                                                &nbsp;&nbsp;例：<b>銅：酸素 ＝ 4：1</b><br>
                                                &nbsp;&nbsp;例：マグネシウム：酸素 ＝ 3：2
                                            </div>`,
                                            quizzes: [
                                                { question: "銅 4.0g を完全に酸化させたとき、結びつく酸素の質量は何gかな？", display: "計算", answer: "1.0g", options: ["1.0g", "2.0g", "0.5g"] },
                                                { question: "反応の前後で、物質全体の重さが変わらないという法則を何という？", display: "用語", answer: "質量保存の法則", options: ["質量保存の法則", "定比例の法則", "慣性の法則"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "5. 化学変化（かがくへんか）と イオン",
                                    subUnits: [
                                        {
                                            title: "(ア) 水溶液（すいようえき）と 電流（でんりゅう）",
                                            content: `<h4>電解質（でんかいしつ）</h4>
                                            <div class="point-box">
                                                ・<b>電解質</b>：水に溶かしたときに、電流が流れる物質（塩化銅、塩化水素など）。<br>
                                                ・<b>非電解質</b>：水に溶かしても、電流が流れない物質（砂糖、エタノールなど）。
                                            </div>`,
                                            quizzes: [
                                                { question: "水に溶かしたときに、電流が流れる物質を何という？", display: "用語", answer: "電解質", options: ["電解質", "非電解質", "絶縁体"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 原子（げんし）の 成り立ちと イオン",
                                            content: `<h4>原子の 構造（こうぞう）</h4>
                                            <div class="point-box">
                                                ・原子の中心には <b>原子核（陽子・中性子）</b> があり、そのまわりを <b>電子（－の電気）</b> がまわっています。<br>
                                                ・<b>陽子</b> は＋（プラス）の電気をもっています。
                                            </div>
                                            <h4>イオンの 正体</h4>
                                            <div class="point-box">
                                                ・<b>陽（よう）イオン</b>：原子が電子を <b>失い</b>、＋の電気を帯びたもの。<br>
                                                ・<b>陰（いん）イオン</b>：原子が電子を <b>受け取り</b>、－の電気を帯びたもの。
                                            </div>`,
                                            quizzes: [
                                                { question: "原子の中心にあり、陽子と中性子からできているものを何という？", display: "用語", answer: "原子核", options: ["原子核", "電子", "分子"] },
                                                { question: "原子が電子を失って、プラスの電気を帯びたものを何という？", display: "用語", answer: "陽イオン", options: ["陽イオン", "陰イオン", "分子"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 酸（さん）・アルカリと 中和（ちゅうわ）",
                                            content: `<h4>酸・アルカリの 正体</h4>
                                            <div class="point-box">
                                                ・<b>酸</b>：水溶液中で <b>水素イオン (H+)</b> を出す物質。<br>
                                                ・<b>アルカリ</b>：水溶液中で <b>水酸化物イオン (OH-)</b> を出す物質。
                                            </div>
                                            <h4>中和（ちゅうわ）</h4>
                                            <div class="point-box">
                                                ・酸の H+ と アルカリの OH- が反応して <b>水 (H2O)</b> ができる反応。<br>
                                                ・同時に <b>塩（えん）</b> という物質もできます（例：塩化ナトリウムなど）。
                                            </div>`,
                                            quizzes: [
                                                { question: "酸とアルカリが反応して、互いの性質を打ち消し合う反応を何という？", display: "用語", answer: "中和", options: ["中和", "酸化", "還元"] },
                                                { question: "中和反応によって、水と一緒にできる物質を何という？", display: "用語", answer: "塩（えん）", options: ["塩（えん）", "糖", "酸"] }
                                            ]
                                        },
                                        {
                                            title: "(エ) 電池（でんち）の しくみ",
                                            content: `<h4>化学電池</h4>
                                            <div class="point-box">
                                                ・2種類の金属を電解質に入れると、<b>化学エネルギー</b> が <b>電気エネルギー</b> に変換されます。<br>
                                                ・<b>イオン化傾向</b>：金属の「イオンへのなりやすさ」の違いを利用します。<br>
                                                ・<b>ダニエル電池</b>：亜鉛と銅、2種類の電解液を用いた代表的な電池。
                                            </div>`,
                                            quizzes: [
                                                { question: "電池において、化学エネルギーから変換されて取り出されるエネルギーは何かな？", display: "エネルギー", answer: "電気エネルギー", options: ["電気エネルギー", "熱エネルギー", "光エネルギー"] },
                                                { question: "2種類の液を用い、長時間電流を取り出せるように工夫された電池の代表例は？", display: "電池名", answer: "ダニエル電池", options: ["ダニエル電池", "ボルタ電池", "乾電池"] }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        { 
                            name: "物理", 
                            units: [
                                {
                                    title: "1. 光（ひかり）の 性質（せいしつ）",
                                    subUnits: [
                                        {
                                            title: "(ア) 反射（はんしゃ）と 屈折（くっせつ）",
                                            content: `<h4>光の 直進・反射・屈折</h4>
                                            <div class="point-box">
                                                ・<b>反射の法則</b>：入射角（にゅうしゃかく）と 反射角は 常に 等しくなります。<br>
                                                ・<b>屈折</b>：光が 空気から ガラスへ進むときは「入射角 ＞ 屈折角」となり、ガラスから 空気へ進むときは「入射角 ＜ 屈折角」となります。
                                            </div>
                                            <h4>全反射（ぜんはんしゃ）と 分散（ぶんさん）</h4>
                                            <div class="point-box">
                                                ・<b>全反射</b>：ガラスから 空気へ進む際、入射角を 大きくすると、光が 外に出ずに すべて反射する現象。光ファイバーに 応用されています。<br>
                                                ・<b>分散</b>：白色光（太陽光など）が プリズムを通ると、いろいろな 色に 分かれること。
                                            </div>`,
                                            quizzes: [
                                                { question: "光がガラスから空気へ進むとき、入射角が大きくなるとすべて反射する現象は？", display: "用語", answer: "全反射", options: ["全反射", "全屈折", "分散"] },
                                                { question: "太陽の光（白色光）がプリズムで虹のように分かれることを何という？", display: "用語", answer: "分散", options: ["分散", "反射", "直進"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 凸（とつ）レンズの 働き",
                                            content: `<h4>焦点（しょうてん）と 像（ぞう）</h4>
                                            <div class="point-box">
                                                ・<b>焦点</b>：レンズに 平行に入った光が 集まる点。レンズの中心から 焦点までの 距離を <b>焦点距離</b> といいます。
                                            </div>
                                            <h4>実像（じつぞう）と 虚像（きょぞう）</h4>
                                            <div class="point-box">
                                                ・<b>実像</b>：物体を 焦点の <b>外側</b> に置いたとき、スクリーンの 反対側に映る 逆さまの像。<br>
                                                ・<b>虚像</b>：物体を 焦点の <b>内側</b> に置いたとき、レンズ越しに 見える 大きく 正立した像。
                                            </div>`,
                                            quizzes: [
                                                { question: "物体を焦点の内側に置いたときに見える、大きく正しい向きの像は？", display: "像の種類", answer: "虚像", options: ["虚像", "実像", "残像"] },
                                                { question: "凸レンズで、平行な光が集まる場所のことを何という？", display: "用語", answer: "焦点", options: ["焦点", "中心", "作用点"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "2. 音（おと）の 性質（せいしつ）",
                                    subUnits: [
                                        {
                                            title: "(ア) 音の 伝わり方と 速さ",
                                            content: `<h4>音の 正体（しょうたい）</h4>
                                            <div class="point-box">
                                                ・音は 物体の <b>振動（しんどう）</b> であり、空気などの <b>媒質（ばいしつ）</b> を 波として 伝わります。<br>
                                                ・物質がない <b>真空（しんくう）</b> では、音は 伝わりません。
                                            </div>
                                            <h4>音の 速さ</h4>
                                            <div class="point-box">
                                                ・空気中を 伝わる 音の速さは、およそ <b>340m/s</b> です。雷や 花火の 光と 音のズレは これに よります。
                                            </div>`,
                                            quizzes: [
                                                { question: "空気がない「真空」の状態（じょうたい）で、音は伝わるかな？", display: "音の伝播", answer: "伝わらない", options: ["伝わらない", "少し伝わる", "速く伝わる"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 音の 大きさと 高さ",
                                            content: `<h4>音の 三要素</h4>
                                            <div class="point-box">
                                                ・<b>大きさ</b>：振動の幅（<b>振幅（しんぷく）</b>）が 大きいほど、音は 大きくなります。<br>
                                                ・<b>高さ</b>：1秒間に 振動する回数（<b>振動数（しんどうすう）</b> / 単位：<b>Hz ヘルツ</b>）が 多いほど、音は 高くなります。
                                            </div>`,
                                            quizzes: [
                                                { question: "音の「高さ」に関係するのは、1秒間に振動する回数である何かな？", display: "用語", answer: "振動数", options: ["振動数", "振幅", "周期"] },
                                                { question: "振動数を表す単位（Hz）の読み方は？", display: "単位", answer: "ヘルツ", options: ["ヘルツ", "ニュートン", "アンペア"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "3. 力（ちから）の 働き",
                                    subUnits: [
                                        {
                                            title: "(ア) 力の 働きと 表し方",
                                            content: `<h4>力の 3つの 働き</h4>
                                            <div class="point-box">
                                                ① 物体を <b>変形（へんけい）</b> させる。<br>
                                                ② 物体の <b>運動の状態（速さや向き）</b> を 変える。<br>
                                                ③ 物体を <b>支える</b>。
                                            </div>
                                            <h4>力の 三要素（さんようそ）</h4>
                                            <div class="point-box">
                                                ・<b>作用点・向き・大きさ</b> の 3つで 決まり、矢印で 図示します。<br>
                                                ・単位は <b>ニュートン（N）</b>。100gの 物体に 働く 重力が 約 1N です。
                                            </div>`,
                                            quizzes: [
                                                { question: "100gの物体に働く重力の大きさは、およそ何N（ニュートン）かな？", display: "力の大きさ", answer: "1N", options: ["1N", "10N", "100N"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) フックの 法則（ほうそく）",
                                            content: `<h4>弾性（だんせい）の 性質</h4>
                                            <div class="point-box">
                                                ・<b>フックの法則</b>：ばねの 伸びは、加えた <b>力の大きさに 比例（ひれい）</b> します。
                                            </div>`,
                                            quizzes: [
                                                { question: "ばねを引く力が2倍になると、ばねの「伸び」はどうなるかな？", display: "比例の関係", answer: "2倍になる", options: ["2倍になる", "半分になる", "変わらない"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 二力（にりょく）の つり合い",
                                            content: `<h4>つり合いの 3条件</h4>
                                            <div class="point-box">
                                                物体が 静止しているとき、働いている 2つの力は 次の 条件を 満たしています。<br>
                                                ① <b>大きさが 等しい</b>。<br>
                                                ② <b>向きが 反対である</b>。<br>
                                                ③ <b>一直線上にある</b>。
                                            </div>`,
                                            quizzes: [
                                                { question: "2つの力がつり合うとき、力の「向き」はどうなっているかな？", display: "つり合い", answer: "反対である", options: ["反対である", "同じである", "直角である"] }
                                            ]
                                        },
                                        {
                                            title: "(エ) 質量（しつりょう）と 重さ",
                                            content: `<h4>ちがいを 理解（りかい）しよう</h4>
                                            <div class="point-box">
                                                ・<b>質量（g, kg）</b>：場所が 変わっても 変化しない 物体そのものの量。<b>てんびん</b> で 測ります。<br>
                                                ・<b>重さ（N）</b>：物体に 働く <b>重力の大きさ</b>。場所（月など）に よって 変わり、<b>ばねばかり</b> で 測ります。
                                            </div>`,
                                            quizzes: [
                                                { question: "場所が変わっても変化しない、物体そのものの量を何という？", display: "用語", answer: "質量", options: ["質量", "重さ", "体積"] },
                                                { question: "地球から月に行くと、変化するのは「質量」と「重さ」のどっちかな？", display: "場所による変化", answer: "重さ", options: ["重さ", "質量"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "4. 電流（でんりゅう）・電圧（でんあつ）・抵抗（ていこう）",
                                    subUnits: [
                                        {
                                            title: "(ア) オームの 法則（ほうそく）と 回路（かいろ）",
                                            content: `<h4>オームの 法則</h4>
                                            <div class="point-box">
                                                ・電熱線に 流れる 電流 I は、加わる 電圧 V に 比例します（<b>V = RI</b>）。グラフは 原点を通る 直線になります。
                                            </div>
                                            <h4>直列（ちょくれつ）・並列（へいれつ）回路</h4>
                                            <div class="point-box">
                                                ・<b>電流</b>：直列は どこでも一定。並列は 各道の和が 全体。<br>
                                                ・<b>電圧</b>：直列は 各部の和が 全体。並列は どこでも一定。
                                            </div>`,
                                            quizzes: [
                                                { question: "直列回路において、電流の大きさは場所によって変わるかな？", display: "電流の規則性", answer: "どこでも一定", options: ["どこでも一定", "場所により違う"] },
                                                { question: "並列回路において、各部分にかかる電圧の大きさはどうなっている？", display: "電圧の規則性", answer: "どこでも一定", options: ["どこでも一定", "合計が全体になる"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 電力（でんりょく）と 熱量（ねつりょう）",
                                            content: `<h4>電気による エネルギー</h4>
                                            <div class="point-box">
                                                ・<b>電力（W）</b>：電圧 ✕ 電流 で表され、光や 熱の強さを 決めます。<br>
                                                ・<b>電力量・熱量（J）</b>：電力 ✕ 時間（秒）。電気による エネルギーの 総量です。
                                            </div>`,
                                            quizzes: [
                                                { question: "電圧10Vで2Aの電流が流れたとき、電力は何W（ワット）かな？", display: "計算", answer: "20W", options: ["20W", "5W", "12W"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "5. 静電気（せいでんき）と 電子（でんし）",
                                    subUnits: [
                                        {
                                            title: "(ア) 静電気と 電流の正体",
                                            content: `<h4>静電気の 性質</h4>
                                            <div class="point-box">
                                                ・摩擦（まさつ）によって 生じる 電気。同じ種類の 電気は 退（しりぞ）け合い、違う種類は 引き合います。
                                            </div>
                                            <h4>電子（でんし）の 流れ</h4>
                                            <div class="point-box">
                                                ・電流の正体は、マイナスの 電気を持つ <b>電子</b> という 粒子の 流れです。
                                            </div>`,
                                            quizzes: [
                                                { question: "電流の正体である、マイナスの電気を持った小さな粒子の名前は？", display: "用語", answer: "電子", options: ["電子", "原子", "分子"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "6. 磁界（じかい）と 電磁誘導（でんじゆうどう）",
                                    subUnits: [
                                        {
                                            title: "(ア) 磁界（じかい）と 電流が受ける力",
                                            content: `<h4>電流の 周りの 磁界</h4>
                                            <div class="point-box">
                                                ・電流が 流れると 周りに <b>磁界</b> が 発生し、これを <b>磁力線（じりょくせん）</b> で 図示します。
                                            </div>
                                            <h4>モーターの 原理（げんり）</h4>
                                            <div class="point-box">
                                                ・磁界の中で 電流を 流すと、電流が 力を 受ける 仕組みを 利用しています。
                                            </div>`,
                                            quizzes: [
                                                { question: "電流の周りに発生する、磁石の力が働く空間のことを何という？", display: "用語", answer: "磁界", options: ["磁界", "電界", "臨界"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 電磁誘導（でんじゆうどう）と 直流・交流",
                                            content: `<h4>電気を つくる</h4>
                                            <div class="point-box">
                                                ・コイルの中の 磁界を 変化させると 電流が流れる <b>電磁誘導</b> は、発電機の 原理です。
                                            </div>
                                            <h4>直流（DC）と 交流（AC）</h4>
                                            <div class="point-box">
                                                ・<b>直流</b>：電流の 向きが 一定（電池など）。<br>
                                                ・<b>交流</b>：電流の 向きが 周期的に 入れ替わる（コンセントなど）。
                                            </div>`,
                                            quizzes: [
                                                { question: "家庭のコンセントのように、電流の向きが常に入れ替わる電流を何という？", display: "用語", answer: "交流", options: ["交流", "直流", "還流"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "7. 運動（うんどう）と エネルギー",
                                    subUnits: [
                                        {
                                            title: "(ア) 力の 合成（ごうせい）・分解（ぶんかい）",
                                            content: `<h4>合力（ごうりょく）と 分力（ぶんりょく）</h4>
                                            <div class="point-box">
                                                ・<b>力の合成</b>：2つの力と同じ働きをする1つの力（合力）を求めること。<br>
                                                ・<b>平行四辺形の法則</b>：2つの力を隣り合う2辺とする平行四辺形を描き、その対角線が合力となります。<br>
                                                ・<b>力の分解</b>：1つの力を、それと同じ働きをする2つの力（分力）に分けること。
                                            </div>`,
                                            quizzes: [
                                                { question: "2つの力をもとに平行四辺形を作って合力を求める決まりを何という？", display: "法則名", answer: "平行四辺形の法則", options: ["平行四辺形の法則", "慣性の法則", "フックの法則"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 水圧（すいあつ）と 浮力（ふりょく）",
                                            content: `<h4>水の 中の 力</h4>
                                            <div class="point-box">
                                                ・<b>水圧</b>：水の重さによる圧力。深いほど大きくなり、あらゆる向きからはたらきます。<br>
                                                ・<b>浮力</b>：水中の物体にはたらく、上向きの力。物体の上面とはたらく下面にかかる水圧の差によって生じます。
                                            </div>`,
                                            quizzes: [
                                                { question: "水中にある物体にはたらく、上向きの力の名前は？", display: "用語", answer: "浮力", options: ["浮力", "重力", "摩擦力"] },
                                                { question: "水圧は、水深が深くなるほどどうなるかな？", display: "性質", answer: "大きくなる", options: ["大きくなる", "小さくなる", "変わらない"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 物体の 運動と 慣性",
                                            content: `<h4>速さの 表し方</h4>
                                            <div class="point-box">
                                                ・<b>速さ ＝ 距離 ÷ 時間</b><br>
                                                ・<b>慣性の法則</b>：力がはたらいていない（またはつり合っている）とき、静止しているものは静止し続け、動いているものは等速直線運動を続ける性質。
                                            </div>`,
                                            quizzes: [
                                                { question: "走っているバスが急に止まると、体が前に投げ出されそうになるのは何のせい？", display: "現象", answer: "慣性", options: ["慣性", "重力", "磁力"] }
                                            ]
                                        },
                                        {
                                            title: "(エ) 仕事（しごと）と 仕事率（しごとりつ）",
                                            content: `<h4>理科での 仕事</h4>
                                            <div class="point-box">
                                                ・<b>仕事 [J] ＝ 力の大きさ [N] ✕ 移動距離 [m]</b><br>
                                                ・<b>仕事の原理</b>：動滑車やてこを使っても、必要な仕事の総量は変わらないこと。<br>
                                                ・<b>仕事率 [W] ＝ 仕事 [J] ÷ 時間 [秒]</b>：1秒あたりの仕事の能率。
                                            </div>`,
                                            quizzes: [
                                                { question: "10Nの力で物体を2m動かしたときの仕事は何J（ジュール）かな？", display: "計算", answer: "20J", options: ["20J", "5J", "12J"] },
                                                { question: "仕事の能率（1秒あたりの仕事）を表す単位Wの読み方は？", display: "単位", answer: "ワット", options: ["ワット", "ジュール", "ニュートン"] }
                                            ]
                                        },
                                        {
                                            title: "(オ) 力学的（りきがくてき）エネルギーの 保存",
                                            content: `<h4>移り変わる エネルギー</h4>
                                            <div class="point-box">
                                                ・<b>力学的エネルギー保存の法則</b>：摩擦や空気抵抗がなければ、位置エネルギーと運動エネルギーの和は常に一定に保たれます。
                                            </div>`,
                                            quizzes: [
                                                { question: "振り子が一番低いところを通るとき、最大になるのはどのエネルギー？", display: "エネルギー", answer: "運動エネルギー", options: ["運動エネルギー", "位置エネルギー", "電気エネルギー"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "8. 科学技術（かがくぎじゅつ）と 人間（にんげん）",
                                    subUnits: [
                                        {
                                            title: "(ア) エネルギーの 変換（へんかん）と 保存",
                                            content: `<h4>エネルギーの 移り変わり</h4>
                                            <div class="point-box">
                                                ・電気、熱、光、音などは、互いに変換（へんかん）されます。変換されてもエネルギーの総和は変わりません（<b>エネルギー保存の法則</b>）。
                                            </div>`,
                                            quizzes: [
                                                { question: "電球が光るとき、電気エネルギーは何エネルギーに変わっているかな？", display: "変換", answer: "光と熱", options: ["光と熱", "音", "位置"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 多様な エネルギー資源（しげん）",
                                            content: `<h4>発電の しくみ</h4>
                                            <div class="point-box">
                                                ・<b>火力・原子力・水力</b>：それぞれのメリットと課題（二酸化炭素、放射性廃棄物など）があります。<br>
                                                ・<b>再生可能エネルギー</b>：太陽光、風力、地熱など。環境負荷が少ないが、発電量が不安定な面もあります。
                                            </div>`,
                                            quizzes: [
                                                { question: "石油や石炭を燃やして電気をつくる発電方法は何かな？", display: "発電", answer: "火力発電", options: ["火力発電", "水力発電", "太陽光発電"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 持続可能（じぞくかのう）な 社会に向けて",
                                            content: `<h4>自然環境（しぜんかんきょう）との 調和</h4>
                                            <div class="point-box">
                                                ・科学技術は生活を豊かにしましたが、環境への影響も考えていく必要があります。<br>
                                                ・<b>SDGs</b> の視点を持ち、資源の有効利用や地球温暖化防止など、持続可能な社会を築くことが求められています。
                                            </div>`,
                                            quizzes: [
                                                { question: "環境を守りながら、未来までずっと続けていける社会のことを何という？", display: "用語", answer: "持続可能な社会", options: ["持続可能な社会", "消費社会", "工業社会"] }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        { 
                            name: "地学", 
                            units: [
                                {
                                    title: "1. 地層（ちそう）と 大地（だいち）の 歴史（れきし）",
                                    subUnits: [
                                        {
                                            title: "(ア) 地層（ちそう）の 重（かさ）なりと 広（ひろ）がり",
                                            content: `<h4>地層の 広がりを さぐる</h4>
                                            <div class="point-box">
                                                ・<b>鍵層（かぎそう）</b>：火山灰の層（凝灰岩）など、広範囲に同時に積もった層。離れた場所の地層を比べる手がかりになります。<br>
                                                ・<b>断層（だんそう）</b>：大地の力で地層が切れてずれたもの。<br>
                                                ・<b>褶曲（しゅうきょく）</b>：地層が押し曲げられて波打ったようになったもの。
                                            </div>`,
                                            quizzes: [
                                                { question: "離れた場所の地層を比べる手がかりになる、火山灰などの目立つ層を何という？", display: "用語", answer: "鍵層", options: ["鍵層", "断層", "褶曲"] },
                                                { question: "大地の大きな力によって地層が押し曲げられた構造を何という？", display: "用語", answer: "褶曲", options: ["褶曲", "断層", "鍵層"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 堆積岩（たいせきがん）の 種類（しゅるい）",
                                            content: `<h4>重みで 固まった 岩石</h4>
                                            <div class="point-box">
                                                ・<b>れき岩・砂岩・泥岩</b>：粒の大きさで区別されます。<br>
                                                ・<b>石灰岩</b>：生物の死骸などが固まったもの。うすい塩酸をかけると <b>二酸化炭素</b> が出ます。<br>
                                                ・<b>チャート</b>：非常に硬く、火花が出ることもある岩石。塩酸をかけても反応しません。
                                            </div>`,
                                            quizzes: [
                                                { question: "うすい塩酸をかけると二酸化炭素が発生する堆積岩はどれかな？", display: "岩石", answer: "石灰岩", options: ["石灰岩", "チャート", "凝灰岩"] },
                                                { question: "生物の死骸などが固まってできた非常に硬い岩石で、塩酸に反応しないのは？", display: "岩石", answer: "チャート", options: ["チャート", "石灰岩", "泥岩"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 化石（かせき）と 地質年代（ちしつねんだい）",
                                            content: `<h4>過去からの メッセージ</h4>
                                            <div class="point-box">
                                                ・<b>示相（しそう）化石</b>：当時の <b>環境</b> を推定する（例：サンゴ＝あたたかく浅い海）。<br>
                                                ・<b>示準（しじゅん）化石</b>：当時の <b>年代</b> を推定する（例：アンモナイト＝中生代）。
                                            </div>
                                            <h4>地球の 歴史区分</h4>
                                            <div class="point-box">
                                                ・<b>古生代</b>：三葉虫、フズリナなど。<br>
                                                ・<b>中生代</b>：恐竜、アンモナイトなど。<br>
                                                ・<b>新生代</b>：ビカリア、ナウマンゾウなど。
                                            </div>`,
                                            quizzes: [
                                                { question: "恐竜やアンモナイトが栄えた「地質年代」を何という？", display: "年代", answer: "中生代", options: ["中生代", "古生代", "新生代"] },
                                                { question: "サンゴの化石のように、当時の環境を知る手がかりになる化石を何という？", display: "用語", answer: "示相化石", options: ["示相化石", "示準化石", "生痕化石"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "2. 地震（じしん）の ゆれと しくみ",
                                    subUnits: [
                                        {
                                            title: "(ア) 地震の 伝わり方",
                                            content: `<h4>2つの波と ゆれ</h4>
                                            <div class="point-box">
                                                ・<b>P波（初期微動）</b>：速い波。最初の小さなゆれ。<br>
                                                ・<b>S波（主要動）</b>：遅い波。あとの大きなゆれ。<br>
                                                ・<b>初期微動継続時間（PS時間）</b>：P波とS波の到着時刻の差。震源からの距離に <b>比例</b> します。
                                            </div>`,
                                            quizzes: [
                                                { question: "地震の最初の小さなゆれ（初期微動）を起こす波はどっちかな？", display: "地震波", answer: "P波", options: ["P波", "S波"] },
                                                { question: "初期微動継続時間（PS時間）と震源からの距離の関係はどうなっているかな？", display: "関係", answer: "比例する", options: ["比例する", "反比例する", "関係ない"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 震度（しんど）と マグニチュード",
                                            content: `<h4>規模と 強さを 区別しよう</h4>
                                            <div class="point-box">
                                                ・<b>震度</b>：ある地点での <b>ゆれの強さ</b>（0〜7の10段階）。<br>
                                                ・<b>マグニチュード (M)</b>：地震そのものの <b>規模（エネルギーの大きさ）</b>。
                                            </div>`,
                                            quizzes: [
                                                { question: "地震そのもののエネルギーの大きさを表す指標は何かな？", display: "用語", answer: "マグニチュード", options: ["マグニチュード", "震度", "震央"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 地震の 原因（げんいん）と プレート",
                                            content: `<h4>プレートテクトニクス</h4>
                                            <div class="point-box">
                                                ・地球の表面を覆う巨大な岩盤（<b>プレート</b>）の沈み込みなどが、地震や火山活動の主な原因です。<br>
                                                ・日本付近は複数のプレートが重なり合っているため、地震が多く発生します。
                                            </div>`,
                                            quizzes: [
                                                { question: "地球の表面を覆っている巨大な岩盤のことを何という？", display: "用語", answer: "プレート", options: ["プレート", "地層", "マントル"] }
                                            ]
                                        },
                                        {
                                            title: "(エ) 土地（とち）の 変化と 災害（さいがい）",
                                            content: `<h4>地震が もたらす 変化</h4>
                                            <div class="point-box">
                                                ・<b>断層（だんそう）</b>：地層がずれる構造。<br>
                                                ・<b>隆起（りゅうき）・沈降（ちんこう）</b>：大地が上がったり下がったりすること。<br>
                                                ・<b>津波（つなみ）</b>：海底の地震による大きな波。<br>
                                                ・<b>液状化現象（えきじょうかげんしょう）</b>：ゆれで地盤が水のようになり、建物が沈む現象。
                                            </div>`,
                                            quizzes: [
                                                { question: "地震のゆれによって地盤がふにゃふにゃになり、建物が沈んでしまう現象は？", display: "用語", answer: "液状化現象", options: ["液状化現象", "津波", "褶曲"] },
                                                { question: "海底での地震によって発生する、非常に高い波を何という？", display: "用語", answer: "津波", options: ["津波", "高潮", "波浪"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "3. 火山（かざん）と 火成岩（かせいがん）",
                                    subUnits: [
                                        {
                                            title: "(ア) 火山の 形と 噴火（ふんか）",
                                            content: `<h4>マグマの 粘りけと 形</h4>
                                            <div class="point-box">
                                                ・<b>粘りけが強い</b>：ドーム状に盛り上がった火山。激しい噴火を起こしやすい（例：昭和新山、雲仙普賢岳）。<br>
                                                ・<b>粘りけが弱い</b>：傾斜のゆるやかな火山（盾状）。穏やかに溶岩が流れる（例：マウナロア、伊豆大島）。
                                            </div>`,
                                            quizzes: [
                                                { question: "マグマの粘りけが強く、ドーム状に盛り上がった火山の例はどれかな？", display: "火山の例", answer: "昭和新山", options: ["昭和新山", "マウナロア", "富士山"] },
                                                { question: "マグマの粘りけが弱いとき、噴火の様子はどうなるかな？", display: "噴火", answer: "穏やか", options: ["穏やか", "激しい", "爆発的"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 火成岩（かせいがん）の 分類",
                                            content: `<h4>冷え方による 組織の ちがい</h4>
                                            <div class="point-box">
                                                ・<b>火山岩</b>：地表付近で急に冷えたもの。細かい粒（<b>石基</b>）の中に大きな結晶（<b>斑晶</b>）が混じる <b>斑状組織</b>。<br>
                                                ・<b>深成岩</b>：地下深くでゆっくり冷えたもの。すべての結晶が大きくそろって育った <b>等粒状組織</b>。
                                            </div>`,
                                            quizzes: [
                                                { question: "火山岩に見られる、細かい粒の中に大きな結晶が混じった組織を何という？", display: "用語", answer: "斑状組織", options: ["斑状組織", "等粒状組織", "層状組織"] },
                                                { question: "地下深くでゆっくり冷えて固まり、結晶が大きくそろった岩石を何という？", display: "分類", answer: "深成岩", options: ["深成岩", "火山岩", "堆積岩"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "4. 自然（しぜん）の 恵（めぐ）みと 災害（さいがい）・保全（ほぜん）",
                                    subUnits: [
                                        {
                                            title: "(ア) 自然の 恩恵（おんけい）と 災害",
                                            content: `<h4>恵みと 驚異（きょうい）</h4>
                                            <div class="point-box">
                                                ・<b>自然の恵み</b>：火山が作り出す美しい景観、<b>温泉（おんせん）</b>、<b>地熱発電</b> など、私たちの生活には多くの恩恵があります。<br>
                                                ・<b>火山・地震災害</b>：津波（つなみ）や <b>液状化現象（えきじょうかげんしょう）</b> など、地球の活動は時に大きな災害をもたらします。
                                            </div>`,
                                            quizzes: [
                                                { question: "火山活動によってもたらされる、地下の熱を利用した発電方法は何かな？", display: "恵み", answer: "地熱発電", options: ["地熱発電", "火力発電", "水力発電"] },
                                                { question: "地震のゆれで地盤が水のようになり、建物が沈んでしまう現象を何という？", display: "災害", answer: "液状化現象", options: ["液状化現象", "津波", "褶曲"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 防災（ぼうさい）と 科学的な 態度",
                                            content: `<h4>備える 科学</h4>
                                            <div class="point-box">
                                                ・<b>防災</b>：噴火警戒レベルや <b>緊急地震速報</b> の仕組みを知り、自ら判断する力を養います。<br>
                                                ・<b>ハザードマップ</b>：災害の危険がある場所を予測した地図を活用し、日頃から「災害」に備えることが大切です。
                                            </div>`,
                                            quizzes: [
                                                { question: "地震が発生した直後に、強いゆれが来ることを知らせる速報を何という？", display: "防災", answer: "緊急地震速報", options: ["緊急地震速報", "津波警報", "噴火警戒レベル"] },
                                                { question: "地域の災害リスクや避難場所を示した、防災に欠かせない地図は？", display: "防災", answer: "ハザードマップ", options: ["ハザードマップ", "天気図", "地形図"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 環境（かんきょう）への 影響（えいきょう）と 保全（ほぜん）",
                                            content: `<h4>持続可能（じぞくかのう）な 社会</h4>
                                            <div class="point-box">
                                                ・<b>環境への影響</b>：外来生物や <b>地球温暖化</b> など、人間の活動が生態系のつり合いを崩す要因となります。<br>
                                                ・<b>保全と利用</b>：資源の有効活用や <b>脱炭素（だつたんそ）社会</b> への取り組みなど、科学技術を利用しながら自然を守る「持続可能な開発」の視点が重要です。
                                            </div>`,
                                            quizzes: [
                                                { question: "二酸化炭素の排出を抑え、環境を守るために目指している社会を何という？", display: "社会", answer: "脱炭素社会", options: ["脱炭素社会", "消費社会", "工業社会"] },
                                                { question: "人間の活動によって地球全体の温度が上がってしまう問題を何という？", display: "環境問題", answer: "地球温暖化", options: ["地球温暖化", "酸性雨", "オゾン層破壊"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "5. 気象（きしょう）要素（ようそ）と 前線（ぜんせん）・気団（きだん）",
                                    subUnits: [
                                        {
                                            title: "(ア) 気象要素（きしょうようそ）と 圧力（あつりょく）",
                                            content: `<h4>天気の 観測</h4>
                                            <div class="point-box">
                                                ・<b>気象要素</b>：気温、湿度、気圧、風向、風速などを正しく観測することが大切です。<br>
                                                ・<b>大気圧（気圧）</b>：空気の重さによって生じる圧力。あらゆる向きから働き、単位は <b>hPa（ヘクトパスカル）</b> です。
                                            </div>`,
                                            quizzes: [
                                                { question: "空気の重さによって生じ、あらゆる向きから働く圧力を何という？", display: "用語", answer: "大気圧（気圧）", options: ["大気圧（気圧）", "重力", "浮力"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 雲（くも）の 発生（はっせい）と 露点（ろてん）",
                                            content: `<h4>雲が できる しくみ</h4>
                                            <div class="point-box">
                                                ・空気が <b>上昇</b> して気圧が下がると、温度が下がります。<br>
                                                ・温度が <b>露点（ろてん）</b> に達すると、水蒸気が <b>凝結（ぎょうけつ）</b> して水滴となり、雲ができます。
                                            </div>`,
                                            quizzes: [
                                                { question: "水蒸気が冷えて水滴になり始めるときの温度を何という？", display: "用語", answer: "露点", options: ["露点", "沸点", "融点"] },
                                                { question: "雲ができるとき、空気の動きはどうなっているかな？", display: "動き", answer: "上昇している", options: ["上昇している", "下降している", "静止している"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 前線（ぜんせん）の 構造（こうぞう）と 天気",
                                            content: `<h4>ぶつかり合う 空気</h4>
                                            <div class="point-box">
                                                ・<b>寒冷前線</b>：寒気が暖気を急激に押し上げる。積乱雲が発生し、短時間の強い雨と通過後の気温低下が特徴です。<br>
                                                ・<b>温暖前線</b>：暖気が寒気に乗り上げる。層状の雲が広がり、長時間の穏やかな雨が特徴です。
                                            </div>`,
                                            quizzes: [
                                                { question: "通過したあとに気温が急激に下がることが多い前線はどっちかな？", display: "前線", answer: "寒冷前線", options: ["寒冷前線", "温暖前線"] }
                                            ]
                                        },
                                        {
                                            title: "(エ) 気団（きだん）と 日本の 天気",
                                            content: `<h4>季節を つくる 空気</h4>
                                            <div class="point-box">
                                                ・<b>シベリア気団</b>：冬。寒冷・乾燥。<br>
                                                ・<b>小笠原気団</b>：夏。高温・多湿。<br>
                                                ・<b>偏西風</b>：日本の上空を西から東へ吹く風。天気が西から東へ変わる原因です。<br>
                                                ・<b>海洋の影響</b>：冬、日本海を渡るシベリア気団が水分を得て、日本海側に多雪をもたらします。
                                            </div>`,
                                            quizzes: [
                                                { question: "日本の上空を常に西から東へ吹いている強い風を何という？", display: "用語", answer: "偏西風", options: ["偏西風", "貿易風", "季節風"] },
                                                { question: "日本の冬の天気に大きな影響をあたえる、冷たくて乾燥した気団は？", display: "気団", answer: "シベリア気団", options: ["シベリア気団", "小笠原気団", "長江気団"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "6. 天体（てんたい）と 地球（ちきゅう）の 運動（うんどう）",
                                    subUnits: [
                                        {
                                            title: "(ア) 日周運動（にっしゅううんどう）と 自転",
                                            content: `<h4>1日の 見かけの 動き</h4>
                                            <div class="point-box">
                                                ・<b>自転</b>：地球が北極と南極を結ぶ軸を中心に、1日に1回、西から東へ回転すること。<br>
                                                ・<b>日周運動</b>：自転により、太陽や星が東から西へ動くように見える「見かけの動き」です。
                                            </div>`,
                                            quizzes: [
                                                { question: "太陽や星が1日で1回転するように見えるのは、地球が何をしているから？", display: "動き", answer: "自転", options: ["自転", "公転", "静止"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 年周運動（ねんしゅううんどう）と 公転",
                                            content: `<h4>1年の 見かけの 動き</h4>
                                            <div class="point-box">
                                                ・<b>公転</b>：地球が太陽のまわりを1年で1周すること。<br>
                                                ・<b>年周運動</b>：公転により、同じ時刻に見える星座が1ヶ月に約30°ずつ西へずれていく動きです。
                                            </div>`,
                                            quizzes: [
                                                { question: "同じ時刻に見える星座が、1ヶ月に約30°ずつ西へずれる原因は何？", display: "原因", answer: "公転", options: ["公転", "自転", "自転の向きの変化"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 四季（しき）の 変化（へんか）と 地軸",
                                            content: `<h4>季節が 生まれる 理由</h4>
                                            <div class="point-box">
                                                ・<b>地軸の傾き</b>：地球の地軸が公転面に対して垂直から約 <b>23.4°</b> 傾いたまま公転しています。<br>
                                                ・このため、季節によって太陽の <b>南中高度</b> や昼夜の長さが変化し、四季が生じます。
                                            </div>`,
                                            quizzes: [
                                                { question: "地球の地軸は、公転面に対して垂直から何度傾いているかな？", display: "傾き", answer: "23.4°", options: ["23.4°", "45°", "0°"] },
                                                { question: "季節によって太陽の高さ（南中高度）が変わるのは、地軸がどうなっているから？", display: "理由", answer: "傾いたまま公転しているから", options: ["傾いたまま公転しているから", "太陽が動いているから", "地球が近づいているから"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "7. 太陽系（たいようけい）と 恒星（こうせい）",
                                    subUnits: [
                                        {
                                            title: "(ア) 恒星としての 太陽（たいよう）",
                                            content: `<h4>みずから 光る 天体</h4>
                                            <div class="point-box">
                                                ・<b>恒星</b>：太陽のようにみずから光を放つ巨大なガス球。<br>
                                                ・<b>黒点</b>：表面の温度が周りより低いため黒く見える部分。黒点の観察から太陽自身も <b>自転</b> していることがわかります。
                                            </div>`,
                                            quizzes: [
                                                { question: "太陽の表面に見える、温度が低いために黒く見える部分を何という？", display: "用語", answer: "黒点", options: ["黒点", "紅炎", "コロナ"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 惑星（わくせい）の 分類（ぶんるい）",
                                            content: `<h4>太陽系の 惑星</h4>
                                            <div class="point-box">
                                                ・<b>地球型惑星</b>：水星、金星、地球、火星。岩石質で小型、密度が高い。<br>
                                                ・<b>木星型惑星</b>：木星、土星、天王星、海王星。ガスや氷が主成分で大型、密度が低い。
                                            </div>`,
                                            quizzes: [
                                                { question: "木星や土星のように、主にガスや氷でできた大型の惑星を何という？", display: "分類", answer: "木星型惑星", options: ["木星型惑星", "地球型惑星", "銀河"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 金星（きんせい）の 見え方",
                                            content: `<h4>宵の明星・明けの明星</h4>
                                            <div class="point-box">
                                                ・金星は地球より内側を公転している（<b>内惑星</b>）ため、真夜中に見えることはありません。<br>
                                                ・月のように <b>満ち欠け</b> をし、地球との距離の変化によって「見かけの大きさ」が劇的に変わります。
                                            </div>`,
                                            quizzes: [
                                                { question: "金星が真夜中に見えることはあるかな？", display: "観測", answer: "ない", options: ["ない", "ある", "時々ある"] },
                                                { question: "地球との距離が近づいたときの金星の見かけの大きさはどうなる？", display: "変化", answer: "大きくなる", options: ["大きくなる", "小さくなる", "変わらない"] }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ] 
                }
            } 
        },
        social: { 
            name: "<ruby>社会<rt>社会</rt></ruby>", 
            grades: {
                geography: { 
                    name: "地理", 
                    categories: [
                        {
                            name: "地図と 日本",
                            units: [
                                {
                                    title: "1. 方位（ほうい）と 地図記号（ちずきごう）",
                                    subUnits: [
                                        {
                                            title: "(ア) 8方位（ほうい）",
                                            content: `<h4>場所を 表す 方角</h4>
                                            <div class="point-box">
                                                ・東、西、南、北の4方位に、その間（北東、南東、南西、北西）を加えた <b>8方位</b> を覚えましょう。
                                            </div>`,
                                            quizzes: [
                                                { question: "「北」と「東」の間の方位を何という？", display: "方位", answer: "北東", options: ["北東", "北西", "南東"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 主な 地図記号",
                                            content: `<h4>地図の マーク</h4>
                                            <div class="point-box">
                                                ・市役所：◎<br>
                                                ・学校：文<br>
                                                ・警察署：✕<br>
                                                ・消防署：Yの字のような形
                                            </div>`,
                                            quizzes: [
                                                { question: "地図記号「文」が表している施設は何かな？", display: "地図記号", answer: "学校", options: ["学校", "市役所", "警察署"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "2. 都道府県（とどうふけん）",
                                    subUnits: [
                                        {
                                            title: "(ア) 47都道府県（とどうふけん） 一覧",
                                            content: `<h4>日本の 都道府県と 県庁所在地</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                <b>【北海道・東北】</b> 北海道(札幌), 青森(青森), 岩手(盛岡), 宮城(仙台), 秋田(秋田), 山形(山形), 福島(福島)<br>
                                                <b>【関東】</b> 茨城(水戸), 栃木(宇都宮), 群馬(前橋), 埼玉(さいたま), 千葉(千葉), 東京(新宿), 神奈川(横浜)<br>
                                                <b>【中部】</b> 新潟(新潟), 富山(富山), 石川(金沢), 福井(福井), 山梨(甲府), 長野(長野), 岐阜(岐阜), 静岡(静岡), 愛知(名古屋)<br>
                                                <b>【近畿】</b> 三重(津), 滋賀(大津), 京都(京都), 大阪(大阪), 兵庫(神戸), 奈良(奈良), 和歌山(和歌山)<br>
                                                <b>【中国・四国】</b> 鳥取(鳥取), 島根(松江), 岡山(岡山), 広島(広島), 山口(山口), 徳島(徳島), 香川(高松), 愛媛(松山), 高知(高知)<br>
                                                <b>【九州・沖縄】</b> 福岡(福岡), 佐賀(佐賀), 長崎(長崎), 熊本(熊本), 大分(大分), 宮崎(宮崎), 鹿児島(鹿児島), 沖縄(那覇)
                                            </div>`,
                                            quizzes: [
                                                { question: "日本の都道府県は全部でいくつある？", display: "数", answer: "47", options: ["47", "43", "50"] },
                                                { question: "島根県の県庁所在地はどこかな？", display: "県庁所在地", answer: "松江市", options: ["松江市", "出雲市", "浜田市"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 特（とく）に 注意（ちゅうい）する 県庁所在地",
                                            content: `<h4>県名と 名前が ちがう 都市</h4>
                                            <div class="point-box">
                                                ・愛知県：<b>名古屋市</b><br>
                                                ・兵庫県：<b>神戸市</b><br>
                                                ・三重県：<b>津市</b><br>
                                                ・香川県：<b>高松市</b><br>
                                                ・愛媛県：<b>松山市</b><br>
                                                ・石川県：<b>金沢市</b>
                                            </div>`,
                                            quizzes: [
                                                { question: "愛知県の県庁所在地はどこかな？", display: "県庁所在地", answer: "名古屋市", options: ["名古屋市", "豊田市", "一宮市"] },
                                                { question: "三重県の県庁所在地はどこかな？", display: "県庁所在地", answer: "津市", options: ["津市", "四日市市", "伊勢市"] }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "世界の 国々",
                            units: [
                                {
                                    title: "1. 世界（せかい）の 姿（すがた）",
                                    subUnits: [
                                        {
                                            title: "(ア) 6大州（たいしゅう）",
                                            content: `<h4>世界を 分ける 6つの州</h4>
                                            <div class="point-box">
                                                ・<b>アジア州</b>：日本、中国、インドなど。<br>
                                                ・<b>ヨーロッパ州</b>：イギリス、フランス、ドイツなど。<br>
                                                ・<b>アフリカ州</b>：エジプト、ケニアなど。<br>
                                                ・<b>北アメリカ州</b>：アメリカ、カナダなど。<br>
                                                ・<b>南アメリカ州</b>：ブラジル、アルゼンチンなど。<br>
                                                ・<b>オセアニア州</b>：オーストラリア、ニュージーランドなど。
                                            </div>`,
                                            quizzes: [
                                                { question: "日本や中国が含まれる州の名前は何かな？", display: "州の名前", answer: "アジア州", options: ["アジア州", "ヨーロッパ州", "アフリカ州"] },
                                                { question: "イギリスやフランスが含まれる州の名前は何かな？", display: "州の名前", answer: "ヨーロッパ州", options: ["ヨーロッパ州", "アジア州", "北アメリカ州"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 3大洋（たいよう）と 大陸",
                                            content: `<h4>大きな 海と 大陸</h4>
                                            <div class="point-box">
                                                <b>【3大洋】</b> 太平洋、大西洋、インド洋<br>
                                                <b>【主な大陸】</b> ユーラシア大陸、アフリカ大陸、北アメリカ大陸、南アメリカ大陸、オーストラリア大陸、南極大陸
                                            </div>`,
                                            quizzes: [
                                                { question: "日本に面している、世界で最も大きな海の名前は？", display: "海洋名", answer: "太平洋", options: ["太平洋", "大西洋", "インド洋"] },
                                                { question: "世界で最も大きな大陸の名前は何かな？", display: "大陸名", answer: "ユーラシア大陸", options: ["ユーラシア大陸", "アフリカ大陸", "オーストラリア大陸"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "2. 世界の 気候（きこう）",
                                    subUnits: [
                                        {
                                            title: "(ア) 熱帯 (A) と 乾燥帯 (B)",
                                            content: `<h4>暑い地域と 雨の少ない地域</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                <b>【熱帯 (A)】</b> 一年中暑い。<br>
                                                ・<b>熱帯雨林気候 (Af)</b>：年中雨が多く、密林（ジャングル）が広がる。スコールが降る。<br>
                                                ・<b>サバナ気候 (Aw)</b>：雨季と乾季が分かれ、丈の長い草原が広がる。<br><br>
                                                <b>【乾燥帯 (B)】</b> 雨が極端に少ない。<br>
                                                ・<b>砂漠気候 (BW)</b>：雨がほとんど降らず、砂や岩の世界。<br>
                                                ・<b>ステップ気候 (BS)</b>：短い雨季があり、わずかに草原が広がる。
                                            </div>`,
                                            quizzes: [
                                                { question: "熱帯で午後から夕方にかけて降る、激しい雨を何という？", display: "用語", answer: "スコール", options: ["スコール", "モンスーン", "タイフーン"] },
                                                { question: "熱帯の中でも雨季と乾季がはっきり分かれ、草原が広がる気候は？", display: "気候名", answer: "サバナ気候", options: ["サバナ気候", "熱帯雨林気候", "ステップ気候"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 温帯 (C) と 亜寒帯・寒帯 (D, E)",
                                            content: `<h4>四季のある地域と 寒い地域</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                <b>【温帯 (C)】</b> 四季の変化がある。<br>
                                                ・<b>温暖湿潤気候 (Cfa)</b>：夏は高温多湿。日本（北海道以外）など。<br>
                                                ・<b>西岸海洋性気候 (Cfb)</b>：暖流の影響で冬も温かい。ヨーロッパなど。<br>
                                                ・<b>地中海性気候 (Cs)</b>：夏に乾燥。オリーブやぶどうの栽培が盛ん。<br><br>
                                                <b>【亜寒帯（冷帯） (D)】</b> 夏と冬の差が大きい。<b>タイガ</b>（針葉樹林）が広がる。<br><br>
                                                <b>【寒帯 (E)】</b> 樹木が育たない。<br>
                                                ・<b>ツンドラ気候 (ET)</b>：夏にわずかに苔が生える。<br>
                                                ・<b>氷雪気候 (EF)</b>：一年中氷と雪の世界。
                                            </div>`,
                                            quizzes: [
                                                { question: "夏に乾燥するため、オリーブやぶどうの栽培が盛んな気候は？", display: "気候名", answer: "地中海性気候", options: ["地中海性気候", "温暖湿潤気候", "西岸海洋性気候"] },
                                                { question: "亜寒帯（冷帯）に広がる広い針葉樹林のことを何という？", display: "用語", answer: "タイガ", options: ["タイガ", "ジャングル", "サバナ"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 高山気候 (H)",
                                            content: `<h4>標高による 特徴</h4>
                                            <div class="point-box">
                                                ・標高が高いため、同じ緯度の平地よりも気温が低い。<br>
                                                ・アンデス山脈の都市のように、一年中「常春」のような過ごしやすい気候になることもある。
                                            </div>`,
                                            quizzes: [
                                                { question: "赤道近くでも標高が高いために一年中涼しい気候を何という？", display: "気候名", answer: "高山気候", options: ["高山気候", "寒帯", "地中海性気候"] }
                                            ]
                                        },
                                        {
                                            title: "(エ) 雨温図（うおんず）の 見分け方",
                                            content: `<h4>グラフから 気候を 当てる コツ</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                <b>1. 気温の 折れ線グラフを 見る</b><br>
                                                ・一年中 20℃以上 → <b>熱帯</b><br>
                                                ・夏と冬の差が大きく、冬がマイナス → <b>冷帯</b><br>
                                                ・一年中 0℃以下 → <b>寒帯</b><br>
                                                ・山型なら北半球、谷型（7・8月が低い）なら <b>南半球</b><br><br>
                                                <b>2. 降水量の 棒グラフを 見る</b><br>
                                                ・全体的に極端に少ない → <b>乾燥帯</b><br>
                                                ・夏（気温が高い時期）に雨がガクンと減る → <b>地中海性気候</b>
                                            </div>`,
                                            quizzes: [
                                                { question: "雨温図で、気温のグラフが7・8月に低く「谷の形」をしていたら、どっちの半球？", display: "判別", answer: "南半球", options: ["南半球", "北半球", "東半球"] },
                                                { question: "気温が高く、降水量が一年中非常に少ない雨温図が表す気候帯は？", display: "判別", answer: "乾燥帯", options: ["乾燥帯", "熱帯", "温帯"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "3. 緯度（いど）と 経度（けいど）",
                                    subUnits: [
                                        {
                                            title: "(ア) 緯度と 経度",
                                            content: `<h4>地球の 座標（ざひょう）</h4>
                                            <div class="point-box">
                                                ・<b>赤道</b>：緯度0度の線。地球を北と南に分ける。<br>
                                                ・<b>本初子午線</b>：経度0度の線。イギリスのロンドンを通る。<br>
                                                ・<b>日付変更線</b>：経度180度付近の線。この線をまたぐと日付が変わる。
                                            </div>`,
                                            quizzes: [
                                                { question: "緯度0度の線を何という？", display: "線の名前", answer: "赤道", options: ["赤道", "本初子午線", "北回帰線"] },
                                                { question: "経度0度の線を何という？", display: "線の名前", answer: "本初子午線", options: ["本初子午線", "日付変更線", "赤道"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "4. 時差（じさ）の 計算",
                                    subUnits: [
                                        {
                                            title: "(ア) 時差の 求め方",
                                            content: `<h4>時差を 計算する 3ステップ</h4>
                                            <div class="point-box">
                                                <b>1. 経度の差を求める</b><br>
                                                ・同じ側（東経どうし）なら、大きい方から小さい方を <b>引く</b>。<br>
                                                ・反対側（東経と西経）なら、数字を <b>足す</b>。<br>
                                                <b>2. 15で割る</b>（360度÷24時間＝15度）<br>
                                                <b>3. 東にある方が時間は進んでいる</b>
                                            </div>`,
                                            quizzes: [
                                                { question: "東経135度の日本と、東経30度のエジプトの経度の差は何度？", display: "計算", answer: "105度", options: ["105度", "165度", "135度"] },
                                                { question: "経度の差が105度のとき、時差は何時間になる？", display: "時差", answer: "7時間", options: ["7時間", "8時間", "9時間"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "5. 領域（りょういき）と 排他的経済水域（EEZ）",
                                    subUnits: [
                                        {
                                            title: "(ア) 日本の 範囲（はんい）",
                                            content: `<h4>国が 支配する 範囲</h4>
                                            <div class="point-box">
                                                ・<b>領域</b>：領土、領海、領空を合わせたもの。<br>
                                                ・<b>排他的経済水域（EEZ）</b>：沿岸から <b>200海里</b>（約370km）までの水域。
                                            </div>`,
                                            quizzes: [
                                                { question: "沿岸から200海里までの、資源をとる権利がある水域を何という？", display: "水域の名前", answer: "排他的経済水域", options: ["排他的経済水域", "領海", "公海"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "6. 世界の 宗教（しゅうきょう）",
                                    subUnits: [
                                        {
                                            title: "(ア) 主な 宗教の 特徴",
                                            content: `<h4>世界中の 人々が 信じている 宗教</h4>
                                            <div class="point-box" style="font-size: 0.9em;">
                                                ・<b>キリスト教</b>：聖書、十字架。世界で最も多い。<br>
                                                ・<b>イスラム教</b>：コーラン。豚肉を食べない。１日５回のお祈り（メッカに向かって）。<br>
                                                ・<b>仏教</b>：東アジア〜東南アジア。日本でもなじみ深い。<br>
                                                ・<b>ヒンドゥー教</b>：主にインド。牛肉を食べない（牛を神聖視）。
                                            </div>`,
                                            quizzes: [
                                                { question: "牛を神聖な動物として大切にし、牛肉を食べない習慣がある宗教は？", display: "宗教名", answer: "ヒンドゥー教", options: ["ヒンドゥー教", "イスラム教", "仏教"] },
                                                { question: "豚肉を食べない習慣や、メッカへのお祈りがある宗教は？", display: "宗教名", answer: "イスラム教", options: ["イスラム教", "キリスト教", "ヒンドゥー教"] }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "世界の 諸地域（しょちいき）",
                            units: [
                                {
                                    title: "1. アジア州",
                                    subUnits: [
                                        {
                                            title: "(ア) アジアの 概況（がいきょう）",
                                            content: `<h4>季節風（モンスーン）と アジアNIES</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>気候</b>：東部や南部は季節風の影響で雨が多く、<b>稲作</b>が盛んです。<br>
                                                ・<b>経済</b>：韓国、台湾、香港、シンガポールなどは <b>アジアNIES</b> と呼ばれ、工業化が進みました。
                                            </div>`,
                                            quizzes: [
                                                { question: "アジアの気候に影響を与え、夏の湿った空気や冬の乾いた空気をもたらす風は？", display: "用語", answer: "季節風", options: ["季節風", "偏西風", "貿易風"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 東アジア（中国など）",
                                            content: `<h4>巨大な 人口と 経済の 発展</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>中国</b>：沿岸部に <b>経済特区</b>（シェンチェンなど）を設け、外国の資本を取り入れて「世界の工場」として発展しました。<br>
                                                ・<b>地名</b>：長江（ちょうこう）、黄河（こうが）、チベット高原。
                                            </div>`,
                                            quizzes: [
                                                { question: "中国が沿岸部に設置した、外国の企業を誘致するための特別な地域を何という？", display: "用語", answer: "経済特区", options: ["経済特区", "自由貿易地域", "工業団地"] }
                                            ]
                                        },
                                        {
                                            title: "(ウ) 東南アジア",
                                            content: `<h4>ASEANと 産業の 変化</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>組織</b>：東南アジア諸国連合（<b>ASEAN</b>）を結成し、経済的な協力を強めています。<br>
                                                ・<b>産業</b>：かつてはプランテーションによる天然ゴムなどが主でしたが、現在は機械工業も盛んです。
                                            </div>`,
                                            quizzes: [
                                                { question: "東南アジアの国々が結成している組織の略称は？", display: "略称", answer: "ASEAN", options: ["ASEAN", "EU", "APEC"] }
                                            ]
                                        },
                                        {
                                            title: "(エ) 南アジア（インドなど）",
                                            content: `<h4>インダス川と IT産業</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>自然</b>：<b>インダス川</b>（パキスタン）やガンジス川（インド）の流域で文明が栄えました。<br>
                                                ・<b>産業</b>：インドでは数学教育や英語力を生かし、バンガロールを中心に <b>IT産業</b> が急速に発展しています。
                                            </div>`,
                                            quizzes: [
                                                { question: "インドで近年、バンガロールを中心に急速に発展している産業は何？", display: "産業", answer: "IT産業", options: ["IT産業", "自動車工業", "繊維工業"] }
                                            ]
                                        },
                                        {
                                            title: "(オ) 西アジア（アラビア半島など）",
                                            content: `<h4>石油と イスラム教</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>資源</b>：<b>アラビア半島</b> 周辺（ペルシャ湾沿岸）には世界の <b>石油（原油）</b> の約半分が埋蔵されています。<br>
                                                ・<b>組織</b>：産油国は <b>OPEC</b>（石油輸出国機構）を結成し、原油の価格などに影響を与えています。
                                            </div>`,
                                            quizzes: [
                                                { question: "西アジアの産油国が、石油の利益を守るために結成している組織は？", display: "略称", answer: "OPEC", options: ["OPEC", "WTO", "UNICEF"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "2. ヨーロッパ州",
                                    subUnits: [
                                        {
                                            title: "(ア) ヨーロッパの 文化と 統合",
                                            content: `<h4>EUと 宗教の 分布</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>統合</b>：多くの国が <b>EU（欧州連合）</b> に加盟し、国境を越えた移動や共通通貨 <b>ユーロ</b> の使用が進んでいます。<br>
                                                ・<b>宗教</b>：北部は <b>プロテスタント</b>、南部は <b>カトリック</b>、東部は <b>正教</b> が主に信じられています。
                                            </div>`,
                                            quizzes: [
                                                { question: "ヨーロッパ南部（イタリアやフランスなど）で主に信じられているキリスト教の宗派は？", display: "宗派", answer: "カトリック", options: ["カトリック", "プロテスタント", "正教"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) ヨーロッパの 自然と 産業",
                                            content: `<h4>国際河川と 工業</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>自然</b>：複数の国を流れる <b>ライン川</b> や <b>ドナウ川</b> は <b>国際河川</b> と呼ばれ、運河で結ばれて水上輸送が盛んです。<br>
                                                ・<b>農業</b>：北西部の <b>混合農業</b>、南部の <b>地中海式農業</b>、酪農などが地域ごとに発達しています。
                                            </div>`,
                                            quizzes: [
                                                { question: "国境をまたいで流れ、自由に航行ができるライン川などの川を何という？", display: "用語", answer: "国際河川", options: ["国際河川", "外来河川", "内陸河川"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "3. アフリカ州",
                                    subUnits: [
                                        {
                                            title: "(ア) アフリカの 歴史と 経済",
                                            content: `<h4>植民地の名残と 現代のアフリカ</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>境界</b>：植民地支配時代の名残で、緯線や経線を利用した <b>直線的な国境</b> が多いのが特徴です。<br>
                                                ・<b>組織</b>：アフリカ諸国の協力のために <b>AU（アフリカ連合）</b> が結成されています。<br>
                                                ・<b>資源</b>：金、ダイヤモンドのほか、携帯電話などに使われる <b>レアメタル</b> が豊富です。
                                            </div>`,
                                            quizzes: [
                                                { question: "アフリカ諸国の団結と協力を目的とした組織の略称は？", display: "略称", answer: "AU", options: ["AU", "EU", "APEC"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) アフリカの 自然と 農業",
                                            content: `<h4>砂漠化と モノカルチャー経済</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>自然</b>：サハラ砂漠南縁の <b>サヘル</b> では、干ばつや過放牧による <b>砂漠化</b> が深刻です。<br>
                                                ・<b>農業</b>：特定の輸出用作物（カカオやコーヒー）を育てる <b>モノカルチャー経済</b> からの脱却を目指しています。
                                            </div>`,
                                            quizzes: [
                                                { question: "サハラ砂漠の南側に広がる、砂漠化が問題になっている地域を何という？", display: "地名", answer: "サヘル", options: ["サヘル", "セルバ", "パンパ"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "4. 北アメリカ州",
                                    subUnits: [
                                        {
                                            title: "(ア) 北アメリカの 農業と 産業",
                                            content: `<h4>適地適作と ハイテク産業</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>農業</b>：広大な土地で小麦やトウモロコシなどを大量に育てる <b>適地適作</b> が行われています。<br>
                                                ・<b>工業</b>：北緯37度より南の <b>サンベルト</b> と呼ばれる地域でハイテク産業が発達しました。サンフランシスコ近郊の <b>シリコンバレー</b> はIT産業の中心です。
                                            </div>`,
                                            quizzes: [
                                                { question: "アメリカ合衆国の南部で、1970年代から工業が急速に発展した地域を何という？", display: "用語", answer: "サンベルト", options: ["サンベルト", "スノーベルト", "コーンベルト"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 北アメリカの 文化と 社会",
                                            content: `<h4>移民の国と 先住民族</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>文化</b>：世界中から移民が集まる多民族社会です。スペイン語を話す <b>ヒスパニック</b> が増えています。<br>
                                                ・<b>先住民</b>：アメリカの <b>ネイティブアメリカン</b> や、北極圏の <b>イヌイット</b> などが暮らしています。
                                            </div>`,
                                            quizzes: [
                                                { question: "アメリカ合衆国で近年増えている、スペイン語を話す移民の人々を何という？", display: "用語", answer: "ヒスパニック", options: ["ヒスパニック", "ムラート", "メスチソ"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "5. 南アメリカ州",
                                    subUnits: [
                                        {
                                            title: "(ア) 南アメリカの 自然と 農業",
                                            content: `<h4>アマゾンの 熱帯雨林と 草原</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>自然</b>：アマゾン川流域の熱帯雨林 <b>セルバ</b> は「地球の肺」と呼ばれますが、<b>焼畑農業</b> や開発により減少しています。<br>
                                                ・<b>農業</b>：アルゼンチンからウルグアイにかけて、小麦栽培や牧畜が盛んな温帯草原 <b>パンパ</b> が広がっています。
                                            </div>`,
                                            quizzes: [
                                                { question: "アルゼンチンのラプラタ川流域に広がる、広大な温帯草原の名前は？", display: "地名", answer: "パンパ", options: ["パンパ", "サバナ", "ステップ"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) 南アメリカの 経済と 社会",
                                            content: `<h4>新興国の 発展と 課題</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>経済</b>：ブラジルは経済成長が著しく、<b>BRICS</b> の一角として世界的に影響力を強めています。<br>
                                                ・<b>文化</b>：かつての支配の影響で、ブラジルはポルトガル語、その他の多くの国はスペイン語を話します。
                                            </div>`,
                                            quizzes: [
                                                { question: "経済発展が著しい、ブラジル、ロシア、インド、中国、南アフリカの5か国の総称は？", display: "略称", answer: "BRICS", options: ["BRICS", "ASEAN", "OPEC"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "6. オセアニア州",
                                    subUnits: [
                                        {
                                            title: "(ア) オセアニアの 自然と 先住民",
                                            content: `<h4>島々の 分類と 独自の文化</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>分類</b>：太平洋の島々は、<b>ポリネシア</b>、<b>ミクロネシア</b>、<b>メラネシア</b> に分けられます。<br>
                                                ・<b>先住民</b>：オーストラリアの <b>アボリジニ</b>、ニュージーランドの <b>マオリ</b> が、独自の伝統を守りながら暮らしています。
                                            </div>`,
                                            quizzes: [
                                                { question: "ニュージーランドの先住民族の名前は何かな？", display: "民族名", answer: "マオリ", options: ["マオリ", "アボリジニ", "イヌイット"] }
                                            ]
                                        },
                                        {
                                            title: "(イ) オセアニアの 課題と つながり",
                                            content: `<h4>温暖化の 影響と アジアとの関係</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>環境</b>：地球温暖化による <b>海面上昇</b> で、ツバルなどの島国が水没の危機に直面しています。<br>
                                                ・<b>つながり</b>：かつてはイギリスとの関係が深かったですが、現在は日本や中国などアジア諸国との貿易が増えています。
                                            </div>`,
                                            quizzes: [
                                                { question: "地球温暖化によって引き起こされ、島国を脅かしている問題は何？", display: "問題", answer: "海面上昇", options: ["海面上昇", "砂漠化", "森林破壊"] }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                                                {
                                                    name: "日本の 諸地域（にほんの しょちいき）",
                                                    units: [
                                                        {
                                                            title: "1. 北海道地方",
                                                            subUnits: [
                                                                {
                                                                    title: "① 自然環境の 考察",
                                                                    content: `<h4>広大な大地と 冷帯の気候</h4>
                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                        ・<b>自然</b>：火山が多く、カルデラ湖（摩周湖など）や温泉が豊富です。<br>
                                                                        ・<b>気候</b>：日本で唯一の <b>冷帯（亜寒帯）</b> で、梅雨がなく、冬は流氷がオホーツク海沿岸に届きます。<br>
                                                                        ・<b>地形</b>：十勝平野や根釧台地など、大規模な農業ができる広い平地が広がっています。
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "冬、北海道のオホーツク海沿岸に流れ着く氷の塊を何という？", display: "用語", answer: "流氷", options: ["流氷", "氷山", "雹（ひょう）"] }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "② 人口や 都市・村落の 考察",
                                                                    content: `<h4>札幌市の 発展と 炭鉱都市の 変化</h4>
                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                        ・<b>都市</b>：道庁所在地の <b>札幌市</b> は、碁盤の目のような街路を持つ計画都市で、人口が約200万人集中しています。<br>
                                                                        ・<b>過疎化</b>：かつて炭鉱で栄えた夕張市などは、閉山とともに人口が激減し、過疎化が大きな課題となっています。
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "北海道の政治・経済の中心で、碁盤の目のような計画的な街並みを持つ都市は？", display: "都市名", answer: "札幌市", options: ["札幌市", "函館市", "旭川市"] }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "③ 産業の 考察",
                                                                    content: `<h4>大規模な 農業と 豊かな 漁場</h4>
                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                        ・<b>畑作</b>：<b>十勝平野</b>（とかちへいや）を中心に、ジャガイモやテンサイ、小麦などの大規模な機械化農業が行われています。<br>
                                                                        ・<b>酪農</b>：<b>根釧台地</b>（こんせんだいち）など、冷涼な気候をいかして乳牛を育てる酪農が盛んです。<br>
                                                                        ・<b>水産</b>：寒流と暖流が混じり合う豊かな漁場があり、スケトウダラやサケなどの漁獲量が多いです。
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "北海道東部の根釧台地で、冷涼な気候をいかして行われている産業は？", display: "産業名", answer: "酪農", options: ["酪農", "稲作", "林業"] },
                                                                        { question: "「日本の食料基地」とも呼ばれ、大規模な畑作が行われている平野は？", display: "平野名", answer: "十勝平野", options: ["十勝平野", "石狩平野", "越後平野"] }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "④ 交通や 通信の 考察",
                                                                    content: `<h4>青函トンネルと 北海道新幹線</h4>
                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                        ・<b>鉄道</b>：世界最長の海底トンネルである <b>青函トンネル</b> を通り、北海道新幹線が函館（新函館北斗）まで結んでいます。<br>
                                                                        ・<b>空港</b>：広大な土地を移動するため、新千歳空港を拠点とした航空網が重要な役割を担っています。
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "本州と北海道を海底で結ぶ、世界最長のトンネルの名前は？", display: "名称", answer: "青函トンネル", options: ["青函トンネル", "アクアライン", "関門トンネル"] }
                                                                    ]
                                                                },
                                                                {
                                                                    title: "⑤ その他の事象の 考察（課題など）",
                                                                    content: `<h4>アイヌの 文化と 北方領土</h4>
                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                        ・<b>先住民</b>：独自の文化を持つ <b>アイヌ</b> の人々が暮らしており、伝統を守り伝える取り組みが進んでいます。<br>
                                                                        ・<b>領土</b>：北海道の北東にある <b>北方領土</b>（歯舞、色丹、国後、択捉）は、日本固有の領土ですが、現在もロシアに占拠されています。
                                                                    </div>`,
                                                                    quizzes: [
                                                                        { question: "北海道に古くから住み、独自の文化を築いてきた先住民族は？", display: "民族名", answer: "アイヌ", options: ["アイヌ", "アボリジニ", "マオリ"] },
                                                                        { question: "北方領土の4つの島は、歯舞群島、色丹島、国後島と、もう一つはどこ？", display: "島名", answer: "択捉島", options: ["択捉島", "利尻島", "奥尻島"] }
                                                                    ]
                                                                }
                                                            ]
                                                                                        },
                                                                                        {
                                                                                            title: "2. 東北地方",
                                                                                            subUnits: [
                                                                                                {
                                                                                                    title: "① 自然環境の 考察",
                                                                                                    content: `<h4>リアス海岸と 冷害への 備え</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>自然</b>：三陸海岸の南部には複雑な <b>リアス海岸</b> が広がり、良い漁場になっています。<br>
                                                                                                        ・<b>気候</b>：夏にオホーツク海高気圧から吹く冷たく湿った風 <b>やませ</b> により、冷害が起こることがあります。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "東北地方の太平洋側に夏に吹く、冷害の原因となる冷たく湿った風は？", display: "用語", answer: "やませ", options: ["やませ", "季節風", "からっ風"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "② 人口や 都市・村落の 考察",
                                                                                                    content: `<h4>地方中枢都市 仙台と 過疎化</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>都市</b>：<b>仙台市</b> は地方中枢都市として、東北全体の政治・経済の拠点となっています。<br>
                                                                                                        ・<b>過疎化</b>：山間部を中心に人口減少が進み、伝統行事の維持などが課題になっています。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "東北地方唯一の政令指定都市で、地方中枢都市としての役割を持つ都市は？", display: "都市名", answer: "仙台市", options: ["仙台市", "盛岡市", "福島市"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "③ 産業の 考察",
                                                                                                    content: `<h4>米どころと 果樹栽培</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>農業</b>：庄内平野などでの <b>稲作</b> が盛んです。また、青森のリンゴや山形のサクランボなど果樹栽培も有名です。<br>
                                                                                                        ・<b>伝統工芸</b>：津軽塗や南部鉄器など、古くからの伝統的工芸品が大切にされています。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "山形県で生産量が日本一の、初夏を代表する果物は何かな？", display: "果物", answer: "サクランボ", options: ["サクランボ", "リンゴ", "モモ"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "④ 交通や 通信の 考察",
                                                                                                    content: `<h4>新幹線と 高速道路の つながり</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>交通</b>：東北新幹線や秋田・山形新幹線、東北自動車道などが整備され、首都圏とのつながりが深まっています。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "東京から青森（新青森）までを結ぶ、東北のメインとなる新幹線は？", display: "名称", answer: "東北新幹線", options: ["東北新幹線", "上越新幹線", "北陸新幹線"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "⑤ その他の事象の 考察（課題など）",
                                                                                                    content: `<h4>震災復興と 伝統祭り</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>復興</b>：2011年の東日本大震災からの復興が進められており、防災意識の高まりが見られます。<br>
                                                                                                        ・<b>文化</b>：青森ねぶた祭や秋田竿燈まつりなど、夏の大祭りが地域を活気づけています。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "巨大な灯籠（とうろう）を引いて街を練り歩く、青森県の有名な夏祭りは？", display: "祭り名", answer: "ねぶた祭", options: ["ねぶた祭", "竿燈まつり", "七夕まつり"] }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            title: "3. 関東地方",
                                                                                            subUnits: [
                                                                                                {
                                                                                                    title: "① 自然環境の 考察",
                                                                                                    content: `<h4>日本最大の 平野と 土地利用</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>地形</b>：日本最大の <b>関東平野</b> が広がり、その大部分は火山灰が降り積もった <b>関東ローム</b> に覆われています。<br>
                                                                                                        ・<b>気候</b>：冬には乾燥した強い風である <b>からっ風</b> が吹くのが特徴です。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "関東地方に広がる日本最大の平野の名前は何かな？", display: "平野名", answer: "関東平野", options: ["関東平野", "石狩平野", "濃尾平野"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "② 人口や 都市・村落の 考察",
                                                                                                    content: `<h4>東京一極集中と 都市の問題</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>人口</b>：東京周辺には日本の人口の約3分の1が集中する <b>東京一極集中</b> が進んでいます。<br>
                                                                                                        ・<b>都市問題</b>：都心での <b>ヒートアイランド現象</b> や、郊外のニュータウンの高齢化が課題です。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "都市部の気温が周辺よりも高くなる現象を何という？", display: "用語", answer: "ヒートアイランド現象", options: ["ヒートアイランド現象", "温暖化現象", "フェーン現象"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "③ 産業の 考察",
                                                                                                    content: `<h4>巨大な 消費地を 支える 産業</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>農業</b>：大消費地の近くで行う <b>近郊農業</b>（きんきょうのうぎょう）が盛んで、キャベツやレタスなどの出荷が多いです。<br>
                                                                                                        ・<b>工業</b>：東京湾沿いには <b>京浜工業地帯</b> や京葉工業地域が広がり、日本最大の工業集積地となっています。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "都市（消費地）の近くで新鮮な野菜などを栽培する農業の形を何という？", display: "用語", answer: "近郊農業", options: ["近郊農業", "促成栽培", "抑制栽培"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "④ 交通や 通信の 考察",
                                                                                                    content: `<h4>広大な 交通網と 国際空港</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>交通</b>：JRや地下鉄の稠密なネットワークのほか、成田国際空港と羽田空港が世界の玄関口となっています。<br>
                                                                                                        ・<b>通信</b>：情報発信の中心地として、多くのメディアやIT企業が集まっています。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "千葉県にある、日本最大の国際空港の名前は？", display: "空港名", answer: "成田国際空港", options: ["成田国際空港", "羽田空港", "関西国際空港"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "⑤ その他の事象の 考察（課題など）",
                                                                                                    content: `<h4>持続可能な 都市づくり</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>再開発</b>：都心部では古い建物の再開発が進み、防災機能の強化や緑地の創出が行われています。<br>
                                                                                                        ・<b>多文化共生</b>：多くの外国人が暮らしており、多様な文化が共生する社会づくりが進んでいます。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "異なる文化を持つ人々が、お互いの違いを認め合い共に生きることを何という？", display: "用語", answer: "多文化共生", options: ["多文化共生", "国際化", "地域化"] }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            title: "4. 中部地方",
                                                                                            subUnits: [
                                                                                                {
                                                                                                    title: "① 自然環境の 考察",
                                                                                                    content: `<h4>日本アルプスと 多様な気候</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>地形</b>：「日本の屋根」と呼ばれる3000m級の山々が連なる <b>日本アルプス</b> が中央にそびえます。<br>
                                                                                                        ・<b>気候</b>：日本海側（北陸）は冬に雪が多く、太平洋側（東海）は夏に雨が多いという特徴があります。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "飛騨、木曽、赤石の3つの山脈をまとめて何と呼ぶ？", display: "名称", answer: "日本アルプス", options: ["日本アルプス", "アンデス山脈", "奥羽山脈"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "② 人口や 都市・村落の 考察",
                                                                                                    content: `<h4>名古屋市と 工業都市の つながり</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>都市</b>：<b>名古屋市</b> は地方中枢都市として、自動車工業などの産業を支える中心地です。<br>
                                                                                                        ・<b>村落</b>：北陸地方などでは、冬の積雪に対応した伝統的な家屋（合掌造りなど）が見られます。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "中部地方の政治・経済の中心で、中京工業地帯の中核となる都市は？", display: "都市名", answer: "名古屋市", options: ["名古屋市", "静岡市", "新潟市"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "③ 産業の 考察",
                                                                                                    content: `<h4>ものづくりと 高冷地農業</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>工業</b>：愛知県周辺には <b>中京工業地帯</b> が広がり、特に <b>自動車工業</b> が盛んです（豊田市など）。<br>
                                                                                                        ・<b>農業</b>：長野県などの標高が高い場所では、夏でも涼しい気候をいかした <b>抑制栽培</b>（レタスなど）が行われています。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "中京工業地帯で最も盛んな、日本を代表する工業の種類は？", display: "工業", answer: "自動車工業", options: ["自動車工業", "繊維工業", "石油化学工業"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "④ 交通や 通信の 考察",
                                                                                                    content: `<h4>日本の 中心軸を 通る 交通</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>幹線</b>：東海道新幹線や東名・名神高速道路が通り、関東と近畿を結ぶ大動脈となっています。<br>
                                                                                                        ・<b>リニア</b>：将来、中央新幹線（リニア）の開通により、移動時間が大幅に短縮される予定です。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "将来、東京・名古屋・大阪を高速で結ぶ予定の新しい新幹線は？", display: "名称", answer: "中央新幹線", options: ["中央新幹線（リニア）", "北陸新幹線", "九州新幹線"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "⑤ その他の事象の 考察（課題など）",
                                                                                                    content: `<h4>歴史的景観の 保存</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>世界遺産</b>：<b>白川郷</b> の合掌造り集落など、伝統的な景観を保存し、観光にいかす取り組みが盛んです。<br>
                                                                                                        ・<b>課題</b>：北陸地方などでの雪害対策や、中山間地域の維持が重要になっています。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "岐阜県にある、合掌造りの民家が並ぶ世界文化遺産の場所は？", display: "地名", answer: "白川郷", options: ["白川郷", "日光", "平泉"] }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            title: "5. 近畿地方",
                                                                                            subUnits: [
                                                                                                {
                                                                                                    title: "① 自然環境の 考察",
                                                                                                    content: `<h4>琵琶湖と 水の つながり</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>水資源</b>：日本最大の湖である <b>琵琶湖</b> は、京阪神地域の貴重な水源となっています。<br>
                                                                                                        ・<b>地形</b>：紀伊半島には山々が迫り、雨が多い地域として知られています。大阪平野は都市化が進んでいます。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "滋賀県にある、日本で最も面積が広い湖の名前は？", display: "湖名", answer: "琵琶湖", options: ["琵琶湖", "霞ヶ浦", "中海"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "② 人口や 都市・村落の 考察",
                                                                                                    content: `<h4>京阪神 大都市圏の 形成</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>都市</b>：大阪、京都、神戸を中心に <b>京阪神大都市圏</b> が形成されています。<br>
                                                                                                        ・<b>古都</b>：京都や奈良は、歴史的な街並みを守るための厳しい景観条例があります。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "大阪・京都・神戸をまとめた大都市圏の呼び方は？", display: "名称", answer: "京阪神", options: ["京阪神", "中京", "北九州"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "③ 産業の 考察",
                                                                                                    content: `<h4>伝統と 先端の 融合</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>工業</b>：大阪湾沿いには <b>阪神工業地帯</b> が広がり、中小企業の高い技術力が支えています。<br>
                                                                                                        ・<b>文化産業</b>：伝統的な工芸品（京友禅、西陣織など）や、観光産業が非常に盛んです。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "大阪と神戸を中心に広がる工業地帯の名前は何かな？", display: "名称", answer: "阪神工業地帯", options: ["阪神工業地帯", "京浜工業地帯", "中京工業地帯"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "④ 交通や 通信の 考察",
                                                                                                    content: `<h4>関西の 玄関口と 鉄道網</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>空港</b>：完全人工島にある <b>関西国際空港</b> が、24時間運用の国際拠点となっています。<br>
                                                                                                        ・<b>鉄道</b>：私鉄各線が発達しており、都市間の移動が非常に活発です。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "大阪湾の人工島に建設された、近畿地方の国際的な玄関口は？", display: "空港名", answer: "関西国際空港", options: ["関西国際空港", "伊丹空港", "神戸空港"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "⑤ その他の事象の 考察（課題など）",
                                                                                                    content: `<h4>歴史遺産の 保存と 活用</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>世界遺産</b>：京都や奈良の社寺、高野山など多くの世界遺産があり、オーバーツーリズム（観光公害）への対策が課題です。<br>
                                                                                                        ・<b>防災</b>：阪神・淡路大震災の経験をいかした都市づくりが進んでいます。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "1995年に発生し、近畿地方に大きな被害をもたらした震災は？", display: "名称", answer: "阪神・淡路大震災", options: ["阪神・淡路大震災", "東日本大震災", "関東大震災"] }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            title: "6. 中国・四国地方",
                                                                                            subUnits: [
                                                                                                {
                                                                                                    title: "① 自然環境の 考察",
                                                                                                    content: `<h4>瀬戸内の 穏やかな 海</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>地形</b>：中国山地と四国山地に挟まれた <b>瀬戸内</b> は、雨が少なく穏やかな気候です。<br>
                                                                                                        ・<b>海岸</b>：山陰地方（日本海側）は冬に雪が多く、四国太平洋側は夏に台風の影響を受けやすいです。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "中国山地と四国山地の間に広がる、内海とその周辺地域を何と呼ぶ？", display: "地名", answer: "瀬戸内", options: ["瀬戸内", "山陰", "山陽"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "② 人口や 都市・村落の 考察",
                                                                                                    content: `<h4>広島市と 都市の 再編</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>都市</b>：<b>広島市</b> は中国・四国地方唯一の地方中枢都市として、平和記念都市としての役割も担っています。<br>
                                                                                                        ・<b>過疎化</b>：中国山地や四国の島々では過疎化が深刻で、集落の維持が課題となっています。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "中国・四国地方の政治・経済の中心で、国際平和文化都市でもある都市は？", display: "都市名", answer: "広島市", options: ["広島市", "岡山市", "松山市"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "③ 産業の 考察",
                                                                                                    content: `<h4>瀬戸内の 工業と 果樹栽培</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>工業</b>：瀬戸内海沿岸には <b>瀬戸内工業地域</b> が広がり、石油化学や製鉄が盛んです。<br>
                                                                                                        ・<b>農業</b>：温暖な気候をいかし、愛媛県のミカンなどの果樹栽培が非常に有名です。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "愛媛県で生産が非常に盛んな、冬を代表する果物は何かな？", display: "果物", answer: "ミカン", options: ["ミカン", "リンゴ", "メロン"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "④ 交通や 通信の 考察",
                                                                                                    content: `<h4>本州と 四国を 結ぶ 橋</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>架橋</b>：<b>本州四国連絡橋</b>（瀬戸大橋など3ルート）により、本州との移動が格段に便利になりました。<br>
                                                                                                        ・<b>ストロー現象</b>：交通が便利になったことで、人口や買い物がより大きな都市（岡山や広島など）に吸い寄せられる現象も起きています。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "交通の便が良くなることで、地方の人口が中心都市に吸い寄せられる現象を何という？", display: "用語", answer: "ストロー現象", options: ["ストロー現象", "ヒートアイランド現象", "ドーナツ化現象"] }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    title: "⑤ その他の事象の 考察（課題など）",
                                                                                                    content: `<h4>瀬戸内海の 環境保全</h4>
                                                                                                    <div class="point-box" style="font-size: 0.85em;">
                                                                                                        ・<b>環境</b>：かつて深刻だった瀬戸内海の汚れを改善するため、厳しい水質規制が行われています。<br>
                                                                                                        ・<b>地域協力</b>：瀬戸内海を囲む県が協力して、観光や環境保全に取り組んでいます。
                                                                                                    </div>`,
                                                                                                    quizzes: [
                                                                                                        { question: "かつて瀬戸内海で発生した、海が赤く染まる環境汚染を何という？", display: "用語", answer: "赤潮", options: ["赤潮", "黒潮", "青潮"] }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            title: "7. 九州地方",                                    subUnits: [
                                        {
                                            title: "① 自然環境の 考察",
                                            content: `<h4>火山と ともに 生きる</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>火山</b>：阿蘇山のカルデラや桜島など、火山が多いのが特徴です。温泉などの恵みの一方、火山灰の被害もあります。<br>
                                                ・<b>地形</b>：南九州には <b>シラス台地</b> が広がり、水持ちが悪いため、畑作や畜産が盛んです。
                                            </div>`,
                                            quizzes: [
                                                { question: "南九州に広がる、火山灰が降り積もってできた台地を何という？", display: "用語", answer: "シラス台地", options: ["シラス台地", "関東平野", "十勝平野"] }
                                            ]
                                        },
                                        {
                                            title: "② 人口や 都市・村落の 考察",
                                            content: `<h4>福岡市の 発展と 地方中枢都市</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>地方中枢都市</b>：<b>福岡市</b> は九州の政治・経済の中心として人口が増え続けています。<br>
                                                ・<b>北九州市</b>：かつて官営八幡製鉄所を中心に栄えた工業都市です。
                                            </div>`,
                                            quizzes: [
                                                { question: "九州の政治・経済の中心で、人口が急増している都市はどこ？", display: "都市名", answer: "福岡市", options: ["福岡市", "北九州市", "熊本市"] }
                                            ]
                                        },
                                        {
                                            title: "③ 産業の 考察",
                                            content: `<h4>シリコンアイランドと 施設園芸</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>工業</b>：空港周辺に半導体（IC）工場が集まっているため <b>シリコンアイランド</b> と呼ばれます。<br>
                                                ・<b>農業</b>：宮崎平野などでのビニールハウスを使った <b>促成栽培</b>（そくせいさいばい）が有名です。
                                            </div>`,
                                            quizzes: [
                                                { question: "九州にIC（半導体）工場が多く集まっていることからついた呼び名は？", display: "用語", answer: "シリコンアイランド", options: ["シリコンアイランド", "サンベルト", "京浜工業地帯"] }
                                            ]
                                        },
                                        {
                                            title: "④ 交通や 通信の 考察",
                                            content: `<h4>アジアへの 玄関口</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>交通</b>：九州新幹線の全線開通により、福岡・熊本・鹿児島の移動が便利になりました。<br>
                                                ・<b>つながり</b>：地理的に近いため、中国や韓国などアジア諸国との交流が盛んです。
                                            </div>`,
                                            quizzes: [
                                                { question: "2011年に全線開通し、博多から鹿児島中央までを結ぶ新幹線は？", display: "名称", answer: "九州新幹線", options: ["九州新幹線", "山陽新幹線", "西九州新幹線"] }
                                            ]
                                        },
                                        {
                                            title: "⑤ その他の事象の 考察（課題など）",
                                            content: `<h4>環境保全と 教訓</h4>
                                            <div class="point-box" style="font-size: 0.85em;">
                                                ・<b>公害の教訓</b>：水俣病の教訓を生かし、水俣市は環境に配慮した「環境首都」を目指す取り組みを行っています。<br>
                                                ・<b>エネルギー</b>：地熱発電や太陽光発電など、自然エネルギーの活用が進んでいます。
                                            </div>`,
                                            quizzes: [
                                                { question: "四大公害病の一つである水俣病を教訓に、環境保全に力を入れている都市は？", display: "都市名", answer: "水俣市", options: ["水俣市", "北九州市", "延岡市"] }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ] 
                },
                history: { name: "歴史", categories: [] },
                civics: { 
                    name: "公民", 
                    categories: [
                        {
                            name: "経済と 生活",
                            units: [
                                {
                                    title: "1. 商品（しょうひん）の 販売（はんばい）",
                                    subUnits: [
                                        {
                                            title: "(ア) 物が 売れる しくみ",
                                            content: `<h4>売り買いの 流れ</h4>
                                            <div class="point-box">
                                                ・商品は、生産者から卸売業者、小売店（スーパーやコンビニ）を通って、消費者のもとに届きます。
                                            </div>`,
                                            quizzes: [
                                                { question: "私たちがふだん買い物をしているスーパーなどのことを何という？", display: "用語", answer: "小売店", options: ["小売店", "卸売業者", "生産者"] }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "公共（こうきょう）サービス",
                            units: [
                                {
                                    title: "1. 水（みず）の 流れ（水道）",
                                    subUnits: [
                                        {
                                            title: "(ア) 水が 届くまで",
                                            content: `<h4>水道の しくみ</h4>
                                            <div class="point-box">
                                                ・川やダムの水は、<b>浄水場（じょうすいじょう）</b>できれいにされ、水道管を通って家庭に届きます。
                                            </div>`,
                                            quizzes: [
                                                { question: "川などの水をきれいに飲み水に変える施設を何という？", display: "施設", answer: "浄水場", options: ["浄水場", "下水処理場", "発電所"] }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "産業（さんぎょう）と 情報（じょうほう）",
                            units: [
                                {
                                    title: "1. 工業（こうぎょう）の 種類（しゅるい）",
                                    subUnits: [
                                        {
                                            title: "(ア) 重化学工業と 軽工業",
                                            content: `<h4>ものづくりの 分類</h4>
                                            <div class="point-box">
                                                ・<b>重化学工業</b>：鉄鋼、機械、化学工業など、重いものや化学製品をつくる産業。<br>
                                                ・<b>軽工業</b>：食料品、繊維（せんい）など、比較的軽いものをつくる産業。
                                            </div>`,
                                            quizzes: [
                                                { question: "鉄鋼や自動車をつくる工業は、重化学工業・軽工業のどっちかな？", display: "工業の分類", answer: "重化学工業", options: ["重化学工業", "軽工業"] }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "2. メディアと 情報（じょうほう）",
                                    subUnits: [
                                        {
                                            title: "(ア) マスメディアの 役割",
                                            content: `<h4>情報を 伝える</h4>
                                            <div class="point-box">
                                                ・テレビ、新聞、インターネットなどは <b>マスメディア</b> と呼ばれ、多くの人に情報を伝えます。<br>
                                                ・情報を正しく見極める力（<b>情報リテラシー</b>）を身につけることが大切です。
                                            </div>`,
                                            quizzes: [
                                                { question: "情報を正しく判断し、活用する能力のことを何という？", display: "用語", answer: "情報リテラシー", options: ["情報リテラシー", "メディアミックス", "プログラミング"] }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ] 
                }
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
        if (!studyData[currentSubject]) return;
        const subjectName = studyData[currentSubject].name;
        updateBreadcrumb([
            { label: 'ホーム', action: showHome },
            { label: subjectName }
        ]);

        const gradeGrid = document.querySelector('.grade-grid');
        if (gradeGrid) {
            gradeGrid.innerHTML = '';
            // 教科ごとの学年データを動的に生成
            Object.keys(studyData[currentSubject].grades).forEach(gradeKey => {
                const gradeData = studyData[currentSubject].grades[gradeKey];
                const div = document.createElement('div');
                div.className = 'grade-card';
                div.innerHTML = gradeData.name;
                div.onclick = () => {
                    currentGrade = gradeKey;
                    showCategories();
                };
                
                // 「重要まとめ」などの特殊なボタンには色をつける
                if (gradeKey === 'summary') {
                    div.style.background = 'linear-gradient(135deg, #f1c40f, #f39c12)';
                    div.style.color = 'white';
                    div.style.fontWeight = 'bold';
                }
                gradeGrid.appendChild(div);
            });
        }

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