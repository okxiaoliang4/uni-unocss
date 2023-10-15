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