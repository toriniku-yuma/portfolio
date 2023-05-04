// vite.config.ts
import { defineConfig } from "file:///C:/Users/jasin/React/portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/jasin/React/portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  base: process.env.GITHUB_PAGES ? "portfolio" : "./",
  // この行を追加
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqYXNpblxcXFxSZWFjdFxcXFxwb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGphc2luXFxcXFJlYWN0XFxcXHBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvamFzaW4vUmVhY3QvcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IHByb2Nlc3MuZW52LkdJVEhVQl9QQUdFUyAgLy8gXHUzMDUzXHUzMDZFXHU4ODRDXHUzMDkyXHU4RkZEXHU1MkEwXG4gID8gXCJwb3J0Zm9saW9cIiAgICAgICAgICAgIC8vIFx1MzA1M1x1MzA2RVx1ODg0Q1x1MzA5Mlx1OEZGRFx1NTJBMFxuICA6IFwiLi9cIiwgICAgICAgICAgICAgICAgICAgICAvLyBcdTMwNTNcdTMwNkVcdTg4NENcdTMwOTJcdThGRkRcdTUyQTBcbiAgcGx1Z2luczogW3JlYWN0KCldLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1IsU0FBUyxvQkFBb0I7QUFDblQsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU0sUUFBUSxJQUFJLGVBQ2hCLGNBQ0E7QUFBQTtBQUFBLEVBQ0YsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUNuQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=