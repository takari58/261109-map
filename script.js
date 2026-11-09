const spots = [
    {
        name: "新発田城跡",
        category: ["歴史", "写真", "芸術","街歩き"],
        people: ["一人","家族", "友達"],
        time: ["短時間", "半日", "1日"],
        score: {
            "歴史": 5,
            "自然": 3,
            "写真": 4,
            "グルメ": 1,
            "芸術": 4,
            "街歩き": 5
        },
        access: "新発田駅から徒歩またはあやめバスでアクセスできます。",
        description:"新発田市を代表する歴史スポット。入場無料で、お城や城門、三階櫓などを見ることができます。"
    },
    {
        name: "清水園",
        category: ["歴史", "自然", "写真","グルメ"],
        people: ["一人", "カップル", "家族", "友達"],
        time: ["短時間", "半日", "1日"],
        score: {
            "歴史": 5,
            "自然": 5,
            "写真": 4,
            "グルメ": 4,
            "芸術": 3,
            "街歩き": 2
        },
        access: "新発田駅から徒歩でアクセスできます。",
        description:"美しい日本庭園と歴史的な建物を楽しめる、新発田を代表する観光スポットです。"
    },
    {
        name: "蔵春閣",
        category: ["歴史", "芸術", "写真"],
        people: ["一人", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 5,
            "自然": 2,
            "写真": 4,
            "グルメ": 1,
            "芸術": 4,
            "街歩き": 2
        },
        access: "新発田駅周辺から徒歩でアクセスできます。",
        description:"新発田の歴史や建築の魅力を感じることができる建物です。写真撮影にもおすすめです。"
    },
    {
        name: "東公園のSL",
        category: ["歴史", "写真"],
        people: ["一人","家族", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 4,
            "自然": 3,
            "写真": 5,
            "グルメ": 1,
            "芸術": 1,
            "街歩き": 2
        },
        access: "新発田駅周辺から徒歩でアクセスできます。",
        description:"公園に保存されているSLを見学できます。鉄道や乗り物が好きな人にもおすすめです。"
    },
    {
        name: "諏訪神社",
        category: ["歴史", "写真"],
        people: ["一人", "カップル", "家族", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 4,
            "自然": 3,
            "写真": 4,
            "グルメ": 1,
            "芸術": 3,
            "街歩き": 2
        },
        access: "新発田駅から徒歩でアクセスできます。",
        description:"新発田市の歴史や地域文化を感じられる神社です。"
    },
    {
        name: "新発田市役所",
        category: ["街歩き", "写真"],
        people: ["一人", "カップル", "家族", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 3,
            "自然": 1,
            "写真": 3,
            "グルメ": 1,
            "芸術": 2,
            "街歩き": 3
        },
        access: "新発田駅から徒歩またはバスでアクセスできます。",
        description:"新発田のまちなかを散策するときに立ち寄れる、市街地の主要施設です。"
    },
    {
        name: "王紋酒造",
        category: ["歴史", "グルメ", "芸術"],
        people: ["一人", "カップル", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 5,
            "自然": 1,
            "写真": 3,
            "グルメ": 5,
            "芸術": 4,
            "街歩き": 2
        },
        access: "新発田駅から徒歩圏内です。",
        description:"新発田の酒造文化を感じられるスポット。日本酒や地域の食文化に興味がある人におすすめです。"
    },
    {
        name: "五十公野公園",
        category: ["自然", "写真","グルメ", "街歩き"],
        people: ["カップル", "家族", "友達"],
        time: ["半日", "1日"],
        score: {
            "歴史": 2,
            "自然": 5,
            "写真": 5,
            "グルメ": 4,
            "芸術": 1,
            "街歩き": 5
        },
        access: "新発田駅からあやめバスなどを利用してアクセスできます。",
        description:"自然を楽しみながら散策できる公園。季節の花や風景を楽しみたい人におすすめです。"
    },
    {
        name: "カルチャーセンター",
        category: ["自然", "グルメ"],
        people: ["家族", "友達"],
        time: ["半日", "1日"],
        score: {
            "歴史": 1,
            "自然": 4,
            "写真": 2,
            "グルメ": 3,
            "芸術": 3,
            "街歩き": 3
        },
        access: "新発田市内からバスなどを利用してアクセスできます。",
        description:"スポーツや地域活動などに利用されている施設です。家族や友達とのお出かけに向いています。"
    },
    {
        name: "新発田駅",
        category: ["写真", "街歩き"],
        people: ["一人", "カップル", "家族", "友達"],
        time: ["短時間", "半日", "1日"],
        score: {
            "歴史": 2,
            "自然": 1,
            "写真": 3,
            "グルメ": 3,
            "芸術": 2,
            "街歩き": 1
        },
        access: "JR新発田駅。市内観光のスタート地点として利用できます。",
        description:"新発田観光のスタート地点。駅周辺には飲食店や観光スポットがあります。"
    },
    {
        name: "あやめの湯",
        category: ["街歩き", "自然"],
        people: ["一人","家族", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 1,
            "自然": 4,
            "写真": 2,
            "グルメ": 2,
            "芸術": 1,
            "街歩き": 4
        },
        access: "新発田市内からバスなどを利用してアクセスできます。",
        description:"観光の途中でゆっくり休憩したい人におすすめの温浴施設です。"
    },
    {
        name: "イクネスしばた",
        category: ["芸術"],
        people: ["一人", "カップル", "家族", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 2,
            "自然": 1,
            "写真": 3,
            "グルメ": 1,
            "芸術": 4,
            "街歩き": 2
        },
        access: "新発田駅から徒歩でアクセスできます。",
        description:"図書館などが入る複合施設。観光の途中の休憩や文化体験にも利用できます。"
    },
    {
        name: "市民文化会館",
        category: ["芸術"],
        people: ["一人", "カップル", "家族", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 2,
            "自然": 1,
            "写真": 2,
            "グルメ": 3,
            "芸術": 5,
            "街歩き": 3
        },
        access: "新発田駅から徒歩またはバスでアクセスできます。",
        description:"音楽や舞台など、地域の文化・芸術に触れることができる施設です。"
    },
    {
        name: "新発田歴史図書館",
        category: ["歴史", "文化"],
        people: ["一人", "家族", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 5,
            "自然": 1,
            "写真": 2,
            "グルメ": 1,
            "芸術": 4,
            "街歩き": 3
        },
        access: "新発田市中心部から徒歩でアクセスできます。",
        description:"新発田の歴史について深く知りたい人におすすめの施設です。"
    },
    {
        name: "旧新発田市役所",
        category: ["歴史","街歩き"],
        people: ["一人","家族", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 3,
            "自然": 1,
            "写真": 2,
            "グルメ": 1,
            "芸術": 3,
            "街歩き": 3
        },
        access: "新発田市中心部から徒歩でアクセスできます。",
        description:"昔の新発田市役所として使われていた場所。現在は市役所第4駐車場となっています。"
    },
    {
        name: "新潟職能短大",
        category: ["街歩き"],
        people: ["一人", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 2,
            "自然": 2,
            "写真": 3,
            "グルメ": 3,
            "芸術": 2,
            "街歩き": 3
        },
        access: "新発田市内から公共交通機関を利用してアクセスできます。",
        description:"ものづくりや技術について学ぶことができる教育施設です。平日の昼食の時間には学食を楽しむこともできます。"
    },
    {
        name: "菊水",
        category: ["歴史","写真","グルメ","芸術","街歩き"],
        people: ["一人", "カップル", "家族", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 5,
            "自然": 4,
            "写真": 3,
            "グルメ": 5,
            "芸術": 4,
            "街歩き": 5
        },
        access: "新発田市内から徒歩または公共交通機関でアクセスできます。",
        description:"発酵文化の体験ができる施設や、蔵見学など様々な体験ができます。"
    },
    {
        name: "ボン・タケダ",
        category: ["グルメ","街歩き"],
        people: ["一人", "カップル", "家族", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 3,
            "自然": 1,
            "写真": 2,
            "グルメ": 5,
            "芸術": 1,
            "街歩き": 3
        },
        access: "新発田市内から徒歩または公共交通機関でアクセスできます。",
        description:"新発田の地元学生に親しまれている歴史あるベーカリーです。アレルギーに配慮された米粉パンも販売されています。"
    },
    {
        name: "藤倉メンチカツや",
        category: ["グルメ", "街歩き"],
        people: ["一人", "カップル", "家族", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 2,
            "自然": 1,
            "写真": 2,
            "グルメ": 5,
            "芸術": 1,
            "街歩き": 4
        },
        access: "新発田市内から徒歩または公共交通機関でアクセスできます。",
        description:"安価な価格でボリュームのあるメンチカツを味わうことができます。冷凍メンチカツの販売もあります。"
    },
    {
        name: "いっぷく",
        category: ["グルメ","街歩き"],
        people: ["一人", "カップル", "家族", "友達"],
        time: ["短時間", "半日",],
        score: {
            "歴史": 2,
            "自然": 1,
            "写真": 2,
            "グルメ": 5,
            "芸術": 1,
            "街歩き": 3
        },
        access: "新発田市内から徒歩または公共交通機関でアクセスできます。",
        description:"メンチカツやグラタンコロッケ、手羽先やきんつばなどを楽しむことができます。"
    },
    {
        name: "文化洋食ino",
        category: ["写真","グルメ", "街歩き"],
        people: ["一人", "カップル", "家族", "友達"],
        time: [ "半日","1日"],
        score: {
            "歴史": 1,
            "自然": 1,
            "写真": 3,
            "グルメ": 5,
            "芸術": 1,
            "街歩き": 4
        },
        access: "新発田市内から徒歩または公共交通機関でアクセスできます。",
        description:"ボリューム満点なハンバーグやシーフードパスタなど、食べ応えのあるメニューを楽しめます。"
    },
    {
        name: "やすけカレー",
        category: ["街歩き","グルメ"],
        people: ["一人", "カップル", "家族", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 1,
            "自然": 1,
            "写真": 2,
            "グルメ": 5,
            "芸術": 1,
            "街歩き": 3
        },
        access: "新発田市内から徒歩または公共交通機関でアクセスできます。",
        description:"スパイスと出汁を組み合わせた、オリジナリティあふれる無国籍カレーを楽しむことができます。"
    },
    {
        name: "レストラン蒲城",
        category: ["グルメ", "街歩き"],
        people: ["一人", "カップル", "家族", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 1,
            "自然": 1,
            "写真": 2,
            "グルメ": 5,
            "芸術": 1,
            "街歩き": 3
        },
        access: "新発田市内から徒歩または公共交通機関でアクセスできます。",
        description:"カルチャーセンター内にあるお食事処で、定食や麺類、軽食などを気軽に楽しめます。"
    },
    {
        name: "コーヒーマリーナ 煉瓦屋",
        category: ["写真","グルメ", "街歩き"],
        people: ["一人", "カップル", "家族", "友達"],
        time: ["短時間", "半日"],
        score: {
            "歴史": 3,
            "自然": 1,
            "写真": 4,
            "グルメ": 5,
            "芸術": 1,
            "街歩き": 3
        },
        access: "新発田市内から徒歩または公共交通機関でアクセスできます。",
        description:"落ち着いた雰囲気の店内で、コーヒーやケーキをはじめ、ピザやスパゲティなどの食事も楽しむことができます。"
    },
]

