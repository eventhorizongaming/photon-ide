export function setTheme(theme) {
  // Update the css variables
  for (const property in theme.cssVars) {
    document.documentElement.style.setProperty(`--${property}`, theme.cssVars[property]);
  }

  window.monacoTheme = theme.monacoTheme;
}
