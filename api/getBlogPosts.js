import { client } from '../plugins/contentful'

export default (limit, state) => {
  client
    .getEntries({
      content_type: 'blogPost',
      limit,
    })
    .then((entry) => {
      const data = entry.items.map((item) => item.fields)

      state.isLoading = false
      state.pageData = data
    })
    .catch(() => {
      // Do nothing.
    })
}
