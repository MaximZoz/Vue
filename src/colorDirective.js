let interval
let defaultColor

const moeseover = event => {
event.target.style.color = 'red'
}
const moeseout = event => {
  event.target.style.color = defaultColor

}

export default {
  mounted(el, binding) {
    el.style[binding.arg] = binding.value 
    console.log('🚀 ~ binding', binding)
    console.log('🚀 ~ el', el)
    defaultColor = binding.value
    if (binding.modifiers.blink) {
      let flag = true
      interval = setInterval(() => {
        el.style.color = flag ? '#ccc' : binding.value
        flag = !flag
      }, 1000);

    }
    if (binding.modifiers.hover) {

      el.addEventListener(
        'mouseover', moeseover
      )
      el.addEventListener(
        'mouseout', moeseout
      )


    }
  },
  updated(el, binding) {
    el.style[binding.arg] = binding.value
    // console.log('🚀 ~ binding', binding)
    // console.log('🚀 ~ el', el)

  },
  unmounted(el) {
    console.log('🚀 ~ unmounted')
    if (interval) {
      clearInterval(interval)
    }
    el.removeEventListener(
      'mouseover', mouseover
    )
    el.removeEventListener(
      'mouseout', mouseouts
    )

  },
};