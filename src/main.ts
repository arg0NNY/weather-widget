import { defineCustomElement } from 'vue'
import Widget from './Widget.ce.vue'

const WidgetElement = defineCustomElement(Widget)

customElements.define('weather-widget', WidgetElement)

// Connect fonts
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'
document.head.appendChild(link)
