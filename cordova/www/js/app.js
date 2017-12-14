//-------- Initialize Framework7 ----------
var app = new Framework7({
    material: true,
    uniqueHistory: true,
    domCache: true,
    modalTitle: 'Gaby\'s Soundboard',
    notificationHold: 3000,
    animatePages: false,
    smartSelectSearchbar: true,
    tapHold: true,
    fastClicks: true,
    //swipePanel: 'left',
    onAjaxStart: function (xhr) {
        app.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        app.hideIndicator();
    }
});
var $$ = Dom7; //DOM Library

var mainView = app.addView('.view-main', {
    main: true
});
//------ End Initialize Framework7 -------

mainView.router.loadPage('pages/words.html');

//============Words=========================
function playWord_Armageddon() {
    let audio = new Audio('audio/words/armageddon.mp3');
    audio.play();
}

function playWord_Avengers() {
    let audio = new Audio('audio/words/avengers.mp3');
    audio.play();
}

function playWord_Thoroughly() {
    let audio = new Audio('audio/words/thoroughly.mp3');
    audio.play();
}

function playWord_Drawer() {
    let audio = new Audio('audio/words/drawer.mp3');
    audio.play();
}

function playWord_Acai() {
    let audio = new Audio('audio/words/acai.mp3');
    audio.play();
}

function playWord_Antarctica() {
    let audio = new Audio('audio/words/antarctica.mp3');
    audio.play();
}

function playWord_Cavalry() {
    let audio = new Audio('audio/words/cavalry.mp3');
    audio.play();
}

function playWord_Salmon() {
    let audio = new Audio('audio/words/salmon.mp3');
    audio.play();
}

function playWord_Jewelry() {
    let audio = new Audio('audio/words/jewelry.mp3');
    audio.play();
}

function playWord_Utilitarian() {
    let audio = new Audio('audio/words/utilitarian.mp3');
    audio.play();
}

function playWord_Ambivalence() {
    let audio = new Audio('audio/words/ambivalence.mp3');
    audio.play();
}

function playWord_Qualudes() {
    let audio = new Audio('audio/words/qualudes.mp3');
    audio.play();
}

function playWord_IsGivingOnTV() {
    let audio = new Audio('audio/words/is_giving_on_tv.mp3');
    audio.play();
}
//===============End Words==================