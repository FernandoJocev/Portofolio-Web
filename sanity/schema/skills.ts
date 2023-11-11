import { defineType } from 'sanity'

export default defineType({
  name: 'skills',
  type: 'document',
  title: 'Skills',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'string',
      title: 'Image',
    },
    {
      name: 'year',
      type: 'string',
      title: 'Year',
    },
  ],
})
