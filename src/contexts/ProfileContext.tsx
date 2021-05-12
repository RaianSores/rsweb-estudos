import React, { createContext, useState } from 'react';


type UserProfile {
    id: number;
    name: string;
}

export const ProfileContext = createContext( (props: UserProfile));

export function ProfileProvider() {
    const [profile, setProfile] = useState(false);
    return (
        <ProfileContext.Provider
            value={
 
            }
        >

        </ProfileContext.Provider>
    )
}