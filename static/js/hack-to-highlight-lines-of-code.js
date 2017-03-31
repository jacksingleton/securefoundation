// hack alert:
// prism.js is used to highlight syntax. it allows highlighting lines too by
// specifying a 'data-line' attribute on the <pre> tag.
// BUT, there is no way to specify this from markdown without reverting to
// straight up HTML, which would mean for each code example we'd need to have
// something like this:
//
// <pre data-line="5"><code class="language-jsx">
// function thisisjs() {
//   return &lt;div&gt;hello world&lt;/div&gt;
// }
// </code></pre>
//
// yuck!
//
// this hack lets us write this instead:
//
// ```jsx:5
// function thisisjs() {
//   return <div>hello world</div>
// }
// ```
//
// it takes advantage of some strange behavior in the markdown parser that will
// translate:
// ```jsx:5
// into:
// <pre class="language-jsx"><code class=":5 language-jsx">

$(function() {

  $('code').each(function(_, codeElement) {
    var classes = $(codeElement).attr('class').split(/\s+/);
    
    var lineNumberClass = classes.find(function (clazz) {
      return clazz.startsWith(':');
    });

    if (lineNumberClass === undefined) {
      return;
    }
    
    var lineNumber = lineNumberClass.substring(1);

    $(codeElement).parent('pre').attr('data-line', lineNumber);

    Prism.highlightElement(codeElement);
  });
  
});



