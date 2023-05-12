const inputWidth = (element, defaultValue) => {
  if (element) {
    const target = element.target ? element.target : element
    target.style.width = defaultValue
    target.style.width = `${target.scrollWidth}px`
  }
}

export default inputWidth
