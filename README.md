# [Live Demo on vercel (please use a vpn)](https://food-mu-drab.vercel.app/vendor)

# **Webpack Configuraion**

- Bundle `TypeScript` and `JavaScript` files using `Babel`.
- Runtime type checking in a separate process using `ForkTsCheckerWebpackPlugin`.
- Generate an `HTML` file based on a template using `HtmlWebpackPlugin`.
- Load environment variables from a `.env `file using `Dotenv`.
  - In `production` mode:
    - Minify `JavaScript` using `TerserPlugin`.
    - Minify `CSS` using `CssMinimizerPlugin`.

# **Path**

- The `PATHS` object contains paths to various directories within the application.

# **Infinity Loading Virtial List**

- The VirtualList component is a reusable React component for rendering an `infinity-loading` virtual list. It efficiently renders a large list of items by only rendering the items that are currently visible on the screen. Additionally, it provides infinity loading functionality to fetch more items as the user scrolls down the list.

```typescript
  dataLength: number;
  loadMore: () => void;
  Tile: React.FC;
```

# **Vendor Data Type**

- The `VendorPick` type is a subset of a larger data type containing various properties. It represents a specific subset of data related to `vendors` that i need.

```typescript
 type VendorPick = Pick<Data,| "id" | "rate" | ... >
```

> For a cleaner Data Type could have a `Type` directory beside Vendor Modulde it self and store the related data type in there.

# **Api Call Flow**

### Axios

- `axios` configuration is avaible at `Utils/Axios`

#### Base URL

- The base URL is defiend in `.env` file.

#### Endpoints

- an `Object` to store all endpoints accesible from `/Constnat/endpoints`

#### Thunks

- new api calls will add beside each `slide` using `createAsyncThunk`

# **Folder Structure**

```
Food:
├───config
│   └───webpack
├───public
└───src
    ├───Components
    │   ├───HOC
    │   ├───Layout
    │   └───Shared
    ├───Constants
    ├───Hooks
    ├───Pages
    │   └───Vendor
    │       └───Components
    ├───Redux
    │   └───slices
    │       └───Vendor
    ├───Styles
    ├───Types
    └───Utils
```

# **Screen Shot**

<img src="https://github.com/nmolaei7878/PartyPlan/assets/130120172/b68a2857-fc5b-490d-b1b6-e1d307e12cc7"  width="250" height="450">
