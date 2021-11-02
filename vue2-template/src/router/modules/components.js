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
      redirect: 'noRedirect',
      component: 'components-demo/avatar-upload',
      name: 'AvatarUploadDemo',
      children: [
        {
          path: 'avatar-upload2',
          name: 'AvatarUploadDemo2',
          component: 'components-demo/avatar-upload',
          meta: { title: '头像上传2', roles: ['admin'] }
        },
        {
          path: 'avatar-upload3',
          name: 'AvatarUploadDemo3',
          component: 'components-demo/avatar-upload',
          meta: { title: '头像上传3', roles: ['admin'] }
        }
      ],
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
