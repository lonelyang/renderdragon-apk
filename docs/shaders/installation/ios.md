# 在 iOS 上安装

## 使用 Filza

::: warning 需要越狱
访问和修改 Minecraft 游戏文件需要越狱.如果您的设备尚未越狱, 请遵循 [modified IPA method](#using-modified-IPA) 方法.
:::

<YTEmbed url="https://www.youtube.com/embed/WS_xEI4xOJ4?si=rndA8K0Ss8i2Lg9I&amp;start=150" aspect="1.78"/>

1. 首先, 安装 [Filza](https://filzadownload.com/).
2. 进入 `var\containers\Bundle\Application\Minecraft\minecraftpe.app\data\renderer\materials`.
3. 备份 `materials` 文件夹.如果不这样做, 你将无法删除着色器.
4. 选择着色器包中的材质文件并复制它们.
5. 返回之前的位置, 用复制的着色器文件替换 material.bin 文件.

要删除着色器, 只需将备份的旧 material.bin 文件复制并粘贴到该位置即可.

## 使用修改后的 IPA

在此方法中, 你必须首先解压缩 Minecraft IPA, 并用着色器包内的文件替换其 material.bin 文件.然后, 您需要侧载修改后的 IPA.

::: info 无在线多人游戏
侧载的 Minecraft IPA 不支持在线多人游戏.不过有一些变通方法可以让它正常工作, 但你必须自己找出这些方法. 
:::

### 提取 IPA

**1. 在 Windows 系统中, 你可以使用 iMazing 提取 IPA.具体方法如下:** 
1. 首先, 安装 [iMazing](https://imazing.com/?gad=1&gclid=Cj0KCQjwoK2mBhDzARIsADGbjeoNt1rkkKWWJVaawEFnsUmV3QjthBa3UjxAL7h_cefyqWyxDuxRis8aAvGIEALw_wcB).
2. 通过 USB 将 iPhone 连接到电脑.
3. 安装好 iMazing 后, 点击 "继续免费试用", 然后进入 "应用程序管理".
4. 右键单击 Minecraft 并点击 "安装 .IPA".
5. 解压缩后, 使用 Bandizip 等程序(或任何可以处理压缩文件的程序)打开文件.
6. 导航至 `Payload\minecraft.app\data\renderer\materials`.
7. 用下载的 material.bin 着色器文件替换现有的 material.bin 着色器文件.
8. 最后, 将威廉与重新加载到您的设备上.

**2. 在 iOS 上:**
1. 从 AppStore 安装 ES File Explorer.
2. 查找并在线下载 Minecraft IPA.
3. 使用 ES File Explorer 将`.ipa`扩展名更改为`.zip`扩展名.
4. 解压缩`.zip`文件.
5. 下载要安装的着色器的 iOS material.bin 文件.
6. 将 material.bin 文件复制粘贴到解压缩文件夹内的 `/Payload/minecraft.app/data/renderer/materials` 位置.
7. 压缩 Payload 文件夹.
8. 将 `Payload.zip` 重命名为 `Payload.ipa`.
9. 现在将修改后的 IPA 附带加载到你的设备上.

### 非官方安装 IPA

**1. 在电脑上使用非官方安装工具**  

可以访问外部 PC 的用户可以使用以下侧载工具:
* [AltStore](https://altstore.io)
* [Sideloadly](https://sideloadly.io)

有关安装过程, 请参阅各副加载工具提供的相应说明.

**2. 在 iOS 上使用 Scarlet**  

::: danger 未经验证
以下方法未经验证, 可能存在问题.建议您自行承担风险.
:::

1. 访问 https://usescarlet.com/
2. 向下滚动, 然后点击安装.确保点击直接安装！
3. 安装后, 进入 "设置 常规 设备和管理".你会在那里找到证书.点击它, 然后点击 "信任证书".
4. 信任证书后, 进入应用程序, 转到底部的第二个选项, 然后点击右上角的共享按钮.找到刚刚安装的 IPA 并点击它.
5. 很快就会开始下载.
6. 安装完成后, 您就可以成功打开 Minecraft 了.

> 在 iOS 16 或更高版本中, 您需要了解如何以不同方式信任配置文件.