// 得点保存
let selectedPurposes = [];  //目的 配列で複数選択可
let selectedPeople = "";    //面子 1つだけ
let selectedTime = "";      //時間 1つだけ

// 目的ボタン
const purposeButtons =
    document.querySelectorAll("[data-purpose]");
purposeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const purpose = button.dataset.purpose;
        // すでに選択されている場合
        if (selectedPurposes.includes(purpose)) {
            selectedPurposes =
                selectedPurposes.filter(  //filter 条件に合うものを残して配列を作る
                    item => item !== purpose
                );
            button.classList.remove("selected");
        }
        // 選択されていない場合
        else {
            selectedPurposes.push(purpose);
            button.classList.add("selected");
        }
    });
});

// 同行者ボタン
const peopleButtons =
    document.querySelectorAll("[data-people]");
peopleButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedPeople =
            button.dataset.people;
        peopleButtons.forEach(btn => {
            btn.classList.remove("selected");
        });
        button.classList.add("selected");
    });
});

// 時間ボタン
const timeButtons =
    document.querySelectorAll("[data-time]");
timeButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedTime =
            button.dataset.time;
        timeButtons.forEach(btn => {
            btn.classList.remove("selected");
        });
        button.classList.add("selected");
    });
});

// おすすめ検索
document
    .getElementById("searchButton")
    .addEventListener("click", searchSpots);

