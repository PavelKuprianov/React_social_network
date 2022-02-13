import React from 'react';
import s from "./ProfileInfo.module.css";

function ProfileInfo(props) {
    return (
        <>
            <div className={s.backImg}></div>
            <div className={s.descriptionBlock}>
                ava + desc
            </div>
        </>
    );
}

export default ProfileInfo;
