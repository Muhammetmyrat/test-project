export function useGetImage() {
  const getImageUrl = (img: string) => new URL(`../assets/img/${img}`, import.meta.url).href
  return {
    getImageUrl
  }
}
