window.onload = function () {
    getValue();
    var $formObject = document.getElementById("Form");
    for( var $i = 0; $i < $formObject.length; $i++ ) {
        $formObject.elements[$i].onkeyup = function(){
            getValue();
        };
        $formObject.elements[$i].onchange = function(){
            getValue();
        };
    }
}
function getValue() {
    var $formObject = document.getElementById("Form" );
    var $merged = $formObject.form1.value + $formObject.form2.value + $formObject.form3.value + $formObject.form4.value;
    document.getElementById( "impression" ).innerHTML = $merged;
    setTweetButton($merged+"　[キン肉マン感想ジェネレータ https://nikuomoro.github.io ]");
}
function setTweetButton(text){
    $('#tweet').empty();
    twttr.widgets.createShareButton(
            "https://ebookjapan.yahoo.co.jp/search/?keyword=%E3%82%AD%E3%83%B3%E8%82%89%E3%83%9E%E3%83%B3&useTitle=0&sort=recent",
            document.getElementById("tweet"),
            {
                size: "large",
                text: text,
            }
    );
}
