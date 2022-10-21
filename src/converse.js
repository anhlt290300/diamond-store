import { Value } from "sass"

const conversePrice = (string) => {

    return string.replace(/,/g, "")
}

const check = (key) => {
    let string = key.toString()
    let i = string.indexOf(".")
    if (i < 0) {
        return (string + '.00').replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    } else {
        let value = (string.slice(string.indexOf(".") + 1, string.indexOf(".") + 3))

        let i_ = (string.slice(string.indexOf(".") + 3, string.indexOf(".") + 4))

        //console.log(string + " " + value + "  " + i_)

        if (Number(i_ > 5)) value = Number(value) + 1

        if (Number(Value) < 10) value = value + 0

        return (string.slice(0, string.indexOf(".") + 1) + value).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

}

const converseTotal = ({ price, quantity }) => {
    let price_ = conversePrice(price)

    let total = Number(price_) * Number(quantity)
    //console.log(total)

    return check(total)
}

const data = { conversePrice, converseTotal,check }

export default data
