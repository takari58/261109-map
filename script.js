const spots = [
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
    }
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
    const resultArea = document.getElementById("result");
    const resultList = document.getElementById("resultList");

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
