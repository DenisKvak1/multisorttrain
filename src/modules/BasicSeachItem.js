export default function search(data, searchTerm) {
    if(!searchTerm){
      return data
    }
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const regex = new RegExp(`\\b${lowercaseSearchTerm}`, 'i'); 

    return data.filter(item => {
      const values = Object.values(item);
      return values.some(value => {
        if (typeof value === 'string') {
          return regex.test(value.toLowerCase());
        }
        return false;
      });
    });
  }