const colors = {
  primary: "#007bff",
  secondary: "#ffc107",
  success: "#28a745",
  warning: "#dc3545",
  info: "#17a2b8",
  light: "#f8f9fa",
  dark: "#212529",
  text: "#333", // Text color for general text content
  muted: "#6c757d", // Muted text color for less prominent elements
};

const fonts = {
  sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
  serif: "Georgia, serif",
  mono: "Menlo, monospace",
  monospace:"Courier New, Bold"
};

const margins = {
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "24px",
};

const paddings = {
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "24px",
};

const breakpoints = {
  sm: "640px", // Small screens
  md: "768px", // Medium screens
  lg: "1024px", // Large screens
  xl: "1280px", // Extra large screens
};

export const globalStyles = {
  body: `
    font-family: ${fonts.sans};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${colors.text}; // Set default text color
  `,
};

export { colors, fonts, margins, paddings, breakpoints };
