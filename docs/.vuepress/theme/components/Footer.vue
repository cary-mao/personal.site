<template>
  <footer id="footer">
    <p>Made by {{ $themeConfig.author }}</p>
    <nav>
      <a
        href="https://vuepress.vuejs.org"
        title="VuePress"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>VuePress</span>
        <img :src="$withBase('/logo-vuepress.png')" alt="VuePress" />
      </a>
      <a
        href="https://github.com/cary-mao"
        title="Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Github</span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAlFJREFUWEfVmLtKA0EUhg1iETD2ETtJbATFlHaxtLFSMAHB0sZOsPLSCGkkCj5BougrCNamWBMrQ6JdRDshEawk4pn9zcwwl911i9k0k90zc+afb8+cuaTG9L+hb0oZ6sRhMvZj6txZgSSsXNokOrX6JShhMBAelZ7gx9AP+VcRTJbAp3abRuJ5D1RixMAHe1Ccsh/ZvwzNStAlgcKnDUsmKEFdvUH/k0ydbkeIeZ5gMgViZP8lhPaZqUmlq8gEEyOQi41YYBYKS+RHBhA6BhXo3RKIvPV1dxSLMDhJFw/or0wyNEFnBWIN7jevBXKZxXXhedC6MZLV1Z/4YCuUTBJAsKJo82DiBILE7doyjfzq+Z3Kau1ESdBWP3aCtg5llbb6EQSO+0vdBvVVq7PY6zfZfhAdbs/PClpsBHX1RwKP/dm8QKXnPfr+vyn8uBhMuEBbErw/rAaKTZAb5cOYCDogEBLMn9omVGcPSw5+FDtq9wRqjpfhhO6W9wV4F+dbSpjpIou5fI5lg073RZi1cqNfgokRqPvsNIB8Li+NOFo0jsiJZw+dN56gmwKzjSERWjkrkUDuJsGPFUYu7p+879MSdF4glEPo9E6BXmFfhthDPZzKdIepoHZ532eKQbI5L5AbAcVktsGyT6Y8589eNutwN4ObB/lQFdZuI6m9m3FZIGBK+e8vb5EdpzEFAWpns9vuBXU5j49VtwRWeiwf7s2ob4UrPRaTMdiNN7VcP+KO2lmBEIZve/oqZqS3FnuurLISdrxH7bB2tJP9yPkw5brAHy6QY3VmdklZAAAAAElFTkSuQmCC"
          alt="Github"
        />
      </a>
      <a
        href="https://www.netlify.com"
        title="Netlify"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Netlify</span>
        <img :src="$withBase('/logo-netlify.png')" alt="Netlify" />
      </a>
    </nav>
  </footer>
</template>

<script></script>

<style lang="stylus">
#footer
    margin-bottom 1.25rem
    text-align center
    a
        display inline-flex
        align-items center
        margin-right 0.5rem
        font-size 0.9rem
        color var(--font-color-base)
        text-decoration none
        span
            border-bottom 2px solid transparent
            &:hover
                border-bottom-color var(--border-color-hover)
        img
            width 24px
            height 24px
            margin-left 0.5rem
</style>
