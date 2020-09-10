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
    setTweetButton($merged);
}
function setTweetButton(text){
    $('#tweet').empty();
    twttr.widgets.createShareButton(
            "ebookjapan.yahoo.co.jp/search/?keywor…",
            document.getElementById("tweet"),
            {
                size: "large",
                text: text,
            }
    );
}
