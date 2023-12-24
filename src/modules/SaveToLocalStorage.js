export default function saveToLocalStorage(key, data) {
  const serializedData = JSON.stringify(data)
  localStorage.setItem(key, serializedData)
}
