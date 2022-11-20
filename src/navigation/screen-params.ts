export enum Screens {
  Home = 'welcome',
  NewTimer = 'newTimer',
}

export type RootParamList = {
  [Screens.Home]: undefined;
  [Screens.NewTimer]: undefined;
};
