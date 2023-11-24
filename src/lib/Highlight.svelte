<script>
    import hljs from "highlight.js";
    import { trim } from "$lib/util.js";
    import "$css/highlight.css";

    /** @type {string} */
    export let code = "";
    $: trimmed = trim(code);

    /** @type {'html'|'css'} */
    export let language = "html";
</script>

{@html `<!--
${trimmed}
-->`}
<pre><code>{@html hljs.highlight(trimmed, { language }).value}</code></pre>
