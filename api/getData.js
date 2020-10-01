import { client } from '../plugins/contentful'

export default (pageId, state) => {
  client
    .getEntry(pageId)
    .then((entry) => {
      state.pageData = entry.fields

      setTimeout(() => {
        state.isLoading = false
      }, 1500)
    })
    .catch(() => {
      // Do nothing.
    })
}
