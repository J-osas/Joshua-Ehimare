export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Web Design', value: 'WEB DESIGN' },
          { title: 'UI/UX Design', value: 'UI/UX DESIGN' },
          { title: 'Branding', value: 'BRANDING' },
          { title: 'SEO', value: 'SEO' },
          { title: 'Strategy', value: 'STRATEGY' }
        ]
      }
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'url',
      title: 'Live URL',
      type: 'url'
    },
    {
      name: 'isFigma',
      title: 'Is Figma Project?',
      type: 'boolean'
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    },
    {
      name: 'overview',
      title: 'Project Overview',
      type: 'text'
    },
    {
      name: 'challenge',
      title: 'The Challenge',
      type: 'text'
    },
    {
      name: 'solution',
      title: 'The Solution',
      type: 'text'
    },
    {
      name: 'role',
      title: 'My Role',
      type: 'string'
    },
    {
      name: 'timeline',
      title: 'Timeline',
      type: 'string'
    },
    {
      name: 'tools',
      title: 'Tools Used',
      type: 'string'
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
}
