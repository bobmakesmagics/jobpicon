const inputHeight = (element, defaultValue) => {
  if (element) {
    const target = element.target ? element.target : element
    target.style.height = defaultValue
    target.style.height = `${target.scrollHeight}px`
  }
}

export default inputHeight
