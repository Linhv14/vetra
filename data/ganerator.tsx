export const generateDateCategories = (month: string, lastDay: number) => {
  const categories = []
  for (let day = 1; day <= lastDay; day++) {
    const formattedDay = day < 10 ? `0${day}` : `${day}`
    categories.push(`${formattedDay} ${month}`)
  }
  return categories
}

export const generateXaxisLabels = (
  month: string,
  lastDay: number,
  step: number,
) => {
  const categories = []
  for (let day = 1; day <= lastDay; day = day + step) {
    const formattedDay = day < 10 ? `0${day}` : `${day}`
    categories.push(`${formattedDay} ${month}`)
  }
  return categories
}

export const generateRandomData = (min: number, max: number, count: number) => {
  const randomData = []
  for (let i = 0; i < count; i++) {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min
    randomData.push(randomValue)
  }
  return randomData
}
