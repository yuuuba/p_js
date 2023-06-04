  // TODO:

  // 1. Rails から JSON (String) を渡してもらう (JS 側からリクエストを送る.. fetch メソッド)

  // 2. JS では JSON.parse() で オブジェクトに変換
  
  // 3. 以降は オブジェクトの key を参照することで、 value を読み出せる


  // 例: JS から Rails にリクエストを送ると、

  // JSON {message: "Hello"} が返ってくる... JS 側で console.log() に結果を出力する、単機能アプリ
    fetch('/data.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
