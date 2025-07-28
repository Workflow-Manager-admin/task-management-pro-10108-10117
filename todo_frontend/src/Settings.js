import React from 'react';
import './Settings.css';

/*
  PUBLIC_INTERFACE
  Settings screen component based on the provided Figma design reference.
  Renders user profile info, a list of settings options with icons and right arrows.
*/
function Settings() {
  return (
    <div className="settings-root">
      <div className="settings-statusbar">
        <span className="settings-time">9:41</span>
        <span className="settings-icons">
          <span role="img" aria-label="wifi">📶</span>
          <span role="img" aria-label="battery">🔋</span>
        </span>
      </div>
      <header className="settings-header-main">
        <span className="settings-icon-star">
          <svg width="32" height="32"><circle cx="16" cy="16" r="14" fill="#FFD700" /></svg>
        </span>
        <div>
          <span className="settings-header-label">Templates</span>
          <span className="settings-header-title">Settings</span>
        </div>
      </header>
      <div className="settings-profile">
        <span className="settings-avatar">
          {/* Placeholder for avatar image */}
          <img src="https://placehold.co/80x80?text=👤" alt="Avatar" />
          <span className="edit-avatar-btn" title="Edit">
            <svg width="18" height="18">
              <rect x="1" y="6" width="13" height="4" fill="#321f68" />
              <rect x="10" y="2" width="4" height="12" fill="#e87a41"/>
            </svg>
          </span>
        </span>
        <div className="settings-profile-info">
          <span className="settings-profile-name">Lucas Scott</span>
          <span className="settings-profile-username">@lucasscott3</span>
        </div>
      </div>
      <main>
        <nav className="settings-list">
          <SettingsItem title="Saved Messages" />
          <SettingsDivider />
          <SettingsItem title="Recent Calls" />
          <SettingsDivider />
          <SettingsItem title="Devices" />
          <SettingsDivider />
          <SettingsItem title="Notifications" />
          <SettingsDivider />
          <SettingsItem title="Appearance" />
          <SettingsDivider />
          <SettingsItem title="Language" />
          <SettingsDivider />
          <SettingsItem title="Privacy & Security" />
          <SettingsDivider />
          <SettingsItem title="Storage" />
        </nav>
      </main>
    </div>
  );
}

function SettingsItem({ title }) {
  return (
    <div className="settings-item">
      <div className="settings-item-title">{title}</div>
      <div className="settings-item-right">
        {/* Simple arrow right icon */}
        <svg width="16" height="16"><polyline points="4,4 12,8 4,12" fill="none" stroke="#c5c5c5" strokeWidth="2"/></svg>
      </div>
    </div>
  );
}

function SettingsDivider() {
  return (
    <div className="settings-divider" />
  );
}

export default Settings;