function searchSpots() {

    // 目的が選択されていない場合
    if (selectedPurposes.length === 0) {
        alert("観光の目的を1つ以上選択してください。");
        return;
    }

    // スコア計算
    const results = spots.map(spot => {
        let totalScore = 0;
        // 目的のスコア
        selectedPurposes.forEach(purpose => {
            totalScore +=
                spot.score[purpose] || 0;   //選んだ目的の点数が加算される スコア未設定も可
        });
        // 同行者ボーナス
        if (
            selectedPeople &&
            spot.people.includes(selectedPeople)
        ) {
            totalScore += 1;
        }
        // 時間ボーナス
        if (
            selectedTime &&
            spot.time.includes(selectedTime)
        ) {
            totalScore += 1;
        }
        return {
            ...spot,    //spotsのなかにtotalscore追加
            totalScore: totalScore
        };
    });

    // スコアの高い順に並べる
    results.sort(
        (a, b) =>
            b.totalScore - a.totalScore
    );

    // 上位3件
    const topResults =
        results.slice(0, 5);
    displayResults(topResults);
}

// 結果表示
function displayResults(results) {
    const resultArea =
        document.getElementById("result");
    const resultList =
        document.getElementById("resultList");

    resultList.innerHTML = "";

    results.forEach((spot, index) => {
        const card =
            document.createElement("div");
        card.className = "spot-card";
        // おすすめ理由
        const selectedPurposeText =
            selectedPurposes.join("・");
        card.innerHTML = `
            <div class="rank">
                ${index + 1}位
            </div>
            <h3>
                ${spot.name}
            </h3>
            <div class="score">
                おすすめ度 ${spot.totalScore}点
            </div>
            <p>
                ${spot.description}
            </p>
            <div class="reason">
                💡 <strong>おすすめ理由</strong><br>
                「${selectedPurposeText}」を
                楽しみたいあなたにおすすめです。
            </div>
            <div class="access">
                🚶 <strong>アクセス</strong><br>
                ${spot.access}
            </div>

            <button
                class="map-button"
                onclick="openMap('${spot.name}')"
            >
                マップで確認
            </button>
        `;
        resultList.appendChild(card);
    });

    // 結果を表示
    resultArea.style.display = "block";

    // 結果までスクロール
    resultArea.scrollIntoView({
        behavior: "smooth"
    });
}

//地図へ移動
function openMap(spotName){
    window.location.href=`root.html?spot=${encodeURIComponent(spotName)}`;
}
