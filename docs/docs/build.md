::: danger 危险
这是构建自定义着色器的非官方方法.
本指南中也可能存在错误.
如果发现错误, 请在 [此处](https://github.com/lonelyang/renderdragon-apk/issues) 报告.
:::
<br>

# 构建着色器

ddf8196 的 [MaterialBinTool](https://github.com/ddf8196/MaterialBinTool) 和 shaderc 是为 RenderDragon 创建自定义着色器的主要工具.
本页面将向您展示如何设置, 构建和测试自定义着色器文件.
您将使用一个包含所有必要脚本和代码的模板资源库开始工作.

## 先决条件 

* Windows: [Git](https://git-scm.com/download/win)
* Linux: [Git](https://git-scm.com/download/linux), [OpenJDK](https://openjdk.org/) 8 及更高版本 或者使用 Java

## 创建工作区

1. 克隆非官方着色器模板源文件: [RenderDragonSourceInv](https://github.com/SurvivalApparatusCommunication/RenderDragonSourceCodeInv)

::: code-group
```sh [Windows]
git clone https://github.com/SurvivalApparatusCommunication/RenderDragonSourceCodeInv
```
```sh [Linux]
git clone https://github.com/devendrn/RenderDragonSourceCodeInv
```
:::

2. 进入目录并运行设置.这将下载编译着色器文件所需的 MaterialBinTool, shaderc 和 material.json 文件.

::: code-group
```cmd [Windows]
cd RenderDragonSourceCodeInv
.\setup_build_environment.bat
```
```sh [Linux]
cd RenderDragonSourceCodeInv
./setup.sh
```
:::


## 关于源码

着色器源代码使用基于 GLSL 的 bgfx 跨平台着色器语言.
Bgfx 着色器文件使用 shaderc 编译.
您可以从 [此处](https://bkaradzic.github.io/bgfx/tools.html#shader-compiler-shaderc) 了解相关信息.

这个仓库中的源文件按以下方式排列 :
```
materials
├─ RenderChunk
|  ├─ defines.json   <optional>
│  └─ src
│     ├─ RenderChunk.fragment.sc
.     ├─ RenderChunk.vertex.sc
.     └─ RenderChunk.varying.sc
```

`materials` 目录中已经包含了大部分着色器文件的反向源代码, 您可能会用到这些文件.
你可以删除不用的源文件.
如果你想获得这里没有的材质的逆向源代码, 可以看看 [这个](https://github.com/Veka0/mcbe-shader-codebase)

您可以在 `defines.json` 文件中为标志添加宏定义规则, 这些标志不仅有On和Off值.
您可以从 `data` 目录中相应的 material.json 文件中找到材料的可用标记和值.

```json
// defines.json
{
  "flag": {
    "KeyName": {
      "Value1": ["MACRO_DEF_1"],
      "Value2": ["MACRO_DEF_2", "MACRO_DEF_3"],
      "Value3": []
    }
  }
}
```

## 构建 materials

编译的脚本可接收以下参数

```
-p   目标平台. 默认情况下为所有平台构建.
-m   要构建的材料. 默认情况下是在 src 中构建所有的材料.
-t   编译使用的线程数. 默认为 1.
```

要创建所有着色器 material, 请运行
::: code-group
```sh [Windows]
.\build.bat
```
```sh [Linux]
./build.sh
```
:::

要为指定平台单独制作某些material, 请运行:
::: code-group
```sh [Windows]
.\build.bat -m RenderChunk Sky -p Android
```
```sh [Linux]
./build.sh -m RenderChunk Sky -p Android
```
:::

::: tip 支持的平台
包括用于 `Android``Windows` 和 `iOS` 的 material 解包数据.
对于 Switch 等其他平台, 您必须手动解压其 material.bin 文件.请参阅 [这里](extra#unpack-data).

只有在 Windows 环境下才能为 "Windows" 编译.
:::

如果你想将多个平台材料文件合并为一个材料文件, 可以选择查看 [这里](extra#merged-data).

## 安装 materials

安装方法取决于您的平台.
为节省时间, 您应使用简单的复制粘贴脚本将此过程自动化.

* [参阅安装指南](../shaders/installation/start)

要在游戏中看到编辑后的更改, 您必须离开并重新加入游戏.
如果您编辑了 LegacyCubemap, 则必须重新加载整个游戏, 因为开始菜单中也使用了 LegacyCubemap.

## 调试着色器

你可以使用 PIX, RenderDoc 等免费图形调试工具来调试着色器.

### 在 Windows 上使用 PIX

这是 [下载 PIX](https://devblogs.microsoft.com/pix/download/) 的链接, 其余的您可以自己解决. 



### 在 Linux 上使用 RenderDoc

[RenderDoc](https://renderdoc.org/) 是一款免费的独立图形调试器, 它允许用户快速轻松地捕获单帧, 并对使用 Vulkan, D3D11, OpenGL, OpenGL ES 或 D3D12 的任何应用程序进行详细的检查.无论这些应用程序是在 Windows, Linux 还是 Android 系统上运行, RenderDoc 都能提供帮助.

#### 步骤:
* File > Launch application
* 添加 `mcpelauncher-ui-qt` 可执行文件的路径
* 在捕获选项中启用 "Capture Child Processes"
* 启动后进入游戏
* File > Attach to running instance
* Select `mcpelauncher-client` instance

为了调试着色器, 你需要捕获一个帧.
你可以按 PrtScrn(通常是 Print Screen)或 F12 键来开始捕获.
然后, 你可以加载捕获的帧来检查其内容.
