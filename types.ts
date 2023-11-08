interface Data {
    id: number,
    profilePic: string,
    username: string,
    name: string,
    posted: string,
    postText: string,
    postImg: string,
    comments: number,
    reposts: number,
    likes: number,
    views: number 
}

interface Trends {
    name: string,
    totalPosts: number,
}

interface ModalProps {
    modalOpen: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setMessageUser: React.Dispatch<React.SetStateAction<string>>;
  }

//   interface SidebarItemProps {
//     label: string;
//     icon: IconType;
//     href?: string;
//     onClick?: () => void;
//     auth?: boolean;
//     alert?: boolean;
//   }