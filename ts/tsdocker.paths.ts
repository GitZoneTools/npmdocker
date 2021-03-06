import * as plugins from './tsdocker.plugins';

// directories
export let cwd = process.cwd();
export let packageBase = plugins.path.join(__dirname, '../');
export let assets = plugins.path.join(packageBase, 'assets/');
plugins.smartfile.fs.ensureDirSync(assets);
export let npmdockerFile = plugins.path.join(cwd, 'npmdocker');
