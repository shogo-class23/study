// 学習教材のデータ定義
const studyData = {
    japanese: {
        name: "<ruby>国語<rt>こくご</rt></ruby>",
        materials: [
            { 
                id: "j1", 
                title: "<ruby>枕草子<rt>まくらのそうし</rt></ruby>の<ruby>世界<rt>せかい</rt></ruby>", 
                content: "<h4><ruby>清少納言<rt>せいしょうなごん</rt></ruby>の<ruby>感性<rt>かんせい</rt></ruby></h4>「<ruby>春<rt>はる</rt></ruby>はあけぼの」から<ruby>始<rt>はじ</rt></ruby>まる<ruby>随筆<rt>ずいひつ</rt></ruby>です。<ruby>四季<rt>しき</rt></ruby>の<ruby>最<rt>もっと</rt></ruby>も<ruby>美<rt>うつく</rt></ruby>しい<ruby>瞬間<rt>しゅんかん</rt></ruby>を<ruby>切<rt>き</rt></ruby>り<ruby>取<rt>と</rt></ruby>った<ruby>描写<rt>びょうしゃ</rt></ruby>が<ruby>特徴<rt>とくちょう</rt></ruby>です。<div class='point-box'><strong>ポイント:</strong> をかし（<ruby>趣<rt>おもむき</rt></ruby>がある）という<ruby>美意識<rt>びいしき</rt></ruby>を<ruby>理解<rt>りかい</rt></ruby>しましょう。</div>" 
            },
            { 
                id: "j2", 
                title: "<ruby>助動詞<rt>じょどうし</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>", 
                content: "<h4><ruby>古典文法<rt>こてんぶんぽう</rt></ruby>の<ruby>基礎<rt>きそ</rt></ruby></h4><ruby>助動詞<rt>じょどうし</rt></ruby>「き」「けり」は<ruby>過去<rt>かこ</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>しますが、そのニュアンスの<ruby>違<rt>ちが</rt></ruby>いに<ruby>注目<rt>ちゅうもく</rt></ruby>しましょう。<div class='point-box'><strong>ポイント:</strong> 「き」は<ruby>直接体験<rt>ちょくせつたいけん</rt></ruby>、「けり」は<ruby>伝聞<rt>でんぶん</rt></ruby>・<ruby>詠嘆<rt>えいたん</rt></ruby>。</div>" 
            }
        ]
    },
    math: {
        name: "<ruby>算数<rt>さんすう</rt></ruby>・<ruby>数学<rt>すうがく</rt></ruby>",
        materials: [
            { 
                id: "m1", 
                title: "<ruby>二次関数<rt>にじかんすう</rt></ruby>のグラフ", 
                content: "<h4>y = ax^2 + bx + c</h4><ruby>頂点<rt>ちょうてん</rt></ruby>の<ruby>座標<rt>ざひょう</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めるには<ruby>平方完成<rt>へいほうかんせい</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>です。<div class='point-box'><strong>ポイント:</strong> a > 0 なら<ruby>下<rt>した</rt></ruby>に<ruby>凸<rt>とつ</rt></ruby>、a < 0 なら<ruby>上<rt>うえ</rt></ruby>に<ruby>凸<rt>とつ</rt></ruby>のグラフになります。</div>" 
            },
            { 
                id: "m2", 
                title: "<ruby>三平方<rt>さんへいほう</rt></ruby>の<ruby>定理<rt>ていり</rt></ruby>", 
                content: "<h4>a^2 + b^2 = c^2</h4><ruby>直角三角形<rt>ちょっかくさんかっけい</rt></ruby>の<ruby>斜辺<rt>しゃへん</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さの2<ruby>乗<rt>じょう</rt></ruby>は、<ruby>他<rt>ほか</rt></ruby>の2<ruby>辺<rt>へん</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さの2<ruby>乗<rt>じょう</rt></ruby>の<ruby>和<rt>わ</rt></ruby>に<ruby>等<rt>ひと</rt></ruby>しい。<div class='point-box'><strong>ポイント:</strong> 3:4:5 や 5:12:13 などの<ruby>比<rt>ひ</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えておくと<ruby>便利<rt>べんり</rt></ruby>です。</div>" 
            }
        ]
    },
    science: {
        name: "<ruby>理科<rt>りか</rt></ruby>",
        materials: [
            { 
                id: "sc1", 
                title: "<ruby>光<rt>ひかり</rt></ruby>の<ruby>屈折<rt>くっせつ</rt></ruby>", 
                content: "<h4><ruby>屈折<rt>くっせつ</rt></ruby>の<ruby>法則<rt>ほうそく</rt></ruby></h4><ruby>光<rt>ひかり</rt></ruby>が<ruby>異<rt>こと</rt></ruby>なる<ruby>物質<rt>ぶっしつ</rt></ruby>（<ruby>空気<rt>くうき</rt></ruby>から<ruby>水<rt>みず</rt></ruby>など）へ<ruby>進<rt>すす</rt></ruby>むとき、<ruby>境界<rt>きょうかい</rt></ruby>で<ruby>折<rt>お</rt></ruby>れ<ruby>曲<rt>ま</rt></ruby>がる<ruby>現象<rt>げんしょう</rt></ruby>です。<div class='point-box'><strong>ポイント:</strong> <ruby>入射角<rt>にゅうしゃかく</rt></ruby>と<ruby>屈折角<rt>くっせつかく</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>をマスターしましょう。</div>" 
            },
            { 
                id: "sc2", 
                title: "<ruby>原子<rt>げんし</rt></ruby>と<ruby>分子<rt>ぶんし</rt></ruby>", 
                content: "<h4><ruby>物質<rt>ぶっしつ</rt></ruby>の<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>ち</h4><ruby>物質<rt>ぶっしつ</rt></ruby>を<ruby>細<rt>こま</rt></ruby>かく<ruby>分<rt>わ</rt></ruby>けると、それ<ruby>以上分<rt>いじょうわ</rt></ruby>けられない「<ruby>原子<rt>げんし</rt></ruby>」にたどり<ruby>着<rt>つ</rt></ruby>きます。<div class='point-box'><strong>ポイント:</strong> H2O（<ruby>水<rt>みず</rt></ruby>）は、<ruby>水素原子<rt>すいそげんし</rt></ruby>2つと<ruby>酸素原子<rt>さんそげんし</rt></ruby>1つでできています。</div>" 
            }
        ]
    },
    social: {
        name: "<ruby>社会<rt>しゃかい</rt></ruby>",
        materials: [
            { 
                id: "so1", 
                title: "<ruby>鎌倉幕府<rt>かまくらばくふ</rt></ruby>の<ruby>成立<rt>せいりつ</rt></ruby>", 
                content: "<h4>1185<ruby>年<rt>ねん</rt></ruby> <ruby>源頼朝<rt>みなもとのよりとも</rt></ruby></h4><ruby>日本<rt>にっぽん</rt></ruby>で<ruby>最初<rt>さいしょ</rt></ruby>の<ruby>本格的<rt>ほんかくてき</rt></ruby>な<ruby>武家政権<rt>ぶけせいけん</rt></ruby>の<ruby>誕生<rt>たんじょう</rt></ruby>です。<div class='point-box'><strong>ポイント:</strong> 「いい<ruby>箱<rt>はこ</rt></ruby>（1185）<ruby>作<rt>つく</rt></ruby>ろう<ruby>鎌倉幕府<rt>かまくらばくふ</rt></ruby>」と<ruby>覚<rt>おぼ</rt></ruby>えましょう。</div>" 
            },
            { 
                id: "so2", 
                title: "<ruby>世界<rt>せかい</rt></ruby>の<ruby>気候区分<rt>きこうくぶん</rt></ruby>", 
                content: "<h4>ケッペンの<ruby>気候区分<rt>きこうくぶん</rt></ruby></h4><ruby>熱帯<rt>ねったい</rt></ruby>、<ruby>乾燥帯<rt>かんそうたい</rt></ruby>、<ruby>温帯<rt>おんたい</rt></ruby>、<ruby>亜寒帯<rt>あかんたい</rt></ruby>、<ruby>寒帯<rt>かんたい</rt></ruby>の5つに<ruby>大<rt>おお</rt></ruby>きく<ruby>分<rt>わ</rt></ruby>けられます。<div class='point-box'><strong>ポイント:</strong> <ruby>降水量<rt>こうすいりょう</rt></ruby>と<ruby>気温<rt>きおん</rt></ruby>で<ruby>分類<rt>ぶんるい</rt></ruby>されます。</div>" 
            }
        ]
    },
    english: {
        name: "<ruby>英語<rt>えいご</rt></ruby>",
        materials: [
            { 
                id: "e1", 
                title: "<ruby>現在完了形<rt>げんざいかんりょうけい</rt></ruby>", 
                content: "<h4>have + <ruby>過去分詞<rt>かこぶんし</rt></ruby></h4>「<ruby>継続<rt>けいぞく</rt></ruby>」「<ruby>完了<rt>かんりょう</rt></ruby>」「<ruby>経験<rt>けいけん</rt></ruby>」の3つの<ruby>意味<rt>いみ</rt></ruby>を<ruby>持<rt>も</rt></ruby>ちます。<div class='point-box'><strong>ポイント:</strong> just（たった<ruby>今<rt>いま</rt></ruby>）, for（〜の<ruby>間<rt>あいだ</rt></ruby>）, since（〜から）などのキーワードに<ruby>注目<rt>ちゅうもく</rt></ruby>！</div>" 
            },
            { 
                id: "e2", 
                title: "<ruby>関係代名詞<rt>かんけいだいめいし</rt></ruby>", 
                content: "<h4>who / which / that</h4><ruby>前<rt>まえ</rt></ruby>の<ruby>名詞<rt>めいし</rt></ruby>（<ruby>先行詞<rt>せんこうし</rt></ruby>）を<ruby>後<rt>うし</rt></ruby>ろから<ruby>説明<rt>せつめい</rt></ruby>するための<ruby>言葉<rt>ことば</rt></ruby>です。<div class='point-box'><strong>ポイント:</strong> <ruby>説明<rt>せつめい</rt></ruby>したい<ruby>対象<rt>たいしょう</rt></ruby>が「<ruby>人<rt>ひと</rt></ruby>」か「<ruby>物<rt>もの</rt></ruby>」かで<ruby>使<rt>つか</rt></ruby>い<ruby>分<rt>わ</rt></ruby>けます。</div>" 
            }
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
    breadcrumb.innerHTML = '<ruby>ホーム<rt>ほーむ</rt></ruby>';
    showView('home-view');
});

// 教科選択時の処理
document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
        const subjectKey = card.dataset.subject;
        const data = studyData[subjectKey];
        currentSubject = subjectKey;

        selectedSubjectName.innerHTML = data.name;
        breadcrumb.innerHTML = `<ruby>ホーム<rt>ほーむ</rt></ruby> > ${data.name}`;

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
    contentTitle.innerHTML = item.title;
    contentBody.innerHTML = item.content;
    breadcrumb.innerHTML = `<ruby>ホーム<rt>ほーむ</rt></ruby> > ${studyData[currentSubject].name} > ${item.title}`;
    showView('content-view');
}

// 戻るボタンの制御
document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id === 'back-to-list-btn') {
            breadcrumb.innerHTML = `<ruby>ホーム<rt>ほーむ</rt></ruby> > ${studyData[currentSubject].name}`;
            showView('list-view');
        } else {
            breadcrumb.innerHTML = '<ruby>ホーム<rt>ほーむ</rt></ruby>';
            showView('home-view');
        }
    });
});
