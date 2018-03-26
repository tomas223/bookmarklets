javascript:(function () {
    const FLOAT_REGEX = /\d+(?:\.\d+)?/g;
    fetch("https://www.floatrates.com/daily/czk.json")
        .then(function (res) {return res.json()})
        .then(function (data) {
            const czkUsdRate = data.usd.rate;

            const elements = document.querySelectorAll(".big-sale-price");

            for (var i = 0; i < elements.length; i++) {
                const priceSpan = elements[i].querySelector("span");
                const price = parseFloat(priceSpan.innerText.match(FLOAT_REGEX));

                const czkPrice = price / czkUsdRate;

                const newSpan = document.createElement("span");
                newSpan.innerHTML = "CZK " + czkPrice.toFixed(2);
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
It shows prices on aliexpress in CZK
 */