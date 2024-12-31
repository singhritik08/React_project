import { Admin,Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PosterList } from "./components/posterList";
import { PosterEdit } from "./components/posterEdit";
import { PosterCreate } from "./components/posterCreate";
import { CategoryList } from "./components/categoryList";
import { CategoryEdit } from "./components/categoryEdit";
import { CategoryCreate } from "./components/categoryCreate";

const dataProvider = jsonServerProvider("https://admin-demo-aiwz.onrender.com")
const App = () => <Admin dataProvider={dataProvider}>
<Resource name="posters" list={PosterList} edit={PosterEdit} create={PosterCreate}/>
<Resource name="categories" list={CategoryList}  edit={CategoryEdit} create={CategoryCreate}/>
</Admin>;

export default App;