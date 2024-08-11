// 即時関数宣言
(() => {
    const $doc = document;
    const button = $doc.querySelectorAll('[data-button= "js-btn"]');
    const selectBox = $doc.querySelector('[data-fruit="fruits"]');
    const secondForm = $doc.querySelector('[data-userForm2="userForm2"]');
    // console.log('secondForm', secondForm);

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

        // セレクトボックスの選択がバナナの場合に2人目のフォームを表示
        toggleSecondForm(selectBox.value);
    }

    // セレクトボックスの変更イベントを監視
    selectBox.addEventListener('change', () => {
        toggleSecondForm(selectBox.value);
    });

    // 2人目のフォームの表示/非表示を切り替える関数
    const toggleSecondForm = (selectedValue) => {
        if (selectedValue === 'banana') {
            secondForm.classList.remove('hidden');
        } else {
            secondForm.classList.add('hidden');
        }
    };

    // aタグを押したら、clickHandlerが発火する処理
    button.forEach(button => {
        button.addEventListener('click', (e) => clickHandler(e));
    });
    // button.addEventListener('click', (e) => clickHandler(e)); // 0個目のaタグを押したら関数が発火する
})();