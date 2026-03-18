# Product list with cart

### Project

This is a menu application where users can select desserts in any quantity and see the final count and price. The app adapts to any device's screen size, and all interactive elements on the page have a hover state.

### Screenshot

![](./_resources/product_list_with_cart_demo.gif)

### Links

- Live Site URL: [Product list with cart](https://tomduranti.github.io/product_list_with_cart/)

### Code highlights

- introduction of token taxonomy acting as a single source of truth for colors and spacing
- tinified jpgs to compress images' weights
- upper and lower limit for the button counter to avoid easy bugs like purchasing negative quantities or an unreasonable amount of items (e.g., 1 thousand desserts)
- use of global context to share data across different components, use of state management to keep local states truly local to avoid excessive prop drilling

```
import { useState } from 'react';
import { DessertContext } from './context/context.js';

export default function App() {

  const [dessertItems, setDessertItems] = useState([]);

  return (
    <main>
      <DessertContext.Provider value={[dessertItems, setDessertItems]}>
        //code that consumes global context
      </DessertContext.Provider>
    </main>
  )
}
```

- separation of concerns: useCustomHook and Component.jsx to separate business logic from UI

```
(GridItem.jsx)
import useGridItem from './useGridItem.js';

export default function GridItem({ image, name, description, price, id }) {

    const {
        count,
        updateCount,
    } = useGridItem(image, description, price, id)

//rest of the code
}


(useGridItem.js)
import { useContext } from 'react';
import { DessertContext } from '../../../context/context.js';

const useGridItem = (image, description, price, id) => {

    const [dessertItems, setDessertItems] = useContext(DessertContext);

    //function declarations

    return {
        count,
        updateCount,
    }

}
```

- images have: outline: 2px solid red; and outline-offset: -2px; to make the outline match images' rounded shape

### Built with

- React
- Storybook
- Semantic HTML5
- Sass
- CSS Grid
- BEM
- Responsive & adaptive design
- Mobile-first workflow

### Further enhancements
1) Full WCAG/ARIA compliance and optimal keyboard navigation
2) Navigate the whole project and perform all actions using only keyboard
