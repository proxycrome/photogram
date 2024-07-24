import Layout from '@/components/layout';
import { useUserAuth } from '@/context/userAuthContext';
import { ProfileResponse } from '@/types';
import * as React from 'react';

interface IProfileProps{

}

const Profile: React.FunctionComponent<IProfileProps> = () => {
    const {user} = useUserAuth();
    const initialUserInfo: ProfileResponse = {
        id: "",
        userId: user?.uid,
        userBio: "Please update your bio...",
        photoURL: user?.photoURL ? user.photoURL : "",
        displayName: user?.displayName  ? user.displayName : "Guest_user"
    };
    const [userInfo, setUserInfo] = React.useState<ProfileResponse>(initialUserInfo);

    return (
        <Layout>
            <div className="flex justify-center">
                <div className='border max-w-3xl w-full'>
                    <h3 className='bg-slate-800 text-white text-center text-lg p-2'>Profile</h3>
                    <div className='p-8 pb-4 border-b'>
                        <div className='flex flex-row items-center pb-2 mb-2'>
                            <div className='mr-2'>
                                <img src={} alt="avatar" className='w-28 h-28 rounded-full border-2 border-slate-800 object-cover'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile;