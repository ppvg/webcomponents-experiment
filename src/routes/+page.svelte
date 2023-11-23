<script>
    import { onMount } from "svelte";
    import Highlight from "$lib/Highlight.svelte";
    import ShadowHighlight from "$lib/ShadowHighlight.svelte";
    import HighlightWC from "$lib/HighlightWC.svelte";
    onMount(() => {
        import("$lib/highlight-builtin.js");
        import("$lib/highlight-autonomous.js");
    });
    let snippet = `<script>
  import ShadowHighlight from "$lib/ShadowHighlight.svelte";
  let snippet = "<p>RuntimeException: infinite loop detected.</p>";
<${'/'}script>
<label for="snippet">Snippet</label>
<textarea id="snippet" bind:value={snippet} rows="6" cols="80" />
<ShadowHighlight code={snippet} />`;
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
&amp;lt;pre&amp;gt;
    &amp;lt;code&amp;gt;
&amp;amp;lt;p&amp;amp;gt;RuntimeException: infinite loop detected.&amp;amp;lt;/p&amp;amp;gt;
    &amp;lt;/code&amp;gt;
&amp;lt;/pre&amp;gt;
    &lt;/code&gt;
&lt;/pre&gt;
    </code>
</pre>
<p>The only way to prevent it is to remove the line breaks and whitespace between the tags and the content:</p>
<pre><code>&lt;pre&gt;&lt;code&gt;&amp;lt;pre&amp;gt;
    &amp;lt;code&amp;gt;
&amp;amp;lt;p&amp;amp;gt;RuntimeException: infinite loop detected.&amp;amp;lt;/p&amp;amp;gt;
    &amp;lt;/code&amp;gt;
&amp;lt;/pre&amp;gt;&lt;/code&gt;&lt;/pre&gt;</code></pre>

<h2>WebComponent extending built-in <code>HTMLPreElement</code></h2>
<p>Note that this won't work in Safari without a polyfill.</p>
<p>Without JavaScript, this also preserves the extra line breaks.</p>
<pre is="highlight-builtin">
      <code>
&lt;pre is=&quot;highlight-builtin&quot;&gt;
    &lt;code&gt;
&amp;lt;pre is=&amp;quot;highlight-builtin&amp;quot;&amp;gt;
    &amp;lt;code&amp;gt;
&amp;amp;lt;p&amp;amp;gt;RuntimeException: infinite loop detected.&amp;amp;lt;/p&amp;amp;gt;
    &amp;lt;/code&amp;gt;
&amp;lt;/pre&amp;gt;
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
&amp;lt;highlight-autonomous&amp;gt;
    &amp;lt;pre&amp;gt;
        &amp;lt;code&amp;gt;
&amp;amp;lt;p&amp;amp;gt;RuntimeException: infinite loop detected.&amp;amp;lt;/p&amp;amp;gt;
        &amp;lt;/code&amp;gt;
    &amp;lt;/pre&amp;gt;
&amp;lt;/highlight-autonomous&amp;gt;
        &lt;/code&gt;
    &lt;/pre&gt;
&lt;/highlight-autonomous&gt;
        </code>
    </pre>
</highlight-autonomous>

<h2>Svelte + prerendered highlight.js</h2>
<p>Note that these svelte components trim the extra line breaks from the start and end of the code snippet, so the markup doesn't have the preserved newlines issue (even with JavaScript off).</p>
<p>Also note that this is the only variant that has syntax highlighting when JavaScript is off.</p>
<Highlight
    code={`
<Highlight code={\`
<Highlight code={\\\`
<p>RuntimeException: infinite loop detected.</p>
\\\`} />
\`} />
`}
/>

<h2>Svelte + highlight.js in shadow DOM</h2>
<ShadowHighlight
    code={`
<ShadowHighlight code={\`
<ShadowHighlight code={\\\`
<p>RuntimeException: infinite loop detected.</p>
\\\`} />
\`} />
`}
/>

<h2>Svelte + autonomous WebComponent</h2>
<HighlightWC
    code={`
<HighlightWC code={\`
<HighlightWC code={\\\`
<p>RuntimeException: infinite loop detected.</p>
\\\`} />
\`} />
`}
/>

<h2>Svelte + reactive content</h2>
<p>Svelte components are automatically reactive.</p>
<p>Note that the following example snippet works with <code>Highlight</code> or <code>ShadowHighlight</code>, but not <code>HighlightWC</code>. The internal Web Component doesn't update its shadow DOM when svelte updates the Web Component's real DOM children (although I'm sure that could be implemented with a <code>MutationObserver</code>).</p>
<label for="snippet">Snippet:</label>
<textarea id="snippet" bind:value={snippet} rows="6" cols="80" />
<p>Result:</p>
<ShadowHighlight code={snippet} />

<style>
    :global(body) {
        font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    h2 {
        font-size: 1.2rem;
    }
    textarea {
      display: block;
      margin-top: 1rem;
    }
</style>
