import { Link } from 'react-router-dom'
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
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>About</Link>
    </div>
  )
}
