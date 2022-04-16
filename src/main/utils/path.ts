import { join } from "path";

export function getPath(path: string) {
 return join(__dirname, path)
}