// 学習教材のデータ定義 (階層化: 学年 > 領域 > 単元 > 項目)
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
                                    { 
                                        title: "(1) <ruby>比<rt>くら</rt></ruby>べてみよう", 
                                        content: `
                                            <h4>どちらが おおいかな？</h4>
                                            <div class="compare-box">
                                                <div class="row">🌳 🌳 🌳 🌳 🌳</div>
                                                <div class="row">🚗 🚗 🚗 🚗 🚗 🚗</div>
                                            </div>
                                            <p>木（き）と 車（くるま）を 1つずつ 線（せん）で つないでみましょう。</p>
                                            <div class='point-box'>車が 1だい あまりますね。これで「車のほうが 1つ 多い」ことが わかります。</div>
                                        ` 
                                    },
                                    { 
                                        title: "(2) <ruby>順番<rt>じゅんばん</rt></ruby>を<ruby>数<rt>かぞ</rt></ruby>えてみよう", 
                                        content: `
                                            <h4>1から9まで かぞえよう</h4>
                                            <div class="number-line-big">1 2 3 4 5 6 7 8 9</div>
                                            <p>さいしょは「1」で、1けたの さいごは「9」です。</p>
                                            <div class='point-box'>ものが ひとつも ないときは、すうじで <b>「0（れい・ぜろ）」</b> と 書きます。</div>
                                        ` 
                                    },
                                    { 
                                        title: "(3) どっちが<ruby>大<rt>おお</rt></ruby>きい？", 
                                        content: `
                                            <h4>すうじを くらべよう</h4>
                                            <p>「3」と「5」では、どちらが 大きいかな？</p>
                                            <div class="compare-visual">
                                                <div>3：🍎 🍎 🍎</div>
                                                <div>5：🍎 🍎 🍎 🍎 🍎</div>
                                            </div>
                                            <div class='point-box'>ならべてみると、5のほうが 多い（大きい）ことが わかりますね。</div>
                                        ` 
                                    },
                                    { 
                                        title: "(4) 10までの <ruby>数<rt>かず</rt></ruby>", 
                                        content: `
                                            <h4>10は 特別な数</h4>
                                            <p>9の つぎは <b>「10（じゅう）」</b> です。ゆびを 全部（ぜんぶ）つかうと 10になりますね。</p>
                                            <div class="ten-frame">🖐️ + 🖐️ = 🔟</div>
                                            <div class='point-box'>10を つくる 組み合わせ（1と9、2と8など）を おぼえると、計算が とても とくいになるよ！</div>
                                        ` 
                                    }
                                ]
                            },
                            { 
                                title: "2. <ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>", 
                                subUnits: [
                                    { 
                                        title: "(1) 1けたの たしざん", 
                                        content: `
                                            <h4>1から9までの たしざん</h4>
                                            <p>まずは 基本（きほん）の 計算を おぼえよう。</p>
                                            <div class="calc-table">
                                                1+1=2, 2+2=4, 3+3=6...<br>
                                                5+5=10（ちょうど 10だね！）
                                            </div>
                                            <div class='point-box'>あわせると いくつに なるか、ゆびを つかって かぞえてみても いいよ。</div>
                                        `
                                    },
                                    { 
                                        title: "(2) 「0」を たそう", 
                                        content: `
                                            <h4>0が 入った たしざん</h4>
                                            <p>「0」は なにも ない という ことだね。</p>
                                            <div class="calc-demo">
                                                3 ＋ 0 ＝ 3<br>
                                                0 ＋ 5 ＝ 5<br>
                                                0 ＋ 0 ＝ 0
                                            </div>
                                            <div class='point-box'>0を たしても、数は かわりません。</div>
                                        `
                                    },
                                    { 
                                        title: "(3) 10を こえる 計算", 
                                        content: `
                                            <h4>「さくらんぼ」で 10を 作ろう</h4>
                                            <p>8 ＋ 3 ＝ ？</p>
                                            <div class="cherry-calc">
                                                <p>① 8は あと「2」で 10に なる。</p>
                                                <p>② 3を 「2」と 「1」に わける（🍒）。</p>
                                                <p>③ 8 ＋ 2 ＝ 10。 のこりの 1を あわせて <b>「11」</b></p>
                                            </div>
                                            <div class='point-box'>10の まとまりを 作るのが コツだよ。</div>
                                        `
                                    },
                                    { 
                                        title: "(4) 2けたの 計算", 
                                        content: `
                                            <h4>10の まとまりで かんがえよう</h4>
                                            <div class="calc-demo">
                                                10 ＋ 3 ＝ 13<br>
                                                20 ＋ 30 ＝ <b>50</b><br>
                                                90 ＋ 10 ＝ <b>100</b>
                                            </div>
                                            <div class='point-box'>10の まとまりが いくつ あるか かんがえてみよう。</div>
                                        `
                                    },
                                    { 
                                        title: "(5) 「100」に なる 計算", 
                                        content: `
                                            <h4>ぴったり 100に しよう</h4>
                                            <div class="calc-demo">
                                                90 ＋ 10 ＝ 100<br>
                                                50 ＋ 50 ＝ 100<br>
                                                99 ＋ 1 ＝ 100
                                            </div>
                                            <div class='point-box'>10が 10こ あつまると <b>「100（ひゃく）」</b> に なるよ。</div>
                                        `
                                    },
                                    { 
                                        title: "(6) じゅんばんを かえても おなじ？", 
                                        content: `
                                            <h4>いれかえても こたえは おなじ！</h4>
                                            <div class="calc-demo">
                                                3 ＋ 5 ＝ 8<br>
                                                5 ＋ 3 ＝ 8
                                            </div>
                                            <p>たしざんは、まえと あとの 数を いれかえても、あわせた 数は かわりません。</p>
                                            <div class='point-box'>これを おぼえておくと、けいさんが もっと らくに なるよ！</div>
                                        `
                                    },
                                    { 
                                        title: "(7) 100より <ruby>大<rt>おお</rt></ruby>きい <ruby>数<rt>かず</rt></ruby>", 
                                        content: `
                                            <h4>100の つぎは なにかな？</h4>
                                            <p>100より <ruby>一<rt>ひと</rt></ruby>つ <ruby>大<rt>おお</rt></ruby>きい <ruby>数<rt>かず</rt></ruby>は、<b>「101（ひゃくいち）」</b> と <ruby>書<rt>か</rt></ruby>きます。</p>
                                            <div class="calc-demo">
                                                100 ＋ 1 ＝ 101<br>
                                                100 ＋ 10 ＝ 110<br>
                                                100 ＋ 20 ＝ 120
                                            </div>
                                            <p>「1001」と <ruby>書<rt>か</rt></ruby>かないように <ruby>気<rt>き</rt></ruby>をつけてね！</p>
                                            <div class="calc-table">
                                                100... 101... 102... 110... 120
                                            </div>
                                            <div class='point-box'>100の つぎの <ruby>数<rt>かず</rt></ruby>も、じゅんばんに <ruby>言<rt>い</rt></ruby>えるように なろう。</div>
                                        `
                                    },
                                    { 
                                        title: "(8) 3つの <ruby>数<rt>かず</rt></ruby>の たしざん", 
                                        content: `
                                            <h4>どこから たしても おなじ！</h4>
                                            <div class="calc-demo">
                                                2 ＋ 3 ＋ 4 ＝ 9
                                            </div>
                                            <p>たしざんは、どこを さきに けいさんしても、 答えは かわりません。</p>
                                            <div class="calc-table">
                                                ・(2＋3) ＋ 4 ＝ 5 ＋ 4 ＝ <b>9</b><br>
                                                ・2 ＋ (3＋4) ＝ 2 ＋ 7 ＝ <b>9</b><br>
                                                ・4 ＋ 3 ＋ 2 ＝ 7 ＋ 2 ＝ <b>9</b>
                                            </div>
                                            <p>じゅんばんを いれかえても、 答えは ぜんぶ <b>「9」</b> に なりますね。</p>
                                            
                                            <h4><ruby>計<rt>けい</rt></ruby><ruby>算<rt>さん</rt></ruby>の くふう</h4>
                                            <p><b>「2 ＋ 7 ＋ 8」</b> のようなときは、 10に なる 組み合わせを さきに さがすと らくですよ。</p>
                                            <div class="calc-demo">
                                                2 ＋ 8 ＝ 10 （さきに 10を つくる！）<br>
                                                10 ＋ 7 ＝ 17
                                            </div>
                                            <div class='point-box'>たしざんは、じぶんが 「けいさん しやすい じゅんばん」に かえても いいんだよ！</div>
                                        `
                                    }
                                ]
                            },
                            { 
                                title: "3. <ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>", 
                                subUnits: [
                                    { 
                                        title: "(1) 1けたの ひきざん", 
                                        content: `
                                            <h4>1から9までの ひきざん</h4>
                                            <div class="calc-demo">
                                                🍎🍎🍎 － 🍎 ＝ 🍎🍎<br>
                                                <span>3 － 1 ＝ 2</span>
                                            </div>
                                            <div class='point-box'>「のこり」や 「ちがい」を みつけるときは ひきざんだね。</div>
                                        `
                                    },
                                    { 
                                        title: "(2) 「0」を ひこう", 
                                        content: `
                                            <h4>0を ひく 計算</h4>
                                            <div class="calc-demo">
                                                5 － 0 ＝ 5<br>
                                                0 － 0 ＝ 0
                                            </div>
                                            <div class='point-box'>0を ひいても、数は かわりません。</div>
                                        `
                                    },
                                    { 
                                        title: "(3) ひくと「0」に なる", 
                                        content: `
                                            <h4>ぜんぶ なくなる 計算</h4>
                                            <div class="calc-demo">
                                                3 － 3 ＝ 0<br>
                                                9 － 9 ＝ 0
                                            </div>
                                            <div class='point-box'>おなじ 数から おなじ 数を ひくと、ぜんぶ なくなって <b>「0」</b> に なります。</div>
                                        `
                                    },
                                    { 
                                        title: "(4) 10から ひく 計算", 
                                        content: `
                                            <h4>くりさがりの ひきざん</h4>
                                            <p>13 － 9 ＝ ？</p>
                                            <div class="cherry-calc">
                                                <p>① 13を 「10」と 「3」に わける。</p>
                                                <p>② 10から 9を ひくと 「1」。</p>
                                                <p>③ その 1と、わけておいた 3を あわせて <b>「4」</b></p>
                                            </div>
                                            <div class='point-box'>10から ひくと 計算しやすいね。</div>
                                        `
                                    },
                                    { 
                                        title: "(5) 2けたの ひきざん", 
                                        content: `
                                            <h4>大きな 数の ひきざん</h4>
                                            <div class="calc-demo">
                                                15 － 3 ＝ 12<br>
                                                50 － 20 ＝ <b>30</b><br>
                                                100 － 40 ＝ <b>60</b>
                                            </div>
                                            <div class='point-box'>10の まとまりを 意識（いしき）して 計算しよう。</div>
                                        `
                                    },
                                    { 
                                        title: "(6) 「100」から ひく 計算", 
                                        content: `
                                            <h4>100を つかった ひきざん</h4>
                                            <div class="calc-demo">
                                                100 － 10 ＝ 90<br>
                                                100 － 50 ＝ 50<br>
                                                100 － 1 ＝ 99
                                            </div>
                                            <div class='point-box'>100から ひいたあとの 数も イメージしてみよう。</div>
                                        `
                                    },
                                    { 
                                        title: "(7) じゅんばんを かえると どうなる？", 
                                        content: `
                                            <h4>ひきざんは じゅんばんが 大事！</h4>
                                            <div class="calc-demo">
                                                5 － 3 ＝ 2 （できる！）<br>
                                                3 － 5 ＝ ❓ （たりない？）
                                            </div>
                                            <p>3こしか ないところから 5こ とろうとすると、2こ <b>たりなく</b> なってしまいますね。</p>
                                            <div class='point-box'>答えは <b>0よりも 小さな 数</b> になります。これを 中学生に なってから 「マイナスの 数」として ならうよ。ひきざんは じゅんばんを かえると 答えが かわるんだね。</div>
                                        `
                                    },
                                    { 
                                        title: "(8) 3つの <ruby>数<rt>かず</rt></ruby>の ひきざん", 
                                        content: `
                                            <h4>つぎつぎ ひいてみよう</h4>
                                            <div class="calc-demo">
                                                10 － 3 － 2 ＝ 5
                                            </div>
                                            <p>まえから じゅんばんに ひいていこう。</p>
                                            <div class='point-box'>「のこりは いくつ」から さらに 「へる」 かんじだね。</div>
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
                                title: "1. いろいろな かたち", 
                                subUnits: [
                                    { 
                                        title: "(1) かたちを みつけよう", 
                                        content: `
                                            <h4>① ボール（まるい かたち）</h4>
                                            <div class="shape-item">
                                                <div class="shape-icon">⚽</div>
                                                <p>ボールには <b>たいらな ところが ありません</b>。どこからでも ころがります。</p>
                                            </div>
                                            <h4>② はこ（しかくい かたち）</h4>
                                            <div class="shape-item">
                                                <div class="shape-icon">📦</div>
                                                <p>はこには たいらな ところが たくさん あります。<b>つみあげる</b> ことができます。</p>
                                            </div>
                                            <h4>③ つつ（まるくて ながい かたち）</h4>
                                            <div class="shape-item">
                                                <div class="shape-icon">🥫</div>
                                                <p>つつは、よこに すると <b>ころがります</b>。たてに すると <b>つみあげる</b> ことが できます。</p>
                                                <div class='point-box'>まわりの ものが、どの かたちに にているか さがしてみよう！</div>
                                            </div>
                                        ` 
                                    }
                                ]
                            },
                            { 
                                title: "2. かたちづくり", 
                                subUnits: [
                                    { 
                                        title: "(1) さんかくを つなげよう", 
                                        content: `
                                            <h4>① さんかく 2つで つくろう</h4>
                                            <div class="shape-demo">
                                                <div class="triangle-pair square">
                                                    <div class="tri t1"></div>
                                                    <div class="tri t2"></div>
                                                </div>
                                                <p>さんかく（ちょっかくにとうへんさんかくけい）を 2つ つなげると、<b>「ましかく（せいほうけい）」</b>に なります。</p>
                                            </div>
                                            <h4>② ましかく 2つで つくろう</h4>
                                            <div class="shape-demo">
                                                <div class="square-pair rectangle">
                                                    <div class="sq s1"></div>
                                                    <div class="sq s2"></div>
                                                </div>
                                                <p>さっき つくった ましかくを 2つ つなげると、<b>「ながしかく（ちょうほうけい）」</b>に なります。</p>
                                            </div>
                                            <div class='point-box'>おきかたを かえると、ちがう しかく（へいこうしへんけい）も できるよ！</div>
                                        ` 
                                    },
                                    { 
                                        title: "(2) もっと つなげよう", 
                                        content: `
                                            <h4>① さんかく 3つで つくろう</h4>
                                            <div class="shape-demo">
                                                <div class="triangle-group trapezoid">
                                                    <div class="tri t1"></div>
                                                    <div class="tri t2 inverse"></div>
                                                    <div class="tri t3"></div>
                                                </div>
                                                <p>さんかくを 3つ つなげると、<b>「しんかんせん（だいけい）」</b>のような かたちに なります。</p>
                                            </div>
                                            <h4>② できない かたち</h4>
                                            <div class="shape-demo">
                                                <div class="no-circle">
                                                    <div class="tri-small"></div>
                                                    <div class="tri-small"></div>
                                                    <span class="cross">❌</span>
                                                    <div class="circle-outline"></div>
                                                </div>
                                                <p>さんかくを どう つなげても、<b>「まる（えん）」</b>を つくることは できません。</p>
                                            </div>
                                            <div class='point-box'>かどが まっすぐな さんかくを 使って、いろいろな かたちを つくってみよう。</div>
                                        ` 
                                    }
                                ]
                            },
                            { 
                                title: "3. どこかな？（いちかんけい）", 
                                subUnits: [
                                    { 
                                        title: "(1) ほうこうの ことば", 
                                        content: `
                                            <h4>① ぜんご・さゆう・じょうげ</h4>
                                            <p>ものの ばしょを あらわす ときは、こんな ことばを つかいます。</p>
                                            <ul class="pos-list">
                                                <li><b>まえ・うしろ</b>（ぜんご）</li>
                                                <li><b>ひだり・みぎ</b>（さゆう）</li>
                                                <li><b>うえ・した</b>（じょうげ）</li>
                                            </ul>
                                            <h4>② ならびかたの ことば</h4>
                                            <ul class="pos-list">
                                                <li><b>いちばん まえ</b></li>
                                                <li><b>○ばんめ</b></li>
                                                <li><b>まんなか</b></li>
                                            </ul>
                                            <div class='point-box'>みんなで いれつに ならんで、だれが どこに いるか 言ってみよう！</div>
                                        ` 
                                    },
                                    { 
                                        title: "(2) なにから みて どこ？", 
                                        content: `
                                            <h4>① だれから みるか（きじゅん）</h4>
                                            <p>ばしょを いう ときは、<b>「なにから みて」</b>を いうことが とても たいせつです。</p>
                                            <div class="pos-demo">
                                                <div class="clock-box">⏰ とけい</div>
                                                <div class="arrow">⬇️ うえ</div>
                                                <div class="table-box">📅 じかんわり</div>
                                            </div>
                                            <p>「とけいは、じかんわりの <b>うえ</b>に あります」</p>
                                            <h4>② じぶんから みて どこ？</h4>
                                            <p>「<b>じぶんから みて</b>、こくばんの ひだりに テレビが あります」</p>
                                            <div class='point-box'>みる ひとが かわると、ひだりや みぎも かわることが あるよ。</div>
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
                                title: "1. 長さくらべ", 
                                subUnits: [
                                    { 
                                        title: "(1) 直接（ちょくせつ）くらべる", 
                                        content: `
                                            <h4>どっちが 長いかな？</h4>
                                            <p>2本の えんぴつが バラバラに おいてあると、どちらが 長いか 分かりませんね。</p>
                                            <div class="measure-demo">
                                                <div class="pencil-compare">
                                                    <div class="pencil p1">✏️</div>
                                                    <div class="pencil p2">✏️</div>
                                                    <div class="desk-line"></div>
                                                </div>
                                            </div>
                                            <p>つくえの 上に <b>立てて</b> 並べてみましょう。下（端）を そろえると、どちらが 長いか はっきり 分かります。</p>
                                            <div class='point-box'>くらべるときは、<b>「はじっこ（端）」を そろえる</b> のが 大切（たいせつ）だよ。</div>
                                        ` 
                                    },
                                    { 
                                        title: "(2) 離（はな）れたものを くらべる", 
                                        content: `
                                            <h4>つくえの 縦（たて）と 横（よこ）</h4>
                                            <p>つくえの たてと よこ、どちらが 長いかな？ つくえを 折（お）ることは できませんね。</p>
                                            <div class="measure-demo">
                                                <div class="tape-measure">
                                                    <div class="tape">📏 紙テープ</div>
                                                </div>
                                            </div>
                                            <p>そんなときは、<b>紙テープ</b> で しるしを つけて、その テープを 並べて くらべてみましょう。</p>
                                            <div class='point-box'>動（うご）かせない ものは、テープなどに 写（うつ）して くらべよう。</div>
                                        ` 
                                    },
                                    { 
                                        title: "(3) <ruby>何個分<rt>なんこぶん</rt></ruby>かで くらべる", 
                                        content: `
                                            <h4>えんぴつ <ruby>何本分<rt>なんぼんぶん</rt></ruby>？</h4>
                                            <p>もっと たくさんの ものを くらべるときは、<ruby>数<rt>かず</rt></ruby>に しましょう。</p>
                                            <div class="measure-demo">
                                                <div class="unit-measure">
                                                    <div>たて：✏️✏️✏️（3<ruby>本分<rt>ほんぶん</rt></ruby>）</div>
                                                    <div>よこ：✏️✏️✏️✏️（4<ruby>本分<rt>ほんぶん</rt></ruby>）</div>
                                                </div>
                                            </div>
                                            <p>「えんぴつ 4<ruby>本分<rt>ほんぶん</rt></ruby>」のほうが 「3<ruby>本分<rt>ほんぶん</rt></ruby>」より <ruby>長<rt>なが</rt></ruby>いですね。</p>
                                            <div class='point-box'><ruby>同<rt>おな</rt></ruby>じ <ruby>長<rt>なが</rt></ruby>さの ものが <b>「いくつ分（ぶん）あるか」</b> で、<ruby>長<rt>なが</rt></ruby>さが <ruby>数<rt>かず</rt></ruby>で <ruby>表<rt>あらわ</rt></ruby>せるよ。</div>
                                        ` 
                                    },
                                    { 
                                        title: "(4) <ruby>考<rt>かんが</rt></ruby>えてみよう！", 
                                        content: `
                                            <h4>ソファは ドアを <ruby>通<rt>とお</rt></ruby>れるかな？</h4>
                                            <p>とっても <ruby>重<rt>おも</rt></ruby>い ソファが あります。 この ソファが ドアを <ruby>通<rt>とお</rt></ruby>れるかどうか、どうやって <ruby>調<rt>しら</rt></ruby>べれば いいでしょうか？</p>
                                            <div class="measure-demo">
                                                <div class="sofa-problem">🛋️ ❓ 🚪</div>
                                            </div>
                                            <p>ソファを ドアまで 運（はこ）ぶのは 大変（たいへん）ですね。 そんなときは、<b><ruby>紙<rt>かみ</rt></ruby>テープや ヒモ</b> を つかいましょう！</p>
                                            <div class="measure-demo">
                                                <div class="tape-measure">
                                                    <div class="tape">🛋️ ソファの <ruby>幅<rt>はば</rt></ruby>を テープで はかる</div>
                                                    <div class="arrow">⬇️</div>
                                                    <div class="tape">🚪 ドアに その テープを あててみる</div>
                                                </div>
                                            </div>
                                            <div class='point-box'><ruby>動<rt>うご</rt></ruby>かせない ものは、テープなどに <ruby>写<rt>うつ</rt></ruby>しとって くらべれば いいんだね。</div>
                                        ` 
                                    }
                                ]
                            },
                            { 
                                title: "2. 広さくらべ", 
                                subUnits: [
                                    { 
                                        title: "(1) 重（かさ）ねて くらべる", 
                                        content: `
                                            <h4>ハンカチの 広さ</h4>
                                            <p>2つの ハンカチ、どちらが 広いかな？</p>
                                            <div class="measure-demo">
                                                <div class="area-compare">
                                                    <div class="hanky h1">🧣</div>
                                                    <div class="hanky h2">🧣</div>
                                                </div>
                                            </div>
                                            <p><b>角（かど）を そろえて</b> 重ねてみましょう。 はみ出した ほうが 広い ハンカチです。</p>
                                        ` 
                                    },
                                    { 
                                        title: "(2) 色板（いろいた）を 並べる", 
                                        content: `
                                            <h4>色板 何枚分？</h4>
                                            <p>同じ 大きさ of タイル（色板）を しきつめてみましょう。</p>
                                            <div class="measure-demo">
                                                <div class="tile-grid">
                                                    <div class="tiles blue">🟦🟦🟦<br>🟦🟦🟦</div>
                                                    <div class="tiles red">🟥🟥🟥🟥<br>🟥🟥🟥🟥</div>
                                                </div>
                                            </div>
                                            <p>青い かみは 6枚分、赤い かみは 8枚分。 数の 多い ほうが 広いね。</p>
                                            <div class='point-box'>マス目を ぬったり、タイルを 置（お）いたりして 広さを 数えよう。</div>
                                        ` 
                                    }
                                ]
                            },
                            { 
                                title: "3. かさくらべ（水など）", 
                                subUnits: [
                                    { 
                                        title: "(1) 中に入れて くらべる", 
                                        content: `
                                            <h4>入れ物の 大きさ</h4>
                                            <p>大きな 箱（はこ）の 中に、小さな 箱を 入れてみましょう。 すっぽり 入れば、外の 箱のほうが 大きいですね。</p>
                                            <div class="measure-demo">
                                                <div class="box-in-box">📦 📥 📦</div>
                                            </div>
                                        ` 
                                    },
                                    { 
                                        title: "(2) コップ 何杯分（なんぱいぶん）？", 
                                        content: `
                                            <h4>水の かさを 数える</h4>
                                            <p>入れ物（いれもの）に 入る 水の 量（りょう）を くらべます。</p>
                                            <div class="measure-demo">
                                                <div class="cup-measure">
                                                    <div>びんＡ：🥤🥤🥤（3杯分）</div>
                                                    <div>びんＢ：🥤🥤🥤🥤🥤（5杯分）</div>
                                                </div>
                                            </div>
                                            <p>同じ コップで 何杯（なんぱい） 入るか 数えてみましょう。</p>
                                            <div class='point-box'>長さ、広さ、かさ。 どれも <b>「いくつ分か」</b> を 数えると 正確（せいかく）に くらべられるよ！</div>
                                        ` 
                                    }
                                ]
                            },
                            { 
                                title: "4. <ruby>とけい<rt>時計</rt></ruby>（<ruby>時刻<rt>じこく</rt></ruby>）", 
                                subUnits: [
                                    { 
                                        title: "(1) <ruby>針<rt>はり</rt></ruby>の <ruby>名前<rt>なまえ</rt></ruby>と <ruby>役割<rt>やくわり</rt></ruby>", 
                                        content: `
                                            <h4><ruby>短<rt>みじか</rt></ruby>い<ruby>針<rt>はり</rt></ruby>と <ruby>長<rt>なが</rt></ruby>い<ruby>針<rt>はり</rt></ruby></h4>
                                            <div class="clock-demo-box">
                                                <div class="simple-clock">
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
                                                    <div class="hand short"></div>
                                                    <div class="hand long"></div>
                                                </div>
                                            </div>
                                            <ul class="clock-list">
                                                <li><b><ruby>短<rt>みじか</rt></ruby>い<ruby>針<rt>はり</rt></ruby>（あか）</b>：<b>「<ruby>何時<rt>なんじ</rt></ruby>」</b> を あらわします。</li>
                                                <li><b><ruby>長<rt>なが</rt></ruby>い<ruby>針<rt>はり</rt></ruby>（あお）</b>：<b>「<ruby>何分<rt>なんぷん</rt></ruby>」</b> を あらわします。</li>
                                            </ul>
                                            <div class='point-box'><ruby>長<rt>なが</rt></ruby>い<ruby>針<rt>はり</rt></ruby>が 12の ところに あるときは、ちょうど <b>「○<ruby>時<rt>じ</rt></ruby>」</b> だね。</div>
                                        ` 
                                    },
                                    { 
                                        title: "(2) <ruby>針<rt>はり</rt></ruby>が <ruby>動<rt>うご</rt></ruby>くと？", 
                                        content: `
                                            <h4>「8」と 「9」の あいだは <ruby>何時<rt>なんじ</rt></ruby>？</h4>
                                            <p><ruby>短<rt>みじか</rt></ruby>い<ruby>針<rt>はり</rt></ruby>が 9に <ruby>近<rt>ちか</rt></ruby>いとき、「9<ruby>時<rt>じ</rt></ruby>かな？」と まようことがありますね。</p>
                                            <div class="clock-demo-box">
                                                <div class="simple-clock territory-clock">
                                                    <div class="territory-8"></div>
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
                                                    <div class="hand short-move"></div>
                                                    <div class="hand long-half"></div>
                                                </div>
                                            </div>
                                            <p><ruby>時計<rt>とけい</rt></ruby>には <b>「お<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>」</b> が あります。 <ruby>短<rt>みじか</rt></ruby>い<ruby>針<rt>はり</rt></ruby>が 8を すぎたら、つぎの 9に つくまでは ずっと <b>「8の お<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>」</b> です。</p>
                                            <div class='point-box'>「9」に すごく <ruby>近<rt>ちか</rt></ruby>くても、<b>9を ピッタリ ふむまでは 8<ruby>時<rt>じ</rt></ruby></b> なんだよ。</div>
                                        ` 
                                    },
                                    { 
                                        title: "(3) <ruby>生活<rt>せいかつ</rt></ruby>と <ruby>時計<rt>とけい</rt></ruby>", 
                                        content: `
                                            <h4>「そろそろ 9<ruby>時<rt>じ</rt></ruby>だね」</h4>
                                            <p><ruby>時計<rt>とけい</rt></ruby>を <ruby>見<rt>み</rt></ruby>て、つぎの <ruby>行<rt>こう</rt></ruby><ruby>動<rt>どう</rt></ruby>を <ruby>決<rt>き</rt></ruby>めてみましょう。</p>
                                            <div class="life-clock">
                                                <div>🏫 <b>9<ruby>時<rt>じ</rt></ruby>：</b> 1<ruby>時間目<rt>じかんめ</rt></ruby>が <ruby>始<rt>はじ</rt></ruby>まるよ！ <ruby>準<rt>じゅん</rt></ruby><ruby>備<rt>び</rt></ruby>を しよう。</div>
                                                <div>🍱 <b>12<ruby>時<rt>じ</rt></ruby>：</b> お<ruby>昼<rt>ひる</rt></ruby>ごはんの <ruby>時間<rt>じかん</rt></ruby>だね。</div>
                                            </div>
                                            <div class='point-box'><ruby>学校<rt>がっこう</rt></ruby>や おうちで、「<ruby>今<rt>いま</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>かな？」と <ruby>時計<rt>とけい</rt></ruby>を <ruby>見<rt>み</rt></ruby>る <ruby>習<rt>しゅう</rt></ruby><ruby>慣<rt>かん</rt></ruby>を つけよう。</div>
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
                                title: "1. <ruby>並<rt>なら</rt></ruby>べて くらべよう", 
                                subUnits: [
                                    { 
                                        title: "(1) <ruby>並<rt>なら</rt></ruby>べかたの くふう", 
                                        content: `
                                            <h4>どの ボールが <ruby>一番<rt>いちばん</rt></ruby> <ruby>多<rt>おお</rt></ruby>いかな？</h4>
                                            <p>バラバラの <ruby>大<rt>おお</rt></ruby>きさの ボールを、 <ruby>縦<rt>たて</rt></ruby>に 並（なら）べてみました。</p>
                                            <div class="data-demo">
                                                <div class="vertical-graph unaligned-size">
                                                    <div class="graph-col">
                                                        <div class="cells large-balls">🔵<br>🔵</div>
                                                        <div class="label">🔵 (大)</div>
                                                    </div>
                                                    <div class="graph-col">
                                                        <div class="cells small-balls">🔘<br>🔘<br>🔘<br>🔘<br>🔘</div>
                                                        <div class="label">🔘 (小)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>バランスボール（🔵）のほうが <ruby>高<rt>たか</rt></ruby>く 見（み）えますが、 数（かず）を 数（かぞ）えると スーパーボール（🔘）のほうが <ruby>多<rt>おお</rt></ruby>いですね。</p>
                                            <div class='point-box'><ruby>大<rt>おお</rt></ruby>きさが ちがうと、 見（み）た目（め）だけでは 正確（せいかく）に くらべられません。</div>
                                        ` 
                                    },
                                    { 
                                        title: "(2) <ruby>グラフ<rt>ぐらふ</rt></ruby>に してみよう", 
                                        content: `
                                            <h4>マークを <ruby>下<rt>した</rt></ruby>から <ruby>積<rt>つ</rt></ruby>みあげる</h4>
                                            <p>ボールの <ruby>大<rt>おお</rt></ruby>きさを 同じに して、<ruby>下<rt>した</rt></ruby>から じゅんばんに 並（なら）べてみました。</p>
                                            <div class="data-demo">
                                                <div class="vertical-graph">
                                                    <div class="graph-col">
                                                        <div class="cells">〇<br>〇</div>
                                                        <div class="label">🔵</div>
                                                    </div>
                                                    <div class="graph-col">
                                                        <div class="cells">〇<br>〇<br>〇<br>〇<br>〇</div>
                                                        <div class="label">🔘</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>これで、スーパーボール（🔘）のほうが <ruby>高<rt>たか</rt></ruby>くまで 積（つ）まれていて、 <ruby>多<rt>おお</rt></ruby>いことが はっきり 分かりましたね！</p>
                                            <div class='point-box'><ruby>下<rt>した</rt></ruby>の <b><ruby>高<rt>たか</rt></ruby>さを そろえて</b> 並（なら）べると、 どちらが <ruby>多<rt>おお</rt></ruby>いか すぐに 分かるよ。</div>
                                        ` 
                                    },
                                    { 
                                        title: "(3) みんなの すきなもの", 
                                        content: `
                                            <h4><ruby>表<rt>ひょう</rt></ruby>に まとめてみよう</h4>
                                            <p>クラスの みんなに 「すきな くだもの」を <ruby>聞<rt>き</rt></ruby>いてみました。</p>
                                            <div class="data-demo">
                                                <table class="data-table">
                                                    <tr><th>くだもの</th><th>人数（にんずう）</th></tr>
                                                    <tr><td>🍎 りんご</td><td>〇〇〇〇 (4)</td></tr>
                                                    <tr><td>🍌 バナナ</td><td>〇〇 (2)</td></tr>
                                                    <tr><td>🍓 いちご</td><td>〇〇〇〇〇 (5)</td></tr>
                                                </table>
                                            </div>
                                            <p><ruby>一番<rt>いちばん</rt></ruby> 人気（にんき）が あるのは 🍓いちご だね！</p>
                                            <div class='point-box'>みんなの <ruby>好<rt>す</rt></ruby>きなものを <ruby>聞<rt>き</rt></ruby>いて、それぞれ 何個（なんこ）だったか <ruby>書<rt>か</rt></ruby>きあらわしてみよう。</div>
                                        ` 
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
                                title: "1. 大きな <ruby>数<rt>かず</rt></ruby>", 
                                subUnits: [
                                    { 
                                        title: "(1) まとめて <ruby>数<rt>かぞ</rt></ruby>えよう", 
                                        content: `
                                            <h4>10や 100の まとまり</h4>
                                            <p>たくさんの ものを <ruby>数<rt>かぞ</rt></ruby>えるときは、10ずつや 100ずつ まとめるのが コツです。</p>
                                            <div class='point-box'>10が 10こで 100。 100が 10こで 1000（せん）になるよ。</div>
                                        ` 
                                    },
                                    { 
                                        title: "(2) <ruby>位<rt>くらい</rt></ruby>の あがりかた", 
                                        content: `
                                            <h4>10あつまると つぎの <ruby>位<rt>くらい</rt></ruby>へ</h4>
                                            <p>一の<ruby>位<rt>くらい</rt></ruby>が 10こで 十の<ruby>位<rt>くらい</rt></ruby>、十の<ruby>位<rt>くらい</rt></ruby>が 10こで 百の<ruby>位<rt>くらい</rt></ruby>へ うつります。</p>
                                            <div class="calc-table">
                                                10 → 100 → 1000 → 10000（一万）
                                            </div>
                                        ` 
                                    },
                                    { 
                                        title: "(3) どっちが <ruby>大<rt>おお</rt></ruby>きい？（不等号）", 
                                        content: `
                                            <h4><ruby>記号<rt>きごう</rt></ruby>で くらべよう</h4>
                                            <p><ruby>数<rt>かず</rt></ruby>の <ruby>大<rt>おお</rt></ruby>きさを くらべるときは <b>「＞」</b> や <b>「＜」</b> を つかいます。</p>
                                            <div class="calc-demo">
                                                500 <b>＞</b> 300<br>
                                                120 <b>＜</b> 150
                                            </div>
                                            <p>口（くち）が あいている ほうが <ruby>大<rt>おお</rt></ruby>きいよ。</p>
                                        ` 
                                    },
                                    { 
                                        title: "(4) <ruby>数<rt>かず</rt></ruby>の <ruby>見方<rt>みかた</rt></ruby>", 
                                        content: `
                                            <h4>バラバラに してみると？</h4>
                                            <p>6000 という <ruby>数<rt>かず</rt></ruby>は、いろいろな <ruby>見方<rt>みかた</rt></ruby>が できます。</p>
                                            <ul class="pos-list">
                                                <li>1000 が 6こ</li>
                                                <li>100 が 60こ</li>
                                                <li>10 が 600こ</li>
                                            </ul>
                                            <div class='point-box'>「10が 何個分（なんこぶん）かな？」とかんがえると、<ruby>数<rt>かず</rt></ruby>の センスが よく なるよ！</div>
                                        ` 
                                    }
                                ]
                            },
                            {
                                title: "2. たし算",
                                subUnits: [
                                    {
                                        title: "(1) 2けたの けいさんと ひっ算",
                                        content: `
                                            <h4>2けた ＋ 2けた</h4>
                                            <div class="hissan">
                                              <table>
                                                <tr><td></td><td>2</td><td>5</td></tr>
                                                <tr><td>＋</td><td>1</td><td>4</td></tr>
                                                <tr class="line"><td></td><td>3</td><td>9</td></tr>
                                              </table>
                                            </div>
                                            <p><ruby>位<rt>くらい</rt></ruby>を そろえて、一の<ruby>位<rt>くらい</rt></ruby>から じゅんばんに けいさん しよう。</p>
                                        `
                                    },
                                    {
                                        title: "(2) 3けたの けいさん",
                                        content: `
                                            <h4>百（ひゃく）の くらいの 計算</h4>
                                            <div class="calc-demo">
                                                120 ＋ 230 ＝ 350<br>
                                                500 ＋ 400 ＝ 900<br>
                                                500 ＋ 500 ＝ 1000
                                            </div>
                                            <p>100の まとまりが いくつ あるか かんがえると、 大きな 数（かず）の 計算も かんたんだね。</p>
                                        `
                                    },
                                    {
                                        title: "(3) 3けた と 2けたの 計算",
                                        content: `
                                            <h4>1万（いちまん）までの たしざん</h4>
                                            <div class="calc-demo">
                                                120 ＋ 30 ＝ 150<br>
                                                990 ＋ 10 ＝ 1000<br>
                                                9900 ＋ 100 ＝ 10000
                                            </div>
                                            <div class='point-box'>1000が 10こで <b>1万（いちまん）</b> になるよ。</div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "3. 引き算",
                                subUnits: [
                                    {
                                        title: "(1) 2けたの けいさんと ひっ算",
                                        content: `
                                            <h4>2けた － 2けた</h4>
                                            <div class="hissan">
                                              <table>
                                                <tr><td></td><td>4</td><td>8</td></tr>
                                                <tr><td>－</td><td>1</td><td>5</td></tr>
                                                <tr class="line"><td></td><td>3</td><td>3</td></tr>
                                              </table>
                                            </div>
                                            <p>ひっ算を つかうと、大きな 数（かず）の 引き算（ひきざん）も かんたんだね。</p>
                                        `
                                    },
                                    {
                                        title: "(2) 3けたの けいさん",
                                        content: `
                                            <h4>百（ひゃく）の くらいの 引き算</h4>
                                            <div class="calc-demo">
                                                350 － 120 ＝ 230<br>
                                                900 － 400 ＝ 500<br>
                                                1000 － 500 ＝ 500
                                            </div>
                                            <p>100の まとまりを 意識（いしき）して ひいてみよう。</p>
                                        `
                                    },
                                    {
                                        title: "(3) 3けた と 2けたの 引き算",
                                        content: `
                                            <h4>大きな 数（かず）の 引き算</h4>
                                            <div class="calc-demo">
                                                150 － 30 ＝ 120<br>
                                                1000 － 10 ＝ 990<br>
                                                10000 － 1000 ＝ 9000
                                            </div>
                                            <div class='point-box'>1万（いちまん）から ひく 計算（けいさん）も、まとまりで かんがえると わかりやすいね。</div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "4. たし算と 引き算の かんけい",
                                subUnits: [
                                    {
                                        title: "(1) ＋ と － の なかよし",
                                        content: `
                                            <h4>ぎゃくの 計算</h4>
                                            <p><b>3 ＋ 5 ＝ 8</b> のとき、つぎのことも わかります。</p>
                                            <div class="calc-demo">
                                                5 ＋ 3 ＝ 8<br>
                                                8 － 3 ＝ 5<br>
                                                8 － 5 ＝ 3
                                            </div>
                                            <div class='point-box'>たし算の 答えから 片方（かたほう）を 引くと、もう 片方（かたほう）に なるんだね。</div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "5. かけ算",
                                subUnits: [
                                    {
                                        title: "(1) かけ算（かけざん）とは？",
                                        content: `
                                            <h4>たし算との ちがい</h4>
                                            <p>「5こ 入（い）りのが 4さら」あるとき：</p>
                                            <p>たし算：5 ＋ 5 ＋ 5 ＋ 5 ＝ 20</p>
                                            <p>かけ算：<b>5 × 4 ＝ 20</b></p>
                                            <p>おなじ 数を 何回（なんかい）も たすときは、かけ算が べんり！</p>
                                        `
                                    },
                                    {
                                        title: "(2) じゅんばんが 大事（だいじ）！",
                                        content: `
                                            <h4>「1つ分」 × 「いくつ分」</h4>
                                            <p>プリンが 3こ ずつ 入（はい）った パックが 5つ あります。</p>
                                            <p>しき： <b>3（1つ分） × 5（いくつ分） ＝ 15</b></p>
                                            <div class='point-box'>「5 × 3」 と かくと、「5こ ずつ 3パック」 という いみに なるので、 じゅんばんに 気をつけよう。</div>
                                        `
                                    },
                                    {
                                        title: "(3) 九九（くく）の 表（ひょう）",
                                        content: `
                                            <h4>1から 9までの 九九（くく）</h4>
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
                                            </div>
                                            <div class='point-box'>ななめに 見（み）ると、 「1, 4, 9, 16...」 と おなじ 数（かず）を かけた 答えが 並（なら）んでいるよ！</div>
                                        `
                                    },
                                    {
                                        title: "(4) 九九（くく）の ルール",
                                        content: `
                                            <h4>かけ算の ふしぎ</h4>
                                            <ul class="pos-list">
                                                <li><b>いれかえても おなじ</b>： 3×5 と 5×3 は どちらも 15。</li>
                                                <li><b>答えの ふえかた</b>： 3×5 の つぎの 3×6 は、 答えが 3ふえる。</li>
                                                <li><b>3のだん ＋ 4のだん</b>： 答えを たすと 7のだんに なるよ！</li>
                                            </ul>
                                        `
                                    },
                                    {
                                        title: "(5) 「0」の かけ算",
                                        content: `
                                            <h4>0の 計算と 大きな かけ算</h4>
                                            <div class="calc-demo">
                                                5 × 0 ＝ 0<br>
                                                0 × 3 ＝ 0<br>
                                                12 × 12 ＝ 144<br>
                                                20 × 20 ＝ 400
                                            </div>
                                            <div class='point-box'>0を かけると ぜんぶ 0に なるよ。 20×20 まで おぼえると かっこいい！</div>
                                        `
                                    },
                                    {
                                        title: "(6) 10の かけ算",
                                        content: `
                                            <h4>10を かけると どうなる？</h4>
                                            <div class="calc-table">
                                                10 × 1 ＝ 10<br>
                                                10 × 2 ＝ 20<br>
                                                10 × 5 ＝ 50<br>
                                                10 × 9 ＝ 90
                                            </div>
                                            <div class='point-box'>もとの 数の 後（うし）ろに <b>「0」を つけるだけ</b> で 答えに なるよ！</div>
                                        `
                                    },
                                    {
                                        title: "(7) 11の段、12の段",
                                        content: `
                                            <h4>九九の さきの 計算</h4>
                                            <p>11や 12のだんは、 <b>わけて</b> かんがえると かんたんです。</p>
                                            <div class="calc-demo">
                                                <b>12 × 3 ＝ ？</b><br>
                                                ・10 × 3 ＝ 30<br>
                                                ・ 2 × 3 ＝ 6<br>
                                                ・30 ＋ 6 ＝ <b>36</b>
                                            </div>
                                            <div class='point-box'>「10の まとまり」と 「のこり」に わけて たせば いいんだね。</div>
                                        `
                                    },
                                    {
                                        title: "(8) おなじ 数を かける",
                                        content: `
                                            <h4>九九の 達人（たつじん）への 道！</h4>
                                            <p>おなじ 数を 2回（かい） かける 計算です。 おぼえると かっこいいよ！</p>
                                            <div class="calc-table">
                                                13 × 13 ＝ 169<br>
                                                14 × 14 ＝ 196<br>
                                                15 × 15 ＝ 225<br>
                                                16 × 16 ＝ 256<br>
                                                17 × 17 ＝ 289<br>
                                                18 × 18 ＝ 324<br>
                                                19 × 19 ＝ 361
                                            </div>
                                            <div class='point-box'>20 × 20 ＝ 400 まで いけたら 完（かん）ぺきだね！</div>
                                        `
                                    }
                                ]
                            },
                            {
                                title: "6. 分数（ぶんすう）",
                                subUnits: [
                                    {
                                        title: "(1) 半分（はんぶん）の 半分（はんぶん）...",
                                        content: `
                                            <h4>どんどん わけてみよう</h4>
                                            <p>ぴったり 2つに わけると <b>1/2（二分の一）</b>。 それを さらに 半分に すると...</p>
                                            <div class="fraction-demo">
                                                <div class="split-row">
                                                    <div class="rect split-2"><div class="fill"></div><div></div></div>
                                                    <span>1/2</span>
                                                </div>
                                                <div class="arrow">⬇️ さらに 半分</div>
                                                <div class="split-row">
                                                    <div class="rect split-4"><div class="fill"></div><div></div><div></div><div></div></div>
                                                    <span>1/4 （半分の 半分）</span>
                                                </div>
                                                <div class="arrow">⬇️ さらに 半分</div>
                                                <div class="split-row">
                                                    <div class="rect split-8"><div class="fill"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                                    <span>1/8 （半分の 半分の 半分）</span>
                                                </div>
                                            </div>
                                            <div class='point-box'>わければ わけるほど、 ひとつ分の 大きさは 小さくなっていくね。</div>
                                        `
                                    },
                                    {
                                        title: "(2) いろいろな 分け方",
                                        content: `
                                            <h4>3つや 5つに わけると？</h4>
                                            <p>半分（2つ）以外にも、いろいろな 分け方が あります。</p>
                                            <div class="fraction-demo">
                                                <div class="split-row">
                                                    <div class="rect split-3"><div class="fill"></div><div></div><div></div></div>
                                                    <span><b>1/3</b> （三分の一）</span>
                                                </div>
                                                <div class="split-row">
                                                    <div class="rect split-5"><div class="fill"></div><div></div><div></div><div></div><div></div></div>
                                                    <span><b>1/5</b> （五分の一）</span>
                                                </div>
                                            </div>
                                            <p>下の 数（かず）は、<b>「いくつに わけるか」</b> を あらわして います。</p>
                                            <div class='point-box'>3つに わければ 「三分の〜」、 10個に わければ 「十分の〜」 と よぶよ。</div>
                                        `
                                    },
                                    {
                                        title: "(3) ○倍（ばい）と 分数（ぶんすう）",
                                        content: `
                                            <h4>見方（みかた）を かえてみよう</h4>
                                            <p>12この おはじき：</p>
                                            <ul class="pos-list">
                                                <li>6この <b>2倍（ばい）</b> は 12こ</li>
                                                <li>12この <b>1/2（半分）</b> は 6こ</li>
                                            </ul>
                                            <div class='point-box'>「何倍かな？」と かんがえるのが わり算の はじまりだよ。</div>
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
                                title: "1. 三角形（さんかくけい）", 
                                subUnits: [
                                    { 
                                        title: "(1) 三角形って なに？", 
                                        content: `
                                            <h4>3本の 直線（ちょくせん）で かこまれた 形</h4>
                                            <div class="shape-demo-box">
                                                <div class="demo-shape tri-basic"></div>
                                            </div>
                                            <p>まわりが 3本の 直線で ぴったり かこまれている 形を <b>三角形</b> と いいます。</p>
                                            <ul class="shape-list">
                                                <li>まわりの 直線 ➔ <b>辺（へん）</b> が 3本</li>
                                                <li>かどっこの 点 ➔ <b>頂点（ちょうてん）</b> が 3こ</li>
                                            </ul>
                                        ` 
                                    }
                                ]
                            },
                            { 
                                title: "2. 四角形（しかくけい）", 
                                subUnits: [
                                    { 
                                        title: "(1) 四角形って なに？", 
                                        content: `
                                            <h4>4本の 直線（ちょくせん）で かこまれた 形</h4>
                                            <div class="shape-demo-box">
                                                <div class="demo-shape quad-basic"></div>
                                            </div>
                                            <p>まわりが 4本の 直線で ぴったり かこまれている 形を <b>四角形</b> と いいます。</p>
                                            <ul class="shape-list">
                                                <li>まわりの 直線 ➔ <b>辺（へん）</b> が 4本</li>
                                                <li>かどっこの 点 ➔ <b>頂点（ちょうてん）</b> が 4こ</li>
                                            </ul>
                                        ` 
                                    },
                                    { 
                                        title: "(2) 直角（ちょっかく）", 
                                        content: `
                                            <h4>かどを おって つくる形</h4>
                                            <p>かみを おって つくった「まっすぐな 角」を <b>「直角（ちょっかく）」</b> と いいます。</p>
                                            <div class="shape-demo">
                                                <div class="paper-fold">📄 ➔ 📐</div>
                                                <p>身のまわりから 直角を さがしてみよう！</p>
                                            </div>
                                        ` 
                                    },
                                    { 
                                        title: "(3) 長方形と 正方形", 
                                        content: `
                                            <h4>とくべつな 四角形</h4>
                                            <ul class="shape-list">
                                                <li><b>長方形（ちょうほうけい）</b>：4つの 角が ぜんぶ <b>直角</b> の四角形。</li>
                                                <li><b>正方形（せいほうけい）</b>：4つの 角が <b>直角</b> で、4つの <b>辺の長さが おなじ</b> 四角形。</li>
                                            </ul>
                                            <div class="shape-demo-box">
                                                <div class="demo-shape rectangle-box">長方形</div>
                                                <div class="demo-shape square-box">正方形</div>
                                            </div>
                                        ` 
                                    },
                                    { 
                                        title: "(4) 直角三角形（ちょっかくさんかくけい）", 
                                        content: `
                                            <h4>直角のある 三角形</h4>
                                            <p>長方形や 正方形を ななめに 切（き）ると、<b>直角三角形</b> が できます。</p>
                                            <div class="shape-demo">
                                                <div class="split-rect">
                                                    <div class="tri-half"></div>
                                                </div>
                                            </div>
                                            <div class='point-box'>きれいな もよう（しきつめ）を つくるのに べんりな 形だね！</div>
                                        ` 
                                    }
                                ]
                            },
                            { 
                                title: "3. 箱（はこ）", 
                                subUnits: [
                                    { 
                                        title: "(1) 箱の 仕組み（しくみ）", 
                                        content: `
                                            <h4>面（めん）・辺（へん）・頂点（ちょうてん）</h4>
                                            <p>箱は、長方形や 正方形の <b>「面」</b> で できています。</p>
                                            <div class="box-demo-container">
                                                <div class="box-3d"></div>
                                            </div>
                                            <ul class="clock-list">
                                                <li>平（たい）らな ところ ➔ <b>面（めん）</b> が 6まい</li>
                                                <li>面と 面の あいだ ➔ <b>辺（へん）</b> が 12ほん</li>
                                                <li>かどっこ ➔ <b>頂点（ちょうてん）</b> が 8こ</li>
                                            </ul>
                                            <div class='point-box'>ひご（辺）や かみ（面）を つかって、箱を くみたてて みよう！</div>
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
                                title: "1. 長さの たんい", 
                                subUnits: [
                                    { 
                                        title: "(1) ミリメートル(mm) と センチメートル(cm)", 
                                        content: `
                                            <h4>小さな 長さを はかろう</h4>
                                            <p>1cmを 10こに 分けた 一つ分を <b>1mm（ミリメートル）</b> と いいます。</p>
                                            <div class="measure-demo">
                                                <div class="ruler-small">
                                                    <div class="scale-mm"></div>
                                                    <div class="pointer-mm">⬇️ 1mm</div>
                                                </div>
                                            </div>
                                            <div class='point-box'><b>1cm ＝ 10mm</b> だよ。 消しゴムや 鉛筆（えんぴつ）の 先（さき）を はかるときに つかおう！</div>
                                        ` 
                                    },
                                    { 
                                        title: "(2) メートル(m)", 
                                        content: `
                                            <h4>大きな 長さを はかろう</h4>
                                            <p>100cmを まとめて <b>1m（メートル）</b> と いいます。</p>
                                            <div class="measure-demo">
                                                <div class="m-visual">📏 100cm ➔ 1m</div>
                                            </div>
                                            <p>両手を 広げたくらいの 長さが、だいたい 1mだよ。</p>
                                            <div class='point-box'><b>1m ＝ 100cm</b> だよ。 教室（きょうしつ）の はばや、廊下（ろうか）の 長さを はかるときに べんりだね。</div>
                                        ` 
                                    }
                                ]
                            },
                            { 
                                title: "2. かさの たんい", 
                                subUnits: [
                                    { 
                                        title: "(1) L, dL, mL の 関係", 
                                        content: `
                                            <h4>水の かさを はかろう</h4>
                                            <p>入れ物に 入る 水の量を <b>「かさ」</b> と いいます。</p>
                                            <ul class="clock-list">
                                                <li><b>L（リットル）</b>：大きな 牛乳（ぎゅうにゅう）パックくらい。</li>
                                                <li><b>dL（デシリットル）</b>：1Lを 10こに 分けた 一つ分。</li>
                                                <li><b>mL（ミリリットル）</b>：とても 小さな 量（りょう）。</li>
                                            </ul>
                                            <div class="measure-demo">
                                                <div class="cup-visual">1L ＝ 10dL ＝ 1000mL</div>
                                            </div>
                                            <div class='point-box'>1Lますの 目盛りを よく 見て、どれくらい 入っているか 確かめよう。</div>
                                        ` 
                                    }
                                ]
                            },
                            { 
                                title: "3. どちらの たんいを つかう？", 
                                subUnits: [
                                    { 
                                        title: "(1) ぴったりの たんいを 選（えら）ぼう", 
                                        content: `
                                            <h4>はかる ものに あわせて</h4>
                                            <p>はかる ものによって、 単位（たんい）を 使い分けます。</p>
                                            <div class="unit-choice">
                                                <div>🍎 ノートの はば ➔ <b>cm</b></div>
                                                <div>🏫 教科書（きょうかしょ）の 厚（あつ）み ➔ <b>mm</b></div>
                                                <div>🏟️ 運動場（うんどうじょう）の 長さ ➔ <b>m</b></div>
                                            </div>
                                            <h4>見当（けんとう）を つけよう</h4>
                                            <p>「つくえの 横は だいたい 60cmくらいかな？」と 予想（よそう）してから はかると、 単位の センスが よく なるよ！</p>
                                        ` 
                                    }
                                ]
                            },
                            { 
                                title: "4. 単位（たんい）の へんかん", 
                                subUnits: [
                                    { 
                                        title: "(1) 長さの 書きかえ", 
                                        content: `
                                            <h4>ちがう 単位（たんい）に なおそう</h4>
                                            <div class="calc-demo">
                                                1cm ➔ <b>10mm</b><br>
                                                1m ➔ <b>100cm</b>
                                            </div>
                                            <h4>まざった 長さ</h4>
                                            <div class="calc-demo">
                                                1cm 5mm ➔ <b>15mm</b><br>
                                                2m 30cm ➔ <b>230cm</b>
                                            </div>
                                            <div class='point-box'>10mm あつまると 1cm に なることを おぼえておこう！</div>
                                        ` 
                                    },
                                    { 
                                        title: "(2) かさの 書きかえ", 
                                        content: `
                                            <h4>水の 量（りょう）を なおそう</h4>
                                            <div class="calc-demo">
                                                1L ➔ <b>10dL</b><br>
                                                1dL ➔ <b>100mL</b><br>
                                                1L ➔ <b>1000mL</b>
                                            </div>
                                            <div class="calc-demo">
                                                1L 2dL ➔ <b>12dL</b><br>
                                                1dL 5mL ➔ <b>105mL</b>
                                            </div>
                                            <div class='point-box'>L（リットル）は とっても 大きな 単位なんだね。</div>
                                        ` 
                                    }
                                ]
                            },
                            { 
                                title: "5. 時間（じかん）の たんい", 
                                subUnits: [
                                    { 
                                        title: "(1) 秒（びょう）・分（ふん）・時間（じかん）・日（にち）", 
                                        content: `
                                            <h4>時間の 長さを しろう</h4>
                                            <div class="calc-demo">
                                                1分 ＝ <b>60秒</b><br>
                                                1時間 ＝ <b>60分</b><br>
                                                1日 ＝ <b>24時間</b>
                                            </div>
                                            <p>1から 60まで 数えると、 つぎの 単位に うつるよ。 これを <b>「60進法（ろくじゅっしんほう）」</b> と いいます。</p>
                                            <p>1日は、 12時間ずつの 「午前」と 「午後」を あわせた 長さだね。</p>
                                            <div class='point-box'>時計の 短い針（はり）が <b>ぐるっと 2まわり</b> すると ぴったり 1日だよ。</div>
                                        ` 
                                    },
                                    { 
                                        title: "(2) 午前（ごぜん）と 午後（ごご）", 
                                        content: `
                                            <h4>12時間（じゅうにじかん）ずつ</h4>
                                            <p>24時間を 半分（はんぶん）ずつに わけて よびます。</p>
                                            <ul class="pos-list">
                                                <li><b>午前</b>：よる中の 0時から、 お昼の 12時まで</li>
                                                <li><b>午後</b>：お昼の 12時から、 よる中の 12時（24時）まで</li>
                                            </ul>
                                            <h4>24時間（じかん）で いうと？</h4>
                                            <p>午後の 時間は、 12を たして いうことが あります。</p>
                                            <div class="unit-choice">
                                                <div>☀️ 午後 1時 ➔ <b>13時</b> (12+1)</div>
                                                <div>🌙 午後 8時 ➔ <b>20時</b> (12+8)</div>
                                                <div>🕛 よるの 12時 ➔ <b>24時</b> (12+12)</div>
                                            </div>
                                            <div class='point-box'>お昼の 12時は <b>「正午（しょうご）」</b>。 よる中の 12時は <b>「0時」</b> や <b>「24時」</b> と よぶよ。</div>
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
                                title: "1. 分（わ）けよう", 
                                subUnits: [
                                    { 
                                        title: "(1) どうぶつを あつめて 観察（かんさつ）しよう", 
                                        content: `
                                            <h4>みんなで どうぶつを 書（か）こう</h4>
                                            <p>周（まわ）りの 人（ひと）に どうぶつの 絵（え）を 書（か）いて もらいましょう。 <b>自分（じぶん）</b> でも 書（か）いて、 たくさん あつめます。</p>
                                            <div class="data-demo">
                                                <div class="animal-grid">
                                                    🐘 🦒 🦅 🐳 🐕 🐈 🐧 🐜 🦋 🦈
                                                </div>
                                            </div>
                                            <p>あつまった どうぶつたちを、 じっくり 見（み）てみましょう。 似（に）ている ところや、 ちがう ところは どこかな？</p>
                                        ` 
                                    },
                                    { 
                                        title: "(2) 分（わ）け方を かんがえてみよう！", 
                                        content: `
                                            <h4>どんな ルールなら 分（わ）けられる？</h4>
                                            <p>「どういう 風（ふう）に 分（わ）けたら わかりやすいかな？」と、 <b>分（わ）け方の ルール</b> を 自分（じぶん）たちで かんがえてみましょう。</p>
                                            
                                            <div class="thinking-box">
                                                <p>💡 <b>たとえば こんな ルールは どうかな？</b></p>
                                                <ul>
                                                    <li>住（す）んでいる 場所（ばしょ）で 分（わ）ける？ （海・空・陸 など）</li>
                                                    <li>からだの 大きさで 分（わ）ける？ （大・中・小 など）</li>
                                                    <li>足（あし）の 数（かず）で 分（わ）ける？</li>
                                                    <li>食べ物（たべもの）で 分（わ）ける？</li>
                                                </ul>
                                            </div>
                                            
                                            <p>同（おな）じ どうぶつたちでも、 ルールを かえると 分（わ）け方も かわるよ。 <b>「自分（じぶん）だけの 分（わ）け方」</b> を みつけてみよう！</p>
                                            <div class='point-box'>きみなら、 どんな <b>「わけかたの ルール」</b> を みつけるかな？ ほかに おもしろい わけかたが あったら おしえてね！</div>
                                        ` 
                                    },
                                    { 
                                        title: "(3) 大きさで 分（わ）けてみよう", 
                                        content: `
                                            <h4>サイズで 分（わ）ける</h4>
                                            <p>こんどは、 「からだの 大きさ」で なかま分けを してみましょう。</p>
                                            <div class="data-demo">
                                                <div class="size-sort">
                                                    <div class="size-group">
                                                        <span class="label">大（だい）</span>
                                                        <span class="items">🐘 🐳 🦒</span>
                                                    </div>
                                                    <div class="size-group">
                                                        <span class="label">中（ちゅう）</span>
                                                        <span class="items">🐕 🐈 🦅 🐧</span>
                                                    </div>
                                                    <div class="size-group">
                                                        <span class="label">小（しょう）</span>
                                                        <span class="items">🐜 🦋</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class='point-box'>分（わ）け方は 一つじゃありません。 自分で 決（き）めた ルールで 整理（せいり）して みよう！</div>
                                        ` 
                                    }
                                ]
                            }
                        ] 
                    }
                ]
            }
        }
    },
    japanese: {
        name: "<ruby>国語<rt>こくご</rt></ruby>",
        grades: {}
    },
    science: {
        name: "<ruby>理科<rt>りか</rt></ruby>",
        grades: {}
    },
    social: {
        name: "<ruby>社会<rt>しゃかい</rt></ruby>",
        grades: {}
    },
    english: {
        name: "<ruby>英語<rt>えいご</rt></ruby>",
        grades: {}
    }
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

// パンくずリストを更新する関数
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
    updateBreadcrumb([
        { label: rubyHome, action: showHome },
        { label: subjectData.name }
    ]);
    showView('grade-view');
}

function showCategories() {
    const subjectData = studyData[currentSubject];
    const gradeData = subjectData.grades[currentGrade];
    selectedGradeName.innerHTML = `${subjectData.name} (${gradeData.name})`;
    
    updateBreadcrumb([
        { label: rubyHome, action: showHome },
        { label: subjectData.name, action: showGrades },
        { label: gradeData.name }
    ]);

    categoryList.innerHTML = '';
    gradeData.categories.forEach((cat, index) => {
        const div = document.createElement('div');
        div.className = 'material-item';
        div.innerHTML = `<span>${cat.name}</span> <span>➔</span>`;
        div.addEventListener('click', () => showUnits(index));
        categoryList.appendChild(div);
    });
    showView('category-view');
}

function showView(viewId) {
    [homeView, gradeView, categoryView, unitView, subUnitView, contentView].forEach(view => {
        if (view) view.classList.add('hidden');
    });
    document.getElementById(viewId).classList.remove('hidden');
    window.scrollTo(0, 0);
}

homeBtn.addEventListener('click', showHome);

// 教科選択 -> 学年選択
document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
        currentSubject = card.dataset.subject;
        showGrades();
    });
});

// 学年選択 -> カテゴリ選択
document.querySelectorAll('.grade-card').forEach(card => {
    card.addEventListener('click', () => {
        currentGrade = card.dataset.grade;
        const subjectData = studyData[currentSubject];
        const gradeData = subjectData.grades[currentGrade];
        
        if (!gradeData) {
            alert('準備中です');
            return;
        }
        showCategories();
    });
});

// カテゴリ選択 -> 単元選択
function showUnits(index) {
    currentCategoryIndex = index;
    const subjectData = studyData[currentSubject];
    const gradeData = subjectData.grades[currentGrade];
    const category = gradeData.categories[index];

    selectedCategoryName.innerHTML = category.name;
    updateBreadcrumb([
        { label: rubyHome, action: showHome },
        { label: subjectData.name, action: showGrades },
        { label: gradeData.name, action: showCategories },
        { label: category.name }
    ]);

    unitList.innerHTML = '';
    category.units.forEach((unit, uIdx) => {
        const div = document.createElement('div');
        div.className = 'material-item';
        div.innerHTML = `<span>${unit.title}</span> <span>➔</span>`;
        div.addEventListener('click', () => showSubUnits(uIdx));
        unitList.appendChild(div);
    });

    showView('unit-view');
}

// 単元選択 -> 項目選択
function showSubUnits(uIdx) {
    currentUnitIndex = uIdx;
    const subjectData = studyData[currentSubject];
    const gradeData = subjectData.grades[currentGrade];
    const category = gradeData.categories[currentCategoryIndex];
    const unit = category.units[uIdx];

    selectedUnitName.innerHTML = unit.title;
    updateBreadcrumb([
        { label: rubyHome, action: showHome },
        { label: subjectData.name, action: showGrades },
        { label: gradeData.name, action: showCategories },
        { label: category.name, action: () => showUnits(currentCategoryIndex) },
        { label: unit.title }
    ]);

    subUnitList.innerHTML = '';
    unit.subUnits.forEach(sub => {
        const div = document.createElement('div');
        div.className = 'material-item';
        div.innerHTML = `<span>${sub.title}</span> <span>➔</span>`;
        div.addEventListener('click', () => showContent(sub));
        subUnitList.appendChild(div);
    });

    showView('sub-unit-view');
}

// 項目選択 -> 解説表示
function showContent(sub) {
    const subjectData = studyData[currentSubject];
    const gradeData = subjectData.grades[currentGrade];
    const category = gradeData.categories[currentCategoryIndex];
    const unit = category.units[currentUnitIndex];

    contentTitle.innerHTML = sub.title;
    contentBody.innerHTML = sub.content;
    
    updateBreadcrumb([
        { label: rubyHome, action: showHome },
        { label: subjectData.name, action: showGrades },
        { label: gradeData.name, action: showCategories },
        { label: category.name, action: () => showUnits(currentCategoryIndex) },
        { label: unit.title, action: () => showSubUnits(currentUnitIndex) },
        { label: sub.title }
    ]);
    
    showView('content-view');
}

// 戻るボタン
backToHomeBtn.addEventListener('click', showHome);
backToGradeBtn.addEventListener('click', showGrades);
backToCategoryBtn.addEventListener('click', showCategories);
backToUnitBtn.addEventListener('click', () => showUnits(currentCategoryIndex));
backToSubUnitBtn.addEventListener('click', () => showSubUnits(currentUnitIndex));
