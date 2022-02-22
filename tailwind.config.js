module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
  content: [],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.9s ease-out'
      },
      screens:{
        'xs':'360px'
      }
    },
  },
  plugins: [],
}
// npx tailwindcss init --full 可取得完整預設配置檔
// 詳見 https://unpkg.com/browse/tailwindcss@2.2.16/stubs/defaultConfig.stub.js
