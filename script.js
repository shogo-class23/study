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
                                        content: "<h4>木と車の数をくらべよう</h4><ruby>木<rt>き</rt></ruby>が5本、<ruby>車<rt>くるま</rt></ruby>が6台あります。木と車を<ruby>線<rt>せん</rt></ruby>でつないでみましょう。<div class='point-box'>つないでいくと、車が1台あまりますね。これで「車が1つ<ruby>多<rt>おお</rt></ruby>い」ことがわかります。</div>" 
                                    },
                                    { 
                                        title: "(2) <ruby>順番<rt>じゅんばん</rt></ruby>を<ruby>数<rt>かぞ</rt></ruby>えてみよう", 
                                        content: "<h4>1から9までかぞえよう</h4>さいしょは「1」で、さいご（1けたのさいご）は「9」です。じゅんばんにならべて数えられるようにしましょう。<div class='point-box'>外を走っている車の数を数えてみよう。車が1台もいないときは、数字で「0（れい・ぜろ）」と書きます。</div>" 
                                    },
                                    { 
                                        title: "(3) どっちが<ruby>大<rt>おお</rt></ruby>きい？どっちが<ruby>小<rt>ちい</rt></ruby>さい？", 
                                        content: "<h4>車の数でくらべよう</h4>「1」と「4」では、どちらが大きいかな？<br>車の数をならべてみると、4台のほうが多いことがわかります。<div class='point-box'>「9」の次が「10」になることも、あわせておぼえましょう。</div>" 
                                    },
                                    { 
                                        title: "(4) <ruby>順番<rt>じゅんばん</rt></ruby>と<ruby>数直線<rt>すうちょくせん</rt></ruby>", 
                                        content: "<h4>0から直線をひこう</h4>「0」からじゅんばんに「1, 2, 3...」と直線をかいてみましょう。<div class='point-box'>目もりの場所をみることで、どちらの数が大きいかひとめでわかります。</div>" 
                                    },
                                    { 
                                        title: "(5) 2<ruby>位数<rt>いすう</rt></ruby>と3<ruby>位数<rt>いすう</rt></ruby>の<ruby>表<rt>あらわ</rt></ruby>し<ruby>方<rt>かた</rt></ruby>", 
                                        content: "<h4>くらいの見方</h4>例えば「43」という数は、十の位が4、一の位が3です。<div class='point-box'>これは「10が4個」と「1が3個」あつまったという意味です。ブロックなどを使って数の大きさを感じてみましょう。</div>" 
                                    },
                                    { 
                                        title: "(6) 10を<ruby>単位<rt>たんい</rt></ruby>とした<ruby>数<rt>かず</rt></ruby>の<ruby>見方<rt>みかた</rt></ruby>", 
                                        content: "<h4>10のまとまり</h4>「40は10が4個分」「60は10が6個分」というように、数の中に10のまとまりを見つけてみましょう。<div class='point-box'>10が何個あるかで、大きな数（何十）を表すことができます。</div>" 
                                    },
                                    { 
                                        title: "(7) まとめて<ruby>数<rt>かぞ</rt></ruby>えたり<ruby>等分<rt>とうぶん</rt></ruby>したり", 
                                        content: "<h4>いろいろなかぞえ方</h4>1, 2, 3...以外にも、「2ずつ」かぞえたり、「10ずつ」まとめて数えたりしてみましょう。<div class='point-box'>同じ数ずつ分ける（等分）ことも、かぞえ方のひみつです。</div>" 
                                    }
                                ]
                            },
                            { 
                                title: "2. <ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>", 
                                subUnits: [
                                    { 
                                        title: "(1) 1<ruby>位<rt>い</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>", 
                                        content: `
                                            <h4>① 1から9の たしざん</h4>
                                            1+1=2, 1+2=3, 1+3=4, 1+4=5, 1+5=6, 1+6=7, 1+7=8, 1+8=9, 1+9=10<br>
                                            2+1=3, 2+2=4, 2+3=5, 2+4=6, 2+5=7, 2+6=8, 2+7=9, 2+8=10, 2+9=11<br>
                                            3+1=4, 3+2=5, 3+3=6, 3+4=7, 3+5=8, 3+6=9, 3+7=10, 3+8=11, 3+9=12<br>
                                            4+1=5, 4+2=6, 4+3=7, 4+4=8, 4+5=9, 4+6=10, 4+7=11, 4+8=12, 4+9=13<br>
                                            5+1=6, 5+2=7, 5+3=8, 5+4=9, 5+5=10, 5+6=11, 5+7=12, 5+8=13, 5+9=14<br>
                                            6+1=7, 6+2=8, 6+3=9, 6+4=10, 6+5=11, 6+6=12, 6+7=13, 6+8=14, 6+9=15<br>
                                            7+1=8, 7+2=9, 7+3=10, 7+4=11, 7+5=12, 7+6=13, 7+7=14, 7+8=15, 7+9=16<br>
                                            8+1=9, 8+2=10, 8+3=11, 8+4=12, 8+5=13, 8+6=14, 8+7=15, 8+8=16, 8+9=17<br>
                                            9+1=10, 9+2=11, 9+3=12, 9+4=13, 9+5=14, 9+6=15, 9+7=16, 9+8=17, 9+9=18
                                            <h4>② 0をたそう</h4>
                                            0+0=0, 0+1=1, 0+2=2, 0+3=3, 0+4=4, 0+5=5, 0+6=6, 0+7=7, 0+8=8, 0+9=9<br>
                                            1+0=1, 2+0=2, 3+0=3, 4+0=4, 5+0=5, 6+0=6, 7+0=7, 8+0=8, 9+0=9
                                            <div class='point-box'>たした結果が「10」になる組み合わせをしっかり覚えよう！</div>
                                        `
                                    },
                                    { 
                                        title: "(2) 2<ruby>位<rt>い</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>", 
                                        content: `
                                            <h4>① 2けた ＋ 1けた</h4>
                                            10+1=11, 10+5=15, 10+9=19<br>
                                            20+3=23, 50+8=58, 80+2=82<br>
                                            15+4=19, 22+6=28, 43+5=48
                                            <h4>② 2けた ＋ 2けた</h4>
                                            10+10=20, 20+30=50, 40+40=80<br>
                                            12+13=25, 25+24=49, 51+32=83<br>
                                            60+39=99
                                            <h4>③ 「100」になる けいさん</h4>
                                            90+10=100, 80+20=100, 50+50=100<br>
                                            91+9=100, 95+5=100, 99+1=100
                                            <div class='point-box'>99のつぎは「100（ひゃく）」になります。10のまとまりが10こで100だね。</div>
                                        `
                                    }
                                ]
                            },
                            { 
                                title: "3. <ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>", 
                                subUnits: [
                                    { 
                                        title: "(1) 1<ruby>位<rt>い</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>", 
                                        content: `
                                            <h4>① 1から9の ひきざん</h4>
                                            1-1=0<br>
                                            2-2=0, 2-1=1<br>
                                            3-3=0, 3-2=1, 3-1=2<br>
                                            4-4=0, 4-3=1, 4-2=2, 4-1=3<br>
                                            5-5=0, 5-4=1, 5-3=2, 5-2=3, 5-1=4<br>
                                            6-6=0, 6-5=1, 6-4=2, 6-3=3, 6-2=4, 6-1=5<br>
                                            7-7=0, 7-6=1, 7-5=2, 7-4=3, 7-3=4, 7-2=5, 7-1=6<br>
                                            8-8=0, 8-7=1, 8-6=2, 8-5=3, 8-4=4, 8-3=5, 8-2=6, 8-1=7<br>
                                            9-9=0, 9-8=1, 9-7=2, 9-6=3, 9-5=4, 9-4=5, 9-3=6, 9-2=7, 9-1=8
                                            <h4>② 0をひこう・0からひこう</h4>
                                            0-0=0<br>
                                            1-0=1, 2-0=2, 3-0=3, 4-0=4, 5-0=5, 6-0=6, 7-0=7, 8-0=8, 9-0=9
                                            <div class='point-box'>同じ数から同じ数をひくと、のこりは「0」になります。</div>
                                        `
                                    },
                                    { 
                                        title: "(2) 2<ruby>位<rt>い</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>", 
                                        content: `
                                            <h4>① 2けた － 1けた</h4>
                                            15-3=12, 18-5=13, 19-9=10<br>
                                            25-4=21, 58-8=50, 82-2=80
                                            <h4>② 2けた － 2けた</h4>
                                            20-10=10, 50-30=20, 80-40=40<br>
                                            25-13=12, 49-24=25, 83-51=32<br>
                                            99-60=39
                                            <h4>③ 「100」から ひく けいさん</h4>
                                            100-10=90, 100-50=50, 100-90=10<br>
                                            100-1=99, 100-5=95, 100-100=0
                                            <div class='point-box'>100から引いたあとの数もイメージしてみよう！</div>
                                        `
                                    }
                                ]
                            }
                        ]
                    },
                    { name: "2 <ruby>図形<rt>ずけい</rt></ruby>", units: [{ title: "いろいろなかたち", subUnits: [{ title: "かたち探し", content: "まる、さんかく、しかく。" }] }] },
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
