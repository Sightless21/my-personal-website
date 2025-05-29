// Color codes for terminal output
export const COLORS = {
    // Text colors
    black: "\u001b[30m",
    red: "\u001b[31m",
    green: "\u001b[32m",
    yellow: "\u001b[33m",
    blue: "\u001b[34m",
    magenta: "\u001b[35m",
    cyan: "\u001b[36m",
    white: "\u001b[37m",
    gray: "\u001b[90m",
  
    // Bright text colors
    brightRed: "\u001b[91m",
    brightGreen: "\u001b[92m",
    brightYellow: "\u001b[93m",
    brightBlue: "\u001b[94m",
    brightMagenta: "\u001b[95m",
    brightCyan: "\u001b[96m",
    brightWhite: "\u001b[97m",
  
    // Background colors
    bgBlack: "\u001b[40m",
    bgRed: "\u001b[41m",
    bgGreen: "\u001b[42m",
    bgYellow: "\u001b[43m",
    bgBlue: "\u001b[44m",
    bgMagenta: "\u001b[45m",
    bgCyan: "\u001b[46m",
    bgWhite: "\u001b[47m",
  
    // Text styles
    bold: "\u001b[1m",
    dim: "\u001b[2m",
    italic: "\u001b[3m",
    underline: "\u001b[4m",
    blink: "\u001b[5m",
    inverse: "\u001b[7m",
    hidden: "\u001b[8m",
    strikethrough: "\u001b[9m",
  
    // Reset
    reset: "\u001b[0m",
  }
  
  // Helper function to colorize text
  export function colorize(text, color) {
    return `${COLORS[color]}${text}${COLORS.reset}`
  }
  
  // Parse ANSI color codes and convert to HTML with CSS classes
  export function parseColorCodes(text) {
    if (!text || typeof text !== "string") {
      return text
    }
  
    // Map ANSI codes to CSS classes
    const ansiToCSS = {
      // Text colors
      "\u001b[30m": '<span class="text-black">',
      "\u001b[31m": '<span class="text-red-500">',
      "\u001b[32m": '<span class="text-green-500">',
      "\u001b[33m": '<span class="text-yellow-500">',
      "\u001b[34m": '<span class="text-blue-500">',
      "\u001b[35m": '<span class="text-purple-500">',
      "\u001b[36m": '<span class="text-cyan-500">',
      "\u001b[37m": '<span class="text-gray-200">',
      "\u001b[90m": '<span class="text-gray-500">',
  
      // Bright colors
      "\u001b[91m": '<span class="text-red-400">',
      "\u001b[92m": '<span class="text-green-400">',
      "\u001b[93m": '<span class="text-yellow-400">',
      "\u001b[94m": '<span class="text-blue-400">',
      "\u001b[95m": '<span class="text-purple-400">',
      "\u001b[96m": '<span class="text-cyan-400">',
      "\u001b[97m": '<span class="text-white">',
  
      // Background colors
      "\u001b[40m": '<span class="bg-black">',
      "\u001b[41m": '<span class="bg-red-500">',
      "\u001b[42m": '<span class="bg-green-500">',
      "\u001b[43m": '<span class="bg-yellow-500">',
      "\u001b[44m": '<span class="bg-blue-500">',
      "\u001b[45m": '<span class="bg-purple-500">',
      "\u001b[46m": '<span class="bg-cyan-500">',
      "\u001b[47m": '<span class="bg-gray-200">',
  
      // Text styles
      "\u001b[1m": '<span class="font-bold">',
      "\u001b[2m": '<span class="opacity-75">',
      "\u001b[3m": '<span class="italic">',
      "\u001b[4m": '<span class="underline">',
      "\u001b[9m": '<span class="line-through">',
  
      // Reset
      "\u001b[0m": "</span>",
    }
  
    // Replace ANSI codes with HTML spans
    let result = text
  
    // Handle nested color codes
    const stack = []
  
    // Replace all color codes with HTML
    Object.keys(ansiToCSS).forEach((code) => {
      const regex = new RegExp(code.replace(/\[/g, "\\["), "g")
  
      if (code === "\u001b[0m") {
        // For reset code, pop from stack if not empty
        result = result.replace(regex, () => {
          if (stack.length > 0) {
            stack.pop()
            return "</span>"
          }
          return ""
        })
      } else {
        // For other codes, push to stack
        result = result.replace(regex, () => {
          stack.push(code)
          return ansiToCSS[code]
        })
      }
    })
  
    // Close any remaining open spans
    result += "</span>".repeat(stack.length)
  
    return result
  }
  
  // Simple helper to create colored text without ANSI codes
  export function colorText(text, options = {}) {
    const { color, bg, bold, italic, underline } = options
  
    const classes = []
  
    if (color) classes.push(`text-${color}`)
    if (bg) classes.push(`bg-${bg}`)
    if (bold) classes.push("font-bold")
    if (italic) classes.push("italic")
    if (underline) classes.push("underline")
  
    const className = classes.join(" ")
  
    return `<span class="${className}">${text}</span>`
  }
  