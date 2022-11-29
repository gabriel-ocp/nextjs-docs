import nextra from 'nextra';
import remarkDefinitionList from 'remark-definition-list';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  // ...
  mdxOptions: {
    remarkPlugins: [ remarkDefinitionList ],
    rehypePlugins: [ ],   
  },
});

export default withNextra();
