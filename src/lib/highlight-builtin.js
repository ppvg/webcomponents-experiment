import hljs from "highlight.js";
import { trim } from "$lib/util.js";

class HighlightBuiltin extends HTMLPreElement {
    connectedCallback(e) {
        const markup = (this.querySelector("code") || this).innerText;
        const highlighted = hljs.highlight(trim(markup), {
            language: "html",
        }).value;
        this.innerHTML = `<code>${highlighted}</code>`;
    }
}

window.customElements.define("highlight-builtin", HighlightBuiltin, {
    extends: "pre",
});
