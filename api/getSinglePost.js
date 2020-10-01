import { client } from '../plugins/contentful'

export default (slug, state) => {
  client
    .getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
    })
    .then((entry) => {
      const data = entry.items[0].fields

      state.isLoading = false
      state.pageData = data
    })
    .catch(() => {
      // Do nothing.
    })
}
