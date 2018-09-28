// ComponentTwo and ComponentThree are imported but never used
import { ComponentOne, ComponentTwo, ComponentThree } from './components';

function main() {
  // "ComponentOne" is the only one being used
  return <ComponentOne />;
}

export default main;
