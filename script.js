setInterval(function () {
    var YT_skipButton = document.getElementsByClassName("ytp-ad-skip-button");
    
    if (YT_skipButton != undefined && YT_skipButton.length > 0) {
        console.log("AD DETECTED!");
        YT_skipButton[0].click();
    }

}, 7);
// youtube.com##.ytp-ad-progress-list
window.addEventListener("load", function () {
    setInterval(() => {
        var YT_companion = document.getElementById("player-ads");
        var YT_homepgAd = document.getElementsByClassName("style-scope ytd-display-ad-renderer");
        var YT_searchAd = document.getElementsByClassName("style-scope ytd-promoted-sparkles-text-search-renderer");
        // "taw" and "bottomads" are id's of ads in google's search
        var Google_ResultAd = document.getElementById("taw");
        var Google_ResultAdBottom = document.getElementById("bottomads");
        if(YT_companion!=undefined){
            YT_companion.style.display = "none";
        }
        if (YT_homepgAd != undefined && YT_homepgAd.length != 0) {
            YT_homepgAd[0].style.display = "none";
        }

        if(Google_ResultAd!=undefined && Google_ResultAd.length!=0){
            Google_ResultAd.style.display = "none";
        }
        if(Google_ResultAdBottom!=undefined && Google_ResultAdBottom.length!=0){
            Google_ResultAdBottom.style.display = "none";
        }
        if (YT_searchAd != undefined && YT_searchAd.length != 0) {
            for (let i = 0; i < YT_searchAd.length; i++) {
                YT_searchAd[i].style.display = "none";
            }
        }
    }, 700);
 });