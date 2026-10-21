import {Link,NavLink} from "react-router-dom";

export const Header = () => {
    const navLinkClass = ({isActive}: {isActive: boolean}) =>
        isActive
    ? "text-blue-600 font-semibold"
    : "text-gray-600 hover:text-blue-600 transition-colors";

return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex item-center justify-between">
            <Link to="/" className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <span>LeaningHub</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
                <NavLink to="/" className={navLinkClass}>教材</NavLink>
                <NavLink to="/profile" className={navLinkClass}>マイページ</NavLink>
                <NavLink
                    to="/register"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                        新規登録
                    </NavLink>
            </nav>
        </div>
    </header>
)
}