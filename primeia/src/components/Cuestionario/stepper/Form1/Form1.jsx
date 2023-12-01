import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import './Form1.css';

import FormControlLabel from '@mui/material/FormControlLabel';
// 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function Form1(props) {

  

  return (
    <div className='custom-scrollbar' style={{width:'50%', maxHeight: '500px', overflowY: 'auto' }}>
        
        <Typography>
        ¿Que tanto le dedicas a tu actividad fisica durante la semana?
      </Typography>
      <RadioGroup value={props.dedicacion} onChange={props.handleDedicacionChange}  >
        <FormControlLabel  value="Poca" aria-required control={<Radio/>} label="Poca" />
        <FormControlLabel value="La Suficiente" aria-required control={<Radio />} label="La suficiente" />
        <FormControlLabel  value="Considerable" aria-required control={<Radio/>} label="Considerable" />
        <FormControlLabel value="Demasiado" aria-required control={<Radio />} label="Demasiado" />
      </RadioGroup>
      <Typography>
        ¿Posees equipo para realizar ejercicios?
      </Typography>

      <RadioGroup value={props.equipo} onChange={props.handleEquipoChange} >
        <FormControlLabel  value="dispone" aria-required control={<Radio/>} label="Sí" />
        <FormControlLabel value="no dispone" aria-required control={<Radio />} label="No" />
      </RadioGroup>
      <Typography>
        ¿Que tan estricto eres con tu dieta?
      </Typography>

      <RadioGroup  value={props.alimentacion} onChange={props.handleAlimentacionChange} >
        <FormControlLabel  value="Muy poco" aria-required control={<Radio/>} label="Muy poco" />
        <FormControlLabel  value="Poco" aria-required control={<Radio/>} label="Poco" />
        <FormControlLabel value="Considerablemente" aria-required control={<Radio />} label="Considerablemente" />
        <FormControlLabel value="Demasiado" aria-required control={<Radio />} label="Demasiado" />
      </RadioGroup>

        <Typography>
            Algo que no puedas consumir:
        </Typography>
      
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
            <TextField value={props.restricciones} onChange={props.handleRestriccionesChange}  min='20' id="outlined-basic" label="Si no hay nada, ingresa 'NADA'" variant="outlined" />
        </Box>

   
    </div>
    
  );
}