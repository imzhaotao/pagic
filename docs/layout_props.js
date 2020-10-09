import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "Content",
        "link": "docs/content.html"
    },
    'next': {
        "title": "Themes",
        "link": "docs/themes.html"
    },
    'sidebar': [
        {
            "title": "Introduction",
            "link": "docs/introduction.html",
            "pagePath": "docs/introduction.md"
        },
        {
            "title": "Usage",
            "link": "docs/usage.html",
            "pagePath": "docs/usage.md"
        },
        {
            "title": "Config",
            "link": "docs/config.html",
            "pagePath": "docs/config.md"
        },
        {
            "title": "Content",
            "link": "docs/content.html",
            "pagePath": "docs/content.md"
        },
        {
            "title": "_layout.tsx",
            "link": "docs/layout.html",
            "pagePath": "docs/layout.md"
        },
        {
            "title": "Themes",
            "link": "docs/themes.html",
            "pagePath": "docs/themes.md"
        },
        {
            "title": "Plugins",
            "link": "docs/plugins.html",
            "pagePath": "docs/plugins.md"
        },
        {
            "title": "Deployment",
            "link": "docs/deployment.html",
            "pagePath": "docs/deployment.md"
        },
        {
            "title": "Demos",
            "link": "docs/demos.html",
            "pagePath": "docs/demos.md"
        },
        {
            "title": "Limitations",
            "link": "docs/limitations.html",
            "pagePath": "docs/limitations.md"
        }
    ],
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['en'] },
    'pagePath': "docs/layout.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/layout.html",
    'title': "_layout.tsx",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1><code>_layout.tsx</code></h1>\n<blockquote>\n<p>The content starting from this chapter is for users who need deep customization. If you simply use Pagic, you can skip directly to the <a href="./deployment.html">Deployment</a> chapter.</p>\n</blockquote>\n<p><code>_layout.tsx</code> is one of Pagic\'s core concepts.</p>\n<h2 id="what-is-_layouttsx">What is <code>_layout.tsx</code><a class="anchor" href="#what-is-_layouttsx">§</a></h2>\n<p><code>_layout.tsx</code> can be understood as Pagic\'s template file when rendering the page. All page files (<code>md/tsx</code>) will use <code>_layout.tsx</code> as the template when rendering.</p>\n<p>We might as well create a <code>_layout.tsx</code> in the previous <code>site</code> project:</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n<span class="highlighted-line">├── _layout<span class="token punctuation">.</span>tsx</span>├── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>md\n</code></pre><p>The contents of <code>_layout.tsx</code> are as follows:</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">React</span><span class="token punctuation">,</span> <span class="token maybe-class-name">PagicLayout</span> <span class="token punctuation">}</span></span> <span class="token keyword">from</span> <span class="token string">\'<a class="token url-link" href="https://deno.land/x/pagic/mod.ts">https://deno.land/x/pagic/mod.ts</a>\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token maybe-class-name">Layout</span><span class="token operator">:</span> <span class="token function-variable function">PagicLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title<span class="token punctuation">,</span> content <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charSet</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>content<span class="token punctuation">}</span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Custom _layout.tsx</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token maybe-class-name">Layout</span><span class="token punctuation">;</span>\n</code></pre>\n<p>Next we run:</p>\n<pre class="language-bash"><code class="language-bash">pagic build --serve\n</code></pre>\n<p>Then open <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a>, you can see that in addition to the title <code>Hello world</code>, there is also a paragraph <code>Custom _layout.tsx</code>, which shows that this page uses <code>_layout.tsx</code> rendered as a template.</p>\n<p>Why can we build a page without <code>_layout.tsx</code> in the previous chapter?</p>\n<p>That\'s because Pagic will use the <code>_layout.tsx</code> file in the default theme as a template by default. When we create our own <code>_layout.tsx</code>, it will overwrite the <code>_layout.tsx</code> in the theme.</p>\n<h2 id="sub-pages-and-sub-templates">Sub-pages and sub-templates<a class="anchor" href="#sub-pages-and-sub-templates">§</a></h2>\n<p>The design of <code>_layout.tsx</code> is intuitive. When we create a subdirectory, the pages in it will give priority to the use of <code>_layout.tsx</code> in that directory. Only when there is no <code>_layout.tsx</code> in the subdirectory, will the page look in the upper-level directory until you find <code>_layout.tsx</code>:</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── dist    # Output directory\n|   |── index<span class="token punctuation">.</span>html\n|   └── foo\n|       ├── index<span class="token punctuation">.</span>html\n|       └── bar\n|           └── index<span class="token punctuation">.</span>html\n<span class="highlighted-line">├── _layout<span class="token punctuation">.</span>tsx</span>├── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n|── README<span class="token punctuation">.</span>md\n└── foo\n    ├── README<span class="token punctuation">.</span>md\n    └── bar\n<span class="highlighted-line">        ├── _layout<span class="token punctuation">.</span>tsx</span>        └── README<span class="token punctuation">.</span>md\n</code></pre><p>In the above example, <code>site/foo/bar/README.md</code> will use <code>site/foo/bar/_layout.tsx</code> in the same directory as the template, and <code>site/foo/README.md</code> will Use <code>site/_layout.tsx</code> as a template.</p>\n<blockquote>\n<p>By configuring the frontMatter of page, you can skip this rule and force a template to be specified.</p>\n</blockquote>\n<h2 id="componentization">Componentization<a class="anchor" href="#componentization">§</a></h2>\n<p>Componentization is one of the important features of React. We can reuse code by splitting <code>_layout.tsx</code> into sub-components. However, in Pagic, due to the need to support rendering of <code>tsx</code> files as pages, we need to make a convention for sub-components, that is, starting with <code>_</code> are sub-components:</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── dist    # Output directory\n|   └── hello<span class="token punctuation">.</span>html\n├── _layout<span class="token punctuation">.</span>tsx\n<span class="highlighted-line">├── _sidebar<span class="token punctuation">.</span>tsx</span>├── hello<span class="token punctuation">.</span>tsx\n└── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n</code></pre><p>In the above example, <code>hello.tsx</code> will be constructed as <code>dist/hello.html</code>, and <code>_sidebar.tsx</code> will not be constructed as a page because it starts with <code>_</code>. In this way, you can split the <code>Sidebar</code> component into the <code>_sidebar.tsx</code> file, and then import it in <code>_layout.tsx</code>:</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">React</span><span class="token punctuation">,</span> <span class="token maybe-class-name">PagicLayout</span> <span class="token punctuation">}</span></span> <span class="token keyword">from</span> <span class="token string">\'<a class="token url-link" href="https://deno.land/x/pagic/mod.ts">https://deno.land/x/pagic/mod.ts</a>\'</span><span class="token punctuation">;</span>\n\n<span class="highlighted-line"><span class="token keyword">import</span> <span class="token imports"><span class="token maybe-class-name">Sidebar</span></span> <span class="token keyword">from</span> <span class="token string">\'./_sidebar.tsx\'</span><span class="token punctuation">;</span></span>\n<span class="token keyword">const</span> <span class="token maybe-class-name">Layout</span><span class="token operator">:</span> <span class="token function-variable function">PagicLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title<span class="token punctuation">,</span> content <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charSet</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n<span class="highlighted-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sidebar</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span></span>      <span class="token punctuation">{</span>content<span class="token punctuation">}</span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token maybe-class-name">Layout</span><span class="token punctuation">;</span>\n</code></pre><h2 id="props"><code>props</code><a class="anchor" href="#props">§</a></h2>\n<p>Note that in the above example, we used the <code>title</code> and <code>content</code> in <code>props</code>, so besides these two, what other <code>props</code> can be used?</p>\n<p>Please refer to the following table:</p>\n<table>\n<thead>\n<tr>\n<th>Properties</th>\n<th>Type</th>\n<th>Dependent Plugins</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>title</code></td>\n<td><code>string</code></td>\n<td><code>md</code>, <code>tsx</code></td>\n<td>The title of the page, usually put in <code>&lt;head&gt;&lt;title&gt;</code></td>\n</tr>\n<tr>\n<td><code>content</code></td>\n<td><code>string</code></td>\n<td><code>md</code>, <code>tsx</code>, <code>layout</code></td>\n<td>The content of the page, usually put in <code>&lt;body&gt;</code></td>\n</tr>\n<tr>\n<td><code>config</code></td>\n<td><code>PagicConfig</code></td>\n<td><code>init</code></td>\n<td>Pagic <strong>runtime</strong> configuration<sup><a href="#sup-1">[1]</a></sup></td>\n</tr>\n<tr>\n<td><code>pagePath</code></td>\n<td><code>string</code></td>\n<td><code>init</code></td>\n<td>Page path, such as <code>docs/README.md</code></td>\n</tr>\n<tr>\n<td><code>layoutPath</code></td>\n<td><code>string</code></td>\n<td><code>init</code></td>\n<td>The template path of the page, such as <code>docs/_layout.tsx</code></td>\n</tr>\n<tr>\n<td><code>outputPath</code></td>\n<td><code>string</code></td>\n<td><code>init</code></td>\n<td>The output path of the page, such as <code>docs/index.html</code></td>\n</tr>\n<tr>\n<td><code>sidebar</code></td>\n<td><code>ReactElement</code></td>\n<td><code>sidebar</code></td>\n<td><code>ReactElement</code> generated by the <code>sidebar</code> plugin</td>\n</tr>\n<tr>\n<td><code>toc</code></td>\n<td><code>ReactElement</code></td>\n<td><code>md</code></td>\n<td><code>ReactElement</code> generated by the <code>md</code> plugin</td>\n</tr>\n<tr>\n<td><code>prev</code></td>\n<td><code>PagePropsSidebar[0]</code></td>\n<td><code>prev_next</code></td>\n<td>Details of the previous page</td>\n</tr>\n<tr>\n<td><code>next</code></td>\n<td><code>PagePropsSidebar[0]</code></td>\n<td><code>prev_next</code></td>\n<td>Details of the next page</td>\n</tr>\n<tr>\n<td><code>script</code></td>\n<td><code>ReactElement</code></td>\n<td><code>script</code></td>\n<td><code>ReactElement</code> generated by the <code>script</code> plugin</td>\n</tr>\n<tr>\n<td><code>loading</code></td>\n<td><code>boolean</code></td>\n<td><code>script</code></td>\n<td>Whether the page loading</td>\n</tr>\n<tr>\n<td><code>ga</code></td>\n<td><code>ReactElement</code></td>\n<td><code>ga</code></td>\n<td><code>ReactElement</code> generated by the <code>ga</code> plugin</td>\n</tr>\n<tr>\n<td><code>gitalk</code></td>\n<td><code>ReactElement</code></td>\n<td><code>gitalk</code></td>\n<td><code>ReactElement</code> generated by the <code>gitalk</code> plugin</td>\n</tr>\n<tr>\n<td>Others</td>\n<td><code>any</code></td>\n<td>Third-party plugins</td>\n<td>Third-party plugins may also expand <code>props</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="static-resources">Static resources<a class="anchor" href="#static-resources">§</a></h2>\n<p>Except for the special files mentioned above, other files will be regarded as static resources and copied directly to the <code>dist</code> directory.</p>\n<p>All file name conventions are summarized as follows:</p>\n<table>\n<thead>\n<tr>\n<th>File name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Start with <code>.</code></td>\n<td>Hidden files, will be ignored</td>\n</tr>\n<tr>\n<td><code>pagic.config.ts</code> or <code>pagic.config.tsx</code></td>\n<td>Config file</td>\n</tr>\n<tr>\n<td><code>_layout.tsx</code></td>\n<td>Template file</td>\n</tr>\n<tr>\n<td><code>tsx</code> file starting with <code>_</code></td>\n<td>Subcomponent</td>\n</tr>\n<tr>\n<td>file ends with <code>md</code> or <code>tsx</code></td>\n<td>Page file</td>\n</tr>\n<tr>\n<td>Other files</td>\n<td>Static resources will be copied directly to the <code>dist</code> directory</td>\n</tr>\n</tbody>\n</table>\n<h2 id="reference-and-annotations">Reference and annotations<a class="anchor" href="#reference-and-annotations">§</a></h2>\n<ol>\n<li><span id="sup-1"></span> The <strong>runtime</strong> configuration of Pagic is slightly different from the configuration in <code>pagic.config.ts</code>.</li>\n</ol>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "/i18n.js", type: "module" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#what-is-_layouttsx">What is _layout.tsx</a></li><li><a href="#sub-pages-and-sub-templates">Sub-pages and sub-templates</a></li><li><a href="#componentization">Componentization</a></li><li><a href="#props">props</a></li><li><a href="#static-resources">Static resources</a></li><li><a href="#reference-and-annotations">Reference and annotations</a></li></ol></nav>'
        } }),
    'language': {
        "code": "en",
        "name": "English",
        "path": ""
    },
    'contentTitle': React.createElement("h1", { key: "0" },
        React.createElement("code", null, "_layout.tsx")),
    'contentText': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '\n<blockquote>\n<p>The content starting from this chapter is for users who need deep customization. If you simply use Pagic, you can skip directly to the <a href="./deployment.html">Deployment</a> chapter.</p>\n</blockquote>\n<p><code>_layout.tsx</code> is one of Pagic\'s core concepts.</p>\n<h2 id="what-is-_layouttsx">What is <code>_layout.tsx</code><a class="anchor" href="#what-is-_layouttsx">§</a></h2>\n<p><code>_layout.tsx</code> can be understood as Pagic\'s template file when rendering the page. All page files (<code>md/tsx</code>) will use <code>_layout.tsx</code> as the template when rendering.</p>\n<p>We might as well create a <code>_layout.tsx</code> in the previous <code>site</code> project:</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n<span class="highlighted-line">├── _layout<span class="token punctuation">.</span>tsx</span>├── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>md\n</code></pre><p>The contents of <code>_layout.tsx</code> are as follows:</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">React</span><span class="token punctuation">,</span> <span class="token maybe-class-name">PagicLayout</span> <span class="token punctuation">}</span></span> <span class="token keyword">from</span> <span class="token string">\'<a class="token url-link" href="https://deno.land/x/pagic/mod.ts">https://deno.land/x/pagic/mod.ts</a>\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token maybe-class-name">Layout</span><span class="token operator">:</span> <span class="token function-variable function">PagicLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title<span class="token punctuation">,</span> content <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charSet</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>content<span class="token punctuation">}</span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Custom _layout.tsx</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token maybe-class-name">Layout</span><span class="token punctuation">;</span>\n</code></pre>\n<p>Next we run:</p>\n<pre class="language-bash"><code class="language-bash">pagic build --serve\n</code></pre>\n<p>Then open <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a>, you can see that in addition to the title <code>Hello world</code>, there is also a paragraph <code>Custom _layout.tsx</code>, which shows that this page uses <code>_layout.tsx</code> rendered as a template.</p>\n<p>Why can we build a page without <code>_layout.tsx</code> in the previous chapter?</p>\n<p>That\'s because Pagic will use the <code>_layout.tsx</code> file in the default theme as a template by default. When we create our own <code>_layout.tsx</code>, it will overwrite the <code>_layout.tsx</code> in the theme.</p>\n<h2 id="sub-pages-and-sub-templates">Sub-pages and sub-templates<a class="anchor" href="#sub-pages-and-sub-templates">§</a></h2>\n<p>The design of <code>_layout.tsx</code> is intuitive. When we create a subdirectory, the pages in it will give priority to the use of <code>_layout.tsx</code> in that directory. Only when there is no <code>_layout.tsx</code> in the subdirectory, will the page look in the upper-level directory until you find <code>_layout.tsx</code>:</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── dist    # Output directory\n|   |── index<span class="token punctuation">.</span>html\n|   └── foo\n|       ├── index<span class="token punctuation">.</span>html\n|       └── bar\n|           └── index<span class="token punctuation">.</span>html\n<span class="highlighted-line">├── _layout<span class="token punctuation">.</span>tsx</span>├── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n|── README<span class="token punctuation">.</span>md\n└── foo\n    ├── README<span class="token punctuation">.</span>md\n    └── bar\n<span class="highlighted-line">        ├── _layout<span class="token punctuation">.</span>tsx</span>        └── README<span class="token punctuation">.</span>md\n</code></pre><p>In the above example, <code>site/foo/bar/README.md</code> will use <code>site/foo/bar/_layout.tsx</code> in the same directory as the template, and <code>site/foo/README.md</code> will Use <code>site/_layout.tsx</code> as a template.</p>\n<blockquote>\n<p>By configuring the frontMatter of page, you can skip this rule and force a template to be specified.</p>\n</blockquote>\n<h2 id="componentization">Componentization<a class="anchor" href="#componentization">§</a></h2>\n<p>Componentization is one of the important features of React. We can reuse code by splitting <code>_layout.tsx</code> into sub-components. However, in Pagic, due to the need to support rendering of <code>tsx</code> files as pages, we need to make a convention for sub-components, that is, starting with <code>_</code> are sub-components:</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── dist    # Output directory\n|   └── hello<span class="token punctuation">.</span>html\n├── _layout<span class="token punctuation">.</span>tsx\n<span class="highlighted-line">├── _sidebar<span class="token punctuation">.</span>tsx</span>├── hello<span class="token punctuation">.</span>tsx\n└── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n</code></pre><p>In the above example, <code>hello.tsx</code> will be constructed as <code>dist/hello.html</code>, and <code>_sidebar.tsx</code> will not be constructed as a page because it starts with <code>_</code>. In this way, you can split the <code>Sidebar</code> component into the <code>_sidebar.tsx</code> file, and then import it in <code>_layout.tsx</code>:</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">React</span><span class="token punctuation">,</span> <span class="token maybe-class-name">PagicLayout</span> <span class="token punctuation">}</span></span> <span class="token keyword">from</span> <span class="token string">\'<a class="token url-link" href="https://deno.land/x/pagic/mod.ts">https://deno.land/x/pagic/mod.ts</a>\'</span><span class="token punctuation">;</span>\n\n<span class="highlighted-line"><span class="token keyword">import</span> <span class="token imports"><span class="token maybe-class-name">Sidebar</span></span> <span class="token keyword">from</span> <span class="token string">\'./_sidebar.tsx\'</span><span class="token punctuation">;</span></span>\n<span class="token keyword">const</span> <span class="token maybe-class-name">Layout</span><span class="token operator">:</span> <span class="token function-variable function">PagicLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title<span class="token punctuation">,</span> content <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charSet</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n<span class="highlighted-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sidebar</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span></span>      <span class="token punctuation">{</span>content<span class="token punctuation">}</span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token maybe-class-name">Layout</span><span class="token punctuation">;</span>\n</code></pre><h2 id="props"><code>props</code><a class="anchor" href="#props">§</a></h2>\n<p>Note that in the above example, we used the <code>title</code> and <code>content</code> in <code>props</code>, so besides these two, what other <code>props</code> can be used?</p>\n<p>Please refer to the following table:</p>\n<table>\n<thead>\n<tr>\n<th>Properties</th>\n<th>Type</th>\n<th>Dependent Plugins</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>title</code></td>\n<td><code>string</code></td>\n<td><code>md</code>, <code>tsx</code></td>\n<td>The title of the page, usually put in <code>&lt;head&gt;&lt;title&gt;</code></td>\n</tr>\n<tr>\n<td><code>content</code></td>\n<td><code>string</code></td>\n<td><code>md</code>, <code>tsx</code>, <code>layout</code></td>\n<td>The content of the page, usually put in <code>&lt;body&gt;</code></td>\n</tr>\n<tr>\n<td><code>config</code></td>\n<td><code>PagicConfig</code></td>\n<td><code>init</code></td>\n<td>Pagic <strong>runtime</strong> configuration<sup><a href="#sup-1">[1]</a></sup></td>\n</tr>\n<tr>\n<td><code>pagePath</code></td>\n<td><code>string</code></td>\n<td><code>init</code></td>\n<td>Page path, such as <code>docs/README.md</code></td>\n</tr>\n<tr>\n<td><code>layoutPath</code></td>\n<td><code>string</code></td>\n<td><code>init</code></td>\n<td>The template path of the page, such as <code>docs/_layout.tsx</code></td>\n</tr>\n<tr>\n<td><code>outputPath</code></td>\n<td><code>string</code></td>\n<td><code>init</code></td>\n<td>The output path of the page, such as <code>docs/index.html</code></td>\n</tr>\n<tr>\n<td><code>sidebar</code></td>\n<td><code>ReactElement</code></td>\n<td><code>sidebar</code></td>\n<td><code>ReactElement</code> generated by the <code>sidebar</code> plugin</td>\n</tr>\n<tr>\n<td><code>toc</code></td>\n<td><code>ReactElement</code></td>\n<td><code>md</code></td>\n<td><code>ReactElement</code> generated by the <code>md</code> plugin</td>\n</tr>\n<tr>\n<td><code>prev</code></td>\n<td><code>PagePropsSidebar[0]</code></td>\n<td><code>prev_next</code></td>\n<td>Details of the previous page</td>\n</tr>\n<tr>\n<td><code>next</code></td>\n<td><code>PagePropsSidebar[0]</code></td>\n<td><code>prev_next</code></td>\n<td>Details of the next page</td>\n</tr>\n<tr>\n<td><code>script</code></td>\n<td><code>ReactElement</code></td>\n<td><code>script</code></td>\n<td><code>ReactElement</code> generated by the <code>script</code> plugin</td>\n</tr>\n<tr>\n<td><code>loading</code></td>\n<td><code>boolean</code></td>\n<td><code>script</code></td>\n<td>Whether the page loading</td>\n</tr>\n<tr>\n<td><code>ga</code></td>\n<td><code>ReactElement</code></td>\n<td><code>ga</code></td>\n<td><code>ReactElement</code> generated by the <code>ga</code> plugin</td>\n</tr>\n<tr>\n<td><code>gitalk</code></td>\n<td><code>ReactElement</code></td>\n<td><code>gitalk</code></td>\n<td><code>ReactElement</code> generated by the <code>gitalk</code> plugin</td>\n</tr>\n<tr>\n<td>Others</td>\n<td><code>any</code></td>\n<td>Third-party plugins</td>\n<td>Third-party plugins may also expand <code>props</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="static-resources">Static resources<a class="anchor" href="#static-resources">§</a></h2>\n<p>Except for the special files mentioned above, other files will be regarded as static resources and copied directly to the <code>dist</code> directory.</p>\n<p>All file name conventions are summarized as follows:</p>\n<table>\n<thead>\n<tr>\n<th>File name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Start with <code>.</code></td>\n<td>Hidden files, will be ignored</td>\n</tr>\n<tr>\n<td><code>pagic.config.ts</code> or <code>pagic.config.tsx</code></td>\n<td>Config file</td>\n</tr>\n<tr>\n<td><code>_layout.tsx</code></td>\n<td>Template file</td>\n</tr>\n<tr>\n<td><code>tsx</code> file starting with <code>_</code></td>\n<td>Subcomponent</td>\n</tr>\n<tr>\n<td>file ends with <code>md</code> or <code>tsx</code></td>\n<td>Page file</td>\n</tr>\n<tr>\n<td>Other files</td>\n<td>Static resources will be copied directly to the <code>dist</code> directory</td>\n</tr>\n</tbody>\n</table>\n<h2 id="reference-and-annotations">Reference and annotations<a class="anchor" href="#reference-and-annotations">§</a></h2>\n<ol>\n<li><span id="sup-1"></span> The <strong>runtime</strong> configuration of Pagic is slightly different from the configuration in <code>pagic.config.ts</code>.</li>\n</ol>'
        } }),
    'date': "2020-10-08T16:28:03.000Z",
    'updated': null,
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'blog': {
        "isPost": false,
        "isPosts": false,
        "posts": [
            {
                "pagePath": "blog/second_blog.md",
                "title": "Second Blog",
                "link": "blog/second_blog.html",
                "date": "2020-10-08T16:28:03.000Z",
                "updated": null
            },
            {
                "pagePath": "blog/first_blog.md",
                "title": "First Blog",
                "link": "blog/first_blog.html",
                "date": "2020-10-08T16:28:03.000Z",
                "updated": null
            }
        ]
    }
};
