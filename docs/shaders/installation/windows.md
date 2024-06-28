# 在 Windows 上安装 

## 使用 BetterRenderDragon

BetterRenderDragon 是 Minecraft Bedrock 的 RenderDragon 引擎的增强模组, 可让您启用延迟渲染, 禁用光线追踪以及从资源包加载 RenderDragon 着色器.

<YTEmbed url="https://www.youtube.com/embed/MjlobLd4d7s?si=B6qcMExnUtMzREYe" aspect="1.78"/>

### 步骤

1. 下载 [BetterRenderDragon.zip](https://github.com/ddf8196/BetterRenderDragon/releases/latest) 并提取它.
2. 下载着色器包并将其导入 Minecraft.
3. 使用 BetterRenderDragon 文件夹中的 `LaunchMinecraft.bat` 打开 Minecraft.每次想要使用着色器时, 都必须以这种方式启动 Minecraft.
4. 按 `F6` 打开 BetterRenderDragon 窗口, 然后启用 MaterialBinLoader 选项.
5. 激活全局资源包中的着色器并重新启动 Minecraft.


## 手动方法

1. 首先, 安装 [Bedrock Launcher](https://bedrocklauncher.github.io/). Bedrock Launcher 允许您更改 Minecraft 的版本并轻松访问游戏文件. 
2. 在 Bedrock Launcher 中, 通过选择您想要的版本来创建一个新安装, 然后播放它.如果尚未更改文件路径, 则安装将在 `C:\Users\user\AppData\Roaming\.minecraft_bedrock\versions`.
3. 在继续操作之前, 建议备份 `com.mojang` 文件夹它位于 `C:\Users\user\AppData\Local\Packages\Microsoft.MinecraftUWP_(varies for each user) \LocalState\games\com.mojang` 来防止数据丢失.
4. 现在, 转到您安装的版本文件夹, 然后导航到 `data\renderer\materials`.

::: warning 备份原版材料！
确保备份 `materials\` 文件夹里面的文件, 然后再继续下一步.否则, 您将无法还原更改.
:::
4. 将 `material.bin` 着色器文件替换为所需的着色器文件.
5. 启动 Minecraft, 您将看到应用的着色器.

如果要删除着色器, 只需将 material.bin 文件替换为之前备份的原版 material.bin 文件即可.
