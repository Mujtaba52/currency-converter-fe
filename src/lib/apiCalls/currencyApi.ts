import api from "..";
import { handleApiError } from "../../Utils/helperFunctions";

export const fetchCurrencies = async () => {
    try{
        const { data }  = await api.get("/currencies");
        return data;
    }
    catch(error){
        return handleApiError(error);
    }
  };


export const convertCurrency = async (baseCurrency:string, quoteCurrency:string, amount?:number) => {
    try{
        const { data } = await api.get(`/convert/${baseCurrency}/${quoteCurrency}${amount?'?amount='+amount : ''}`);
        return data;
    }catch(error){
        return handleApiError(error);
    }
    
};