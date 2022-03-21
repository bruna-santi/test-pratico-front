import { createContext, useState } from 'react';
import { IUser } from '../interfaces';

interface IContext {
  selectedUser: IUser;
  setSelectedUser: any;
  showUserDetailsModal: boolean;
  setShowUserDetailsModal: any;
  showDeleteUserModal: boolean;
  setShowDeleteUserModal: any;
  showDeleteMessage: boolean;
  setShowDeleteMessage: any;
}

export const ApplicationContext = createContext<IContext>({
  selectedUser: {name: '', email: '', website: '', phone: '', id: 0},
  setSelectedUser: '',
  showUserDetailsModal: false,
  setShowUserDetailsModal: '',
  showDeleteUserModal: false,
  setShowDeleteUserModal: '',
  showDeleteMessage: false,
  setShowDeleteMessage: '',
})

const ApplicationContextProvider: React.FC = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState<IUser>({name: '', email: '', website: '', phone: '', id: 0})
  const [showUserDetailsModal, setShowUserDetailsModal] = useState<boolean>(false)
  const [showDeleteUserModal, setShowDeleteUserModal] = useState<boolean>(false)
  const [showDeleteMessage, setShowDeleteMessage] = useState<boolean>(false)

  return (
    <ApplicationContext.Provider
      value={{
        selectedUser,
        setSelectedUser,
        showUserDetailsModal,
        setShowUserDetailsModal,
        showDeleteUserModal,
        setShowDeleteUserModal,
        showDeleteMessage,
        setShowDeleteMessage,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  )
}

export default ApplicationContextProvider;
