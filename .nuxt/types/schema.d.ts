import { NuxtModule } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["googleSignIn"]?: typeof import("nuxt-vue3-google-signin").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["nuxt-vue3-google-signin", Exclude<NuxtConfig["googleSignIn"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   iamAccessTokenSecret: string,

   iamRefreshTokenSecret: string,

   iamResetTokenSecret: string,

   iamVerifyTokenSecret: string,

   iamPublicUrl: string,

   iamEmailer: string,

   iamNodemailerService: string,

   iamNodemailerServiceSender: string,

   iamNodemailerServicePassword: string,

   iamNodemailerSmtpHost: string,

   iamNodemailerSmtpPort: string,

   iamNodemailerSmtpSender: string,

   iamNodemailerSmtpPassword: string,

   iamSendGridApiKey: string,

   iamSendgridSender: string,

   iamGoogleClientId: string,
  }
  interface PublicRuntimeConfig {
   iamVerifyRegistrations: string,

   iamAllowGoogleAuth: string,

   googleSignIn: {
      clientId: string,
   },
  }
}