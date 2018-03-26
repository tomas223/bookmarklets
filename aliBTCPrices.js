javascript:(function () {
    const FLOAT_REGEX = /\d+(?:\.\d+)?/g;
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(function (res) {return res.json()})
        .then(function (data) {
            const btcUsdRate = data.bpi.USD["rate_float"];

            const elements = document.querySelectorAll(".big-sale-price");

            for (var i = 0; i < elements.length; i++) {
                const priceSpan = elements[i].querySelector("span");
                const price = parseFloat(priceSpan.innerText.match(FLOAT_REGEX));

                const btcPrice = price / btcUsdRate;

                const newSpan = document.createElement("span");
                newSpan.innerHTML = "BTC ฿" + btcPrice.toFixed(8);
                newSpan.style.padding = "0 10px";

                elements[i].appendChild(newSpan);
            }
        })
        .catch(function(err) {
            console.warn("Fetching error: ", err);
        })
})();

/*
This is only example bookmarklet
It shows prices on aliexpress in BTC
 */