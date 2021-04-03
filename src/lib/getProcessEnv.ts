import 'dotenv/config';

export const getProcessEnv = (key: string): string => {
  const value: string = process.env[key] as string;
  return value;
}