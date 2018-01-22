/****************
 * 質問ページで使うJavaScript
 ****************/

/**
 * 質問のページで最初に呼ばれる関数
 * - 質問1を表示する
 */
let kaisi = () => {
	// アプリのタイトルを設定する
	ars.taitoru('恋愛偏差値チェック！');

	// 質問1を表示する
	miseruQ1();
};


/**
 * 質問1 を表示する
 * 文章で選択する質問
 */
let miseruQ1 = () => {
	// 質問を始めるときは new Situmon(?)する
	// 引数(?)は、質問の番号（質問1なので1をセット）
	let q = new Situmon(1);

	// 質問文
	q.bun('ちょっといいな、と思っている人が少し落ち込んでいます。こんなとき、あなたは...');

	// 選択肢が文章の場合はt, 画像の場合はiをセット
	q.syurui('t');

	// 選択肢を追加していく
	q.sentakusi('気付かないフリをして元気よく話しかける');
	q.sentakusi('どうしたの？と聞いてみる');
	q.sentakusi('そっとしておいて、周りから見ている');

	// １問目の場合は、「前の質問に戻る」ボタン不要
	ars.kakusuModoru(1);
};


/**
 * 質問2 を表示する
 * 画像を選択する質問
 */
let miseruQ2 = () => {
	// 質問を始めるときは new Situmon(?)する
	// 引数(?)は、質問の番号（質問2なので2をセット）
	let q = new Situmon(2);

	// 質問の見出し
	q.bun('ちょっといいな、と思っている人と動物園で一緒に見たいのは...');

	// 選択肢が文章の場合はt, 画像の場合はiをセット
	q.syurui('i');

	// 選択肢を追加していく
	q.sentakusi('img/q_panda.png');
	q.sentakusi('img/q_lion.png');
	q.sentakusi('img/q_penguin.png');
	q.sentakusi('img/q_saru.png');

	// 2問目の場合は、「前の質問に戻る」ボタンを表示する
	ars.miseruModoru(2);
};


/**
 * 質問3 を表示する
 * 文章を選択する質問
 */
let miseruQ3 = () => {
	// 質問を始めるときは new Situmon(?)する
	// 引数(?)は、質問の番号（質問2なので2をセット）
	let q = new Situmon(3);

	// 質問文
	q.bun('ちょっといいな、と思っている人から、あなたが聞きたいのは...');

	// 選択肢が文章の場合はt, 画像の場合はiをセット
	q.syurui('t');

	// 選択肢を追加していく
	q.sentakusi('自分もその人も、両方好きな話を聞きたい');
	q.sentakusi('自分はよく知らないけど、その人が好きな話を聞きたい');

	// 2問目の場合は、「前の質問に戻る」ボタンを表示する
	ars.miseruModoru(3);
};


/**
 * 全質問が終わり、診断結果ページへ移動する
 */
let miseruSindan = () => {
	// 診断結果を取得（診断結果が何番か）
	let kekka = keisan();

	// ページを移動する
	location.href = "result.html?r="+kekka;
};


/**
 * 質問で選択肢を選んだときの処理
 * @param bangou 答えた質問番号（何問目か）
 */
let eranda = (bangou) => {

	// 1問目の回答後は次の質問（2問目）に行く
	if(bangou == 1){
		miseruQ2();
	}
	// 2問目の回答後は次の質問（3問目）に行く
	else if(bangou == 2){
		miseruQ3();
	}
	// 3問目の回答後は診断結果に行く
	else if(bangou == 3){
		miseruSindan();
	}
};


/**
 * 診断結果を判定して返す
 *
 * @returns {number}
 */
let keisan = () => {
	//質問1, 質問2, 質問3の回答は下記で取れる。
	let a1 = ars.toruKotae(1);
	let a2 = ars.toruKotae(2);
	let a3 = ars.toruKotae(3);

	// 質問1での得点
	let ten1 = 0;

	if(a1 == 0){
		ten1 = 10;
	}else if(a1 == 1){
		ten1 = 50;
	}else if(a1 == 2) {
		ten1 = 30;
	}


	// 質問2での得点
	let ten2 = 0;

	if(a2 == 0){
		ten2 = 10;
	}else if(a2 == 1){
		ten2 = 0;
	}else if(a2 == 2) {
		ten2 = 50;
	}else if(a2 == 3) {
		ten2 = 30;
	}


	// 質問3での得点
	let ten3 = 0;

	if(a3 == 0){
		ten3 = 20;
	}else if(a3 == 1){
		ten3 = 40;
	}

	//合計点
	let goukei = ten1 + ten2 + ten3;

	//診断結果
	let kekka = 0;

	//合計点から診断結果を出す
	if(goukei >= 120) {
		kekka = 1;
	} else if(goukei >= 100){
		kekka = 2;
	} else if(goukei >= 50){
		kekka = 3;
	} else {
		kekka = 4;
	}

	return kekka;
};


/**
 * 戻るボタンをクリックしたときの処理
 * 質問番号 qn に合わせて、前の質問を表示する
 * @param qn 現在の質問番号
 */
let modoru = (qn) => {
	if(qn == 2){
		miseruQ1();
	}
	else if(qn == 3){
		miseruQ2();
	}
};
