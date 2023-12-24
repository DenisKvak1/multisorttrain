export default function otFilter(data, ot){
    return ot ? data.filter(item=>item.price>ot) : data
}