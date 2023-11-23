<script>
    import hljs from "highlight.js";
    import { trim } from "$lib/util.js";
    import "$css/highlight.css";

    /** @type {string} */
    export let code = "";

    /** @type {'html'|'css'} */
    export let language = "html";
</script>

<pre><code>{@html hljs.highlight(trim(code), { language }).value}</code></pre>
