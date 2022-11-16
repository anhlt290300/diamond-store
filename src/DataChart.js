import { Data } from "./component/Candelar";

import data from "./converse";

const converse = (arr) => arr.forEach(element => {
    //element.total = data.conversePrice(element.total)
});

const getDataRadarChart = (data_) => {

    //data_ = converse(data_)
    let arr = []

    data_.forEach((e) => {

        const item = {
            month: e.date,
            total: Number(data.conversePrice(e.total))
        }
        arr.push(item)
    })


    let kq = []

    Data.forEach((e, i) => {

        const month = i + 1
        let total = 0

        arr.forEach((e) => {

            const date = e.month
            const month_ = (date.slice(date.indexOf("/") + 1, date.lastIndexOf("/")))
            if (month_ == month) {
                total = total + e.total
                //  console.log(month_)
            }


        })



        kq.push({ month: e, total: total })
    })




    //console.log(kq)
    return kq
}


export {
    getDataRadarChart,

}