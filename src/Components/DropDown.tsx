import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CurrencyFlag from "react-currency-flags";

interface Currency {
  currencyCode: string;
  currencyName: string;
}

interface CurrencySelectProps {
  currencies: Currency[];
  label: string;
  currencyCode:string;
  onChange: (currencyCode: string) => void;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ currencies, label, currencyCode, onChange }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);

  return (
    <Autocomplete
      id="currency-select-demo"
      sx={{ width: 300 }}
      options={currencies}
      autoHighlight
      getOptionLabel={(option) => `${option.currencyName}`}
      value={currencies.find((currency)=>currency.currencyCode==currencyCode)}
      onChange={(event, newValue) => {
        setSelectedCurrency(newValue);
        if (newValue) {
          onChange(newValue.currencyCode);
        }
      }}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: "8px",
            }}
            {...optionProps}
          >
            <CurrencyFlag currency={option.currencyCode} size="sm" />
            {option.currencyName} ({option.currencyCode})
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder="Select currency"
          InputProps={{
            ...params.InputProps,
            startAdornment: selectedCurrency && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CurrencyFlag currency={selectedCurrency.currencyCode} size="sm" />
                <span>{selectedCurrency.currencyCode}</span>
              </Box>
            ),
          }}
        />
      )}
    />
  );
};

export default CurrencySelect;
