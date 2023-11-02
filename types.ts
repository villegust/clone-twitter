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
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }