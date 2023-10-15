import type { VariantFunction } from 'unocss'
import { isApp, isAppAndroid, isAppIOS, isH5, isMp, isMpAlipay, isMpBaidu, isMpKuaishou, isMpQQ, isMpToutiao, isMpWeixin, isQuickapp, isQuickappHuawei } from '@uni-helper/uni-env'

interface Options {
  alias?: {
    app?: string
    appAndroid?: string
    appIOS?: string
    h5?: string
    mp?: string
    mpAlipay?: string
    mpBaiDu?: string
    mpKuaiShou?: string
    mpQQ?: string
    mpTouTiao?: string
    mpWeixin?: string
    quickapp?: string
    quickappHuaWei?: string
  }
}
export const uniVariants: (opt?: Options) => VariantFunction = (opt = {}) => (matcher) => {
  const alias = {
    app: 'app',
    appAndroid: 'appAndroid',
    appIOS: 'appIOS',
    h5: 'h5',
    mp: 'mp',
    mpAlipay: 'mpAlipay',
    mpBaiDu: 'mpBaiDu',
    mpKuaiShou: 'mpKuaiShou',
    mpQQ: 'mpQQ',
    mpTouTiao: 'mpTouTiao',
    mpWeixin: 'mpWeixin',
    quickapp: 'quickapp',
    quickappHuaWei: 'quickappHuaWei',
    ...opt?.alias,
  }
  const envMatch = {
    app: isApp,
    appAndroid: isAppAndroid,
    appIOS: isAppIOS,
    h5: isH5,
    mp: isMp,
    mpAlipay: isMpAlipay,
    mpBaiDu: isMpBaidu,
    mpKuaiShou: isMpKuaishou,
    mpQQ: isMpQQ,
    mpTouTiao: isMpToutiao,
    mpWeixin: isMpWeixin,
    quickapp: isQuickapp,
    quickappHuaWei: isQuickappHuawei,
  }

  if (!Object.values(alias).some(val => matcher.startsWith(`${val}:`)))
    return matcher

  const ind = matcher.indexOf(':')
  const matchKey = matcher.slice(0, ind)

  return {
    matcher: matcher.slice(ind + 1),
    handle(input) {
      if (!process.env.UNI_PLATFORM)
        return input
      if (
        Object.entries(alias).some(([key, value]) => {
          if (value === matchKey)
            return envMatch[key as keyof typeof envMatch]
          return false
        })
      ) {
        return input
      }
      else {
        input.entries = []
        return input
      }
    },
  }
}
