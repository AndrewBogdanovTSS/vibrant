import cf from 'colorthief/dist/color-thief.mjs'

export default ({app}, inject) => {
  inject('cf', new cf())
}
