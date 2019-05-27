import HomePage from "./HomePage";

type MenuType = "MENU_ITEM" | "MENU";

interface IMenuProps {
  id: string;
  name: string;
  type: MenuType;
  path?: string;
  exact?: boolean;
  component?: any;
  onPress?: () => void;
  menuItems?: IMenuProps[];
  hidden?: boolean;
}

// tslint:disable:object-literal-sort-keys
const routes: { [key: string]: IMenuProps } = {
  home: {
    id: "home",
    name: "로그인",
    path: "/",
    exact: true,
    type: "MENU_ITEM",
    component: HomePage,
    hidden: true
  }
};

export { routes, IMenuProps, MenuType };
