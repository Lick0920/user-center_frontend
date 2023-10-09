import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Lion用户中心',
  pwa: false,
  logo: 'https://img.tukuppt.com/png_preview/00/11/78/4b3nzHK5Us.jpg!/fw/780',
  iconfontUrl: '',
};

export default Settings;
