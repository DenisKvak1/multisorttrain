export default function doFilter(data, doT){
    return doT ? data.filter(item=>item.price<doT) : data
  }