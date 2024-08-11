(() => {
    const $doc = document;
    const button = $doc.querySelectorAll('[data-button= "js-btn"]');
    // console.log('button', button);

    const selectBox = $doc.getElementById('fruits');

    // ボタンを押した時にイベントを発火させる
    const clickHandler = (e) => {
        e.preventDefault();

        // ボタンがクリックされたら、対象のセレクトボックスのvalueを呼ぶようにする
        const fruitName = e.currentTarget.textContent.trim();
        switch (fruitName) {
            case 'りんご':
                selectBox.value = 'apple';
                break;
            case 'バナナ':
                selectBox.value = 'banana';
                break;
            case 'オレンジ':
                selectBox.value = 'orange';
                break;
            case 'ブドウ':
                selectBox.value = 'grape';
                break;
            default:
                break;
        }
    }
    // aタグを押したら、clickHandlerが発火する処理
    button.forEach(button => {
        button.addEventListener('click', (e) => clickHandler(e));
    });
    // button.addEventListener('click', (e) => clickHandler(e)); // 0個目のaタグを押したら関数が発火する
})();