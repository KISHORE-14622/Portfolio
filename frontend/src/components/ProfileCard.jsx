import React from 'react'
import './ProfileCard.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import profileImg from '../assets/profile.jpeg'

const ProfileCard = () => {
    return (
        <div className="profile-card-wrapper">
            <div className="profile-card-modern">
                {/* Profile Image */}
                <div className="profile-image-container">
                    <img src={profileImg} alt="Kishore Kumar Profile" className="profile-image" />
                    <div className="profile-image-glow"></div>
                </div>

                {/* Profile Info */}
                <div className="profile-info">
                    <h1 className="profile-name">Kishore Kumar</h1>
                    <h2 className="profile-title">Web Developer</h2>
                </div>

                {/* Bio */}
                <div className="profile-bio-text">
                    <p>
                        It takes monumental improvement for us to change how we live our lives. Design is the way we access that improvement.
                    </p>
                </div>

                {/* Social Links */}
                <div className="profile-social-modern">
                    <a target="_blank" href="https://www.linkedin.com/in/your-profile" rel="noreferrer" className="social-link">
                        <FaLinkedin />
                    </a>
                    <a target="_blank" href="https://github.com/your-username" rel="noreferrer" className="social-link">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
