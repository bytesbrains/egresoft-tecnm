'use client'

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function SortInput() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={filters}
      sx={{ minWidth: '170px',  height:'40px'}}
      renderInput={(params) => <TextField {...params} label="Filtro" size="small" />}
    />
  );
}

const filters = ['Fecha','Sin iniciar','Iniciado'];