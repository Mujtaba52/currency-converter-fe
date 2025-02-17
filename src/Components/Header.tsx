import Lottie from 'lottie-react';
import loadingAnimation from '../assets/loading.json';
import { useTranslation } from "react-i18next";


const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
        <div className="flex justify-center">
            <Lottie animationData={loadingAnimation} style={{ width: 100, height: 100 }} />
        </div>
        <h1 className="font-timmana text-6xl mb-20 text-white">{t("CurrencyConverter")}</h1>
    </div>
  )
}

export default Header