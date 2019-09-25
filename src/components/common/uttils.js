export function debounce(func,delay){
    let timer = null
    return function (...args) {
      timer = setTimeout(() => {
        func.apply(this, args)
      },delay)
    } 
  }