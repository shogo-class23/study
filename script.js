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
                                            <h4>大きな 数の たしざん</h4>
                                            <div class="calc-demo">
                                                10 ＋ 3 ＝ 13<br>
                                                20 ＋ 30 ＝ 50<br>
                                                42 ＋ 5 ＝ 47
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
                                            <div class='point-box'>10が 10こ あつまると <b>「100（ひゃく）」</b> に なるよした。</div>
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
                                                50 － 20 ＝ 30<br>
                                                88 － 8 ＝ 80
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
                                            </div>
                                            <div class='point-box'>まわりの ものが、どの かたちに にているか さがしてみよう！</div>
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
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [{ title: "ながさくらべ", subUnits: [{ title: "ながさのひかく", content: "どちらが長いかな？" }] }] },
                    { name: "4 <ruby>データ<rt>でーた</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", units: [{ title: "グラフをつくろう", subUnits: [{ title: "果物のグラフ", content: "好きな果物を数えよう。" }] }] }
                ]
            }
        }
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

function showView(viewId) {
    [homeView, gradeView, categoryView, unitView, subUnitView, contentView].forEach(view => {
        if (view) view.classList.add('hidden');
    });
    document.getElementById(viewId).classList.remove('hidden');
    window.scrollTo(0, 0);
}

homeBtn.addEventListener('click', () => {
    breadcrumb.innerHTML = rubyHome;
    showView('home-view');
});

// 教科選択 -> 学年選択
document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
        currentSubject = card.dataset.subject;
        const subjectData = studyData[currentSubject];
        breadcrumb.innerHTML = `${rubyHome} > ${subjectData.name}`;
        showView('grade-view');
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

        selectedGradeName.innerHTML = `${subjectData.name} (${gradeData.name})`;
        breadcrumb.innerHTML = `${rubyHome} > ${subjectData.name} > ${gradeData.name}`;

        categoryList.innerHTML = '';
        gradeData.categories.forEach((cat, index) => {
            const div = document.createElement('div');
            div.className = 'material-item';
            div.innerHTML = `<span>${cat.name}</span> <span>➔</span>`;
            div.addEventListener('click', () => showUnits(index));
            categoryList.appendChild(div);
        });

        showView('category-view');
    });
});

// カテゴリ選択 -> 単元選択
function showUnits(index) {
    currentCategoryIndex = index;
    const subjectData = studyData[currentSubject];
    const gradeData = subjectData.grades[currentGrade];
    const category = gradeData.categories[index];

    selectedCategoryName.innerHTML = category.name;
    breadcrumb.innerHTML = `${rubyHome} > ${subjectData.name} > ${gradeData.name} > ${category.name}`;

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
    breadcrumb.innerHTML = `${rubyHome} > ${subjectData.name} > ${gradeData.name} > ${category.name} > ${unit.title}`;

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
    breadcrumb.innerHTML = `${rubyHome} > ${subjectData.name} > ${gradeData.name} > ${category.name} > ${unit.title} > ${sub.title}`;
    showView('content-view');
}

// 戻るボタン
backToHomeBtn.addEventListener('click', () => {
    breadcrumb.innerHTML = rubyHome;
    showView('home-view');
});

backToGradeBtn.addEventListener('click', () => {
    breadcrumb.innerHTML = `${rubyHome} > ${studyData[currentSubject].name}`;
    showView('grade-view');
});

backToCategoryBtn.addEventListener('click', () => {
    const gradeData = studyData[currentSubject].grades[currentGrade];
    breadcrumb.innerHTML = `${rubyHome} > ${studyData[currentSubject].name} > ${gradeData.name}`;
    showView('category-view');
});

backToUnitBtn.addEventListener('click', () => {
    const gradeData = studyData[currentSubject].grades[currentGrade];
    const category = gradeData.categories[currentCategoryIndex];
    breadcrumb.innerHTML = `${rubyHome} > ${studyData[currentSubject].name} > ${gradeData.name} > ${category.name}`;
    showView('unit-view');
});

backToSubUnitBtn.addEventListener('click', () => {
    const gradeData = studyData[currentSubject].grades[currentGrade];
    const category = gradeData.categories[currentCategoryIndex];
    const unit = category.units[currentUnitIndex];
    breadcrumb.innerHTML = `${rubyHome} > ${studyData[currentSubject].name} > ${gradeData.name} > ${category.name} > ${unit.title}`;
    showView('sub-unit-view');
});
