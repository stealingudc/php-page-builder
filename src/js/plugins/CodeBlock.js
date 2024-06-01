export default (editor) => {

  editor.Blocks.add('code-block', {
    label: "Code Block",
    content: {
      tagName: "pre",
      attributes: {
        "class": "prettyprint linenums"
      },
      style: {
        "min-height": "20px"
      },
      type: "text",
      script: function() {
        const init = () => {
          PR.prettyPrint();
        }
        if (typeof PR === "undefined") {
          if (document.querySelectorAll(".prettyprint-js").length === 0) {
            const prettyprint = document.createElement("script");
            prettyprint.className = "prettyprint-js";
            prettyprint.src = "https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.js";
            prettyprint.onload = init; 
            document.body.appendChild(prettyprint);
          }
        } else {
          init();
        }
      },
      styles: `
pre .str, code .str { color: #65B042; } /* string  - green */
pre .kwd, code .kwd { color: #E28964; } /* keyword - dark pink */
pre .com, code .com { color: #AEAEAE; font-style: italic; } /* comment - gray */
pre .typ, code .typ { color: #89bdff; } /* type - light blue */
pre .lit, code .lit { color: #3387CC; } /* literal - blue */
pre .pun, code .pun { color: #fff; } /* punctuation - white */
pre .pln, code .pln { color: #fff; } /* plaintext - white */
pre .tag, code .tag { color: #89bdff; } /* html/xml tag    - light blue */
pre .atn, code .atn { color: #bdb76b; } /* html/xml attribute name  - khaki */
pre .atv, code .atv { color: #65B042; } /* html/xml attribute value - green */
pre .dec, code .dec { color: #3387CC; } /* decimal - blue */

pre.prettyprint, code.prettyprint {
	background-color: none;
}

pre.prettyprint {
	width: 95%;
	margin: 1em auto;
	padding: 1em;
	white-space: pre-wrap;
}

ol.linenums { margin-top: 0; margin-bottom: 0; color: #AEAEAE; } /* IE indents via margin-left */

@media print {
  pre .str, code .str { color: #060; }
  pre .kwd, code .kwd { color: #006; font-weight: bold; }
  pre .com, code .com { color: #600; font-style: italic; }
  pre .typ, code .typ { color: #404; font-weight: bold; }
  pre .lit, code .lit { color: #044; }
  pre .pun, code .pun { color: #440; }
  pre .pln, code .pln { color: #000; }
  pre .tag, code .tag { color: #006; font-weight: bold; }
  pre .atn, code .atn { color: #404; }
  pre .atv, code .atv { color: #060; }
}
      `
    }
  });
}
