/* ----------------------------------------------------------------------------
the number of words contained in the passed content
Liquid: {{ foo.templateContent | numberOfWords }}
---------------------------------------------------------------------------- */
module.exports = {

  numberOfWords: (content) => content.split(/\s+/g).length,

};
