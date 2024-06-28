::: warning 警告

本文档为非官方文档, 可能存在错误. 
如果发现请 [在此](https://github.com/lonelyang/renderdragon-apk/issues) 报告. 

:::

# 什么是渲染龙?

RenderDragon 是 Minecraft Bedrock 的全新跨平台渲染引擎, 最初于 2019 年发布.它在 DirectX(Windows 构建), OpenGL ES(Android 构建), Metal(iOS, iPadOS 和 macOS 构建)和 Vulkan(任天堂 Switch 构建)上运行, 其特点是在引擎盖下进行了多项更改, 以提高 Minecraft [[1]](https://www.minecraft.net/en-us/article/render-dragon-and-nvidia-ray-tracing) 的性能和图形处理能力.

### 光线追踪

![Minecraft Ray Tracing](https://www.minecraft.net/content/dam/games/minecraft/screenshots/nvidia-rtx-beta-header4.jpg.transform/minecraft-image-medium/image.jpg)

RenderDragon 支持与任何 DXR 1.1 兼容的图形卡(如英伟达的 RTX 系列 GPU 或 AMD 的 RX 6000 系列或以上)进行光线追踪.不过, DXR API 并不局限于这些 GPU, 因为事实证明, RenderDragon 的光线追踪功能可以通过 DXR 仿真来实现.[[2]](https://minecraft.fandom.com/wiki/RenderDragon)

### 延迟渲染管线

![Minecraft-Deferred](https://www.minecraft.net/content/dam/games/minecraft/key-art/Render_Dragon_Banner_1170x500.png.transform/minecraft-image-medium/image.png)

延迟渲染管线(Deferred Rendering Pipeline)是 RenderDragon 的一项新功能, 目前 Minecraft 正在开发该功能.
预计它将为各种平台带来动态阴影, PBR 材质, 泛光, 色调映射和其他功能的重大图形改造.[[3]](https://www.minecraft.net/en-us/creator/article/new-render-dragon-features-creators)

<br>

_ _ _

# 开始工作

目前, Minecraft Bedrock 官方并不支持自定义着色器.
随着 RenderDragon 在 Bedrock 上的添加, 自定义HAL着色器已被移除.

下面的指南将介绍一种非官方的方法, 通过这种方法你可以为 RenderDragon 制作自定义着色器.这要感谢 [ddf8196](https://github.com/ddf8196), 他设法创建了一些用于构建自定义 RenderDragon 着色器的实用程序.

如果您和我们一样, 也希望 Minecraft Bedrock 正式支持自定义着色器, 那么请继续向本 [反馈帖子](https://feedback.minecraft.net/hc/en-us/community/posts/360077420452-3rd-party-shader-support-for-render-dragon) 投票.


### [🡪 如何构建着色器](build)
### [🡪 公用工具](utilities)
