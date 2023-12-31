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

interface EditModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

interface UserHeroProps {
  userId: string;
}

interface UserBioProps {
  userId: string;
}

interface ImageUploadProps {
  onChange: (base64: string) => void;
  label: string;
  value?: string;
  disabled?: boolean;
}

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

interface PostFeedProps {
  userId?: string;
}

interface PostItemProps {
  data: Record<string, any>;
  userId?: string;
}

interface CommentFeedProps {
  comments?: Record<string, any>[];
}

interface CommentItemProps {
  data: Record<string, any>;
}
