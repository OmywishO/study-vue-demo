/** When your routing table is too long, you can split it into small modules **/

const componentsRouter = {
  path: '/components',
  component: 'layout',
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: '组件',
    icon: 'component'
  },
  children: [
    {
      path: 'avatar-upload',
      component: 'components-demo/avatar-upload',
      name: 'AvatarUploadDemo',
      meta: { title: '头像上传', buttons: ['add', 'export', 'upload'], roles: ['admin'] }
    },
    {
      path: 'test',
      component: 'test/index',
      name: 'test',
      meta: { title: '测试' }
    },
    {
      path: 'mixin',
      component: 'components-demo/mixin',
      name: 'ComponentMixinDemo',
      meta: { title: '组件示例' }
    }
  ]
}

export default componentsRouter
