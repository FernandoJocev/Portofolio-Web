import { defineType } from 'sanity'

export default defineType({
  name: 'feedback',
  type: 'document',
  title: 'Feedback',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'feedback',
      type: 'string',
      title: 'Feedback',
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Feedback',
    },
  ],
})
