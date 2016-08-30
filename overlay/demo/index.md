## 示例
### 基本形式

<div class="m-example"></div>

```xml
<overlay>
    <overlay.head><a class="u-btn">head</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
```

### 触发事件

<div class="m-example"></div>

```xml
<overlay trigger="click">
    <overlay.head><a class="u-btn">click (Default)</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
<overlay trigger="dblclick">
    <overlay.head><a class="u-btn">dblclick</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
<overlay trigger="hover">
    <overlay.head><a class="u-btn">hover</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
```

### 展开方向

<div class="m-example"></div>

```xml
<overlay direction="top-left">
    <overlay.head><a class="u-btn">top-left</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
<overlay direction="top-center">
    <overlay.head><a class="u-btn">top-center</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
<overlay direction="top-right">
    <overlay.head><a class="u-btn">top-right</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
<overlay direction="bottom-left">
    <overlay.head><a class="u-btn">bottom-left (Default)</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
<overlay direction="bottom-center">
    <overlay.head><a class="u-btn">bottom-center</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
<overlay direction="bottom-right">
    <overlay.head><a class="u-btn">bottom-right</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
<p></p>
<overlay direction="left-top">
    <overlay.head><a class="u-btn">left-top</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
<overlay direction="left-center">
    <overlay.head><a class="u-btn">left-center</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
<overlay direction="left-bottom">
    <overlay.head><a class="u-btn">left-bottom</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
<overlay direction="right-top">
    <overlay.head><a class="u-btn">right-top</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
<overlay direction="right-center">
    <overlay.head><a class="u-btn">right-center</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
<overlay direction="right-bottom">
    <overlay.head><a class="u-btn">right-bottom</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
```

### 数据绑定

<div class="m-example"></div>

```xml
<overlay open={open}>
    <overlay.head><a class="u-btn u-btn-info" z-act={open}>{open ? '展开' : '收起'}</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
```

### 事件

请打开浏览器的控制台查看结果。

<div class="m-example"></div>

```xml
<overlay
    on-toggle={console.log('on-toggle:', '$event.open:', $event.open)}
    on-change={console.log('on-change:', '$event.open:', $event.open)}>
    <overlay.head><a class="u-btn u-btn-primary">head</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
```


## 案例
### 使用样式来处理hover

<div class="m-example"></div>

```xml
<overlay class="u-overlay-hover">
    <overlay.head><a class="u-btn u-btn-warning">hover</a></overlay.head>
    <overlay.body><textarea class="u-textarea">body</textarea></overlay.body>
</overlay>
```
