## 示例
### 基本形式

<div class="m-example"></div>

```xml
<div class="m-popover m-popover-top-left">
    <div class="popover_hd">top-left</div>
    <div class="popover_bd">popover</div>
</div>&nbsp;
<div class="m-popover m-popover-top-center">
    <div class="popover_hd">top-center</div>
    <div class="popover_bd">popover</div>
</div>&nbsp;
<div class="m-popover m-popover-top-right">
    <div class="popover_hd">top-right</div>
    <div class="popover_bd">popover</div>
</div>
<p></p>
<div class="m-popover m-popover-bottom-left">
    <div class="popover_hd">bottom-left</div>
    <div class="popover_bd">popover</div>
</div>&nbsp;
<div class="m-popover m-popover-bottom-center">
    <div class="popover_hd">bottom-center</div>
    <div class="popover_bd">popover</div>
</div>&nbsp;
<div class="m-popover m-popover-bottom-right">
    <div class="popover_hd">bottom-right</div>
    <div class="popover_bd">popover</div>
</div>
<p></p>
<div class="m-popover m-popover-left-top">
    <div class="popover_hd">left-top</div>
    <div class="popover_bd">popover</div>
</div>&nbsp;
<div class="m-popover m-popover-left-center">
    <div class="popover_hd">left-center</div>
    <div class="popover_bd">popover</div>
</div>&nbsp;
<div class="m-popover m-popover-left-bottom">
    <div class="popover_hd">left-bottom</div>
    <div class="popover_bd">popover</div>
</div>
<p></p>
<div class="m-popover m-popover-right-top">
    <div class="popover_hd">right-top</div>
    <div class="popover_bd">popover</div>
</div>&nbsp;
<div class="m-popover m-popover-right-center">
    <div class="popover_hd">right-center</div>
    <div class="popover_bd">popover</div>
</div>&nbsp;
<div class="m-popover m-popover-right-bottom">
    <div class="popover_hd">right-bottom</div>
    <div class="popover_bd">popover</div>
</div>
```

### 与Overlay结合

`top-center`, `bottom-center`, `left-center`, `right-center`这4种方向用CSS定位不太方便，不推荐使用。

<div class="m-example"></div>

```xml
<overlay direction="top-left">
    <overlay.head><a class="u-btn">top-left</a></overlay.head>
    <overlay.body>
        <div class="m-popover m-popover-top-left">
            <div class="popover_hd">top-left</div>
            <div class="popover_bd">popover</div>
        </div>
    </overlay.body>
</overlay>
<overlay direction="top-right">
    <overlay.head><a class="u-btn">top-right</a></overlay.head>
    <overlay.body>
        <div class="m-popover m-popover-top-right">
            <div class="popover_hd">top-right</div>
            <div class="popover_bd">popover</div>
        </div>
    </overlay.body>
</overlay>
<overlay direction="bottom-left">
    <overlay.head><a class="u-btn">bottom-left</a></overlay.head>
    <overlay.body>
        <div class="m-popover m-popover-bottom-left">
            <div class="popover_hd">bottom-left</div>
            <div class="popover_bd">popover</div>
        </div>
    </overlay.body>
</overlay>
<overlay direction="bottom-right">
    <overlay.head><a class="u-btn">bottom-right</a></overlay.head>
    <overlay.body>
        <div class="m-popover m-popover-bottom-right">
            <div class="popover_hd">bottom-right</div>
            <div class="popover_bd">popover</div>
        </div>
    </overlay.body>
</overlay>
<p></p>
<overlay direction="left-top">
    <overlay.head><a class="u-btn">left-top</a></overlay.head>
    <overlay.body>
        <div class="m-popover m-popover-left-top">
            <div class="popover_hd">left-top</div>
            <div class="popover_bd">popover</div>
        </div>
    </overlay.body>
</overlay>
<overlay direction="left-bottom">
    <overlay.head><a class="u-btn">left-bottom</a></overlay.head>
    <overlay.body>
        <div class="m-popover m-popover-left-bottom">
            <div class="popover_hd">left-bottom</div>
            <div class="popover_bd">popover</div>
        </div>
    </overlay.body>
</overlay>
<overlay direction="right-top">
    <overlay.head><a class="u-btn">right-top</a></overlay.head>
    <overlay.body>
        <div class="m-popover m-popover-right-top">
            <div class="popover_hd">right-top</div>
            <div class="popover_bd">popover</div>
        </div>
    </overlay.body>
</overlay>
<overlay direction="right-bottom">
    <overlay.head><a class="u-btn">right-bottom</a></overlay.head>
    <overlay.body>
        <div class="m-popover m-popover-right-bottom">
            <div class="popover_hd">right-bottom</div>
            <div class="popover_bd">popover</div>
        </div>
    </overlay.body>
</overlay>
```
