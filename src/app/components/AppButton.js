import MobileStoreButton from 'react-mobile-store-button';
 
 
const AppButton = ()  => {
    
        const iOSUrl = 'https://play.google.com/store/apps/details?id=com.bartermate';
        return (
            <div>
                <MobileStoreButton
                  store="android"
                  url={iOSUrl}
                  linkProps={{ title: 'android Store Button' }}
                />
            </div>
        );
}

export default AppButton;