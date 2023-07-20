import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'yellow chen出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'TianJin U T',
          title: '天津理工大学',
          href: 'https://www.tjut.edu.cn/',
          blankTarget: true,
        },
        {
          key: 'Hua Xin College',
          title: '华信软件学院',
          href: 'https://github.com/huohaiwei',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined />
              yellow chen
            </>
          ),
          href: 'https://github.com/huohaiwei',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
