# Webpack CSS modules tree shaking demo

This is demo of tree shaking for css modules with Webpack. More info about tree shaking can be found [here](https://webpack.js.org/guides/tree-shaking).

### Demo structure

```
.
├── package.json
├── babel.config.js
├── lib                            // generated bundles by webpack
│   ├── bundle.css
│   └── bundle.js
├── src
│   ├── ComponentOne               // imports a css module and export a component
│   │   ├── ComponentOne.js
│   │   └── componentone.css
│   ├── ComponentThree             // imports a css module and export a component
│   │   ├── ComponentThree.js
│   │   └── componentthree.css
│   ├── ComponentTwo               // imports a css module and export a component
│   │   ├── ComponentTwo.js
│   │   └── componenttwo.css
│   ├── components.js               // imports and exports all the components
│   └── index.js                    // imports and use certain components
└── webpack.config.js
```

#### index.js

```
// ComponentTwo and ComponentThree are imported but never used
import { ComponentOne, ComponentTwo, ComponentThree } from './components';

function main() {
  // "ComponentOne" is the only one being used
  return <ComponentOne />;
}

export default main;
```

#### bundle.css

The resulting css bundle **without tree shaking** will contain:

```
body {
  background-color: peru;
}

.componentone__root {
  color: blue;
}

.componenttwo__root {
  color: green;
}

.componentthree__root {
  color: yellow;
}
```

## Tree Shaking

### Babel

Tree shaking relies on **ES2015** module syntax. This example in written in ES6 syntax whereby Babel modules transformation has to be disabled.

```
  {
    presets: [
      require.resolve('@babel/preset-react'),
      [
        require.resolve('@babel/preset-env'),
        {
          modules: false
        }
      ]
    ]
  }
```

### Side effects

#### package.json

When the package is set with **no side effects**

```
  "sideEffects": false,
```

#### bundle.css

The resulting css bundle will contain:

```
.componentone__root {
  color: blue;
}
```

### With side effects

When **some side effects** are added to the package

#### package.json

```
  "sideEffects": [
    "./src/components.js",
    "./src/ComponentThree/ComponentThree.js",
    "./src/ComponentThree/componentthree.css"
  ],
```

#### bundle.css

The resulting css bundle will contain:

```
body {
  background-color: peru;
}

.componentthree__root {
  color: yellow;
}

.componentone__root {
  color: blue;
}
```
