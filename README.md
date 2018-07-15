## React Data Matrix

This library contains the component `DataMatrixView` that renders arbitrary content into a DataMatrix format by utilising SVG.

```bash
yarn add react-data-matrix
```

Note: This library is written in TypeScript. If you have a TypeScript codebase, too, you don't need to do manual typings.

### Example

```javascript
import * as React from 'react'
import { DataMatrixView } from 'react-data-matrix'

const myPageComponent = () => {
    const config = { rectangular: false, bitSize: 1 }

    return (
        <div>
            <h1>Some data in a matrix</h1>
            <DataMatrixView content={ 'My content as a string' } displayConfig={ config } />
        </div>
    )
}

```

### Config

The property `displayConfig` 
