export const ContainerType = {
    flexCenter: 'flex items-center',
    flexBothCenter: 'flex items-center justify-center',
    flexColCenter: 'flex-col justify-center',
    flexDefault: 'flex',
    flexBetween: 'flex items-center justify-between',
    paddedContainer: 'container px-6 py-2',
    paddedContainerAuto: 'container px-6 py-2 mx-auto',
    fullWidth: 'w-full',
    roundedUserPhoto: 'w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full',
    sideBar: 'absolute top-2 right-0 flex flex-col w-96 h-screen px-4 py-8 bg-white border-r',
};

export const NavType = {
    primary: 'bg-white shadow',
    dark: 'bg-gray-800 shadow',
};

export const TextColorType = {
    primaryLight: 'text-gray-300',
    primary: 'text-gray-700',
    primaryDark: 'text-gray-800',
    secondary: 'text-blue-400',
};


export const TypographyType = {
    brandText: `text-xl font-bold ${TextColorType.primaryDark} px-3 lg:text-2xl hover:${TextColorType.primary}`,
    nameText: `text-sm font-medium ${TextColorType.primary}`,
    xUpperText: `text-xl ${TextColorType.secondary} font-bold uppercase`,
    lgText: 'font-bold text-lg mb-2',
}

export const ImageType = {
    fullCover: 'object-cover w-full h-full',
    logoImage: 'object-cover w-9 h-9'
}
export const ButtonType = {
    blueIconWhite: 'w-5 h-5 text-white group-hover:text-blue-400',
    userContainerBtn: `${ContainerType.flexCenter} rounded hover:bg-gray-200 p-2`,
    roundedIcon: `${ContainerType.flexBothCenter} outline-none border-2 border-blue-400 rounded-full bg-blue-400 group hover:bg-white`,
    primaryTextPadded: `${TextColorType.primary} block px-4 py-2 text-sm hover:${TextColorType.primaryLight}`
};

export const CardType = {
    userDropDown: 'absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none',
    categoryCard: 'overflow-hidden bg-white rounded-lg shadow-lg',
    todoCard: 'p-4 border-b',
};

export const GridType = {
    horizontal: 'grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ',
};
