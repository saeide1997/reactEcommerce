import { PeopleOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const TotalUser = () => {
  const userInf = useSelector((state) => state.user.users); 
  const userLen = userInf.length

  var nf = new Intl.NumberFormat();
  return (
        <div className="!text-pink-400/60 shadow bg-gray-800 rounded-2xl w-64 h-28 m-2 sm:m-5 py-1 px-3 sm:py-3 sm:px-5 justify-center flex items-center">
        <PeopleOutlined className="!text-[50px]" />
        <div className="flex flex-col">
          <div className="text-[20px] m-2">جمع کاربران</div>
          <div className="text-[20px] mr-2">{nf.format(userLen)} نفر</div>
        </div>
      </div>
    );
};

export default TotalUser;