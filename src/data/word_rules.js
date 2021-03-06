//regex patterns and parts of speech
var word_rules = [{
  reg: /.[cts]hy$/i,
  pos: 'JJ',
  strength: 64,
  errors: 1,
  accuracy: '0.98'
}, {
  reg: /.[st]ty$/i,
  pos: 'JJ',
  strength: 44,
  errors: 1,
  accuracy: '0.98'
}, {
  reg: /.[lnr]ize$/i,
  pos: 'VB',
  strength: 91,
  errors: 2,
  accuracy: '0.98'
}, {
  reg: /.[gk]y$/i,
  pos: 'JJ',
  strength: 113,
  errors: 3,
  accuracy: '0.97'
}, {
  reg: /.fies$/i,
  pos: 'VB',
  strength: 30,
  errors: 1,
  accuracy: '0.97'
}, {
  reg: /.some$/i,
  pos: 'JJ',
  strength: 34,
  errors: 1,
  accuracy: '0.97'
}, {
  reg: /.[nrtumcd]al$/i,
  pos: 'JJ',
  strength: 513,
  errors: 16,
  accuracy: '0.97'
}, {
  reg: /.que$/i,
  pos: 'JJ',
  strength: 26,
  errors: 1,
  accuracy: '0.96'
}, {
  reg: /.[tnl]ary$/i,
  pos: 'JJ',
  strength: 87,
  errors: 4,
  accuracy: '0.95'
}, {
  reg: /.[di]est$/i,
  pos: 'JJS',
  strength: 74,
  errors: 4,
  accuracy: '0.95'
}, {
  reg: /^(un|de|re)\-[a-z]../i,
  pos: 'VB',
  strength: 44,
  errors: 2,
  accuracy: '0.95'
}, {
  reg: /.lar$/i,
  pos: 'JJ',
  strength: 83,
  errors: 5,
  accuracy: '0.94'
}, {
  reg: /[bszmp]{2}y/,
  pos: 'JJ',
  strength: 95,
  errors: 6,
  accuracy: '0.94'
}, {
  reg: /.zes$/i,
  pos: 'VB',
  strength: 54,
  errors: 4,
  accuracy: '0.93'
}, {
  reg: /.[icldtgrv]ent$/i,
  pos: 'JJ',
  strength: 214,
  errors: 14,
  accuracy: '0.93'
}, {
  reg: /.[rln]ates$/i,
  pos: 'VBZ',
  strength: 74,
  errors: 5,
  accuracy: '0.93'
}, {
  reg: /.[oe]ry$/i,
  pos: 'JJ',
  strength: 150,
  errors: 10,
  accuracy: '0.93'
}, {
  reg: /.[rdntk]ly$/i, ///****
  pos: 'RB',
  strength: 108,
  errors: 9,
  accuracy: '0.92'
}, {
  reg: /.[lsrnpb]ian$/i,
  pos: 'JJ',
  strength: 121,
  errors: 10,
  accuracy: '0.92'
}, {
  reg: /.[lnt]ial$/i,
  pos: 'JJ',
  strength: 0,
  errors: 0,
  accuracy: '0'
}, {
  reg: /.[vrl]id$/i,
  pos: 'JJ',
  strength: 23,
  errors: 2,
  accuracy: '0.91'
}, {
  reg: /.[ilk]er$/i,
  pos: 'JJR',
  strength: 167,
  errors: 17,
  accuracy: '0.90'
}, {
  reg: /.ike$/i,
  pos: 'JJ',
  strength: 71,
  errors: 8,
  accuracy: '0.89'
}, {
  reg: /.ends$/i,
  pos: 'VB',
  strength: 24,
  errors: 3,
  accuracy: '0.88'
}, {
  reg: /.wards$/i,
  pos: 'RB',
  strength: 31,
  errors: 4,
  accuracy: '0.87'
}, {
  reg: /.rmy$/i,
  pos: 'JJ',
  strength: 7,
  errors: 1,
  accuracy: '0.86'
}, {
  reg: /.rol$/i,
  pos: 'NN',
  strength: 7,
  errors: 1,
  accuracy: '0.86'
}, {
  reg: /.tors$/i,
  pos: 'NN',
  strength: 7,
  errors: 1,
  accuracy: '0.86'
}, {
  reg: /.azy$/i,
  pos: 'JJ',
  strength: 7,
  errors: 1,
  accuracy: '0.86'
}, {
  reg: /.where$/i,
  pos: 'RB',
  strength: 7,
  errors: 1,
  accuracy: '0.86'
}, {
  reg: /.ify$/i,
  pos: 'VB',
  strength: 49,
  errors: 7,
  accuracy: '0.86'
}, {
  reg: /.bound$/i,
  pos: 'JJ',
  strength: 22,
  errors: 3,
  accuracy: '0.86'
}, {
  reg: /.ens$/i,
  pos: 'VB',
  strength: 42,
  errors: 6,
  accuracy: '0.86'
}, {
  reg: /.oid$/i,
  pos: 'JJ',
  strength: 20,
  errors: 3,
  accuracy: '0.85'
}, {
  reg: /.vice$/i,
  pos: 'NN',
  strength: 6,
  errors: 1,
  accuracy: '0.83'
}, {
  reg: /.rough$/i,
  pos: 'JJ',
  strength: 6,
  errors: 1,
  accuracy: '0.83'
}, {
  reg: /.mum$/i,
  pos: 'JJ',
  strength: 6,
  errors: 1,
  accuracy: '0.83'
}, {
  reg: /.teen(th)?$/i,
  pos: 'CD',
  strength: 17,
  errors: 3,
  accuracy: '0.82'
}, {
  reg: /.oses$/i,
  pos: 'VB',
  strength: 22,
  errors: 4,
  accuracy: '0.82'
}, {
  reg: /.ishes$/i,
  pos: 'VB',
  strength: 21,
  errors: 4,
  accuracy: '0.81'
}, {
  reg: /.ects$/i,
  pos: 'VB',
  strength: 30,
  errors: 6,
  accuracy: '0.80'
}, {
  reg: /.tieth$/i,
  pos: 'CD',
  strength: 5,
  errors: 1,
  accuracy: '0.80'
}, {
  reg: /.ices$/i,
  pos: 'NN',
  strength: 15,
  errors: 3,
  accuracy: '0.80'
}, {
  reg: /.bles$/i,
  pos: 'VB',
  strength: 20,
  errors: 4,
  accuracy: '0.80'
}, {
  reg: /.pose$/i,
  pos: 'VB',
  strength: 19,
  errors: 4,
  accuracy: '0.79'
}, {
  reg: /.ions$/i,
  pos: 'NN',
  strength: 9,
  errors: 2,
  accuracy: '0.78'
}, {
  reg: /.ean$/i,
  pos: 'JJ',
  strength: 32,
  errors: 7,
  accuracy: '0.78'
}, {
  reg: /.[ia]sed$/i,
  pos: 'JJ',
  strength: 151,
  errors: 35,
  accuracy: '0.77'
}, {
  reg: /.tized$/i,
  pos: 'VB',
  strength: 21,
  errors: 5,
  accuracy: '0.76'
}, {
  reg: /.llen$/i,
  pos: 'JJ',
  strength: 8,
  errors: 2,
  accuracy: '0.75'
}, {
  reg: /.fore$/i,
  pos: 'RB',
  strength: 8,
  errors: 2,
  accuracy: '0.75'
}, {
  reg: /.ances$/i,
  pos: 'NN',
  strength: 8,
  errors: 2,
  accuracy: '0.75'
}, {
  reg: /.gate$/i,
  pos: 'VB',
  strength: 23,
  errors: 6,
  accuracy: '0.74'
}, {
  reg: /.nes$/i,
  pos: 'VB',
  strength: 27,
  errors: 7,
  accuracy: '0.74'
}, {
  reg: /.less$/i,
  pos: 'RB',
  strength: 11,
  errors: 3,
  accuracy: '0.73'
}, {
  reg: /.ried$/i,
  pos: 'JJ',
  strength: 22,
  errors: 6,
  accuracy: '0.73'
}, {
  reg: /.gone$/i,
  pos: 'JJ',
  strength: 7,
  errors: 2,
  accuracy: '0.71'
}, {
  reg: /.made$/i,
  pos: 'JJ',
  strength: 7,
  errors: 2,
  accuracy: '0.71'
}, {
  reg: /.[pdltrkvyns]ing$/i,
  pos: 'JJ',
  strength: 942,
  errors: 280,
  accuracy: '0.70'
}, {
  reg: /.tions$/i,
  pos: 'NN',
  strength: 71,
  errors: 21,
  accuracy: '0.70'
}, {
  reg: /.tures$/i,
  pos: 'NN',
  strength: 16,
  errors: 5,
  accuracy: '0.69'
}, {
  reg: /.ous$/i,
  pos: 'JJ',
  strength: 6,
  errors: 2,
  accuracy: '0.67'
}, {
  reg: /.ports$/i,
  pos: 'NN',
  strength: 9,
  errors: 3,
  accuracy: '0.67'
}, {
  reg: /. so$/i,
  pos: 'RB',
  strength: 3,
  errors: 1,
  accuracy: '0.67'
}, {
  reg: /.ints$/i,
  pos: 'NN',
  strength: 11,
  errors: 4,
  accuracy: '0.64'
}, {
  reg: /.[gt]led$/i,
  pos: 'JJ',
  strength: 16,
  errors: 7,
  accuracy: '0.56'
}, {
  reg: /[aeiou].*ist$/i, //not sure about.. (eg anarchist)
  pos: 'JJ',
  strength: 0,
  errors: 0,
  accuracy: '0'
}, {
  reg: /.lked$/i,
  pos: 'VB',
  strength: 16,
  errors: 7,
  accuracy: '0.56'
}, {
  reg: /.fully$/i,
  pos: 'RB',
  strength: 13,
  errors: 6,
  accuracy: '0.54'
}, {
  reg: /.*ould$/,
  pos: 'MD',
  strength: 3,
  errors: 0,
  accuracy: '0.00'
}, {
  reg: /^-?[0-9]+(.[0-9]+)?$/,
  pos: 'CD',
  strength: 1,
  errors: 1,
  accuracy: '0.00'
}, {
  reg: /[a-z]*\-[a-z]*\-/, //'more-than-real'
  pos: 'JJ',
  strength: 0,
  errors: 0,
  accuracy: '0.00'
}, { //ugly handling of contractions, shouldn't ever be hit, but just in case
  reg: /[a-z]'s$/i, //spencer's
  pos: 'NNO',
  strength: 1,
  errors: 0,
  accuracy: '0.00'
}, {
  reg: /.'n$/i, //walk'n
  pos: 'VB',
  strength: 1,
  errors: 0,
  accuracy: '0.00'
}, {
  reg: /.'re$/i, //they're
  pos: 'CP',
  strength: 1,
  errors: 0,
  accuracy: '0.00'
}, {
  reg: /.'ll$/i, //they'll
  pos: 'MD',
  strength: 1,
  errors: 0,
  accuracy: '0.00'
}, {
  reg: /.'t$/i, //doesn't
  pos: 'VB',
  strength: 1,
  errors: 0,
  accuracy: '0.00'
}, {
  reg: /.tches$/i, //watches
  pos: 'VB',
  strength: 1,
  errors: 0,
  accuracy: '0.00'
}]

if (typeof module !== "undefined" && module.exports) {
  module.exports = word_rules;
}
