import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePermissionStore = defineStore('permission', () => {
  const permission = ref([])
  const putPermission = (newPermission) => {
    permission.value.push(...newPermission)
  }
  return { permission, putPermission }
})
