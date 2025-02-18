import { ChatBubbleOutline, DynamicFeed, MailOutline, PermIdentity, Storefront, Timeline, TrendingUp,MoneyOutlined, Report, HomeMaxOutlined} from "@mui/icons-material";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="!min-w-40 h-[calc(100vh-74px)] sticky top-16  bg-gray-800 Sahdow3d rounded-bl-3xl">
      <div className="py-5 px-3 text-teal-100  ">
        <div className="mb-1  ">
            <h3 className=" p-1 boldShab text-white  ">داشبورد</h3>
            <ul className="p-1 ">
                <Link to={'/'}>
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <HomeMaxOutlined className="ml-2 !text-[1.1rem]"/>خانه
                </li>
                </Link>
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <Timeline className="ml-2 !text-[1.1rem]"/><Link to={'/analisys'}>آنالیز</Link>
                </li>
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <TrendingUp className="ml-2 !text-[1.1rem]"/>فروش
                </li>
            </ul>
          
        </div>
        <div className="mb-1  ">
            <h3 className=" p-1 boldShab text-white  ">منو سریع</h3>
            <ul className="p-1 ">
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <PermIdentity className="ml-2 !text-[1.1rem]"/><Link to={'/userList'}>کاربران</Link>
                </li>
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <Storefront className="ml-2 !text-[1.1rem]"/><Link to={'/products'}>محصولات</Link>
                </li>
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <MoneyOutlined className="ml-2 !text-[1.1rem]"/><Link to={'/orders'}>تراکنشها</Link>
                </li>
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <Report className="ml-2 !text-[1.1rem]"/><Link to={'/reports'}>گزارشات</Link>
                </li>
            </ul>
          
        </div>
        <div className="mb-1  ">
            <h3 className=" p-1 boldShab text-white ">اعلانات</h3>
            <ul className="p-1 ">
                <li className="p-1 cursor-pointer text-sm  flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <MailOutline className="ml-2 !text-[1.1rem]"/>ایمیل
                </li>
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <DynamicFeed className="ml-2 !text-[1.1rem]"/>نظرات
                </li>
                <li className="p-1 cursor-pointer flex text-sm items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <ChatBubbleOutline className="ml-2 !text-[1.1rem]"/>پیامها
                </li>
            </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
