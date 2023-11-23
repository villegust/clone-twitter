interface Data {
  id: number;
  profilePic: string;
  username: string;
  name: string;
  posted: string;
  postText: string;
  postImg: string;
  comments: number;
  reposts: number;
  likes: number;
  views: number;
}

interface Trends {
  name: string;
  totalPosts: number;
}

// interface ModalProps {
//     modalOpen: boolean;
//     setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
//     setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
//     setMessageUser: React.Dispatch<React.SetStateAction<string>>;
//     setTemporaryUser: React.Dispatch<React.SetStateAction<string>>;
//   }

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

interface SidebarProfileProps {
  isOpen?: boolean;
  onClose: () => void;
  body?: React.ReactElement;
  disabled?: boolean;
}

interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

interface LoginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface LogoutModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
