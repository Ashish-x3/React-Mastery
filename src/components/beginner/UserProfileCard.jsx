import PropTypes from 'prop-types';
import Nav from '../Nav';
import { useState } from 'react';
import { Edit } from 'lucide-react';

const UserProfileCard = ({ name, email, photo, about }) => {
  const [userData, setUserData] = useState({
    name: name,
    email: email,
    about: about
  });

  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Nav />
      <section className="dark:bg-slate-900 min-h-screen flex flex-col items-center justify-center">
        <span className='text-5xl text-slate-700 font-semibold dark:text-slate-300 flex flex-row gap-2'> Profile Card </span>
        <span className='my-4 text-slate-500 dark:text-slate-300'>Tap the Edit icon to customize the card</span>
        <div className="relative bg-slate-200 dark:bg-slate-800 w-80 h-auto px-4 py-6 rounded-2xl flex flex-col items-center gap-4">
          <Edit
            onClick={() => setIsEditable(!isEditable)}
            className={`absolute right-4 top-4 z-10 dark:text-slate-50 cursor-pointer transition-all ${
              isEditable ? 'animate-pulse scale-125 text-red-500' : ''
            }`}
          />

          <img
            src={photo}
            width={100}
            height={100}
            className="rounded-full bg-slate-500 p-2"
            alt="User Avatar"
          />

          {isEditable ? (
            <input
              name="name"
              className="text-4xl font-semibold text-center dark:text-slate-50 text-slate-800 bg-transparent outline-none"
              value={userData.name}
              onChange={handleChange}
            />
          ) : (
            <h1 className="text-4xl font-semibold text-center dark:text-slate-50 text-slate-800">
              {userData.name}
            </h1>
          )}

          {isEditable ? (
            <input
              name="about"
              className="text-2xl text-center font-semibold  dark:text-slate-300 text-slate-700 bg-transparent outline-none"
              value={userData.about}
              onChange={handleChange}
            />
          ) : (
            <p className="text-2xl text-center font-semibold  dark:text-slate-300 text-slate-700">
              {userData.about}
            </p>
          )}

          {isEditable ? (
            <input
              name="email"
              className="text-md w-full font-semibold text-center dark:text-slate-300 text-slate-700 bg-transparent outline-none"
              value={userData.email}
              onChange={handleChange}
            />
          ) : (
            <p className="text-md font-semibold text-center dark:text-slate-300 text-slate-700">
              {userData.email}
            </p>
          )}
        </div>
      </section>
    </>
  );
};

UserProfileCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  photo: PropTypes.string,
  about: PropTypes.string,
};

export default UserProfileCard;
