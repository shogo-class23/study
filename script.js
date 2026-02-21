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
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [] },
                    { name: "3 <ruby>測定<rt>そくてい</rt></ruby>と<ruby>関数<rt>かんすう</rt></ruby>", units: [] },
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
