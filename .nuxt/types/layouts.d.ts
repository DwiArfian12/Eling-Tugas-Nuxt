import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom" | "default"
declare module "D:/Project Web/Eling-Tugas-Nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}