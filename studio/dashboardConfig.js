export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7adf5a598cb489d43dadd5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dj77x1u3',
                  apiId: '38c2afef-739d-4d07-9b25-bffe6be12b15'
                },
                {
                  buildHookId: '5f7adf5a04a24d73d2d971c9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cvsj2i7a',
                  apiId: 'a7f429e0-b34d-41ad-a15d-b4680935e722'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/belphcze/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cvsj2i7a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
