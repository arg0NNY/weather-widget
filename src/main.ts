import { defineCustomElement } from 'vue'
import Widget from './Widget.ce.vue'

const WidgetElement = defineCustomElement(Widget)

customElements.define('weather-widget', WidgetElement)
