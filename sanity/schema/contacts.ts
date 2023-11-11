import { defineType } from 'sanity'

export default defineType({
  name: 'contacts',
  type: 'document',
  title: 'Contacts',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
    },
  ],
})
