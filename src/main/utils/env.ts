
function getRunEnv(): 'development' {
  return process.env.NODE_ENV as any
}

export function isDevelopment(): boolean {
  return getRunEnv() === 'development';
}