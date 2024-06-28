# 在 Android 上安装

## 使用 Patch(补丁) 应用

**Patch App** 是一个经过修改的 Minecraft 应用,其中包含 **MaterialBinLoader** 这是一个补丁,用于使游戏从资源包加载 RenderDragon 着色器文件 (material.bin). 

<YTEmbed url="https://www.youtube.com/embed/Q-PuE4peMHc?si=zA74SHAEHFmAMQLQ&start=110" aspect="2.32"/>

### 步骤 

::: tip 下载补丁应用
Patch App 由 YSS Group 维护.您可以从他们的官方网站下载APK文件: [yss.minecraft.pe/MinecraftPatched](https://yss.minecraft.pe/en/MinecraftPatched/)
:::

::: info 注意
Patch App 使用不同的名称 "Minecraft (Patch)" 因此,您不必卸载原来的 Minecraft. 您可以将两个app共存.
:::

1. 首先,下载并安装 Patch App. 您可以使用 [64Bit Checker](https://play.google.com/store/apps/details?id=com.danielpolish.a64bitchecker) 了解您的设备支持哪个版本.
2. 下载光影包的 Android 版本 (`.mcpack`).
3. 使用文件管理器, 使用 Minecraft (Patch) 打开 `.mcpack`  如果您的文件管理器不允许您使用其他应用程序打开文件, 请使用 [NMM File Manager](https://play.google.com/store/apps/details?id=in.mfile)
4. 成功导入包后,在全局资源中激活它.
5. 最后,重新启动Minecraft.

## 手动方式

::: warning 不推荐
对于这种方法, 需要重新安装Minecraft, 因此请确保在继续之前备份您的Minecraft世界.
:::

<YTEmbed url="https://www.youtube.com/embed/MYlnjqnFBgw?si=ZPu3BMmGxzHDME25" aspect="2.2"/>

### 获取 Minecraft APK

需要未拆分的 Minecraft APK 才能编辑. 如果您已经有一个,可以跳过以下步骤.
1. 首先,安装 [APKtool](https://maximoff.su/apktool/?lang=en).
2. 打开APKtool, 然后转到Application选项卡. 然后, 从已安装的应用程序列表中选择Minecraft, 然后选择"Antisplit".
3. 启用 "Use aapt2" 并在 "Select a signature file" 下选择 "Don't sign".
4. 现在等待APK提取过程完成.
5. 完成后, APK 文件可以在内部存储中的 `APKtool_M` 文件夹中找到.

### 替换着色器文件
获得未拆分的 Minecraft APK 后, 请继续执行以下步骤以添加着色器文件:

1. 安装 [MT Manager](https://mt2.cn/download) 通过点击网站上的蓝色(本地下载)链接.
2. 打开 MT 管理器, 在一侧打开包含未拆分的 Minecraft APK 另一侧打开包含下载的着色器包的文件夹.
3. 点击Minecraft APK并点击"查看". 在另一侧, 打开着色器包.
4. 在 APK 内部, 导航到 `assets/renderer/materials` 路径以查找原版material.bin文件.
5. 在着色器包内部, 长按material.bin文件, 单击"添加->", 然后选中"自动签名"复选框, 然后单击"确定".
6. 如果有多个 material.bin 文件, 请对每个文件重复相同的过程.
7. 返回上一级菜单, 再次选择APK文件, 然后转到"功能".
8. 选择 APK Sign, 然后单击确定.
9. 现在, 您可以安装修改后的APK, 您将看到在游戏中应用的着色器.

如果着色器文件附带了其他文件, 如 base.mcpack, 请按照下列步骤操作:

10. 选择 base.mcpack 文件, 然后单击左下角的 打开方式.选择"全部", 然后选择"我的世界"将其打开.
11. 加载资源包后, 应用资源包, 该过程将完成.
