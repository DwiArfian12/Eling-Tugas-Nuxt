import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom" | "default"
declare module "C:/Users/dwiar/OneDrive/Documents/2. Kuliah UNY Semester 2/Infinite 2023/Learning Path Web Dev/Project Akhir Serdadu Jawir/app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}