import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames({
      cls: cls.navbar,
      additional: [className]
    })}>
      <div className={cls.links}>
        <AppLink to={"/"}>Главная</AppLink>
        <AppLink to={"/about"}>About</AppLink>
      </div>
    </div>
  )
}
