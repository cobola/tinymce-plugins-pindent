/* eslint-disable */
!(function() {
  'use strict'
  const global = tinymce.util.Tools.resolve('tinymce.PluginManager')
  global.add('pindent', function(editor) {
    editor.on('init', function() {
      editor.formatter.register({
        pindent: {
          selector: 'p',
          styles: { 'text-indent': '2em' }
        },
        noindent: {
          selector: 'p',
          styles: { 'text-indent': '0px' }
        }
      })

      editor.ui.registry.addIcon(
        'pindent',
        `
        <svg t="1563031535227" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1993" width="16" height="16"><path d="M64 320C64 284.653776 92.796721 256 128.43811 256L895.561888 256C931.150074 256 960 284.407348 960 320 960 355.346224 931.203277 384 895.561888 384L128.43811 384C92.849924 384 64 355.592652 64 320ZM64 512C64 476.653776 92.796721 448 128.43811 448L895.561888 448C931.150074 448 960 476.407348 960 512 960 547.346224 931.203277 576 895.561888 576L128.43811 576C92.849924 576 64 547.592652 64 512ZM64 704C64 668.653779 92.796721 640 128.43811 640L895.561888 640C931.150074 640 960 668.407347 960 704 960 739.346221 931.203277 768 895.561888 768L128.43811 768C92.849924 768 64 739.592653 64 704ZM64 896C64 860.653779 92.796721 832 128.43811 832L895.561888 832C931.150074 832 960 860.407347 960 896 960 931.346221 931.203277 960 895.561888 960L128.43811 960C92.849924 960 64 931.592653 64 896ZM448 128C448 92.653776 476.994324 64 511.809929 64L896.190074 64C931.431322 64 960 92.407348 960 128 960 163.346224 931.005677 192 896.190074 192L511.809929 192C476.568678 192 448 163.592652 448 128Z" p-id="1994"></path></svg>

        `
      )
    })

    editor.ui.registry.addMenuButton('pindent', {
      tooltip: '首行缩进',
      icon: 'pindent',
      fetch: function(callback) {
        const defaultLineHeightFormats = '缩进 不缩进'

        const items = defaultLineHeightFormats.split(' ').map(item => {
          return {
            type: 'menuitem',
            text: item,
            onAction: function() {
              if (item === '缩进') {
                editor.formatter.apply('pindent')
              } else {
                editor.formatter.apply('noindent')
              }
              editor.fire('change', {})
            }
          }
        })

        callback(items)
      }
    })
  })
})()
