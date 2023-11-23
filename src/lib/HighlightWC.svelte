<script>
    import { onMount } from "svelte";

    onMount(() => {
        import("$lib/highlight-autonomous.js");
    });

    import { trim } from "$lib/util.js";

    /** @type {string} */
    export let code = "";
</script>

<highlight-autonomous><pre><code>{trim(code)}</code></pre></highlight-autonomous>
