document.addEventListener("DOMContentLoaded", function () {
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walk.nextNode()) nodes.push(walk.currentNode);
  nodes.forEach(n => {
    n.nodeValue = n.nodeValue
      .replace(/\\u2014/g, "--")
      .replace(/\\u00b7/g, " | ")
      .replace(/\\u2013/g, "-")
      .replace(/\\u201c/g, '"')
      .replace(/\\u201d/g, '"')
      .replace(/\\u2019/g, "'")
      .replace(/\\u00d7/g, "x");
  });
});
