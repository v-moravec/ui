import { createShikiHighlighter } from '@nuxtjs/mdc/runtime/highlighter/shiki'
import AuroraXTheme from 'shiki/themes/aurora-x.mjs'
import HtmlLang from 'shiki/langs/html.mjs'
import MdcLang from 'shiki/langs/mdc.mjs'
import VueLang from 'shiki/langs/vue.mjs'
import YamlLang from 'shiki/langs/yaml.mjs'
import PostcssLang from 'shiki/langs/postcss.mjs'
import type { Highlighter } from '@nuxtjs/mdc/runtime/highlighter/types'

let highlighter: Highlighter | undefined
export const useShikiHighlighter = () => {
  if (!highlighter) {
    highlighter = createShikiHighlighter({
      bundledThemes: {
        'aurora-x': AuroraXTheme,
      },
      bundledLangs: {
        html: HtmlLang,
        mdc: MdcLang,
        vue: VueLang,
        yml: YamlLang,
        postcss: PostcssLang,
      },
    })
  }

  return highlighter
}
