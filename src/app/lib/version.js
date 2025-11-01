import { readFileSync } from 'fs';
import path from 'path';

let version = '0.0.0';

try {
  const packagePath = path.join(process.cwd(), 'package.json');
  const packageData = JSON.parse(readFileSync(packagePath, 'utf-8'));
  version = packageData.version;
} catch (error) {
  console.log('Could not read version');
}

export const APP_VERSION = version;