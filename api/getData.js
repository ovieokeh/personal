import { client } from '../plugins/contentful'

export default (pageId, state) => {
  client
    .getEntry(pageId)
    .then((entry) => {
      state.isLoading = false
      state.pageData = entry.fields
    })
    .catch(() => {
      // Do nothing.
    })
}
