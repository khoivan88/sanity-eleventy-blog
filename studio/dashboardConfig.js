export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '608a311d32540d73aaf73d10',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-2ejgcxaq',
                  apiId: '95ea8a4a-544d-4e79-b3ff-1d476d1d0255'
                },
                {
                  buildHookId: '608a311d409e8d6cfef39707',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-b6zhbepo',
                  apiId: '974c39a5-bc59-4f6b-88f4-d3e1e71ed890'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/khoivan88/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-b6zhbepo.netlify.app', category: 'apps'}
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
