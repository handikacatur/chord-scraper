eval(
  (function (d, f, g, h, i, j) {
    i = function (l) {
      return (
        (l < f ? '' : i(parseInt(l / f))) +
        ((l = l % f) > 35 ? String.fromCharCode(l + 29) : l.toString(36))
      )
    }
    if (!''.replace(/^/, String)) {
      while (g--) {
        j[i(g)] = h[g] || i(g)
      }
      h = [
        function (l) {
          return j[l]
        },
      ]
      i = function () {
        return '\\w+'
      }
      g = 1
    }
    while (g--) {
      if (h[g]) {
        d = d.replace(new RegExp('\\b' + i(g) + '\\b', 'g'), h[g])
      }
    }
    return d
  })(
    '5 6,7=["C","C#","D","D#","E","F","F#","G","G#","A","9","B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],8=/A#|C#|D#|F#|G#|h|9|j|k|l|A|B|C|D|E|F|G/g;$("#K,#L").m(3(){$(".4").n(3(){o(5 e=$(b).d(),i="",a=e.p(8),c=0;6=8.q(e);){5 r=7.s(6[0]);i+=a[c++]+7[r+1]}i=(i=(i=(i=(i=(i+=a[c]).2(/l/g,"F#")).2(/h/g,"G#")).2(/9/g,"A#")).2(/j/g,"C#")).2(/k/g,"D#"),$(b).d(i).t("4 "+e).u("4 "+i)})}),$("#M,#N").m(3(){$(".4").n(3(){o(5 e=$(b).d(),i="",a=e.p(8),c=0;6=8.q(e);){5 r=7.s(6[0],1);i+=a[c++]+7[r-1]}i=(i=(i=(i=(i=(i+=a[c]).2(/l/g,"F#")).2(/h/g,"G#")).2(/9/g,"A#")).2(/j/g,"C#")).2(/k/g,"D#"),$(b).d(i).t("4 "+e).u("4 "+i)})});O.P=3(){v()};3 v(){Q(f.R.w>x||f.S.w>x){f.y("z-H").I.J="T"}U{f.y("z-H").I.J="V"}}',
    58,
    58,
    '||replace|function|showTip|var|match|kuncigitar|kuncigitarRegex|Bb||this||html||document||Ab||Db|Eb|Gb|click|each|for|split|exec||indexOf|removeClass|addClass|scrollFunction|scrollTop|150|getElementById|flying||||||||menu|style|display|transposeplus|tpp|transposeminus|tpm|window|onscroll|if|body|documentElement|block|else|none'.split(
      '|'
    ),
    0,
    {}
  )
)
jQuery(document).ready(function () {
  jQuery('#lirik').click(function () {
    jQuery('pre a').toggleClass('putih')
  })
})
