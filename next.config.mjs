import nextra from 'nextra';
//import remarkGfm from 'remark-gfm';

//import remarkMath from 'remark-math';
//import rehypeKatex from 'rehype-katex';
import remarkDefinitionList from 'remark-definition-list';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  // ...
  mdxOptions: {
    remarkPlugins: [ /*remarkMath,*/ remarkDefinitionList ],
    rehypePlugins: [ /*rehypeKatex*/ ],   
  },
});

//module.exports = withNextra();
export default withNextra();
