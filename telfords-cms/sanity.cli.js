import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: import.meta.env.SANITY_PROJECT_ID,
    dataset: import.meta.env.SANITY_DATASET,
  },
  deployment: {
    appId: import.meta.env.SANITY_APP_ID,
    autoUpdates: true,
  },
})
