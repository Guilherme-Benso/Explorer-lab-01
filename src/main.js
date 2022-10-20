import "./css/index.css"
import IMask from "imask"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")





function setCardType(type) {
    const colors = {
        visa: ("#436D99", "#2D57F2"),
        mastercard: ["#DF6F29", "#C69347"],
        default: ["black", "grey"],
        elo: ["#435199", "#EE2DF2"],
    }
    ccBgColor01.setAttribute("fill", colors[type][0])
    ccBgColor02.setAttribute("fill", colors[type][1])
    ccLogo.setAttribute("src", `/public/cc-${type}.svg`)
}

globalThis.setCardType = setCardType;
//setCardType("")


const securityCode = document.querySelector("#security-code")
const securityCodePattern = {
    mask: `0000`,
}
const securityCodeMasked = IMask(securityCode, securityCodePattern)
const expirationDate = document.querySelector("#expiration-date")
const expiratiosDatePattern = {
    mask: "MM{/}YY",
    blocks:{
        MM:{
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
        },
        YY: {
            mask: IMask.MaskedRange,
            from: String(new Date().getFullYear()).slice(2),
            to:
        }
    }
}
const expirationDateMask = IMask(expirationDate, expiratiosDatePattern)