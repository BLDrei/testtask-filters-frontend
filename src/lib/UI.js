const UI = {
  hide: element => {
    element.classList.add('-hidden');
  },
  show: element => {
    element.classList.remove('-hidden');
  }
}

export default UI
