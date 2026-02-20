// 学習教材のデータ定義
const studyData = {
    japanese: {
        name: "国語",
        materials: [
            { id: "j1", title: "枕草子の世界", content: "<h4>清少納言の感性</h4>「春はあけぼの」から始まる随筆です。四季の最も美しい瞬間を切り取った描写が特徴です。<div class='point-box'><strong>ポイント:</strong> をかし（趣がある）という美意識を理解しましょう。</div>" },
            { id: "j2", title: "助動詞の活用", content: "<h4>古典文法の基礎</h4>助動詞「き」「けり」は過去を表しますが、そのニュアンスの違いに注目しましょう。<div class='point-box'><strong>ポイント:</strong> 「き」は直接体験、「けり」は伝聞・詠嘆。</div>" }
        ]
    },
    math: {
        name: "数学",
        materials: [
            { id: "m1", title: "二次関数のグラフ", content: "<h4>y = ax^2 + bx + c</h4>頂点の座標を求めるには平方完成が必要です。<div class='point-box'><strong>ポイント:</strong> a > 0 なら下に凸、a < 0 なら上に凸のグラフになります。</div>" },
            { id: "m2", title: "三平方の定理", content: "<h4>a^2 + b^2 = c^2</h4>直角三角形の斜辺の長さの2乗は、他の2辺の長さの2乗の和に等しい。<div class='point-box'><strong>ポイント:</strong> 3:4:5 や 5:12:13 などの比を覚えておくと便利です。</div>" }
        ]
    },
    science: {
        name: "理科",
        materials: [
            { id: "sc1", title: "光の屈折", content: "<h4>屈折の法則</h4>光が異なる物質（空気から水など）へ進むとき、境界で折れ曲がる現象です。<div class='point-box'><strong>ポイント:</strong> 入射角と屈折角の関係をマスターしましょう。</div>" },
            { id: "sc2", title: "原子と分子", content: "<h4>物質の成り立ち</h4>物質を細かく分けると、それ以上分けられない「原子」にたどり着きます。<div class='point-box'><strong>ポイント:</strong> H2O（水）は、水素原子2つと酸素原子1つでできています。</div>" }
        ]
    },
    social: {
        name: "社会",
        materials: [
            { id: "so1", title: "鎌倉幕府の成立", content: "<h4>1185年 源頼朝</h4>日本で最初の本格的な武家政権の誕生です。<div class='point-box'><strong>ポイント:</strong> 「いい箱（1185）作ろう鎌倉幕府」と覚えましょう。</div>" },
            { id: "so2", title: "世界の気候区分", content: "<h4>ケッペンの気候区分</h4>熱帯、乾燥帯、温帯、亜寒帯、寒帯の5つに大きく分けられます。<div class='point-box'><strong>ポイント:</strong> 降水量と気温で分類されます。</div>" }
        ]
    },
    english: {
        name: "英語",
        materials: [
            { id: "e1", title: "現在完了形", content: "<h4>have + 過去分詞</h4>「継続」「完了」「経験」の3つの意味を持ちます。<div class='point-box'><strong>ポイント:</strong> just（たった今）, for（〜の間）, since（〜から）などのキーワードに注目！</div>" },
            { id: "e2", title: "関係代名詞", content: "<h4>who / which / that</h4>前の名詞（先行詞）を後ろから説明するための言葉です。<div class='point-box'><strong>ポイント:</strong> 説明したい対象が「人」か「物」かで使い分けます。</div>" }
        ]
    }
};

// DOM要素の取得
const homeView = document.getElementById('home-view');
const listView = document.getElementById('list-view');
const contentView = document.getElementById('content-view');
const materialList = document.getElementById('material-list');
const selectedSubjectName = document.getElementById('selected-subject-name');
const contentTitle = document.getElementById('content-title');
const contentBody = document.getElementById('content-body');
const breadcrumb = document.getElementById('breadcrumb');
const homeBtn = document.getElementById('home-btn');

let currentSubject = '';

// 画面遷移の関数
function showView(viewId) {
    [homeView, listView, contentView].forEach(view => {
        view.classList.add('hidden');
    });
    document.getElementById(viewId).classList.remove('hidden');
    window.scrollTo(0, 0);
}

// ホームに戻る
homeBtn.addEventListener('click', () => {
    breadcrumb.textContent = 'ホーム';
    showView('home-view');
});

// 教科選択時の処理
document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
        const subjectKey = card.dataset.subject;
        const data = studyData[subjectKey];
        currentSubject = subjectKey;

        selectedSubjectName.textContent = data.name;
        breadcrumb.textContent = `ホーム > ${data.name}`;

        // リストを生成
        materialList.innerHTML = '';
        data.materials.forEach(item => {
            const div = document.createElement('div');
            div.className = 'material-item';
            div.innerHTML = `<span>${item.title}</span> <span>➔</span>`;
            div.addEventListener('click', () => showContent(item));
            materialList.appendChild(div);
        });

        showView('list-view');
    });
});

// 解説表示
function showContent(item) {
    contentTitle.textContent = item.title;
    contentBody.innerHTML = item.content;
    breadcrumb.textContent = `ホーム > ${studyData[currentSubject].name} > ${item.title}`;
    showView('content-view');
}

// 戻るボタンの制御
document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id === 'back-to-list-btn') {
            breadcrumb.textContent = `ホーム > ${studyData[currentSubject].name}`;
            showView('list-view');
        } else {
            breadcrumb.textContent = 'ホーム';
            showView('home-view');
        }
    });
});
