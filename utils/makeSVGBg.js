const colorPalette = ['#ff6464', '#4fb5e1', '#ffb264', '#0a192f', '#4E9397']

const rand = (max) => {
  return Math.floor(Math.random() * max)
}

export const makeRects = (maxX, maxY) => {
  let rects = ''
  for (let i = 0; i < 100; i++) {
    rects += `
      <rect
        x="${rand(maxX + 50) - 50}"
        y="${rand(maxY + 50) - 50}"
        width="${rand(200) + 20}"
        height="${rand(200) + 20}"
        opacity="0.8${rand(10)}"
        fill="${colorPalette[rand(5)]}"
      />
    `
  }
  return rects
}
