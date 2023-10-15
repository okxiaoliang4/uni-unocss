```bash
pnpm i @okxiaoliang4/unocss -D
```

```typescript
import { uniVariants } from '@okxiaoliang4/uni-unocss'

export default defineConfig({
  variants: [
    uniVariants({
      alias: {
        mpAlipay: 'ali',
        mpWeixin: 'wx',
      },
    }),
  ],
})
```

```vue
<!-- 仅在支付宝下编译 ml-2，仅在微信下编译 ml-3 -->
<view class="ali:ml-2 wx:ml-3"></view>
```