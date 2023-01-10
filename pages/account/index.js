import React from "react";
import { useState } from "react";
import { NavBar, Footer, Breadcrumbs } from "../../components";

import { useAuthContext } from "../../context/authContext";
import { useLogout } from "../../hooks/useLogout";
import RegisterModal from "../../components/Modal/registerUserModal";
import LoginModal from "../../components/Modal/loginModal";
import UserDashboard from "../../pageComponents/account/userDashboard";
import UnAuthenticatedProfile from "../../pageComponents/account/unAuthenticatedProfile";

export default function AccountPage() {
  const [isRegisterModal, setRegisterModal] = useState(false);
  const [isLoginModal, setLoginModal] = useState(false);
  const { isLoading, user } = useAuthContext();
  const { logout } = useLogout();

  if (isLoading === true) return <div>Loading...</div>;

  return (
    <main>
      <NavBar />
      <section className="mt-5 mb-[30px] myContainer">
        <Breadcrumbs text={"Хлебные крошки"} />
        {user ? (
          <UserDashboard user={user} logout={logout} />
        ) : (
          <UnAuthenticatedProfile
            setLoginModal={setLoginModal}
            setRegisterModal={setRegisterModal}
          />
        )}
      </section>
      <Footer />
      <RegisterModal setIsOpen={setRegisterModal} isOpen={isRegisterModal} />
      <LoginModal setIsOpen={setLoginModal} isOpen={isLoginModal} />
    </main>
  );
}
