<script>
    import { onMount } from "svelte";
    import hljs from "highlight.js";
    import styles from "$css/highlight.css?inline";
    import { trim } from "$lib/util.js";

    /** @type {HTMLDivElement} */
    let root;

    /** @type {string} */
    export let code = "";

    /** @type {'html'|'css'} */
    export let language = "html";

    const updateShadowDom = (shadowRoot, code, language) => {
        if (!shadowRoot) return;
        const highlighted = hljs.highlight(trim(code), { language }).value;
        shadowRoot.querySelector("code").innerHTML = highlighted;
    };

    onMount(() => {
        const shadowRoot = root.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `<style>${styles}</style><pre><code></code></pre>`;
        updateShadowDom(shadowRoot, code, language);
    });

    $: updateShadowDom(root?.shadowRoot, code, language);
</script>

<div bind:this={root}><pre><code>{trim(code)}</code></pre></div>

<style>
    div {
        display: contents;
    }
</style>
