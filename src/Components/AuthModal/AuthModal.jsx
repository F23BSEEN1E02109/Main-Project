import React, { useState } from 'react';
import { useLanguage } from '../../i18n.js';

const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const { t } = useLanguage();
  const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg('');
    setSuccessMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    // LocalStorage se existing users retrieve karein
    const existingUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');

    if (authMode === 'signup') {
      // 1. Passwords match validation
      if (formData.password !== formData.confirmPassword) {
        setErrorMsg(t('passwords_do_not_match') || 'Passwords do not match');
        return;
      }

      // 2. Email duplication check
      const userExists = existingUsers.some((u) => u.email.toLowerCase() === formData.email.toLowerCase());
      if (userExists) {
        setErrorMsg('User with this email already exists!');
        return;
      }

      // 3. New User Object Create aur Save (ONLY Save, No Auto-Login)
      const newUser = {
        fullName: formData.fullName,
        email: formData.email.toLowerCase(),
        password: formData.password
      };

      existingUsers.push(newUser);
      localStorage.setItem('registered_users', JSON.stringify(existingUsers));
      
      setSuccessMsg('Account created successfully! Please sign in now.');

      // Form inputs reset
      setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
      
      // Auto switch to Sign In tab after 1 second
      setTimeout(() => {
        setAuthMode('signin');
        setSuccessMsg('');
      }, 1200);

    } else {
      // Sign In Logic (Only yahan par login session save hoga)
      const foundUser = existingUsers.find(
        (u) => u.email.toLowerCase() === formData.email.toLowerCase() && u.password === formData.password
      );

      if (!foundUser) {
        setErrorMsg('Invalid email or password!');
        return;
      }

      const sessionUser = { name: foundUser.fullName, email: foundUser.email };

      // Save active session only on Sign In
      localStorage.setItem('currentUser', JSON.stringify(sessionUser));
      localStorage.setItem('user', JSON.stringify(sessionUser));
      
      setSuccessMsg('Logged in successfully!');

      // Form inputs reset
      setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
      
      setTimeout(() => {
        if (onLoginSuccess) onLoginSuccess(sessionUser);
        onClose();
      }, 800);
    }
  };

  const switchTab = (mode) => {
    setAuthMode(mode);
    setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
    setErrorMsg('');
    setSuccessMsg('');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#0c0d0e] border border-amber-400/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-white overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-amber-400 transition-colors p-1"
          aria-label="Close Modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header & Tabs */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">
            {authMode === 'signin' ? (t('sign_in') || 'Sign In') : (t('sign_up') || 'Sign Up')}
          </h2>

          <div className="flex bg-[#16181a] p-1 rounded-xl border border-gray-800">
            <button
              type="button"
              onClick={() => switchTab('signin')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                authMode === 'signin'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('sign_in') || 'Sign In'}
            </button>
            <button
              type="button"
              onClick={() => switchTab('signup')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                authMode === 'signup'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('sign_up') || 'Sign Up'}
            </button>
          </div>
        </div>

        {/* Error / Success Notifications */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-xs text-center font-medium">
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/50 text-green-400 text-xs text-center font-medium">
            {successMsg}
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Sign Up Specific Field */}
          {authMode === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                {t('full_name') || 'Full Name'}
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded-xl bg-[#16181a] border border-gray-800 text-white focus:border-amber-400 focus:outline-none text-sm"
              />
            </div>
          )}

          {/* Email Address */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              {t('email_address') || 'Email Address'}
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-xl bg-[#16181a] border border-gray-800 text-white focus:border-amber-400 focus:outline-none text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              {t('password') || 'Password'}
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-[#16181a] border border-gray-800 text-white focus:border-amber-400 focus:outline-none text-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-400"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {showPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.007 10.007 0 014.122-.863c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m-6.16-6.161a3 3 0 104.243 4.243" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Confirm Password (Sign Up Only) */}
          {authMode === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                {t('confirm_password') || 'Confirm Password'}
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-[#16181a] border border-gray-800 text-white focus:border-amber-400 focus:outline-none text-sm"
              />
            </div>
          )}

          {/* Action Button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-amber-400 text-black font-bold rounded-xl text-sm hover:bg-amber-500 transition-all shadow-lg hover:shadow-amber-400/20 cursor-pointer"
          >
            {authMode === 'signin' ? (t('sign_in') || 'Sign In') : (t('create_account') || 'Create Account')}
          </button>

        </form>

      </div>
    </div>
  );
};

export default AuthModal;