if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`,
  );

  console.warn("请使用pnpm安装依赖! mr.zhangxinxin");
  process.exit(1);
}
