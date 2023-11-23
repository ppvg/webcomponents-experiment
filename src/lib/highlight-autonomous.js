import hljs from "highlight.js";
import styles from "$css/highlight.css?inline";
import { trim } from "$lib/util.js";

class HighlightAutonomous extends HTMLElement {
    constructor() {
        super();
        const pre = this.querySelector("pre");
        const code = this.querySelector("code");
        if (!pre || !code) return;
        const shadow = this.attachShadow({ mode: "open" });
        const shadowStyle = document.createElement("style");
        const shadowPre = document.createElement("pre");
        const shadowCode = document.createElement("code");
        shadowStyle.innerText = styles;
        shadowCode.innerHTML = hljs.highlight(trim(code.innerText), {
            language: "xml",
        }).value;
        shadow.appendChild(shadowStyle);
        shadow.appendChild(shadowPre);
        shadowPre.appendChild(shadowCode);
    }
}

window.customElements.define("highlight-autonomous", HighlightAutonomous);
