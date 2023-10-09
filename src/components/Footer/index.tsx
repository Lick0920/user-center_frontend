import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { bilibili_LINK } from '@/constants';

const Footer: React.FC = () => {
  const defaultMessage = 'Lion出品';
  const currentYear = new Date().getFullYear();
  const beian = '京ICP备2023001001号-1';
  const beianUrl = 'https://beian.miit.gov.cn/#/Integrated/index';
  return (
    <DefaultFooter
      // @ts-ignore
      copyright={
        <>
          {currentYear} {defaultMessage} |{' '}
          <a href={beianUrl} target="_blank" rel="noreferrer">
            {beian}
          </a>
        </>
      }
      links={[
        {
          key: 'Lion',
          title: '个人B站',
          href: bilibili_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined />
              Lion Github主页
            </>
          ),
          href: 'https://github.com/Lick0920',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
