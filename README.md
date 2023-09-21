2023/09/01学习记录~

## 一.创建项目

```js
1.pnpm create vite: 使用vite创建项目
2.pnpm i: 安装项目依赖资源
3.pnpm run dev: 运行项目
```

![image-20230901001642222](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230901001642222.png)

运行成功~

## 二.删除掉初始化的文件与静态资源

![image-20230901001942326](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230901001942326.png)清空后的状态~

## 三.解决mian.js在ts环境下报错提示为找不到模块./App.vue或其相应的类型声明情况

![image-20230901002105732](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230901002105732.png)

```js
解决: 在vite-env.d.ts文件中追加以下代码:

/// <reference types="vite/client" />

declare module '*.vue' {
  import { Component } from 'vue'
  const component: Component
  export default component
}
```

## 四.完善项目配置

### 1.运行项目时,通过配置package.json让浏览器自动打开

```js
 "scripts": {
    + "dev": "vite --open",
  },
```

### 2.配置eslint

#### 2.1.定制eslint配置

```js
1.制定eslint配置: npx eslint --init
2.接下来会提示选项:
	How would you like to use ESLint? // 你想如何使用eslint?
    	选择:To check syntax and find problems // 检查语法病提示错误
  	 What type of modules does your project use? // 你的项目使用什么类型的模块?
		选择:JavaScript modules (import/export) // javascript模块
	 Which framework does your project use? // 项目类型
         选择: vue
	 Does your project use TypeScript? // 你的项目里是否用到了ts?
         选择: yes
	 Where does your code run? // 你的代码在哪里运行? 有两个选项 node与浏览器
         选择: browser // 浏览器
	 What format do you want your config file to be in? // 你希望你的配置文件是什么格式? 有3个选项 javascript/yaml/json
		选择: js // 配置文件为js格式
	 以上选项配置完成后,则最后还会提示一次依赖的安装与使用那个包管理器安装选项,配置完毕
```

#### 2.2.分析.eslint.cjs配置作用

```js
// 对外暴露出配置对象
module.exports = {
  // eslint运行的环境
  env: {
    browser: true, // 浏览器,
    es2021: true, // 校验es2021语法
  },

  // 规则继承
  extends: [
    'eslint:recommended', // 全部规则默认时关闭的.这个配置项将开启推荐规则,例如函数不能重名,对象不能出现重复的key
    'plugin:@typescript-eslint/recommended', // ts的语法规则
    'plugin:vue/vue3-essential', // vue3的语法规则
  ],

  // 为特定类型的文件指定处理器
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],

  // 指定解析器选项
  parserOptions: {
    ecmaVersion: 'latest', // 校验ECMA最新版本
    parser: '@typescript-eslint/parser', // 使用parser解析器
    sourceType: 'module', // 选项为script/module, 作用是检查ECMAScript模块中的语法
  },

  // eslint插件
  plugins: ['@typescript-eslint', 'vue'],

  // eslint规则
  rules: {},
};
```

#### 2.3.安装eslint插件

```
 pnpm install -D
 eslint-plugin-import
 eslint-plugin-vue
 eslint-plugin-node
 eslint-plugin-prettier
 eslint-config-prettier
 eslint-plugin-node
 @babel/eslint-parser
```

#### 2.4.修改eslint配置

```js
// @see https://eslint.bootcss.com/docs/rules/

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  /* 指定如何解析语法 */
  parser: 'vue-eslint-parser',
  /** 优先级低于 parse 的语法解析配置 */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  /* 继承已有的规则 */
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', '@typescript-eslint'],
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint（https://eslint.bootcss.com/docs/rules/）
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', // 禁止空余的多行
    'no-useless-escape': 'off', // 禁止不必要的转义字符

    // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
    '@typescript-eslint/semi': 'off',

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
    'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
  },
};
```

#### 2.5.添加eslintigonre忽略文件

```js
.eslintignore
	dist
	node_modules
```

#### 2.6.package.json文件中添加eslint运行指令

```js
  "scripts": {
    "dev": "vite --open",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    + "lint": "eslint src", // 检查src目录下的代码
    + "fix": "eslint src --fix" // 修复scr目录下的代码
  },

一般用不到..因为vscode安装了eslint插件后保存文件就会自动修复了~
```

### 3.配置prettierrc

#### 3.1.安装插件

```js
pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
```

#### 3.2.根目录下创建.prettierrc.json文件并写入如下配置

```js
{
  "singleQuote": true,
  "semi": false,
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  "trailingComma": "all",
  "tabWidth": 2
}
```

#### 3.3.添加.prettierrigonre忽略文件

```js
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

### 4.配置stylelint

#### 4.1.安装插件

```js
pnpm add
sass sass-loader
stylelint
postcss
postcss-scss
postcss-html
stylelint-config-prettier
stylelint-config-recess-order
stylelint-config-recommended-scss
stylelint-config-standard
stylelint-config-standard-vue
stylelint-scss stylelint-order
stylelint-config-standard-scss
-D
```

#### 4.2.根目录下创建.stylelintrc.cjs文件并写入如下配置

```js
// @see https://stylelint.bootcss.com/

