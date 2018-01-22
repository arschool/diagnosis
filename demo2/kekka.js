/****************
 * 診断結果ページで使うJavaScript
 ****************/

/**
 * 診断結果ページで最初に呼ばれる処理
 */
let kaisi = () => {
	//今までの回答から、診断結果を取得
	let kekka = ars.toruKekka();

	// 診断結果を表示する
	miseruKekka(kekka);
};


/**
 * 診断結果を表示する処理
 * @param kekka 診断結果
 */
let miseruKekka = (kekka) => {
	// 診断結果の見出し
	let midasi = '';

	// 診断結果の画像
	let gazo = '';

	// 診断結果の説明文
	let setumei = '';

	//結果が1だった場合
	if(kekka == 1){
		midasi = 'あなたの恋愛偏差値は最高です！！';
		gazo = 'img/r1.png';
		setumei = 'どんなことも楽しくして笑顔がいっぱい、ずっと仲良くやっていけるタイプです。';
	}
	//結果が2だった場合
	else if(kekka == 2){
		midasi = 'あなたの恋愛偏差値は結構高めです！';
		gazo = 'img/r2.png';
		setumei = 'だいたいの恋愛はあなたの思ったとおりうまくいきますが、ちょっと調子にのると失敗しちゃうので気をつけて。';

	}
	//結果が3だった場合
	else if(kekka == 3){
		midasi = 'あなたの恋愛偏差値は普通です。';
		gazo = 'img/r3.png';
		setumei = 'うまくいくときもあれば、失敗するときもある。でもいつか、最高の恋愛に出会えるでしょう。';
	}
	else if(kekka == 4){
		midasi = 'あなたの恋愛偏差値は、、、残念です。';
		gazo = 'img/r4.png';
		setumei = 'このままだと、、、あー、怖くて言えません。。';
	}

	//結果を画面に表示する

	// 診断結果の見出しを表示
	ars.miseruMidasi(midasi);

	// 診断結果の画像を表示
	ars.miseruGazo(gazo);

	// 診断結果の詳細を表示
	ars.miseruSetumei(setumei);

};
