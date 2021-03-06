function setCount(counterEl, count) {
  counterEl.innerHTML = count > 0 ? count : ''
}

exports.start = (counterEl, downFrom, done) => {
  for (let i = 0; i <= downFrom; i++) {
    setTimeout(_ => {
      const count = downFrom - i
      setCount(counterEl, count)
      if(i === downFrom)
        done()
    }, i * 1000)
  }
}
