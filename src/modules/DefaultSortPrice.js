export default function mySort(data, sortBy){
    switch(sortBy){
      case 'ascending': 
        return [...data].sort((a, b) => a.price - b.price)
      case 'descending': 
        return [...data].sort((a, b) => b.price - a.price)
      case 'default': 
        return data
    }
}