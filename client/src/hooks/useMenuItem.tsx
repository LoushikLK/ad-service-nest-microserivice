import {
  AiOutlineFolderAdd,
  AiOutlineFolderView,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiCategory, BiCategoryAlt } from "react-icons/bi";
import { BsBuildings } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineViewGridAdd,
} from "react-icons/hi";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import {
  MdOutlineCategory,
  MdOutlineLiveHelp,
  MdOutlineReviews,
} from "react-icons/md";
import { RiLockPasswordLine, RiUserSettingsLine } from "react-icons/ri";

const useMenuItem = () => [
  {
    _id: "1",
    title: "Dashboard",
    route: "/admin",
    icon: <BiCategoryAlt className="text-xl" />,
  },
  {
    _id: "2",
    title: "Users",
    icon: <HiOutlineUsers className="text-xl" />,
    submenus: [
      {
        _id: "2-0",
        route: "/admin/users",
        title: "Dashboard",
        icon: <BiCategory className="text-lg" />,
      },
      {
        _id: "2-1",
        route: "/admin/users/manage-users",
        title: "Manage Users",
        icon: <RiUserSettingsLine className="text-lg" />,
      },
      {
        _id: "2-2",
        route: "/admin/users/free-demo",
        title: "Free Demo Products",
        icon: <HiOutlineShoppingBag className="text-lg" />,
      },
      {
        _id: "2-3",
        route: "/admin/users/request-product",
        title: "Requested Products",
        icon: <HiOutlineShoppingCart className="text-lg" />,
      },
    ],
  },
  {
    _id: "3",
    title: "Domain",
    icon: <HiOutlineViewGridAdd className="text-xl" />,
    submenus: [
      {
        _id: "3-0",
        route: "/admin/category",
        title: "Dashboard",
        icon: <BiCategory className="text-lg" />,
      },
      {
        _id: "3-1",
        route: "/admin/domain/categories",
        title: "Categories",
        icon: <MdOutlineCategory className="text-lg" />,
      },
      {
        _id: "3-2",
        route: "/admin/domain/departments",
        title: "Departments",
        icon: <HiOutlineBuildingOffice className="text-lg" />,
      },
      {
        _id: "3-3",
        route: "/admin/domain/industries",
        title: "Industries",
        icon: <BsBuildings className="text-lg" />,
      },
    ],
  },
  {
    _id: "4",
    title: "Products",
    icon: <HiOutlineShoppingCart className="text-xl" />,
    submenus: [
      {
        _id: "4-0",
        route: "/admin/products",
        title: "Dashboard",
        icon: <BiCategory className="text-lg" />,
      },
      {
        _id: "4-1",
        route: "/admin/products/manage-products",
        title: "Manage Product",
        icon: <RiUserSettingsLine className="text-lg" />,
      },
      {
        _id: "4-2",
        route: "/admin/products/add-product",
        title: "Add Product",
        icon: <AiOutlineFolderAdd className="text-lg" />,
      },
      {
        _id: "4-3",
        route: "/admin/products/view-product",
        title: "View Product",
        icon: <AiOutlineFolderView className="text-lg" />,
      },
    ],
  },
  {
    _id: "5",
    title: "Queries",
    route: "/admin/queries",
    icon: <MdOutlineLiveHelp className="text-xl" />,
  },
  {
    _id: "6",
    title: "Reviews",
    route: "/admin/reviews",
    icon: <MdOutlineReviews className="text-xl" />,
  },
  {
    _id: "7",
    title: "Settings",
    icon: <AiOutlineSetting className="text-xl" />,
    submenus: [
      {
        _id: "7-0",
        route: "/admin/profile",
        title: "My Profile",
        icon: <CgProfile />,
      },
      {
        _id: "7-1",
        route: "/admin/notifications",
        title: "Notifications",
        icon: <IoNotificationsOutline />,
      },
      {
        _id: "7-2",
        route: "/admin/change-password",
        title: "Change Password",
        icon: <RiLockPasswordLine />,
      },
    ],
  },
];

export default useMenuItem;