module.exports = {
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-standard-scss', // 配置stylelint scss插件
    'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
    'stylelint-config-prettier', // 配置stylelint和prettier兼容
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  /**
   * null  => 关闭该规则
   * always => 必须
   */
  rules: {
    'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'no-empty-source': null, // 关闭禁止空源码
    'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
    'block-opening-brace-space-before': 'always', //大括号之前必须有一个空格或不能有空白符
    'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
    'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改element默认样式的时候能使用到
      },
    ],
  },
};
```

#### 4.3.添加.stylelintigonre忽略文件

```js
/node_modules/*
/dist/*
/html/*
/public/*
```

#### 4.4.在package.json文件中添加指令

```js
  "scripts": {
    "dev": "vite --open",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src",
    "fix": "eslint src --fix",
     + "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
     + "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
     + "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix"
  },
```

### 5.配置husky

#### 5.0.安装插件

```js
pnpm install husky -D
```

```js
作用: 在提交代码之前检测代码格式规范;
```

#### 5.1.执行

```js
npx husky-init // 需要先连接到远程仓库才可以
执行完之后项目目录中会生成一个.husky文件,.husky文件夹中存在一个pre-coomit钩子,这个钩子会在每次commit时会执行,
```

5.2.修改pre-commit

```js
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# npm test
+ pnpm run format // 格式化代码后才允许push,否则之前制定的规范毫无意义
```

### 6.配置commitlint

#### 6.1.安装插件

```js
pnpm add @commitlint/config-conventional @commitlint/cli -D
```

#### 6.2.创建commitlint.config.cjs并写入如下配置

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],

  // 校验规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build',
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
};
```

#### 6.3.在package.接中添加指令

```js
  "scripts": {
    "dev": "vite --open",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src",
    "fix": "eslint src --fix",
    "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
    "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
    "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix",
    "prepare": "husky install",
    + "commitlint": "commitlint --config commitlint.config.cjs -e -V"
  },
```

#### 6.4.生成commit-msg钩子

```js
运行: npx husky add .husky/commit-msg 生成钩子
```

修改为如下

```js
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# undefined // 默认

// 修改后
pnpm run commitlint // 在commit时执行钩子,并检测提交规范
```

### 7.强制规定使用那个包管理器

#### 7.1.在跟目录下创建script文件夹并创建preinstall.js文件并写入以下配置

```js
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`,
  );

  console.warn('请使用pnpm安装依赖! mr.zhangxinxin');
  process.exit(1);
}
```

#### 7.2.在package.json文件中添加指令

```js
  "scripts": {
    "dev": "vite --open",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src",
    "fix": "eslint src --fix",
    "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
    "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
    "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix",
    "prepare": "husky install",
    "commitlint": "commitlint --config commitlint.config.cjs -e -V",
    + "preinstall": "node ./scripts/preinstall.js"
  },
```

```js
团队开发项目的时候，需要统一包管理器工具,因为不同包管理器工具下载同一个依赖,可能版本不一样,导致项目出现bug问题,因此包管理器工具需要统一管理！！！

当我们使用npm或者yarn来安装包的时候，就会报错了。原理就是在install的时候会触发preinstall（npm提供的生命周期钩子）这个文件里面的代码。
```

### 8.配置项目路径别名

```js
import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
});
```

### 9.配置项目项目环境变量

#### 1.在项目根路径下创建以下3个文件并写入配置

![image-20230902180758544](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230902180758544.png)

```js
NODE_ENV = 'development'
VITE_APP_TITLE = '开发环境标题'
VITE_APP_BASE_API = '/dev-api
VITE_SERVE="http://development.com"

NODE_ENV = 'production'
VITE_APP_TITLE = '生产环境标题'
VITE_APP_BASE_API = '/dev-api
VITE_SERVE="http://production.com"

NODE_ENV = 'test'
VITE_APP_TITLE = '测试环境标题'
VITE_APP_BASE_API = '/dev-api
VITE_SERVE="http://test.com"
```

#### 2.查看当前环境

```js
console.log(import.meta.env);
```

## 五.SVG图标配置与封装

### 5.1.安装插件

```js
pnpm install vite-plugin-svg-icons -D
```

### 5.2.在vite.config.ts配置插件

```js
import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
+ import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    + createSvgIconsPlugin({
    +  iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    +  symbolId: 'icon-[dir]-[name]',
    + }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
});

```

### 5.3.入口文件中引入

```js
import { createApp } from 'vue';
import App from '@/App.vue';
+ import 'virtual:svg-icons-register';

const app = createApp(App);
app.mount('#app');
```

### 5.4.封装svg图标组件

```vue
<template>
  <div class="use-svg-icon">
    <svg :style="{ width, height }">
      <use :xlink:href="prefix + iconName" :fill="color" />
    </svg>
  </div>
</template>
<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },

  iconName: {
    type: String,
  },

  width: {
    type: Number,
    default: 50,
  },

  height: {
    type: Number,
    default: 50,
  },

  color: {
    type: String,
    default: '#f00',
  },
});
</script>

<style scoped lang="less"></style>
```

使用:

```vue
<template>
  <useSvgIcon
    :icon-name="'phone'"
    :width="100"
    :height="100"
    :color="'yellow'"
  />
</template>
<script setup lang="ts">
import useSvgIcon from './components/useSvgIcon.vue';
</script>
<style scoped></style>
```

### 5.5.svg的小坑

```js
使用fill设置颜色时,
  有时可能会不生效,
  这时候需要去svg文件中找到fill配置并删除即可;
```

### 5.6.自定义插件注册svg全局组件

```js
1.在src/components下创建index.ts并写入如下配置

import useSvgIconVue from './useSvgIcon.vue';
import { App, Component } from 'vue';

const components: { [name: string]: Component } = { useSvgIconVue };

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
  },
};
```

```js
main.ts引入此文件并写入如下配置

import { createApp } from 'vue';
import App from '@/App.vue';
import 'virtual:svg-icons-register';
+ import globalComponents from './components/index';

const app = createApp(App);
+ app.use(globalComponents);
app.mount('#app');

```
