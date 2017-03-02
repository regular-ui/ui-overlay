## 示例
### 基本形式

<div class="m-example"></div>

```xml
<div class="u-tooltip u-tooltip-top-left">tooltip</div>
<div class="u-tooltip u-tooltip-top-center">tooltip</div>
<div class="u-tooltip u-tooltip-top-right">tooltip</div>
<div class="u-tooltip u-tooltip-bottom-left">tooltip</div>
<div class="u-tooltip u-tooltip-bottom-center">tooltip</div>
<div class="u-tooltip u-tooltip-bottom-right">tooltip</div>
&nbsp;
<div class="u-tooltip u-tooltip-left-top">tooltip</div>
<div class="u-tooltip u-tooltip-left-center">tooltip</div>
<div class="u-tooltip u-tooltip-left-bottom">tooltip</div>
<div class="u-tooltip u-tooltip-right-top">tooltip</div>
<div class="u-tooltip u-tooltip-right-center">tooltip</div>
<div class="u-tooltip u-tooltip-right-bottom">tooltip</div>
```

### 与Overlay结合

<div class="m-example"></div>

```xml
<overlay trigger="hover" direction="top-left">
    <overlay.head><a class="u-btn">top-left</a></overlay.head>
    <overlay.body>
        <div class="u-tooltip u-tooltip-top-left">tooltip<br>more</div>
    </overlay.body>
</overlay>
<overlay trigger="hover" direction="top-center">
    <overlay.head><a class="u-btn">top-center</a></overlay.head>
    <overlay.body>
        <div class="u-tooltip u-tooltip-top-center">tooltip<br>more</div>
    </overlay.body>
</overlay>
<overlay trigger="hover" direction="top-right">
    <overlay.head><a class="u-btn">top-right</a></overlay.head>
    <overlay.body>
        <div class="u-tooltip u-tooltip-top-right">tooltip<br>more</div>
    </overlay.body>
</overlay>
<overlay trigger="hover" direction="bottom-left">
    <overlay.head><a class="u-btn">bottom-left</a></overlay.head>
    <overlay.body>
        <div class="u-tooltip u-tooltip-bottom-left">tooltip<br>more</div>
    </overlay.body>
</overlay>
<overlay trigger="hover" direction="bottom-center">
    <overlay.head><a class="u-btn">bottom-center</a></overlay.head>
    <overlay.body>
        <div class="u-tooltip u-tooltip-bottom-center">tooltip<br>more</div>
    </overlay.body>
</overlay>
<overlay trigger="hover" direction="bottom-right">
    <overlay.head><a class="u-btn">bottom-right</a></overlay.head>
    <overlay.body>
        <div class="u-tooltip u-tooltip-bottom-right">tooltip<br>more</div>
    </overlay.body>
</overlay>
<p></p>
<overlay trigger="hover" direction="left-top">
    <overlay.head><a class="u-btn">left-top</a></overlay.head>
    <overlay.body>
        <div class="u-tooltip u-tooltip-left-top">tooltip<br>more</div>
    </overlay.body>
</overlay>
<overlay trigger="hover" direction="left-center">
    <overlay.head><a class="u-btn">left-center</a></overlay.head>
    <overlay.body>
        <div class="u-tooltip u-tooltip-left-center">tooltip<br>more</div>
    </overlay.body>
</overlay>
<overlay trigger="hover" direction="left-bottom">
    <overlay.head><a class="u-btn">left-bottom</a></overlay.head>
    <overlay.body>
        <div class="u-tooltip u-tooltip-left-bottom">tooltip<br>more</div>
    </overlay.body>
</overlay>
<overlay trigger="hover" direction="right-top">
    <overlay.head><a class="u-btn">right-top</a></overlay.head>
    <overlay.body>
        <div class="u-tooltip u-tooltip-right-top">tooltip<br>more</div>
    </overlay.body>
</overlay>
<overlay trigger="hover" direction="right-center">
    <overlay.head><a class="u-btn">right-center</a></overlay.head>
    <overlay.body>
        <div class="u-tooltip u-tooltip-right-center">tooltip<br>more</div>
    </overlay.body>
</overlay>
<overlay trigger="hover" direction="right-bottom">
    <overlay.head><a class="u-btn">right-bottom</a></overlay.head>
    <overlay.body>
        <div class="u-tooltip u-tooltip-right-bottom">tooltip<br>more</div>
    </overlay.body>
</overlay>
```
