import { HiArrowLeft } from "react-icons/hi2";
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import {Link, useNavigate} from 'react-router-dom'

const Sidebar = () => {
	const navigate = useNavigate();
	return (
		<div className='border-r  border-slate-500 p-4   flex flex-col'>
			<div className="flex" style={{justifyContent: 'flex-start'}}>
				<button onClick={() => {navigate(-1)}} className="text-3xl py-2 px-1 text-black"><HiArrowLeft/></button>
				<SearchInput />
			</div>
			{/* <div className='divider px-3'></div> */}
			<Conversations />
		</div>
	);
};
export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;
