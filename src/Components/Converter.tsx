import CurrencySelect from './DropDown.tsx'
import { useQuery } from '@tanstack/react-query';
import { fetchCurrencies, convertCurrency } from '../lib/apiCalls/currencyApi.ts';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Converter = () => {
  const { t, i18n } = useTranslation();
  const { data: currencies, isLoading, isError } = useQuery({
    queryKey: ["currencies"],
    queryFn: fetchCurrencies,
  });

  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [quoteCurrency, setQuoteCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [prevConversionRate, setPrevConversionRate] = useState(1.0);

  const { data: conversionRate = 1.0, isLoading: isRateLoading, isError: isRateError, error: rateError } = useQuery({
    queryKey: ["conversionRate", baseCurrency, quoteCurrency],
    queryFn: () => convertCurrency(baseCurrency, quoteCurrency),
    staleTime: 10 * 60 * 1000,
    select: (data) => data?.convertedAmount ?? 1.0,
    retry: 1,
  });

  useEffect(() => {
    if (!isRateLoading && !isRateError && conversionRate !== undefined) {
      setPrevConversionRate(conversionRate);
    }
  }, [conversionRate, isRateLoading, isRateError]);

  const convertedAmount = amount * prevConversionRate;

  if (isLoading) return <p>Loading currencies...</p>;
  if (isError) return <p>Error loading currencies</p>;

  return (
    <>
      <div className="absolute top-4 right-4">
        <button
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'fi' : 'en')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {t("changeLanguage")}
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[60vw] h-[40vh] bg-gray-50 rounded-3xl border-4 border-blue-100">
          <div className='flex flex-col gap-10 m-10 align-items'>
            <div className='flex justify-between'>
              <CurrencySelect
                currencies={currencies} 
                label={t("baseCurrency")} 
                currencyCode={baseCurrency}
                onChange={setBaseCurrency} 
              />
              <TextField 
                id="outlined-number"
                label={t("amount")}
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                type="number"/>
            </div>
            <div className='flex justify-center'>
              <ArrowUpDown />
            </div>
            <div className='flex justify-between'>
              <CurrencySelect 
                currencies={currencies} 
                label={t("quoteCurrency")} 
                currencyCode={quoteCurrency}
                onChange={setQuoteCurrency} 
              />
              <TextField 
                id="outlined-number"
                label={t("convertedAmount")}
                value={convertedAmount.toFixed(5)}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                type="number"/>
            </div>
          </div>
        </div>
      </div>
      {isRateError && (
        <Snackbar open={true} autoHideDuration={6000}>
          <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
            {rateError.message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Converter;
