module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
// npx tailwindcss init --full 可取得完整預設配置檔
// 詳見 https://unpkg.com/browse/tailwindcss@2.2.16/stubs/defaultConfig.stub.js
