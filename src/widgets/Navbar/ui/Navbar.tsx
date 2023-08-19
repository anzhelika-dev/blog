import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames({
      cls: cls.Navbar,
      additional: [className]
    })}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink to={"/"}>Главная</AppLink>
        <AppLink to={"/about"}>About</AppLink>
      </div>
    </div>
  )
}
