import {StackNavigationProp} from '@react-navigation/stack';

export type AppStackParamList = {
  Status: {name: string; image: string};
};
export type StatusNavigationProps = StackNavigationProp<
  AppStackParamList,
  'Status'
>;
