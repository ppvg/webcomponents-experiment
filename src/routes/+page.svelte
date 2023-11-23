<script>
    import { onMount } from "svelte";
    import Highlight from "$lib/Highlight.svelte";
    import ShadowHighlight from "$lib/ShadowHighlight.svelte";
    import HighlightWC from "$lib/HighlightWC.svelte";
    onMount(() => {
        import("$lib/highlight-builtin.js");
        import("$lib/highlight-autonomous.js");
    });
</script>

<svelte:head>
    <title>Highlight test</title>
</svelte:head>

<h1>Highlight test</h1>

<h2>Plain <code>{`<pre>`}</code> and <code>{`<code>`}</code></h2>
<p>Note the preseved line breaks.</p>
<pre>
    <code>
&lt;pre&gt;
    &lt;code&gt;
&amp;lt;ul&amp;gt;
    &amp;lt;li&amp;gt;Example&amp;lt;/li&amp;gt;
&amp;lt;/ul&amp;gt;
    &lt;/code&gt;
&lt;/pre&gt;
    </code>
</pre>
<p>The only way to prevent it is to remove the line breaks and whitespace between the tags and the content:</p>
<pre><code>&lt;pre&gt;&lt;code&gt;&amp;lt;ul&amp;gt;
    &amp;lt;li&amp;gt;Example&amp;lt;/li&amp;gt;
&amp;lt;/ul&amp;gt;&lt;/code&gt;&lt;/pre&gt;</code></pre>

<h2>WebComponent extending built-in <code>HTMLPreElement</code></h2>
<p>Note that this won't work in Safari without a polyfill.</p>
<pre is="highlight-builtin">
      <code>
&lt;pre is=&quot;highlight-builtin&quot;&gt;
    &lt;code&gt;
&amp;lt;ul&amp;gt;
    &amp;lt;li&amp;gt;Example&amp;lt;/li&amp;gt;
&amp;lt;/ul&amp;gt;
    &lt;/code&gt;
&lt;/pre&gt;
      </code>
</pre>

<h2>Autonomous WebComponent with shadow DOM</h2>
<highlight-autonomous>
    <pre>
        <code>
&lt;highlight-autonomous&gt;
    &lt;pre&gt;
        &lt;code&gt;
&amp;lt;ul&amp;gt;
    &amp;lt;li&amp;gt;Example&amp;lt;/li&amp;gt;
&amp;lt;/ul&amp;gt;
        &lt;/code&gt;
    &lt;/pre&gt;
&lt;/highlight-autonomous&gt;
        </code>
    </pre>
</highlight-autonomous>

<h2>Svelte + prerendered highlight.js</h2>
<p>Note that these svelte components trim the superfluous newlines from the start and end of the code snippet, so the markup doesn't have the preserved newlines issue (even with JavaScript off).</p>
<p>Also note that this is the only variant that has syntax highlighting when JavaScript is off.</p>
<Highlight
    code={`
<Highlight code={\`
<ul>
    <li>Example</li>
</ul>
\`} />
`}
/>

<h2>Svelte + highlight.js in shadow DOM</h2>
<ShadowHighlight
    code={`
<ShadowHighlight code={\`
<ul>
    <li>Example</li>
</ul>
\`} />
`}
/>

<h2>Svelte + autonomous WebComponent</h2>
<HighlightWC
    code={`
<HighlightWC code={\`
<ul>
    <li>Example</li>
</ul>
\`} />
`}
/>

<style>
    :global(body) {
        font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    h2 {
        font-size: 1.2rem;
    }
</style>
