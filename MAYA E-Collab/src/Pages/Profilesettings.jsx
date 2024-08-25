import {  FaBell, FaLock } from 'react-icons/fa';

const SettingsAndProfile = () => {
  return (
    <div className="flex flex-col h-screen p-4">
      {/* Profile Management */}
      <section className="flex-1 bg-gray-100 p-4 rounded-lg mb-4">
        <h2 className="text-2xl font-bold mb-4">Profile Management</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Edit Profile</h3>
          <input type="text" placeholder="Full Name" className="mb-2 p-2 rounded border border-gray-300 w-full" />
          <input type="email" placeholder="Email" className="mb-2 p-2 rounded border border-gray-300 w-full" />
          <input type="password" placeholder="Password" className="mb-2 p-2 rounded border border-gray-300 w-full" />
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
        </div>
      </section>

      {/* Account Settings */}
      <section className="flex-1 bg-gray-200 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2"><FaBell /> Notification Preferences</h3>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            Email Notifications
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            SMS Notifications
          </label>
          <h3 className="text-xl font-semibold mt-4 mb-2">Privacy Settings</h3>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            Public Profile
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" /><FaLock />
            Two-Factor Authentication
          </label>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Save Settings</button>
        </div>
      </section>
    </div>
  );
};

export default SettingsAndProfile;
